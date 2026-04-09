#pragma once
#include "messages.pb.h"

inline void setError(Response& resp, const char* message) {
    resp.which_payload = Response_error_tag;
    strncpy(resp.payload.error.message, message, sizeof(resp.payload.error.message) - 1);
    resp.payload.error.message[sizeof(resp.payload.error.message) - 1] = '\0';
}

/**
 * Abstract base for all StemmaQT device drivers.
 *
 * Each concrete subclass represents one physical I2C device. The DeviceManager
 * owns the instances and calls begin(), handleCommand(), and poll() in the
 * main loop.
 */
class Device {
public:
    virtual ~Device() = default;

    /** Initialise the hardware. Returns true on success. */
    virtual bool begin() = 0;

    virtual DeviceType getType()    const = 0;
    virtual uint8_t    getAddress() const = 0;

    /**
     * Handle an incoming DeviceCommand directed at this device.
     * Populate resp and return true if a response should be sent.
     */
    virtual void handleCommand(const DeviceCommand& cmd, Response& resp) = 0;

    /**
     * Called every loop iteration. If the device has new data or an event
     * to report, populate event and return true so the caller can send it.
     */
    virtual bool poll(Response& event) = 0;
};
