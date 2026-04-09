#pragma once
#include "NeoPixelDevice.h"
#include <Adafruit_seesaw.h>
#include <seesaw_neopixel.h>

// Pin assignments on the NeoSlider seesaw breakout
static constexpr uint8_t LINEAR_ENCODER_NEOPIXEL_PIN = 14;
static constexpr uint8_t LINEAR_ENCODER_SLIDER_PIN   = 18;
static constexpr uint8_t LINEAR_ENCODER_PIXEL_COUNT  = 4;

class LinearEncoderDevice : public NeoPixelDevice {
public:
    explicit LinearEncoderDevice(uint8_t address)
        : _address(address),
          _pixel(LINEAR_ENCODER_PIXEL_COUNT, LINEAR_ENCODER_NEOPIXEL_PIN, NEO_GRB + NEO_KHZ800) {}

    bool begin() override {
        if (!_seesaw.begin(_address)) return false;
        _pixel.begin(_address);
        _beginPixels(LINEAR_ENCODER_PIXEL_COUNT);
        _lastValue = _seesaw.analogRead(LINEAR_ENCODER_SLIDER_PIN);
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_LINEAR_ENCODER; }
    uint8_t    getAddress() const override { return _address; }

    void handleCommand(const DeviceCommand& cmd, Response& resp) override {
        switch (cmd.which_payload) {
            case DeviceCommand_get_state_tag: {
                resp.success = true;
                resp.which_payload = Response_device_state_tag;

                auto& ds = resp.payload.device_state;
                ds.type      = DEVICE_TYPE_LINEAR_ENCODER;
                ds.address   = _address;
                ds.connected = true;
                ds.which_state = DeviceState_linear_encoder_tag;

                auto& le = ds.state.linear_encoder;
                le.brightness = _brightness;
                le.value      = _lastValue;
                le.pixels.size = LINEAR_ENCODER_PIXEL_COUNT * 3;

                for (uint8_t i = 0; i < LINEAR_ENCODER_PIXEL_COUNT; i++) {
                    uint32_t c = _rawColors[i];
                    le.pixels.bytes[i * 3]     = (c >> 16) & 0xff;
                    le.pixels.bytes[i * 3 + 1] = (c >>  8) & 0xff;
                    le.pixels.bytes[i * 3 + 2] =  c        & 0xff;
                }
                break;
            }

            default:
                if (_handleNeoPixelCommand(cmd)) {
                    resp.success = true;
                } else {
                    setError(resp, "Unknown command");
                }

                break;
        }
    }

    bool poll(Response& event) override {
        uint16_t val = _seesaw.analogRead(LINEAR_ENCODER_SLIDER_PIN);
        // Only report changes larger than the noise floor
        if (abs((int)val - (int)_lastValue) < 4) return false;
        _lastValue = val;

        event.id = 0;
        event.success = true;
        event.which_payload = Response_device_event_tag;

        auto& de = event.payload.device_event;
        de.type    = DEVICE_TYPE_LINEAR_ENCODER;
        de.address = _address;
        de.which_event = DeviceEvent_linear_changed_tag;
        de.event.linear_changed.value = val;
        return true;
    }

protected:
    void _neoSetBrightness(uint8_t b)              override { _pixel.setBrightness(b); }
    void _neoSetPixelColor(uint16_t i, uint32_t c) override { _pixel.setPixelColor(i, c); }
    void _neoShow()                                override { _pixel.show(); }

private:
    uint8_t         _address;
    Adafruit_seesaw _seesaw;
    seesaw_NeoPixel _pixel;
    uint16_t _lastValue = 0;
};
