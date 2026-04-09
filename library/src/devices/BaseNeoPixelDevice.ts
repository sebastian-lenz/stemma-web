import { BaseDevice } from "./BaseDevice";
import { colorApi, packColors } from "../utils/color";
import type { Color, ColorObject, ColorValue } from "../utils/types";
import type { EventMap } from "../utils/events";

let usePixelBuffer: boolean = false;

export function enablePixelBuffer() {
  usePixelBuffer = true;
}

export abstract class BaseNeoPixelDevice<
  TAddress extends number = 0,
  TEvents extends EventMap = {},
> extends BaseDevice<TAddress, TEvents> {
  protected _brightness = 128;
  protected _dirtyMaxIndex: number = -1;
  protected _dirtyMinIndex: number = -1;
  protected _flushing: boolean = false;
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

    if (usePixelBuffer) {
      this._dirtyPixels(index, 1);
    } else {
      await this._send({
        setPixelColor: { index, color: packed },
      });
    }
  }

  async setPixelColors(colors: Color[]): Promise<void>;
  async setPixelColors(offset: number, colors: Color[]): Promise<void>;
  async setPixelColors(
    offsetOrColors: number | Color[],
    colors?: Color[],
  ): Promise<void> {
    const { _pixels } = this;
    const offset = colors !== undefined ? (offsetOrColors as number) : 0;

    let values = colors !== undefined ? colors : (offsetOrColors as Color[]);
    if (!Array.isArray(values)) {
      values = [values];
    }

    for (let index = 0; index < values.length; index++) {
      _pixels[offset + index] = colorApi.parse(values[index]);
    }

    if (usePixelBuffer) {
      this._dirtyPixels(offset, values.length);
    } else {
      await this._sendPixels(offset, values.length);
    }
  }

  protected _dirtyPixels(offset: number, length: number): void {
    if (this._dirtyMinIndex == -1) {
      this._dirtyMinIndex = offset;
      this._dirtyMaxIndex = offset + length;
    } else {
      this._dirtyMinIndex = Math.min(this._dirtyMinIndex, offset);
      this._dirtyMaxIndex = Math.max(this._dirtyMaxIndex, offset + length);
    }
  }

  async _flushPixels() {
    if (this._flushing || this._dirtyMinIndex == -1) {
      return;
    }

    const minIndex = this._dirtyMinIndex;
    const maxIndex = this._dirtyMaxIndex;
    this._dirtyMinIndex = -1;
    this._dirtyMaxIndex = -1;

    this._flushing = true;
    try {
      await this._sendPixels(minIndex, maxIndex - minIndex);
    } finally {
      this._flushing = false;
    }
  }

  protected async _sendPixels(offset: number, length: number) {
    const { _pixels } = this;
    const chunkSize = 64;

    for (let index = 0; index < length; index += chunkSize) {
      const chunk = _pixels.slice(index + offset, index + offset + chunkSize);
      const show = index + chunkSize >= length;

      await this._send({
        setPixelColors: {
          offset: offset + index,
          colors: packColors(chunk),
          show,
        },
      });
    }
  }
}
