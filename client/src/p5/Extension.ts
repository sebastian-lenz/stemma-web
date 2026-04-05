import { DeviceManager } from "../DeviceManager";
import { Gyroscope } from "../devices/Gyroscope";
import { LinearEncoder } from "../devices/LinearEncoder";
import { NeoDriver } from "../devices/NeoDriver";
import { RotaryEncoder } from "../devices/RotaryEncoder";
import { TouchSensor } from "../devices/TouchSensor";
import type { BaseDevice } from "../devices/BaseDevice";
import type { GyroscopeAddress } from "../devices/Gyroscope";
import type { LinearEncoderAddress } from "../devices/LinearEncoder";
import type { NeoDriverAddress } from "../devices/NeoDriver";
import type { P5Instance, P5LifecylceMap } from "./types";
import type { RotaryEncoderAddress } from "../devices/RotaryEncoder";
import type { TouchSensorAddress } from "../devices/TouchSensor";
import type { Trinkey } from "../devices/Trinkey";

const ucfirst = (value: string) =>
  value.substring(0, 1).toUpperCase() + value.substring(1);

export class Extension {
  private _deviceManager: DeviceManager | null = null;
  private _hookPrefixes: Array<string> = [];
  private _listeners: Array<VoidFunction> = [];
  private _usePromises: boolean = false;

  constructor(
    private readonly p5: P5Instance,
    fn: any,
    lifecycles: P5LifecylceMap,
  ) {
    this._usePromises = !("_incrementPreload" in p5);

    lifecycles.remove = this.remove.bind(this);

    this.expose(fn, [
      "startGyroscope",
      "startLinearEncoder",
      "startNeoDriver",
      "startRotaryEncoder",
      "startTouchSensor",
      "startTrinkey",
    ]);
  }

  get deviceManager(): DeviceManager {
    if (!this._deviceManager) {
      this._deviceManager = new DeviceManager();
    }

    return this._deviceManager;
  }

  expose(fn: any, names: Array<string>) {
    for (const name of names) {
      fn[name] = (this as any)[name].bind(this);
    }
  }

  exposeDevice<T extends BaseDevice<number, any>>(
    device: T,
    hookPrefix: string | false | null = null,
    events: Array<string> = [],
  ): T | Promise<T> {
    const { p5, _hookPrefixes, _listeners } = this;

    if (hookPrefix && _hookPrefixes.indexOf(hookPrefix) == -1) {
      _hookPrefixes.push(hookPrefix);

      const context: any = this.p5._isGlobal ? window : this.p5;

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

  remove(): void {
    const { _listeners } = this;
    for (const listener of _listeners) listener();
    _listeners.length = 0;
  }

  startGyroscope(
    name: string | false | null = "gyroscope",
    addressOrIndex: GyroscopeAddress = Gyroscope.ADDRESSES[0],
  ): Gyroscope | Promise<Gyroscope> {
    const device = this.deviceManager.getGyroscope(addressOrIndex);
    return this.exposeDevice(device, name, Gyroscope.EVENTS);
  }

  startLinearEncoder(
    name: string | false | null = "linearEncoder",
    addressOrIndex: LinearEncoderAddress = LinearEncoder.ADDRESSES[0],
  ): LinearEncoder | Promise<LinearEncoder> {
    const device = this.deviceManager.getLinearEncoder(addressOrIndex);
    return this.exposeDevice(device, name, LinearEncoder.EVENTS);
  }

  startNeoDriver(
    addressOrIndex: NeoDriverAddress = NeoDriver.ADDRESSES[0],
  ): NeoDriver | Promise<NeoDriver> {
    const device = this.deviceManager.getNeoDriver(addressOrIndex);
    return this.exposeDevice(device);
  }

  startRotaryEncoder(
    name: string | false | null = "rotaryEncoder",
    addressOrIndex: RotaryEncoderAddress = RotaryEncoder.ADDRESSES[0],
  ): RotaryEncoder | Promise<RotaryEncoder> {
    const device = this.deviceManager.getRotaryEncoder(addressOrIndex);
    return this.exposeDevice(device, name, RotaryEncoder.EVENTS);
  }

  startTouchSensor(
    name: string | false | null = "touchSensor",
    addressOrIndex: TouchSensorAddress = TouchSensor.ADDRESSES[0],
  ): TouchSensor | Promise<TouchSensor> {
    const device = this.deviceManager.getTouchSensor(addressOrIndex);
    return this.exposeDevice(device, name, TouchSensor.EVENTS);
  }

  startTrinkey(): Trinkey | Promise<Trinkey> {
    const device = this.deviceManager.getTrinkey();
    return this.exposeDevice(device);
  }
}
