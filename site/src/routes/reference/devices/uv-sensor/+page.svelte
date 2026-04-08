<!--
UVSensor
Firmware source: ./firmware/src/devices/UVSensorDevice.h
Library source: ./library/src/devices/UVSensor.ts
Shop: https://www.adafruit.com/product/4831
Reference: https://learn.adafruit.com/adafruit-ltr390-uv-sensor
-->
<script lang="ts">
  import BaseDeviceMethods from "$lib/components/docs/BaseDeviceMethods.svelte";
  import BaseDeviceProperties from "$lib/components/docs/BaseDeviceProperties.svelte";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">UV Sensor</h1>

<nav class="mb-8 flex flex-wrap gap-2">
  <a href="#connection" class="doc-toc-link">Connection</a>
  <a href="#methods" class="doc-toc-link">Methods</a>
  <a href="#properties" class="doc-toc-link">Properties</a>
  <a href="#events" class="doc-toc-link">Events</a>
  <a href="#event-argument" class="doc-toc-link">Event Argument</a>
</nav>

<p class="doc-p">
  The <a class="doc-link" href="https://www.adafruit.com/product/4831">Adafruit LTR390</a>
  measures ambient light (ALS) and UV index (UVS) in two selectable modes. It has a fixed I2C
  address. See the
  <a class="doc-link" href="https://learn.adafruit.com/adafruit-ltr390-uv-sensor">Adafruit learn guide</a>
  for wiring and hardware details.
</p>

<h2 id="connection" class="doc-h2">Connection</h2>

<p class="doc-p">
  Call <span class="doc-code">startUVSensor()</span> inside
  <span class="doc-code">preload()</span>. The device is ready to use by the
  time <span class="doc-code">setup()</span> runs.
</p>

<CodeBlock
  code={`let sensor;

function preload() {
  sensor = startUVSensor(name?);
}`}
/>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">name</span>
    <span class="doc-badge doc-badge-type ml-2">string | false | null</span>
    <span class="doc-badge doc-badge-string ml-2">"uv"</span>
  </p>
  <p class="doc-p">
    Controls automatic event callback registration. With the default name:
  </p>
  <CodeBlock nested code={`function uvChanged(event) { /* new reading */ }`} />
  <p class="doc-p mb-0">
    Pass <span class="doc-code">false</span> or <span class="doc-code">null</span>
    to disable and use <span class="doc-code">addEventListener</span> instead.
  </p>
</div>

<h2 id="methods" class="doc-h2">Methods</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getGain()</span>
    <span class="doc-badge doc-badge-object ml-2">UVSensorGain</span>
  </p>
  <p class="doc-p">Returns the current sensor gain enum value.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getMode()</span>
    <span class="doc-badge doc-badge-object ml-2">UVSensorMode</span>
  </p>
  <p class="doc-p">
    Returns the current measurement mode: <span class="doc-code">UV_SENSOR_MODE_ALS</span>
    (ambient light) or <span class="doc-code">UV_SENSOR_MODE_UVS</span> (UV index).
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getResolution()</span>
    <span class="doc-badge doc-badge-object ml-2">UVSensorResolution</span>
  </p>
  <p class="doc-p">Returns the current ADC resolution enum value.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getValue()</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
  </p>
  <p class="doc-p">
    Returns the last reading — an ALS lux count or UVS count depending on the current mode.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">setGain(value)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;boolean&gt;</span>
  </p>
  <p class="doc-p">Sets the sensor gain. Available constants:</p>
  <table class="w-full text-sm text-left text-gray-300">
    <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
      <tr><th class="py-2 pl-3 pr-4">Constant</th><th class="py-2 pl-3">Gain</th></tr>
    </thead>
    <tbody>
      {#each [["UV_SENSOR_GAIN_1","×1"],["UV_SENSOR_GAIN_3","×3 (default)"],["UV_SENSOR_GAIN_6","×6"],["UV_SENSOR_GAIN_9","×9"],["UV_SENSOR_GAIN_18","×18"]] as [name, gain]}
        <tr class="border-b border-gray-800 last:border-0">
          <td class="py-2 pl-3 pr-4 doc-code">{name}</td>
          <td class="py-2 pl-3">{gain}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">setMode(value)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;boolean&gt;</span>
  </p>
  <p class="doc-p">
    Sets the measurement mode. The sensor can only operate in one mode at a time; switching
    modes takes effect on the next reading.
  </p>
  <table class="w-full text-sm text-left text-gray-300">
    <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
      <tr><th class="py-2 pl-3 pr-4">Constant</th><th class="py-2 pl-3">Mode</th></tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">UV_SENSOR_MODE_ALS</td>
        <td class="py-2 pl-3">Ambient light sensor (default)</td>
      </tr>
      <tr>
        <td class="py-2 pl-3 pr-4 doc-code">UV_SENSOR_MODE_UVS</td>
        <td class="py-2 pl-3">UV index sensor</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">setResolution(value)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;boolean&gt;</span>
  </p>
  <p class="doc-p">Sets the ADC resolution. Higher resolution increases integration time. Available constants:</p>
  <table class="w-full text-sm text-left text-gray-300">
    <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
      <tr><th class="py-2 pl-3 pr-4">Constant</th><th class="py-2 pl-3">Resolution</th></tr>
    </thead>
    <tbody>
      {#each [["UV_SENSOR_RESOLUTION_20_BIT","20-bit"],["UV_SENSOR_RESOLUTION_19_BIT","19-bit"],["UV_SENSOR_RESOLUTION_18_BIT","18-bit (default)"],["UV_SENSOR_RESOLUTION_17_BIT","17-bit"],["UV_SENSOR_RESOLUTION_16_BIT","16-bit"],["UV_SENSOR_RESOLUTION_13_BIT","13-bit"]] as [name, res]}
        <tr class="border-b border-gray-800 last:border-0">
          <td class="py-2 pl-3 pr-4 doc-code">{name}</td>
          <td class="py-2 pl-3">{res}</td>
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
    <span class="doc-code">uvChanged(event)</span>
    <span class="doc-badge doc-badge-event ml-2">changed</span>
  </p>
  <p class="doc-p">
    Fires when a new reading is available. The <span class="doc-code">value</span> field reflects
    the current mode (ALS or UVS).
  </p>
</div>

<h2 id="event-argument" class="doc-h2">Event Argument</h2>

<p class="doc-p">
  All event callbacks receive a single <span class="doc-code">event</span> argument.
  The event detail is available at <span class="doc-code">event.detail</span> and contains:
</p>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.value</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    — The latest sensor reading. Interpretation depends on the current mode: ALS count (lux)
    or UVS count (UV index).
  </p>
</div>
