<script lang="ts">
  import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">First Steps</h1>

<p class="doc-p">
  The sketch below connects to a Trinkey and cycles the onboard NeoPixel through
  a rainbow using HSB color mode. Click <strong class="text-gray-300"
    >Run</strong
  > to execute it in your browser — your browser will ask for USB permission the
  first time.
</p>

<CodePreview example="/examples/rotary-test.js" />

<CodePreview example="/examples/first-steps.js" />

<h2 class="doc-h2">How it works</h2>

<p class="doc-p">
  <span class="doc-code">let trinkey</span> declares a global variable that will
  hold a reference to the connected device. Keeping it in the global scope lets
  all p5.js lifecycle functions — <span class="doc-code">setup</span>,
  <span class="doc-code">draw</span>, and so on — access the device later.
</p>

<p class="doc-p">
  <span class="doc-code">preload()</span> is a special p5.js function that runs
  before anything else. Calling <span class="doc-code">startTrinkey()</span>
  inside it initiates the USB connection and waits until the device is ready. p5.js
  will not call <span class="doc-code">setup()</span> until
  <span class="doc-code">preload()</span> has finished, so the rest of your sketch
  is guaranteed to have a working device from the very first frame.
</p>

<p class="doc-p">
  The Trinkey is the USB adapter itself. It has one onboard NeoPixel whose color
  you can set with <span class="doc-code">trinkey.setPixelColor()</span>. Other
  devices — rotary encoders, touch sensors, and so on — expose different
  methods. Check the <strong class="text-gray-300">Device Reference</strong> for
  the API of each supported device.
</p>

<p class="doc-p">
  Everything inside <span class="doc-code">setup()</span> is standard p5.js:
  create a canvas and switch to HSB color mode so hue values from 0–360 map
  directly to the rainbow. The <span class="doc-code">draw()</span> loop then advances
  the hue each frame and applies the same color to both the canvas background and
  the Trinkey's pixel.
</p>
