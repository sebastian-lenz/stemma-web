# StemmaWeb

A system for connecting Adafruit StemmaQT devices to a browser via WebUSB. The Trinkey RP2040 acts as a USB bridge between StemmaQT devices (I2C) and the browser.

## Project Structure

```
firmware/   — C++ firmware for the Adafruit Trinkey RP2040 Qt (PlatformIO/Arduino)
library/    — TypeScript/WebUSB client library (Vite, protobufjs)
site/       — Svelte site app, uses the client library
proto/      — Protocol Buffer definitions (Nanopb + protobufjs)
```

## Communication Protocol

**Framing:** Each message is sent with a 2-byte big-endian length prefix, followed by the serialized Protobuf payload.

**Directions:**

- Host → Trinkey: `Command` (SetPixel, SetAll, GetStatus, DeviceCommand)
- Trinkey → Host: `Response` (Status, DeviceState, DeviceEvent)

**Flow:**

1. Browser connects via WebUSB (Vendor ID `0x239a` = Adafruit)
2. `TrinkeyClient.startXxx(address)` sends `DeviceCommand` with `StartDevice`
3. Firmware creates a device object, manages it in the `DeviceManager`
4. Devices are polled via `poll()` in the loop, events sent back via USB

## Protobuf / Code Generation

The `.proto` files live in `proto/`. There are two use cases:

- **Firmware (Nanopb):** `.options` files limit array sizes for the microcontroller. Code generation must be done separately with the Nanopb generator.
- **Client (protobufjs):** `npm run build-proto` in the `library/` directory generates `src/proto/messages.js` and `src/proto/messages.d.ts` from the `.proto` files.

**New devices always require:**

1. A new `.proto` file in `proto/` with State/Event/Command messages
2. Import in `proto/messages.proto` (before `device_type.proto`)
3. A `.options` file for Nanopb if needed (array size constraints)

**Enum warning:** `pbts` has a bug — enums in generated JS suppress all subsequent interface definitions. Therefore: always define enums in device-specific `.proto` files **after** all messages. `DeviceType` lives separately in `proto/device_type.proto`, which is the last import in `messages.proto`.

## Firmware (firmware/)

**Platform:** Adafruit Trinkey RP2040 Qt, Framework Arduino, PlatformIO

**Key commands:**

```bash
cd firmware
pio run              # Compile
pio run --target upload  # Flash
pio device monitor   # Serial output (debug)
```

**Architecture:**

- `src/main.cpp` — USB init, framing, routing to `DeviceManager`
- `src/DeviceManager.h` — Manages up to 16 active devices, routes commands
- `src/devices/Device.h` — Abstract base class: `begin()`, `handleCommand()`, `poll()`
- `src/devices/` — One file per device class

**Adding a new device class:**

1. Create `src/devices/XxxDevice.h` (inherits from `Device`)
2. Register in `DeviceManager.h` under `StartDevice` and `StopDevice`
3. Extend the `DeviceType` enum in `proto/device_type.proto`

**Dependencies (platformio.ini):**

- `Adafruit NeoPixel` — NeoPixel control
- `Nanopb` — Protobuf for microcontrollers
- `Adafruit seesaw` — NeoDriver, RotaryEncoder, LinearEncoder
- `Adafruit MPR121` — TouchSensor
- `Adafruit LSM6DS` + `Adafruit BusIO` + `Adafruit Unified Sensor` — Gyroscope

## Client Library (library/)

**Tech Stack:** TypeScript, Vite, protobufjs

**Key commands:**

```bash
cd library
npm install
npm run proto   # Compile proto files to JS/TS
npm run build   # Build library (ESM + UMD)
npm run dev     # Development mode
```

**Architecture:**

- `src/DeviceManager.ts` — `DeviceManager`: WebUSB connection, `startXxx()` methods
- `src/utils/types.ts` — Shared interfaces and enums
- `src/devices/BaseDevice.ts` — Base class `BaseDevice`
- `src/devices/BaseNeoPixelDevice.ts` — Base class `BaseNeoPixelDevice`
- `src/devices/` — One file per device class

**Adding a new device class:**

1. Create `src/devices/xxx.ts` (inherits from `BaseDevice` or `BaseNeoPixelDevice`)
2. Add a `startXxx()` method in `src/trinkey.ts`
3. Add types in `src/devices/types.ts` (address, events)

## Supported Devices

| Device        | I2C Addresses | Library | NeoPixel |
| ------------- | ------------- | ------- | -------- |
| NeoDriver     | 0x60–0x67     | seesaw  | variable |
| RotaryEncoder | 0x36–0x3D     | seesaw  | 1        |
| LinearEncoder | 0x30–0x3F     | seesaw  | 4        |
| TouchSensor   | 0x5A–0x5D     | MPR121  | no       |
| Gyroscope     | 0x6A–0x6B     | LSM6DS  | no       |

## Site (site/)

```bash
cd site
npm install
npm run dev   # Start dev server
```

**Doc page conventions:**

