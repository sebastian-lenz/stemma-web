import { BaseNeoPixelDevice } from "./BaseNeoPixelDevice";
import { DeviceType } from "../proto/messages";
import { toColorObject } from "../utils/color";
import type { IDeviceState, IDeviceEvent } from "../proto/messages";
import type { Connection } from "../usb/Connection";

export type RotaryEncoderAddress = (typeof RotaryEncoder.ADDRESSES)[number];

export type RotaryEncoderEvent = CustomEvent<{
  isPressed: boolean;
  value: number;
}>;

export type RotaryEncoderEvents = {
  changed: RotaryEncoderEvent;
  pressed: RotaryEncoderEvent;
  released: RotaryEncoderEvent;
};

export class RotaryEncoder extends BaseNeoPixelDevice<
  RotaryEncoderAddress,
  RotaryEncoderEvents
> {
  private _value = 0;
  private _pressed = false;

  static readonly ADDRESSES = <const>[
    0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b, 0x3c, 0x3d,
  ];

  constructor(address: RotaryEncoderAddress, connection: Connection) {
    super(DeviceType.DEVICE_TYPE_ROTARY_ENCODER, address, connection);

    this._pixels = [{ red: 0, green: 0, blue: 0 }];
  }

  getLength(): number {
    return 1;
  }

  getValue(): number {
    return this._value;
  }

  isPressed(): boolean {
    return this._pressed;
  }

  override _applyState(deviceState: IDeviceState): void {
    super._applyState(deviceState);
    const { rotaryEncoder: state } = deviceState;
    if (!state) return;

    this._brightness = state.brightness ?? 0;
    this._pressed = state.isPressed ?? false;
    this._value = state.value ?? 0;

    if (state.pixel) {
      this._pixels[0] = toColorObject(state.pixel);
    }
  }

  override _applyEvent(event: IDeviceEvent): void {
    if (event.rotaryChanged) {
      this._value = event.rotaryChanged.value ?? this._value;
      this._pressed = event.rotaryChanged.isPressed ?? this._pressed;

      this._dispatch("changed", {
        isPressed: this._pressed,
        value: this._value,
      });
    } else if (event.rotaryButton) {
      this._pressed = event.rotaryButton.isPressed ?? this._pressed;

      this._dispatch(this._pressed ? "pressed" : "released", {
        isPressed: this._pressed,
        value: this._value,
      });
    }
  }
}
