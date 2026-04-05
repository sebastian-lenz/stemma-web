<script lang="ts">
  import { appState, type DeviceKind } from '$lib/stores.svelte';
  import TrinkeyCreator from './creation/TrinkeyCreator.svelte';
  import NeoDriverCreator from './creation/NeoDriverCreator.svelte';
  import RotaryEncoderCreator from './creation/RotaryEncoderCreator.svelte';
  import LinearEncoderCreator from './creation/LinearEncoderCreator.svelte';
  import TouchSensorCreator from './creation/TouchSensorCreator.svelte';
  import GyroscopeCreator from './creation/GyroscopeCreator.svelte';

  const DEVICE_KINDS: { kind: DeviceKind; label: string }[] = [
    { kind: 'trinkey', label: 'Trinkey (built-in)' },
    { kind: 'neo-driver', label: 'NeoDriver' },
    { kind: 'rotary-encoder', label: 'Rotary Encoder' },
    { kind: 'linear-encoder', label: 'Linear Encoder' },
    { kind: 'touch-sensor', label: 'Touch Sensor' },
    { kind: 'gyroscope', label: 'Gyroscope' },
  ];

  let selectedKind = $state<DeviceKind | ''>('');

  function onCreated() {
    selectedKind = '';
  }
</script>

<div class="rounded-xl border border-gray-800 bg-gray-900 p-4">
  <p class="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">Add Device</p>

  <select
    bind:value={selectedKind}

    class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 disabled:cursor-not-allowed disabled:opacity-50"
  >
    <option value="">Select device type…</option>
    {#each DEVICE_KINDS as { kind, label }}
      <option value={kind}>{label}</option>
    {/each}
  </select>

  {#if selectedKind}
    <div class="mt-4">
      {#if selectedKind === 'trinkey'}
        <TrinkeyCreator oncreated={onCreated} />
      {:else if selectedKind === 'neo-driver'}
        <NeoDriverCreator oncreated={onCreated} />
      {:else if selectedKind === 'rotary-encoder'}
        <RotaryEncoderCreator oncreated={onCreated} />
      {:else if selectedKind === 'linear-encoder'}
        <LinearEncoderCreator oncreated={onCreated} />
      {:else if selectedKind === 'touch-sensor'}
        <TouchSensorCreator oncreated={onCreated} />
      {:else if selectedKind === 'gyroscope'}
        <GyroscopeCreator oncreated={onCreated} />
      {/if}
    </div>
  {/if}
</div>
