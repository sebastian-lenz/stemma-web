import { resolve } from "$app/paths";

export const devices = [
  {
    name: "CO2 Sensor",
    desc: "Photoacoustic CO₂ sensor that also measures humidity and temperature.",
    addr: "0x62",
    href: resolve("/reference/devices/co2-sensor"),
  },
  {
    name: "Distance Sensor",
    desc: "Time-of-flight laser ranging sensor. Measures distances up to 2 m.",
    addr: "0x29",
    href: resolve("/reference/devices/distance-sensor"),
  },
  {
    name: "Gyroscope",
    desc: "6-DoF IMU with accelerometer and gyroscope. Reports orientation and motion data.",
    addr: "0x6A–0x6B",
    href: resolve("/reference/devices/gyroscope"),
  },
  {
    name: "Linear Encoder",
    desc: "Sliding fader with four NeoPixels. Tracks absolute position.",
    addr: "0x30–0x3F",
    href: resolve("/reference/devices/linear-encoder"),
  },
  {
    name: "NeoDriver",
    desc: "I²C NeoPixel driver for addressable LEDs. Full RGB color control.",
    addr: "0x60–0x67",
    href: resolve("/reference/devices/neo-driver"),
  },
  {
    name: "NFC Tag",
    desc: "I²C EEPROM that doubles as an NFC tag. Write NDEF records readable by phones.",
    addr: "0x2D",
    href: resolve("/reference/devices/nfc-tag"),
  },
  {
    name: "Pressure Sensor",
    desc: "Barometric pressure and temperature sensor. Supports LPS22 and LPS25 chipsets.",
    addr: "0x5C–0x5D",
    href: resolve("/reference/devices/pressure-sensor"),
  },
  {
    name: "RFID Reader",
    desc: "125 kHz RFID reader. Detects tag presence and reports tag IDs over I²C.",
    addr: "0x30–0x37",
    href: resolve("/reference/devices/rfid-reader"),
  },
  {
    name: "Rotary Encoder",
    desc: "Quadrature knob with push button and one NeoPixel. Tracks absolute position.",
    addr: "0x36–0x3D",
    href: resolve("/reference/devices/rotary-encoder"),
  },
  {
    name: "Touch Sensor",
    desc: "12-channel capacitive touch controller. Reports touch and release events per pad.",
    addr: "0x5A–0x5D",
    href: resolve("/reference/devices/touch-sensor"),
  },
  {
    name: "Trinkey RP2040",
    desc: "The USB bridge itself. One onboard NeoPixel, controllable from your sketch.",
    addr: "USB",
    href: resolve("/reference/devices/trinkey"),
  },
  {
    name: "UV Sensor",
    desc: "Ambient light and UV index sensor with selectable gain and resolution.",
    addr: "0x53",
    href: resolve("/reference/devices/uv-sensor"),
  },
];
