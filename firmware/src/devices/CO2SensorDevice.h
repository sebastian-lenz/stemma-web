#pragma once
#include "Device.h"
#include <SensirionI2cScd4x.h>

class CO2SensorDevice : public Device {
public:
    explicit CO2SensorDevice(uint8_t address) : _address(address) {}

    bool begin() override {
        _scd4x.begin(Wire, SCD41_I2C_ADDR_62);
        // Stop any running measurement before reconfiguring
        _scd4x.stopPeriodicMeasurement();
        if (_scd4x.startPeriodicMeasurement() != 0) {
            return false;
        }
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_CO2_SENSOR; }
    uint8_t    getAddress() const override { return _address; }

    bool handleCommand(const DeviceCommand& cmd, Response& resp) override {
        resp.id      = 0;
        resp.success = true;

        if (cmd.which_payload == DeviceCommand_get_state_tag) {
            resp.which_payload = Response_device_state_tag;

            auto& ds = resp.payload.device_state;
            ds.type      = DEVICE_TYPE_CO2_SENSOR;
            ds.address   = _address;
            ds.connected = true;
            ds.which_state = DeviceState_co2_sensor_tag;

            auto& cs = ds.state.co2_sensor;
            cs.co2         = _co2;
            cs.humidity    = _humidity;
            cs.temperature = _temperature;
            return true;
        }

        resp.success = false;
        return false;
    }

    bool poll(Response& event) override {
        bool isReady = false;
        if (_scd4x.getDataReadyStatus(isReady) != 0 || !isReady) {
            return false;
        }

        uint16_t co2;
        float    temperature, humidity;
        if (_scd4x.readMeasurement(co2, temperature, humidity) != 0) {
            return false;
        }

        _co2         = co2;
        _temperature = temperature;
        _humidity    = humidity;

        event.id      = 0;
        event.success = true;
        event.which_payload = Response_device_event_tag;

        auto& de = event.payload.device_event;
        de.type    = DEVICE_TYPE_CO2_SENSOR;
        de.address = _address;
        de.which_event = DeviceEvent_co2_sensor_data_tag;

        auto& cd = de.event.co2_sensor_data;
        cd.co2         = co2;
        cd.temperature = temperature;
        cd.humidity    = humidity;

        return true;
    }

private:
    uint8_t          _address;
    SensirionI2cScd4x _scd4x;
    uint32_t         _co2         = 0;
    float            _temperature = 0.0f;
    float            _humidity    = 0.0f;
};
