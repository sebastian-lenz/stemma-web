import { DeviceManager } from "./DeviceManager";
import { LinearEncoder, LinearEncoderAddress } from "./devices/LinearEncoder";

export * from "./index";

declare global {
  interface Window {
    p5?: P5Constructor;
  }
}

type P5Constructor = {
  new (...args: unknown[]): unknown;
  prototype: P5Instance;
};

type P5Instance = {
  registerPreloadMethod(name: string, instance: P5Instance): void;
  _decrementPreload(): void;

  startLinearEncoder(
    name?: string | null,
    addressOrIndex?: LinearEncoderAddress,
  ): LinearEncoder;
};

function extendP5(this: P5Constructor) {
  let deviceManager: DeviceManager;

  function getDeviceManager() {
    if (!deviceManager) deviceManager = new DeviceManager();
    return deviceManager;
  }

  this.prototype.startLinearEncoder = function (
    name: string | null = "linearEncoder",
    addressOrIndex: LinearEncoderAddress = LinearEncoder.ADDRESSES[0],
  ): LinearEncoder {
    const device = getDeviceManager().getLinearEncoder(addressOrIndex);
    device.connect().then(() => this._decrementPreload());
    return device;
  };

  this.prototype.registerPreloadMethod("startLinearEncoder", this.prototype);
}

// Auto-register when loaded as a script tag alongside global p5
if (typeof window !== "undefined" && window.p5) {
  extendP5.call(window.p5);
}

export { extendP5 };
