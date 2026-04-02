import type { Vector } from "./types.js";
import {
  DeviceType,
  AccelerationRange,
  DataRate,
  RotationRange,
} from "./types.js";
import { BaseDevice, type SendDeviceCommand } from "./base-device.js";
import type { IDeviceState, IDeviceEvent } from "../proto/messages.js";

// ── Public types ──────────────────────────────────────────────────────────────

export type GyroscopeAddress = 0x6a | 0x6b;

export type GyroscopeEvent = CustomEvent<{
  acceleration: Vector;
  temperature: number;
  rotation: Vector;
}>;

// ── Implementation ────────────────────────────────────────────────────────────

export class GyroscopeDevice extends BaseDevice<GyroscopeAddress> {
  private _acceleration: Vector = { x: 0, y: 0, z: 0 };
  private _rotation: Vector = { x: 0, y: 0, z: 0 };
  private _temperature = 0;
  private _accelerationRange = AccelerationRange.G_4;
  private _accelerationDataRate = DataRate.HZ_104;
  private _rotationRange = RotationRange.DPS_250;
  private _rotationDataRate = DataRate.HZ_104;

  constructor(address: GyroscopeAddress, send: SendDeviceCommand) {
    super(DeviceType.DEVICE_TYPE_GYROSCOPE, address, send);
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
    const id = await this._send(this.id.type, this.id.address, {
      setAccelRange: { range: value },
    });
    return id > 0;
  }

  async setAccelerationDataRate(value: DataRate): Promise<boolean> {
    this._accelerationDataRate = value;
    const id = await this._send(this.id.type, this.id.address, {
      setAccelRate: { rate: value },
    });
    return id > 0;
  }

  async setRotationRange(value: RotationRange): Promise<boolean> {
    this._rotationRange = value;
    const id = await this._send(this.id.type, this.id.address, {
      setRotRange: { range: value },
    });
    return id > 0;
  }

  async setRotationDataRate(value: DataRate): Promise<boolean> {
    this._rotationDataRate = value;
    const id = await this._send(this.id.type, this.id.address, {
      setRotRate: { rate: value },
    });
    return id > 0;
  }

  override _applyState(ds: IDeviceState): void {
    super._applyState(ds);
    const s = ds.gyroscope;
    if (!s) return;
    this._acceleration = {
      x: s.acceleration?.x ?? 0,
      y: s.acceleration?.y ?? 0,
      z: s.acceleration?.z ?? 0,
    };
    this._rotation = {
      x: s.rotation?.x ?? 0,
      y: s.rotation?.y ?? 0,
      z: s.rotation?.z ?? 0,
    };
    this._temperature = s.temperature ?? 0;
    this._accelerationRange = (s.accelerationRange ??
      this._accelerationRange) as AccelerationRange;
    this._accelerationDataRate = (s.accelerationDataRate ??
      this._accelerationDataRate) as DataRate;
    this._rotationRange = (s.rotationRange ??
      this._rotationRange) as RotationRange;
    this._rotationDataRate = (s.rotationDataRate ??
      this._rotationDataRate) as DataRate;
  }

  override _applyEvent(de: IDeviceEvent): void {
    if (de.gyroscopeData) {
      const d = de.gyroscopeData;
      if (d.acceleration)
        this._acceleration = {
          x: d.acceleration.x ?? 0,
          y: d.acceleration.y ?? 0,
          z: d.acceleration.z ?? 0,
        };
      if (d.rotation)
        this._rotation = {
          x: d.rotation.x ?? 0,
          y: d.rotation.y ?? 0,
          z: d.rotation.z ?? 0,
        };
      if (d.temperature !== undefined) this._temperature = d.temperature ?? 0;

      this.dispatchEvent(
        new CustomEvent("changed", {
          detail: {
            acceleration: { ...this._acceleration },
            rotation: { ...this._rotation },
            temperature: this._temperature,
          },
        }) as GyroscopeEvent,
      );
    }
  }
}
