export type EventMap = Record<string, Event>;

export type CustomEventKeysOf<T extends EventMap> = {
  [K in keyof T]: T[K] extends CustomEvent ? K : never;
}[keyof T];

export class TypedEventTarget<T extends EventMap> extends EventTarget {
  addEventListener<K extends keyof T>(
    type: K,
    callback: (event: T[K]) => void,
    options?: AddEventListenerOptions | boolean,
  ): void;
  addEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: AddEventListenerOptions | boolean,
  ): void;

  addEventListener(type: string, callback: any, options?: any): void {
    super.addEventListener(type, callback, options);
  }

  removeEventListener<K extends keyof T>(
    type: K,
    callback: (event: T[K]) => void,
    options?: EventListenerOptions | boolean,
  ): void;
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean,
  ): void;

  removeEventListener(type: string, callback: any, options?: any): void {
    super.removeEventListener(type, callback, options);
  }

  dispatchEvent<K extends keyof T>(event: T[K]): boolean;
  dispatchEvent(event: Event): boolean;
  dispatchEvent(event: Event): boolean {
    return super.dispatchEvent(event);
  }
}
