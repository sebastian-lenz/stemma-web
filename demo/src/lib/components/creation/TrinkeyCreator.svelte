<script lang="ts">
  import { appState } from '$lib/stores.svelte';

  let { oncreated }: { oncreated: () => void } = $props();
  let creating = $state(false);

  async function create() {
    creating = true;
    try {
      const device = appState.manager!.getTrinkey();
      await device._start();
      appState.addInstance({ kind: 'trinkey', key: 'trinkey', device });
      oncreated();
    } finally {
      creating = false;
    }
  }
</script>

<button
  onclick={create}
  disabled={creating}
  class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500 disabled:cursor-default disabled:opacity-50"
>
  {creating ? 'Creating…' : 'Create'}
</button>
