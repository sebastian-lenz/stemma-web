#pragma once
#include "Device.h"
#include <Adafruit_MPR121.h>

class TouchSensorDevice : public Device {
public:
    explicit TouchSensorDevice(uint8_t address) : _address(address) {}

    bool begin() override {
        if (!_mpr.begin(_address)) {
            return false;
        }

        _mpr.setAutoconfig(true);
        _lastMask = _mpr.touched();
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_TOUCH_SENSOR; }
    uint8_t    getAddress() const override { return _address; }

    void handleCommand(const DeviceCommand& cmd, Response& resp) override {
        switch (cmd.which_payload) {
            case DeviceCommand_get_state_tag: {
                resp.success = true;
                resp.which_payload = Response_device_state_tag;

                auto& ds = resp.payload.device_state;
                ds.type    = DEVICE_TYPE_TOUCH_SENSOR;
                ds.address = _address;
                ds.connected = true;
                ds.which_state = DeviceState_touch_sensor_tag;
                ds.state.touch_sensor.touched_mask = _lastMask;
                break;
            }

            default:
                setError(resp, "Unknown command");
                break;
        }
    }

    bool poll(Response& event) override {
        uint16_t mask = _mpr.touched();
        uint16_t changed = mask ^ _lastMask;
        if (!changed) return false;
        _lastMask = mask;

        event.id = 0;
        event.success = true;
        event.which_payload = Response_device_event_tag;

        auto& de = event.payload.device_event;
        de.type    = DEVICE_TYPE_TOUCH_SENSOR;
        de.address = _address;
        de.which_event = DeviceEvent_touch_button_tag;
        de.event.touch_button.touched_mask = mask;

        return true;
    }

private:
    uint8_t       _address;
    Adafruit_MPR121 _mpr;
    uint16_t      _lastMask = 0;
};
