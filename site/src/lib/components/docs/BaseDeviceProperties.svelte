<script lang="ts"></script>

<h3 class="doc-h2">Properties (BaseDevice)</h3>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">id</span>
    <span class="doc-badge doc-badge-object ml-2">&#123; type, address &#125;</span>
  </p>
  <p class="doc-p">
    Identifies the device. <span class="doc-code">type</span> is the
    <span class="doc-code">DeviceType</span> enum value,
    <span class="doc-code">address</span> is the I2C address the device was started
    with.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">isConnected</span>
    <span class="doc-badge doc-badge-boolean ml-2">boolean</span>
  </p>
  <p class="doc-p">
    <span class="doc-code">true</span> once the USB connection has been
    established and the firmware has acknowledged the device. In p5.js this is
    always <span class="doc-code">true</span> by the time
    <span class="doc-code">setup()</span> runs, because
    <span class="doc-code">startXxx()</span> waits for the connection inside
    <span class="doc-code">preload()</span>.
  </p>
</div>
