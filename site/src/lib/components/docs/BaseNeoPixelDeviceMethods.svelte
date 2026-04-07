<script lang="ts"></script>

<h3 class="doc-h2">Methods (NeoPixel)</h3>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getBrightness()</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
  </p>
  <p class="doc-p">
    Returns the current brightness level as an integer from
    <span class="doc-code">0</span> (off) to
    <span class="doc-code">255</span> (full brightness). The default is
    <span class="doc-code">128</span>.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getLength()</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
  </p>
  <p class="doc-p">Returns the number of NeoPixels on the device.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getPixelColor(index?)</span>
    <span class="doc-badge doc-badge-object ml-2">ColorObject</span>
  </p>
  <p class="doc-p">
    Returns the last known color of the pixel at <span class="doc-code"
      >index</span
    >
    (defaults to <span class="doc-code">0</span>) as a
    <span class="doc-code">&#123; red, green, blue &#125;</span> object with
    values from <span class="doc-code">0</span> to
    <span class="doc-code">255</span>.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getPixelColors(offset?, length?)</span>
    <span class="doc-badge doc-badge-object ml-2">ColorObject[]</span>
  </p>
  <p class="doc-p">
    Returns an array of <span class="doc-code">&#123; red, green, blue &#125;</span>
    objects for the pixels starting at <span class="doc-code">offset</span>
    (default <span class="doc-code">0</span>). If
    <span class="doc-code">length</span> is omitted, all pixels from the offset to
    the end are returned.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">setBrightness(value)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;void&gt;</span>
  </p>
  <p class="doc-p">
    Sets the global brightness for all pixels. <span class="doc-code">value</span>
    is clamped to <span class="doc-code">0–255</span> and rounded to the nearest
    integer.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">setPixelColor(color)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;void&gt;</span>
  </p>
  <p class="mb-1">
    <span class="doc-code">setPixelColor(index, color)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;void&gt;</span>
  </p>
  <p class="doc-p">
    Sets the color of a single pixel. When called with one argument the first
    pixel (<span class="doc-code">index 0</span>) is used.
    <span class="doc-code">color</span> accepts a
    <span class="doc-code">&#123; red, green, blue &#125;</span> object, a CSS
    hex string (e.g. <span class="doc-code">"#ff0000"</span>), or a packed
    24-bit integer.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">setPixelColors(colors)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;void&gt;</span>
  </p>
  <p class="mb-1">
    <span class="doc-code">setPixelColors(offset, colors)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;void&gt;</span>
  </p>
  <p class="doc-p">
    Sets the colors of multiple pixels in one call. When called with one
    argument the update starts at pixel <span class="doc-code">0</span>; provide
    an <span class="doc-code">offset</span> to start further along. Each entry
    in <span class="doc-code">colors</span> accepts the same formats as
    <span class="doc-code">setPixelColor</span>. Large updates are automatically
    split into chunks of 64 pixels.
  </p>
</div>
