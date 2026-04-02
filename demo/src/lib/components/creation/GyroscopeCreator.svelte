<script lang="ts">
  import { appState } from "$lib/stores.svelte";
  import { GyroscopeDevice, GyroscopeChipset } from "stemma-web";
  import type { GyroscopeAddress } from "stemma-web";

  let { oncreated }: { oncreated: () => void } = $props();

  let address = $state<GyroscopeAddress>(GyroscopeDevice.ADDRESSES[0]);
  let chipset = $state(GyroscopeChipset.GYROSCOPE_CHIPSET_LSM6DSOX);
  let creating = $state(false);

  const CHIPSETS = [
    { value: GyroscopeChipset.GYROSCOPE_CHIPSET_LSM6DSOX, label: "LSM6DSOX" },
    {
      value: GyroscopeChipset.GYROSCOPE_CHIPSET_ISM330DHCX,
      label: "ISM330DHCX",
    },
    { value: GyroscopeChipset.GYROSCOPE_CHIPSET_LSM6DSO32, label: "LSM6DSO32" },
  ];

  async function create() {
    creating = true;
    try {
      const device = appState.manager!.getGyroscope(address, chipset);
      await device._start();
      const key = `gyroscope:${address}`;
      appState.addInstance({ kind: "gyroscope", key, device });
      oncreated();
    } finally {
      creating = false;
    }
  }
</script>

<div class="space-y-3">
  <div class="grid grid-cols-2 gap-3">
    <label class="space-y-1">
      <span class="text-xs text-gray-400">I2C address</span>
      <select
        bind:value={address}
        class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100"
      >
        {#each GyroscopeDevice.ADDRESSES as addr}
          <option value={addr}>0x{addr.toString(16).padStart(2, "0")}</option>
        {/each}
      </select>
    </label>

    <label class="space-y-1">
      <span class="text-xs text-gray-400">Chipset</span>
      <select
        bind:value={chipset}
        class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100"
      >
        {#each CHIPSETS as cs}
          <option value={cs.value}>{cs.label}</option>
        {/each}
      </select>
    </label>
  </div>

  <button
    onclick={create}
    disabled={creating}
    class="w-full rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500 disabled:cursor-default disabled:opacity-50"
  >
    {creating ? "Creating…" : "Create"}
  </button>
</div>
