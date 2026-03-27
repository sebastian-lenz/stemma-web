<script lang="ts">
  import { browser } from "$app/environment";
  import { onDestroy } from "svelte";
  import type { TrinkeyClient, Response } from "stemma-trinkey";

  interface LogEntry {
    text: string;
    type: string;
  }

  const PIXEL_COUNT = 4;

  let client = $state<TrinkeyClient | null>(null);
  let connected = $state(false);
  let statusInfo = $state("—");
  let logs = $state<LogEntry[]>([]);

  let pixelColors = $state<string[]>(Array(PIXEL_COUNT).fill("#ff0000"));
  let pixelPreviews = $state<string[]>(Array(PIXEL_COUNT).fill("#111"));
  let colorAll = $state("#ff0000");
  let allDots = $state<string[]>(Array(PIXEL_COUNT).fill("#111"));
  let webUsbAvailable = $state(false);

  if (browser) {
    import("stemma-trinkey").then(({ TrinkeyClient }) => {
      webUsbAvailable = TrinkeyClient.isSupported();
      client = new TrinkeyClient();

      client.addEventListener("connect", () => {
        connected = true;
        addLog("Connected", "tx");
      });

      client.addEventListener("disconnect", () => {
        connected = false;
        addLog("Disconnected", "err");
      });

      client.addEventListener("response", (e) => {
        const r = (e as CustomEvent<Response>).detail;
        let msg = `rx  id=${r.id} success=${r.success}`;
        if (r.status)
          msg += `  pixels=${r.status.pixelCount} touch=${r.status.touchActive}`;
        addLog(msg, "rx");
        if (r.status) {
          statusInfo = `${r.status.pixelCount} pixels · touch ${r.status.touchActive ? "active" : "idle"}`;
        }
      });

      client.addEventListener("error", (e) => {
        addLog(`error: ${(e as CustomEvent<unknown>).detail}`, "err");
      });
    });
  }

  onDestroy(() => client?.disconnect());

  function addLog(text: string, type = ""): void {
    const time = new Date().toLocaleTimeString();
    logs = [...logs.slice(-99), { text: `[${time}] ${text}`, type }];
  }

  async function connect(): Promise<void> {
    try {
      await client!.connect();
    } catch (err) {
      addLog(
        `connect failed: ${err instanceof Error ? err.message : err}`,
        "err",
      );
    }
  }

  async function setPixel(i: number): Promise<void> {
    const hex = pixelColors[i];
    const { r, g, b } = hexToRgb(hex);
    addLog(`tx  set_pixel #${i} rgb(${r},${g},${b})`, "tx");
    await client!.setPixel(i, r, g, b);
    pixelPreviews[i] = hex;
  }

  async function setAll(): Promise<void> {
    const { r, g, b } = hexToRgb(colorAll);
    addLog(`tx  set_all rgb(${r},${g},${b})`, "tx");
    await client!.setAll(r, g, b);
    pixelPreviews = Array(PIXEL_COUNT).fill(colorAll);
    allDots = Array(PIXEL_COUNT).fill(colorAll);
  }

  async function turnOff(): Promise<void> {
    addLog("tx  set_all rgb(0,0,0)", "tx");
    await client!.setAll(0, 0, 0);
    pixelPreviews = Array(PIXEL_COUNT).fill("#111");
    allDots = Array(PIXEL_COUNT).fill("#111");
  }

  async function getStatus(): Promise<void> {
    addLog("tx  get_status", "tx");
    await client!.getStatus();
  }

  function hexToRgb(hex: string): { r: number; g: number; b: number } {
    const n = parseInt(hex.slice(1), 16);
    return { r: (n >> 16) & 0xff, g: (n >> 8) & 0xff, b: n & 0xff };
  }
</script>

<h1>NeoTrinkey WebUSB</h1>

