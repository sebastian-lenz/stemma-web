<script lang="ts">
  import type { TouchSensorDevice } from "stemma-web";

  let { device }: { device: TouchSensorDevice } = $props();

  const SENSOR_COUNT = 12;
  let pressedMask = $state(0);

  $effect(() => {
    function onPressed(e: Event) {
      const { sensorId } = (
        e as CustomEvent<{ sensorId: number; isPressed: boolean }>
      ).detail;
      pressedMask |= 1 << sensorId;
    }

    function onReleased(e: Event) {
      const { sensorId } = (
        e as CustomEvent<{ sensorId: number; isPressed: boolean }>
      ).detail;
      pressedMask &= ~(1 << sensorId);
    }

    device.addEventListener("pressed", onPressed);
    device.addEventListener("released", onReleased);

    return () => {
      device.removeEventListener("pressed", onPressed);
      device.removeEventListener("released", onReleased);
    };
  });
</script>

<div class="space-y-2">
  <p class="text-xs text-gray-500">Touch sensors</p>
  <div class="flex flex-wrap gap-3">
    {#each Array(SENSOR_COUNT) as _, i}
      {@const active = (pressedMask & (1 << i)) !== 0}
      <div class="flex flex-col items-center gap-1">
        <div
          class="h-10 w-10 rounded-full border-2 transition-all duration-75 {active
            ? 'border-amber-400 bg-amber-500 shadow-[0_0_12px_theme(colors.amber.400)]'
            : 'border-gray-700 bg-gray-800'}"
        ></div>
        <span class="text-[10px] text-gray-500">{i}</span>
      </div>
    {/each}
  </div>
</div>
