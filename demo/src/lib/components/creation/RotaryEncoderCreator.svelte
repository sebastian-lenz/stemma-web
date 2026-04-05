<script lang="ts">
  import { appState } from "$lib/stores.svelte";
  import { RotaryEncoderDevice } from "stemma-web";
  import type { RotaryEncoderAddress } from "stemma-web";

  let { oncreated }: { oncreated: () => void } = $props();

  let address = $state<RotaryEncoderAddress>(RotaryEncoderDevice.ADDRESSES[0]);
  let creating = $state(false);

  async function create() {
    creating = true;
    try {
      const device = appState.manager!.getRotaryEncoder(address);
      await device.connect();
      const key = `rotary-encoder:${address}`;
      appState.addInstance({ kind: "rotary-encoder", key, device });
      oncreated();
    } finally {
      creating = false;
    }
  }
</script>

<div class="space-y-3">
  <label class="block space-y-1">
    <span class="text-xs text-gray-400">I2C address</span>
    <select
      bind:value={address}
      class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100"
    >
      {#each RotaryEncoderDevice.ADDRESSES as addr}
        <option value={addr}>0x{addr.toString(16).padStart(2, "0")}</option>
      {/each}
    </select>
  </label>

  <button
    onclick={create}
    disabled={creating}
    class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500 disabled:cursor-default disabled:opacity-50"
  >
    {creating ? "Creating…" : "Create"}
  </button>
</div>
