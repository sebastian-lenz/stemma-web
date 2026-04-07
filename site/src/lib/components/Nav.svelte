<script lang="ts">
  import { page } from "$app/state";
  import { resolve } from "$app/paths";

  // resolve('/') → '{base}/' — strip trailing slash to get the bare base prefix
  const siteBase = resolve("/").slice(0, -1);

  function isActive(path: string) {
    const current = page.url.pathname;
    const full = siteBase + path;
    return current === full || current.startsWith(full + "/");
  }
</script>

<nav class="border-b border-gray-800 bg-gray-900">
  <div class="mx-auto flex max-w-6xl items-center gap-1 px-6 py-3">
    <a href={resolve("/")} class="mr-6 text-base font-bold tracking-wide text-white">
      StemmaWeb
    </a>

    <a
      href={resolve("/")}
      class="rounded-md px-3 py-1.5 text-sm transition-colors {isActive('/')
        ? 'bg-gray-800 text-white'
        : 'text-gray-400 hover:text-white'}"
    >
      Home
    </a>

    <a
      href={resolve("/reference/getting-started/device-setup")}
      class="rounded-md px-3 py-1.5 text-sm transition-colors {isActive(
        '/reference',
      )
        ? 'bg-gray-800 text-white'
        : 'text-gray-400 hover:text-white'}"
    >
      Reference
    </a>

    <a
      href={resolve("/playground")}
      class="rounded-md px-3 py-1.5 text-sm transition-colors {isActive(
        '/playground',
      )
        ? 'bg-gray-800 text-white'
        : 'text-gray-400 hover:text-white'}"
    >
      Playground
    </a>
  </div>
</nav>
