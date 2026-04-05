import { BaseDevice } from "./BaseDevice";
import { packColors, parseColor, toColorObject } from "../utils/color";
import type { Color, ColorObject } from "../utils/types";
import type { EventMap } from "../utils/events";

export abstract class BaseNeoPixelDevice<
  TAddress extends number = 0,
  TEvents extends EventMap = {},
> extends BaseDevice<TAddress, TEvents> {
  protected _brightness = 128;
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
    value = Math.max(0, Math.min(255, Math.round(value)));
    this._brightness = value;

    await this._send({
      setBrightness: { brightness: value },
    });
  }

  async setPixelColor(index: number = 0, color: Color): Promise<void> {
    const packed = parseColor(color);
    this._pixels[index] = toColorObject(packed);

    await this._send({
      setPixelColor: { index, color: packed },
    });
  }

  async setPixelColors(offset: number = 0, colors: Color[]): Promise<void> {
    const packed = colors.map(parseColor);
    packed.forEach((c, i) => {
      this._pixels[offset + i] = toColorObject(c);
    });

    const chunkSize = 64;
    for (let i = 0; i < packed.length; i += chunkSize) {
      const chunk = packed.slice(i, i + chunkSize);
      const show = i + chunkSize >= packed.length;
      await this._send({
        setPixelColors: { offset: offset + i, colors: packColors(chunk), show },
      });
    }
  }
}
