<script lang="ts">
  import { onMount } from 'svelte';
  import { appState } from '$lib/stores.svelte';
  import Header from '$lib/components/Header.svelte';
  import DeviceList from '$lib/components/DeviceList.svelte';
  import DeviceCreator from '$lib/components/DeviceCreator.svelte';

  onMount(() => appState.init());
</script>

<div class="flex min-h-screen flex-col">
  <Header />

  <main class="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-4 p-6">
    <DeviceList />
    <DeviceCreator />
  </main>
</div>
