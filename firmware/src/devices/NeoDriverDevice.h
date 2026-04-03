#pragma once
#include "Device.h"
#include <Adafruit_seesaw.h>
#include <seesaw_neopixel.h>

class NeoDriverDevice : public Device {
public:
    explicit NeoDriverDevice(uint8_t address)
        : _address(address), _pixels(0, 15, NEO_GRB + NEO_KHZ800) {}

    bool begin() override {
        if (!_seesaw.begin(_address)) return false;
        _pixels.begin(_address);
        _pixels.setBrightness(_brightness);
        _pixels.show();
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_NEO_DRIVER; }
    uint8_t    getAddress() const override { return _address; }

    bool handleCommand(const DeviceCommand& cmd, Response& resp) override {
        resp.id      = 0;
        resp.success = true;

        switch (cmd.which_payload) {
            case DeviceCommand_get_state_tag: {
                resp.which_payload = Response_device_state_tag;
                auto& ds = resp.payload.device_state;
                ds.type    = DEVICE_TYPE_NEO_DRIVER;
                ds.address = _address;
                ds.connected = true;
                ds.which_state = DeviceState_neo_driver_tag;
                ds.state.neo_driver.brightness = _brightness;
                ds.state.neo_driver.length     = _length;
                return true;
            }
            case DeviceCommand_set_brightness_tag:
                _brightness = cmd.payload.set_brightness.brightness;
                _pixels.setBrightness(_brightness);
                _pixels.show();
                return false;

            case DeviceCommand_set_pixel_color_tag: {
                const auto& sp = cmd.payload.set_pixel_color;
                if (sp.index < _length) {
                    _pixels.setPixelColor(sp.index, sp.color);
                    _pixels.show();
                } else {
                    resp.success = false;
                }
                return false;
            }
            case DeviceCommand_set_pixel_colors_tag: {
                const auto& spc = cmd.payload.set_pixel_colors;
                pb_size_t count = spc.colors.size / 3;
                for (pb_size_t i = 0; i < count; i++) {
                    uint32_t idx = spc.offset + i;
                    if (idx < _length) {
                        uint32_t c = ((uint32_t)spc.colors.bytes[i * 3]     << 16)
                                   | ((uint32_t)spc.colors.bytes[i * 3 + 1] <<  8)
                                   |  (uint32_t)spc.colors.bytes[i * 3 + 2];
                        _pixels.setPixelColor(idx, c);
                    }
                }
                if (spc.show) _pixels.show();
                return false;
            }
            case DeviceCommand_set_length_tag:
                _length = cmd.payload.set_length.length;
                _pixels.updateLength(_length);
                _pixels.show();
                return false;

            default:
                resp.success = false;
                return false;
        }
    }

    bool poll(Response&) override { return false; }

private:
    uint8_t          _address;
    Adafruit_seesaw  _seesaw;
    seesaw_NeoPixel  _pixels;
    uint8_t          _brightness = 50;
    uint32_t         _length     = 0;
};
