Add the following devices to the project:

## PressureSensor

Shop: https://www.adafruit.com/product/4633
Reference: https://learn.adafruit.com/adafruit-lps25-pressure-sensor
Arduino Library: Adafruit LPS2X Library
Addresses: 0x5D, 0x5C

Start options:

- Chipset: LPS22 or LPS25

Enum PressureSensorChipset:

- PRESSURE_SENSOR_CHIPSET_LP22 > LPS22
- PRESSURE_SENSOR_CHIPSET_LP25 > LPS25

Enum PressureSensorDataRate:

LPS22HB supports: ONE_SHOT, 1, 10, 25, 50, 75 Hz
LPS25HB supports: ONE_SHOT, 1, 7, 12.5, 25 Hz
(~) = nearest available rate used for that chipset

- PRESSURE_SENSOR_DATA_RATE_ONE_SHOT > LPS22_RATE_ONE_SHOT | LPS25_RATE_ONE_SHOT
- PRESSURE_SENSOR_DATA_RATE_1_HZ > LPS22_RATE_1_HZ | LPS25_RATE_1_HZ
- PRESSURE_SENSOR_DATA_RATE_7_HZ > LPS22_RATE_10_HZ (~) | LPS25_RATE_7_HZ
- PRESSURE_SENSOR_DATA_RATE_10_HZ > LPS22_RATE_10_HZ | LPS25_RATE_12_5_HZ (~)
- PRESSURE_SENSOR_DATA_RATE_12_5_HZ > LPS22_RATE_10_HZ (~) | LPS25_RATE_12_5_HZ
- PRESSURE_SENSOR_DATA_RATE_25_HZ > LPS22_RATE_25_HZ | LPS25_RATE_25_HZ
- PRESSURE_SENSOR_DATA_RATE_50_HZ > LPS22_RATE_50_HZ | LPS25_RATE_25_HZ (~)
- PRESSURE_SENSOR_DATA_RATE_75_HZ > LPS22_RATE_75_HZ | LPS25_RATE_25_HZ (~)

Library interface:

```
export type PressureSensorEvent = CustomEvent<{
  pressure: number,
  temperature: number,
}>;

type PressureSensorEvents {
  changed: PressureSensorEvent;
}

// Use DataRate from Protobuf
interface PressureSensor extends BaseDevice {
  getDataRate(): PressureSensorDataRate;
  getPressure(): number;
  getTemperature(): number;
  setDataRate(value: PressureSensorDataRate): Promise<boolean>;
}

// Extend ./library/src/DeviceManager.ts
interface DeviceManager {
  getPressureSensor(addressOrIndex?): PressureSensor;
}

// Extend ./library/src/p5/Extension.ts
interface Extension {
  startPressureSensor(name = "pressure", addressOrIndex?): PressureSensor | Promise<PressureSensor>;
}
```

## CO2Sensor

Shop: https://www.adafruit.com/product/5187
Reference: https://learn.adafruit.com/adafruit-scd-40-and-scd-41
Arduino Library: Sensirion I2C SCD4x
Addresses: 0x62

Library interface:

```
export type CO2SensorEvent = CustomEvent<{
  co2: number,
  humidity: number,
  temperature: number,
}>;

type CO2SensorEvents {
  changed: CO2SensorEvent;
}

interface CO2Sensor extends BaseDevice {
  getCO2(): number;
  getHumidity(): number;
  getTemperature(): number;
}

// Extend ./library/src/DeviceManager.ts
interface DeviceManager {
  getCO2Sensor(): CO2Sensor;
}

// Extend ./library/src/p5/Extension.ts
interface Extension {
  startCO2Sensor(name = "co2"): CO2Sensor | Promise<CO2Sensor>;
}
```

## DistanceSensor

Shop: https://www.adafruit.com/product/3317
Reference: https://learn.adafruit.com/adafruit-vl53l0x-micro-lidar-distance-sensor-breakout
Arduino Library: Adafruit VL53L0X
Addresses: 0x29

Library interface:

```
export type DistanceSensorEvent = CustomEvent<{
  distance: number,
}>;

type DistanceSensorEvents {
  changed: DistanceSensorEvent;
}

interface DistanceSensor extends BaseDevice {
  getDistance(): number;
}

// Extend ./library/src/DeviceManager.ts
interface DeviceManager {
  getDistanceSensor(): DistanceSensor;
}

// Extend ./library/src/p5/Extension.ts
interface Extension {
  startDistanceSensor(name = "distance"): DistanceSensor | Promise<DistanceSensor>;
}
```

## UVSensor

Shop: https://www.adafruit.com/product/4831
Reference: https://learn.adafruit.com/adafruit-ltr390-uv-sensor
Arduino Library: Adafruit LTR390
Addresses: 0x53

Enum UVSensorMode:

- UV_SENSOR_MODE_ALS > LTR390_MODE_ALS
- UV_SENSOR_MODE_UVS > LTR390_MODE_UVS

Enum UVSensorGain:

- UV_SENSOR_GAIN_1 > LTR390_GAIN_1
- UV_SENSOR_GAIN_3 > LTR390_GAIN_3
- UV_SENSOR_GAIN_6 > LTR390_GAIN_6
- UV_SENSOR_GAIN_9 > LTR390_GAIN_9
- UV_SENSOR_GAIN_18 > LTR390_GAIN_18

enum UVSensorResolution:

