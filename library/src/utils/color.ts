import type { Color, ColorObject } from "./types";

/** Parse a colour value into a packed 0xRRGGBB uint32. */
export function parseColor(color: Color): number {
  if (typeof color === "string") {
    const hex = color.replace("#", "");
    const full =
      hex.length === 3
        ? hex
            .split("")
            .map((c) => c + c)
            .join("")
        : hex;
    return (
      (parseInt(full.slice(0, 2), 16) << 16) |
      (parseInt(full.slice(2, 4), 16) << 8) |
      parseInt(full.slice(4, 6), 16)
    );
  }
  return (color.red << 16) | (color.green << 8) | color.blue;
}

export function toColorObject(packed: number | null | undefined): ColorObject {
  const v = packed ?? 0;
  return { red: (v >> 16) & 0xff, green: (v >> 8) & 0xff, blue: v & 0xff };
}

/** Pack an array of 0xRRGGBB values into a flat 3-bytes-per-color Uint8Array. */
export function packColors(colors: number[]): Uint8Array {
  const bytes = new Uint8Array(colors.length * 3);
  colors.forEach((c, i) => {
    bytes[i * 3]     = (c >> 16) & 0xff;
    bytes[i * 3 + 1] = (c >>  8) & 0xff;
    bytes[i * 3 + 2] =  c        & 0xff;
  });
  return bytes;
}

/** Unpack a flat 3-bytes-per-color byte blob into ColorObjects. */
export function unpackColors(bytes: Uint8Array | null | undefined): ColorObject[] {
  if (!bytes?.length) return [];
  return Array.from({ length: Math.floor(bytes.length / 3) }, (_, i) => ({
    red:   bytes[i * 3],
    green: bytes[i * 3 + 1],
    blue:  bytes[i * 3 + 2],
  }));
}
