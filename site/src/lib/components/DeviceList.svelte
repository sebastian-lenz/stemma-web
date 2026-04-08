<script lang="ts">
  import { appState } from '$lib/stores.svelte';
  import TrinkeyPanel from './devices/TrinkeyPanel.svelte';
  import NeoDriverPanel from './devices/NeoDriverPanel.svelte';
  import RotaryEncoderPanel from './devices/RotaryEncoderPanel.svelte';
  import LinearEncoderPanel from './devices/LinearEncoderPanel.svelte';
  import TouchSensorPanel from './devices/TouchSensorPanel.svelte';
  import GyroscopePanel from './devices/GyroscopePanel.svelte';
  import PressureSensorPanel from './devices/PressureSensorPanel.svelte';
  import CO2SensorPanel from './devices/CO2SensorPanel.svelte';
  import DistanceSensorPanel from './devices/DistanceSensorPanel.svelte';
  import UVSensorPanel from './devices/UVSensorPanel.svelte';
  import NFCTagPanel from './devices/NFCTagPanel.svelte';
  import RFIDReaderPanel from './devices/RFIDReaderPanel.svelte';
</script>

{#each appState.instances as instance (instance.key)}
  <div class="rounded-xl border border-gray-800 bg-gray-900">
    <div class="flex items-center justify-between border-b border-gray-800 px-4 py-3">
      <div>
        <span class="text-sm font-semibold text-gray-100">
          {#if instance.kind === 'trinkey'}Trinkey
          {:else if instance.kind === 'neo-driver'}NeoDriver
          {:else if instance.kind === 'rotary-encoder'}Rotary Encoder
          {:else if instance.kind === 'linear-encoder'}Linear Encoder
          {:else if instance.kind === 'touch-sensor'}Touch Sensor
          {:else if instance.kind === 'gyroscope'}Gyroscope
          {:else if instance.kind === 'pressure-sensor'}Pressure Sensor
          {:else if instance.kind === 'co2-sensor'}CO2 Sensor
          {:else if instance.kind === 'distance-sensor'}Distance Sensor
          {:else if instance.kind === 'uv-sensor'}UV Sensor
          {:else if instance.kind === 'nfc-tag'}NFC Tag
          {:else if instance.kind === 'rfid-reader'}RFID Reader
          {/if}
        </span>
        {#if instance.device.id.address !== 0}
          <span class="ml-2 font-mono text-xs text-gray-500">
            0x{instance.device.id.address.toString(16).padStart(2, '0')}
          </span>
        {/if}
      </div>
      <button
        onclick={() => appState.removeInstance(instance.key)}
        class="rounded-md px-2 py-1 text-xs text-gray-500 transition-colors hover:bg-gray-800 hover:text-gray-300"
      >
        Remove
      </button>
    </div>

    <div class="p-4">
      {#if instance.kind === 'trinkey'}
        <TrinkeyPanel device={instance.device} />
      {:else if instance.kind === 'neo-driver'}
        <NeoDriverPanel device={instance.device} />
      {:else if instance.kind === 'rotary-encoder'}
        <RotaryEncoderPanel device={instance.device} />
      {:else if instance.kind === 'linear-encoder'}
        <LinearEncoderPanel device={instance.device} />
      {:else if instance.kind === 'touch-sensor'}
        <TouchSensorPanel device={instance.device} />
      {:else if instance.kind === 'gyroscope'}
        <GyroscopePanel device={instance.device} />
      {:else if instance.kind === 'pressure-sensor'}
        <PressureSensorPanel device={instance.device} />
      {:else if instance.kind === 'co2-sensor'}
        <CO2SensorPanel device={instance.device} />
      {:else if instance.kind === 'distance-sensor'}
        <DistanceSensorPanel device={instance.device} />
      {:else if instance.kind === 'uv-sensor'}
        <UVSensorPanel device={instance.device} />
      {:else if instance.kind === 'nfc-tag'}
        <NFCTagPanel device={instance.device} />
      {:else if instance.kind === 'rfid-reader'}
        <RFIDReaderPanel device={instance.device} />
      {/if}
    </div>
  </div>
{/each}
