import type { Color, ColorObject } from "./types";

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
