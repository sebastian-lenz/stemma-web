<script>
  import { devices } from "$lib/constants/devices";
  import { resolve } from "$app/paths";
  import Icon from "$lib/components/Icon.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">Device Setup</h1>

<p class="mb-8 text-gray-300 leading-relaxed">
  StemmaWeb bridges the physical and digital: it connects
  <a
    href="https://learn.adafruit.com/introducing-adafruit-stemma-qt"
    target="_blank"
    class="doc-link">Adafruit StemmaQT</a
  >
  sensors and modules to your browser, where they become live inputs for
  <a href="https://p5js.org" target="_blank" class="doc-link">p5.js</a>
  sketches. An <strong class="text-white">Adafruit Trinkey RP2040 QT</strong> acts
  as the USB bridge — it speaks I²C to your sensors and WebUSB to your browser, no
  drivers required.
</p>

<!-- Hardware Requirements -->
<section class="mb-10">
  <h2 class="doc-h2">Hardware Requirements</h2>

  <div class="doc-card mb-4">
    <div class="mb-1 flex items-center gap-2">
      <span class="text-base font-medium text-white"
        >Adafruit Trinkey RP2040 QT</span
      >
      <span class="doc-badge bg-indigo-900/60 text-indigo-300">Required</span>
    </div>
    <p class="doc-p mb-2">
      A tiny USB stick with a built-in StemmaQT port. It plugs directly into
      your computer's USB-A port and acts as the firmware host.
    </p>
    <a
      href="https://www.adafruit.com/product/5056"
      target="_blank"
      class="doc-link text-sm"
    >
      adafruit.com/product/5056 →
    </a>
  </div>

  <div class="doc-card">
    <div class="mb-1 flex items-center gap-2">
      <span class="text-base font-medium text-white">StemmaQT Modules</span>
      <span class="doc-badge bg-gray-700 text-gray-300">Optional</span>
    </div>
    <p class="doc-p mb-3">
      Attach one or more sensors via the StemmaQT (JST-SH 4-pin) connector.
      Modules can be daisy-chained. The following devices are currently
      supported:
    </p>
    <ul
      class="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-300 sm:grid-cols-3"
    >
      {#each devices as device}
        <li class="flex items-center gap-1.5">
          <span class="text-gray-600">—</span>
          {device.name}
        </li>
      {/each}
    </ul>
  </div>
</section>

<!-- Firmware Installation -->
<section class="mb-10">
  <h2 class="doc-h2">Installing the Firmware</h2>
  <p class="doc-p mb-5">
    The Trinkey runs a custom firmware that handles the USB–I²C bridge.
    Installing it is a simple drag-and-drop — no software or toolchain needed.
  </p>

  <ol class="space-y-5">
    <li class="flex gap-4">
      <span class="doc-step">1</span>
      <div>
        <p class="mb-1 font-medium text-white">
          Put the Trinkey into bootloader mode
        </p>
        <p class="doc-p">
          While holding the <kbd class="doc-kbd">BOOT</kbd> button, press and
          release the <kbd class="doc-kbd">RESET</kbd> button (the small button
          on the side), then release <kbd class="doc-kbd">BOOT</kbd>. A drive
          called
          <strong class="text-gray-200">RPI-RP2</strong> will appear on your computer.
        </p>
        <p class="mt-2 text-sm text-gray-500">
          If the drive doesn't appear, try unplugging the Trinkey, then plugging
          it back in while holding <kbd class="doc-kbd">BOOT</kbd>.
        </p>
      </div>
    </li>

    <li class="flex gap-4">
      <span class="doc-step">2</span>
      <div>
        <p class="mb-1 font-medium text-white">Download the firmware</p>
        <p class="doc-p mb-3">
          Download the prebuilt firmware file and copy it onto the
          <strong class="text-gray-200">RPI-RP2</strong> drive.
        </p>
        <a
          href={resolve("/download/firmware.uf2")}
          download
          class="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
        >
          <Icon id="icon-download" />
          Download firmware.uf2
        </a>
      </div>
    </li>

    <li class="flex gap-4">
      <span class="doc-step">3</span>
      <div>
        <p class="mb-1 font-medium text-white">Copy the file to the drive</p>
        <p class="doc-p">
          Drag <code class="doc-code">firmware.uf2</code> onto the
          <strong class="text-gray-200">RPI-RP2</strong> drive. The Trinkey will
          reboot automatically and the drive will disappear — the firmware is now
          running.
        </p>
      </div>
    </li>
  </ol>
</section>

<!-- Build from Source -->
<section class="mb-2">
  <h2 class="doc-h2">Build from Source</h2>
  <p class="doc-p mb-4">
    If you want to modify the firmware or build the latest version yourself, you
    need
    <a href="https://platformio.org" target="_blank" class="doc-link"
      >PlatformIO</a
    >
    and a copy of the repository.
  </p>

  <div class="doc-codeblock">
    <pre><span class="text-gray-500"># Clone the repository</span>
git clone git@github.com:sebastian-lenz/stemma-web.git
cd stemma-web/firmware

<span class="text-gray-500"># Compile</span>
pio run

<span class="text-gray-500"
        ># Compile and flash (Trinkey must already be in bootloader mode)</span
      >
pio run --target upload</pre>
  </div>

  <p class="mt-3 text-sm text-gray-500">
    The compiled <code class="doc-code">.uf2</code> file will be in
    <code class="doc-code">.pio/build/adafruit_trinkey_qt2040/firmware.uf2</code
    >
    and can be copied manually as described above.
  </p>
</section>
