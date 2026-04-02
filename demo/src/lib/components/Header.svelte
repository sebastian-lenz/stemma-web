<script lang="ts">
  import { appState } from '$lib/stores.svelte';

  let connecting = $state(false);

  async function connect() {
    connecting = true;
    try {
      await appState.manager!.connect();
    } catch {
      // user cancelled or error — silently ignore
    } finally {
      connecting = false;
    }
  }

  async function disconnect() {
    await appState.manager!.disconnect();
  }
</script>

<header class="border-b border-gray-800 bg-gray-900">
  <div class="mx-auto flex max-w-4xl items-center gap-4 px-6 py-4">
    <h1 class="text-base font-bold tracking-wide text-white">StemmaWeb</h1>

    <div class="flex-1"></div>

    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2">
        <div
          class="h-2.5 w-2.5 rounded-full transition-all duration-300 {appState.connected
            ? 'bg-green-400 shadow-[0_0_6px_theme(colors.green.400)]'
            : 'bg-gray-600'}"
        ></div>
        <span class="text-sm text-gray-400">
          {appState.connected ? 'Connected' : 'Disconnected'}
        </span>
      </div>

      {#if appState.connected}
        <button
          onclick={disconnect}
          class="rounded-lg bg-gray-700 px-4 py-1.5 text-sm font-medium text-gray-200 transition-colors hover:bg-gray-600"
        >
          Disconnect
        </button>
      {:else}
        <button
          onclick={connect}
          disabled={connecting}
          class="rounded-lg bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-indigo-500 disabled:cursor-default disabled:opacity-50"
        >
          {connecting ? 'Connecting…' : 'Connect'}
        </button>
      {/if}
    </div>
  </div>
</header>
