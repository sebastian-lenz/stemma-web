# StemmaWeb

Connect [Adafruit StemmaQT](https://learn.adafruit.com/introducing-adafruit-stemma-qt) devices to a browser via WebUSB. The [Adafruit Trinkey RP2040 Qt](https://www.adafruit.com/product/5056) acts as a USB bridge between StemmaQT devices (I2C) and the browser.

## Documentation & Reference

Visit the site for a full reference and an interactive playground:

🔗 [sebastian-lenz.github.io/stemma-web](https://sebastian-lenz.github.io/stemma-web/)

## Supported Devices

| Device         | Shop |
| -------------- | ---- |
| NeoDriver      | [adafruit.com/product/5766](https://www.adafruit.com/product/5766) |
| RotaryEncoder  | [adafruit.com/product/5880](https://www.adafruit.com/product/5880) |
| LinearEncoder  | [adafruit.com/product/5295](https://www.adafruit.com/product/5295) |
| TouchSensor    | [adafruit.com/product/4830](https://www.adafruit.com/product/4830) |
| Gyroscope      | [adafruit.com/product/4438](https://www.adafruit.com/product/4438) |
| PressureSensor | [adafruit.com/product/4633](https://www.adafruit.com/product/4633) |
| CO2Sensor      | [adafruit.com/product/5187](https://www.adafruit.com/product/5187) |
| DistanceSensor | [adafruit.com/product/3317](https://www.adafruit.com/product/3317) |
| UVSensor       | [adafruit.com/product/4831](https://www.adafruit.com/product/4831) |
| NFC Tag        | [adafruit.com/product/4701](https://www.adafruit.com/product/4701) |
| RFID Reader    | [soldered.com/products/125khz-rfid-board](https://soldered.com/products/125khz-rfid-board?attribute_pa_variant=i2c-eng) |

## Project Structure

```
firmware/   — C++ firmware for the Adafruit Trinkey RP2040 Qt (PlatformIO/Arduino)
library/    — TypeScript/WebUSB client library (Vite, protobufjs)
site/       — Svelte documentation site
proto/      — Protocol Buffer definitions (Nanopb + protobufjs)
```

## How It Works

1. The browser connects to the Trinkey via WebUSB.
2. The client library sends `DeviceCommand` messages (length-prefixed Protobuf) to start/stop devices.
3. The firmware creates device objects, polls them in the main loop, and sends events back over USB.
4. The client library exposes device instances as `EventTarget` objects that dispatch `CustomEvent`s on state changes.

## Getting Started

See the [documentation site](https://sebastian-lenz.github.io/stemma-web/) for installation instructions, API reference, and code examples.

## License

[MIT](LICENSE)
