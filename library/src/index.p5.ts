import { Extension } from "./p5/Extension";
import { extendColorApi, getP5Version } from "./p5/utils";
import type {
  P5Addon,
  P5Constructor,
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
  p5: P5Constructor,
  fn: any,
  lifecycles: P5LifecylceMap,
) => {
  new Extension(p5, fn, lifecycles);
};

(function () {
  if (typeof window !== "undefined" && window.p5) {
    const { p5 } = window;
    extendColorApi(p5);

    if (getP5Version(p5) === 2) {
      p5.registerAddon(stemmaWeb);
    } else {
      const lifecycles: P5LifecylceMap = {};
      new Extension(p5, p5.prototype, lifecycles);

      for (const key in lifecycles) {
        p5.prototype.registerMethod(
          key as P5Method,
          lifecycles[key as P5Method]!,
        );
      }
    }
  }
})();
