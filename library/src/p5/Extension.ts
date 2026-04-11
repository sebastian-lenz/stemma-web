import { DeviceManager } from "../DeviceManager";
import { getP5Version } from "./utils";
import { CO2Sensor } from "../devices/CO2Sensor";
import { DistanceSensor } from "../devices/DistanceSensor";
import { enablePixelBuffer } from "../devices/BaseNeoPixelDevice";
import { Gyroscope } from "../devices/Gyroscope";
import { LinearEncoder } from "../devices/LinearEncoder";
import { NeoDriver } from "../devices/NeoDriver";
import { PressureSensor } from "../devices/PressureSensor";
import { RFIDReader } from "../devices/RFIDReader";
import { RotaryEncoder } from "../devices/RotaryEncoder";
import { TouchSensor } from "../devices/TouchSensor";
import { UVSensor } from "../devices/UVSensor";

import {
  GyroscopeChipset,
  PressureSensorChipset,
  PressureSensorDataRate,
  UVSensorGain,
  UVSensorMode,
  UVSensorResolution,
} from "../proto/messages";

import type { BaseDevice } from "../devices/BaseDevice";
import type { BaseNeoPixelDevice } from "../devices/BaseNeoPixelDevice";
import type { GyroscopeAddress } from "../devices/Gyroscope";
import type { LinearEncoderAddress } from "../devices/LinearEncoder";
import type { NFCTag } from "../devices/NFCTag";
import type { NeoDriverAddress } from "../devices/NeoDriver";
import type { P5Constructor, P5Internal, P5LifecylceMap } from "./types";
import type { PressureSensorAddress } from "../devices/PressureSensor";
import type { RFIDReaderAddress } from "../devices/RFIDReader";
import type { RotaryEncoderAddress } from "../devices/RotaryEncoder";
import type { TouchSensorAddress } from "../devices/TouchSensor";
import type { Trinkey } from "../devices/Trinkey";

const ucfirst = (value: string) =>
  value.substring(0, 1).toUpperCase() + value.substring(1);

export class Extension {
  private _deviceManager: DeviceManager | null = null;
  private _hookPrefixes: Array<string> = [];
  private _listeners: Array<VoidFunction> = [];
  private _neoDriver: NeoDriver | null = null;
  private _neoOffset: number = 0;
  private _pixelDevices: Array<BaseNeoPixelDevice<number, any>> = [];
  private _usePromises: boolean;

  constructor(
    private readonly p5: P5Constructor,
    fn: any,
    lifecycles: P5LifecylceMap,
  ) {
    this._usePromises = getP5Version(p5) == 2;
    enablePixelBuffer();

    lifecycles.post = this.post.bind(this);
    lifecycles.remove = this.remove.bind(this);

    this.expose(fn, [
      "startCO2Sensor",
      "startDistanceSensor",
      "startGyroscope",
      "startLinearEncoder",
      "startNFCTag",
      "startNeoDriver",
      "startPressureSensor",
      "startRFIDReader",
      "startRotaryEncoder",
      "startTouchSensor",
      "startTrinkey",
      "startUVSensor",
      "neoCircle",
      "neoLine",
      "neoRect",
    ]);

    this.exposeEnums(fn, {
      GyroscopeChipset,
      PressureSensorChipset,
      PressureSensorDataRate,
      UVSensorGain,
      UVSensorMode,
      UVSensorResolution,
    });
  }

  get deviceManager(): DeviceManager {
    if (!this._deviceManager) {
      this._deviceManager = new DeviceManager();
    }

    return this._deviceManager;
  }

  expose(fn: any, names: Array<string>) {
    const that: any = this;

    for (const name of names) {
      const source = that[name];

      if (typeof source === "function") {
        fn[name] = function (this: P5Internal, ...args: Array<any>) {
          return source.apply(that, [this, ...args]);
        };
      }
    }
  }

