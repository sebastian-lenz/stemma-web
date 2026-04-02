import { DeviceType } from './types.js';
import { BaseNeoPixelDevice, toColorObject, type SendDeviceCommand } from './base-device.js';
import type { IDeviceState, IDeviceEvent } from '../proto/messages.js';

// ── Public types ──────────────────────────────────────────────────────────────

export type LinearEncoderAddress =
    | 0x30 | 0x31 | 0x32 | 0x33 | 0x34 | 0x35 | 0x36 | 0x37
    | 0x38 | 0x39 | 0x3A | 0x3B | 0x3C | 0x3D | 0x3E | 0x3F;

export type LinearEncoderEvent = CustomEvent<{ value: number }>;

// ── Implementation ────────────────────────────────────────────────────────────

export class LinearEncoderDevice
    extends BaseNeoPixelDevice<LinearEncoderAddress>
{
    private _value = 0;

    constructor(address: LinearEncoderAddress, send: SendDeviceCommand) {
        super(DeviceType.DEVICE_TYPE_LINEAR_ENCODER, address, send);
        // Fixed 4-pixel strip
        this._pixels = Array.from({ length: 4 }, () => ({ red: 0, green: 0, blue: 0 }));
    }

    getLength(): number { return 4; }
    getValue(): number  { return this._value; }

    override _applyState(ds: IDeviceState): void {
        super._applyState(ds);
        const s = ds.linearEncoder;
        if (!s) return;
        this._brightness = s.brightness ?? 0;
        this._pixels = s.pixels.map(toColorObject);
        this._value = s.value ?? 0;
    }

    override _applyEvent(de: IDeviceEvent): void {
        if (de.linearChanged) {
            this._value = de.linearChanged.value ?? this._value;
            this.dispatchEvent(new CustomEvent('changed', {
                detail: { value: this._value },
            }) as LinearEncoderEvent);
        }
    }
}
