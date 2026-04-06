<script lang="ts">
  import Icon from "$lib/components/Icon.svelte";

  const CDN_URL =
    "https://sebastian-lenz.github.io/stemma-web/download/stemma-web.p5.js";

  const environments = [
    { id: "editor", label: "p5.js Web Editor" },
    { id: "openprocessing", label: "OpenProcessing" },
    { id: "vscode", label: "VS Code" },
    { id: "custom", label: "Custom Project" },
  ] as const;

  type EnvId = (typeof environments)[number]["id"];
  let active = $state<EnvId>("editor");
</script>

<h1 class="mb-4 text-2xl font-bold text-white">Library Setup</h1>

<p class="mb-8 text-gray-300 leading-relaxed">
  The StemmaWeb library adds a small API to p5.js that lets your sketches read
  from physical sensors connected via the Trinkey. It works in any environment
  that supports
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API"
    target="_blank"
    class="doc-link">WebUSB</a
  > — which today means Chromium-based browsers (Chrome, Edge, Opera).
</p>

<!-- Download -->
<section class="mb-10">
  <h2 class="doc-h2">The Library File</h2>
  <p class="doc-p mb-4">
    The library is a single JavaScript file. You can either reference it
    directly via CDN or download it and host it yourself.
  </p>

  <div class="doc-card mb-3 flex flex-col gap-3 sm:flex-row sm:items-center">
    <div class="min-w-0 flex-1">
      <p class="mb-0.5 text-sm font-medium text-white">CDN (always latest)</p>
      <code class="doc-code break-all">{CDN_URL}</code>
    </div>
    <a
      href={CDN_URL}
      download
      class="inline-flex shrink-0 items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-500"
    >
      <Icon id="icon-download" />
      Download
    </a>
  </div>
  <p class="text-sm text-gray-500">
    WebUSB requires a secure context — the library only works on
    <code class="doc-code">https://</code> pages or
    <code class="doc-code">localhost</code>.
  </p>
</section>

