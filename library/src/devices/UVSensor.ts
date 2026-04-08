import { BaseDevice } from "./BaseDevice";
import { DeviceType, UVSensorGain, UVSensorMode, UVSensorResolution } from "../proto/messages";
import type { Connection } from "../usb/Connection";
import type { IDeviceState, IDeviceEvent } from "../proto/messages";

export type UVSensorAddress = (typeof UVSensor.ADDRESSES)[number];

export type UVSensorEvent = CustomEvent<{
  value: number;
}>;

export type UVSensorEvents = {
  changed: UVSensorEvent;
};

export { UVSensorGain, UVSensorMode, UVSensorResolution };

export class UVSensor extends BaseDevice<UVSensorAddress, UVSensorEvents> {
  private _value      = 0;
  private _mode       = UVSensorMode.UV_SENSOR_MODE_ALS;
  private _gain       = UVSensorGain.UV_SENSOR_GAIN_3;
  private _resolution = UVSensorResolution.UV_SENSOR_RESOLUTION_18_BIT;

  static readonly ADDRESSES: Array<number> = [0x53];
  static readonly EVENTS:    Array<string>  = ["changed"];

  constructor(address: UVSensorAddress, connection: Connection) {
    super(DeviceType.DEVICE_TYPE_UV_SENSOR, address, connection);
  }

  getValue(): number {
    return this._value;
  }

  getGain(): UVSensorGain {
    return this._gain;
  }

  getMode(): UVSensorMode {
    return this._mode;
  }

  getResolution(): UVSensorResolution {
    return this._resolution;
  }

  async setGain(value: UVSensorGain): Promise<boolean> {
    this._gain = value;
    const id = await this._send({ setUvGain: { gain: value } });
    return id > 0;
  }

  async setMode(value: UVSensorMode): Promise<boolean> {
    this._mode = value;
    const id = await this._send({ setUvMode: { mode: value } });
    return id > 0;
  }

  async setResolution(value: UVSensorResolution): Promise<boolean> {
    this._resolution = value;
    const id = await this._send({ setUvResolution: { resolution: value } });
    return id > 0;
  }

  override _applyState(deviceState: IDeviceState): void {
    super._applyState(deviceState);

    const state = deviceState.uvSensor;
    if (!state) return;

    this._value      = state.value      ?? 0;
    this._mode       = state.mode       ?? this._mode;
    this._gain       = state.gain       ?? this._gain;
    this._resolution = state.resolution ?? this._resolution;
  }

  override _applyEvent(event: IDeviceEvent): void {
    const data = event.uvSensorData;
    if (!data) return;

    this._value = data.value ?? 0;
    this._dispatch("changed", { value: this._value });
  }
}
