#pragma once
#include "Device.h"
#include <Adafruit_LPS2X.h>

class PressureSensorDevice : public Device {
public:
    PressureSensorDevice(uint8_t address, PressureSensorChipset chipset)
        : _address(address), _chipset(chipset) {}

    bool begin() override {
        switch (_chipset) {
            case PRESSURE_SENSOR_CHIPSET_LPS22:
                if (!_lps22.begin_I2C(_address)) return false;
                _lps22.setDataRate(LPS22_RATE_25_HZ);
                _dataRate = PRESSURE_SENSOR_DATA_RATE_25_HZ;
                _isLPS22  = true;
                break;
            case PRESSURE_SENSOR_CHIPSET_LPS25:
            default:
                if (!_lps25.begin_I2C(_address)) return false;
                _lps25.setDataRate(LPS25_RATE_25_HZ);
                _dataRate = PRESSURE_SENSOR_DATA_RATE_25_HZ;
                _isLPS22  = false;
                break;
        }
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_PRESSURE_SENSOR; }
    uint8_t    getAddress() const override { return _address; }

    bool handleCommand(const DeviceCommand& cmd, Response& resp) override {
        resp.id      = 0;
        resp.success = true;

        switch (cmd.which_payload) {
            case DeviceCommand_get_state_tag: {
                sensors_event_t pressure_event, temp_event;
                _getEvent(pressure_event, temp_event);

                resp.which_payload = Response_device_state_tag;
                auto& ds = resp.payload.device_state;
                ds.type      = DEVICE_TYPE_PRESSURE_SENSOR;
                ds.address   = _address;
                ds.connected = true;
                ds.which_state = DeviceState_pressure_sensor_tag;

                auto& ps = ds.state.pressure_sensor;
                ps.pressure    = pressure_event.pressure;
                ps.temperature = temp_event.temperature;
                ps.data_rate   = _dataRate;
                return true;
            }
            case DeviceCommand_set_pressure_rate_tag:
                _dataRate = cmd.payload.set_pressure_rate.rate;
                _applyDataRate(_dataRate);
                return false;

            default:
                resp.success = false;
                return false;
        }
    }

    bool poll(Response& event) override {
        sensors_event_t pressure_event, temp_event;
        _getEvent(pressure_event, temp_event);

        event.id      = 0;
        event.success = true;
        event.which_payload = Response_device_event_tag;

        auto& de = event.payload.device_event;
        de.type    = DEVICE_TYPE_PRESSURE_SENSOR;
        de.address = _address;
        de.which_event = DeviceEvent_pressure_sensor_data_tag;

        auto& pd = de.event.pressure_sensor_data;
        pd.pressure    = pressure_event.pressure;
        pd.temperature = temp_event.temperature;

        return true;
    }

private:
    void _getEvent(sensors_event_t& pressure_event, sensors_event_t& temp_event) {
        if (_isLPS22) {
            _lps22.getEvent(&pressure_event, &temp_event);
        } else {
            _lps25.getEvent(&pressure_event, &temp_event);
        }
    }

    // Map the unified PressureSensorDataRate enum to chipset-specific constants.
    // Rates unsupported by a chipset are clamped to the nearest available rate.
    void _applyDataRate(PressureSensorDataRate rate) {
        if (_isLPS22) {
            lps22_rate_t r;
            switch (rate) {
                case PRESSURE_SENSOR_DATA_RATE_ONE_SHOT: r = LPS22_RATE_ONE_SHOT; break;
                case PRESSURE_SENSOR_DATA_RATE_1_HZ:     r = LPS22_RATE_1_HZ;     break;
                case PRESSURE_SENSOR_DATA_RATE_7_HZ:     r = LPS22_RATE_10_HZ;    break; // ~nearest
                case PRESSURE_SENSOR_DATA_RATE_10_HZ:    r = LPS22_RATE_10_HZ;    break;
                case PRESSURE_SENSOR_DATA_RATE_12_5_HZ:  r = LPS22_RATE_10_HZ;    break; // ~nearest
                case PRESSURE_SENSOR_DATA_RATE_25_HZ:    r = LPS22_RATE_25_HZ;    break;
                case PRESSURE_SENSOR_DATA_RATE_50_HZ:    r = LPS22_RATE_50_HZ;    break;
                case PRESSURE_SENSOR_DATA_RATE_75_HZ:    r = LPS22_RATE_75_HZ;    break;
                default:                                  r = LPS22_RATE_25_HZ;    break;
            }
            _lps22.setDataRate(r);
        } else {
            lps25_rate_t r;
            switch (rate) {
                case PRESSURE_SENSOR_DATA_RATE_ONE_SHOT: r = LPS25_RATE_ONE_SHOT; break;
                case PRESSURE_SENSOR_DATA_RATE_1_HZ:     r = LPS25_RATE_1_HZ;    break;
                case PRESSURE_SENSOR_DATA_RATE_7_HZ:     r = LPS25_RATE_7_HZ;    break;
                case PRESSURE_SENSOR_DATA_RATE_10_HZ:    r = LPS25_RATE_12_5_HZ; break; // ~nearest
                case PRESSURE_SENSOR_DATA_RATE_12_5_HZ:  r = LPS25_RATE_12_5_HZ; break;
                case PRESSURE_SENSOR_DATA_RATE_25_HZ:    r = LPS25_RATE_25_HZ;   break;
                case PRESSURE_SENSOR_DATA_RATE_50_HZ:    r = LPS25_RATE_25_HZ;   break; // ~nearest (max)
                case PRESSURE_SENSOR_DATA_RATE_75_HZ:    r = LPS25_RATE_25_HZ;   break; // ~nearest (max)
                default:                                  r = LPS25_RATE_25_HZ;   break;
            }
            _lps25.setDataRate(r);
        }
    }

    uint8_t                _address;
    PressureSensorChipset  _chipset;
    PressureSensorDataRate _dataRate = PRESSURE_SENSOR_DATA_RATE_25_HZ;
    bool                   _isLPS22 = false;
    Adafruit_LPS22         _lps22;
    Adafruit_LPS25         _lps25;
};
