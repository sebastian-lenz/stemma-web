import { BaseDevice } from "./BaseDevice";
import { colorApi, packColors } from "../utils/color";
import type { Color, ColorObject, ColorValue } from "../utils/types";
import type { EventMap } from "../utils/events";

export abstract class BaseNeoPixelDevice<
  TAddress extends number = 0,
  TEvents extends EventMap = {},
> extends BaseDevice<TAddress, TEvents> {
  protected _brightness = 128;
  protected _pixels: ColorValue[] = [];

  abstract getLength(): number;

  getBrightness(): number {
    return this._brightness;
  }

  getPixelColor(index: number = 0): ColorObject {
    return colorApi.toObject(this._pixels[index] ?? 0);
  }

  getPixelColors(
    offset = 0,
    length = this._pixels.length - offset,
  ): ColorObject[] {
    return this._pixels.slice(offset, offset + length).map(colorApi.toObject);
  }

  async setBrightness(value: number): Promise<void> {
    value = Math.max(0, Math.min(255, Math.round(value)));
    this._brightness = value;

    await this._send({
      setBrightness: { brightness: value },
    });
  }

  async setPixelColor(color: Color): Promise<void>;
  async setPixelColor(index: number, color: Color): Promise<void>;
  async setPixelColor(
    indexOrColor: number | Color,
    color?: Color,
  ): Promise<void> {
    const index = color !== undefined ? (indexOrColor as number) : 0;
    const c = color !== undefined ? color : (indexOrColor as Color);

    const packed = colorApi.parse(c);
    this._pixels[index] = packed;

    await this._send({
      setPixelColor: { index, color: packed },
    });
  }

  async setPixelColors(colors: Color[]): Promise<void>;
  async setPixelColors(offset: number, colors: Color[]): Promise<void>;
  async setPixelColors(
    offsetOrColors: number | Color[],
    colors?: Color[],
  ): Promise<void> {
    const offset = colors !== undefined ? (offsetOrColors as number) : 0;
    const c = colors !== undefined ? colors : (offsetOrColors as Color[]);

    const packed = c.map(colorApi.parse);
    packed.forEach((v, i) => {
      this._pixels[offset + i] = v;
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
