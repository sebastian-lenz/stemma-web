<script lang="ts">
  import { appState } from "$lib/stores.svelte";
  import { NeoDriverDevice } from "stemma-web";
  import type { NeoDriverAddress } from "stemma-web";

  let { oncreated }: { oncreated: () => void } = $props();

  let address = $state<NeoDriverAddress>(NeoDriverDevice.ADDRESSES[0]);
  let ledCount = $state(8);
  let creating = $state(false);

  async function create() {
    creating = true;
    try {
      const device = appState.manager!.getNeoDriver(address);
      await device._start();
      await device.setLength(ledCount);
      const key = `neo-driver:${address}`;
      appState.addInstance({ kind: "neo-driver", key, device });
      oncreated();
    } finally {
      creating = false;
    }
  }
</script>

<div class="space-y-3">
  <div class="grid grid-cols-2 gap-3">
    <label class="space-y-1">
      <span class="text-xs text-gray-400">I2C address</span>
      <select
        bind:value={address}
        class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100"
      >
        {#each NeoDriverDevice.ADDRESSES as addr}
          <option value={addr}>0x{addr.toString(16).padStart(2, "0")}</option>
        {/each}
      </select>
    </label>

    <label class="space-y-1">
      <span class="text-xs text-gray-400">LED count</span>
      <input
        type="number"
        min="1"
        max="256"
        bind:value={ledCount}
        class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100"
      />
    </label>
  </div>

  <button
    onclick={create}
    disabled={creating}
    class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500 disabled:cursor-default disabled:opacity-50"
  >
    {creating ? "Creating…" : "Create"}
  </button>
</div>
