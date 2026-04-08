<script lang="ts">
  import type { RFIDReaderDevice } from "stemma-web";

  let { device }: { device: RFIDReaderDevice } = $props();

  let tagId = $state<string | null>(null);

  $effect(() => {
    tagId = device.getTagID();

    function onChanged(e: Event) {
      const { tagId: id } = (e as CustomEvent<{ tagId: string }>).detail;
      tagId = id || null;
    }

    device.addEventListener("changed", onChanged);
    return () => device.removeEventListener("changed", onChanged);
  });
</script>

<div class="rounded-lg bg-gray-800 p-3">
  <p class="mb-2 text-xs text-gray-500">Tag ID</p>
  {#if tagId}
    <p class="font-mono text-lg font-semibold text-gray-100">{tagId}</p>
  {:else}
    <p class="font-mono text-lg font-semibold text-gray-600">No tag detected</p>
  {/if}
</div>
