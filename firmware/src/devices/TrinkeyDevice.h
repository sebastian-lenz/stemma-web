#pragma once
#include "NeoPixelDevice.h"
#include <Adafruit_NeoPixel.h>

static constexpr uint8_t TRINKEY_NEOPIXEL_PIN   = 27;
static constexpr uint8_t TRINKEY_NEOPIXEL_COUNT = 4;

class TrinkeyDevice : public NeoPixelDevice {
public:
    TrinkeyDevice()
        : _pixel(TRINKEY_NEOPIXEL_COUNT, TRINKEY_NEOPIXEL_PIN, NEO_GRB + NEO_KHZ800) {}

    bool begin() override {
        _pixel.begin();
        _pixel.clear();
        _beginPixels(TRINKEY_NEOPIXEL_COUNT);
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_TRINKEY; }
    uint8_t    getAddress() const override { return 0; }

    bool handleCommand(const DeviceCommand& cmd, Response& resp) override {
        if (_handleNeoPixelCommand(cmd)) return false;

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
                ts.pixel      = _rawColors[0];
                return true;
            }
            default:
                resp.success = false;
                return false;
        }
    }

    bool poll(Response& /*event*/) override { return false; }

protected:
    void _neoSetBrightness(uint8_t b)              override { _pixel.setBrightness(b); }
    void _neoSetPixelColor(uint16_t i, uint32_t c) override { _pixel.setPixelColor(i, c); }
    void _neoShow()                                override { _pixel.show(); }

private:
    Adafruit_NeoPixel _pixel;
};
