import { BaseNeoPixelDevice } from "./BaseNeoPixelDevice";
import { DeviceType } from "../proto/messages";
import type { IDeviceState } from "../proto/messages";
import type { Connection } from "../usb/Connection";

export type NeoDriverAddress = (typeof NeoDriver.ADDRESSES)[number];

export class NeoDriver extends BaseNeoPixelDevice<NeoDriverAddress> {
  private _length: number = 0;

  static readonly ADDRESSES: Array<number> = [
    0x60, 0x61, 0x62, 0x63, 0x64, 0x65, 0x66, 0x67,
  ];

  constructor(address: NeoDriverAddress, connection: Connection) {
    super(DeviceType.DEVICE_TYPE_NEO_DRIVER, address, connection);
  }

  getLength(): number {
    return this._length;
  }

  async setLength(value: number): Promise<void> {
    this._length = value;
    this._pixels = new Array(value).fill({ red: 0, green: 0, blue: 0 });

    await this._send({
      setLength: { length: value },
    });
  }

  override _applyState(deviceState: IDeviceState): void {
    super._applyState(deviceState);

    const { neoDriver: state } = deviceState;
    if (!state) return;

    this._brightness = state.brightness ?? 0;
    this._length = state.length ?? this._length;
  }
}
