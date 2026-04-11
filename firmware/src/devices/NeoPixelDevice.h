#pragma once
#include "Device.h"

/**
 * Base class for devices that have NeoPixel LEDs.
 *
 * Stores raw (unscaled) pixel colors alongside the brightness value so that
 * setBrightness always rescales from the original colors rather than from
 * already-scaled buffer contents (which would compound precision loss across
 * multiple brightness changes).
 *
 * Subclasses must implement the three _neo* methods to forward operations to
 * their concrete pixel strip, and call _beginPixels(count) at the end of
 * begin() after the strip itself has been started.
 */
class NeoPixelDevice : public Device {
public:
    ~NeoPixelDevice() override { delete[] _rawColors; }

protected:
    virtual void _neoSetBrightness(uint8_t b)              = 0;
    virtual void _neoSetPixelColor(uint16_t i, uint32_t c) = 0;
    virtual void _neoShow()                                = 0;

    /**
     * Initialise pixel state. Call this at the end of begin() after the strip
     * itself has been started (begin() / begin(address)).
     */
    void _beginPixels(uint16_t numPixels) {
        delete[] _rawColors;
        _numPixels = numPixels;
        _rawColors = new uint32_t[numPixels]();
        _neoSetBrightness(_brightness);
        _neoShow();
    }

    /**
     * Handle set_brightness, set_pixel_color, and set_pixel_colors commands.
     * Returns true if the command was consumed (no response should be sent).
     */
    bool _handleNeoPixelCommand(const DeviceCommand& cmd) {
        switch (cmd.which_payload) {
            case DeviceCommand_set_brightness_tag:
                _brightness = (uint8_t)cmd.payload.set_brightness.brightness;
                _neoSetBrightness(_brightness);

                // Re-apply raw colors so the strip rescales from original values,
                // not from an already-brightness-scaled buffer.
                for (uint16_t i = 0; i < _numPixels; i++) {
                    _neoSetPixelColor(i, _rawColors[i]);
                }

                _neoShow();
                return true;

            case DeviceCommand_set_pixel_color_tag: {
                uint32_t idx = cmd.payload.set_pixel_color.index;
                if (idx < _numPixels) {
                    _rawColors[idx] = cmd.payload.set_pixel_color.color;
                    _neoSetPixelColor(idx, _rawColors[idx]);
                    _neoShow();
                }
                return true;
            }

            case DeviceCommand_set_pixel_colors_tag: {
                const auto& spc = cmd.payload.set_pixel_colors;
                pb_size_t count = spc.colors.size / 3;

                for (pb_size_t i = 0; i < count; i++) {
                    uint32_t idx = spc.offset + i;

                    if (idx < _numPixels) {
                        uint32_t c = ((uint32_t)spc.colors.bytes[i * 3]     << 16)
                                   | ((uint32_t)spc.colors.bytes[i * 3 + 1] <<  8)
                                   |  (uint32_t)spc.colors.bytes[i * 3 + 2];
                        _rawColors[idx] = c;
                        _neoSetPixelColor(idx, c);
                    }
                }

                if (spc.show) _neoShow();
                return true;
            }

            default:
                return false;
        }
    }

    /** Reallocate raw color storage when the pixel count changes (NeoDriver). */
    void _resizePixels(uint16_t count) {
        delete[] _rawColors;
        _numPixels = count;
        _rawColors = new uint32_t[count]();
    }

    uint16_t  _numPixels  = 0;
    uint32_t* _rawColors  = nullptr;
    uint8_t   _brightness = 128;
};
