#pragma once
#include "NeoPixelDevice.h"
#include <Adafruit_seesaw.h>
#include <seesaw_neopixel.h>

class NeoDriverDevice : public NeoPixelDevice {
public:
    explicit NeoDriverDevice(uint8_t address)
        : _address(address), _pixels(0, 15, NEO_GRB + NEO_KHZ800) {}

    bool begin() override {
        if (!_seesaw.begin(_address)) return false;
        _pixels.begin(_address);
        _beginPixels(0);
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_NEO_DRIVER; }
    uint8_t    getAddress() const override { return _address; }

    void handleCommand(const DeviceCommand& cmd, Response& resp) override {
        switch (cmd.which_payload) {
            case DeviceCommand_get_state_tag: {
                resp.success = true;
                resp.which_payload = Response_device_state_tag;

                auto& ds = resp.payload.device_state;
                ds.type      = DEVICE_TYPE_NEO_DRIVER;
                ds.address   = _address;
                ds.connected = true;
                ds.which_state = DeviceState_neo_driver_tag;
                ds.state.neo_driver.brightness = _brightness;
                ds.state.neo_driver.length     = _numPixels;

                break;
            }

            case DeviceCommand_set_length_tag: {
                uint32_t length = cmd.payload.set_length.length;
                _pixels.updateLength(length);
                _resizePixels(length);
                _pixels.show();

                resp.success = true;
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

    bool poll(Response&) override { return false; }

protected:
    void _neoSetBrightness(uint8_t b)              override { _pixels.setBrightness(b); }
    void _neoSetPixelColor(uint16_t i, uint32_t c) override { _pixels.setPixelColor(i, c); }
    void _neoShow()                                override { _pixels.show(); }

private:
    uint8_t          _address;
    Adafruit_seesaw  _seesaw;
    seesaw_NeoPixel  _pixels;
};
