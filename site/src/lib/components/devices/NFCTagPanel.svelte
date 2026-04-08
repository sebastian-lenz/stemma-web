<script lang="ts">
  import type { NFCTagDevice } from "stemma-web";

  let { device }: { device: NFCTagDevice } = $props();

  let writeType = $state<"text" | "url" | "sms" | "email">("text");
  let textValue = $state("");
  let urlValue = $state("");
  let smsPhone = $state("");
  let smsMessage = $state("");
  let emailTo = $state("");
  let emailSubject = $state("");
  let emailBody = $state("");
  let status = $state<"idle" | "writing" | "ok" | "error">("idle");

  const WRITE_TYPES = [
    { value: "text", label: "Text" },
    { value: "url", label: "URL" },
    { value: "sms", label: "SMS" },
    { value: "email", label: "Email" },
  ];

  async function write() {
    status = "writing";
    try {
      let ok = false;
      if (writeType === "text") {
        ok = await device.writeText(textValue);
      } else if (writeType === "url") {
        ok = await device.writeUnabridgedUri(urlValue);
      } else if (writeType === "sms") {
        ok = await device.writeSms(smsPhone, smsMessage);
      } else if (writeType === "email") {
        ok = await device.writeEmail(emailTo, emailSubject, emailBody);
      }
      status = ok ? "ok" : "error";
    } catch {
      status = "error";
    }
    setTimeout(() => (status = "idle"), 2000);
  }
</script>

<div class="space-y-4">
  <div class="flex gap-2">
    {#each WRITE_TYPES as t}
      <button
        onclick={() => (writeType = t.value as typeof writeType)}
        class="rounded-md px-3 py-1.5 text-xs font-medium transition-colors {writeType === t.value
          ? 'bg-indigo-600 text-white'
          : 'bg-gray-800 text-gray-400 hover:text-gray-200'}"
      >
        {t.label}
      </button>
    {/each}
  </div>

  <div class="space-y-2">
    {#if writeType === "text"}
      <input
        bind:value={textValue}
        placeholder="Text to write…"
        class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 placeholder-gray-600"
      />
    {:else if writeType === "url"}
      <input
        bind:value={urlValue}
        placeholder="https://example.com"
        class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 placeholder-gray-600"
      />
    {:else if writeType === "sms"}
      <input
        bind:value={smsPhone}
        placeholder="Phone number"
        class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 placeholder-gray-600"
      />
      <input
        bind:value={smsMessage}
        placeholder="Message"
        class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 placeholder-gray-600"
      />
    {:else if writeType === "email"}
      <input
        bind:value={emailTo}
        placeholder="To address"
        class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 placeholder-gray-600"
      />
      <input
        bind:value={emailSubject}
        placeholder="Subject"
        class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 placeholder-gray-600"
      />
      <input
        bind:value={emailBody}
        placeholder="Body"
        class="w-full rounded-lg border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-gray-100 placeholder-gray-600"
      />
    {/if}
  </div>

  <button
    onclick={write}
    disabled={status === "writing"}
    class="w-full rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:cursor-default disabled:opacity-50
      {status === 'ok' ? 'bg-green-700 text-white' : status === 'error' ? 'bg-red-700 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-500'}"
  >
    {status === "writing" ? "Writing…" : status === "ok" ? "Written!" : status === "error" ? "Failed" : "Write to tag"}
  </button>
</div>
