<!--
Gyroscope
Firmware source: ./firmware/src/devices/GyroscopeDevice.h
Library source: ./library/src/devices/Gyroscope.ts
Shop: https://www.adafruit.com/product/4438
Reference: https://learn.adafruit.com/lsm6dsox-and-ism330dhc-6-dof-imu
-->
<script lang="ts">
  import BaseDeviceMethods from "$lib/components/docs/BaseDeviceMethods.svelte";
  import BaseDeviceProperties from "$lib/components/docs/BaseDeviceProperties.svelte";
  import CodeBlock from "$lib/components/CodeBlock.svelte";
</script>

<h1 class="mb-4 text-2xl font-bold text-white">Gyroscope</h1>

<nav class="mb-8 flex flex-wrap gap-2">
  <a href="#connection" class="doc-toc-link">Connection</a>
  <a href="#methods" class="doc-toc-link">Methods</a>
  <a href="#properties" class="doc-toc-link">Properties</a>
  <a href="#events" class="doc-toc-link">Events</a>
  <a href="#event-argument" class="doc-toc-link">Event Argument</a>
</nav>

<p class="doc-p">
  The <a class="doc-link" href="https://www.adafruit.com/product/4438"
    >Adafruit LSM6DSOX</a
  >
  is a 6-DoF IMU combining a 3-axis accelerometer and a 3-axis gyroscope in one package.
  It reports acceleration, rotation rate, and die temperature at configurable data
  rates and measurement ranges. See the
  <a
    class="doc-link"
    href="https://learn.adafruit.com/lsm6dsox-and-ism330dhc-6-dof-imu"
    >Adafruit learn guide</a
  >
  for wiring and hardware details.
</p>

<h2 id="connection" class="doc-h2">Connection</h2>

<p class="doc-p">
  Call <span class="doc-code">startGyroscope()</span> inside
  <span class="doc-code">preload()</span>. The device is ready to use by the
  time <span class="doc-code">setup()</span> runs.
</p>

<CodeBlock
  code={`let imu;

function preload() {
  imu = startGyroscope(name?, addressOrIndex?, chipset?);
}`}
/>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">name</span>
    <span class="doc-badge doc-badge-type ml-2">string | false | null</span>
    <span class="doc-badge doc-badge-string ml-2">"gyroscope"</span>
  </p>
  <p class="doc-p">
    Controls automatic event callback registration. Any function on the sketch
    named <span class="doc-code">name + EventName</span> (event name capitalised)
    is called whenever that event fires. With the default name:
  </p>
  <CodeBlock
    nested
    code={`function gyroscopeChanged(event) { /* new sensor reading */ }`}
  />
  <p class="doc-p mb-0">
    Pass <span class="doc-code">false</span> or
    <span class="doc-code">null</span>
    to disable automatic registration and use
    <span class="doc-code">addEventListener</span> instead.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">addressOrIndex</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    <span class="doc-badge doc-badge-number ml-2">0x6A</span>
  </p>
  <p class="doc-p">
    The I2C address of the device, or an index (0–1) into the address list. Two
    addresses are available, set by the SDO pin on the board:
  </p>
  <table class="w-full text-sm text-left text-gray-300">
    <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
      <tr>
        <th class="py-2 pl-3 pr-4">Address</th>
        <th class="py-2 pl-3 pr-4">Index</th>
        <th class="py-2 pl-3">ADDR pin</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">0x6A</td>
        <td class="py-2 pl-3 pr-4">0</td>
        <td class="py-2 pl-3">open</td>
      </tr>
      <tr>
        <td class="py-2 pl-3 pr-4 doc-code">0x6B</td>
        <td class="py-2 pl-3 pr-4">1</td>
        <td class="py-2 pl-3">closed</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="doc-card mb-3">
  <p class="mb-2">
    <span class="doc-code">chipset</span>
    <span class="doc-badge doc-badge-type ml-2">GyroscopeChipset</span>
    <span class="doc-badge doc-badge-type ml-2">GYROSCOPE_CHIPSET_LSM6DSOX</span
    >
  </p>
  <p class="doc-p">
    The chipset variant of the connected sensor. Use this when the board uses a
    different LSM6DS-family chip than the default LSM6DSOX. All constants are
    available as global variables in p5.js sketches:
  </p>
  <table class="w-full text-sm text-left text-gray-300">
    <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
      <tr>
        <th class="py-2 pl-3 pr-4">Constant</th>
        <th class="py-2 pl-3">Chip</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">GYROSCOPE_CHIPSET_LSM6DSOX</td>
        <td class="py-2 pl-3">LSM6DSOX (default)</td>
      </tr>
      <tr class="border-b border-gray-800">
        <td class="py-2 pl-3 pr-4 doc-code">GYROSCOPE_CHIPSET_ISM330DHCX</td>
        <td class="py-2 pl-3">ISM330DHCX</td>
      </tr>
      <tr>
        <td class="py-2 pl-3 pr-4 doc-code">GYROSCOPE_CHIPSET_LSM6DSO32</td>
        <td class="py-2 pl-3">LSM6DSO32</td>
      </tr>
    </tbody>
  </table>
