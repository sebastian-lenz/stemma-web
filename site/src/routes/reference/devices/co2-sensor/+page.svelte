<!--
CO2Sensor
Firmware source: ./firmware/src/devices/CO2SensorDevice.h
Library source: ./library/src/devices/CO2Sensor.ts
Shop: https://www.adafruit.com/product/5187
Reference: https://learn.adafruit.com/adafruit-scd-40-and-scd-41
-->
<script lang="ts">
  import BaseDeviceMethods from "$lib/components/docs/BaseDeviceMethods.svelte";
  import BaseDeviceProperties from "$lib/components/docs/BaseDeviceProperties.svelte";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">CO2 Sensor</h1>

<nav class="mb-8 flex flex-wrap gap-2">
  <a href="#connection" class="doc-toc-link">Connection</a>
  <a href="#methods" class="doc-toc-link">Methods</a>
  <a href="#properties" class="doc-toc-link">Properties</a>
  <a href="#events" class="doc-toc-link">Events</a>
  <a href="#event-argument" class="doc-toc-link">Event Argument</a>
</nav>

<p class="doc-p">
  The <a class="doc-link" href="https://www.adafruit.com/product/5187">Adafruit SCD-40</a>
  is a photoacoustic CO₂ sensor that also measures relative humidity and temperature. It takes
  a new measurement approximately every 5 seconds. See the
  <a class="doc-link" href="https://learn.adafruit.com/adafruit-scd-40-and-scd-41">Adafruit learn guide</a>
  for wiring and hardware details.
</p>

<h2 id="connection" class="doc-h2">Connection</h2>

<p class="doc-p">
  Call <span class="doc-code">startCO2Sensor()</span> inside
  <span class="doc-code">preload()</span>. The device is ready to use by the
  time <span class="doc-code">setup()</span> runs.
</p>

<CodeBlock
  code={`let sensor;

function preload() {
  sensor = startCO2Sensor(name?, addressOrIndex?);
}`}
/>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">name</span>
    <span class="doc-badge doc-badge-type ml-2">string | false | null</span>
    <span class="doc-badge doc-badge-string ml-2">"co2"</span>
  </p>
  <p class="doc-p">
    Controls automatic event callback registration. With the default name:
  </p>
  <CodeBlock nested code={`function co2Changed(event) { /* new reading */ }`} />
  <p class="doc-p mb-0">
    Pass <span class="doc-code">false</span> or <span class="doc-code">null</span>
    to disable and use <span class="doc-code">addEventListener</span> instead.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">addressOrIndex</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    <span class="doc-badge doc-badge-number ml-2">0x62</span>
  </p>
  <p class="doc-p">
    The SCD-40/41 has a fixed I2C address of <span class="doc-code">0x62</span>.
    Only one sensor can be connected at a time.
  </p>
</div>

<h2 id="methods" class="doc-h2">Methods</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getCO2()</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
  </p>
  <p class="doc-p">Returns the last measured CO₂ concentration in ppm.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getHumidity()</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
  </p>
  <p class="doc-p">Returns the last measured relative humidity in %RH.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getTemperature()</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
  </p>
  <p class="doc-p">Returns the last measured temperature in °C.</p>
</div>

<BaseDeviceMethods />

<h2 id="properties" class="doc-h2">Properties</h2>

<BaseDeviceProperties />

<h2 id="events" class="doc-h2">Events</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">co2Changed(event)</span>
    <span class="doc-badge doc-badge-event ml-2">changed</span>
  </p>
  <p class="doc-p">
    Fires approximately every 5 seconds when a new CO₂, humidity, and temperature measurement
    is available.
  </p>
</div>

<h2 id="event-argument" class="doc-h2">Event Argument</h2>

<p class="doc-p">
  All event callbacks receive a single <span class="doc-code">event</span> argument.
  The event detail is available at <span class="doc-code">event.detail</span> and contains:
</p>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.co2</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    — CO₂ concentration in ppm.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.humidity</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    — Relative humidity in %RH.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.temperature</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    — Temperature in °C.
  </p>
</div>
