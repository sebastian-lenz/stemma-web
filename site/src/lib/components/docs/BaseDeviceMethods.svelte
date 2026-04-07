<script lang="ts"></script>

<h3 class="doc-h2">Methods (BaseDevice)</h3>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">connect()</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;Response&gt;</span>
  </p>
  <p class="doc-p">
    Opens the USB connection and sends the start command to the firmware.
    Calling it multiple times is safe — subsequent calls return the same
    promise. In p5.js you do not need to call this manually;
    <span class="doc-code">startXxx()</span> calls it for you inside
    <span class="doc-code">preload()</span>.
  </p>
</div>
