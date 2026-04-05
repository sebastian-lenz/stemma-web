<script lang="ts">
  import type { LinearEncoderDevice } from "stemma-web";
  import NeoPixelControls from "./NeoPixelControls.svelte";

  let { device }: { device: LinearEncoderDevice } = $props();

  let value = $state(0);

  $effect(() => {
    value = device.getValue();

    function onChanged(e: Event) {
      value = (e as CustomEvent<{ value: number }>).detail.value;
    }

    device.addEventListener("changed", onChanged);
    return () => device.removeEventListener("changed", onChanged);
  });
</script>

<div class="space-y-4">
  <div class="space-y-1">
    <div class="flex items-center justify-between">
      <span class="text-xs text-gray-500">Position</span>
      <span class="font-mono text-sm text-gray-300">{value}</span>
    </div>
    <div class="h-3 overflow-hidden rounded-full bg-gray-800">
      <div
        class="h-full rounded-full bg-indigo-500 transition-all duration-75"
        style="width: {Math.max(0, Math.min(100, (value / 1024) * 100))}%"
      ></div>
    </div>
  </div>

  <div class="border-t border-gray-800 pt-4">
    <p class="mb-3 text-xs text-gray-500">LEDs</p>
    <NeoPixelControls {device} />
  </div>
</div>
