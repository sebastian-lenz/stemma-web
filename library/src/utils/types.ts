import { DeviceType } from "../proto/messages";

export interface Vector {
  x: number;
  y: number;
  z: number;
}

export type ColorValue = number;

export interface ColorObject {
  red: number;
  green: number;
  blue: number;
}

export type Color = ColorObject | string | number;

export interface DeviceIdentifier<TAddress> {
  type: DeviceType;
  address: TAddress;
}

export interface Device<TAddress> extends EventTarget {
  readonly id: DeviceIdentifier<TAddress>;
  readonly isConnected: boolean;
}

export interface EventHandler<TEvent extends Event> {
  (event: TEvent): void;
}
