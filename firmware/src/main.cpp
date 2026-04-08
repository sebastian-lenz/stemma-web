#include <Arduino.h>
#include <Wire.h>
#include <Adafruit_TinyUSB.h>
#include <pb_encode.h>
#include <pb_decode.h>
#include "messages.pb.h"
#include "DeviceManager.h"

// ── StemmaQT devices ──────────────────────────────────────────────────────────

static DeviceManager deviceManager;

// ── WebUSB ────────────────────────────────────────────────────────────────────

Adafruit_USBD_WebUSB usb_web;
WEBUSB_URL_DEF(landingPage, 1 /*https*/, "sebastian-lenz.github.io/stemma-web/");

// ── Framing: 2-byte big-endian length prefix + protobuf payload ───────────────
// Increased to 4096 to accommodate NFC tag read/write payloads (VCard, email).
static constexpr size_t MAX_MSG_SIZE = 4096;

static uint8_t rx_buf[2 + MAX_MSG_SIZE];
static size_t  rx_len = 0;

// Send a Response message back to the host.
static void send_response(const Response& resp) {
    uint8_t payload[MAX_MSG_SIZE];
    pb_ostream_t stream = pb_ostream_from_buffer(payload, sizeof(payload));

    if (!pb_encode(&stream, Response_fields, &resp)) {
        return; // encoding error — drop silently
    }

    uint16_t len = (uint16_t)stream.bytes_written;
    uint8_t header[2] = { (uint8_t)(len >> 8), (uint8_t)(len & 0xFF) };
    usb_web.write(header, 2);
    usb_web.write(payload, len);
    usb_web.flush();
}

// Process a fully-received Command.
// cmd/resp are static to avoid stack overflow — NFC payloads can be several KB.
static void handle_command(const uint8_t* data, uint16_t len) {
    static Command  cmd;
    static Response resp;
    cmd  = Command_init_zero;
    resp = Response_init_zero;
    pb_istream_t stream = pb_istream_from_buffer(data, len);

    if (!pb_decode(&stream, Command_fields, &cmd)) {
        resp.id      = 0;
        resp.success = false;
        send_response(resp);
        return;
    }

    resp.id      = cmd.id;
    resp.success = true;

    switch (cmd.which_payload) {
        case Command_device_command_tag: {
            if (deviceManager.handleCommand(cmd.payload.device_command, resp)) {
                send_response(resp);
            }
            break;
        }
        default:
            resp.success = false;
            send_response(resp);
            break;
    }
}

// Read bytes from WebUSB and reassemble framed messages.
static void process_usb() {
    while (usb_web.available()) {
        int byte = usb_web.read();
        if (byte < 0) break;

        rx_buf[rx_len++] = (uint8_t)byte;

        // We need at least 2 bytes for the length header
        if (rx_len < 2) continue;

        uint16_t expected = ((uint16_t)rx_buf[0] << 8) | rx_buf[1];

        // Sanity-check: if the declared length exceeds our buffer, discard
        if (expected > MAX_MSG_SIZE) {
            rx_len = 0;
            continue;
        }

        if (rx_len == (size_t)(2 + expected)) {
            handle_command(rx_buf + 2, expected);
            rx_len = 0;
        }
    }
}

// ── Arduino lifecycle ─────────────────────────────────────────────────────────

void setup() {
    usb_web.setLandingPage(&landingPage);
    usb_web.begin();

    // Initialise I2C for StemmaQT devices
    Wire.begin();

    // Wait until USB device is enumerated by the host
    while (!TinyUSBDevice.mounted()) delay(1);
}

void loop() {
    if (usb_web.connected()) {
        process_usb();

        // Poll all active StemmaQT devices and push any events to the host
        deviceManager.pollAll(send_response);

        sleep_ms(50);
    }
}
