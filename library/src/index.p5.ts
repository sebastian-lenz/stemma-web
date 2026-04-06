import { Extension } from "./p5/Extension";
import type {
  P5Addon,
  P5Constructor,
  P5Instance,
  P5LifecylceMap,
  P5Method,
} from "./p5/types";

export * from "./index";

declare global {
  interface Window {
    p5?: P5Constructor;
  }
}

export const stemmaWeb: P5Addon = (
  p5: P5Instance,
  fn: any,
  lifecycles: P5LifecylceMap,
) => {
  new Extension(p5, fn, lifecycles);
};

(function () {
  if (typeof window !== "undefined" && window.p5) {
    const { p5 } = window;
    debugger;
    if (("_incrementPreload" in p5) as any) {
      const lifecycles: P5LifecylceMap = {};
      new Extension(p5, p5.prototype, lifecycles);
      for (const key in lifecycles) {
        p5.registerMethod(key as P5Method, lifecycles[key as P5Method]!);
      }
    } else {
      p5.registerAddon(stemmaWeb);
    }
  }
})();
