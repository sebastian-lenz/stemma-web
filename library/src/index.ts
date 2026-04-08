export type {
  Vector,
  Color,
  ColorObject,
  DeviceIdentifier,
} from "./utils/types";

export type { CO2SensorAddress, CO2SensorEvent } from "./devices/CO2Sensor";
export type {
  DistanceSensorAddress,
  DistanceSensorEvent,
} from "./devices/DistanceSensor";
export type { GyroscopeAddress, GyroscopeEvent } from "./devices/Gyroscope";
export type {
  LinearEncoderAddress,
  LinearEncoderChangedEvent as LinearEncoderEvent,
} from "./devices/LinearEncoder";
export type { NeoDriverAddress } from "./devices/NeoDriver";
export type {
  PressureSensorAddress,
  PressureSensorEvent,
} from "./devices/PressureSensor";
export type { RFIDReaderAddress, RFIDReaderEvent } from "./devices/RFIDReader";
export type {
  RotaryEncoderAddress,
  RotaryEncoderEvent,
} from "./devices/RotaryEncoder";
export type {
  TouchSensorAddress,
  TouchSensorEvent,
} from "./devices/TouchSensor";
export type { UVSensorAddress, UVSensorEvent } from "./devices/UVSensor";
export type {
  EmailMessage,
  GeoLocation,
  ShortMessage,
  VCard,
} from "./devices/NFCTag";

export { CO2Sensor as CO2SensorDevice } from "./devices/CO2Sensor";
export { DistanceSensor as DistanceSensorDevice } from "./devices/DistanceSensor";
export { Gyroscope as GyroscopeDevice } from "./devices/Gyroscope";
export { LinearEncoder as LinearEncoderDevice } from "./devices/LinearEncoder";
export { NFCTag as NFCTagDevice } from "./devices/NFCTag";
export { NeoDriver as NeoDriverDevice } from "./devices/NeoDriver";
export { PressureSensor as PressureSensorDevice } from "./devices/PressureSensor";
export { RFIDReader as RFIDReaderDevice } from "./devices/RFIDReader";
export { RotaryEncoder as RotaryEncoderDevice } from "./devices/RotaryEncoder";
export { TouchSensor as TouchSensorDevice } from "./devices/TouchSensor";
export { Trinkey as TrinkeyDevice } from "./devices/Trinkey";
export { UVSensor as UVSensorDevice } from "./devices/UVSensor";

export {
  AccelerationRange,
  DataRate,
  GyroscopeChipset,
  PressureSensorChipset,
  PressureSensorDataRate,
  RotationRange,
  UVSensorGain,
  UVSensorMode,
  UVSensorResolution,
} from "./proto/messages";

export * from "./DeviceManager";
