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
  private _connectGeneration: number = 0;
  private _connectPromise: Promise<void> | null = null;
  private _device: USBDevice | null = null;
  private _endpointIn: number | null = null;
  private _endpointOut: number | null = null;
  private _interfaceNumber: number | null = null;
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

    navigator.usb.addEventListener("disconnect", (event) => {
      if (event.device == this._device) {
        this.disconnect();
      }
    });

    window.addEventListener("pagehide", () => {
      this.disconnect().catch(() => {});
    });
  }

  get isConnected(): boolean {
    return this._device?.opened ?? false;
  }

  async connect(): Promise<void> {
    if (this._connectPromise) {
      return this._connectPromise;
    }

    const generation = ++this._connectGeneration;

    this._connectPromise = (async () => {
      const device = await this._requestDevice();

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

      if (generation !== this._connectGeneration) {
        await device.close().catch(() => {});
        return;
      }

      this._device = device;
      this._startReading();
      this._eventTarget.dispatchEvent(new Event("connect"));
    })();

    this._connectPromise.catch(() => {
      this._connectPromise = null;
    });

    return this._connectPromise;
  }

  async disconnect(): Promise<void> {
    this._isReading = false;
    this._connectPromise = null;
    this._connectGeneration++;

    if (this._device?.opened) {
      if (this._interfaceNumber != null) {
        // Signal disconnect to firmware so it clears its connected flag,
        // stops polling, and calls stopAll() on the next loop iteration.
        await this._device
          .controlTransferOut({
            requestType: "class",
            recipient: "interface",
            request: 0x22, // SET_CONTROL_LINE_STATE
            value: 0x00, // DTR deasserted = disconnected
            index: this._interfaceNumber,
          })
          .catch(() => {});
      }

      await this._device.close();
    }

    this._device = null;
    this._endpointIn = null;
    this._endpointOut = null;
    this._interfaceNumber = null;
    this._responseLength = 0;

    this._eventTarget.dispatchEvent(new Event("disconnect"));
  }

  async request(payload: DeviceCommand): Promise<Response> {
    const id = ++this._nextId;

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

      this.send(payload, id).catch((err) => {
        this._requests.delete(id);
        clearTimeout(timeout);
        reject(err);
      });
    });
  }

  async send(payload: DeviceCommand, id = ++this._nextId): Promise<number> {
    if (!this.isConnected) {
      throw new Error("Not connected");
    }

    const encoded = encodeCommand(id, payload);
    await this._device!.transferOut(this._endpointOut!, frame(encoded));
    return id;
  }

  private async _claimInterface(device: USBDevice, iface: USBInterface) {
    await device.claimInterface(iface.interfaceNumber);
    this._interfaceNumber = iface.interfaceNumber;

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

    const request = _requests.get(response.id);
    if (request) {
      request(response);
    }

    this._eventTarget.dispatchEvent(
      new CustomEvent<Response>("response", { detail: response }),
    );
  }

  private _showConnectDialog(): Promise<void> {
    return new Promise((resolve, reject) => {
      const overlay = document.createElement("div");
      overlay.style.cssText =
        "position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:999999";

      const dialog = document.createElement("div");
      dialog.style.cssText =
        "background:#1e1e1e;color:#fff;padding:24px 32px;border-radius:8px;display:flex;flex-direction:column;gap:16px;align-items:center;font-family:sans-serif";

      const msg = document.createElement("p");
      msg.style.cssText = "margin:0;font-size:14px;opacity:.8";
      msg.textContent = "Click the button below to select a USB device.";

      const btn = document.createElement("button");
      btn.style.cssText =
        "padding:8px 20px;background:#6366f1;color:#fff;border:none;border-radius:6px;font-size:14px;cursor:pointer";
      btn.textContent = "Select USB Device";

      const close = () => overlay.remove();

      btn.addEventListener("click", () => {
        close();
        resolve();
      });

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) {
          close();
          reject(new DOMException("No device selected.", "NotFoundError"));
        }
      });

      dialog.append(msg, btn);
      overlay.append(dialog);
      document.body.append(overlay);
    });
  }

  private async _requestDevice() {
    const [existing] = await navigator.usb.getDevices();
    if (existing) {
      return existing;
    }

    if (!navigator.userActivation.isActive) {
      await this._showConnectDialog();
    }

    const device = await navigator.usb.requestDevice({
      filters: [{ vendorId: ADAFRUIT_VID }],
    });

    return device;
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
