import { BaseDevice } from "./BaseDevice";
import { DeviceType } from "../proto/messages";
import type { Connection } from "../usb/Connection";
import type { IDeviceState, IDeviceEvent } from "../proto/messages";

export type TouchSensorAddress = (typeof TouchSensor.ADDRESSES)[number];

export type TouchSensorEvent = CustomEvent<{
  isPressed: boolean;
  sensorId: number;
}>;

export type TouchSensorEvents = {
  pressed: TouchSensorEvent;
  released: TouchSensorEvent;
};

export class TouchSensor extends BaseDevice<
  TouchSensorAddress,
  TouchSensorEvents
> {
  private _touchedMask = 0;

  static readonly EVENTS: Array<string> = ["pressed", "released"];
  static readonly ADDRESSES: Array<number> = [0x5a, 0x5b];

  constructor(address: TouchSensorAddress, connection: Connection) {
    super(DeviceType.DEVICE_TYPE_TOUCH_SENSOR, address, connection);
  }

  isPressed(sensorId: number): boolean {
    return (this._touchedMask & (1 << sensorId)) !== 0;
  }

  override _applyState(deviceState: IDeviceState): void {
    super._applyState(deviceState);

    const { touchSensor: state } = deviceState;
    if (!state) return;

    this._touchedMask = state.touchedMask ?? 0;
  }

  override _applyEvent(event: IDeviceEvent): void {
    const { touchButton } = event;
    if (!touchButton) return;

    const { _touchedMask: oldMask } = this;
    const newMask = touchButton.touchedMask ?? oldMask;
    this._touchedMask = newMask;

    for (let sensorId = 0; sensorId < 12; sensorId++) {
      const wasPressed = (oldMask & (1 << sensorId)) != 0;
      const isPressed = (newMask & (1 << sensorId)) != 0;

      if (wasPressed === isPressed) {
        continue;
      }

      this._dispatch(isPressed ? "pressed" : "released", {
        isPressed,
        sensorId,
      });
    }
  }
}