- UV_SENSOR_RESOLUTION_20_BIT > LTR390_RESOLUTION_20BIT,
- UV_SENSOR_RESOLUTION_19_BIT > LTR390_RESOLUTION_19BIT,
- UV_SENSOR_RESOLUTION_18_BIT > LTR390_RESOLUTION_18BIT,
- UV_SENSOR_RESOLUTION_17_BIT > LTR390_RESOLUTION_17BIT,
- UV_SENSOR_RESOLUTION_16_BIT > LTR390_RESOLUTION_16BIT,
- UV_SENSOR_RESOLUTION_13_BIT > LTR390_RESOLUTION_13BIT,

Library interface:

```
export type UVSensorEvent = CustomEvent<{
  value: number,
}>;

type UVSensorEvents {
  changed: UVSensorEvent;
}

interface UVSensor extends BaseDevice {
  getValue(): number; // ALS or UVS, depending on selected mode
  getGain(): UVSensorGain;
  getMode(): UVSensorMode;
  getResolution(): UVSensorResolution;
  setGain(value: UVSensorGain): Promise<boolean>;
  setMode(value: UVSensorMode): Promise<boolean>;
  setResolution(value: UVSensorResolution): Promise<boolean>;
}

// Extend ./library/src/DeviceManager.ts
interface DeviceManager {
  getUVSensor(): UVSensor;
}

// Extend ./library/src/p5/Extension.ts
interface Extension {
  startUVSensor(name = "uv"): UVSensor | Promise<UVSensor>;
}
```

## NFC Tag

Shop: https://www.adafruit.com/product/4701
Reference: https://learn.adafruit.com/adafruit-st25dv16k-i2c-rfic-eeprom-breakout
Arduino Library: STM32duino ST25DV
Addresses: 0x2D

Library interface:

```
interface ShortMessage {
  information?: string;  // Max: 400 chars
  message: string;       // Max: 400 chars
  phoneNumber: string;   // Max: 16 chars
}

interface GeoLocation {
  information?: string;  // Max: 100 chars
  latitude: number;
  longitude: number;
}

interface EmailMessage {
  email: string;         // Max: 64 chars
  information?: string;  // Max: 400 chars
  message: string;       // Max: 2000 chars
  subject: string;       // Max: 100 chars
}

interface VCard {
  address: string;       // Max: 80 chars
  cellularPhone: string; // Max: 40 chars
  email: string;         // Max: 80 chars
  firstName: string      // Max: 80 chars
  name: string;          // Max: 80 chars
  homeAddress: string;   // Max: 80 chars
  homeEmail: string;     // Max: 80 chars
  homePhone: string;     // Max: 40 chars
  organization: string;  // Max: 80 chars
  title: string;         // Max: 80 chars
  url: string;           // Max: 80 chars
  workAddress: string;   // Max: 80 chars
  workPhone: string;     // Max: 40 chars
  workEmail: string;     // Max: 80 chars
}

interface NFCTag extends BaseDevice {
  writeGeoLocation(geoLocation: GeoLocation): Promise<boolean>;
  writeGeoLocation(latitude: number, longitude: number, information: string = ""): Promise<boolean>;
  readGeoLocation(): Promise<GeoLocation>;

  writeEmail(email: EmailMessage): Promise<boolean>;
  writeEmail(email: string, subject: string, message: string, information: string = ""): Promise<boolean>;
  readEmail(): Promise<EmailMessage>;

  writeSms(shortMessage: ShortMessage): Promise<boolean>;
  writeSms(phoneNumber: string, message: string, information: string = ""): Promise<boolean>;
  readSms(): Promise<ShortMessage>;

  // Always use UTF8 encoding
  writeText(text: string, language: string = 'en'): Promise<boolean>;
  readText(): Promise<string>;

  writeUnabridgedUri(uri: string, information: string = ""): Promise<boolean>;
  readUnabridgedUri(): Promise<string>;

  writeUri(protocol: string, uri: string, information: string = ""): Promise<boolean>;
  readUri(): Promise<string>;

  writeVcard(vcard: Partial<VCard>): Promise<boolean>;
  readVcard(): Promise<VCard>;

  // Too complex, maybe implement later:
  // writeWifi(String SSID, Ndef_Wifi_Authentication_t auth, Ndef_Wifi_Encryption_t enc, String key): Promise<boolean>;
  // readWifi(sWifiTokenInfo *wifitoken);
}

// Extend ./library/src/DeviceManager.ts
interface DeviceManager {
  getNFCTag(): NFCTag;
}

// Extend ./library/src/p5/Extension.ts
interface Extension {
  startNFCTag(): NFCTag | Promise<NFCTag>;
}
```

## Soldered RFID Reader

Shop: https://soldered.com/products/125khz-rfid-board?attribute_pa_variant=i2c-eng
Reference: https://oldshop.soldered.com/documentation/rfid/overview/
Arduino Library: [STM32duino ST25DV](https://github.com/SolderedElectronics/Soldered-RFID-Reader-125kHz-Arduino-Library/tree/main)
Addresses: 0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37

Library interface:

```
export type SolderedRFIDReaderEvent = CustomEvent<{
  tagId: string;
}>;

type SolderedRFIDReaderEvents {
  changed: SolderedRFIDReaderEvent;
}

interface SolderedRFIDReader extends BaseDevice {
  getTagID(): string|null;
}

// Extend ./library/src/DeviceManager.ts
interface DeviceManager {
  getRFIDReader(addressOrIndex?): SolderedRFIDReader;
}

// Extend ./library/src/p5/Extension.ts
interface Extension {
  startRFIDReader(name = "rfid", addressOrIndex?): SolderedRFIDReader | Promise<SolderedRFIDReader>;
}
```
