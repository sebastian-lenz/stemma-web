<!--
NeoDriver
Firmware source: ./firmware/src/devices/NeoDriverDevice.h
Library source: ./library/src/devices/NeoDriver.ts
Shop: https://www.adafruit.com/product/5766
Reference: https://learn.adafruit.com/adafruit-neodriver-i2c-to-neopixel-driver
-->
<script lang="ts">
  import BaseDeviceMethods from "$lib/components/docs/BaseDeviceMethods.svelte";
  import BaseDeviceProperties from "$lib/components/docs/BaseDeviceProperties.svelte";
  import BaseNeoPixelDeviceMethods from "$lib/components/docs/BaseNeoPixelDeviceMethods.svelte";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">NeoDriver</h1>

<nav class="mb-8 flex flex-wrap gap-2">
  <a href="#connection" class="doc-toc-link">Connection</a>
  <a href="#methods" class="doc-toc-link">Methods</a>
  <a href="#properties" class="doc-toc-link">Properties</a>
</nav>

<p class="doc-p">
  The <a class="doc-link" href="https://www.adafruit.com/product/5766">Adafruit NeoDriver</a>
  is an I2C-to-NeoPixel driver board based on the seesaw chip. It can control a strip of
  up to 60 NeoPixels over a single StemmaQT cable, removing the need for precise timing
  in the host sketch. See the
  <a class="doc-link" href="https://learn.adafruit.com/adafruit-neodriver-i2c-to-neopixel-driver">Adafruit learn guide</a>
  for wiring and hardware details.
</p>

<h2 id="connection" class="doc-h2">Connection</h2>

<p class="doc-p">
  Call <span class="doc-code">startNeoDriver()</span> inside
  <span class="doc-code">preload()</span>. The NeoDriver has no name parameter
  and emits no events.
</p>

<CodeBlock code={`let strip;

function preload() {
  strip = startNeoDriver(addressOrIndex?);
}`} />

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">addressOrIndex</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    <span class="doc-badge doc-badge-number ml-2">0x60</span>
  </p>
  <p class="doc-p">
    The I2C address of the device, or an index (0–7) into the address list. Eight
    addresses are available, set by the A0, A1, and A2 solder jumpers on the back
    of the board:
  </p>
  <table class="w-full text-sm text-left text-gray-300">
    <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
      <tr>
        <th class="py-2 pl-3 pr-4">Address</th>
        <th class="py-2 pl-3 pr-4">Index</th>
        <th class="py-2 pl-3 pr-4">A0</th>
        <th class="py-2 pl-3 pr-4">A1</th>
        <th class="py-2 pl-3">A2</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x60</td>
        <td class="py-2 pl-3 pr-4">0</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3">open</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x61</td>
        <td class="py-2 pl-3 pr-4">1</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3">open</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x62</td>
        <td class="py-2 pl-3 pr-4">2</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3">open</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x63</td>
        <td class="py-2 pl-3 pr-4">3</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3">open</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x64</td>
        <td class="py-2 pl-3 pr-4">4</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3">closed</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x65</td>
        <td class="py-2 pl-3 pr-4">5</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3">closed</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x66</td>
        <td class="py-2 pl-3 pr-4">6</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3">closed</td>
      </tr>
      <tr>
        <td class="py-2 pl-3 pr-4 doc-code">0x67</td>
        <td class="py-2 pl-3 pr-4">7</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3">closed</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="methods" class="doc-h2">Methods</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">setLength(value)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;void&gt;</span>
  </p>
  <p class="doc-p">
    Sets the number of NeoPixels in the connected strip. Must be called before
    setting any pixel colors. <span class="doc-code">value</span> is the pixel
    count (maximum 60).
  </p>
</div>

<BaseNeoPixelDeviceMethods />
<BaseDeviceMethods />

<h2 id="properties" class="doc-h2">Properties</h2>

<BaseDeviceProperties />
