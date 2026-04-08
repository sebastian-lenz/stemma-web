#pragma once
#include "Device.h"
#include <Adafruit_LSM6DSO32.h>
#include <Adafruit_LSM6DSOX.h>
#include <Adafruit_ISM330DHCX.h>

class GyroscopeDevice : public Device {
public:
    GyroscopeDevice(uint8_t address, GyroscopeChipset chipset)
        : _address(address), _chipset(chipset), _lsm(nullptr) {}

    ~GyroscopeDevice() {
        delete _lsm;
    }

    bool begin() override {
        switch (_chipset) {
            case GYROSCOPE_CHIPSET_LSM6DSO32:
                _lsm = new Adafruit_LSM6DSO32();
                break;
            case GYROSCOPE_CHIPSET_LSM6DSOX:
                _lsm = new Adafruit_LSM6DSOX();
                break;
            case GYROSCOPE_CHIPSET_ISM330DHCX:
                _lsm = new Adafruit_ISM330DHCX();
                break;
            default:
                return false;
        }
        if (!_lsm->begin_I2C(_address)) {
            delete _lsm;
            _lsm = nullptr;
            return false;
        }

        _applyAccelRange(GYROSCOPE_ACCELERATION_RANGE_4_G);
        _lsm->setGyroRange(LSM6DS_GYRO_RANGE_250_DPS);
        _lsm->setAccelDataRate(LSM6DS_RATE_104_HZ);
        _lsm->setGyroDataRate(LSM6DS_RATE_104_HZ);
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_GYROSCOPE; }
    uint8_t    getAddress() const override { return _address; }

    bool handleCommand(const DeviceCommand& cmd, Response& resp) override {
        resp.id      = 0;
        resp.success = true;

        switch (cmd.which_payload) {
            case DeviceCommand_get_state_tag: {
                sensors_event_t accel, gyro, temp;
                _lsm->getEvent(&accel, &gyro, &temp);

                resp.which_payload = Response_device_state_tag;

                auto& ds = resp.payload.device_state;
                ds.type    = DEVICE_TYPE_GYROSCOPE;
                ds.address = _address;
                ds.connected = true;
                ds.which_state = DeviceState_gyroscope_tag;

                auto& gs = ds.state.gyroscope;
                gs.acceleration_x         = accel.acceleration.x;
                gs.acceleration_y         = accel.acceleration.y;
                gs.acceleration_z         = accel.acceleration.z;
                gs.rotation_x             = gyro.gyro.x;
                gs.rotation_y             = gyro.gyro.y;
                gs.rotation_z             = gyro.gyro.z;
                gs.temperature            = temp.temperature;
                gs.acceleration_range     = _accelRange;
                gs.rotation_range         = _rotRange;
                gs.acceleration_data_rate = _accelRate;
                gs.rotation_data_rate     = _rotRate;
                return true;
            }
            case DeviceCommand_set_accel_range_tag:
                _accelRange = cmd.payload.set_accel_range.range;
                _applyAccelRange(_accelRange);
                return false;

            case DeviceCommand_set_rot_range_tag:
                _rotRange = cmd.payload.set_rot_range.range;
                _lsm->setGyroRange(_toGyroRange(_rotRange));
                return false;

            case DeviceCommand_set_accel_rate_tag:
                _accelRate = cmd.payload.set_accel_rate.rate;
                _lsm->setAccelDataRate(_toDataRate(_accelRate));
                return false;

            case DeviceCommand_set_rot_rate_tag:
                _rotRate = cmd.payload.set_rot_rate.rate;
                _lsm->setGyroDataRate(_toDataRate(_rotRate));
                return false;

            default:
                resp.success = false;
                return false;
        }
    }

