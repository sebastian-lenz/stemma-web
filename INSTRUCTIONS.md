## Overview

Okay, we need to extend this project. The aim is to allow users to connect different devices to
the trinkey usb device via the StemmaQT connector. We will start with a initial pool of supported
devices but the system should be able to be easily expanded. Of a single device class multiple
physical devices might be connected depending on the available I2C hardware addresses available.

## Requirements

- The firmware should contain a class for each of the device classes supported
- The Protobuf protocol must be expanded to support different device classes. Idealy the messages
  required by each device class should be stored in a separate .proto file. The existing messages.proto will serve as the main entry point and should import those.
- The JavaScript client should contain a class for each of the device classes supported.
  Furthermore, functions must be exposed to connect to different devices.
- The client library should have functions to require / connect to the different devices available.


## Shared interfaces

### Shared utilities

´´´
    interface Vector {
        x: number;
        y: number;
        z: number;
    };
´´´


### Shared device interface

´´´
    enum DeviceType {
        GYROSCOPE,
        LINEAR_ENCODER, 
        NEO_DRIVER, 
        ROTARY_ENCODER, 
        TOUCH_SENSOR, 
    }
    
    interface DeviceIdentifier<TAddress> {
        type: DeviceType;
        address: TAddress;
    }

    interface Device<TAddress> extends EventTarget {
        readonly id: DeviceIdentifier<TAddress>;
        readonly isConnected: boolean;
    }
´´´

### Shared NeoPixel Interface

Multiple devices have NeoPixels attached so we shoudl use a common base class that exposes functionality
related to NeoPixels:
´´´
    interface ColorObject {
        red: number, 
        green: number, 
        blue: number
    }

    // Color as object or hex string
    type Color = ColorObject | string;

    interface NeoPixelDevice<TAddress> extends Device<TAddress> {
        getBrightness(): number;

        // Return the number of pixels. Some devices have a fixed number, other (e.g. NeoDriver) support a flexibel number
        getLength(): number;
        getPixelColor(index: number): ColorObject;
        getPixelColors(offset: number, length: number): Array<ColorObject>;
        setBrightness(value: number): void;
        setPixelColor(index: number, color: Color): void;
        setPixelColors(offset: number, colors: Array<Color>): void;
    }
´´´


## Supported device classes


### Adafruit NeoDriver - I2C to NeoPixel Driver Board

A connector that can drive mutiple NeoPixels / RGB Pixels.
Product page: https://www.adafruit.com/product/5766
Library: Adafruit seesaw
I2C-Addresses: 0x60 - 0x67

Desired public JavaScript client API:
´´´
    type NeoDriverAddress = 0x60 | 0x61 | 0x62 | 0x63 | 0x64 | 0x65 | 0x66 | 0x67;

    function startNeoDriver(address?: NeoDriverAddress): Promise<NeoDriver>;

    interface NeoDriver extends NeoPixelDevice<NeoDriverAddress> {
        // Allows to set the max number of pixels | optionalsetPixelColor and setPixelColors should generate an error when set
        setLength(value: number): void; 
    }
´´´


### Adafruit I2C Stemma QT Rotary Encoder Breakout with NeoPixel

A button that can be rotated and pressed and released. Additionally the board holds a rgb pixel.
Product page: https://www.adafruit.com/product/4991
Library: Adafruit seesaw
I2C-Addresses: 0x36 - 0x3D

Desired public JavaScript client API:
´´´
    type RotaryEncoderAddress = 0x36 | 0x37 | 0x38 | 0x39 | 0x3A | 0x3B | 0x3C | 0x3D;

    function startRotaryEncoder(address?: RotaryEncoderAddress): Promise<RotaryEncoder>;

    type RotaryEncoderEvent = CustomEvent<{
        isPressed: boolean;
        value: number;
    }>;

    // Events (all use RotaryEncoderEvent)
    // "changed": When the encoder is rotated
    // "pressed": When the encoder is pressed
    // "released": When the encoder is released
    interface RotaryEncoder extends NeoPixelDevice<RotaryEncoderAddress> {
        isPressed(): boolean;
        getValue(): number;
    }
´´´