  exposeDevice<T extends BaseDevice<number, any>>(
    p5: P5Internal,
    device: T,
    hookPrefix: string | false | null = null,
    events: Array<string> = [],
  ): T | Promise<T> {
    const { _hookPrefixes, _listeners } = this;

    if (hookPrefix && _hookPrefixes.indexOf(hookPrefix) == -1) {
      _hookPrefixes.push(hookPrefix);

      const context: any = p5._isGlobal ? window : this.p5;

      for (const event of events) {
        const hookName = hookPrefix + ucfirst(event);
        if (!(hookName in context) || typeof context[hookName] !== "function") {
          continue;
        }

        const hook = context[hookName].bind(context);
        device.addEventListener(event, hook);
        _listeners.push(() => device.removeEventListener(event, hook));
      }
    }

    if (this._usePromises) {
      return device.connect().then(() => device);
    } else {
      p5._incrementPreload();
      device.connect().then(() => p5._decrementPreload());
      return device;
    }
  }

  exposeEnums(fn: any, enums: any) {
    for (const values of Object.values<any>(enums)) {
      for (const key in values) {
        if (/^\d/.exec(key)) continue;
        fn[key] = values[key];
      }
    }
  }

  neoRect(
    _: P5Internal,
    x: number,
    y: number,
    width: number,
    height: number,
    offset: number = this._neoOffset,
    device: NeoDriver | null = this._neoDriver,
  ): void {
    if (!device) return;
    this._neoOffset += width * height;

    for (let u = 0; u < width; u++) {
      for (let v = 0; v < height; v++) {
        const [r, g, b] = this.p5.get(x + u, y + v);
        device.setPixelColor(offset++, (r << 16) | (g << 8) | b);
      }
    }
  }

  neoCircle(
    _: P5Internal,
    x: number,
    y: number,
    radius: number,
    numPixels: number,
    offset: number = this._neoOffset,
    device: NeoDriver | null = this._neoDriver,
  ): void {
    if (!device) return;
    this._neoOffset += numPixels;

    for (let index = 0; index < numPixels; index++) {
      const rad = (index / numPixels) * Math.PI * 2;
      const [r, g, b] = this.p5.get(
        x + Math.sin(rad) * radius,
        y - Math.cos(rad) * radius,
      );

      device.setPixelColor(offset++, (r << 16) | (g << 8) | b);
    }
  }

  neoLine(
    _: P5Internal,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    numPixels: number,
    offset: number = this._neoOffset,
    device: NeoDriver | null = this._neoDriver,
  ): void {
    if (!device) return;
    this._neoOffset += numPixels;

    const sX = numPixels > 1 ? (x2 - x1) / (numPixels - 1) : 0;
    const sY = numPixels > 1 ? (y2 - y1) / (numPixels - 1) : 0;

    for (let index = 0; index < numPixels; index++) {
      const [r, g, b] = this.p5.get(x1 + sX * index, y1 + sY * index);
      device.setPixelColor(offset++, (r << 16) | (g << 8) | b);
    }
  }

  remove(): void {
    const { _listeners } = this;
    for (const listener of _listeners) listener();
    _listeners.length = 0;
  }

  async post(): Promise<void> {
    for (const device of this._pixelDevices) {
      await device._flushPixels();
    }
  }

  startCO2Sensor(
    p5: P5Internal,
    name: string | false | null = "co2",
  ): CO2Sensor | Promise<CO2Sensor> {
    const device = this.deviceManager.getCO2Sensor();
    return this.exposeDevice(p5, device, name, CO2Sensor.EVENTS);
  }

  startDistanceSensor(
    p5: P5Internal,
    name: string | false | null = "distance",
  ): DistanceSensor | Promise<DistanceSensor> {
    const device = this.deviceManager.getDistanceSensor();
    return this.exposeDevice(p5, device, name, DistanceSensor.EVENTS);
  }

