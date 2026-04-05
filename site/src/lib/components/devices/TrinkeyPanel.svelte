<script lang="ts">
  import type { TrinkeyDevice } from "stemma-web";
  import NeoPixelControls from "./NeoPixelControls.svelte";

  let { device }: { device: TrinkeyDevice } = $props();
</script>

<NeoPixelControls {device} />
