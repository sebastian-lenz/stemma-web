<script lang="ts">
  import { resolve } from "$app/paths";
  import { devices } from "$lib/constants/devices";
  import CodeBlock from "$lib/components/CodeBlock.svelte";

  const flowSteps = [
    {
      label: "StemmaQT Module",
      sub: "Rotary encoder, touch sensor, gyroscope…",
      accent: true,
    },
    { label: "Trinkey RP2040", sub: "Reads I²C, speaks USB", accent: false },
    { label: "USB", sub: "Physical connection, no drivers", accent: false },
    {
      label: "WebUSB API",
      sub: "Browser talks directly to the Trinkey",
      accent: false,
    },
    {
      label: "p5.js Sketch",
      sub: "Your creative code gets live sensor data",
      accent: true,
    },
  ];

  const gettingStartedSteps = [
    {
      step: "1",
      title: "Buy the hardware",
      body: "Pick up an Adafruit Trinkey RP2040 QT and any supported StemmaQT module from the Adafruit shop.",
    },
    {
      step: "2",
      title: "Flash the firmware",
      body: "Download the prebuilt firmware and drag it onto the Trinkey — it reboots in seconds, no toolchain needed.",
    },
    {
      step: "3",
      title: "Load the library",
      body: "Add one script tag to your p5.js sketch. The StemmaWeb library registers the start functions automatically.",
    },
    {
      step: "4",
      title: "Write code",
      body: "Call startRotaryEncoder(), startTouchSensor(), or any other start function and your device is live.",
    },
  ];

  const useCases = [
    {
      symbol: "◎",
      title: "Learning",
      body: "Immediate feedback makes physical computing concepts click. Students see the effect of turning a knob in their sketch before writing a single event handler.",
    },
    {
      symbol: "◈",
      title: "Exhibitions",
      body: "Build interactive installations that run entirely in the browser. No app to install, no backend to maintain — just a USB cable and a URL.",
    },
    {
      symbol: "◇",
      title: "Rapid Prototyping",
      body: "Test hardware interaction ideas in minutes. Swap devices, tweak mappings, and iterate without touching firmware or wiring a custom PCB.",
    },
  ];

  const exampleCode = `let encoder;

function preload() {
  encoder = startRotaryEncoder();
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let angle = map(encoder.getValue(), 0, 100, 0, TWO_PI);
  background(20);
  translate(width / 2, height / 2);
  rotate(angle);
  fill(99, 102, 241);
  rect(-80, -8, 160, 16, 4);
}

function rotaryEncoderChanged(event) {
  console.log('Position:', event.detail.value);
}`;
</script>

<!-- Hero -->
<section
  class="relative overflow-hidden border-b border-gray-800 px-6 py-24 text-center"
>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(99,102,241,0.15),transparent)]"
  ></div>
  <div class="relative mx-auto max-w-3xl">
    <div
      class="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-800/50 bg-indigo-950/40 px-4 py-1.5 text-sm text-indigo-300"
    >
      Physical inputs · WebUSB · p5.js
    </div>
    <h1 class="mb-5 text-5xl font-extrabold tracking-tight text-white">
      Connect StemmaQT devices<br />to p5.js sketches in your browser
    </h1>
    <p class="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-gray-400">
      StemmaWeb bridges Adafruit StemmaQT sensors to the browser via WebUSB.
      Turn physical knobs, sliders, and touch pads into live inputs for creative
      code — no server, no drivers.
    </p>
    <div class="flex flex-wrap justify-center gap-3">
      <a
        href={resolve("/reference/getting-started/device-setup")}
        class="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
      >
        Get Started
      </a>
      <a
        href={resolve("/playground")}
        class="rounded-md border border-gray-700 bg-gray-800 px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700 hover:text-white"
      >
        Open Playground
      </a>
    </div>
  </div>
</section>

