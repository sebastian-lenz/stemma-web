#pragma once
#include "Device.h"
#include <Adafruit_seesaw.h>
#include <seesaw_neopixel.h>

// Pin assignments on the NeoSlider seesaw breakout
static constexpr uint8_t LINEAR_ENCODER_NEOPIXEL_PIN = 14;
static constexpr uint8_t LINEAR_ENCODER_SLIDER_PIN   = 18;
static constexpr uint8_t LINEAR_ENCODER_PIXEL_COUNT  = 4;

class LinearEncoderDevice : public Device {
public:
    explicit LinearEncoderDevice(uint8_t address)
        : _address(address),
          _pixel(LINEAR_ENCODER_PIXEL_COUNT, LINEAR_ENCODER_NEOPIXEL_PIN, NEO_GRB + NEO_KHZ800) {}

    bool begin() override {
        if (!_seesaw.begin(_address)) return false;
        _pixel.begin(_address);
        _pixel.setBrightness(_brightness);
        _pixel.show();
        _lastValue = _seesaw.analogRead(LINEAR_ENCODER_SLIDER_PIN);
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_LINEAR_ENCODER; }
    uint8_t    getAddress() const override { return _address; }

    bool handleCommand(const DeviceCommand& cmd, Response& resp) override {
        resp.id      = 0;
        resp.success = true;

        switch (cmd.which_payload) {
            case DeviceCommand_get_state_tag: {
                resp.which_payload = Response_device_state_tag;
                auto& ds = resp.payload.device_state;
                ds.type    = DEVICE_TYPE_LINEAR_ENCODER;
                ds.address = _address;
                ds.connected = true;
                ds.which_state = DeviceState_linear_encoder_tag;
                auto& le = ds.state.linear_encoder;
                le.brightness = _brightness;
                le.value      = _lastValue;
                le.pixels.size = LINEAR_ENCODER_PIXEL_COUNT * 3;
                for (uint8_t i = 0; i < LINEAR_ENCODER_PIXEL_COUNT; i++) {
                    uint32_t c = _pixel.getPixelColor(i);
                    le.pixels.bytes[i * 3]     = (c >> 16) & 0xff;
                    le.pixels.bytes[i * 3 + 1] = (c >>  8) & 0xff;
                    le.pixels.bytes[i * 3 + 2] =  c        & 0xff;
                }
                return true;
            }
            case DeviceCommand_set_brightness_tag:
                _brightness = cmd.payload.set_brightness.brightness;
                _pixel.setBrightness(_brightness);
                _pixel.show();
                return false;

            case DeviceCommand_set_pixel_color_tag: {
                const auto& sp = cmd.payload.set_pixel_color;
                if (sp.index < LINEAR_ENCODER_PIXEL_COUNT) {
                    _pixel.setPixelColor(sp.index, sp.color);
                    _pixel.show();
                }
                return false;
            }
            case DeviceCommand_set_pixel_colors_tag: {
                const auto& spc = cmd.payload.set_pixel_colors;
                pb_size_t count = spc.colors.size / 3;
                for (pb_size_t i = 0; i < count; i++) {
                    uint32_t idx = spc.offset + i;
                    if (idx < LINEAR_ENCODER_PIXEL_COUNT) {
                        uint32_t c = ((uint32_t)spc.colors.bytes[i * 3]     << 16)
                                   | ((uint32_t)spc.colors.bytes[i * 3 + 1] <<  8)
                                   |  (uint32_t)spc.colors.bytes[i * 3 + 2];
                        _pixel.setPixelColor(idx, c);
                    }
                }
                if (spc.show) _pixel.show();
                return false;
            }
            default:
                resp.success = false;
                return false;
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

private:
    uint8_t         _address;
    Adafruit_seesaw _seesaw;
    seesaw_NeoPixel _pixel;
    uint8_t  _brightness = 50;
    uint16_t _lastValue  = 0;
};
