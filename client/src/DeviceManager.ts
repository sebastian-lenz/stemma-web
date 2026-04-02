import { BaseDevice } from "./devices/BaseDevice";
import { Connection, type ConnectionEvents } from "./usb/Connection";
import { Gyroscope } from "./devices/Gyroscope";
import { DeviceType, GyroscopeChipset } from "./proto/messages";
import { LinearEncoder } from "./devices/LinearEncoder";
import { NeoDriver } from "./devices/NeoDriver";
import { RotaryEncoder } from "./devices/RotaryEncoder";
import { TouchSensor } from "./devices/TouchSensor";
import { Trinkey } from "./devices/Trinkey";
import { TypedEventTarget } from "./utils/events";
import type { GyroscopeAddress } from "./devices/Gyroscope";
import type { LinearEncoderAddress } from "./devices/LinearEncoder";
import type { NeoDriverAddress } from "./devices/NeoDriver";
import type { Response } from "./proto/messages";
import type { RotaryEncoderAddress } from "./devices/RotaryEncoder";
import type { TouchSensorAddress } from "./devices/TouchSensor";

export type DeviceManagerEvents = ConnectionEvents;

export class DeviceManager extends TypedEventTarget<DeviceManagerEvents> {
  private readonly _connection: Connection;
  private readonly _devices = new Map<string, BaseDevice<number>>();

  constructor() {
    super();

    this._connection = new Connection(this);

    this.addEventListener("disconnect", this._onDisconnected.bind(this));
    this.addEventListener("response", this._onResponse.bind(this));
  }

  getGyroscope(
    address: GyroscopeAddress = Gyroscope.ADDRESSES[0],
    chipset: GyroscopeChipset = GyroscopeChipset.GYROSCOPE_CHIPSET_LSM6DSOX,
  ) {
    return this._createDevice(
      DeviceType.DEVICE_TYPE_GYROSCOPE,
      address,
      () => new Gyroscope(address, chipset, this._connection),
    );
  }

  getLinearEncoder(address: LinearEncoderAddress = LinearEncoder.ADDRESSES[0]) {
    return this._createDevice(
      DeviceType.DEVICE_TYPE_LINEAR_ENCODER,
      address,
      () => new LinearEncoder(address, this._connection),
    );
  }

  getNeoDriver(address: NeoDriverAddress = NeoDriver.ADDRESSES[0]) {
    return this._createDevice(
      DeviceType.DEVICE_TYPE_NEO_DRIVER,
      address,
      () => new NeoDriver(address as NeoDriverAddress, this._connection),
    );
  }

  getRotaryEncoder(address: RotaryEncoderAddress = RotaryEncoder.ADDRESSES[0]) {
    return this._createDevice(
      DeviceType.DEVICE_TYPE_ROTARY_ENCODER,
      address,
      () => new RotaryEncoder(address, this._connection),
    );
  }

  getTouchSensor(address: TouchSensorAddress = TouchSensor.ADDRESSES[0]) {
    return this._createDevice(
      DeviceType.DEVICE_TYPE_TOUCH_SENSOR,
      address,
      () => new TouchSensor(address, this._connection),
    );
  }

  getTrinkey() {
    return this._createDevice(
      DeviceType.DEVICE_TYPE_TRINKEY,
      0,
      () => new Trinkey(this._connection),
    );
  }

  get isConnected(): boolean {
    return this._connection.isConnected;
  }

  async connect(): Promise<void> {
    return this._connection.connect();
  }

  async disconnect(): Promise<void> {
    return this._connection.disconnect();
  }

  private _createDevice<T extends BaseDevice<number>>(
    type: DeviceType,
    address: number,
    factory: () => T,
  ): T {
    const key = this._deviceKey(type, address);
    if (this._devices.has(key)) {
      return this._devices.get(key) as T;
    }

    const device = factory();
    this._devices.set(key, device);
    return device;
  }

  private _deviceKey(type: DeviceType, address: number): string {
    return `${type}:${address}`;
  }

  private _onDisconnected() {
    this._devices.clear();
  }

  private _onResponse({ detail: response }: CustomEvent<Response>) {
    if (response.deviceState) {
      const state = response.deviceState;
      const device = this._devices.get(
        this._deviceKey(state.type ?? 0, state.address ?? 0),
      );

      device?._applyState(state);
    }

    if (response.deviceEvent) {
      const event = response.deviceEvent;
      const device = this._devices.get(
        this._deviceKey(event.type ?? 0, event.address ?? 0),
      );

      device?._applyEvent(event);
    }
  }
}
