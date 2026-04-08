<script lang="ts">
  import { PressureSensorDataRate } from "stemma-web";
  import type { PressureSensorDevice } from "stemma-web";

  let { device }: { device: PressureSensorDevice } = $props();

  let pressure = $state(0);
  let temperature = $state(0);
  let dataRate = $state(PressureSensorDataRate.PRESSURE_SENSOR_DATA_RATE_25_HZ);

  const DATA_RATES = [
    { value: PressureSensorDataRate.PRESSURE_SENSOR_DATA_RATE_ONE_SHOT, label: "One-shot" },
    { value: PressureSensorDataRate.PRESSURE_SENSOR_DATA_RATE_1_HZ, label: "1 Hz" },
    { value: PressureSensorDataRate.PRESSURE_SENSOR_DATA_RATE_7_HZ, label: "7 Hz" },
    { value: PressureSensorDataRate.PRESSURE_SENSOR_DATA_RATE_10_HZ, label: "10 Hz" },
    { value: PressureSensorDataRate.PRESSURE_SENSOR_DATA_RATE_12_5_HZ, label: "12.5 Hz" },
    { value: PressureSensorDataRate.PRESSURE_SENSOR_DATA_RATE_25_HZ, label: "25 Hz" },
    { value: PressureSensorDataRate.PRESSURE_SENSOR_DATA_RATE_50_HZ, label: "50 Hz" },
    { value: PressureSensorDataRate.PRESSURE_SENSOR_DATA_RATE_75_HZ, label: "75 Hz" },
  ];

  $effect(() => {
    pressure = device.getPressure();
    temperature = device.getTemperature();
    dataRate = device.getDataRate();

    function onChanged(e: Event) {
      const detail = (e as CustomEvent<{ pressure: number; temperature: number }>).detail;
      pressure = detail.pressure;
      temperature = detail.temperature;
    }

    device.addEventListener("changed", onChanged);
    return () => device.removeEventListener("changed", onChanged);
  });

  async function onDataRate(e: Event) {
    dataRate = +(e.target as HTMLSelectElement).value;
    await device.setDataRate(dataRate);
  }
</script>

<div class="space-y-4">
  <div class="grid grid-cols-2 gap-3">
    <div class="rounded-lg bg-gray-800 p-3">
      <p class="mb-2 text-xs text-gray-500">Pressure (hPa)</p>
      <p class="font-mono text-lg font-semibold text-gray-100">{pressure.toFixed(2)}</p>
    </div>

    <div class="rounded-lg bg-gray-800 p-3">
      <p class="mb-2 text-xs text-gray-500">Temperature</p>
      <p class="font-mono text-lg font-semibold text-gray-100">{temperature.toFixed(1)} °C</p>
    </div>
  </div>

  <div class="border-t border-gray-800 pt-4">
    <p class="mb-3 text-xs text-gray-500">Settings</p>
    <label class="space-y-1">
      <span class="text-xs text-gray-400">Data rate</span>
      <select
        value={dataRate}
        onchange={onDataRate}
        class="w-full rounded-lg border border-gray-700 bg-gray-800 px-2 py-1.5 text-xs text-gray-100"
      >
        {#each DATA_RATES as opt}
          <option value={opt.value}>{opt.label}</option>
        {/each}
      </select>
    </label>
  </div>
</div>