<!-- Connection -->
<div class="card">
  <h2>Connection</h2>
  <div class="status-row">
    <div class="dot" class:connected></div>
    <span class="status-text">{connected ? "Connected" : "Not connected"}</span>
    <button
      id="btn-connect"
      disabled={connected || !webUsbAvailable}
      onclick={connect}>Connect</button
    >
    <button
      id="btn-disconnect"
      disabled={!connected}
      onclick={() => client?.disconnect()}>Disconnect</button
    >
  </div>
  {#if !webUsbAvailable}
    <p class="warn">WebUSB not supported. Use Chrome or Edge.</p>
  {/if}
</div>

<!-- Pixels -->
<div class="card">
  <h2>Individual pixels</h2>
  <div class="pixels-grid">
    {#each Array(PIXEL_COUNT) as _, i}
      <div class="pixel-cell">
        <div
          class="pixel-preview"
          style="background:{pixelPreviews[i]}; box-shadow: {pixelPreviews[
            i
          ] !== '#111'
            ? `0 0 10px ${pixelPreviews[i]}`
            : 'none'}"
        ></div>
        <label for="pixel-{i}">#{i}</label>
        <input id="pixel-{i}" type="color" bind:value={pixelColors[i]} />
        <button
          class="pixel-btn"
          disabled={!connected}
          onclick={() => setPixel(i)}>Set</button
        >
      </div>
    {/each}
  </div>

  <h2>All pixels</h2>
  <div class="all-row">
    <div class="all-preview">
      {#each allDots as color}
        <div class="all-dot" style="background:{color}"></div>
      {/each}
    </div>
    <input type="color" bind:value={colorAll} />
    <button class="pixel-btn" disabled={!connected} onclick={setAll}
      >Set all</button
    >
  </div>
  <button id="btn-off" disabled={!connected} onclick={turnOff}>Turn off</button>
</div>

<!-- Device status -->
<div class="card">
  <h2>Device status</h2>
  <div class="status-info">{statusInfo}</div>
  <button id="btn-get-status" disabled={!connected} onclick={getStatus}
    >Get status</button
  >
</div>

<!-- Log -->
<div class="card">
  <h2>Log</h2>
  <div id="log">
    {#each logs as entry}
      <div class="log-{entry.type}">{entry.text}</div>
    {/each}
  </div>
</div>

<style>
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(body) {
    font-family: system-ui, sans-serif;
    background: #0f0f0f;
    color: #e0e0e0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    padding: 2rem 1rem;
    gap: 1.5rem;
  }

  h1 {
    font-size: 1.4rem;
    letter-spacing: 0.05em;
    color: #fff;
  }

  .card {
    background: #1a1a1a;
    border: 1px solid #2a2a2a;
    border-radius: 12px;
    padding: 1.25rem 1.5rem;
    width: 100%;
    max-width: 480px;
  }

  .card h2 {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #666;
    margin-bottom: 1rem;
  }

  .status-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #444;
    flex-shrink: 0;
    transition: background 0.3s;
  }
  .dot.connected {
    background: #4ade80;
    box-shadow: 0 0 6px #4ade80;
  }

  .status-text {
    flex: 1;
    font-size: 0.9rem;
    color: #aaa;
  }

  .warn {
    font-size: 0.8rem;
    color: #f87171;
    margin-top: 0.5rem;
  }

  button {
    padding: 0.45rem 1.1rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    transition: opacity 0.15s;
  }
  button:disabled {
    opacity: 0.35;
    cursor: default;
  }
  button:not(:disabled):hover {
    opacity: 0.85;
  }

  #btn-connect {
    background: #6366f1;
    color: #fff;
  }
  #btn-disconnect {
    background: #374151;
    color: #e0e0e0;
  }

  .pixels-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .pixel-cell {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }

  .pixel-preview {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #111;
    border: 2px solid #333;
    transition:
      background 0.2s,
      box-shadow 0.2s;
  }

  .pixel-cell label {
    font-size: 0.7rem;
    color: #666;
  }

  input[type="color"] {
    width: 36px;
    height: 28px;
    padding: 1px 2px;
    border: 1px solid #333;
    border-radius: 4px;
    background: #111;
    cursor: pointer;
  }

  .pixel-btn {
    background: #1f2937;
    color: #d1d5db;
    font-size: 0.75rem;
    padding: 0.3rem 0.6rem;
  }

  .all-row {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .all-preview {
    display: flex;
    gap: 4px;
  }

  .all-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #111;
    border: 1px solid #333;
    transition: background 0.2s;
  }

  .all-row input[type="color"] {
    width: 44px;
  }
  .all-row .pixel-btn {
    flex: 1;
  }

  #btn-off {
    width: 100%;
    background: #1f2937;
    color: #9ca3af;
    margin-top: 0.75rem;
  }

  .status-info {
    font-size: 0.85rem;
    color: #9ca3af;
    min-height: 1.2em;
  }

  #btn-get-status {
    background: #374151;
    color: #e0e0e0;
    margin-top: 0.75rem;
    width: 100%;
  }

  #log {
    font-family: monospace;
    font-size: 0.78rem;
    background: #0a0a0a;
    border-radius: 6px;
    padding: 0.6rem 0.75rem;
    height: 160px;
    overflow-y: auto;
    color: #6ee7b7;
    line-height: 1.5;
  }

  :global(.log-err) {
    color: #f87171;
  }
  :global(.log-rx) {
    color: #93c5fd;
  }
  :global(.log-tx) {
    color: #6ee7b7;
  }
</style>
