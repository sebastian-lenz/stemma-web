import { encodeCommand, decodeResponse, frame } from "./utils";
import type { DeviceCommand } from "./utils";
import type { Response } from "../proto/messages";
import type { TypedEventTarget } from "../utils/events";

// Adafruit vendor ID — used to pre-filter the device picker
const ADAFRUIT_VID = 0x239a;

export type ConnectionEvents = {
  connect: Event;
  disconnect: Event;
  error: CustomEvent<Error>;
  response: CustomEvent<Response>;
};

export class Connection {
  private _device: USBDevice | null = null;
  private _endpointIn: number | null = null;
  private _endpointOut: number | null = null;
  private _isReading: boolean = false;
  private _nextId: number = 0;
  private _requests: Map<number, (response: Response) => void>;
  private _responseBuffer: Uint8Array;
  private _responseLength: number;
  private readonly _eventTarget: TypedEventTarget<ConnectionEvents>;

  constructor(eventTarget: TypedEventTarget<ConnectionEvents>) {
    this._eventTarget = eventTarget;
    this._requests = new Map();
    this._responseBuffer = new Uint8Array(256);
    this._responseLength = 0;
  }

  get isConnected(): boolean {
    return this._device?.opened ?? false;
  }

  async connect(): Promise<void> {
    const device = await navigator.usb.requestDevice({
      filters: [{ vendorId: ADAFRUIT_VID }],
    });

    await device.open();
    await device.selectConfiguration(1);

    const config = device.configuration;
    if (!config) {
      throw new Error("No active USB configuration");
    }

    const iface = config.interfaces.find(
      (iface) => iface.alternates[0].interfaceClass === 0xff,
    );

    if (!iface) {
      throw new Error("WebUSB vendor interface not found");
    }

    await this._claimInterface(device, iface);

    this._device = device;
    this._startReading();
    this._eventTarget.dispatchEvent(new Event("connect"));
  }

  async disconnect(): Promise<void> {
    this._isReading = false;
    if (this._device?.opened) {
      await this._device.close();
    }

    this._device = null;
    this._endpointIn = null;
    this._endpointOut = null;

    this._eventTarget.dispatchEvent(new Event("disconnect"));
  }

  async request(payload: DeviceCommand): Promise<Response> {
    const id = this._nextId + 1;

    return new Promise<Response>((resolve, reject) => {
      const timeout = setTimeout(() => {
        this._requests.delete(id);
        reject(new Error(`Request ${id} timed out`));
      }, 10000);

      this._requests.set(id, (response) => {
        this._requests.delete(id);
        clearTimeout(timeout);
        resolve(response);
      });

      this.send(payload).catch((err) => {
        this._requests.delete(id);
        clearTimeout(timeout);
        reject(err);
      });
    });
  }

  async send(payload: DeviceCommand): Promise<number> {
    if (!this.isConnected) {
      throw new Error("Not connected");
    }

    const id = ++this._nextId;
    const encoded = encodeCommand(id, payload);
    await this._device!.transferOut(this._endpointOut!, frame(encoded));

    return id;
  }

  private async _claimInterface(device: USBDevice, iface: USBInterface) {
    await device.claimInterface(iface.interfaceNumber);

    // Signal "connected" to the firmware. The Adafruit TinyUSB WebUSB class
    // keeps an internal _connected flag that is only set true when it receives
    // a CDC SET_CONTROL_LINE_STATE (0x22) class request with wValue != 0.
    // Without this, connected() always returns false and the device neither
    // processes incoming data nor writes responses.
    await device.controlTransferOut({
      requestType: "class",
      recipient: "interface",
      request: 0x22, // SET_CONTROL_LINE_STATE
      value: 0x01, // DTR asserted = connected
      index: iface.interfaceNumber,
    });

    for (const ep of iface.alternates[0].endpoints) {
      if (ep.type === "bulk" && ep.direction === "out") {
        this._endpointOut = ep.endpointNumber;
      } else if (ep.type === "bulk" && ep.direction === "in") {
        this._endpointIn = ep.endpointNumber;
      }
    }

    if (this._endpointIn == null || this._endpointOut == null) {
      throw new Error("Could not find bulk IN/OUT endpoints");
    }
  }

  private _handleResponse(payload: Uint8Array): void {
    const { _requests } = this;
    const response = decodeResponse(payload);

    console.log(JSON.stringify(response));

    const request = _requests.get(response.id);
    if (request) {
      request(response);
    }

    this._eventTarget.dispatchEvent(
      new CustomEvent<Response>("response", { detail: response }),
    );
  }

  private async _startReading(): Promise<void> {
    this._isReading = true;

    while (this._isReading && this._device?.opened) {
      try {
        const result = await this._device.transferIn(this._endpointIn!, 64);
        if (result.data && result.data.byteLength > 0) {
          this._pushResponse(new Uint8Array(result.data.buffer));
        }
      } catch (err) {
        if (this._isReading) {
          this._eventTarget.dispatchEvent(
            new CustomEvent("error", { detail: err }),
          );
        }

        break;
      }
    }
  }

  private _pushResponse(chunk: Uint8Array): void {
    let { _responseBuffer: buffer, _responseLength: length } = this;

    if (length + chunk.length > buffer.length) {
      const newBuffer = new Uint8Array((length + chunk.length) * 2);
      newBuffer.set(buffer.subarray(0, length));
      buffer = newBuffer;
    }

    buffer.set(chunk, length);
    length = length + chunk.length;

    while (length >= 2) {
      const msgLen = (buffer[0] << 8) | buffer[1];
      if (length < 2 + msgLen) {
        break;
      }

      this._handleResponse(buffer.slice(2, 2 + msgLen));

      buffer.copyWithin(0, 2 + msgLen, length);
      length -= 2 + msgLen;
    }

    this._responseBuffer = buffer;
    this._responseLength = length;
  }

  static isSupported(): boolean {
    return typeof navigator !== "undefined" && "usb" in navigator;
  }
}
