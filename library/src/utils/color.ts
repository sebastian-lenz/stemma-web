import type { Color, ColorObject, ColorValue } from "./types";

export interface ColorApi {
  parse: typeof parseColor;
  toObject: typeof toColorObject;
}

export const colorApi: ColorApi = {
  parse: parseColor,
  toObject: toColorObject,
};

/**
 * Parse a colour value into a packed 0xRRGGBB uint32.
 */
export function parseColor(color: Color): ColorValue {
  if (typeof color === "string") {
    let hex = color.replace("#", "");
    if (hex.length == 3) {
      hex = hex
        .split("")
        .map((c) => c + c)
        .join("");
    }

    return (
      (parseInt(hex.slice(0, 2), 16) << 16) |
      (parseInt(hex.slice(2, 4), 16) << 8) |
      parseInt(hex.slice(4, 6), 16)
    );
  } else if (typeof color === "number") {
    return color;
  }

  return (color.red << 16) | (color.green << 8) | color.blue;
}

export function toColorObject(packed: number | null | undefined): ColorObject {
  const v = packed ?? 0;
  return { red: (v >> 16) & 0xff, green: (v >> 8) & 0xff, blue: v & 0xff };
}

/**
 * Pack an array of 0xRRGGBB values into a flat 3-bytes-per-color Uint8Array.
 */
export function packColors(colors: number[]): Uint8Array {
  const bytes = new Uint8Array(colors.length * 3);

  colors.forEach((c, i) => {
    bytes[i * 3] = (c >> 16) & 0xff;
    bytes[i * 3 + 1] = (c >> 8) & 0xff;
    bytes[i * 3 + 2] = c & 0xff;
  });

  return bytes;
}

/**
 * Unpack a flat 3-bytes-per-color byte blob into packed 0xRRGGBB values.
 */
export function unpackColors(
  bytes: Uint8Array | null | undefined,
): ColorValue[] {
  if (!bytes?.length) {
    return [];
  }

  return Array.from(
    { length: Math.floor(bytes.length / 3) },
    (_, i) => (bytes[i * 3] << 16) | (bytes[i * 3 + 1] << 8) | bytes[i * 3 + 2],
  );
}
