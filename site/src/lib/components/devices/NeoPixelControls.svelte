<script lang="ts">
  import type {
    TrinkeyDevice,
    NeoDriverDevice,
    RotaryEncoderDevice,
    LinearEncoderDevice,
  } from "stemma-web";

  type NeoPixelDevice =
    | TrinkeyDevice
    | NeoDriverDevice
    | RotaryEncoderDevice
    | LinearEncoderDevice;

  let { device }: { device: NeoPixelDevice } = $props();

  let brightness = $state(0);
  let colors = $state<string[]>([]);

  $effect(() => {
    brightness = device.getBrightness();
    colors = Array.from({ length: device.getLength() }, (_, i) => {
      const c = device.getPixelColor(i);
      return rgbToHex(c.red, c.green, c.blue);
    });
  });

  function rgbToHex(r: number, g: number, b: number): string {
    return "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
  }

  async function onBrightnessChange(e: Event) {
    brightness = +(e.target as HTMLInputElement).value;
    await device.setBrightness(brightness);
  }

  async function onColorChange(index: number, e: Event) {
    const hex = (e.target as HTMLInputElement).value;
    colors[index] = hex;
    await device.setPixelColor(index, hex);
  }
</script>

<div class="space-y-3">
  <div class="flex items-center gap-3">
    <span class="w-20 shrink-0 text-xs text-gray-400">Brightness</span>
    <input
      type="range"
      min="0"
      max="255"
      value={brightness}
      onchange={onBrightnessChange}
      class="flex-1 accent-indigo-500"
    />
    <span class="w-8 text-right font-mono text-xs text-gray-400"
      >{brightness}</span
    >
  </div>

  <div class="flex items-center gap-3">
    <span class="w-20 shrink-0 text-xs text-gray-400">
      {colors.length === 1 ? "Pixel" : "Pixels"}
    </span>
    <div class="flex flex-wrap gap-2">
      {#each colors as color, i}
        <div class="flex flex-col items-center gap-1">
          <label>
            <div
              class="h-7 w-7 cursor-pointer rounded-full border-2 border-gray-700 transition-shadow"
              style="background: {color}; box-shadow: {color !== '#000000'
                ? `0 0 8px ${color}80`
                : 'none'}"
            ></div>
            <input
              type="color"
              value={color}
              onchange={(e) => onColorChange(i, e)}
              class="sr-only"
            />
          </label>
          {#if colors.length > 1}
            <span class="text-[10px] text-gray-600">{i}</span>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>
