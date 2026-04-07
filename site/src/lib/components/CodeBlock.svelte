<script lang="ts">
  import { onMount } from "svelte";
  import "highlight.js/styles/github-dark.css";

  let {
    code,
    language = "javascript",
    nested = false,
  }: { code: string; language?: string; nested?: boolean } = $props();

  let highlighted = $state("");

  onMount(async () => {
    const [{ default: hljs }, { default: js }] = await Promise.all([
      import("highlight.js/lib/core"),
      import("highlight.js/lib/languages/javascript"),
    ]);
    hljs.registerLanguage("javascript", js);
    highlighted = hljs.highlight(code, { language }).value;
  });
</script>

<div class="doc-codeblock {nested ? 'my-3 bg-gray-950' : ''}">
  <pre><code>{#if highlighted}{@html highlighted}{:else}{code}{/if}</code></pre>
</div>
