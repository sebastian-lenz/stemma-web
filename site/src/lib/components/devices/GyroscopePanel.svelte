<script lang="ts">
  import { AccelerationRange, DataRate, RotationRange } from "stemma-web";
  import type { GyroscopeDevice, Vector } from "stemma-web";

  let { device }: { device: GyroscopeDevice } = $props();

  let acceleration = $state<Vector>({ x: 0, y: 0, z: 0 });
  let rotation = $state<Vector>({ x: 0, y: 0, z: 0 });
  let temperature = $state(0);
  let accelRange = $state(AccelerationRange.GYROSCOPE_ACCELERATION_RANGE_4_G);
  let accelRate = $state(DataRate.GYROSCOPE_DATA_RATE_HZ_104);
  let rotRange = $state(RotationRange.GYROSCOPE_ROTATION_RANGE_DPS_250);
  let rotRate = $state(DataRate.GYROSCOPE_DATA_RATE_HZ_104);

  const ACCEL_RANGES = [
    {
      value: AccelerationRange.GYROSCOPE_ACCELERATION_RANGE_4_G,
      label: "±4 g",
    },
    {
      value: AccelerationRange.GYROSCOPE_ACCELERATION_RANGE_8_G,
      label: "±8 g",
    },
    {
      value: AccelerationRange.GYROSCOPE_ACCELERATION_RANGE_16_G,
      label: "±16 g",
    },
    {
      value: AccelerationRange.GYROSCOPE_ACCELERATION_RANGE_32_G,
      label: "±32 g",
    },
  ];

  const ROT_RANGES = [
    { value: RotationRange.GYROSCOPE_ROTATION_RANGE_DPS_125, label: "125 dps" },
    { value: RotationRange.GYROSCOPE_ROTATION_RANGE_DPS_250, label: "250 dps" },
    { value: RotationRange.GYROSCOPE_ROTATION_RANGE_DPS_500, label: "500 dps" },
    {
      value: RotationRange.GYROSCOPE_ROTATION_RANGE_DPS_1000,
      label: "1000 dps",
    },
    {
      value: RotationRange.GYROSCOPE_ROTATION_RANGE_DPS_2000,
      label: "2000 dps",
    },
    {
      value: RotationRange.GYROSCOPE_ROTATION_RANGE_DPS_4000,
      label: "4000 dps",
    },
  ];

  const DATA_RATES = [
    { value: DataRate.GYROSCOPE_DATA_RATE_SHUTDOWN, label: "Shutdown" },
    { value: DataRate.GYROSCOPE_DATA_RATE_HZ_12_5, label: "12.5 Hz" },
    { value: DataRate.GYROSCOPE_DATA_RATE_HZ_26, label: "26 Hz" },
    { value: DataRate.GYROSCOPE_DATA_RATE_HZ_52, label: "52 Hz" },
    { value: DataRate.GYROSCOPE_DATA_RATE_HZ_104, label: "104 Hz" },
    { value: DataRate.GYROSCOPE_DATA_RATE_HZ_208, label: "208 Hz" },
    { value: DataRate.GYROSCOPE_DATA_RATE_HZ_416, label: "416 Hz" },
    { value: DataRate.GYROSCOPE_DATA_RATE_HZ_833, label: "833 Hz" },
    { value: DataRate.GYROSCOPE_DATA_RATE_HZ_1_66K, label: "1.66 kHz" },
    { value: DataRate.GYROSCOPE_DATA_RATE_HZ_3_33K, label: "3.33 kHz" },
    { value: DataRate.GYROSCOPE_DATA_RATE_HZ_6_66K, label: "6.66 kHz" },
  ];

  $effect(() => {
    acceleration = device.getAcceleration();
    rotation = device.getRotation();
    temperature = device.getTemperature();
    accelRange = device.getAccelerationRange();
    accelRate = device.getAccelerationDataRate();
    rotRange = device.getRotationRange();
    rotRate = device.getRotationDataRate();

    function onChanged(e: Event) {
      const detail = (
        e as CustomEvent<{
          acceleration: Vector;
          rotation: Vector;
          temperature: number;
        }>
      ).detail;
      acceleration = detail.acceleration;
      rotation = detail.rotation;
      temperature = detail.temperature;
    }

    device.addEventListener("changed", onChanged);
    return () => device.removeEventListener("changed", onChanged);
  });

  function fmt(v: number): string {
    return v.toFixed(3).padStart(8);
  }

  async function onAccelRange(e: Event) {
    accelRange = +(e.target as HTMLSelectElement).value;
    await device.setAccelerationRange(accelRange);
  }

  async function onAccelRate(e: Event) {
    accelRate = +(e.target as HTMLSelectElement).value;
    await device.setAccelerationDataRate(accelRate);
  }

  async function onRotRange(e: Event) {
    rotRange = +(e.target as HTMLSelectElement).value;
    await device.setRotationRange(rotRange);
  }

  async function onRotRate(e: Event) {
    rotRate = +(e.target as HTMLSelectElement).value;
    await device.setRotationDataRate(rotRate);
  }
