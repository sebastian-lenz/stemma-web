<script lang="ts">
  import type { CO2SensorDevice } from "stemma-web";

  let { device }: { device: CO2SensorDevice } = $props();

  let co2 = $state(0);
  let humidity = $state(0);
  let temperature = $state(0);

  $effect(() => {
    co2 = device.getCO2();
    humidity = device.getHumidity();
    temperature = device.getTemperature();

    function onChanged(e: Event) {
      const detail = (
        e as CustomEvent<{ co2: number; humidity: number; temperature: number }>
      ).detail;
      co2 = detail.co2;
      humidity = detail.humidity;
      temperature = detail.temperature;
    }

    device.addEventListener("changed", onChanged);
    return () => device.removeEventListener("changed", onChanged);
  });
</script>

<div class="grid grid-cols-3 gap-3">
  <div class="rounded-lg bg-gray-800 p-3">
    <p class="mb-2 text-xs text-gray-500">CO₂ (ppm)</p>
    <p class="font-mono text-lg font-semibold text-gray-100">{co2}</p>
  </div>

  <div class="rounded-lg bg-gray-800 p-3">
    <p class="mb-2 text-xs text-gray-500">Humidity (%RH)</p>
    <p class="font-mono text-lg font-semibold text-gray-100">{humidity.toFixed(1)}</p>
  </div>

  <div class="rounded-lg bg-gray-800 p-3">
    <p class="mb-2 text-xs text-gray-500">Temperature</p>
    <p class="font-mono text-lg font-semibold text-gray-100">{temperature.toFixed(1)} °C</p>
  </div>
</div>
