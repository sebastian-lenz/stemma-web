import { BaseNeoPixelDevice } from "./BaseNeoPixelDevice";
import { DeviceType } from "../proto/messages";
import type { Connection } from "../usb/Connection";
import type { IDeviceState } from "../proto/messages";

export class Trinkey extends BaseNeoPixelDevice {
  constructor(connection: Connection) {
    super(DeviceType.DEVICE_TYPE_TRINKEY, 0, connection);

    this._pixels = [0];
  }

  getLength(): number {
    return 1;
  }

  override _applyState(deviceState: IDeviceState): void {
    super._applyState(deviceState);

    const { trinkey: state } = deviceState;
    if (!state) return;

    this._brightness = state.brightness ?? 0;

    if (state.pixel) {
      this._pixels[0] = state.pixel;
    }
  }
}
