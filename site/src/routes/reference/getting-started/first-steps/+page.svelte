<script lang="ts">
  import CodePreview from "$lib/components/CodePreview.svelte";
</script>

<h1 class="doc-h2">First Steps</h1>

<p class="doc-p">
  The sketch below connects to a Trinkey and cycles the onboard NeoPixel through
  a rainbow using HSB color mode. Click <strong class="text-gray-300"
    >Run</strong
  > to execute it in your browser — your browser will ask for USB permission the
  first time.
</p>

<CodePreview example="/examples/first-steps.js" />
