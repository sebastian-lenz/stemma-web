#pragma once
#include "Device.h"
#include <Adafruit_VL53L0X.h>

class DistanceSensorDevice : public Device {
public:
    explicit DistanceSensorDevice(uint8_t address) : _address(address) {}

    bool begin() override {
        return _lox.begin(_address);
    }

    DeviceType getType()    const override { return DEVICE_TYPE_DISTANCE_SENSOR; }
    uint8_t    getAddress() const override { return _address; }

    bool handleCommand(const DeviceCommand& cmd, Response& resp) override {
        resp.id      = 0;
        resp.success = true;

        if (cmd.which_payload == DeviceCommand_get_state_tag) {
            VL53L0X_RangingMeasurementData_t measure;
            _lox.rangingTest(&measure, false);

            resp.which_payload = Response_device_state_tag;

            auto& ds = resp.payload.device_state;
            ds.type      = DEVICE_TYPE_DISTANCE_SENSOR;
            ds.address   = _address;
            ds.connected = true;
            ds.which_state = DeviceState_distance_sensor_tag;
            ds.state.distance_sensor.distance =
                (measure.RangeStatus == 4) ? 8190 : measure.RangeMilliMeter;
            return true;
        }

        resp.success = false;
        return false;
    }

    bool poll(Response& event) override {
        VL53L0X_RangingMeasurementData_t measure;
        _lox.rangingTest(&measure, false);

        uint32_t distance = (measure.RangeStatus == 4) ? 8190 : measure.RangeMilliMeter;

        event.id      = 0;
        event.success = true;
        event.which_payload = Response_device_event_tag;

        auto& de = event.payload.device_event;
        de.type    = DEVICE_TYPE_DISTANCE_SENSOR;
        de.address = _address;
        de.which_event = DeviceEvent_distance_sensor_data_tag;
        de.event.distance_sensor_data.distance = distance;

        return true;
    }

private:
    uint8_t          _address;
    Adafruit_VL53L0X _lox;
};
