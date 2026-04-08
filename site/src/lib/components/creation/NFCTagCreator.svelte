<script lang="ts">
  import { appState } from "$lib/stores.svelte";

  let { oncreated }: { oncreated: () => void } = $props();

  let creating = $state(false);

  async function create() {
    creating = true;
    try {
      const device = appState.manager!.getNFCTag();
      await device.connect();
      appState.addInstance({ kind: "nfc-tag", key: "nfc-tag:0x2d", device });
      oncreated();
    } finally {
      creating = false;
    }
  }
</script>

<div class="space-y-3">
  <p class="text-xs text-gray-400">Fixed I2C address: 0x2D</p>

  <button
    onclick={create}
    disabled={creating}
    class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500 disabled:cursor-default disabled:opacity-50"
  >
    {creating ? "Creating…" : "Create"}
  </button>
</div>