<!-- Environment tabs -->
<section class="mb-2">
  <h2 class="doc-h2">Adding the Library to Your Sketch</h2>
  <p class="doc-p mb-5">Choose your environment:</p>

  <!-- Tab bar -->
  <div class="mb-6 flex gap-1 rounded-lg bg-gray-800/60 p-1">
    {#each environments as env}
      <button
        onclick={() => (active = env.id)}
        class="flex-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors {active ===
        env.id
          ? 'bg-gray-700 text-white'
          : 'text-gray-400 hover:text-gray-200'}"
      >
        {env.label}
      </button>
    {/each}
  </div>

  <!-- p5.js Web Editor -->
  {#if active === "editor"}
    <div class="space-y-5">
      <p class="doc-p">
        The <a href="https://editor.p5js.org" target="_blank" class="doc-link"
          >p5.js Web Editor</a
        >
        lets you add external libraries by editing the sketch's
        <code class="doc-code">index.html</code> file.
      </p>

      <ol class="space-y-5">
        <li class="flex gap-4">
          <span class="doc-step">1</span>
          <div>
            <p class="mb-1 font-medium text-white">Open index.html</p>
            <p class="doc-p">
              In the left sidebar, click the <strong class="text-gray-200"
                >▶ Files</strong
              >
              arrow to expand the file list, then click
              <code class="doc-code">index.html</code>.
            </p>
          </div>
        </li>

        <li class="flex gap-4">
          <span class="doc-step">2</span>
          <div>
            <p class="mb-1 font-medium text-white">Add the script tag</p>
            <p class="doc-p mb-3">
              Add a <code class="doc-code">&lt;script&gt;</code> tag for
              StemmaWeb
              <em>after</em> the p5.js script tag:
            </p>
            <div class="doc-codeblock">
              <pre><span class="text-gray-500"
                  >&lt;!-- already there --&gt;</span
                >
&lt;script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.x.x/p5.js"&gt;&lt;/script&gt;

<span class="text-gray-500">&lt;!-- add this --&gt;</span>
&lt;script src="{CDN_URL}"&gt;&lt;/script&gt;</pre>
            </div>
          </div>
        </li>

        <li class="flex gap-4">
          <span class="doc-step">3</span>
          <div>
            <p class="mb-1 font-medium text-white">Run your sketch</p>
            <p class="doc-p">
              Press <kbd class="doc-kbd">▶ Play</kbd>. The StemmaWeb API is now
              available in <code class="doc-code">sketch.js</code>.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <!-- OpenProcessing -->
  {:else if active === "openprocessing"}
    <div class="space-y-5">
      <p class="doc-p">
        <a href="https://openprocessing.org" target="_blank" class="doc-link"
          >OpenProcessing</a
        > lets you attach external libraries to a sketch via its settings panel.
      </p>

      <ol class="space-y-5">
        <li class="flex gap-4">
          <span class="doc-step">1</span>
          <div>
            <p class="mb-1 font-medium text-white">Open sketch settings</p>
            <p class="doc-p">
              In your sketch, click the <strong class="text-gray-200"
                >⚙ Settings</strong
              > icon (top right of the editor) to open the sketch options.
            </p>
          </div>
        </li>

        <li class="flex gap-4">
          <span class="doc-step">2</span>
          <div>
            <p class="mb-1 font-medium text-white">Add a library URL</p>
            <p class="doc-p mb-3">
              Scroll to the <strong class="text-gray-200">Libraries</strong> section
              and paste the CDN URL:
            </p>
            <div class="doc-codeblock">
              <pre>{CDN_URL}</pre>
            </div>
          </div>
        </li>

        <li class="flex gap-4">
          <span class="doc-step">3</span>
          <div>
            <p class="mb-1 font-medium text-white">Save and run</p>
            <p class="doc-p">
              Save the settings and run your sketch. Note that WebUSB requires
              Chrome or Edge — Firefox is not supported.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <!-- VS Code -->
  {:else if active === "vscode"}
    <div class="space-y-5">
      <p class="doc-p">
        The <a
          href="https://marketplace.visualstudio.com/items?itemName=samplavigne.p5-vscode"
          target="_blank"
          class="doc-link">p5.vscode</a
        >
        extension scaffolds a project with an
        <code class="doc-code">index.html</code>. Add StemmaWeb as a script tag
        in that file.
      </p>

      <ol class="space-y-5">
        <li class="flex gap-4">
          <span class="doc-step">1</span>
          <div>
            <p class="mb-1 font-medium text-white">
              Create a new p5.js project
            </p>
            <p class="doc-p">
              Open the Command Palette (<kbd class="doc-kbd">⌘ Shift P</kbd> /
              <kbd class="doc-kbd">Ctrl Shift P</kbd>), run
              <strong class="text-gray-200">Create p5.js Project</strong>, and
              choose a folder.
            </p>
          </div>
        </li>

        <li class="flex gap-4">
          <span class="doc-step">2</span>
          <div>
            <p class="mb-1 font-medium text-white">
              Edit <code class="doc-code">index.html</code>
            </p>
            <p class="doc-p mb-3">
              Add the StemmaWeb script tag after the existing p5.js include:
            </p>
            <div class="doc-codeblock">
              <pre><span class="text-gray-500"
                  >&lt;!-- already there --&gt;</span
                >
&lt;script src="libraries/p5.min.js"&gt;&lt;/script&gt;

<span class="text-gray-500">&lt;!-- add this --&gt;</span>
&lt;script src="{CDN_URL}"&gt;&lt;/script&gt;</pre>
            </div>
          </div>
        </li>

        <li class="flex gap-4">
          <span class="doc-step">3</span>
          <div>
            <p class="mb-1 font-medium text-white">Open with Live Server</p>
            <p class="doc-p">
              Right-click <code class="doc-code">index.html</code> and choose
              <strong class="text-gray-200">Open with Live Server</strong>. The
              sketch runs on <code class="doc-code">localhost</code>, which is a
              valid secure context for WebUSB.
            </p>
          </div>
        </li>
      </ol>
    </div>

    <!-- Custom project -->
  {:else if active === "custom"}
    <div class="space-y-5">
      <p class="doc-p">
        In any HTML project, include p5.js and StemmaWeb as script tags. Load
        StemmaWeb <em>after</em> p5.js.
      </p>

      <div class="doc-codeblock">
        <pre>&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
  &lt;head&gt;
    &lt;meta charset="UTF-8" /&gt;
    &lt;title&gt;My Sketch&lt;/title&gt;

    &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.11.0/p5.js"&gt;&lt;/script&gt;
    &lt;script src="{CDN_URL}"&gt;&lt;/script&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;script src="sketch.js"&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;</pre>
      </div>

      <div class="doc-card">
        <p class="mb-1 text-sm font-medium text-white">
          Secure context required
        </p>
        <p class="doc-p">
          WebUSB only works on <code class="doc-code">https://</code> or
          <code class="doc-code">localhost</code>. Serve your files with a local
          server (e.g.
          <code class="doc-code">npx serve .</code> or VS Code Live Server) rather
          than opening the HTML file directly.
        </p>
      </div>
    </div>
  {/if}
</section>
