#pragma once
#include "Device.h"
#include <Adafruit_NeoPixel.h>

static constexpr uint8_t TRINKEY_NEOPIXEL_PIN   = 27;
static constexpr uint8_t TRINKEY_NEOPIXEL_COUNT = 4;

class TrinkeyDevice : public Device {
public:
    TrinkeyDevice()
        : _pixel(TRINKEY_NEOPIXEL_COUNT, TRINKEY_NEOPIXEL_PIN, NEO_GRB + NEO_KHZ800) {}

    bool begin() override {
        _pixel.begin();
        _pixel.setBrightness(_brightness);
        _pixel.clear();
        _pixel.show();
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_TRINKEY; }
    uint8_t    getAddress() const override { return 0; }

    bool handleCommand(const DeviceCommand& cmd, Response& resp) override {
        resp.id      = 0;
        resp.success = true;

        switch (cmd.which_payload) {
            case DeviceCommand_get_state_tag: {
                resp.which_payload = Response_device_state_tag;
                auto& ds = resp.payload.device_state;
                ds.type      = DEVICE_TYPE_TRINKEY;
                ds.address   = 0;
                ds.connected = true;
                ds.which_state = DeviceState_trinkey_tag;
                auto& ts = ds.state.trinkey;
                ts.brightness = _brightness;
                ts.pixel.r    = _pixelR;
                ts.pixel.g    = _pixelG;
                ts.pixel.b    = _pixelB;
                return true;
            }
            case DeviceCommand_set_brightness_tag:
                _brightness = (uint8_t)cmd.payload.set_brightness.brightness;
                _pixel.setBrightness(_brightness);
                _pixel.show();
                return false;

            case DeviceCommand_set_pixel_color_tag:
                if (cmd.payload.set_pixel_color.index < TRINKEY_NEOPIXEL_COUNT) {
                    uint8_t idx = (uint8_t)cmd.payload.set_pixel_color.index;
                    uint8_t r   = (uint8_t)cmd.payload.set_pixel_color.color.r;
                    uint8_t g   = (uint8_t)cmd.payload.set_pixel_color.color.g;
                    uint8_t b   = (uint8_t)cmd.payload.set_pixel_color.color.b;
                    _pixel.setPixelColor(idx, _pixel.Color(r, g, b));
                    if (idx == 0) { _pixelR = r; _pixelG = g; _pixelB = b; }
                    _pixel.show();
                }
                return false;

            case DeviceCommand_set_pixel_colors_tag: {
                const auto& spc = cmd.payload.set_pixel_colors;
                for (pb_size_t i = 0; i < spc.colors_count; i++) {
                    uint8_t idx = (uint8_t)(spc.offset + i);
                    if (idx >= TRINKEY_NEOPIXEL_COUNT) break;
                    uint8_t r = (uint8_t)spc.colors[i].r;
                    uint8_t g = (uint8_t)spc.colors[i].g;
                    uint8_t b = (uint8_t)spc.colors[i].b;
                    _pixel.setPixelColor(idx, _pixel.Color(r, g, b));
                    if (idx == 0) { _pixelR = r; _pixelG = g; _pixelB = b; }
                }
                _pixel.show();
                return false;
            }

            default:
                resp.success = false;
                return false;
        }
    }

    bool poll(Response& /*event*/) override { return false; }

private:
    Adafruit_NeoPixel _pixel;
    uint8_t _brightness = 50;
    uint8_t _pixelR = 0, _pixelG = 0, _pixelB = 0;
};
