# StemmaWeb

Ein System zum Anschluss von Adafruit StemmaQT-Geräten an einen Browser via WebUSB. Der Trinkey RP2040 fungiert als USB-Brücke zwischen StemmaQT-Geräten (I2C) und dem Browser.

## Projektstruktur

```
firmware/   — C++ Firmware für den Adafruit Trinkey RP2040 Qt (PlatformIO/Arduino)
library/    — TypeScript/WebUSB Client-Library (Vite, protobufjs)
site/       — Svelte Site-App, nutzt die Client-Library
proto/      — Protocol Buffer Definitionen (Nanopb + protobufjs)
```

## Kommunikationsprotokoll

**Framing:** Jede Nachricht wird mit einem 2-Byte Big-Endian Längenprefix gesendet, gefolgt vom serialisierten Protobuf-Payload.

**Richtungen:**

- Host → Trinkey: `Command` (SetPixel, SetAll, GetStatus, DeviceCommand)
- Trinkey → Host: `Response` (Status, DeviceState, DeviceEvent)

**Ablauf:**

1. Browser verbindet via WebUSB (Vendor ID `0x239a` = Adafruit)
2. `TrinkeyClient.startXxx(address)` sendet `DeviceCommand` mit `StartDevice`
3. Firmware erstellt Geräteobjekt, verwaltet es im `DeviceManager`
4. Geräte werden per `poll()` im Loop abgefragt, Events via USB zurückgesendet

## Protobuf / Codegenerierung

Die `.proto`-Dateien liegen in `proto/`. Es gibt zwei Verwendungszwecke:

- **Firmware (Nanopb):** `.options`-Dateien begrenzen Array-Größen für den Mikrocontroller. Codegenerierung muss separat mit dem Nanopb-Generator erfolgen.
- **Client (protobufjs):** `npm run build-proto` im `library/`-Verzeichnis generiert `src/proto/messages.js` und `src/proto/messages.d.ts` aus den `.proto`-Dateien.

**Neue Geräte erfordern immer:**

1. Neue `.proto`-Datei in `proto/` mit State/Event/Command-Messages
2. Import in `proto/messages.proto` (vor `device_type.proto`)
3. Ggf. `.options`-Datei für Nanopb (Array-Größenbeschränkungen)

**Achtung Enums:** `pbts` hat einen Bug — Enums im generierten JS unterdrücken alle nachfolgenden Interface-Definitionen. Daher gilt: Enums in gerätespezifischen `.proto`-Dateien immer **nach** allen Messages definieren. `DeviceType` liegt separat in `proto/device_type.proto`, das als letzter Import in `messages.proto` steht.

## Firmware (firmware/)

**Platform:** Adafruit Trinkey RP2040 Qt, Framework Arduino, PlatformIO

**Wichtige Befehle:**

```bash
cd firmware
pio run              # Kompilieren
pio run --target upload  # Flashen
pio device monitor   # Serielle Ausgabe (Debug)
```

**Architektur:**

- `src/main.cpp` — USB-Init, Framing, Routing zu `DeviceManager`
- `src/DeviceManager.h` — Verwaltet bis zu 16 aktive Geräte, routet Commands
- `src/devices/Device.h` — Abstrakte Basisklasse: `begin()`, `handleCommand()`, `poll()`
- `src/devices/` — Eine Datei pro Geräteklasse

**Neue Geräteklasse hinzufügen:**

1. `src/devices/XxxDevice.h` erstellen (erbt von `Device`)
2. In `DeviceManager.h` bei `StartDevice` und `StopDevice` einbinden
3. `DeviceType`-Enum in `proto/device_type.proto` erweitern

**Abhängigkeiten (platformio.ini):**

- `Adafruit NeoPixel` — NeoPixel-Steuerung
- `Nanopb` — Protobuf für Mikrocontroller
- `Adafruit seesaw` — NeoDriver, RotaryEncoder, LinearEncoder
- `Adafruit MPR121` — TouchSensor
- `Adafruit LSM6DS` + `Adafruit BusIO` + `Adafruit Unified Sensor` — Gyroscope

## Client-Library (library/)

**Tech Stack:** TypeScript, Vite, protobufjs

**Wichtige Befehle:**

```bash
cd library
npm install
npm run proto   # Proto-Dateien zu JS/TS kompilieren
npm run build   # Library bauen (ESM + UMD)
npm run dev     # Entwicklungsmodus
```

**Architektur:**

- `src/DeviceManager.ts` — `DeviceManager`: WebUSB-Verbindung, `startXxx()`-Methoden
- `src/utils/types.ts` — Gemeinsame Interfaces und Enums
- `src/devices/BaseDevice.ts` — Basisklasse `BaseDevice`
- `src/devices/BaseNeoPixelDevice.ts` — Basisklasse `BaseNeoPixelDevice`
- `src/devices/` — Eine Datei pro Geräteklasse

**Neue Geräteklasse hinzufügen:**

1. `src/devices/xxx.ts` erstellen (erbt von `BaseDevice` oder `BaseNeoPixelDevice`)
2. In `src/trinkey.ts` `startXxx()`-Methode ergänzen
3. Typen in `src/devices/types.ts` ergänzen (Adresse, Events)

## Unterstützte Geräte

| Gerät         | I2C-Adressen | Library | NeoPixel |
| ------------- | ------------ | ------- | -------- |
| NeoDriver     | 0x60–0x67    | seesaw  | variabel |
| RotaryEncoder | 0x36–0x3D    | seesaw  | 1        |
| LinearEncoder | 0x30–0x3F    | seesaw  | 4        |
| TouchSensor   | 0x5A–0x5D    | MPR121  | nein     |
| Gyroscope     | 0x6A–0x6B    | LSM6DS  | nein     |

## Site (site/)

```bash
cd site
npm install
npm run dev   # Startet Dev-Server
```

**Doc-Seiten Konventionen:**

- Tailwind-Klassen für Dokumentationsseiten sind als `@layer components`-Klassen in `src/app.css` gebündelt:
  - `.doc-h2` — Abschnittsüberschrift
  - `.doc-p` — Fließtext (gedimmt)
  - `.doc-link` — Externer Link (indigo, underline)
  - `.doc-code` — Inline-Code
  - `.doc-kbd` — Tastaturkürzel
  - `.doc-codeblock` — Code-Block-Container (Pre-Wrapper)
  - `.doc-card` — Bordered Card
  - `.doc-step` — Nummerierter Schritt-Badge
  - `.doc-badge` — Pill-Badge (Farbe per Utility ergänzen, z.B. `doc-badge bg-indigo-900/60 text-indigo-300`)
- Icons werden als SVG-Sprite in `src/lib/icons.svg` verwaltet (je Icon ein `<symbol id="icon-xxx">`). Das Sprite wird per `?raw`-Import in `+layout.svelte` inline eingebettet.
- Icon-Verwendung: `<Icon id="icon-xxx" />` aus `$lib/components/Icon.svelte`. Standard-Größe `h-4 w-4`, überschreibbar per `class`-Prop.

## Wichtige Konventionen

- Jedes Gerät hat exakt eine `.proto`-Datei, eine Firmware-Klasse (`XxxDevice.h`) und eine Client-Klasse (`xxx.ts`)
- Geräte-Events werden über `EventTarget`/`CustomEvent` im Client dispatched
- NeoPixel-Geräte erben von `BaseNeoPixelDevice` (gemeinsame Brightness/Color-Logik)
- Farben im Client akzeptieren `ColorObject` (`{red, green, blue}`) oder Hex-String
- Der `DeviceManager` auf der Firmware-Seite hält maximal 16 Geräte gleichzeitig
