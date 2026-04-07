import { colorApi, parseColor } from "../utils/color";
import type { Color, ColorObject, ColorValue } from "../utils/types";
import type { P5Instance } from "./types";

const channel = (value: number) =>
  Math.max(0, Math.min(255, Math.round(value * 255)));

export function getP5Version(p5: P5Instance): 1 | 2 {
  return "registerAddon" in p5 ? 2 : 1;
}

export function extendColorApi(p5: P5Instance) {
  colorApi.parse = function (color: Color): ColorValue {
    if (color instanceof p5.Color) {
      const red = channel((color as any)._array[0]);
      const green = channel((color as any)._array[1]);
      const blue = channel((color as any)._array[2]);
      return (red << 16) | (green << 8) | blue;
    } else {
      return parseColor(color);
    }
  };

  colorApi.toObject = function (
    packed: number | null | undefined,
  ): ColorObject {
    const v = packed ?? 0;
    return p5.color((v >> 16) & 0xff, (v >> 8) & 0xff, v & 0xff) as any;
  };
}
