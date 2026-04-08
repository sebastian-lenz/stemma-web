<!--
Rotary Encoder
Firmware source: ./firmware/src/devices/RotaryEncoderDevice.h
Library source: ./library/src/devices/RotaryEncoder.ts
Shop: https://www.adafruit.com/product/5880
Reference: https://learn.adafruit.com/adafruit-i2c-qt-rotary-encoder
-->
<script lang="ts">
  import BaseDeviceMethods from "$lib/components/docs/BaseDeviceMethods.svelte";
  import BaseDeviceProperties from "$lib/components/docs/BaseDeviceProperties.svelte";
  import BaseNeoPixelDeviceMethods from "$lib/components/docs/BaseNeoPixelDeviceMethods.svelte";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">Rotary Encoder</h1>

<nav class="mb-8 flex flex-wrap gap-2">
  <a href="#connection" class="doc-toc-link">Connection</a>
  <a href="#methods" class="doc-toc-link">Methods</a>
  <a href="#properties" class="doc-toc-link">Properties</a>
  <a href="#events" class="doc-toc-link">Events</a>
  <a href="#event-argument" class="doc-toc-link">Event Argument</a>
</nav>

<p class="doc-p">
  The <a class="doc-link" href="https://www.adafruit.com/product/5880"
    >Adafruit I2C QT Rotary Encoder</a
  >
  is a quadrature rotary encoder with a built-in push button and one NeoPixel, all
  controlled over I2C via the seesaw chip. The encoder tracks an absolute integer
  position that increments or decrements as the knob is turned, and the button reports
  press and release events. See the
  <a
    class="doc-link"
    href="https://learn.adafruit.com/adafruit-i2c-qt-rotary-encoder"
    >Adafruit learn guide</a
  >
  for wiring and hardware details.
</p>

<h2 id="connection" class="doc-h2">Connection</h2>

<p class="doc-p">
  Call <span class="doc-code">startRotaryEncoder()</span> inside
  <span class="doc-code">preload()</span>. The device is ready to use by the
  time <span class="doc-code">setup()</span> runs.
</p>

<CodeBlock
  code={`let encoder;

function preload() {
  encoder = startRotaryEncoder(name?, addressOrIndex?);
}`}
/>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">name</span>
    <span class="doc-badge doc-badge-type ml-2">string | false | null</span>
    <span class="doc-badge doc-badge-string ml-2">"rotaryEncoder"</span>
  </p>
  <p class="doc-p">
    Controls automatic event callback registration. Any function on the sketch
    named <span class="doc-code">name + EventName</span> (event name capitalised)
    is called whenever that event fires. With the default name:
  </p>
  <CodeBlock
    nested
    code={`function rotaryEncoderChanged(event) { /* knob turned or button changed */ }
function rotaryEncoderPressed(event) { /* button pressed */ }
function rotaryEncoderReleased(event) { /* button released */ }`}
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
    <span class="doc-badge doc-badge-number ml-2">0x36</span>
  </p>
  <p class="doc-p">
    The I2C address of the device, or an index (0–7) into the address list.
    Eight addresses are available, set by the A0, A1, and A2 solder jumpers on
    the back of the board:
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
        <td class="py-2 pl-3 pr-4 doc-code">0x36</td>
        <td class="py-2 pl-3 pr-4">0</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3">open</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x37</td>
        <td class="py-2 pl-3 pr-4">1</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3">open</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x38</td>
        <td class="py-2 pl-3 pr-4">2</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3">open</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x39</td>
        <td class="py-2 pl-3 pr-4">3</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3">open</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x3A</td>
        <td class="py-2 pl-3 pr-4">4</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3">closed</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x3B</td>
        <td class="py-2 pl-3 pr-4">5</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3">closed</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x3C</td>
        <td class="py-2 pl-3 pr-4">6</td>
        <td class="py-2 pl-3 pr-4">open</td>
        <td class="py-2 pl-3 pr-4">closed</td>
        <td class="py-2 pl-3">closed</td>
      </tr>
      <tr>
        <td class="py-2 pl-3 pr-4 doc-code">0x3D</td>
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
    <span class="doc-code">getValue()</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
  </p>
  <p class="doc-p">
    Returns the current encoder position as a signed integer. The value starts
    at <span class="doc-code">0</span> and increments or decrements by one for each
    detent as the knob is turned. There is no minimum or maximum — the value accumulates
    indefinitely in either direction.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">isPressed()</span>
    <span class="doc-badge doc-badge-boolean ml-2">boolean</span>
  </p>
  <p class="doc-p">
    Returns <span class="doc-code">true</span> if the encoder button is currently
    held down.
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
  <p class="doc-p">
    Fires whenever the knob is turned. Also fires if the button state changes at
    the same time as a rotation (both updates arrive in one firmware poll).
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">pressed(event)</span>
    <span class="doc-badge doc-badge-event ml-2">pressed</span>
  </p>
  <p class="doc-p">Fires when the encoder button is pressed down.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">released(event)</span>
    <span class="doc-badge doc-badge-event ml-2">released</span>
  </p>
  <p class="doc-p">Fires when the encoder button is released.</p>
</div>

<h2 id="event-argument" class="doc-h2">Event Argument</h2>

<p class="doc-p">
  All event callbacks receive a single <span class="doc-code">event</span>
  argument. The event detail is available at
  <span class="doc-code">event.detail</span> and contains:
</p>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.isPressed</span>
    <span class="doc-badge doc-badge-boolean ml-2">boolean</span>
    — Whether the button is held down at the time of the event.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.value</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    — The current encoder position at the time of the event.
  </p>
</div>
