import { browser } from "$app/environment";
import type { DeviceManager } from "stemma-web";
import type {
  CO2SensorDevice,
  DistanceSensorDevice,
  GyroscopeDevice,
  LinearEncoderDevice,
  NFCTagDevice,
  NeoDriverDevice,
  PressureSensorDevice,
  RFIDReaderDevice,
  RotaryEncoderDevice,
  TouchSensorDevice,
  TrinkeyDevice,
  UVSensorDevice,
} from "stemma-web";

export type DeviceKind =
  | "trinkey"
  | "neo-driver"
  | "rotary-encoder"
  | "linear-encoder"
  | "touch-sensor"
  | "gyroscope"
  | "pressure-sensor"
  | "co2-sensor"
  | "distance-sensor"
  | "uv-sensor"
  | "nfc-tag"
  | "rfid-reader";

export type DeviceInstance =
  | { kind: "trinkey"; key: string; device: TrinkeyDevice }
  | { kind: "neo-driver"; key: string; device: NeoDriverDevice }
  | { kind: "rotary-encoder"; key: string; device: RotaryEncoderDevice }
  | { kind: "linear-encoder"; key: string; device: LinearEncoderDevice }
  | { kind: "touch-sensor"; key: string; device: TouchSensorDevice }
  | { kind: "gyroscope"; key: string; device: GyroscopeDevice }
  | { kind: "pressure-sensor"; key: string; device: PressureSensorDevice }
  | { kind: "co2-sensor"; key: string; device: CO2SensorDevice }
  | { kind: "distance-sensor"; key: string; device: DistanceSensorDevice }
  | { kind: "uv-sensor"; key: string; device: UVSensorDevice }
  | { kind: "nfc-tag"; key: string; device: NFCTagDevice }
  | { kind: "rfid-reader"; key: string; device: RFIDReaderDevice };

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
