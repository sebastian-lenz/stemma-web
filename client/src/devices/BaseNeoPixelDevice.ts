import { BaseDevice } from "./BaseDevice";
import { parseColor } from "../utils/color";
import type { Color, ColorObject } from "../utils/types";
import type { EventMap } from "../utils/events";

export abstract class BaseNeoPixelDevice<
  TAddress extends number = 0,
  TEvents extends EventMap = {},
> extends BaseDevice<TAddress, TEvents> {
  protected _brightness = 0;
  protected _pixels: ColorObject[] = [];

  abstract getLength(): number;

  getBrightness(): number {
    return this._brightness;
  }

  getPixelColor(index: number = 0): ColorObject {
    return this._pixels[index] ?? { red: 0, green: 0, blue: 0 };
  }

  getPixelColors(
    offset = 0,
    length = this._pixels.length - offset,
  ): ColorObject[] {
    return this._pixels.slice(offset, offset + length);
  }

  async setBrightness(value: number): Promise<void> {
    this._brightness = value;

    await this._send({
      setBrightness: { brightness: value },
    });
  }

  async setPixelColor(index: number = 0, color: Color): Promise<void> {
    const c = parseColor(color);
    this._pixels[index] = { red: c.r, green: c.g, blue: c.b };

    await this._send({
      setPixelColor: { index, color: c },
    });
  }

  async setPixelColors(offset: number = 0, colors: Color[]): Promise<void> {
    const parsed = colors.map(parseColor);
    parsed.forEach((c, i) => {
      this._pixels[offset + i] = { red: c.r, green: c.g, blue: c.b };
    });

    await this._send({
      setPixelColors: { offset, colors: parsed },
    });
  }
}
