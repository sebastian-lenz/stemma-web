<!--
PressureSensor
Firmware source: ./firmware/src/devices/PressureSensorDevice.h
Library source: ./library/src/devices/PressureSensor.ts
Shop: https://www.adafruit.com/product/4633
Reference: https://learn.adafruit.com/adafruit-lps25-pressure-sensor
-->
<script lang="ts">
  import BaseDeviceMethods from "$lib/components/docs/BaseDeviceMethods.svelte";
  import BaseDeviceProperties from "$lib/components/docs/BaseDeviceProperties.svelte";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">Pressure Sensor</h1>

<nav class="mb-8 flex flex-wrap gap-2">
  <a href="#connection" class="doc-toc-link">Connection</a>
  <a href="#methods" class="doc-toc-link">Methods</a>
  <a href="#properties" class="doc-toc-link">Properties</a>
  <a href="#events" class="doc-toc-link">Events</a>
  <a href="#event-argument" class="doc-toc-link">Event Argument</a>
</nav>

<p class="doc-p">
  The <a class="doc-link" href="https://www.adafruit.com/product/4633"
    >Adafruit LPS25</a
  >
  is a barometric pressure and temperature sensor. It supports two chipset variants
  (LPS22 and LPS25) with configurable output data rates. See the
  <a
    class="doc-link"
    href="https://learn.adafruit.com/adafruit-lps25-pressure-sensor"
    >Adafruit learn guide</a
  >
  for wiring and hardware details.
</p>

<h2 id="connection" class="doc-h2">Connection</h2>

<p class="doc-p">
  Call <span class="doc-code">startPressureSensor()</span> inside
  <span class="doc-code">preload()</span>. The device is ready to use by the
  time <span class="doc-code">setup()</span> runs.
</p>

<CodeBlock
  code={`let sensor;

function preload() {
  sensor = startPressureSensor(name?, addressOrIndex?, chipset?);
}`}
/>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">name</span>
    <span class="doc-badge doc-badge-type ml-2">string | false | null</span>
    <span class="doc-badge doc-badge-string ml-2">"pressure"</span>
  </p>
  <p class="doc-p">
    Controls automatic event callback registration. With the default name:
  </p>
  <CodeBlock
    nested
    code={`function pressureChanged(event) { /* new reading */ }`}
  />
  <p class="doc-p mb-0">
    Pass <span class="doc-code">false</span> or
    <span class="doc-code">null</span>
    to disable and use <span class="doc-code">addEventListener</span> instead.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">addressOrIndex</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    <span class="doc-badge doc-badge-number ml-2">0x5D</span>
  </p>
  <p class="doc-p">
    The I2C address of the device, or an index (0–1) into the address list. Set
    by the SDO pin:
  </p>
  <table class="w-full text-sm text-left text-gray-300">
    <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
      <tr>
        <th class="py-2 pl-3 pr-4">Address</th>
        <th class="py-2 pl-3 pr-4">Index</th>
        <th class="py-2 pl-3">SDO pin</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x5D</td>
        <td class="py-2 pl-3 pr-4">0</td>
        <td class="py-2 pl-3">high</td>
      </tr>
      <tr>
        <td class="py-2 pl-3 pr-4 doc-code">0x5C</td>
        <td class="py-2 pl-3 pr-4">1</td>
        <td class="py-2 pl-3">low</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">chipset</span>
    <span class="doc-badge doc-badge-type ml-2">PressureSensorChipset</span>
    <span class="doc-badge doc-badge-type ml-2"
      >PRESSURE_SENSOR_CHIPSET_LPS25</span
    >
  </p>
  <p class="doc-p">
    The chipset variant on the board. All constants are available as global
    variables in p5.js sketches:
  </p>
  <table class="w-full text-sm text-left text-gray-300">
    <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
      <tr>
        <th class="py-2 pl-3 pr-4">Constant</th>
        <th class="py-2 pl-3">Chip</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">PRESSURE_SENSOR_CHIPSET_LPS25</td>
        <td class="py-2 pl-3">LPS25HB (default)</td>
      </tr>
      <tr>
        <td class="py-2 pl-3 pr-4 doc-code">PRESSURE_SENSOR_CHIPSET_LPS22</td>
        <td class="py-2 pl-3">LPS22HB</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="methods" class="doc-h2">Methods</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getDataRate()</span>
    <span class="doc-badge doc-badge-object ml-2">PressureSensorDataRate</span>
  </p>
  <p class="doc-p">Returns the current output data rate enum value.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getPressure()</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
  </p>
  <p class="doc-p">Returns the last measured pressure in hPa.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getTemperature()</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
  </p>
  <p class="doc-p">Returns the last measured temperature in °C.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">setDataRate(value)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;boolean&gt;</span>
  </p>
  <p class="doc-p">
    Sets the output data rate. Unsupported rates on a given chipset are mapped
    to the nearest available rate. Available constants (all global in p5.js
    sketches):
  </p>
  <table class="w-full text-sm text-left text-gray-300">
    <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
      <tr>
        <th class="py-2 pl-3 pr-4">Constant</th>
        <th class="py-2 pl-3 pr-4">LPS25</th>
        <th class="py-2 pl-3">LPS22</th>
      </tr>
    </thead>
    <tbody>
      {#each [["PRESSURE_SENSOR_DATA_RATE_ONE_SHOT", "one-shot", "one-shot"], ["PRESSURE_SENSOR_DATA_RATE_1_HZ", "1 Hz", "1 Hz"], ["PRESSURE_SENSOR_DATA_RATE_7_HZ", "7 Hz", "~10 Hz"], ["PRESSURE_SENSOR_DATA_RATE_10_HZ", "~12.5 Hz", "10 Hz"], ["PRESSURE_SENSOR_DATA_RATE_12_5_HZ", "12.5 Hz", "~10 Hz"], ["PRESSURE_SENSOR_DATA_RATE_25_HZ", "25 Hz (default)", "25 Hz (default)"], ["PRESSURE_SENSOR_DATA_RATE_50_HZ", "~25 Hz", "50 Hz"], ["PRESSURE_SENSOR_DATA_RATE_75_HZ", "~25 Hz", "75 Hz"]] as [name, lps25, lps22]}
        <tr class="border-b border-gray-800 last:border-0">
          <td class="py-2 pl-3 pr-4 doc-code">{name}</td>
          <td class="py-2 pl-3 pr-4">{lps25}</td>
          <td class="py-2 pl-3">{lps22}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<BaseDeviceMethods />

<h2 id="properties" class="doc-h2">Properties</h2>

<BaseDeviceProperties />

<h2 id="events" class="doc-h2">Events</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">changed(event)</span>
    <span class="doc-badge doc-badge-event ml-2">changed</span>
  </p>
  <p class="doc-p">
    Fires on every sensor poll with updated pressure and temperature readings.
  </p>
</div>

<h2 id="event-argument" class="doc-h2">Event Argument</h2>

<p class="doc-p">
  All event callbacks receive a single <span class="doc-code">event</span>
  argument. The event detail is available at
  <span class="doc-code">event.detail</span> and contains:
</p>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.pressure</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    — Barometric pressure in hPa.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.temperature</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    — Temperature in °C.
  </p>
</div>
