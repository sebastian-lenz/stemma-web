<!--
NFCTag
Firmware source: ./firmware/src/devices/NFCTagDevice.h
Library source: ./library/src/devices/NFCTag.ts
Shop: https://www.adafruit.com/product/4701
Reference: https://learn.adafruit.com/adafruit-st25dv16k-i2c-rfic-eeprom-breakout
-->
<script lang="ts">
  import BaseDeviceMethods from "$lib/components/docs/BaseDeviceMethods.svelte";
  import BaseDeviceProperties from "$lib/components/docs/BaseDeviceProperties.svelte";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">NFC Tag</h1>

<nav class="mb-8 flex flex-wrap gap-2">
  <a href="#connection" class="doc-toc-link">Connection</a>
  <a href="#methods" class="doc-toc-link">Methods</a>
  <a href="#properties" class="doc-toc-link">Properties</a>
</nav>

<p class="doc-p">
  The <a class="doc-link" href="https://www.adafruit.com/product/4701">Adafruit ST25DV16K</a>
  is an I²C EEPROM that doubles as an NFC tag. Your sketch can write NDEF records
  (text, URLs, SMS, email, contacts, and geo coordinates) to the tag over I²C; a phone
  can then read them wirelessly via NFC. See the
  <a class="doc-link" href="https://learn.adafruit.com/adafruit-st25dv16k-i2c-rfic-eeprom-breakout">Adafruit learn guide</a>
  for wiring and hardware details.
</p>

<h2 id="connection" class="doc-h2">Connection</h2>

<p class="doc-p">
  Call <span class="doc-code">startNFCTag()</span> inside
  <span class="doc-code">preload()</span>. The device is ready to use by the
  time <span class="doc-code">setup()</span> runs.
</p>

<CodeBlock
  code={`let tag;

function preload() {
  tag = startNFCTag();
}`}
/>

<h2 id="methods" class="doc-h2">Methods</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">readGeoLocation()</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;GeoLocation&gt;</span>
  </p>
  <p class="doc-p">
    Reads the current NDEF record as a geo location. Returns an object with
    <span class="doc-code">latitude</span>, <span class="doc-code">longitude</span>,
    and <span class="doc-code">information</span> fields.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">readEmail()</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;EmailMessage&gt;</span>
  </p>
  <p class="doc-p">Reads the current NDEF record as an email. Returns <span class="doc-code">email</span>, <span class="doc-code">subject</span>, <span class="doc-code">message</span>, and <span class="doc-code">information</span> fields.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">readSms()</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;ShortMessage&gt;</span>
  </p>
  <p class="doc-p">Reads the current NDEF record as an SMS. Returns <span class="doc-code">phoneNumber</span>, <span class="doc-code">message</span>, and <span class="doc-code">information</span> fields.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">readText()</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;string&gt;</span>
  </p>
  <p class="doc-p">Reads the current NDEF record as plain UTF-8 text.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">readUnabridgedUri()</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;string&gt;</span>
  </p>
  <p class="doc-p">Reads the current NDEF record as a full URI string.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">readUri()</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;string&gt;</span>
  </p>
  <p class="doc-p">Reads the current NDEF record as a URI with protocol prefix prepended.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">readVcard()</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;VCard&gt;</span>
  </p>
  <p class="doc-p">Reads the current NDEF record as a vCard contact.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">writeEmail(email, subject, message, information?)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;boolean&gt;</span>
  </p>
  <p class="doc-p">
    Writes an email NDEF record. Also accepts an <span class="doc-code">EmailMessage</span> object
    as the first argument. Resolves to <span class="doc-code">true</span> on success.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">writeGeoLocation(latitude, longitude, information?)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;boolean&gt;</span>
  </p>
  <p class="doc-p">
    Writes a geo location NDEF record. Also accepts a <span class="doc-code">GeoLocation</span> object
    as the first argument.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">writeSms(phoneNumber, message, information?)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;boolean&gt;</span>
  </p>
  <p class="doc-p">
    Writes an SMS NDEF record. Also accepts a <span class="doc-code">ShortMessage</span> object
    as the first argument.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">writeText(text, language?)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;boolean&gt;</span>
  </p>
  <p class="doc-p">Writes a plain UTF-8 text NDEF record. <span class="doc-code">language</span> defaults to <span class="doc-code">"en"</span>.</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">writeUnabridgedUri(uri, information?)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;boolean&gt;</span>
  </p>
  <p class="doc-p">Writes a full URI as an NDEF record (no protocol prefix abbreviation).</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">writeUri(protocol, uri, information?)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;boolean&gt;</span>
  </p>
  <p class="doc-p">Writes a URI NDEF record with an abridged protocol prefix (e.g. <span class="doc-code">"https://"</span>).</p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">writeVcard(vcard)</span>
    <span class="doc-badge doc-badge-promise ml-2">Promise&lt;boolean&gt;</span>
  </p>
  <p class="doc-p">
    Writes a vCard contact NDEF record. Accepts a partial <span class="doc-code">VCard</span> object —
    only the fields you provide are written.
  </p>
  <CodeBlock nested code={`await tag.writeVcard({
  firstName: "Ada",
  name: "Lovelace",
  email: "ada@example.com",
  url: "https://example.com",
});`} />
</div>

<BaseDeviceMethods />

<h2 id="properties" class="doc-h2">Properties</h2>

<BaseDeviceProperties />
