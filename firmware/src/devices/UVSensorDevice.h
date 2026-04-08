#pragma once
#include "Device.h"
#include <Adafruit_LTR390.h>

class UVSensorDevice : public Device {
public:
    explicit UVSensorDevice(uint8_t address) : _address(address) {}

    bool begin() override {
        if (!_ltr.begin()) return false;
        _ltr.setMode(LTR390_MODE_ALS);
        _ltr.setGain(LTR390_GAIN_3);
        _ltr.setResolution(LTR390_RESOLUTION_18BIT);
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_UV_SENSOR; }
    uint8_t    getAddress() const override { return _address; }

    bool handleCommand(const DeviceCommand& cmd, Response& resp) override {
        resp.id      = 0;
        resp.success = true;

        switch (cmd.which_payload) {
            case DeviceCommand_get_state_tag: {
                resp.which_payload = Response_device_state_tag;

                auto& ds = resp.payload.device_state;
                ds.type      = DEVICE_TYPE_UV_SENSOR;
                ds.address   = _address;
                ds.connected = true;
                ds.which_state = DeviceState_uv_sensor_tag;

                auto& us = ds.state.uv_sensor;
                us.value      = _lastValue;
                us.mode       = _mode;
                us.gain       = _gain;
                us.resolution = _resolution;
                return true;
            }
            case DeviceCommand_set_uv_gain_tag:
                _gain = cmd.payload.set_uv_gain.gain;
                _ltr.setGain(_toGain(_gain));
                return false;

            case DeviceCommand_set_uv_mode_tag:
                _mode = cmd.payload.set_uv_mode.mode;
                _ltr.setMode(_toMode(_mode));
                return false;

            case DeviceCommand_set_uv_resolution_tag:
                _resolution = cmd.payload.set_uv_resolution.resolution;
                _ltr.setResolution(_toResolution(_resolution));
                return false;

            default:
                resp.success = false;
                return false;
        }
    }

    bool poll(Response& event) override {
        if (!_ltr.newDataAvailable()) return false;

        _lastValue = (_mode == UV_SENSOR_MODE_UVS)
            ? (uint32_t)_ltr.readUVS()
            : (uint32_t)_ltr.readALS();

        event.id      = 0;
        event.success = true;
        event.which_payload = Response_device_event_tag;

        auto& de = event.payload.device_event;
        de.type    = DEVICE_TYPE_UV_SENSOR;
        de.address = _address;
        de.which_event = DeviceEvent_uv_sensor_data_tag;
        de.event.uv_sensor_data.value = _lastValue;

        return true;
    }

private:
    static ltr390_gain_t _toGain(UVSensorGain g) {
        switch (g) {
            case UV_SENSOR_GAIN_1:  return LTR390_GAIN_1;
            case UV_SENSOR_GAIN_3:  return LTR390_GAIN_3;
            case UV_SENSOR_GAIN_6:  return LTR390_GAIN_6;
            case UV_SENSOR_GAIN_9:  return LTR390_GAIN_9;
            case UV_SENSOR_GAIN_18: return LTR390_GAIN_18;
            default:                return LTR390_GAIN_3;
        }
    }

    static ltr390_mode_t _toMode(UVSensorMode m) {
        return (m == UV_SENSOR_MODE_UVS) ? LTR390_MODE_UVS : LTR390_MODE_ALS;
    }

    static ltr390_resolution_t _toResolution(UVSensorResolution r) {
        switch (r) {
            case UV_SENSOR_RESOLUTION_20_BIT: return LTR390_RESOLUTION_20BIT;
            case UV_SENSOR_RESOLUTION_19_BIT: return LTR390_RESOLUTION_19BIT;
            case UV_SENSOR_RESOLUTION_18_BIT: return LTR390_RESOLUTION_18BIT;
            case UV_SENSOR_RESOLUTION_17_BIT: return LTR390_RESOLUTION_17BIT;
            case UV_SENSOR_RESOLUTION_16_BIT: return LTR390_RESOLUTION_16BIT;
            case UV_SENSOR_RESOLUTION_13_BIT: return LTR390_RESOLUTION_13BIT;
            default:                          return LTR390_RESOLUTION_18BIT;
        }
    }

    uint8_t            _address;
    Adafruit_LTR390    _ltr;
    UVSensorMode       _mode       = UV_SENSOR_MODE_ALS;
    UVSensorGain       _gain       = UV_SENSOR_GAIN_3;
    UVSensorResolution _resolution = UV_SENSOR_RESOLUTION_18_BIT;
    uint32_t           _lastValue  = 0;
};
