import { DeviceType } from "./types.js";
import { BaseNeoPixelDevice, type SendDeviceCommand } from "./base-device.js";
import type { IDeviceState } from "../proto/messages.js";

// ── Public types ──────────────────────────────────────────────────────────────

export type NeoDriverAddress =
  | 0x60
  | 0x61
  | 0x62
  | 0x63
  | 0x64
  | 0x65
  | 0x66
  | 0x67;

// ── Implementation ────────────────────────────────────────────────────────────

export class NeoDriverDevice extends BaseNeoPixelDevice<NeoDriverAddress> {
  private _length = 0;

  constructor(address: NeoDriverAddress, send: SendDeviceCommand) {
    super(DeviceType.DEVICE_TYPE_NEO_DRIVER, address, send);
  }

  getLength(): number {
    return this._length;
  }

  async setLength(value: number): Promise<void> {
    this._length = value;
    this._pixels = new Array(value).fill({ red: 0, green: 0, blue: 0 });
    await this._send(this.id.type, this.id.address, {
      setLength: { length: value },
    });
  }

  override _applyState(ds: IDeviceState): void {
    super._applyState(ds);
    const s = ds.neoDriver;
    if (!s) return;
    this._brightness = s.brightness ?? 0;
    this._length = s.length ?? this._length;
  }
}
