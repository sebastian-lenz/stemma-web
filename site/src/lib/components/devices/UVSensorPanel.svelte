<script lang="ts">
  import { UVSensorGain, UVSensorMode, UVSensorResolution } from "stemma-web";
  import type { UVSensorDevice } from "stemma-web";

  let { device }: { device: UVSensorDevice } = $props();

  let value = $state(0);
  let mode = $state(UVSensorMode.UV_SENSOR_MODE_ALS);
  let gain = $state(UVSensorGain.UV_SENSOR_GAIN_3);
  let resolution = $state(UVSensorResolution.UV_SENSOR_RESOLUTION_18_BIT);

  const MODES = [
    { value: UVSensorMode.UV_SENSOR_MODE_ALS, label: "Ambient light (ALS)" },
    { value: UVSensorMode.UV_SENSOR_MODE_UVS, label: "UV index (UVS)" },
  ];

  const GAINS = [
    { value: UVSensorGain.UV_SENSOR_GAIN_1, label: "×1" },
    { value: UVSensorGain.UV_SENSOR_GAIN_3, label: "×3" },
    { value: UVSensorGain.UV_SENSOR_GAIN_6, label: "×6" },
    { value: UVSensorGain.UV_SENSOR_GAIN_9, label: "×9" },
    { value: UVSensorGain.UV_SENSOR_GAIN_18, label: "×18" },
  ];

  const RESOLUTIONS = [
    { value: UVSensorResolution.UV_SENSOR_RESOLUTION_20_BIT, label: "20-bit" },
    { value: UVSensorResolution.UV_SENSOR_RESOLUTION_19_BIT, label: "19-bit" },
    { value: UVSensorResolution.UV_SENSOR_RESOLUTION_18_BIT, label: "18-bit" },
    { value: UVSensorResolution.UV_SENSOR_RESOLUTION_17_BIT, label: "17-bit" },
    { value: UVSensorResolution.UV_SENSOR_RESOLUTION_16_BIT, label: "16-bit" },
    { value: UVSensorResolution.UV_SENSOR_RESOLUTION_13_BIT, label: "13-bit" },
  ];

  $effect(() => {
    value = device.getValue();
    mode = device.getMode();
    gain = device.getGain();
    resolution = device.getResolution();

    function onChanged(e: Event) {
      value = (e as CustomEvent<{ value: number }>).detail.value;
    }

    device.addEventListener("changed", onChanged);
    return () => device.removeEventListener("changed", onChanged);
  });

  async function onMode(e: Event) {
    mode = +(e.target as HTMLSelectElement).value;
    await device.setMode(mode);
  }

  async function onGain(e: Event) {
    gain = +(e.target as HTMLSelectElement).value;
    await device.setGain(gain);
  }

  async function onResolution(e: Event) {
    resolution = +(e.target as HTMLSelectElement).value;
    await device.setResolution(resolution);
  }
</script>

<div class="space-y-4">
  <div class="rounded-lg bg-gray-800 p-3">
    <p class="mb-2 text-xs text-gray-500">
      {mode === UVSensorMode.UV_SENSOR_MODE_ALS ? "Ambient light (lux count)" : "UV index count"}
    </p>
    <p class="font-mono text-lg font-semibold text-gray-100">{value}</p>
  </div>

  <div class="border-t border-gray-800 pt-4">
    <p class="mb-3 text-xs text-gray-500">Settings</p>
    <div class="grid grid-cols-3 gap-3">
      <label class="space-y-1">
        <span class="text-xs text-gray-400">Mode</span>
        <select
          value={mode}
          onchange={onMode}
          class="w-full rounded-lg border border-gray-700 bg-gray-800 px-2 py-1.5 text-xs text-gray-100"
        >
          {#each MODES as opt}
            <option value={opt.value}>{opt.label}</option>
          {/each}
        </select>
      </label>

      <label class="space-y-1">
        <span class="text-xs text-gray-400">Gain</span>
        <select
          value={gain}
          onchange={onGain}
          class="w-full rounded-lg border border-gray-700 bg-gray-800 px-2 py-1.5 text-xs text-gray-100"
        >
          {#each GAINS as opt}
            <option value={opt.value}>{opt.label}</option>
          {/each}
        </select>
      </label>

      <label class="space-y-1">
        <span class="text-xs text-gray-400">Resolution</span>
        <select
          value={resolution}
          onchange={onResolution}
          class="w-full rounded-lg border border-gray-700 bg-gray-800 px-2 py-1.5 text-xs text-gray-100"
        >
          {#each RESOLUTIONS as opt}
            <option value={opt.value}>{opt.label}</option>
          {/each}
        </select>
      </label>
    </div>
  </div>
</div>
