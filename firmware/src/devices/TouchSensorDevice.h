#pragma once
#include "Device.h"
#include <Adafruit_MPR121.h>

class TouchSensorDevice : public Device {
public:
    explicit TouchSensorDevice(uint8_t address) : _address(address) {}

    bool begin() override {
        if (!_mpr.begin(_address)) return false;
        _lastMask = _mpr.touched();
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_TOUCH_SENSOR; }
    uint8_t    getAddress() const override { return _address; }

    bool handleCommand(const DeviceCommand& cmd, Response& resp) override {
        resp.id      = 0;
        resp.success = true;

        if (cmd.which_payload == DeviceCommand_get_state_tag) {
            resp.which_payload = Response_device_state_tag;
            auto& ds = resp.payload.device_state;
            ds.type    = DEVICE_TYPE_TOUCH_SENSOR;
            ds.address = _address;
            ds.connected = true;
            ds.which_state = DeviceState_touch_sensor_tag;
            ds.state.touch_sensor.touched_mask = _lastMask;
            return true;
        }

        resp.success = false;
        return false;
    }

    bool poll(Response& event) override {
        uint16_t mask = _mpr.touched();
        uint16_t changed = mask ^ _lastMask;
        if (!changed) return false;

        // Report the lowest-index changed pad; caller will re-poll for more
        for (uint8_t i = 0; i < 12; i++) {
            if (!(changed & (1 << i))) continue;
            bool isPressed = (mask & (1 << i)) != 0;

            event.id = 0;
            event.success = true;
            event.which_payload = Response_device_event_tag;
            auto& de = event.payload.device_event;
            de.type    = DEVICE_TYPE_TOUCH_SENSOR;
            de.address = _address;
            de.which_event = DeviceEvent_touch_button_tag;
            de.event.touch_button.sensor_id  = i;
            de.event.touch_button.is_pressed = isPressed;

            // Update mask for this pad; remaining changes reported next poll
            if (isPressed) _lastMask |=  (1 << i);
            else           _lastMask &= ~(1 << i);

            return true;
        }
        return false;
    }

private:
    uint8_t       _address;
    Adafruit_MPR121 _mpr;
    uint16_t      _lastMask = 0;
};
