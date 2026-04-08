import { BaseDevice } from "./devices/BaseDevice";
import { Connection, type ConnectionEvents } from "./usb/Connection";
import { CO2Sensor } from "./devices/CO2Sensor";
import { DistanceSensor } from "./devices/DistanceSensor";
import { Gyroscope } from "./devices/Gyroscope";
import { LinearEncoder } from "./devices/LinearEncoder";
import { NFCTag } from "./devices/NFCTag";
import { NeoDriver } from "./devices/NeoDriver";
import { PressureSensor } from "./devices/PressureSensor";
import { RFIDReader } from "./devices/RFIDReader";
import { RotaryEncoder } from "./devices/RotaryEncoder";
import { TouchSensor } from "./devices/TouchSensor";
import { Trinkey } from "./devices/Trinkey";
import { UVSensor } from "./devices/UVSensor";
import {
  DeviceType,
  GyroscopeChipset,
  PressureSensorChipset,
} from "./proto/messages";
import { TypedEventTarget } from "./utils/events";
import type { CO2SensorAddress } from "./devices/CO2Sensor";
import type { GyroscopeAddress } from "./devices/Gyroscope";
import type { LinearEncoderAddress } from "./devices/LinearEncoder";
import type { NeoDriverAddress } from "./devices/NeoDriver";
import type { PressureSensorAddress } from "./devices/PressureSensor";
import type { RFIDReaderAddress } from "./devices/RFIDReader";
import type { Response } from "./proto/messages";
import type { RotaryEncoderAddress } from "./devices/RotaryEncoder";
import type { TouchSensorAddress } from "./devices/TouchSensor";

export type DeviceManagerEvents = ConnectionEvents;

function toAddress<T extends number>(
  address: T | number,
  addresses: ReadonlyArray<T>,
): T {
  if (addresses.indexOf(address as T) !== -1) {
    return address as T;
  } else if (address >= 0 && address < addresses.length) {
    return addresses[address];
  } else {
    return addresses[0];
  }
}

export class DeviceManager extends TypedEventTarget<DeviceManagerEvents> {
  private readonly _connection: Connection;
  private readonly _devices = new Map<string, BaseDevice<number>>();

  constructor() {
    super();

    this._connection = new Connection(this);

    this.addEventListener("disconnect", this._onDisconnected.bind(this));
    this.addEventListener("response", this._onResponse.bind(this));
  }

  getCO2Sensor(
    addressOrIndex: CO2SensorAddress | number = CO2Sensor.ADDRESSES[0],
  ) {
    const address = toAddress(addressOrIndex, CO2Sensor.ADDRESSES);
    return this._createDevice(
      DeviceType.DEVICE_TYPE_CO2_SENSOR,
      address,
      () => new CO2Sensor(address, this._connection),
    );
  }

  getDistanceSensor() {
    const address = DistanceSensor.ADDRESSES[0];
    return this._createDevice(
      DeviceType.DEVICE_TYPE_DISTANCE_SENSOR,
      address,
      () => new DistanceSensor(address, this._connection),
    );
  }

  getGyroscope(
    addressOrIndex: GyroscopeAddress | number = Gyroscope.ADDRESSES[0],
    chipset: GyroscopeChipset = GyroscopeChipset.GYROSCOPE_CHIPSET_LSM6DSOX,
  ) {
    const address = toAddress(addressOrIndex, Gyroscope.ADDRESSES);

    return this._createDevice(
      DeviceType.DEVICE_TYPE_GYROSCOPE,
      address,
      () => new Gyroscope(address, chipset, this._connection),
    );
  }

  getLinearEncoder(
    addressOrIndex: LinearEncoderAddress | number = LinearEncoder.ADDRESSES[0],
  ) {
    const address = toAddress(addressOrIndex, LinearEncoder.ADDRESSES);

    return this._createDevice(
      DeviceType.DEVICE_TYPE_LINEAR_ENCODER,
      address,
      () => new LinearEncoder(address, this._connection),
    );
  }

  getNFCTag() {
    const address = NFCTag.ADDRESSES[0];
    return this._createDevice(
      DeviceType.DEVICE_TYPE_NFC_TAG,
      address,
      () => new NFCTag(address, this._connection),
    );
  }

  getNeoDriver(
    addressOrIndex: NeoDriverAddress | number = NeoDriver.ADDRESSES[0],
  ) {
    const address = toAddress(addressOrIndex, NeoDriver.ADDRESSES);

    return this._createDevice(
      DeviceType.DEVICE_TYPE_NEO_DRIVER,
      address,
      () => new NeoDriver(address, this._connection),
    );
  }

  getPressureSensor(
    addressOrIndex: PressureSensorAddress | number = PressureSensor
      .ADDRESSES[0],
    chipset: PressureSensorChipset = PressureSensorChipset.PRESSURE_SENSOR_CHIPSET_LPS25,
  ) {
    const address = toAddress(addressOrIndex, PressureSensor.ADDRESSES);
    return this._createDevice(
      DeviceType.DEVICE_TYPE_PRESSURE_SENSOR,
      address,
      () => new PressureSensor(address, chipset, this._connection),
    );
  }

  getRFIDReader(
    addressOrIndex: RFIDReaderAddress | number = RFIDReader.ADDRESSES[0],
  ) {
    const address = toAddress(addressOrIndex, RFIDReader.ADDRESSES);
    return this._createDevice(
      DeviceType.DEVICE_TYPE_RFID_READER,
      address,
      () => new RFIDReader(address, this._connection),
    );
  }

  getRotaryEncoder(
    addressOrIndex: RotaryEncoderAddress | number = RotaryEncoder.ADDRESSES[0],
  ) {
    const address = toAddress(addressOrIndex, RotaryEncoder.ADDRESSES);

    return this._createDevice(
      DeviceType.DEVICE_TYPE_ROTARY_ENCODER,
      address,
      () => new RotaryEncoder(address, this._connection),
    );
  }

  getTouchSensor(
    addressOrIndex: TouchSensorAddress | number = TouchSensor.ADDRESSES[0],
  ) {
    const address = toAddress(addressOrIndex, TouchSensor.ADDRESSES);

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

  getUVSensor() {
    const address = UVSensor.ADDRESSES[0];
    return this._createDevice(
      DeviceType.DEVICE_TYPE_UV_SENSOR,
      address,
      () => new UVSensor(address, this._connection),
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
    device.connect();

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
