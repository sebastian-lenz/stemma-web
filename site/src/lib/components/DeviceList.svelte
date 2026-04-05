<script lang="ts">
  import { appState } from '$lib/stores.svelte';
  import TrinkeyPanel from './devices/TrinkeyPanel.svelte';
  import NeoDriverPanel from './devices/NeoDriverPanel.svelte';
  import RotaryEncoderPanel from './devices/RotaryEncoderPanel.svelte';
  import LinearEncoderPanel from './devices/LinearEncoderPanel.svelte';
  import TouchSensorPanel from './devices/TouchSensorPanel.svelte';
  import GyroscopePanel from './devices/GyroscopePanel.svelte';
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
      {/if}
    </div>
  </div>
{/each}
