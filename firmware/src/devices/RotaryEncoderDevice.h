#pragma once
#include "Device.h"
#include <Adafruit_seesaw.h>
#include <seesaw_neopixel.h>

// Pin assignments on the seesaw rotary encoder breakout
static constexpr uint8_t ROTARY_ENCODER_BUTTON_PIN = 24;
static constexpr uint8_t ROTARY_ENCODER_NEOPIXEL_PIN = 6;

class RotaryEncoderDevice : public Device {
public:
    explicit RotaryEncoderDevice(uint8_t address)
        : _address(address), _pixel(1, ROTARY_ENCODER_NEOPIXEL_PIN, NEO_GRB + NEO_KHZ800) {}

    bool begin() override {
        if (!_seesaw.begin(_address)) return false;
        _pixel.begin(_address);
        _pixel.setBrightness(_brightness);
        _pixel.show();
        _seesaw.pinMode(ROTARY_ENCODER_BUTTON_PIN, INPUT_PULLUP);
        _seesaw.setGPIOInterrupts(1UL << ROTARY_ENCODER_BUTTON_PIN, true);
        _seesaw.enableEncoderInterrupt();
        _lastValue  = _seesaw.getEncoderPosition();
        _lastPressed = !_seesaw.digitalRead(ROTARY_ENCODER_BUTTON_PIN);
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_ROTARY_ENCODER; }
    uint8_t    getAddress() const override { return _address; }

    bool handleCommand(const DeviceCommand& cmd, Response& resp) override {
        resp.id      = 0;
        resp.success = true;

        switch (cmd.which_payload) {
            case DeviceCommand_get_state_tag: {
                resp.which_payload = Response_device_state_tag;

                auto& ds = resp.payload.device_state;
                ds.type    = DEVICE_TYPE_ROTARY_ENCODER;
                ds.address = _address;
                ds.connected = true;
                ds.which_state = DeviceState_rotary_encoder_tag;

                auto& re = ds.state.rotary_encoder;
                re.brightness = _brightness;
                re.pixel.r    = _pixelR;
                re.pixel.g    = _pixelG;
                re.pixel.b    = _pixelB;
                re.is_pressed = _lastPressed;
                re.value      = _lastValue;
                return true;
            }
            case DeviceCommand_set_brightness_tag:
                _brightness = cmd.payload.set_brightness.brightness;
                _pixel.setBrightness(_brightness);
                _pixel.show();
                return false;

            case DeviceCommand_set_pixel_color_tag:
                if (cmd.payload.set_pixel_color.index == 0) {
                    _pixelR = cmd.payload.set_pixel_color.color.r;
                    _pixelG = cmd.payload.set_pixel_color.color.g;
                    _pixelB = cmd.payload.set_pixel_color.color.b;
                    _pixel.setPixelColor(0, _pixelR, _pixelG, _pixelB);
                    _pixel.show();
                }
                return false;

            default:
                resp.success = false;
                return false;
        }
    }

    bool poll(Response& event) override {
        bool changed = false;

        int32_t pos = _seesaw.getEncoderPosition();
        bool pressed = !_seesaw.digitalRead(ROTARY_ENCODER_BUTTON_PIN);

        if (pos != _lastValue) {
            _lastValue = pos;
            _buildChangedEvent(event);
            changed = true;
        } else if (pressed != _lastPressed) {
            _lastPressed = pressed;
            _buildButtonEvent(event);
            changed = true;
        }

        return changed;
    }

private:
    void _buildChangedEvent(Response& event) {
        event.id = 0;
        event.success = true;
        event.which_payload = Response_device_event_tag;
        auto& de = event.payload.device_event;
        de.type    = DEVICE_TYPE_ROTARY_ENCODER;
        de.address = _address;
        de.which_event = DeviceEvent_rotary_changed_tag;
        de.event.rotary_changed.value      = _lastValue;
        de.event.rotary_changed.is_pressed = _lastPressed;
    }

    void _buildButtonEvent(Response& event) {
        event.id = 0;
        event.success = true;
        event.which_payload = Response_device_event_tag;
        auto& de = event.payload.device_event;
        de.type    = DEVICE_TYPE_ROTARY_ENCODER;
        de.address = _address;
        de.which_event = DeviceEvent_rotary_button_tag;
        de.event.rotary_button.is_pressed = _lastPressed;
    }

    uint8_t         _address;
    Adafruit_seesaw _seesaw;
    seesaw_NeoPixel _pixel;
    uint8_t  _brightness = 50;
    uint8_t  _pixelR = 0, _pixelG = 0, _pixelB = 0;
    int32_t  _lastValue   = 0;
    bool     _lastPressed = false;
};