- Tailwind classes for documentation pages are bundled as `@layer components` classes in `src/app.css`:
  - `.doc-h2` — Section heading
  - `.doc-p` — Body text (dimmed)
  - `.doc-link` — External link (indigo, underline)
  - `.doc-code` — Inline code
  - `.doc-kbd` — Keyboard shortcut
  - `.doc-codeblock` — Code block container (pre wrapper)
  - `.doc-card` — Bordered card
  - `.doc-step` — Numbered step badge
  - `.doc-badge` — Pill badge base class; always combine with a color modifier (see below)
  - `.doc-toc-link` — In-page TOC pill anchor (gray, hover highlight)
- **Badge color modifiers** (combine with `.doc-badge`):
  - `.doc-badge-number` — amber — for `number` types and numeric literal defaults
  - `.doc-badge-boolean` — green — for `boolean` types
  - `.doc-badge-string` — sky — for `string` types and string literal defaults
  - `.doc-badge-promise` — blue — for `Promise<*>` return types
  - `.doc-badge-object` — rose — for object return types (`ColorObject`, `{ type, address }`, etc.)
  - `.doc-badge-type` — gray — for complex or union types (e.g. `string | false | null`)
  - `.doc-badge-event` — indigo — for event name identifiers
- Icons are managed as an SVG sprite in `src/lib/icons.svg` (one `<symbol id="icon-xxx">` per icon). The sprite is inlined via a `?raw` import in `+layout.svelte`.
- Icon usage: `<Icon id="icon-xxx" />` from `$lib/components/Icon.svelte`. Default size `h-4 w-4`, overridable via the `class` prop.

## Device Reference Pages (site/)

Each device has a reference page at `site/src/routes/reference/devices/<device-name>/+page.svelte`.

**Page comment header** (top of every page):
```
<!-- DeviceName -->
<!-- Firmware source: ./firmware/src/devices/XxxDevice.h -->
<!-- Library source: ./library/src/devices/Xxx.ts -->
<!-- Shop: https://... -->
<!-- Reference: https://... -->
```

**Reference implementation:** `site/src/routes/reference/devices/rotary-encoder/+page.svelte` — use this as the template for all other device pages.

**Shared doc components** (in `site/src/lib/components/docs/`):
- `BaseDeviceProperties.svelte` — `id`, `isConnected`
- `BaseDeviceMethods.svelte` — `connect()`
- `BaseNeoPixelDeviceMethods.svelte` — all NeoPixel get/set methods

**`CodeBlock` component** (`site/src/lib/components/CodeBlock.svelte`):
- Use instead of raw `<div class="doc-codeblock">` for all code samples — provides syntax highlighting via highlight.js.
- Pass `code` as a template literal prop: `<CodeBlock code={`...`} />`
- Pass `nested` when the block sits inside a `doc-card` — darkens the background so it reads as distinct from the card: `<CodeBlock nested code={`...`} />`

**TOC nav:** Place a `<nav>` with `.doc-toc-link` pill anchors immediately after the `<h1>`, linking to `#connection`, `#methods`, `#properties`, `#events`, and `#event-argument` (if present). Add matching `id` attributes to each `<h2>` section heading.

**Page outline:**

1. **Device description** — Briefly describe what the device does; link to shop and reference sites.
2. **Connection** — Show the function signature in a `CodeBlock`, then one `doc-card` per parameter:
   - Card header: `doc-code` name + type badge + default value badge (use the type's color for the default, e.g. `doc-badge-number` for a numeric default).
   - Use `doc-badge-type` (gray) for complex or union types (e.g. `string | false | null`).
   - The default device name is in `library/src/p5/Extension.ts`. NeoDriver and Trinkey have no name parameter.
   - The name determines auto-registered callbacks: `name + ucfirst(eventName)` — show these in a nested `CodeBlock` inside the name card.
   - If the device supports multiple addresses, show an address table (columns: Address, Index, A0, A1, A2) inside the `addressOrIndex` card. Cells use `py-2 pl-3 pr-4`.
3. **Methods** — One `doc-card` per method with signature, return type badge, and description.
   - Device-unique methods first (alphabetical), then `<BaseNeoPixelDeviceMethods />` (if applicable), then `<BaseDeviceMethods />`.
4. **Properties** — One `doc-card` per property with name, type badge, and description.
   - Device-unique properties first (alphabetical), then `<BaseDeviceProperties />`.
5. **Events** — One `doc-card` per event with callback name, `doc-badge-event` event name badge, and description.
   - Event types are in the device library file as `XxxEvents`. List alphabetically.
6. **Event Argument** — Describe the shared `event.detail` fields common to all events on this device. One `doc-card` per field, listed alphabetically.

**Sorting:** Methods, properties, events, and event argument fields are always listed alphabetically within their section.

## Key Conventions

- Each device has exactly one `.proto` file, one firmware class (`XxxDevice.h`), and one client class (`xxx.ts`)
- Device events are dispatched via `EventTarget`/`CustomEvent` on the client side
- NeoPixel devices inherit from `BaseNeoPixelDevice` (shared brightness/color logic)
- Colors on the client accept a `ColorObject` (`{red, green, blue}`) or a hex string
- The `DeviceManager` on the firmware side holds a maximum of 16 devices simultaneously
