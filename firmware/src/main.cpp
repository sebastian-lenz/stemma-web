#include <Arduino.h>
#include <Adafruit_TinyUSB.h>
#include <Adafruit_NeoPixel.h>
#include <pb_encode.h>
#include <pb_decode.h>
#include "messages.pb.h"

// ── Hardware ─────────────────────────────────────────────────────────────────

static constexpr uint8_t NEOPIXEL_PIN   = 27;
static constexpr uint8_t NEOPIXEL_COUNT = 4;
static constexpr uint8_t TOUCH_PIN      = 1;

Adafruit_NeoPixel pixels(NEOPIXEL_COUNT, NEOPIXEL_PIN, NEO_GRB + NEO_KHZ800);

// ── WebUSB ────────────────────────────────────────────────────────────────────

Adafruit_USBD_WebUSB usb_web;
WEBUSB_URL_DEF(landingPage, 1 /*https*/, "example.com");

// ── Framing: 2-byte big-endian length prefix + protobuf payload ───────────────
// Max encoded size for our largest message (Command with all fields).
// nanopb generates <name>_size constants; use the largest one.
static constexpr size_t MAX_MSG_SIZE = 64;

static uint8_t rx_buf[2 + MAX_MSG_SIZE];
static size_t  rx_len = 0;

// Send a Response message back to the host.
static void send_response(const Response &resp) {
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
static void handle_command(const uint8_t *data, uint16_t len) {
    Command cmd = Command_init_zero;
    pb_istream_t stream = pb_istream_from_buffer(data, len);

    Response resp = Response_init_zero;

    if (!pb_decode(&stream, Command_fields, &cmd)) {
        resp.id      = 0;
        resp.success = false;
        send_response(resp);
        return;
    }

    resp.id      = cmd.id;
    resp.success = true;

    switch (cmd.which_payload) {
        case Command_set_pixel_tag: {
            const SetPixel &sp = cmd.payload.set_pixel;
            if (sp.index < NEOPIXEL_COUNT) {
                pixels.setPixelColor(sp.index, pixels.Color(sp.r, sp.g, sp.b));
                pixels.show();
            } else {
                resp.success = false;
            }
            break;
        }
        case Command_set_all_tag: {
            const SetAll &sa = cmd.payload.set_all;
            for (uint8_t i = 0; i < NEOPIXEL_COUNT; i++) {
                pixels.setPixelColor(i, pixels.Color(sa.r, sa.g, sa.b));
            }
            pixels.show();
            break;
        }
        case Command_get_status_tag:
            resp.which_payload          = Response_status_tag;
            resp.payload.status.pixel_count  = NEOPIXEL_COUNT;
            resp.payload.status.touch_active = (digitalRead(TOUCH_PIN) == HIGH);
            break;
    }

    send_response(resp);
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

    pixels.begin();
    pixels.setBrightness(50);
    pixels.clear();
    pixels.show();

    // pinMode(TOUCH_PIN, INPUT);

    // Wait until USB device is enumerated by the host
    while (!TinyUSBDevice.mounted()) delay(1);
}

void loop() {
    if (usb_web.connected()) {
        process_usb();
    }
}