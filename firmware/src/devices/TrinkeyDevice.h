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
                ts.pixel      = _pixelColor;
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
                    _pixel.setPixelColor(idx, cmd.payload.set_pixel_color.color);
                    if (idx == 0) _pixelColor = cmd.payload.set_pixel_color.color;
                    _pixel.show();
                }
                return false;

            case DeviceCommand_set_pixel_colors_tag: {
                const auto& spc = cmd.payload.set_pixel_colors;
                pb_size_t count = spc.colors.size / 3;
                for (pb_size_t i = 0; i < count; i++) {
                    uint8_t idx = (uint8_t)(spc.offset + i);
                    if (idx >= TRINKEY_NEOPIXEL_COUNT) break;
                    uint32_t c = ((uint32_t)spc.colors.bytes[i * 3]     << 16)
                               | ((uint32_t)spc.colors.bytes[i * 3 + 1] <<  8)
                               |  (uint32_t)spc.colors.bytes[i * 3 + 2];
                    _pixel.setPixelColor(idx, c);
                    if (idx == 0) _pixelColor = c;
                }
                if (spc.show) _pixel.show();
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
    uint8_t  _brightness  = 50;
    uint32_t _pixelColor  = 0;
};
