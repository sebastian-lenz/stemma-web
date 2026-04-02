import type {
  Color,
  ColorObject,
  DeviceIdentifier,
  NeoPixelDevice,
} from "./types.js";
import { DeviceType } from "./types.js";
import type { IDeviceState, IDeviceEvent } from "../proto/messages.js";

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Parse a hex colour string like "#ff8800" or "#f80" into an RGB object. */
export function parseColor(color: Color): { r: number; g: number; b: number } {
  if (typeof color === "string") {
    const hex = color.replace("#", "");
    const full =
      hex.length === 3
        ? hex
            .split("")
            .map((c) => c + c)
            .join("")
        : hex;
    return {
      r: parseInt(full.slice(0, 2), 16),
      g: parseInt(full.slice(2, 4), 16),
      b: parseInt(full.slice(4, 6), 16),
    };
  }
  return { r: color.red, g: color.green, b: color.blue };
}

export function toColorObject(
  raw:
    | { r?: number | null; g?: number | null; b?: number | null }
    | null
    | undefined,
): ColorObject {
  return { red: raw?.r ?? 0, green: raw?.g ?? 0, blue: raw?.b ?? 0 };
}

// ── DeviceCommandSender ───────────────────────────────────────────────────────

/** Opaque payload passed to the TrinkeyClient's internal send helper. */
export type DeviceCommandPayload = Record<string, unknown>;

export type SendDeviceCommand = (
  type: DeviceType,
  address: number,
  payload: DeviceCommandPayload,
) => Promise<number>;

// ── BaseDevice ────────────────────────────────────────────────────────────────

export abstract class BaseDevice<TAddress extends number> extends EventTarget {
  readonly id: DeviceIdentifier<TAddress>;
  private _isConnected = false;
  protected readonly _send: SendDeviceCommand;

  constructor(type: DeviceType, address: TAddress, send: SendDeviceCommand) {
    super();
    this.id = { type, address };
    this._send = send;
  }

  get isConnected(): boolean {
    return this._isConnected;
  }

  /** Called by TrinkeyClient when a DeviceState response arrives. */
  _applyState(ds: IDeviceState): void {
    this._isConnected = ds.connected ?? false;
  }

  /** Called by TrinkeyClient when a DeviceEvent arrives. Subclasses override. */
  _applyEvent(_de: IDeviceEvent): void {}
}

// ── BaseNeoPixelDevice ────────────────────────────────────────────────────────

export abstract class BaseNeoPixelDevice<TAddress extends number>
  extends BaseDevice<TAddress>
  implements NeoPixelDevice<TAddress>
{
  protected _brightness = 0;
  protected _pixels: ColorObject[] = [];

  abstract getLength(): number;

  getBrightness(): number {
    return this._brightness;
  }

  getPixelColor(index: number): ColorObject {
    return this._pixels[index] ?? { red: 0, green: 0, blue: 0 };
  }

  getPixelColors(offset: number, length: number): ColorObject[] {
    return this._pixels.slice(offset, offset + length);
  }

  async setBrightness(value: number): Promise<void> {
    this._brightness = value;
    await this._send(this.id.type, this.id.address, {
      setBrightness: { brightness: value },
    });
  }

  async setPixelColor(index: number, color: Color): Promise<void> {
    const c = parseColor(color);
    this._pixels[index] = { red: c.r, green: c.g, blue: c.b };

    await this._send(this.id.type, this.id.address, {
      setPixelColor: { index, color: c },
    });
  }

  async setPixelColors(offset: number, colors: Color[]): Promise<void> {
    const parsed = colors.map(parseColor);
    parsed.forEach((c, i) => {
      this._pixels[offset + i] = { red: c.r, green: c.g, blue: c.b };
    });

    await this._send(this.id.type, this.id.address, {
      setPixelColors: { offset, colors: parsed },
    });
  }
}
