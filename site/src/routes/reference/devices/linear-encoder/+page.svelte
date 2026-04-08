<!--
Linear Encoder
Firmware source: ./firmware/src/devices/LinearEncoderDevice.h
Library source: ./library/src/devices/LinearEncoder.ts
Shop: https://www.adafruit.com/product/5295
Reference: https://learn.adafruit.com/adafruit-neoslider
-->
<script lang="ts">
  import BaseDeviceMethods from "$lib/components/docs/BaseDeviceMethods.svelte";
  import BaseDeviceProperties from "$lib/components/docs/BaseDeviceProperties.svelte";
  import BaseNeoPixelDeviceMethods from "$lib/components/docs/BaseNeoPixelDeviceMethods.svelte";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">Linear Encoder</h1>

<nav class="mb-8 flex flex-wrap gap-2">
  <a href="#connection" class="doc-toc-link">Connection</a>
  <a href="#methods" class="doc-toc-link">Methods</a>
  <a href="#properties" class="doc-toc-link">Properties</a>
  <a href="#events" class="doc-toc-link">Events</a>
  <a href="#event-argument" class="doc-toc-link">Event Argument</a>
</nav>

<p class="doc-p">
  The <a class="doc-link" href="https://www.adafruit.com/product/5295"
    >Adafruit NeoSlider</a
  >
  is a slide potentiometer with four NeoPixels along its track, controlled over I2C
  via the seesaw chip. The slider reports an absolute position value and can be lit
  independently of the position. See the
  <a class="doc-link" href="https://learn.adafruit.com/adafruit-neoslider"
    >Adafruit learn guide</a
  >
  for wiring and hardware details.
</p>

<h2 id="connection" class="doc-h2">Connection</h2>

<p class="doc-p">
  Call <span class="doc-code">startLinearEncoder()</span> inside
  <span class="doc-code">preload()</span>. The device is ready to use by the
  time <span class="doc-code">setup()</span> runs.
</p>

<CodeBlock
  code={`let slider;

function preload() {
  slider = startLinearEncoder(name?, addressOrIndex?);
}`}
/>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">name</span>
    <span class="doc-badge doc-badge-type ml-2">string | false | null</span>
    <span class="doc-badge doc-badge-string ml-2">"linearEncoder"</span>
  </p>
  <p class="doc-p">
    Controls automatic event callback registration. Any function on the sketch
    named <span class="doc-code">name + EventName</span> (event name capitalised)
    is called whenever that event fires. With the default name:
  </p>
  <CodeBlock
    nested
    code={`function linearEncoderChanged(event) { /* slider moved */ }`}
  />
  <p class="doc-p mb-0">
    Pass <span class="doc-code">false</span> or
    <span class="doc-code">null</span>
    to disable automatic registration and use
    <span class="doc-code">addEventListener</span> instead.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">addressOrIndex</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    <span class="doc-badge doc-badge-number ml-2">0x30</span>
  </p>
  <p class="doc-p">
    The I2C address of the device, or an index (0–15) into the address list.
    Sixteen addresses are available, set by the A0, A1, A2, and A3 solder
    jumpers on the back of the board:
  </p>
  <table class="w-full text-sm text-left text-gray-300">
    <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
      <tr>
        <th class="py-2 pl-3 pr-4">Address</th>
        <th class="py-2 pl-3 pr-4">Index</th>
        <th class="py-2 pl-3 pr-4">A0</th>
        <th class="py-2 pl-3 pr-4">A1</th>
        <th class="py-2 pl-3 pr-4">A2</th>
        <th class="py-2 pl-3">A3</th>
      </tr>
    </thead>
    <tbody>
      {#each [[0x30, 0, "open", "open", "open", "open"], [0x31, 1, "closed", "open", "open", "open"], [0x32, 2, "open", "closed", "open", "open"], [0x33, 3, "closed", "closed", "open", "open"], [0x34, 4, "open", "open", "closed", "open"], [0x35, 5, "closed", "open", "closed", "open"], [0x36, 6, "open", "closed", "closed", "open"], [0x37, 7, "closed", "closed", "closed", "open"], [0x38, 8, "open", "open", "open", "closed"], [0x39, 9, "closed", "open", "open", "closed"], [0x3a, 10, "open", "closed", "open", "closed"], [0x3b, 11, "closed", "closed", "open", "closed"], [0x3c, 12, "open", "open", "closed", "closed"], [0x3d, 13, "closed", "open", "closed", "closed"], [0x3e, 14, "open", "closed", "closed", "closed"], [0x3f, 15, "closed", "closed", "closed", "closed"]] as [addr, idx, a0, a1, a2, a3], i}
        <tr class={i < 15 ? "border-b border-gray-800" : ""}>
          <td class="py-2 pl-3 pr-4 doc-code"
            >{"0x" + addr.toString(16).toUpperCase()}</td
          >
          <td class="py-2 pl-3 pr-4">{idx}</td>
          <td class="py-2 pl-3 pr-4">{a0}</td>
          <td class="py-2 pl-3 pr-4">{a1}</td>
          <td class="py-2 pl-3 pr-4">{a2}</td>
          <td class="py-2 pl-3">{a3}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<h2 id="methods" class="doc-h2">Methods</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getValue()</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
  </p>
  <p class="doc-p">
    Returns the current slider position as an integer from
    <span class="doc-code">0</span> (one end) to
    <span class="doc-code">1023</span> (the other end).
  </p>
</div>

<BaseNeoPixelDeviceMethods />
<BaseDeviceMethods />

<h2 id="properties" class="doc-h2">Properties</h2>

<BaseDeviceProperties />

<h2 id="events" class="doc-h2">Events</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">changed(event)</span>
    <span class="doc-badge doc-badge-event ml-2">changed</span>
  </p>
  <p class="doc-p">Fires whenever the slider position changes.</p>
</div>

<h2 id="event-argument" class="doc-h2">Event Argument</h2>

<p class="doc-p">
  All event callbacks receive a single <span class="doc-code">event</span>
  argument. The event detail is available at
  <span class="doc-code">event.detail</span> and contains:
</p>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.value</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    — The current slider position (0–1023) at the time of the event.
  </p>
</div>