<!-- How it works -->
<section class="border-b border-gray-800 bg-gray-900/50 px-6 py-16">
  <div class="mx-auto max-w-5xl">
    <h2 class="mb-3 text-center text-2xl font-bold text-white">How it works</h2>
    <p class="mb-12 text-center text-gray-400">
      Five steps from hardware to browser — all over USB, no drivers or servers
      required.
    </p>
    <div
      class="flex flex-col items-stretch gap-2 sm:flex-row sm:items-stretch sm:gap-0"
    >
      {#each flowSteps as step, i}
        <div
          class="flex min-w-0 flex-1 rounded-lg border p-4 text-center {step.accent
            ? 'border-indigo-800/60 bg-indigo-950/30'
            : 'border-gray-700 bg-gray-800/50'}"
        >
          <div class="m-auto">
            <p class="font-semibold text-white">{step.label}</p>
            <p class="mt-1 text-xs text-gray-400">{step.sub}</p>
          </div>
        </div>
        {#if i < flowSteps.length - 1}
          <div
            class="flex shrink-0 items-center justify-center px-1 text-gray-600"
          >
            <svg
              class="h-5 w-5 rotate-90 sm:rotate-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<!-- Code snippet -->
<section class="border-b border-gray-800 px-6 py-16">
  <div class="mx-auto max-w-5xl">
    <div class="grid gap-10 lg:grid-cols-2 lg:items-center">
      <div>
        <h2 class="mb-4 text-2xl font-bold text-white">A few lines of code</h2>
        <p class="mb-4 leading-relaxed text-gray-400">
          Call <span class="doc-code">startRotaryEncoder()</span> inside p5.js's
          <span class="doc-code">preload()</span> and the device is ready by the
          time
          <span class="doc-code">setup()</span> runs. Read values in
          <span class="doc-code">draw()</span> or react to events with named callbacks.
        </p>
        <p class="leading-relaxed text-gray-400">
          Every device follows the same pattern — just swap the start function
          and method names.
        </p>
        <a
          href={resolve("/reference/getting-started/first-steps")}
          class="mt-6 inline-block text-sm text-indigo-400 underline hover:text-indigo-300"
        >
          Explore First Steps →
        </a>
      </div>
      <CodeBlock code={exampleCode} />
    </div>
  </div>
</section>

<!-- Getting Started -->
<section class="border-b border-gray-800 bg-gray-900/50 px-6 py-16">
  <div class="mx-auto max-w-5xl">
    <h2 class="mb-3 text-center text-2xl font-bold text-white">
      Get started in four steps
    </h2>
    <p class="mb-12 text-center text-gray-400">
      Everything you need, from hardware to running sketch.
    </p>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {#each gettingStartedSteps as item}
        <div class="doc-card flex flex-col gap-3">
          <span class="doc-step self-start">{item.step}</span>
          <p class="font-semibold text-white">{item.title}</p>
          <p class="text-sm leading-relaxed text-gray-400">{item.body}</p>
        </div>
      {/each}
    </div>
    <div class="mt-10 text-center">
      <a
        href={resolve("/reference/getting-started/device-setup")}
        class="text-sm text-indigo-400 underline hover:text-indigo-300"
      >
        Read the full setup guide →
      </a>
    </div>
  </div>
</section>

<!-- Supported Devices -->
<section class="border-b border-gray-800 px-6 py-16">
  <div class="mx-auto max-w-5xl">
    <h2 class="mb-3 text-center text-2xl font-bold text-white">
      Supported devices
    </h2>
    <p class="mb-12 text-center text-gray-400">
      All modules connect via the StemmaQT (JST-SH 4-pin) cable and can be
      daisy-chained.
    </p>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each devices as device}
        <a
          href={device.href}
          class="doc-card group block transition-colors hover:border-indigo-700/60 hover:bg-gray-800/80"
        >
          <div class="mb-2 flex items-start justify-between gap-2">
            <p class="font-semibold text-white">{device.name}</p>
            <span class="doc-badge doc-badge-type shrink-0">{device.addr}</span>
          </div>
          <p class="text-sm leading-relaxed text-gray-400">{device.desc}</p>
          <p class="mt-3 text-xs text-indigo-400 group-hover:text-indigo-300">
            Reference →
          </p>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Use Cases -->
<section class="border-b border-gray-800 bg-gray-900/50 px-6 py-16">
  <div class="mx-auto max-w-5xl">
    <h2 class="mb-3 text-center text-2xl font-bold text-white">
      Built for creative work
    </h2>
    <p class="mb-12 text-center text-gray-400">
      From classroom to gallery — StemmaWeb fits wherever creative code meets
      the physical world.
    </p>
    <div class="grid gap-6 sm:grid-cols-3">
      {#each useCases as item}
        <div class="doc-card">
          <p class="mb-3 text-2xl text-indigo-400">{item.symbol}</p>
          <p class="mb-2 font-semibold text-white">{item.title}</p>
          <p class="text-sm leading-relaxed text-gray-400">{item.body}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Open Source -->
<section class="px-6 py-20">
  <div class="mx-auto max-w-xl text-center">
    <h2 class="mb-4 text-2xl font-bold text-white">Free and open source</h2>
    <p class="mb-8 leading-relaxed text-gray-400">
      StemmaWeb is MIT-licensed. The firmware, client library, and this site are
      all on GitHub. Contributions, bug reports, and feature ideas are welcome.
    </p>
    <a
      href="https://github.com/sebastian-lenz/stemma-web"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 rounded-md border border-gray-700 bg-gray-800 px-5 py-2.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-700 hover:text-white"
    >
      View on GitHub
    </a>
  </div>
</section>
