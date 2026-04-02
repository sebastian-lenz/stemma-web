import { DeviceType, type GyroscopeChipset } from "./devices/types.js";
import type { DeviceCommandPayload } from "./devices/base-device.js";
import { BaseDevice } from "./devices/base-device.js";
import { TrinkeyDevice } from "./devices/trinkey.js";
import {
  NeoDriverDevice,
  type NeoDriverAddress,
} from "./devices/neo-driver.js";
import {
  RotaryEncoderDevice,
  type RotaryEncoderAddress,
} from "./devices/rotary-encoder.js";
import {
  LinearEncoderDevice,
  type LinearEncoderAddress,
} from "./devices/linear-encoder.js";
import {
  TouchSensorDevice,
  type TouchSensorAddress,
} from "./devices/touch-sensor.js";
import { GyroscopeDevice, type GyroscopeAddress } from "./devices/gyroscope.js";
import { Connection } from "./usb/Connection.js";
import type { Response } from "./proto/messages.js";

export type {
  Vector,
  Color,
  ColorObject,
  DeviceType,
  DeviceIdentifier,
  NeoPixelDevice,
  DataRate,
  AccelerationRange,
  RotationRange,
  GyroscopeChipset,
} from "./devices/types.js";
export type { NeoDriverAddress } from "./devices/neo-driver.js";
export type {
  RotaryEncoderAddress,
  RotaryEncoderEvent,
} from "./devices/rotary-encoder.js";
export type {
  LinearEncoderAddress,
  LinearEncoderEvent,
} from "./devices/linear-encoder.js";
export type {
  TouchSensorAddress,
  TouchSensorEvent,
} from "./devices/touch-sensor.js";
export type { GyroscopeAddress, GyroscopeEvent } from "./devices/gyroscope.js";
export {
  TrinkeyDevice,
  NeoDriverDevice,
  RotaryEncoderDevice,
  LinearEncoderDevice,
  TouchSensorDevice,
  GyroscopeDevice,
};

export class DeviceManager extends EventTarget {
  private readonly _connection: Connection;
  private readonly _devices = new Map<string, BaseDevice<number>>();

  constructor() {
    super();
    this._connection = new Connection(this);
  }

  async startTrinkey(): Promise<TrinkeyDevice> {
    return this._startDevice(
      DeviceType.DEVICE_TYPE_TRINKEY,
      0,
      (_addr, send) => new TrinkeyDevice(send),
      {},
    ) as Promise<TrinkeyDevice>;
  }

  async startNeoDriver(
    address: NeoDriverAddress = 0x60,
  ): Promise<NeoDriverDevice> {
    return this._startDevice(
      DeviceType.DEVICE_TYPE_NEO_DRIVER,
      address,
      (addr, send) => new NeoDriverDevice(addr as NeoDriverAddress, send),
      {},
    ) as Promise<NeoDriverDevice>;
  }

  async startRotaryEncoder(
    address: RotaryEncoderAddress = 0x36,
  ): Promise<RotaryEncoderDevice> {
    return this._startDevice(
      DeviceType.DEVICE_TYPE_ROTARY_ENCODER,
      address,
      (addr, send) =>
        new RotaryEncoderDevice(addr as RotaryEncoderAddress, send),
      {},
    ) as Promise<RotaryEncoderDevice>;
  }

  async startLinearEncoder(
    address: LinearEncoderAddress = 0x30,
  ): Promise<LinearEncoderDevice> {
    return this._startDevice(
      DeviceType.DEVICE_TYPE_LINEAR_ENCODER,
      address,
      (addr, send) =>
        new LinearEncoderDevice(addr as LinearEncoderAddress, send),
      {},
    ) as Promise<LinearEncoderDevice>;
  }

  async startTouchSensor(
    address: TouchSensorAddress = 0x5a,
  ): Promise<TouchSensorDevice> {
    return this._startDevice(
      DeviceType.DEVICE_TYPE_TOUCH_SENSOR,
      address,
      (addr, send) => new TouchSensorDevice(addr as TouchSensorAddress, send),
      {},
    ) as Promise<TouchSensorDevice>;
  }

  async startGyroscope(
    chipset: GyroscopeChipset,
    address: GyroscopeAddress = 0x6a,
  ): Promise<GyroscopeDevice> {
    return this._startDevice(
      DeviceType.DEVICE_TYPE_GYROSCOPE,
      address,
      (addr, send) => new GyroscopeDevice(addr as GyroscopeAddress, send),
      { start: { gyroscopeChipset: chipset } },
    ) as Promise<GyroscopeDevice>;
  }

  private _deviceKey(type: DeviceType, address: number): string {
    return `${type}:${address}`;
  }

  private async _startDevice<T extends BaseDevice<number>>(
    type: DeviceType,
    address: number,
    factory: (
      address: number,
      send: (
        t: DeviceType,
        a: number,
        p: DeviceCommandPayload,
      ) => Promise<number>,
    ) => T,
    startPayload: DeviceCommandPayload,
  ): Promise<T> {
    const key = this._deviceKey(type, address);
    if (this._devices.has(key)) return this._devices.get(key) as T;

    const device = factory(address, this._sendDeviceCommand.bind(this));
    this._devices.set(key, device);
    await this._sendDeviceCommand(type, address, { start: startPayload });
    return device;
  }

  private _sendDeviceCommand(
    deviceType: DeviceType,
    address: number,
    payload: DeviceCommandPayload,
  ): Promise<number> {
    return this._connection.send({
      type: "device_command",
      deviceType,
      address,
      payload,
    });
  }

  private _onResponse({ detail: response }: CustomEvent<Response>) {
    if (response.deviceState) {
      const ds = response.deviceState;
      const device = this._devices.get(
        this._deviceKey(ds.type ?? 0, ds.address ?? 0),
      );
      device?._applyState(ds);
    }

    if (response.deviceEvent) {
      const de = response.deviceEvent;
      const device = this._devices.get(
        this._deviceKey(de.type ?? 0, de.address ?? 0),
      );
      device?._applyEvent(de);
    }
  }

  private _onDisconnected() {
    this._devices.clear();
  }
}
