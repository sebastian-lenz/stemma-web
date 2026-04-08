import { BaseDevice } from "./BaseDevice";
import { DeviceType, PressureSensorChipset, PressureSensorDataRate } from "../proto/messages";
import type { Connection } from "../usb/Connection";
import type { IDeviceState, IDeviceEvent } from "../proto/messages";

export type PressureSensorAddress = (typeof PressureSensor.ADDRESSES)[number];

export type PressureSensorEvent = CustomEvent<{
  pressure: number;
  temperature: number;
}>;

export type PressureSensorEvents = {
  changed: PressureSensorEvent;
};

export { PressureSensorDataRate };

export class PressureSensor extends BaseDevice<
  PressureSensorAddress,
  PressureSensorEvents
> {
  private _pressure    = 0;
  private _temperature = 0;
  private _dataRate    = PressureSensorDataRate.PRESSURE_SENSOR_DATA_RATE_25_HZ;
  private _chipset: PressureSensorChipset;

  static readonly ADDRESSES: Array<number> = [0x5d, 0x5c];
  static readonly EVENTS:    Array<string>  = ["changed"];

  constructor(
    address: PressureSensorAddress,
    chipset: PressureSensorChipset,
    connection: Connection,
  ) {
    super(DeviceType.DEVICE_TYPE_PRESSURE_SENSOR, address, connection);
    this._chipset = chipset;
  }

  override connect() {
    return this._request({ start: { pressureSensorChipset: this._chipset } });
  }

  getDataRate(): PressureSensorDataRate {
    return this._dataRate;
  }

  getPressure(): number {
    return this._pressure;
  }

  getTemperature(): number {
    return this._temperature;
  }

  async setDataRate(value: PressureSensorDataRate): Promise<boolean> {
    this._dataRate = value;
    const id = await this._send({ setPressureRate: { rate: value } });
    return id > 0;
  }

  override _applyState(deviceState: IDeviceState): void {
    super._applyState(deviceState);

    const state = deviceState.pressureSensor;
    if (!state) return;

    this._pressure    = state.pressure    ?? 0;
    this._temperature = state.temperature ?? 0;
    this._dataRate    = state.dataRate    ?? this._dataRate;
  }

  override _applyEvent(event: IDeviceEvent): void {
    const data = event.pressureSensorData;
    if (!data) return;

    this._pressure    = data.pressure    ?? 0;
    this._temperature = data.temperature ?? 0;

    this._dispatch("changed", {
      pressure:    this._pressure,
      temperature: this._temperature,
    });
  }
}