### Adafruit LinearEncoder I2C QT Slide Potentiometer with 4 NeoPixels

Product page: https://www.adafruit.com/product/5295
Library: Adafruit seesaw
I2C-Addresses: 0x30 - 0x3F

Desired public JavaScript client API:
´´´
    type LinearEncoderAddress = 0x30 | 0x31 | 0x32 | 0x33 | 0x34 | 0x35 | 0x36 | 0x37 | 0x38 | 0x39 | 0x3A | 0x3B | 0x3C | 0x3D | 0x3E | 0x3F;

    function startLinearEncoder(address?: LinearEncoderAddress): Promise<LinearEncoder>;

    type LinearEncoderEvent = CustomEvent<{
        value: number;
    }>;

    // Events (all use LinearEncoderEvent) 
    // "changed": When the slider values has changed
    interface LinearEncoder extends NeoPixelDevice<LinearEncoderAddress> {
        getValue(): number;
    }
´´´


### Adafruit 12-Key Capacitive Touch Sensor Breakout - MPR121

A touch device, it basically exposes 12 buttons that can be on and off.
Product page: https://www.adafruit.com/product/1982
Library: Adafruit MPR121
I2C-Addresses: 0x5A, 0x5B, 0x5C, 0x5D

Desired public JavaScript client API:
´´´
    type TouchSensorAddress = 0x5A | 0x5B | 0x5C | 0x5D;

    function startTouchSensor(address?: TouchSensorAddress): Promise<TouchSensor>;
    
    type TouchSensorEvent = CustomEvent<{
        isPressed: boolean;
        sensorId: number;
    }>;

    // Events (all use TouchSensorEvent) 
    // "pressed": When a sensor is pressed
    // "released": When a sensor is released
    interface TouchSensor extends Device<TouchSensorAddress> {
        isPressed(sensorId: number): boolean;
    }
´´´


### Adafruit LSM6DSO32 6-DoF Accelerometer and Gyroscope - STEMMA QT / Qwiic

Product page: https://www.adafruit.com/product/4692
Library: Adafruit LSM6DS
I2C-Addresses: 0x6A, 0x6B

Desired public JavaScript client API:
´´´
    type GyroscopeAddress = 0x6A | 0x6B;

    enum GyroscopeChipset {
        LSM6DSOX, ISM330DHCX, LSM6DSO32
    }

    enum DataRate {
        SHUTDOWN = 0,
        HZ_12_5 = 12.5,
        HZ_26 = 26,
        HZ_52 = 52,
        HZ_104 = 104,
        HZ_208 = 208,
        HZ_416 = 416,
        HZ_833 = 833,
        HZ_1_66K = 1666,
        HZ_3_33K = 3333,
        HZ_6_66K = 6666,
    }

    enum AccelerationRange {
        G_4 = 4,
        G_8 = 8,
        G_16 = 16,
        G_32 = 32,
    }

    enum RotationRange {
        DPS_125 = 125,
        DPS_250 = 250,
        DPS_500 = 500,
        DPS_1000 = 1000,
        DPS_2000 = 2000,
        DPS_4000 = 4000,
    }

    type GyroscopeEvent = CustomEvent<{
        acceleration: Vector;
        temperature: number;
        rotation: Vector;
    }>;

    function startGyroscope(chipset: GyroscopeChipset, address?: GyroscopeAddress): Promise<Gyroscope>;
    
    // Events (all use GyroscopeEvent) 
    // "changed": When the sensor data has changed
    interface Gyroscope extends Device<GyroscopeAddress> {
        getAcceleration(): Vector;
        getTemperature(): number;
        getRotation(): Vector; // We'll call the drivers `gyro` methods `rotation`

        getAccelerationRange(): Promise<AccelerationRange>;
        getAccelerationDataRate(): Promise<DataRate>;
        getRotationDataRate(): Promise<DataRate>;
        getRotationRange(): Promise<RotationRange>;

        setAccelerationRange(value: AccelerationRange): Promise<boolean>;
        setAccelerationDataRate(value: DataRate): Promise<boolean>;
        setRotationDataRate(value: DataRate): Promise<boolean>;
        setRotationRange(value: RotationRange): Promise<boolean>;
    }
´´´