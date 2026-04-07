<!--
Trinkey QT2040
Firmware source: ./firmware/src/devices/TrinkeyDevice.h
Library source: ./library/src/devices/Trinkey.ts
Shop: https://www.adafruit.com/product/5056
Reference: https://learn.adafruit.com/adafruit-trinkey-qt2040
-->
<script lang="ts">
  import BaseDeviceMethods from "$lib/components/docs/BaseDeviceMethods.svelte";
  import BaseDeviceProperties from "$lib/components/docs/BaseDeviceProperties.svelte";
  import BaseNeoPixelDeviceMethods from "$lib/components/docs/BaseNeoPixelDeviceMethods.svelte";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">Trinkey QT2040</h1>

<nav class="mb-8 flex flex-wrap gap-2">
  <a href="#connection" class="doc-toc-link">Connection</a>
  <a href="#methods" class="doc-toc-link">Methods</a>
  <a href="#properties" class="doc-toc-link">Properties</a>
</nav>

<p class="doc-p">
  The <a class="doc-link" href="https://www.adafruit.com/product/5056">Adafruit Trinkey QT2040</a>
  is the USB adapter that bridges StemmaQT devices to the browser. It is a RP2040-based USB stick
  with one onboard NeoPixel and a StemmaQT port for connecting I2C devices. See the
  <a class="doc-link" href="https://learn.adafruit.com/adafruit-trinkey-qt2040">Adafruit learn guide</a>
  for hardware details.
</p>

<h2 id="connection" class="doc-h2">Connection</h2>

<p class="doc-p">
  Call <span class="doc-code">startTrinkey()</span> inside
  <span class="doc-code">preload()</span>. The Trinkey takes no arguments —
  there is only ever one connected at a time and it emits no events.
</p>

<CodeBlock code={`let trinkey;

function preload() {
  trinkey = startTrinkey();
}`} />

<h2 id="methods" class="doc-h2">Methods</h2>

<BaseNeoPixelDeviceMethods />
<BaseDeviceMethods />

<h2 id="properties" class="doc-h2">Properties</h2>

<BaseDeviceProperties />
