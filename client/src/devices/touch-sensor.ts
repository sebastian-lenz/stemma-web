import { DeviceType } from "./types.js";
import { BaseDevice, type SendDeviceCommand } from "./base-device.js";
import type { IDeviceState, IDeviceEvent } from "../proto/messages.js";

// ── Public types ──────────────────────────────────────────────────────────────

export type TouchSensorAddress = 0x5a | 0x5b | 0x5c | 0x5d;

export type TouchSensorEvent = CustomEvent<{
  isPressed: boolean;
  sensorId: number;
}>;

// ── Implementation ────────────────────────────────────────────────────────────

export class TouchSensorDevice extends BaseDevice<TouchSensorAddress> {
  /** Bitmask: bit N is set when sensor N is currently touched. */
  private _touchedMask = 0;

  constructor(address: TouchSensorAddress, send: SendDeviceCommand) {
    super(DeviceType.DEVICE_TYPE_TOUCH_SENSOR, address, send);
  }

  isPressed(sensorId: number): boolean {
    return (this._touchedMask & (1 << sensorId)) !== 0;
  }

  override _applyState(ds: IDeviceState): void {
    super._applyState(ds);
    const s = ds.touchSensor;
    if (!s) return;
    this._touchedMask = s.touchedMask ?? 0;
  }

  override _applyEvent(de: IDeviceEvent): void {
    if (de.touchButton) {
      const sensorId = de.touchButton.sensorId ?? 0;
      const isPressed = de.touchButton.isPressed ?? false;

      if (isPressed) {
        this._touchedMask |= 1 << sensorId;
      } else {
        this._touchedMask &= ~(1 << sensorId);
      }

      const eventName = isPressed ? "pressed" : "released";
      this.dispatchEvent(
        new CustomEvent(eventName, {
          detail: { isPressed, sensorId },
        }) as TouchSensorEvent,
      );
    }
  }
}
