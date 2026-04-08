<script lang="ts">
  import type { DistanceSensorDevice } from "stemma-web";

  let { device }: { device: DistanceSensorDevice } = $props();

  let distance = $state(0);

  $effect(() => {
    distance = device.getDistance();

    function onChanged(e: Event) {
      distance = (e as CustomEvent<{ distance: number }>).detail.distance;
    }

    device.addEventListener("changed", onChanged);
    return () => device.removeEventListener("changed", onChanged);
  });
</script>

<div class="rounded-lg bg-gray-800 p-3">
  <p class="mb-2 text-xs text-gray-500">Distance</p>
  {#if distance >= 8190}
    <p class="font-mono text-lg font-semibold text-gray-500">Out of range</p>
  {:else}
    <p class="font-mono text-lg font-semibold text-gray-100">{distance} mm</p>
  {/if}
</div>
