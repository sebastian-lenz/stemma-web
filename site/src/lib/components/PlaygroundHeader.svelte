<script lang="ts">
  import { appState } from "$lib/stores.svelte";

  async function disconnect() {
    await appState.manager!.disconnect();
  }
</script>

<header class="border-b border-gray-800/50">
  <div class="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
    <div class="flex-1"></div>

    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2">
        <div
          class="h-2 w-2 rounded-full transition-all duration-300 {appState.connected
            ? 'bg-green-400 shadow-[0_0_6px_theme(colors.green.400)]'
            : 'bg-gray-600'}"
        ></div>
        <span class="text-xs text-gray-500">
          {appState.connected ? "Connected" : "Disconnected"}
        </span>
      </div>

      {#if appState.connected}
        <button
          onclick={disconnect}
          class="rounded px-3 py-1 text-xs text-gray-500 transition-colors hover:bg-gray-800 hover:text-gray-300"
        >
          Disconnect
        </button>
      {/if}
    </div>
  </div>
</header>
