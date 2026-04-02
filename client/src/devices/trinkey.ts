import { DeviceType } from "./types.js";
import {
  BaseNeoPixelDevice,
  toColorObject,
  type SendDeviceCommand,
} from "./base-device.js";
import type { IDeviceState } from "../proto/messages.js";

// ── Implementation ────────────────────────────────────────────────────────────

export class TrinkeyDevice extends BaseNeoPixelDevice<0> {
  constructor(send: SendDeviceCommand) {
    super(DeviceType.DEVICE_TYPE_TRINKEY, 0, send);

    this._pixels = Array.from({ length: 1 }, () => ({
      red: 0,
      green: 0,
      blue: 0,
    }));
  }

  getLength(): number {
    return 1;
  }

  override _applyState(ds: IDeviceState): void {
    super._applyState(ds);

    const s = ds.trinkey;
    if (!s) return;
    
    this._brightness = s.brightness ?? 0;
    if (s.pixel) this._pixels[0] = toColorObject(s.pixel);
  }
}
