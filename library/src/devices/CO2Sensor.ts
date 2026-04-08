import { BaseDevice } from "./BaseDevice";
import { DeviceType } from "../proto/messages";
import type { Connection } from "../usb/Connection";
import type { IDeviceState, IDeviceEvent } from "../proto/messages";

export type CO2SensorAddress = (typeof CO2Sensor.ADDRESSES)[number];

export type CO2SensorEvent = CustomEvent<{
  co2: number;
  humidity: number;
  temperature: number;
}>;

export type CO2SensorEvents = {
  changed: CO2SensorEvent;
};

export class CO2Sensor extends BaseDevice<CO2SensorAddress, CO2SensorEvents> {
  private _co2         = 0;
  private _humidity    = 0;
  private _temperature = 0;

  static readonly ADDRESSES: Array<number> = [0x62];
  static readonly EVENTS:    Array<string>  = ["changed"];

  constructor(address: CO2SensorAddress, connection: Connection) {
    super(DeviceType.DEVICE_TYPE_CO2_SENSOR, address, connection);
  }

  getCO2(): number {
    return this._co2;
  }

  getHumidity(): number {
    return this._humidity;
  }

  getTemperature(): number {
    return this._temperature;
  }

  override _applyState(deviceState: IDeviceState): void {
    super._applyState(deviceState);

    const state = deviceState.co2Sensor;
    if (!state) return;

    this._co2         = state.co2         ?? 0;
    this._humidity    = state.humidity    ?? 0;
    this._temperature = state.temperature ?? 0;
  }

  override _applyEvent(event: IDeviceEvent): void {
    const data = event.co2SensorData;
    if (!data) return;

    this._co2         = data.co2         ?? 0;
    this._humidity    = data.humidity    ?? 0;
    this._temperature = data.temperature ?? 0;

    this._dispatch("changed", {
      co2:         this._co2,
      humidity:    this._humidity,
      temperature: this._temperature,
    });
  }
}
