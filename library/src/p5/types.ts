export interface P5Instance {
  _isGlobal: boolean;

  registerAddon(addon: P5Addon): void;
  registerMethod(method: P5Method, callback: VoidFunction): void;
  _decrementPreload(): void;
  _incrementPreload(): void;
}

export type P5Constructor = P5Instance & {
  new (...args: unknown[]): unknown;
  prototype: P5Instance;
};

export type P5Addon = (
  p5: P5Instance,
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
