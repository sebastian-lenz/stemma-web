<script lang="ts">
  import type { NeoDriverDevice } from "stemma-web";
  import NeoPixelControls from "./NeoPixelControls.svelte";

  let { device }: { device: NeoDriverDevice } = $props();

  let ledCount = $state(0);
  let pendingCount = $state(0);

  $effect(() => {
    ledCount = device.getLength();
    pendingCount = ledCount;
  });

  async function applyLength() {
    ledCount = pendingCount;
    await device.setLength(ledCount);
  }
</script>

<div class="space-y-4">
  <div class="flex items-center gap-3">
    <span class="text-xs text-gray-400">LED count</span>
    <input
      type="number"
      min="1"
      max="256"
      bind:value={pendingCount}
      class="w-20 rounded-lg border border-gray-700 bg-gray-800 px-3 py-1.5 text-sm text-gray-100"
    />
    <button
      onclick={applyLength}
      class="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-500"
    >
      Apply
    </button>
    <span class="text-xs text-gray-500">current: {ledCount}</span>
  </div>

  {#if ledCount > 0}
    <NeoPixelControls {device} />
  {/if}
</div>
