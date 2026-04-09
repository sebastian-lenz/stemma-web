#pragma once
#include "Device.h"
#include <ST25DVSensor.h>

// The ST25DV I2C EEPROM is a write/read device with no polling loop.
// All operations are triggered by commands from the host.
class NFCTagDevice : public Device {
public:
    explicit NFCTagDevice(uint8_t address) : _address(address) {}

    bool begin() override {
        return (_nfc.begin() == ST25DV_OK);
    }

    DeviceType getType()    const override { return DEVICE_TYPE_NFC_TAG; }
    uint8_t    getAddress() const override { return _address; }

    bool poll(Response&) override { return false; }

    void handleCommand(const DeviceCommand& cmd, Response& resp) override {
        switch (cmd.which_payload) {
            case DeviceCommand_get_state_tag:
                _readNDEF(resp);
                break;

            case DeviceCommand_nfc_write_text_tag: {
                const auto& p = cmd.payload.nfc_write_text;
                resp.success = (_nfc.writeText(
                    p.text,
                    p.language[0] ? p.language : "en",
                    NDEF_TEXT_UTF8
                ) == ST25DV_OK);
                break;
            }

            case DeviceCommand_nfc_write_uri_tag: {
                const auto& p = cmd.payload.nfc_write_uri;
                resp.success = (_nfc.writeURI(p.protocol, p.uri, p.information) == ST25DV_OK);
                break;
            }

            case DeviceCommand_nfc_write_unabridged_uri_tag: {
                const auto& p = cmd.payload.nfc_write_unabridged_uri;
                resp.success = (_nfc.writeUnabridgedURI(p.uri, p.information) == ST25DV_OK);
                break;
            }

            case DeviceCommand_nfc_write_sms_tag: {
                const auto& p = cmd.payload.nfc_write_sms;
                resp.success = (_nfc.writeSMS(p.phone_number, p.message, p.information) == ST25DV_OK);
                break;
            }

            case DeviceCommand_nfc_write_email_tag: {
                const auto& p = cmd.payload.nfc_write_email;
                resp.success = (_nfc.writeEMail(p.email, p.subject, p.message, p.information) == ST25DV_OK);
                break;
            }

            case DeviceCommand_nfc_write_geo_tag: {
                const auto& p = cmd.payload.nfc_write_geo;
                resp.success = (_nfc.writeGEO(
                    String(p.latitude, 6),
                    String(p.longitude, 6),
                    p.information
                ) == ST25DV_OK);
                break;
            }

            case DeviceCommand_nfc_write_vcard_tag: {
                const auto& p = cmd.payload.nfc_write_vcard;
                sVcardInfo info = {};
                strncpy(info.FirstName,   p.first_name,     sizeof(info.FirstName)   - 1);
                strncpy(info.Name,        p.name,           sizeof(info.Name)        - 1);
                strncpy(info.Title,       p.title,          sizeof(info.Title)       - 1);
                strncpy(info.Org,         p.organization,   sizeof(info.Org)         - 1);
                strncpy(info.HomeEmail,   p.home_email,     sizeof(info.HomeEmail)   - 1);
                strncpy(info.WorkEmail,   p.work_email,     sizeof(info.WorkEmail)   - 1);
                strncpy(info.CellTel,     p.cellular_phone, sizeof(info.CellTel)     - 1);
                strncpy(info.HomeTel,     p.home_phone,     sizeof(info.HomeTel)     - 1);
                strncpy(info.WorkTel,     p.work_phone,     sizeof(info.WorkTel)     - 1);
                strncpy(info.HomeAddress, p.home_address,   sizeof(info.HomeAddress) - 1);
                strncpy(info.WorkAddress, p.work_address,   sizeof(info.WorkAddress) - 1);
                strncpy(info.Url,         p.url,            sizeof(info.Url)         - 1);
                resp.success = (_nfc.writeVcard(info) == ST25DV_OK);
                break;
            }

            default:
                setError(resp, "Unknown command");
                break;
        }
    }

private:
    void _readNDEF(Response& resp) {
        NDEF_TypeDef type = _nfc.readNDEFType();

        resp.which_payload = Response_device_state_tag;

        auto& ds = resp.payload.device_state;
        ds.type      = DEVICE_TYPE_NFC_TAG;
        ds.address   = _address;
        ds.connected = true;
        ds.which_state = DeviceState_nfc_tag_tag;

        auto& ns = ds.state.nfc_tag;
        ns = NFCTagState_init_zero;

        switch (type) {
            case TEXT_TYPE: {
                String text;
                if (_nfc.readText(&text) == ST25DV_OK) {
                    ns.record_type = NFC_RECORD_TEXT;
                    strncpy(ns.text, text.c_str(), sizeof(ns.text) - 1);
                }
                break;
            }
            case WELL_KNOWN_ABRIDGED_URI_TYPE: {
                String uri;
                if (_nfc.readURI(&uri) == ST25DV_OK) {
                    ns.record_type = NFC_RECORD_URI;
                    strncpy(ns.uri, uri.c_str(), sizeof(ns.uri) - 1);
                }
                break;
            }
            case UNABRIDGED_URI_TYPE: {
                String uri;
                if (_nfc.readUnabridgedURI(&uri) == ST25DV_OK) {
                    ns.record_type = NFC_RECORD_UNABRIDGED_URI;
                    strncpy(ns.uri, uri.c_str(), sizeof(ns.uri) - 1);
                }
                break;
            }
            case URI_SMS_TYPE: {
                String phoneNumber, message;
                if (_nfc.readSMS(&phoneNumber, &message) == ST25DV_OK) {
                    ns.record_type = NFC_RECORD_SMS;
                    strncpy(ns.phone_number, phoneNumber.c_str(), sizeof(ns.phone_number) - 1);
                    strncpy(ns.sms_message,  message.c_str(),     sizeof(ns.sms_message)  - 1);
                }
                break;
            }
            case URI_EMAIL_TYPE: {
                String emailAdd, subject, message;
                if (_nfc.readEMail(&emailAdd, &subject, &message) == ST25DV_OK) {
                    ns.record_type = NFC_RECORD_EMAIL;
                    strncpy(ns.email_address, emailAdd.c_str(), sizeof(ns.email_address) - 1);
                    strncpy(ns.subject,       subject.c_str(),  sizeof(ns.subject)       - 1);
                    strncpy(ns.email_message, message.c_str(),  sizeof(ns.email_message) - 1);
                }
                break;
            }
            case URI_GEO_TYPE: {
                String latitude, longitude;
                if (_nfc.readGEO(&latitude, &longitude) == ST25DV_OK) {
                    ns.record_type = NFC_RECORD_GEO_LOCATION;
                    ns.latitude  = latitude.toFloat();
                    ns.longitude = longitude.toFloat();
                }
                break;
            }
            case VCARD_TYPE: {
                sVcardInfo info = {};
                if (_nfc.readVcard(&info) == ST25DV_OK) {
                    ns.record_type = NFC_RECORD_VCARD;
                    strncpy(ns.vcard_first_name,     info.FirstName,   sizeof(ns.vcard_first_name)     - 1);
                    strncpy(ns.vcard_name,           info.Name,        sizeof(ns.vcard_name)           - 1);
                    strncpy(ns.vcard_title,          info.Title,       sizeof(ns.vcard_title)          - 1);
                    strncpy(ns.vcard_organization,   info.Org,         sizeof(ns.vcard_organization)   - 1);
                    strncpy(ns.vcard_home_email,     info.HomeEmail,   sizeof(ns.vcard_home_email)     - 1);
                    strncpy(ns.vcard_work_email,     info.WorkEmail,   sizeof(ns.vcard_work_email)     - 1);
                    strncpy(ns.vcard_cellular_phone, info.CellTel,     sizeof(ns.vcard_cellular_phone) - 1);
                    strncpy(ns.vcard_home_phone,     info.HomeTel,     sizeof(ns.vcard_home_phone)     - 1);
                    strncpy(ns.vcard_work_phone,     info.WorkTel,     sizeof(ns.vcard_work_phone)     - 1);
                    strncpy(ns.vcard_home_address,   info.HomeAddress, sizeof(ns.vcard_home_address)   - 1);
                    strncpy(ns.vcard_work_address,   info.WorkAddress, sizeof(ns.vcard_work_address)   - 1);
                    strncpy(ns.vcard_url,            info.Url,         sizeof(ns.vcard_url)            - 1);
                }
                break;
            }
            default:
                ns.record_type = NFC_RECORD_UNSPECIFIED;
                break;
        }

        resp.success = true;
    }

    uint8_t _address;
    ST25DV  _nfc{-1, -1, &Wire};
};
