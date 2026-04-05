import { browser } from "$app/environment";
import type { DeviceManager } from "stemma-web";
import type {
  NeoDriverDevice,
  RotaryEncoderDevice,
  LinearEncoderDevice,
  TouchSensorDevice,
  GyroscopeDevice,
  TrinkeyDevice,
} from "stemma-web";

export type DeviceKind =
  | "trinkey"
  | "neo-driver"
  | "rotary-encoder"
  | "linear-encoder"
  | "touch-sensor"
  | "gyroscope";

export type DeviceInstance =
  | { kind: "trinkey"; key: string; device: TrinkeyDevice }
  | { kind: "neo-driver"; key: string; device: NeoDriverDevice }
  | { kind: "rotary-encoder"; key: string; device: RotaryEncoderDevice }
  | { kind: "linear-encoder"; key: string; device: LinearEncoderDevice }
  | { kind: "touch-sensor"; key: string; device: TouchSensorDevice }
  | { kind: "gyroscope"; key: string; device: GyroscopeDevice };

class AppState {
  connected = $state(false);
  instances = $state<DeviceInstance[]>([]);
  manager: DeviceManager | null = null;

  async init(): Promise<void> {
    if (!browser || this.manager) return;

    const { DeviceManager } = await import("stemma-web");
    this.manager = new DeviceManager();

    this.manager.addEventListener("connect", () => {
      this.connected = true;
    });

    this.manager.addEventListener("disconnect", () => {
      this.connected = false;
      this.instances = [];
    });
  }

  addInstance(instance: DeviceInstance): boolean {
    if (this.instances.some((i) => i.key === instance.key)) return false;
    this.instances = [...this.instances, instance];
    return true;
  }

  removeInstance(key: string): void {
    this.instances = this.instances.filter((i) => i.key !== key);
  }
}

export const appState = new AppState();
