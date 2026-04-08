<script lang="ts">
  import { appState, type DeviceKind } from '$lib/stores.svelte';
  import TrinkeyCreator from './creation/TrinkeyCreator.svelte';
  import NeoDriverCreator from './creation/NeoDriverCreator.svelte';
  import RotaryEncoderCreator from './creation/RotaryEncoderCreator.svelte';
  import LinearEncoderCreator from './creation/LinearEncoderCreator.svelte';
  import TouchSensorCreator from './creation/TouchSensorCreator.svelte';
  import GyroscopeCreator from './creation/GyroscopeCreator.svelte';
  import PressureSensorCreator from './creation/PressureSensorCreator.svelte';
  import CO2SensorCreator from './creation/CO2SensorCreator.svelte';
  import DistanceSensorCreator from './creation/DistanceSensorCreator.svelte';
  import UVSensorCreator from './creation/UVSensorCreator.svelte';
  import NFCTagCreator from './creation/NFCTagCreator.svelte';
  import RFIDReaderCreator from './creation/RFIDReaderCreator.svelte';

  const DEVICE_KINDS: { kind: DeviceKind; label: string }[] = [
    { kind: 'trinkey', label: 'Trinkey (built-in)' },
    { kind: 'neo-driver', label: 'NeoDriver' },
    { kind: 'rotary-encoder', label: 'Rotary Encoder' },
    { kind: 'linear-encoder', label: 'Linear Encoder' },
    { kind: 'touch-sensor', label: 'Touch Sensor' },
    { kind: 'gyroscope', label: 'Gyroscope' },
    { kind: 'pressure-sensor', label: 'Pressure Sensor' },
    { kind: 'co2-sensor', label: 'CO2 Sensor' },
    { kind: 'distance-sensor', label: 'Distance Sensor' },
    { kind: 'uv-sensor', label: 'UV Sensor' },
    { kind: 'nfc-tag', label: 'NFC Tag' },
    { kind: 'rfid-reader', label: 'RFID Reader' },
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
      {:else if selectedKind === 'pressure-sensor'}
        <PressureSensorCreator oncreated={onCreated} />
      {:else if selectedKind === 'co2-sensor'}
        <CO2SensorCreator oncreated={onCreated} />
      {:else if selectedKind === 'distance-sensor'}
        <DistanceSensorCreator oncreated={onCreated} />
      {:else if selectedKind === 'uv-sensor'}
        <UVSensorCreator oncreated={onCreated} />
      {:else if selectedKind === 'nfc-tag'}
        <NFCTagCreator oncreated={onCreated} />
      {:else if selectedKind === 'rfid-reader'}
        <RFIDReaderCreator oncreated={onCreated} />
      {/if}
    </div>
  {/if}
</div>
