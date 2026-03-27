import {
  encodeCommand,
  decodeResponse,
  frame,
  FrameDecoder,
  type CommandPayload,
  type Response,
} from "./proto";

export type { Response, StatusResponse } from "./proto";

// Adafruit vendor ID — used to pre-filter the device picker
const ADAFRUIT_VID = 0x239a;

export class TrinkeyClient extends EventTarget {
  private _device: USBDevice | null = null;
  private _epIn: number | null = null;
  private _epOut: number | null = null;
  private _seq = 0;
  private _reading = false;
  private _decoder: FrameDecoder;

  constructor() {
    super();
    this._decoder = new FrameDecoder((payload) => {
      const resp = decodeResponse(payload);
      this.dispatchEvent(
        new CustomEvent<Response>("response", { detail: resp }),
      );
    });
  }

  static isSupported(): boolean {
    return typeof navigator !== 'undefined' && 'usb' in navigator;
  }

  get connected(): boolean {
    return this._device?.opened ?? false;
  }

  // ── Connection ──────────────────────────────────────────────────────────────

  async connect(): Promise<void> {
    const device = await navigator.usb.requestDevice({
      filters: [{ vendorId: ADAFRUIT_VID }],
    });

    await device.open();
    await device.selectConfiguration(1);

    // Find the WebUSB vendor interface (class 0xFF)
    const config = device.configuration;
    if (!config) throw new Error("No active USB configuration");

    let iface: USBInterface | null = null;
    for (const i of config.interfaces) {
      if (i.alternates[0].interfaceClass === 0xff) {
        iface = i;
        break;
      }
    }
    if (!iface) throw new Error("WebUSB vendor interface not found");

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

    const alt = iface.alternates[0];
    for (const ep of alt.endpoints) {
      if (ep.type === "bulk" && ep.direction === "out")
        this._epOut = ep.endpointNumber;
      if (ep.type === "bulk" && ep.direction === "in")
        this._epIn = ep.endpointNumber;
    }
    if (this._epIn == null || this._epOut == null) {
      throw new Error("Could not find bulk IN/OUT endpoints");
    }

    this._device = device;
    this._startReading();
    this.dispatchEvent(new Event("connect"));
  }

  async disconnect(): Promise<void> {
    this._reading = false;
    if (this._device?.opened) await this._device.close();
    this._device = null;
    this.dispatchEvent(new Event("disconnect"));
  }

  // ── Commands ────────────────────────────────────────────────────────────────

  async setPixel(
    index: number,
    r: number,
    g: number,
    b: number,
  ): Promise<number> {
    return this._send({ type: "set_pixel", index, r, g, b });
  }

  async setAll(r: number, g: number, b: number): Promise<number> {
    return this._send({ type: "set_all", r, g, b });
  }

  async getStatus(): Promise<number> {
    return this._send({ type: "get_status" });
  }

  // ── Internals ───────────────────────────────────────────────────────────────

  private async _send(payload: CommandPayload): Promise<number> {
    if (!this.connected) throw new Error("Not connected");
    const id = ++this._seq;
    const encoded = encodeCommand(id, payload);
    await this._device!.transferOut(
      this._epOut!,
      frame(encoded) as Uint8Array<ArrayBuffer>,
    );
    return id;
  }

  private _startReading(): void {
    this._reading = true;
    const read = async () => {
      while (this._reading && this._device?.opened) {
        try {
          const result = await this._device.transferIn(this._epIn!, 64);
          if (result.data && result.data.byteLength > 0) {
            this._decoder.push(new Uint8Array(result.data.buffer));
          }
        } catch (err) {
          if (this._reading) {
            this.dispatchEvent(new CustomEvent("error", { detail: err }));
          }
          break;
        }
      }
    };
    read();
  }
}
