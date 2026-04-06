<script lang="ts">
  import { page } from "$app/state";

  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  function isActive(path: string) {
    const current = page.url.pathname;
    return current === path || current.startsWith(path + "/");
  }
</script>

<nav class="border-b border-gray-800 bg-gray-900">
  <div class="mx-auto flex max-w-6xl items-center gap-1 px-6 py-3">
    <a href="{base}/" class="mr-6 text-base font-bold tracking-wide text-white"
      >StemmaWeb</a
    >

    <a
      href="{base}/"
      class="rounded-md px-3 py-1.5 text-sm transition-colors {page.url
        .pathname === '/'
        ? 'bg-gray-800 text-white'
        : 'text-gray-400 hover:text-white'}"
    >
      Home
    </a>

    <a
      href="{base}/reference/getting-started/device-setup"
      class="rounded-md px-3 py-1.5 text-sm transition-colors {isActive(
        '/reference',
      )
        ? 'bg-gray-800 text-white'
        : 'text-gray-400 hover:text-white'}"
    >
      Reference
    </a>

    <a
      href="{base}/playground"
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
