<script lang="ts">
  import type { RotaryEncoderDevice } from "stemma-web";
  import NeoPixelControls from "./NeoPixelControls.svelte";

  let { device }: { device: RotaryEncoderDevice } = $props();

  let value = $state(0);
  let pressed = $state(false);

  $effect(() => {
    value = device.getValue();
    pressed = device.isPressed();

    function onChanged(e: Event) {
      const detail = (e as CustomEvent<{ value: number; isPressed: boolean }>)
        .detail;
      value = detail.value;
      pressed = detail.isPressed;
    }

    function onPressed(e: Event) {
      pressed = (e as CustomEvent<{ isPressed: boolean }>).detail.isPressed;
    }

    function onReleased(e: Event) {
      pressed = (e as CustomEvent<{ isPressed: boolean }>).detail.isPressed;
    }

    device.addEventListener("changed", onChanged);
    device.addEventListener("pressed", onPressed);
    device.addEventListener("released", onReleased);

    return () => {
      device.removeEventListener("changed", onChanged);
      device.removeEventListener("pressed", onPressed);
      device.removeEventListener("released", onReleased);
    };
  });
</script>

<div class="space-y-4">
  <div class="flex items-center gap-6">
    <div class="flex flex-col items-center gap-1">
      <span class="text-xs text-gray-500">Value</span>
      <span class="font-mono text-2xl font-bold text-gray-100">{value}</span>
    </div>

    <div class="flex flex-col items-center gap-1">
      <span class="text-xs text-gray-500">Button</span>
      <div
        class="h-8 w-8 rounded-full border-2 transition-all duration-150 {pressed
          ? 'border-indigo-400 bg-indigo-500 shadow-[0_0_10px_theme(colors.indigo.500)]'
          : 'border-gray-600 bg-gray-800'}"
      ></div>
    </div>
  </div>

  <div class="border-t border-gray-800 pt-4">
    <p class="mb-3 text-xs text-gray-500">LED</p>
    <NeoPixelControls {device} />
  </div>
</div>
