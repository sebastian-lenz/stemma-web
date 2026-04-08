import { BaseDevice } from "./BaseDevice";
import { DeviceType } from "../proto/messages";
import type { Connection } from "../usb/Connection";
import type { IDeviceState, IDeviceEvent } from "../proto/messages";

export type DistanceSensorAddress = (typeof DistanceSensor.ADDRESSES)[number];

export type DistanceSensorEvent = CustomEvent<{
  distance: number;
}>;

export type DistanceSensorEvents = {
  changed: DistanceSensorEvent;
};

export class DistanceSensor extends BaseDevice<
  DistanceSensorAddress,
  DistanceSensorEvents
> {
  private _distance = 0;

  static readonly ADDRESSES: Array<number> = [0x29];
  static readonly EVENTS:    Array<string>  = ["changed"];

  constructor(address: DistanceSensorAddress, connection: Connection) {
    super(DeviceType.DEVICE_TYPE_DISTANCE_SENSOR, address, connection);
  }

  getDistance(): number {
    return this._distance;
  }

  override _applyState(deviceState: IDeviceState): void {
    super._applyState(deviceState);

    const state = deviceState.distanceSensor;
    if (!state) return;

    this._distance = state.distance ?? 0;
  }

  override _applyEvent(event: IDeviceEvent): void {
    const data = event.distanceSensorData;
    if (!data) return;

    this._distance = data.distance ?? 0;
    this._dispatch("changed", { distance: this._distance });
  }
}