</script>

<div class="space-y-4">
  <div class="grid grid-cols-3 gap-3">
    <div class="rounded-lg bg-gray-800 p-3">
      <p class="mb-2 text-xs text-gray-500">Acceleration (m/s²)</p>
      <div class="space-y-1 font-mono text-xs text-gray-300">
        <div class="flex justify-between">
          <span class="text-gray-500">X</span><span>{fmt(acceleration.x)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Y</span><span>{fmt(acceleration.y)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Z</span><span>{fmt(acceleration.z)}</span>
        </div>
      </div>
    </div>

    <div class="rounded-lg bg-gray-800 p-3">
      <p class="mb-2 text-xs text-gray-500">Rotation (dps)</p>
      <div class="space-y-1 font-mono text-xs text-gray-300">
        <div class="flex justify-between">
          <span class="text-gray-500">X</span><span>{fmt(rotation.x)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Y</span><span>{fmt(rotation.y)}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-500">Z</span><span>{fmt(rotation.z)}</span>
        </div>
      </div>
    </div>

    <div class="rounded-lg bg-gray-800 p-3">
      <p class="mb-2 text-xs text-gray-500">Temperature</p>
      <p class="font-mono text-lg font-semibold text-gray-100">
        {temperature.toFixed(1)} °C
      </p>
    </div>
  </div>

  <div class="border-t border-gray-800 pt-4">
    <p class="mb-3 text-xs text-gray-500">Settings</p>
    <div class="grid grid-cols-2 gap-3">
      <label class="space-y-1">
        <span class="text-xs text-gray-400">Accel range</span>
        <select
          value={accelRange}
          onchange={onAccelRange}
          class="w-full rounded-lg border border-gray-700 bg-gray-800 px-2 py-1.5 text-xs text-gray-100"
        >
          {#each ACCEL_RANGES as opt}
            <option value={opt.value}>{opt.label}</option>
          {/each}
        </select>
      </label>

      <label class="space-y-1">
        <span class="text-xs text-gray-400">Accel rate</span>
        <select
          value={accelRate}
          onchange={onAccelRate}
          class="w-full rounded-lg border border-gray-700 bg-gray-800 px-2 py-1.5 text-xs text-gray-100"
        >
          {#each DATA_RATES as opt}
            <option value={opt.value}>{opt.label}</option>
          {/each}
        </select>
      </label>

      <label class="space-y-1">
        <span class="text-xs text-gray-400">Rotation range</span>
        <select
          value={rotRange}
          onchange={onRotRange}
          class="w-full rounded-lg border border-gray-700 bg-gray-800 px-2 py-1.5 text-xs text-gray-100"
        >
          {#each ROT_RANGES as opt}
            <option value={opt.value}>{opt.label}</option>
          {/each}
        </select>
      </label>

      <label class="space-y-1">
        <span class="text-xs text-gray-400">Rotation rate</span>
        <select
          value={rotRate}
          onchange={onRotRate}
          class="w-full rounded-lg border border-gray-700 bg-gray-800 px-2 py-1.5 text-xs text-gray-100"
        >
          {#each DATA_RATES as opt}
            <option value={opt.value}>{opt.label}</option>
          {/each}
        </select>
      </label>
    </div>
  </div>
</div>
