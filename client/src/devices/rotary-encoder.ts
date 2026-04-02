import { DeviceType } from "./types.js";
import {
  BaseNeoPixelDevice,
  toColorObject,
  type SendDeviceCommand,
} from "./base-device.js";
import type { IDeviceState, IDeviceEvent } from "../proto/messages.js";

// ── Public types ──────────────────────────────────────────────────────────────

export type RotaryEncoderAddress =
  | 0x36
  | 0x37
  | 0x38
  | 0x39
  | 0x3a
  | 0x3b
  | 0x3c
  | 0x3d;

export type RotaryEncoderEvent = CustomEvent<{
  isPressed: boolean;
  value: number;
}>;

// ── Implementation ────────────────────────────────────────────────────────────

export class RotaryEncoderDevice extends BaseNeoPixelDevice<RotaryEncoderAddress> {
  private _value = 0;
  private _pressed = false;

  constructor(address: RotaryEncoderAddress, send: SendDeviceCommand) {
    super(DeviceType.DEVICE_TYPE_ROTARY_ENCODER, address, send);
    // Single pixel
    this._pixels = [{ red: 0, green: 0, blue: 0 }];
  }

  getLength(): number {
    return 1;
  }

  isPressed(): boolean {
    return this._pressed;
  }
  getValue(): number {
    return this._value;
  }

  override _applyState(ds: IDeviceState): void {
    super._applyState(ds);
    const s = ds.rotaryEncoder;
    if (!s) return;
    this._brightness = s.brightness ?? 0;
    if (s.pixel) this._pixels[0] = toColorObject(s.pixel);
    this._value = s.value ?? 0;
    this._pressed = s.isPressed ?? false;
  }

  override _applyEvent(de: IDeviceEvent): void {
    if (de.rotaryChanged) {
      this._value = de.rotaryChanged.value ?? this._value;
      this._pressed = de.rotaryChanged.isPressed ?? this._pressed;
      this.dispatchEvent(
        new CustomEvent("changed", {
          detail: { isPressed: this._pressed, value: this._value },
        }) as RotaryEncoderEvent,
      );
    } else if (de.rotaryButton) {
      this._pressed = de.rotaryButton.isPressed ?? this._pressed;
      const eventName = this._pressed ? "pressed" : "released";
      this.dispatchEvent(
        new CustomEvent(eventName, {
          detail: { isPressed: this._pressed, value: this._value },
        }) as RotaryEncoderEvent,
      );
    }
  }
}
