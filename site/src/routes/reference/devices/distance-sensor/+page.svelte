<!--
DistanceSensor
Firmware source: ./firmware/src/devices/DistanceSensorDevice.h
Library source: ./library/src/devices/DistanceSensor.ts
Shop: https://www.adafruit.com/product/3317
Reference: https://learn.adafruit.com/adafruit-vl53l0x-micro-lidar-distance-sensor-breakout
-->
<script lang="ts">
  import BaseDeviceMethods from "$lib/components/docs/BaseDeviceMethods.svelte";
  import BaseDeviceProperties from "$lib/components/docs/BaseDeviceProperties.svelte";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">Distance Sensor</h1>

<nav class="mb-8 flex flex-wrap gap-2">
  <a href="#connection" class="doc-toc-link">Connection</a>
  <a href="#methods" class="doc-toc-link">Methods</a>
  <a href="#properties" class="doc-toc-link">Properties</a>
  <a href="#events" class="doc-toc-link">Events</a>
  <a href="#event-argument" class="doc-toc-link">Event Argument</a>
</nav>

<p class="doc-p">
  The <a class="doc-link" href="https://www.adafruit.com/product/3317">Adafruit VL53L0X</a>
  is a time-of-flight laser ranging sensor capable of measuring distances up to 2 m. It has a
  fixed I2C address. See the
  <a class="doc-link" href="https://learn.adafruit.com/adafruit-vl53l0x-micro-lidar-distance-sensor-breakout">Adafruit learn guide</a>
  for wiring and hardware details.
</p>

<h2 id="connection" class="doc-h2">Connection</h2>

<p class="doc-p">
  Call <span class="doc-code">startDistanceSensor()</span> inside
  <span class="doc-code">preload()</span>. The device is ready to use by the
  time <span class="doc-code">setup()</span> runs.
</p>

<CodeBlock
  code={`let sensor;

function preload() {
  sensor = startDistanceSensor(name?);
}`}
/>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">name</span>
    <span class="doc-badge doc-badge-type ml-2">string | false | null</span>
    <span class="doc-badge doc-badge-string ml-2">"distance"</span>
  </p>
  <p class="doc-p">
    Controls automatic event callback registration. With the default name:
  </p>
  <CodeBlock nested code={`function distanceChanged(event) { /* new reading */ }`} />
  <p class="doc-p mb-0">
    Pass <span class="doc-code">false</span> or <span class="doc-code">null</span>
    to disable and use <span class="doc-code">addEventListener</span> instead.
  </p>
</div>

<h2 id="methods" class="doc-h2">Methods</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getDistance()</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
  </p>
  <p class="doc-p">
    Returns the last measured distance in mm. Returns <span class="doc-code">8190</span> when the
    target is out of range.
  </p>
</div>

<BaseDeviceMethods />

<h2 id="properties" class="doc-h2">Properties</h2>

<BaseDeviceProperties />

<h2 id="events" class="doc-h2">Events</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">distanceChanged(event)</span>
    <span class="doc-badge doc-badge-event ml-2">changed</span>
  </p>
  <p class="doc-p">Fires on every sensor poll with an updated distance reading.</p>
</div>

<h2 id="event-argument" class="doc-h2">Event Argument</h2>

<p class="doc-p">
  All event callbacks receive a single <span class="doc-code">event</span> argument.
  The event detail is available at <span class="doc-code">event.detail</span> and contains:
</p>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.distance</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    — Distance in mm. <span class="doc-code">8190</span> means out of range.
  </p>
</div>
