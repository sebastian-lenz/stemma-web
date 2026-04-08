<!--
RFIDReader
Firmware source: ./firmware/src/devices/RFIDReaderDevice.h
Library source: ./library/src/devices/RFIDReader.ts
Shop: https://soldered.com/products/125khz-rfid-board?attribute_pa_variant=i2c-eng
Reference: https://oldshop.soldered.com/documentation/rfid/overview/
-->
<script lang="ts">
  import BaseDeviceMethods from "$lib/components/docs/BaseDeviceMethods.svelte";
  import BaseDeviceProperties from "$lib/components/docs/BaseDeviceProperties.svelte";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">RFID Reader</h1>

<nav class="mb-8 flex flex-wrap gap-2">
  <a href="#connection" class="doc-toc-link">Connection</a>
  <a href="#methods" class="doc-toc-link">Methods</a>
  <a href="#properties" class="doc-toc-link">Properties</a>
  <a href="#events" class="doc-toc-link">Events</a>
  <a href="#event-argument" class="doc-toc-link">Event Argument</a>
</nav>

<p class="doc-p">
  The <a
    class="doc-link"
    href="https://soldered.com/products/125khz-rfid-board?attribute_pa_variant=i2c-eng"
    >Soldered 125 kHz RFID Reader</a
  >
  reads passive 125 kHz RFID cards and key fobs over I²C. It detects tag presence
  and reports the tag ID. Up to eight readers can be connected simultaneously via
  address selection. See the
  <a
    class="doc-link"
    href="https://oldshop.soldered.com/documentation/rfid/overview/"
    >Soldered documentation</a
  >
  for wiring and hardware details.
</p>

<h2 id="connection" class="doc-h2">Connection</h2>

<p class="doc-p">
  Call <span class="doc-code">startRFIDReader()</span> inside
  <span class="doc-code">preload()</span>. The device is ready to use by the
  time <span class="doc-code">setup()</span> runs.
</p>

<CodeBlock
  code={`let reader;

function preload() {
  reader = startRFIDReader(name?, addressOrIndex?);
}`}
/>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">name</span>
    <span class="doc-badge doc-badge-type ml-2">string | false | null</span>
    <span class="doc-badge doc-badge-string ml-2">"rfid"</span>
  </p>
  <p class="doc-p">
    Controls automatic event callback registration. With the default name:
  </p>
  <CodeBlock
    nested
    code={`function rfidChanged(event) { /* tag detected or removed */ }`}
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
    <span class="doc-badge doc-badge-number ml-2">0x30</span>
  </p>
  <p class="doc-p">
    The I2C address of the device, or an index (0–7) into the address list.
    Eight addresses are available, selectable via solder jumpers on the board:
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
      {#each [["0x30", "0", "0", "0", "0"], ["0x31", "1", "1", "0", "0"], ["0x32", "2", "0", "1", "0"], ["0x33", "3", "1", "1", "0"], ["0x34", "4", "0", "0", "1"], ["0x35", "5", "1", "0", "1"], ["0x36", "6", "0", "1", "1"], ["0x37", "7", "1", "1", "1"]] as [addr, idx, a0, a1, a2]}
        <tr class="border-b border-gray-800 last:border-0">
          <td class="py-2 pl-3 pr-4 doc-code">{addr}</td>
          <td class="py-2 pl-3 pr-4">{idx}</td>
          <td class="py-2 pl-3 pr-4">{a0}</td>
          <td class="py-2 pl-3 pr-4">{a1}</td>
          <td class="py-2 pl-3">{a2}</td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<h2 id="methods" class="doc-h2">Methods</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getTagID()</span>
    <span class="doc-badge doc-badge-type ml-2">string | null</span>
  </p>
  <p class="doc-p">
    Returns the ID of the currently detected tag as a hex string, or
    <span class="doc-code">null</span> when no tag is present.
  </p>
</div>

<BaseDeviceMethods />

<h2 id="properties" class="doc-h2">Properties</h2>

<BaseDeviceProperties />

<h2 id="events" class="doc-h2">Events</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">rfidChanged(event)</span>
    <span class="doc-badge doc-badge-event ml-2">changed</span>
  </p>
  <p class="doc-p">
    Fires when a tag is detected or removed. Check
    <span class="doc-code">event.detail.tagId</span> — an empty string indicates
    the tag was removed.
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
    <span class="doc-code">event.detail.tagId</span>
    <span class="doc-badge doc-badge-string ml-2">string</span>
    — Hex string ID of the detected tag. Empty string when the tag is removed.
  </p>
</div>