</div>

<h2 id="methods" class="doc-h2">Methods</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getAcceleration()</span>
    <span class="doc-badge doc-badge-object ml-2">&#123; x, y, z &#125;</span>
  </p>
  <p class="doc-p">
    Returns the last measured linear acceleration as a
    <span class="doc-code">&#123; x, y, z &#125;</span> object in m/s².
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getRotation()</span>
    <span class="doc-badge doc-badge-object ml-2">&#123; x, y, z &#125;</span>
  </p>
  <p class="doc-p">
    Returns the last measured angular velocity as a
    <span class="doc-code">&#123; x, y, z &#125;</span> object in degrees per second.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">getTemperature()</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
  </p>
  <p class="doc-p">
    Returns the die temperature in °C at the time of the last reading.
  </p>
</div>

<details class="mb-3 rounded-lg border border-gray-700">
  <summary
    class="cursor-pointer select-none rounded-lg px-5 py-3 text-sm text-gray-400 hover:bg-gray-800/50 hover:text-gray-200"
  >
    Configuration methods — ranges &amp; data rates
  </summary>
  <div class="border-t border-gray-700 p-5 flex flex-col gap-3">
    <div class="doc-card">
      <p class="mb-1">
        <span class="doc-code">getAccelerationDataRate()</span>
        <span class="doc-badge doc-badge-object ml-2">DataRate</span>
      </p>
      <p class="doc-p">
        Returns the current accelerometer output data rate as a
        <span class="doc-code">DataRate</span> enum value. Default is
        <span class="doc-code">DataRate.DATA_RATE_HZ_104</span>.
      </p>
    </div>

    <div class="doc-card">
      <p class="mb-1">
        <span class="doc-code">getAccelerationRange()</span>
        <span class="doc-badge doc-badge-object ml-2">AccelerationRange</span>
      </p>
      <p class="doc-p">
        Returns the current acceleration full-scale range as an
        <span class="doc-code">AccelerationRange</span> enum value. Default is
        <span class="doc-code">AccelerationRange.ACCELERATION_RANGE_4_G</span>.
      </p>
    </div>

    <div class="doc-card">
      <p class="mb-1">
        <span class="doc-code">getRotationDataRate()</span>
        <span class="doc-badge doc-badge-object ml-2">DataRate</span>
      </p>
      <p class="doc-p">
        Returns the current gyroscope output data rate as a
        <span class="doc-code">DataRate</span> enum value. Default is
        <span class="doc-code">DataRate.DATA_RATE_HZ_104</span>.
      </p>
    </div>

    <div class="doc-card">
      <p class="mb-1">
        <span class="doc-code">getRotationRange()</span>
        <span class="doc-badge doc-badge-object ml-2">RotationRange</span>
      </p>
      <p class="doc-p">
        Returns the current gyroscope full-scale range as a
        <span class="doc-code">RotationRange</span> enum value. Default is
        <span class="doc-code">RotationRange.ROTATION_RANGE_DPS_250</span>.
      </p>
    </div>

    <div class="doc-card">
      <p class="mb-1">
        <span class="doc-code">setAccelerationDataRate(value)</span>
        <span class="doc-badge doc-badge-promise ml-2"
          >Promise&lt;boolean&gt;</span
        >
      </p>
      <p class="doc-p">
        Sets the accelerometer output data rate. Resolves to
        <span class="doc-code">true</span> when acknowledged by the firmware. Available
        values:
      </p>
      <table class="w-full text-sm text-left text-gray-300">
        <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
          <tr>
            <th class="py-2 pl-3 pr-4">Constant</th>
            <th class="py-2 pl-3">Rate</th>
          </tr>
        </thead>
        <tbody>
          {#each [["GYROSCOPE_DATA_RATE_SHUTDOWN", "off"], ["GYROSCOPE_DATA_RATE_HZ_12_5", "12.5 Hz"], ["GYROSCOPE_DATA_RATE_HZ_26", "26 Hz"], ["GYROSCOPE_DATA_RATE_HZ_52", "52 Hz"], ["GYROSCOPE_DATA_RATE_HZ_104", "104 Hz (default)"], ["GYROSCOPE_DATA_RATE_HZ_208", "208 Hz"], ["GYROSCOPE_DATA_RATE_HZ_416", "416 Hz"], ["GYROSCOPE_DATA_RATE_HZ_833", "833 Hz"], ["GYROSCOPE_DATA_RATE_HZ_1_66K", "1.66 kHz"], ["GYROSCOPE_DATA_RATE_HZ_3_33K", "3.33 kHz"], ["GYROSCOPE_DATA_RATE_HZ_6_66K", "6.66 kHz"]] as [name, rate]}
            <tr class="border-b border-gray-800 last:border-0">
              <td class="py-2 pl-3 pr-4 doc-code">{name}</td>
              <td class="py-2 pl-3">{rate}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div class="doc-card">
      <p class="mb-1">
        <span class="doc-code">setAccelerationRange(value)</span>
        <span class="doc-badge doc-badge-promise ml-2"
          >Promise&lt;boolean&gt;</span
        >
      </p>
      <p class="doc-p">
        Sets the acceleration full-scale range. Resolves to
        <span class="doc-code">true</span> when acknowledged by the firmware. Available
        values:
      </p>
      <table class="w-full text-sm text-left text-gray-300">
        <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
          <tr>
            <th class="py-2 pl-3 pr-4">Constant</th>
            <th class="py-2 pl-3">Range</th>
          </tr>
        </thead>
        <tbody>
          {#each [["GYROSCOPE_ACCELERATION_RANGE_4_G", "±4 g (default)"], ["GYROSCOPE_ACCELERATION_RANGE_8_G", "±8 g"], ["GYROSCOPE_ACCELERATION_RANGE_16_G", "±16 g"], ["GYROSCOPE_ACCELERATION_RANGE_32_G", "±32 g"]] as [name, range]}
            <tr class="border-b border-gray-800 last:border-0">
              <td class="py-2 pl-3 pr-4 doc-code">{name}</td>
              <td class="py-2 pl-3">{range}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div class="doc-card">
      <p class="mb-1">
        <span class="doc-code">setRotationDataRate(value)</span>
        <span class="doc-badge doc-badge-promise ml-2"
          >Promise&lt;boolean&gt;</span
        >
      </p>
      <p class="doc-p">
        Sets the gyroscope output data rate. Accepts the same
        <span class="doc-code">DataRate</span> constants as
        <span class="doc-code">setAccelerationDataRate</span>. Default is
        <span class="doc-code">DataRate.DATA_RATE_HZ_104</span>.
      </p>
    </div>

    <div class="doc-card">
      <p class="mb-1">
        <span class="doc-code">setRotationRange(value)</span>
        <span class="doc-badge doc-badge-promise ml-2"
          >Promise&lt;boolean&gt;</span
        >
      </p>
      <p class="doc-p">
        Sets the gyroscope full-scale range. Resolves to
        <span class="doc-code">true</span> when acknowledged by the firmware. Available
        values:
      </p>
      <table class="w-full text-sm text-left text-gray-300">
        <thead class="text-xs uppercase text-gray-500 border-b border-gray-700">
          <tr>
            <th class="py-2 pl-3 pr-4">Constant</th>
            <th class="py-2 pl-3">Range</th>
          </tr>
        </thead>
        <tbody>
          {#each [["GYROSCOPE_ROTATION_RANGE_DPS_125", "±125 dps"], ["GYROSCOPE_ROTATION_RANGE_DPS_250", "±250 dps (default)"], ["GYROSCOPE_ROTATION_RANGE_DPS_500", "±500 dps"], ["GYROSCOPE_ROTATION_RANGE_DPS_1000", "±1000 dps"], ["GYROSCOPE_ROTATION_RANGE_DPS_2000", "±2000 dps"], ["GYROSCOPE_ROTATION_RANGE_DPS_4000", "±4000 dps"]] as [name, range]}
            <tr class="border-b border-gray-800 last:border-0">
              <td class="py-2 pl-3 pr-4 doc-code">{name}</td>
              <td class="py-2 pl-3">{range}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</details>

<BaseDeviceMethods />

<h2 id="properties" class="doc-h2">Properties</h2>

<BaseDeviceProperties />

<h2 id="events" class="doc-h2">Events</h2>

<div class="doc-card mb-3">
  <p class="mb-1">
    <span class="doc-code">gyroscopeChanged(event)</span>
    <span class="doc-badge doc-badge-event ml-2">changed</span>
  </p>
  <p class="doc-p">
    Fires on every sensor poll with updated acceleration, rotation, and
    temperature readings.
  </p>
</div>

<h2 id="event-argument" class="doc-h2">Event Argument</h2>

<p class="doc-p">
  All event callbacks receive a single <span class="doc-code">event</span>
  argument. The event detail is available at
  <span class="doc-code">event.detail</span> and contains:
</p>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.acceleration</span>
    <span class="doc-badge doc-badge-object ml-2">&#123; x, y, z &#125;</span>
    — Linear acceleration in m/s² along each axis.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.rotation</span>
    <span class="doc-badge doc-badge-object ml-2">&#123; x, y, z &#125;</span>
    — Angular velocity in degrees per second around each axis.
  </p>
</div>

<div class="doc-card mb-3">
  <p class="doc-p mb-0">
    <span class="doc-code">event.detail.temperature</span>
    <span class="doc-badge doc-badge-number ml-2">number</span>
    — Die temperature in °C at the time of the reading.
  </p>
</div>
