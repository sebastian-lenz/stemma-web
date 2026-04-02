// ── Shared data types ─────────────────────────────────────────────────────────

export interface Vector {
    x: number;
    y: number;
    z: number;
}

export interface ColorObject {
    red: number;
    green: number;
    blue: number;
}

/** Accept either an RGB object or a CSS hex string (e.g. "#ff8800"). */
export type Color = ColorObject | string;

// ── Device identity ───────────────────────────────────────────────────────────

import { DeviceType } from '../proto/messages.js';
export { DeviceType };

export interface DeviceIdentifier<TAddress> {
    type: DeviceType;
    address: TAddress;
}

// ── Base device interface ─────────────────────────────────────────────────────

export interface Device<TAddress> extends EventTarget {
    readonly id: DeviceIdentifier<TAddress>;
    readonly isConnected: boolean;
}

// ── NeoPixel device interface ─────────────────────────────────────────────────

export interface NeoPixelDevice<TAddress> extends Device<TAddress> {
    getBrightness(): number;
    /** Total number of addressable pixels. */
    getLength(): number;
    getPixelColor(index: number): ColorObject;
    getPixelColors(offset: number, length: number): ColorObject[];
    setBrightness(value: number): Promise<void>;
    setPixelColor(index: number, color: Color): Promise<void>;
    /** Batch-set pixels starting at offset. At most 16 colours per call. */
    setPixelColors(offset: number, colors: Color[]): Promise<void>;
}

// ── Gyroscope enumerations ────────────────────────────────────────────────────

/** Must match GyroscopeChipset in gyroscope.proto. */
export enum GyroscopeChipset {
    LSM6DSOX   = 1,
    ISM330DHCX = 2,
    LSM6DSO32  = 3,
}

/** Must match DataRate in gyroscope.proto. */
export enum DataRate {
    SHUTDOWN = 0,
    HZ_12_5  = 1,
    HZ_26    = 2,
    HZ_52    = 3,
    HZ_104   = 4,
    HZ_208   = 5,
    HZ_416   = 6,
    HZ_833   = 7,
    HZ_1_66K = 8,
    HZ_3_33K = 9,
    HZ_6_66K = 10,
}

/** Must match AccelerationRange in gyroscope.proto. */
export enum AccelerationRange {
    G_4  = 0,
    G_8  = 1,
    G_16 = 2,
    G_32 = 3,
}

/** Must match RotationRange in gyroscope.proto. */
export enum RotationRange {
    DPS_125  = 0,
    DPS_250  = 1,
    DPS_500  = 2,
    DPS_1000 = 3,
    DPS_2000 = 4,
    DPS_4000 = 5,
}