    bool poll(Response& event) override {
        sensors_event_t accel, gyro, temp;
        _lsm->getEvent(&accel, &gyro, &temp);

        event.id = 0;
        event.success = true;
        event.which_payload = Response_device_event_tag;

        auto& de = event.payload.device_event;
        de.type    = DEVICE_TYPE_GYROSCOPE;
        de.address = _address;
        de.which_event = DeviceEvent_gyroscope_data_tag;

        auto& gc = de.event.gyroscope_data;
        gc.acceleration_x = accel.acceleration.x;
        gc.acceleration_y = accel.acceleration.y;
        gc.acceleration_z = accel.acceleration.z;
        gc.rotation_x = gyro.gyro.x;
        gc.rotation_y = gyro.gyro.y;
        gc.rotation_z = gyro.gyro.z;
        gc.temperature = temp.temperature;

        return true;
    }

private:
    // Apply acceleration range, handling the LSM6DSO32's separate range enum
    // (which adds 32 G and uses different constants).
    void _applyAccelRange(AccelerationRange r) {
        if (_chipset == GYROSCOPE_CHIPSET_LSM6DSO32) {
            lsm6dso32_accel_range_t range;
            switch (r) {
                case GYROSCOPE_ACCELERATION_RANGE_8_G:  range = LSM6DSO32_ACCEL_RANGE_8_G;  break;
                case GYROSCOPE_ACCELERATION_RANGE_16_G: range = LSM6DSO32_ACCEL_RANGE_16_G; break;
                case GYROSCOPE_ACCELERATION_RANGE_32_G: range = LSM6DSO32_ACCEL_RANGE_32_G; break;
                default:                                range = LSM6DSO32_ACCEL_RANGE_4_G;  break;
            }
            static_cast<Adafruit_LSM6DSO32*>(_lsm)->setAccelRange(range);
        } else {
            lsm6ds_accel_range_t range;
            switch (r) {
                case GYROSCOPE_ACCELERATION_RANGE_8_G:  range = LSM6DS_ACCEL_RANGE_8_G;  break;
                case GYROSCOPE_ACCELERATION_RANGE_16_G: range = LSM6DS_ACCEL_RANGE_16_G; break;
                default:                                range = LSM6DS_ACCEL_RANGE_4_G;  break;
                // 32 G not supported on LSM6DSOX / ISM330DHCX — falls back to 4 G
            }
            _lsm->setAccelRange(range);
        }
    }

    // 4000 DPS is only physically supported by the ISM330DHCX; other chipsets
    // fall back to 2000 DPS.
    lsm6ds_gyro_range_t _toGyroRange(RotationRange r) const {
        switch (r) {
            case GYROSCOPE_ROTATION_RANGE_DPS_125:  return LSM6DS_GYRO_RANGE_125_DPS;
            case GYROSCOPE_ROTATION_RANGE_DPS_500:  return LSM6DS_GYRO_RANGE_500_DPS;
            case GYROSCOPE_ROTATION_RANGE_DPS_1000: return LSM6DS_GYRO_RANGE_1000_DPS;
            case GYROSCOPE_ROTATION_RANGE_DPS_2000: return LSM6DS_GYRO_RANGE_2000_DPS;
            case GYROSCOPE_ROTATION_RANGE_DPS_4000:
                if (_chipset == GYROSCOPE_CHIPSET_ISM330DHCX)
                    return ISM330DHCX_GYRO_RANGE_4000_DPS;
                return LSM6DS_GYRO_RANGE_2000_DPS;
            default: return LSM6DS_GYRO_RANGE_250_DPS;
        }
    }

    static lsm6ds_data_rate_t _toDataRate(DataRate r) {
        switch (r) {
            case GYROSCOPE_DATA_RATE_SHUTDOWN: return LSM6DS_RATE_SHUTDOWN;
            case GYROSCOPE_DATA_RATE_HZ_12_5:  return LSM6DS_RATE_12_5_HZ;
            case GYROSCOPE_DATA_RATE_HZ_26:    return LSM6DS_RATE_26_HZ;
            case GYROSCOPE_DATA_RATE_HZ_52:    return LSM6DS_RATE_52_HZ;
            case GYROSCOPE_DATA_RATE_HZ_104:   return LSM6DS_RATE_104_HZ;
            case GYROSCOPE_DATA_RATE_HZ_208:   return LSM6DS_RATE_208_HZ;
            case GYROSCOPE_DATA_RATE_HZ_416:   return LSM6DS_RATE_416_HZ;
            case GYROSCOPE_DATA_RATE_HZ_833:   return LSM6DS_RATE_833_HZ;
            case GYROSCOPE_DATA_RATE_HZ_1_66K: return LSM6DS_RATE_1_66K_HZ;
            case GYROSCOPE_DATA_RATE_HZ_3_33K: return LSM6DS_RATE_3_33K_HZ;
            default:                           return LSM6DS_RATE_6_66K_HZ;
        }
    }

    uint8_t           _address;
    GyroscopeChipset  _chipset;
    Adafruit_LSM6DS*  _lsm;
    AccelerationRange _accelRange = GYROSCOPE_ACCELERATION_RANGE_4_G;
    RotationRange     _rotRange   = GYROSCOPE_ROTATION_RANGE_DPS_250;
    DataRate          _accelRate  = GYROSCOPE_DATA_RATE_HZ_104;
    DataRate          _rotRate    = GYROSCOPE_DATA_RATE_HZ_104;
};
