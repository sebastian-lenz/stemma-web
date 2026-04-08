<script lang="ts">
  import { devices } from "$lib/constants/devices";
  import { page } from "$app/state";
  import { resolve } from "$app/paths";

  const siteBase = resolve("/").slice(0, -1);

  let { children } = $props();

  const nav = [
    {
      group: "Getting Started",
      items: [
        {
          label: "Device Setup",
          href: "/reference/getting-started/device-setup",
        },
        {
          label: "Library Setup",
          href: "/reference/getting-started/library-setup",
        },
        {
          label: "First Steps",
          href: "/reference/getting-started/first-steps",
        },
      ],
    },
    {
      group: "Devices",
      items: devices.map((device) => ({
        label: device.name,
        href: device.href,
      })),
    },
  ];
</script>

<div class="mx-auto flex max-w-6xl gap-10 p-6">
  <aside class="w-52 shrink-0">
    {#each nav as section}
      <div class="mb-6">
        <p
          class="mb-2 text-xs font-semibold uppercase tracking-wider text-gray-500"
        >
          {section.group}
        </p>
        <ul class="space-y-0.5">
          {#each section.items as item}
            <li>
              <a
                href={siteBase + item.href}
                class="block rounded-md px-3 py-1.5 text-sm transition-colors {page
                  .url.pathname ===
                siteBase + item.href
                  ? 'bg-gray-800 text-white'
                  : 'text-gray-400 hover:text-white'}"
              >
                {item.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </aside>

  <main class="min-w-0 flex-1">
    {@render children()}
  </main>
</div>
