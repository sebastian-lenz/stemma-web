import { BaseNeoPixelDevice } from "./BaseNeoPixelDevice";
import { DeviceType } from "../proto/messages";
import { toColorObject } from "../utils/color";
import type { Connection } from "../usb/Connection";
import type { IDeviceState, IDeviceEvent } from "../proto/messages";

export type LinearEncoderAddress = (typeof LinearEncoder.ADDRESSES)[number];

export type LinearEncoderChangedEvent = CustomEvent<{ value: number }>;

export type LinearEncoderEvents = { changed: LinearEncoderChangedEvent };

export class LinearEncoder extends BaseNeoPixelDevice<
  LinearEncoderAddress,
  LinearEncoderEvents
> {
  private _value = 0;

  static readonly ADDRESSES = <const>[
    0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37, 0x38, 0x39, 0x3a, 0x3b,
    0x3c, 0x3d, 0x3e, 0x3f,
  ];

  constructor(address: LinearEncoderAddress, connection: Connection) {
    super(DeviceType.DEVICE_TYPE_LINEAR_ENCODER, address, connection);

    this._pixels = Array.from({ length: 4 }, () => ({
      red: 0,
      green: 0,
      blue: 0,
    }));
  }

  getLength(): number {
    return 4;
  }

  getValue(): number {
    return this._value;
  }

  override _applyState(deviceState: IDeviceState): void {
    super._applyState(deviceState);
    const state = deviceState.linearEncoder;
    if (!state) return;

    this._brightness = state.brightness ?? 0;
    this._value = state.value ?? 0;

    if (state.pixels) {
      this._pixels = state.pixels.map(toColorObject);
    }
  }

  override _applyEvent(event: IDeviceEvent): void {
    const { linearChanged } = event;
    if (!linearChanged) return;

    this._value = linearChanged.value ?? this._value;

    this.dispatch("changed", {
      value: this._value,
    });
  }
}
