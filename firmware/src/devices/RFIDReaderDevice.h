#pragma once
#include "Device.h"
#include <RFID-SOLDERED.h>

class RFIDReaderDevice : public Device {
public:
    explicit RFIDReaderDevice(uint8_t address) : _address(address) {}

    bool begin() override {
        _rfid.begin(_address);
        return true;
    }

    DeviceType getType()    const override { return DEVICE_TYPE_RFID_READER; }
    uint8_t    getAddress() const override { return _address; }

    void handleCommand(const DeviceCommand& cmd, Response& resp) override {
        switch (cmd.which_payload) {
            case DeviceCommand_get_state_tag: {
                resp.success = true;
                resp.which_payload = Response_device_state_tag;

                auto& ds = resp.payload.device_state;
                ds.type      = DEVICE_TYPE_RFID_READER;
                ds.address   = _address;
                ds.connected = true;
                ds.which_state = DeviceState_rfid_reader_tag;

                // Tag ID not in DeviceState for RFID — use last known
                snprintf(ds.state.rfid_reader.tag_id, sizeof(ds.state.rfid_reader.tag_id), "%08X", _lastTagId);
                break;
            }

            default:
                setError(resp, "Unknown command");
                break;
        }
    }

    bool poll(Response& event) override {
        if (_rfid.available()) {
            auto id = _rfid.getId();
            if (id == _lastTagId) return false;  // Same tag, no change
            _lastTagId = id;
        } else {
            if (_lastTagId == 0) return false;  // Still no tag
            _lastTagId = 0;
        }

        event.id      = 0;
        event.success = true;
        event.which_payload = Response_device_event_tag;

        auto& de = event.payload.device_event;
        de.type    = DEVICE_TYPE_RFID_READER;
        de.address = _address;
        de.which_event = DeviceEvent_rfid_reader_data_tag;
        snprintf(de.event.rfid_reader_data.tag_id, sizeof(de.event.rfid_reader_data.tag_id), "%08X", _lastTagId);

        return true;
    }

private:
    uint8_t  _address;
    Rfid     _rfid;
    uint32_t _lastTagId = 0;
};
