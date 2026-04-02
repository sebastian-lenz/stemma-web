export type {
  Vector,
  Color,
  ColorObject,
  DeviceIdentifier,
} from "./utils/types";

export type { NeoDriverAddress } from "./devices/NeoDriver";
export type { RotaryEncoderAddress, RotaryEncoderEvent } from "./devices/RotaryEncoder";
export type { LinearEncoderAddress, LinearEncoderChangedEvent as LinearEncoderEvent } from "./devices/LinearEncoder";
export type { TouchSensorAddress, TouchSensorEvent } from "./devices/TouchSensor";
export type { GyroscopeAddress, GyroscopeEvent } from "./devices/Gyroscope";

export { NeoDriver as NeoDriverDevice } from "./devices/NeoDriver";
export { RotaryEncoder as RotaryEncoderDevice } from "./devices/RotaryEncoder";
export { LinearEncoder as LinearEncoderDevice } from "./devices/LinearEncoder";
export { TouchSensor as TouchSensorDevice } from "./devices/TouchSensor";
export { Gyroscope as GyroscopeDevice } from "./devices/Gyroscope";
export { Trinkey as TrinkeyDevice } from "./devices/Trinkey";

export { AccelerationRange, DataRate, RotationRange, GyroscopeChipset } from "./proto/messages";

export * from "./DeviceManager";
