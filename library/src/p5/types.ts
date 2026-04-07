import * as P5 from "p5";
import { Color } from "p5";

export type P5Instance = P5 & {
  Color: typeof Color;
  registerAddon(addon: P5Addon): void;
};

export interface P5Static {
  registerMethod(method: P5Method, callback: VoidFunction): void;
}

export interface P5Internal {
  _isGlobal: boolean;
  _decrementPreload(): void;
  _incrementPreload(): void;
}

export type P5Constructor = P5Instance & {
  new (...args: unknown[]): unknown;
  prototype: P5Instance & P5Static;
};

export type P5Addon = (
  p5: P5Constructor,
  fn: any,
  lifecycles: P5LifecylceMap,
) => void;

export type P5LifecylceMap = Partial<{
  [method in P5Method]: VoidFunction;
}>;

export type P5Method =
  | "afterPreload"
  | "afterSetup"
  | "beforePreload"
  | "beforeSetup"
  | "init"
  | "post"
  | "pre"
  | "remove";
