import { BaseDevice } from "./BaseDevice";
import { DeviceType } from "../proto/messages";
import type { Connection } from "../usb/Connection";
import type { Vector } from "../utils/types";
import type {
  IDeviceState,
  IDeviceEvent,
  GyroscopeChipset,
  Response,
} from "../proto/messages";

import { AccelerationRange, DataRate, RotationRange } from "../proto/messages";

export type GyroscopeAddress = (typeof Gyroscope.ADDRESSES)[number];

export type GyroscopeEvent = CustomEvent<{
  acceleration: Vector;
  temperature: number;
  rotation: Vector;
}>;

export type GyrosocopeEvents = {
  changed: GyroscopeEvent;
};

export class Gyroscope extends BaseDevice<GyroscopeAddress, GyrosocopeEvents> {
  private _acceleration: Vector = { x: 0, y: 0, z: 0 };
  private _rotation: Vector = { x: 0, y: 0, z: 0 };
  private _temperature = 0;

  private _accelerationRange =
    AccelerationRange.GYROSCOPE_ACCELERATION_RANGE_4_G;
  private _accelerationDataRate = DataRate.GYROSCOPE_DATA_RATE_HZ_104;
  private _chipset: GyroscopeChipset;
  private _rotationRange = RotationRange.GYROSCOPE_ROTATION_RANGE_DPS_250;
  private _rotationDataRate = DataRate.GYROSCOPE_DATA_RATE_HZ_104;

  static readonly ADDRESSES: Array<number> = [0x6a, 0x6b];
  static readonly EVENTS: Array<string> = ["changed"];

  constructor(
    address: GyroscopeAddress,
    chipset: GyroscopeChipset,
    connection: Connection,
  ) {
    super(DeviceType.DEVICE_TYPE_GYROSCOPE, address, connection);

    this._chipset = chipset;
  }

  override createConnectPromise(): Promise<Response> {
    return this._request({ start: { gyroscopeChipset: this._chipset } });
  }

  getAcceleration(): Vector {
    return { ...this._acceleration };
  }

  getRotation(): Vector {
    return { ...this._rotation };
  }

  getTemperature(): number {
    return this._temperature;
  }

  getAccelerationRange(): AccelerationRange {
    return this._accelerationRange;
  }

  getAccelerationDataRate(): DataRate {
    return this._accelerationDataRate;
  }

  getRotationRange(): RotationRange {
    return this._rotationRange;
  }

  getRotationDataRate(): DataRate {
    return this._rotationDataRate;
  }

  async setAccelerationRange(value: AccelerationRange): Promise<boolean> {
    this._accelerationRange = value;
    const id = await this._send({
      setAccelRange: { range: value },
    });

    return id > 0;
  }

  async setAccelerationDataRate(value: DataRate): Promise<boolean> {
    this._accelerationDataRate = value;
    const id = await this._send({
      setAccelRate: { rate: value },
    });

    return id > 0;
  }

  async setRotationRange(value: RotationRange): Promise<boolean> {
    this._rotationRange = value;
    const id = await this._send({
      setRotRange: { range: value },
    });

    return id > 0;
  }

  async setRotationDataRate(value: DataRate): Promise<boolean> {
    this._rotationDataRate = value;
    const id = await this._send({
      setRotRate: { rate: value },
    });

    return id > 0;
  }

  override _applyState(deviceState: IDeviceState): void {
    super._applyState(deviceState);

    const state = deviceState.gyroscope;
    if (!state) return;

    this._acceleration = {
      x: state.accelerationX ?? 0,
      y: state.accelerationY ?? 0,
      z: state.accelerationZ ?? 0,
    };

    this._rotation = {
      x: state.rotationX ?? 0,
      y: state.rotationY ?? 0,
      z: state.rotationZ ?? 0,
    };

    this._temperature = state.temperature ?? 0;
    this._rotationRange = state.rotationRange ?? this._rotationRange;
    this._rotationDataRate = state.rotationDataRate ?? this._rotationDataRate;

    this._accelerationRange =
      state.accelerationRange ?? this._accelerationRange;

    this._accelerationDataRate =
      state.accelerationDataRate ?? this._accelerationDataRate;
  }

  override _applyEvent(event: IDeviceEvent): void {
    const { gyroscopeData: data } = event;
    if (!data) return;

    this._acceleration = {
      x: data.accelerationX ?? 0,
      y: data.accelerationY ?? 0,
      z: data.accelerationZ ?? 0,
    };

    this._rotation = {
      x: data.rotationX ?? 0,
      y: data.rotationY ?? 0,
      z: data.rotationZ ?? 0,
    };

    if (data.temperature !== undefined) {
      this._temperature = data.temperature ?? 0;
    }

    this._dispatch("changed", {
      acceleration: { ...this._acceleration },
      rotation: { ...this._rotation },
      temperature: this._temperature,
    });
  }
}
