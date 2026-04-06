<script lang="ts">
  import { onMount } from "svelte";
  import "highlight.js/styles/github-dark.css";

  let { example }: { example: string } = $props();

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  let highlighted = $state("");
  let playing = $state(false);

  const iframeSrc = `${base}/preview.html?base=${encodeURIComponent(base)}&example=${encodeURIComponent(example)}`;

  onMount(async () => {
    const [{ default: hljs }, { default: js }] = await Promise.all([
      import("highlight.js/lib/core"),
      import("highlight.js/lib/languages/javascript"),
    ]);
    hljs.registerLanguage("javascript", js);

    const response = await fetch(`${base}${example}`);
    const code = await response.text();
    highlighted = hljs.highlight(code, { language: "javascript" }).value;
  });
</script>

<div class="doc-codeblock flex overflow-hidden">
  <pre
    class="flex-1 overflow-auto p-4 text-sm leading-relaxed"><code>{@html highlighted}</code></pre>

  <div
    class="flex w-64 shrink-0 flex-col border-l border-gray-700 bg-gray-950"
  >
    <div class="flex gap-2 border-b border-gray-700 p-2">
      <button
        onclick={() => (playing = true)}
        disabled={playing}
        class="flex items-center gap-1.5 rounded px-3 py-1 text-xs font-medium transition-colors {playing
          ? 'text-gray-600'
          : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}"
      >
        <svg viewBox="0 0 8 10" class="h-2.5 w-2.5 fill-current"
          ><polygon points="0,0 8,5 0,10" /></svg
        >
        Run
      </button>
      <button
        onclick={() => (playing = false)}
        disabled={!playing}
        class="flex items-center gap-1.5 rounded px-3 py-1 text-xs font-medium transition-colors {!playing
          ? 'text-gray-600'
          : 'bg-gray-700 text-gray-200 hover:bg-gray-600'}"
      >
        <svg viewBox="0 0 8 8" class="h-2.5 w-2.5 fill-current"
          ><rect width="8" height="8" /></svg
        >
        Stop
      </button>
    </div>

    <div class="flex-1">
      {#if playing}
        <iframe src={iframeSrc} allow="usb" class="h-full w-full border-0"
        ></iframe>
      {:else}
        <div
          class="flex h-full items-center justify-center text-xs text-gray-600"
        >
          Press Run to start
        </div>
      {/if}
    </div>
  </div>
</div>
