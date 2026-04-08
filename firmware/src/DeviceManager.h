#pragma once
#include "devices/Device.h"
#include "devices/TrinkeyDevice.h"
#include "devices/NeoDriverDevice.h"
#include "devices/RotaryEncoderDevice.h"
#include "devices/LinearEncoderDevice.h"
#include "devices/TouchSensorDevice.h"
#include "devices/GyroscopeDevice.h"
#include "devices/PressureSensorDevice.h"
#include "devices/CO2SensorDevice.h"
#include "devices/DistanceSensorDevice.h"
#include "devices/UVSensorDevice.h"
#include "devices/NFCTagDevice.h"
#include "devices/RFIDReaderDevice.h"

/**
 * Owns and manages all active StemmaQT I2C device instances.
 *
 * Devices are registered on receipt of a StartDevice command and
 * deregistered on StopDevice. The manager routes DeviceCommand messages
 * to the correct device and drives the per-loop poll cycle.
 */
class DeviceManager {
public:
    static constexpr uint8_t MAX_DEVICES = 16;

    DeviceManager() : _count(0) {
        for (uint8_t i = 0; i < MAX_DEVICES; i++) _devices[i] = nullptr;
    }

    ~DeviceManager() {
        for (uint8_t i = 0; i < _count; i++) {
            delete _devices[i];
            _devices[i] = nullptr;
        }
    }

    /**
     * Handle a DeviceCommand. Returns true and populates resp when the
     * firmware should send a response back to the host.
     */
    bool handleCommand(const DeviceCommand& cmd, Response& resp) {
        resp.success = false;

        if (cmd.which_payload == DeviceCommand_start_tag) {
            return _startDevice(cmd, resp);
        }
        if (cmd.which_payload == DeviceCommand_stop_tag) {
            return _stopDevice(cmd, resp);
        }

        Device* dev = _findDevice(cmd.type, cmd.address);
        if (!dev) {
            resp.success = false;
            return true;  // send failure response
        }

        return dev->handleCommand(cmd, resp);
    }

    /**
     * Poll all active devices. For each device that produces an event,
     * invoke the callback so the caller can send it immediately.
     * event is static to avoid stack overflow with large NFC structs.
     */
    void pollAll(void (*sendEvent)(const Response&)) {
        static Response event;
        for (uint8_t i = 0; i < _count; i++) {
            event = Response_init_zero;
            if (_devices[i]->poll(event)) {
                sendEvent(event);
            }
        }
    }

private:
    Device*  _devices[MAX_DEVICES];
    uint8_t  _count;

    Device* _findDevice(DeviceType type, uint32_t address) const {
        for (uint8_t i = 0; i < _count; i++) {
            if (_devices[i]->getType()    == type &&
                _devices[i]->getAddress() == (uint8_t)address) {
                return _devices[i];
            }
        }
        return nullptr;
    }

    bool _startDevice(const DeviceCommand& cmd, Response& resp) {
        if (_findDevice(cmd.type, cmd.address)) {
            // Already started — return success
            resp.success = true;
            return true;
        }
        if (_count >= MAX_DEVICES) {
            resp.success = false;
            return true;
        }

        Device* dev = _createDevice(cmd);
        if (!dev) { resp.success = false; return true; }

        if (!dev->begin()) {
            delete dev;
            resp.success = false;
            return true;
        }

        _devices[_count++] = dev;
        resp.success = true;
        return true;
    }

    bool _stopDevice(const DeviceCommand& cmd, Response& resp) {
        for (uint8_t i = 0; i < _count; i++) {
            if (_devices[i]->getType()    == cmd.type &&
                _devices[i]->getAddress() == (uint8_t)cmd.address)
            {
                delete _devices[i];
                // Compact the array
                for (uint8_t j = i; j < _count - 1; j++) {
                    _devices[j] = _devices[j + 1];
                }
                _devices[--_count] = nullptr;
                resp.success = true;
                return false;
            }
        }
        resp.success = false;
        return true;
    }

    static Device* _createDevice(const DeviceCommand& cmd) {
        uint8_t addr = (uint8_t)cmd.address;
        switch (cmd.type) {
            case DEVICE_TYPE_TRINKEY:
                return new TrinkeyDevice();
            case DEVICE_TYPE_NEO_DRIVER:
                return new NeoDriverDevice(addr);
            case DEVICE_TYPE_ROTARY_ENCODER:
                return new RotaryEncoderDevice(addr);
            case DEVICE_TYPE_LINEAR_ENCODER:
                return new LinearEncoderDevice(addr);
            case DEVICE_TYPE_TOUCH_SENSOR:
                return new TouchSensorDevice(addr);
            case DEVICE_TYPE_GYROSCOPE: {
                GyroscopeChipset chipset =
                    cmd.which_payload == DeviceCommand_start_tag
                    ? cmd.payload.start.gyroscope_chipset
                    : GYROSCOPE_CHIPSET_LSM6DSO32;
                return new GyroscopeDevice(addr, chipset);
            }
            case DEVICE_TYPE_PRESSURE_SENSOR: {
                PressureSensorChipset chipset =
                    cmd.which_payload == DeviceCommand_start_tag
                    ? cmd.payload.start.pressure_sensor_chipset
                    : PRESSURE_SENSOR_CHIPSET_LPS25;
                return new PressureSensorDevice(addr, chipset);
            }
            case DEVICE_TYPE_CO2_SENSOR:
                return new CO2SensorDevice(addr);
            case DEVICE_TYPE_DISTANCE_SENSOR:
                return new DistanceSensorDevice(addr);
            case DEVICE_TYPE_UV_SENSOR:
                return new UVSensorDevice(addr);
            case DEVICE_TYPE_NFC_TAG:
                return new NFCTagDevice(addr);
            case DEVICE_TYPE_RFID_READER:
                return new RFIDReaderDevice(addr);
            default:
                return nullptr;
        }
    }
};