  startGyroscope(
    p5: P5Internal,
    name: string | false | null = "gyroscope",
    addressOrIndex: GyroscopeAddress = Gyroscope.ADDRESSES[0],
    chipset: GyroscopeChipset = GyroscopeChipset.GYROSCOPE_CHIPSET_LSM6DSOX,
  ): Gyroscope | Promise<Gyroscope> {
    const device = this.deviceManager.getGyroscope(addressOrIndex, chipset);
    return this.exposeDevice(p5, device, name, Gyroscope.EVENTS);
  }

  startLinearEncoder(
    p5: P5Internal,
    name: string | false | null = "linearEncoder",
    addressOrIndex: LinearEncoderAddress = LinearEncoder.ADDRESSES[0],
  ): LinearEncoder | Promise<LinearEncoder> {
    const device = this.deviceManager.getLinearEncoder(addressOrIndex);
    this._pixelDevices.push(device);

    return this.exposeDevice(p5, device, name, LinearEncoder.EVENTS);
  }

  startNFCTag(p5: P5Internal): NFCTag | Promise<NFCTag> {
    const device = this.deviceManager.getNFCTag();
    return this.exposeDevice(p5, device);
  }

  startNeoDriver(
    p5: P5Internal,
    addressOrIndex: NeoDriverAddress = NeoDriver.ADDRESSES[0],
  ): NeoDriver | Promise<NeoDriver> {
    const device = this.deviceManager.getNeoDriver(addressOrIndex);
    this._pixelDevices.push(device);
    this._neoDriver = this._neoDriver || device;

    return this.exposeDevice(p5, device);
  }

  startPressureSensor(
    p5: P5Internal,
    name: string | false | null = "pressure",
    addressOrIndex: PressureSensorAddress = PressureSensor.ADDRESSES[0],
    chipset: PressureSensorChipset = PressureSensorChipset.PRESSURE_SENSOR_CHIPSET_LPS25,
  ): PressureSensor | Promise<PressureSensor> {
    const device = this.deviceManager.getPressureSensor(
      addressOrIndex,
      chipset,
    );

    return this.exposeDevice(p5, device, name, PressureSensor.EVENTS);
  }

  startRFIDReader(
    p5: P5Internal,
    name: string | false | null = "rfid",
    addressOrIndex: RFIDReaderAddress = RFIDReader.ADDRESSES[0],
  ): RFIDReader | Promise<RFIDReader> {
    const device = this.deviceManager.getRFIDReader(addressOrIndex);
    return this.exposeDevice(p5, device, name, RFIDReader.EVENTS);
  }

  startRotaryEncoder(
    p5: P5Internal,
    name: string | false | null = "rotaryEncoder",
    addressOrIndex: RotaryEncoderAddress = RotaryEncoder.ADDRESSES[0],
  ): RotaryEncoder | Promise<RotaryEncoder> {
    const device = this.deviceManager.getRotaryEncoder(addressOrIndex);
    this._pixelDevices.push(device);

    return this.exposeDevice(p5, device, name, RotaryEncoder.EVENTS);
  }

  startTouchSensor(
    p5: P5Internal,
    name: string | false | null = "touchSensor",
    addressOrIndex: TouchSensorAddress = TouchSensor.ADDRESSES[0],
  ): TouchSensor | Promise<TouchSensor> {
    const device = this.deviceManager.getTouchSensor(addressOrIndex);
    return this.exposeDevice(p5, device, name, TouchSensor.EVENTS);
  }

  startTrinkey(p5: P5Internal): Trinkey | Promise<Trinkey> {
    const device = this.deviceManager.getTrinkey();
    this._pixelDevices.push(device);
    return this.exposeDevice(p5, device);
  }

  startUVSensor(
    p5: P5Internal,
    name: string | false | null = "uv",
  ): UVSensor | Promise<UVSensor> {
    const device = this.deviceManager.getUVSensor();
    return this.exposeDevice(p5, device, name, UVSensor.EVENTS);
  }
}
