import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Command. */
export interface ICommand {

    /** Command id */
    id?: (number|null);

    /** Command deviceCommand */
    deviceCommand?: (IDeviceCommand|null);
}

/** Properties of a DeviceCommand. */
export interface IDeviceCommand {

    /** DeviceCommand type */
    type?: (DeviceType|null);

    /** DeviceCommand address */
    address?: (number|null);

    /** DeviceCommand start */
    start?: (IStartDevice|null);

    /** DeviceCommand stop */
    stop?: (IStopDevice|null);

    /** DeviceCommand getState */
    getState?: (IGetDeviceState|null);

    /** DeviceCommand setBrightness */
    setBrightness?: (ISetBrightness|null);

    /** DeviceCommand setPixelColor */
    setPixelColor?: (ISetPixelColor|null);

    /** DeviceCommand setPixelColors */
    setPixelColors?: (ISetPixelColors|null);

    /** DeviceCommand setLength */
    setLength?: (ISetNeoDriverLength|null);

    /** DeviceCommand setAccelRange */
    setAccelRange?: (ISetAccelerationRange|null);

    /** DeviceCommand setRotRange */
    setRotRange?: (ISetRotationRange|null);

    /** DeviceCommand setAccelRate */
    setAccelRate?: (ISetAccelerationRate|null);

    /** DeviceCommand setRotRate */
    setRotRate?: (ISetRotationRate|null);

    /** DeviceCommand setPressureRate */
    setPressureRate?: (ISetPressureSensorDataRate|null);

    /** DeviceCommand setUvGain */
    setUvGain?: (ISetUVSensorGain|null);

    /** DeviceCommand setUvMode */
    setUvMode?: (ISetUVSensorMode|null);

    /** DeviceCommand setUvResolution */
    setUvResolution?: (ISetUVSensorResolution|null);

    /** DeviceCommand nfcWriteText */
    nfcWriteText?: (INFCWriteText|null);

    /** DeviceCommand nfcWriteUri */
    nfcWriteUri?: (INFCWriteUri|null);

    /** DeviceCommand nfcWriteUnabridgedUri */
    nfcWriteUnabridgedUri?: (INFCWriteUnabridgedUri|null);

    /** DeviceCommand nfcWriteSms */
    nfcWriteSms?: (INFCWriteSms|null);

    /** DeviceCommand nfcWriteEmail */
    nfcWriteEmail?: (INFCWriteEmail|null);

    /** DeviceCommand nfcWriteGeo */
    nfcWriteGeo?: (INFCWriteGeoLocation|null);

    /** DeviceCommand nfcWriteVcard */
    nfcWriteVcard?: (INFCWriteVCard|null);
}

/** Properties of a StartDevice. */
export interface IStartDevice {

    /** StartDevice gyroscopeChipset */
    gyroscopeChipset?: (GyroscopeChipset|null);

    /** StartDevice pressureSensorChipset */
    pressureSensorChipset?: (PressureSensorChipset|null);
}

/** Properties of a StopDevice. */
export interface IStopDevice {
}

/** Properties of a GetDeviceState. */
export interface IGetDeviceState {
}

/** Properties of a SetBrightness. */
export interface ISetBrightness {

    /** SetBrightness brightness */
    brightness?: (number|null);
}

/** Properties of a SetPixelColor. */
export interface ISetPixelColor {

    /** SetPixelColor index */
    index?: (number|null);

    /** SetPixelColor color */
    color?: (number|null);
}

/** Properties of a SetPixelColors. */
export interface ISetPixelColors {

    /** SetPixelColors offset */
    offset?: (number|null);

    /** SetPixelColors colors */
    colors?: (Uint8Array|null);

    /** SetPixelColors show */
    show?: (boolean|null);
}

/** Properties of a SetNeoDriverLength. */
export interface ISetNeoDriverLength {

    /** SetNeoDriverLength length */
    length?: (number|null);
}

/** Properties of a SetAccelerationRange. */
export interface ISetAccelerationRange {

    /** SetAccelerationRange range */
    range?: (AccelerationRange|null);
}

/** Properties of a SetRotationRange. */
export interface ISetRotationRange {

    /** SetRotationRange range */
    range?: (RotationRange|null);
}

/** Properties of a SetAccelerationRate. */
export interface ISetAccelerationRate {

    /** SetAccelerationRate rate */
    rate?: (DataRate|null);
}

/** Properties of a SetRotationRate. */
export interface ISetRotationRate {

    /** SetRotationRate rate */
    rate?: (DataRate|null);
}

/** Properties of a SetPressureSensorDataRate. */
export interface ISetPressureSensorDataRate {

    /** SetPressureSensorDataRate rate */
    rate?: (PressureSensorDataRate|null);
}

/** Properties of a SetUVSensorGain. */
export interface ISetUVSensorGain {

    /** SetUVSensorGain gain */
    gain?: (UVSensorGain|null);
}

/** Properties of a SetUVSensorMode. */
export interface ISetUVSensorMode {

    /** SetUVSensorMode mode */
    mode?: (UVSensorMode|null);
}

/** Properties of a SetUVSensorResolution. */
export interface ISetUVSensorResolution {

    /** SetUVSensorResolution resolution */
    resolution?: (UVSensorResolution|null);
}

/** Properties of an Error. */
export interface IError {

    /** Error message */
    message?: (string|null);
}

/** Properties of a Response. */
export interface IResponse {

    /** Response id */
    id?: (number|null);

    /** Response success */
    success?: (boolean|null);

    /** Response deviceState */
    deviceState?: (IDeviceState|null);

    /** Response deviceEvent */
    deviceEvent?: (IDeviceEvent|null);

    /** Response error */
    error?: (IError|null);
}

/** Properties of a DeviceState. */
export interface IDeviceState {

    /** DeviceState type */
    type?: (DeviceType|null);

    /** DeviceState address */
    address?: (number|null);

    /** DeviceState connected */
    connected?: (boolean|null);

    /** DeviceState co2Sensor */
    co2Sensor?: (ICO2SensorState|null);

    /** DeviceState distanceSensor */
    distanceSensor?: (IDistanceSensorState|null);

    /** DeviceState gyroscope */
    gyroscope?: (IGyroscopeState|null);

    /** DeviceState linearEncoder */
    linearEncoder?: (ILinearEncoderState|null);

    /** DeviceState neoDriver */
    neoDriver?: (INeoDriverState|null);

    /** DeviceState nfcTag */
    nfcTag?: (INFCTagState|null);

    /** DeviceState pressureSensor */
    pressureSensor?: (IPressureSensorState|null);

    /** DeviceState rfidReader */
    rfidReader?: (IRFIDReaderState|null);

    /** DeviceState rotaryEncoder */
    rotaryEncoder?: (IRotaryEncoderState|null);

    /** DeviceState trinkey */
    trinkey?: (ITrinkeyState|null);

    /** DeviceState touchSensor */
    touchSensor?: (ITouchSensorState|null);

    /** DeviceState uvSensor */
    uvSensor?: (IUVSensorState|null);
}

/** Properties of a DeviceEvent. */
export interface IDeviceEvent {

    /** DeviceEvent type */
    type?: (DeviceType|null);

    /** DeviceEvent address */
    address?: (number|null);

    /** DeviceEvent co2SensorData */
    co2SensorData?: (ICO2SensorData|null);

    /** DeviceEvent distanceSensorData */
    distanceSensorData?: (IDistanceSensorData|null);

    /** DeviceEvent gyroscopeData */
    gyroscopeData?: (IGyroscopeChanged|null);

    /** DeviceEvent linearChanged */
    linearChanged?: (ILinearEncoderChanged|null);

    /** DeviceEvent pressureSensorData */
    pressureSensorData?: (IPressureSensorData|null);

    /** DeviceEvent rfidReaderData */
    rfidReaderData?: (IRFIDReaderData|null);

    /** DeviceEvent rotaryButton */
    rotaryButton?: (IRotaryEncoderButton|null);

    /** DeviceEvent rotaryChanged */
    rotaryChanged?: (IRotaryEncoderChanged|null);

    /** DeviceEvent touchButton */
    touchButton?: (ITouchSensorButton|null);

    /** DeviceEvent uvSensorData */
    uvSensorData?: (IUVSensorData|null);
}

/** Properties of a TrinkeyState. */
export interface ITrinkeyState {

    /** TrinkeyState brightness */
    brightness?: (number|null);

    /** TrinkeyState pixel */
    pixel?: (number|null);
}

/** Properties of a NeoDriverState. */
export interface INeoDriverState {

    /** NeoDriverState brightness */
    brightness?: (number|null);

    /** NeoDriverState length */
    length?: (number|null);
}

/** Properties of a RotaryEncoderState. */
export interface IRotaryEncoderState {

    /** RotaryEncoderState brightness */
    brightness?: (number|null);

    /** RotaryEncoderState pixel */
    pixel?: (number|null);

    /** RotaryEncoderState isPressed */
    isPressed?: (boolean|null);

    /** RotaryEncoderState value */
    value?: (number|null);
}

/** Properties of a RotaryEncoderChanged. */
export interface IRotaryEncoderChanged {

    /** RotaryEncoderChanged value */
    value?: (number|null);

    /** RotaryEncoderChanged isPressed */
    isPressed?: (boolean|null);
}

/** Properties of a RotaryEncoderButton. */
export interface IRotaryEncoderButton {

    /** RotaryEncoderButton isPressed */
    isPressed?: (boolean|null);
}

/** Properties of a LinearEncoderState. */
export interface ILinearEncoderState {

    /** LinearEncoderState brightness */
    brightness?: (number|null);

    /** LinearEncoderState pixels */
    pixels?: (Uint8Array|null);

    /** LinearEncoderState value */
    value?: (number|null);
}

/** Properties of a LinearEncoderChanged. */
export interface ILinearEncoderChanged {

    /** LinearEncoderChanged value */
    value?: (number|null);
}

/** Properties of a TouchSensorState. */
export interface ITouchSensorState {

    /** TouchSensorState touchedMask */
    touchedMask?: (number|null);
}

/** Properties of a TouchSensorButton. */
export interface ITouchSensorButton {

    /** TouchSensorButton touchedMask */
    touchedMask?: (number|null);
}

/** Properties of a GyroscopeState. */
export interface IGyroscopeState {

    /** GyroscopeState accelerationX */
    accelerationX?: (number|null);

    /** GyroscopeState accelerationY */
    accelerationY?: (number|null);

    /** GyroscopeState accelerationZ */
    accelerationZ?: (number|null);

    /** GyroscopeState rotationX */
    rotationX?: (number|null);

    /** GyroscopeState rotationY */
    rotationY?: (number|null);

    /** GyroscopeState rotationZ */
    rotationZ?: (number|null);

    /** GyroscopeState temperature */
    temperature?: (number|null);

    /** GyroscopeState accelerationDataRate */
    accelerationDataRate?: (DataRate|null);

    /** GyroscopeState rotationDataRate */
    rotationDataRate?: (DataRate|null);

    /** GyroscopeState accelerationRange */
    accelerationRange?: (AccelerationRange|null);

    /** GyroscopeState rotationRange */
    rotationRange?: (RotationRange|null);
}

/** Properties of a GyroscopeChanged. */
export interface IGyroscopeChanged {

    /** GyroscopeChanged accelerationX */
    accelerationX?: (number|null);

    /** GyroscopeChanged accelerationY */
    accelerationY?: (number|null);

    /** GyroscopeChanged accelerationZ */
    accelerationZ?: (number|null);

    /** GyroscopeChanged rotationX */
    rotationX?: (number|null);

    /** GyroscopeChanged rotationY */
    rotationY?: (number|null);

    /** GyroscopeChanged rotationZ */
    rotationZ?: (number|null);

    /** GyroscopeChanged temperature */
    temperature?: (number|null);
}

/** Properties of a PressureSensorState. */
export interface IPressureSensorState {

    /** PressureSensorState pressure */
    pressure?: (number|null);

    /** PressureSensorState temperature */
    temperature?: (number|null);

    /** PressureSensorState dataRate */
    dataRate?: (PressureSensorDataRate|null);
}

/** Properties of a PressureSensorData. */
export interface IPressureSensorData {

    /** PressureSensorData pressure */
    pressure?: (number|null);

    /** PressureSensorData temperature */
    temperature?: (number|null);
}

/** Properties of a CO2SensorState. */
export interface ICO2SensorState {

    /** CO2SensorState co2 */
    co2?: (number|null);

    /** CO2SensorState humidity */
    humidity?: (number|null);

    /** CO2SensorState temperature */
    temperature?: (number|null);
}

/** Properties of a CO2SensorData. */
export interface ICO2SensorData {

    /** CO2SensorData co2 */
    co2?: (number|null);

    /** CO2SensorData humidity */
    humidity?: (number|null);

    /** CO2SensorData temperature */
    temperature?: (number|null);
}

/** Properties of a DistanceSensorState. */
export interface IDistanceSensorState {

    /** DistanceSensorState distance */
    distance?: (number|null);
}

/** Properties of a DistanceSensorData. */
export interface IDistanceSensorData {

    /** DistanceSensorData distance */
    distance?: (number|null);
}

/** Properties of a UVSensorState. */
export interface IUVSensorState {

    /** UVSensorState value */
    value?: (number|null);

    /** UVSensorState mode */
    mode?: (UVSensorMode|null);

    /** UVSensorState gain */
    gain?: (UVSensorGain|null);

    /** UVSensorState resolution */
    resolution?: (UVSensorResolution|null);
}

/** Properties of a UVSensorData. */
export interface IUVSensorData {

    /** UVSensorData value */
    value?: (number|null);
}

/** Properties of a NFCTagState. */
export interface INFCTagState {

    /** NFCTagState recordType */
    recordType?: (NFCRecordType|null);

    /** NFCTagState information */
    information?: (string|null);

    /** NFCTagState text */
    text?: (string|null);

    /** NFCTagState language */
    language?: (string|null);

    /** NFCTagState uri */
    uri?: (string|null);

    /** NFCTagState protocol */
    protocol?: (string|null);

    /** NFCTagState phoneNumber */
    phoneNumber?: (string|null);

    /** NFCTagState smsMessage */
    smsMessage?: (string|null);

    /** NFCTagState emailAddress */
    emailAddress?: (string|null);

    /** NFCTagState subject */
    subject?: (string|null);

    /** NFCTagState emailMessage */
    emailMessage?: (string|null);

    /** NFCTagState latitude */
    latitude?: (number|null);

    /** NFCTagState longitude */
    longitude?: (number|null);

    /** NFCTagState vcardFirstName */
    vcardFirstName?: (string|null);

    /** NFCTagState vcardName */
    vcardName?: (string|null);

    /** NFCTagState vcardTitle */
    vcardTitle?: (string|null);

    /** NFCTagState vcardOrganization */
    vcardOrganization?: (string|null);

    /** NFCTagState vcardEmail */
    vcardEmail?: (string|null);

    /** NFCTagState vcardHomeEmail */
    vcardHomeEmail?: (string|null);

    /** NFCTagState vcardWorkEmail */
    vcardWorkEmail?: (string|null);

    /** NFCTagState vcardCellularPhone */
    vcardCellularPhone?: (string|null);

    /** NFCTagState vcardHomePhone */
    vcardHomePhone?: (string|null);

    /** NFCTagState vcardWorkPhone */
    vcardWorkPhone?: (string|null);

    /** NFCTagState vcardAddress */
    vcardAddress?: (string|null);

    /** NFCTagState vcardHomeAddress */
    vcardHomeAddress?: (string|null);

    /** NFCTagState vcardWorkAddress */
    vcardWorkAddress?: (string|null);

    /** NFCTagState vcardUrl */
    vcardUrl?: (string|null);
}

/** Properties of a NFCWriteText. */
export interface INFCWriteText {

    /** NFCWriteText text */
    text?: (string|null);

    /** NFCWriteText language */
    language?: (string|null);
}

/** Properties of a NFCWriteUri. */
export interface INFCWriteUri {

    /** NFCWriteUri protocol */
    protocol?: (string|null);

    /** NFCWriteUri uri */
    uri?: (string|null);

    /** NFCWriteUri information */
    information?: (string|null);
}

/** Properties of a NFCWriteUnabridgedUri. */
export interface INFCWriteUnabridgedUri {

    /** NFCWriteUnabridgedUri uri */
    uri?: (string|null);

    /** NFCWriteUnabridgedUri information */
    information?: (string|null);
}

/** Properties of a NFCWriteSms. */
export interface INFCWriteSms {

    /** NFCWriteSms phoneNumber */
    phoneNumber?: (string|null);

    /** NFCWriteSms message */
    message?: (string|null);

    /** NFCWriteSms information */
    information?: (string|null);
}

/** Properties of a NFCWriteEmail. */
export interface INFCWriteEmail {

    /** NFCWriteEmail email */
    email?: (string|null);

    /** NFCWriteEmail subject */
    subject?: (string|null);

    /** NFCWriteEmail message */
    message?: (string|null);

    /** NFCWriteEmail information */
    information?: (string|null);
}

/** Properties of a NFCWriteGeoLocation. */
export interface INFCWriteGeoLocation {

    /** NFCWriteGeoLocation latitude */
    latitude?: (number|null);

    /** NFCWriteGeoLocation longitude */
    longitude?: (number|null);

    /** NFCWriteGeoLocation information */
    information?: (string|null);
}

/** Properties of a NFCWriteVCard. */
export interface INFCWriteVCard {

    /** NFCWriteVCard firstName */
    firstName?: (string|null);

    /** NFCWriteVCard name */
    name?: (string|null);

    /** NFCWriteVCard title */
    title?: (string|null);

    /** NFCWriteVCard organization */
    organization?: (string|null);

    /** NFCWriteVCard email */
    email?: (string|null);

    /** NFCWriteVCard homeEmail */
    homeEmail?: (string|null);

    /** NFCWriteVCard workEmail */
    workEmail?: (string|null);

    /** NFCWriteVCard cellularPhone */
    cellularPhone?: (string|null);

    /** NFCWriteVCard homePhone */
    homePhone?: (string|null);

    /** NFCWriteVCard workPhone */
    workPhone?: (string|null);

    /** NFCWriteVCard address */
    address?: (string|null);

    /** NFCWriteVCard homeAddress */
    homeAddress?: (string|null);

    /** NFCWriteVCard workAddress */
    workAddress?: (string|null);

    /** NFCWriteVCard url */
    url?: (string|null);
}

/** Properties of a RFIDReaderState. */
export interface IRFIDReaderState {

    /** RFIDReaderState tagId */
    tagId?: (string|null);
}

/** Properties of a RFIDReaderData. */
export interface IRFIDReaderData {

    /** RFIDReaderData tagId */
    tagId?: (string|null);
}

/** Represents a Command. */
export class Command implements ICommand {

    /**
     * Constructs a new Command.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICommand);

    /** Command id. */
    public id: number;

    /** Command deviceCommand. */
    public deviceCommand?: (IDeviceCommand|null);

    /** Command payload. */
    public payload?: "deviceCommand";

    /**
     * Creates a new Command instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Command instance
     */
    public static create(properties?: ICommand): Command;

    /**
     * Encodes the specified Command message. Does not implicitly {@link Command.verify|verify} messages.
     * @param message Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Command message, length delimited. Does not implicitly {@link Command.verify|verify} messages.
     * @param message Command message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Command message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Command;

    /**
     * Decodes a Command message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Command;

    /**
     * Verifies a Command message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Command message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Command
     */
    public static fromObject(object: { [k: string]: any }): Command;

    /**
     * Creates a plain object from a Command message. Also converts values to other types if specified.
     * @param message Command
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Command, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Command to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Command
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DeviceCommand. */
export class DeviceCommand implements IDeviceCommand {

    /**
     * Constructs a new DeviceCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceCommand);

    /** DeviceCommand type. */
    public type: DeviceType;

    /** DeviceCommand address. */
    public address: number;

    /** DeviceCommand start. */
    public start?: (IStartDevice|null);

    /** DeviceCommand stop. */
    public stop?: (IStopDevice|null);

    /** DeviceCommand getState. */
    public getState?: (IGetDeviceState|null);

    /** DeviceCommand setBrightness. */
    public setBrightness?: (ISetBrightness|null);

    /** DeviceCommand setPixelColor. */
    public setPixelColor?: (ISetPixelColor|null);

    /** DeviceCommand setPixelColors. */
    public setPixelColors?: (ISetPixelColors|null);

    /** DeviceCommand setLength. */
    public setLength?: (ISetNeoDriverLength|null);

    /** DeviceCommand setAccelRange. */
    public setAccelRange?: (ISetAccelerationRange|null);

    /** DeviceCommand setRotRange. */
    public setRotRange?: (ISetRotationRange|null);

    /** DeviceCommand setAccelRate. */
    public setAccelRate?: (ISetAccelerationRate|null);

    /** DeviceCommand setRotRate. */
    public setRotRate?: (ISetRotationRate|null);

    /** DeviceCommand setPressureRate. */
    public setPressureRate?: (ISetPressureSensorDataRate|null);

    /** DeviceCommand setUvGain. */
    public setUvGain?: (ISetUVSensorGain|null);

    /** DeviceCommand setUvMode. */
    public setUvMode?: (ISetUVSensorMode|null);

    /** DeviceCommand setUvResolution. */
    public setUvResolution?: (ISetUVSensorResolution|null);

    /** DeviceCommand nfcWriteText. */
    public nfcWriteText?: (INFCWriteText|null);

    /** DeviceCommand nfcWriteUri. */
    public nfcWriteUri?: (INFCWriteUri|null);

    /** DeviceCommand nfcWriteUnabridgedUri. */
    public nfcWriteUnabridgedUri?: (INFCWriteUnabridgedUri|null);

    /** DeviceCommand nfcWriteSms. */
    public nfcWriteSms?: (INFCWriteSms|null);

    /** DeviceCommand nfcWriteEmail. */
    public nfcWriteEmail?: (INFCWriteEmail|null);

    /** DeviceCommand nfcWriteGeo. */
    public nfcWriteGeo?: (INFCWriteGeoLocation|null);

    /** DeviceCommand nfcWriteVcard. */
    public nfcWriteVcard?: (INFCWriteVCard|null);

    /** DeviceCommand payload. */
    public payload?: ("start"|"stop"|"getState"|"setBrightness"|"setPixelColor"|"setPixelColors"|"setLength"|"setAccelRange"|"setRotRange"|"setAccelRate"|"setRotRate"|"setPressureRate"|"setUvGain"|"setUvMode"|"setUvResolution"|"nfcWriteText"|"nfcWriteUri"|"nfcWriteUnabridgedUri"|"nfcWriteSms"|"nfcWriteEmail"|"nfcWriteGeo"|"nfcWriteVcard");

    /**
     * Creates a new DeviceCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceCommand instance
     */
    public static create(properties?: IDeviceCommand): DeviceCommand;

    /**
     * Encodes the specified DeviceCommand message. Does not implicitly {@link DeviceCommand.verify|verify} messages.
     * @param message DeviceCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceCommand message, length delimited. Does not implicitly {@link DeviceCommand.verify|verify} messages.
     * @param message DeviceCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceCommand;

    /**
     * Decodes a DeviceCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceCommand;

    /**
     * Verifies a DeviceCommand message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceCommand
     */
    public static fromObject(object: { [k: string]: any }): DeviceCommand;

    /**
     * Creates a plain object from a DeviceCommand message. Also converts values to other types if specified.
     * @param message DeviceCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceCommand to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceCommand
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a StartDevice. */
export class StartDevice implements IStartDevice {

    /**
     * Constructs a new StartDevice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStartDevice);

    /** StartDevice gyroscopeChipset. */
    public gyroscopeChipset: GyroscopeChipset;

    /** StartDevice pressureSensorChipset. */
    public pressureSensorChipset: PressureSensorChipset;

    /**
     * Creates a new StartDevice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StartDevice instance
     */
    public static create(properties?: IStartDevice): StartDevice;

    /**
     * Encodes the specified StartDevice message. Does not implicitly {@link StartDevice.verify|verify} messages.
     * @param message StartDevice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStartDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StartDevice message, length delimited. Does not implicitly {@link StartDevice.verify|verify} messages.
     * @param message StartDevice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStartDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StartDevice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StartDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StartDevice;

    /**
     * Decodes a StartDevice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StartDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StartDevice;

    /**
     * Verifies a StartDevice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StartDevice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StartDevice
     */
    public static fromObject(object: { [k: string]: any }): StartDevice;

    /**
     * Creates a plain object from a StartDevice message. Also converts values to other types if specified.
     * @param message StartDevice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StartDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StartDevice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for StartDevice
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a StopDevice. */
export class StopDevice implements IStopDevice {

    /**
     * Constructs a new StopDevice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStopDevice);

    /**
     * Creates a new StopDevice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns StopDevice instance
     */
    public static create(properties?: IStopDevice): StopDevice;

    /**
     * Encodes the specified StopDevice message. Does not implicitly {@link StopDevice.verify|verify} messages.
     * @param message StopDevice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStopDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified StopDevice message, length delimited. Does not implicitly {@link StopDevice.verify|verify} messages.
     * @param message StopDevice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStopDevice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a StopDevice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns StopDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): StopDevice;

    /**
     * Decodes a StopDevice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns StopDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): StopDevice;

    /**
     * Verifies a StopDevice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a StopDevice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns StopDevice
     */
    public static fromObject(object: { [k: string]: any }): StopDevice;

    /**
     * Creates a plain object from a StopDevice message. Also converts values to other types if specified.
     * @param message StopDevice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: StopDevice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this StopDevice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for StopDevice
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GetDeviceState. */
export class GetDeviceState implements IGetDeviceState {

    /**
     * Constructs a new GetDeviceState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetDeviceState);

    /**
     * Creates a new GetDeviceState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetDeviceState instance
     */
    public static create(properties?: IGetDeviceState): GetDeviceState;

    /**
     * Encodes the specified GetDeviceState message. Does not implicitly {@link GetDeviceState.verify|verify} messages.
     * @param message GetDeviceState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetDeviceState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetDeviceState message, length delimited. Does not implicitly {@link GetDeviceState.verify|verify} messages.
     * @param message GetDeviceState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetDeviceState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetDeviceState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetDeviceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetDeviceState;

    /**
     * Decodes a GetDeviceState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetDeviceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetDeviceState;

    /**
     * Verifies a GetDeviceState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetDeviceState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetDeviceState
     */
    public static fromObject(object: { [k: string]: any }): GetDeviceState;

    /**
     * Creates a plain object from a GetDeviceState message. Also converts values to other types if specified.
     * @param message GetDeviceState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetDeviceState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetDeviceState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetDeviceState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SetBrightness. */
export class SetBrightness implements ISetBrightness {

    /**
     * Constructs a new SetBrightness.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetBrightness);

    /** SetBrightness brightness. */
    public brightness: number;

    /**
     * Creates a new SetBrightness instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetBrightness instance
     */
    public static create(properties?: ISetBrightness): SetBrightness;

    /**
     * Encodes the specified SetBrightness message. Does not implicitly {@link SetBrightness.verify|verify} messages.
     * @param message SetBrightness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetBrightness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetBrightness message, length delimited. Does not implicitly {@link SetBrightness.verify|verify} messages.
     * @param message SetBrightness message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetBrightness, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetBrightness message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetBrightness;

    /**
     * Decodes a SetBrightness message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetBrightness;

    /**
     * Verifies a SetBrightness message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetBrightness message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetBrightness
     */
    public static fromObject(object: { [k: string]: any }): SetBrightness;

    /**
     * Creates a plain object from a SetBrightness message. Also converts values to other types if specified.
     * @param message SetBrightness
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetBrightness, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetBrightness to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetBrightness
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SetPixelColor. */
export class SetPixelColor implements ISetPixelColor {

    /**
     * Constructs a new SetPixelColor.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetPixelColor);

    /** SetPixelColor index. */
    public index: number;

    /** SetPixelColor color. */
    public color: number;

    /**
     * Creates a new SetPixelColor instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetPixelColor instance
     */
    public static create(properties?: ISetPixelColor): SetPixelColor;

    /**
     * Encodes the specified SetPixelColor message. Does not implicitly {@link SetPixelColor.verify|verify} messages.
     * @param message SetPixelColor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetPixelColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetPixelColor message, length delimited. Does not implicitly {@link SetPixelColor.verify|verify} messages.
     * @param message SetPixelColor message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetPixelColor, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetPixelColor message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetPixelColor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetPixelColor;

    /**
     * Decodes a SetPixelColor message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetPixelColor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetPixelColor;

    /**
     * Verifies a SetPixelColor message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetPixelColor message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetPixelColor
     */
    public static fromObject(object: { [k: string]: any }): SetPixelColor;

    /**
     * Creates a plain object from a SetPixelColor message. Also converts values to other types if specified.
     * @param message SetPixelColor
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetPixelColor, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetPixelColor to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetPixelColor
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SetPixelColors. */
export class SetPixelColors implements ISetPixelColors {

    /**
     * Constructs a new SetPixelColors.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetPixelColors);

    /** SetPixelColors offset. */
    public offset: number;

    /** SetPixelColors colors. */
    public colors: Uint8Array;

    /** SetPixelColors show. */
    public show: boolean;

    /**
     * Creates a new SetPixelColors instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetPixelColors instance
     */
    public static create(properties?: ISetPixelColors): SetPixelColors;

    /**
     * Encodes the specified SetPixelColors message. Does not implicitly {@link SetPixelColors.verify|verify} messages.
     * @param message SetPixelColors message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetPixelColors, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetPixelColors message, length delimited. Does not implicitly {@link SetPixelColors.verify|verify} messages.
     * @param message SetPixelColors message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetPixelColors, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetPixelColors message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetPixelColors
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetPixelColors;

    /**
     * Decodes a SetPixelColors message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetPixelColors
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetPixelColors;

    /**
     * Verifies a SetPixelColors message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetPixelColors message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetPixelColors
     */
    public static fromObject(object: { [k: string]: any }): SetPixelColors;

    /**
     * Creates a plain object from a SetPixelColors message. Also converts values to other types if specified.
     * @param message SetPixelColors
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetPixelColors, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetPixelColors to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetPixelColors
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SetNeoDriverLength. */
export class SetNeoDriverLength implements ISetNeoDriverLength {

    /**
     * Constructs a new SetNeoDriverLength.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetNeoDriverLength);

    /** SetNeoDriverLength length. */
    public length: number;

    /**
     * Creates a new SetNeoDriverLength instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetNeoDriverLength instance
     */
    public static create(properties?: ISetNeoDriverLength): SetNeoDriverLength;

    /**
     * Encodes the specified SetNeoDriverLength message. Does not implicitly {@link SetNeoDriverLength.verify|verify} messages.
     * @param message SetNeoDriverLength message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetNeoDriverLength, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetNeoDriverLength message, length delimited. Does not implicitly {@link SetNeoDriverLength.verify|verify} messages.
     * @param message SetNeoDriverLength message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetNeoDriverLength, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetNeoDriverLength message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetNeoDriverLength
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetNeoDriverLength;

    /**
     * Decodes a SetNeoDriverLength message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetNeoDriverLength
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetNeoDriverLength;

    /**
     * Verifies a SetNeoDriverLength message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetNeoDriverLength message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetNeoDriverLength
     */
    public static fromObject(object: { [k: string]: any }): SetNeoDriverLength;

    /**
     * Creates a plain object from a SetNeoDriverLength message. Also converts values to other types if specified.
     * @param message SetNeoDriverLength
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetNeoDriverLength, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetNeoDriverLength to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetNeoDriverLength
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SetAccelerationRange. */
export class SetAccelerationRange implements ISetAccelerationRange {

    /**
     * Constructs a new SetAccelerationRange.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetAccelerationRange);

    /** SetAccelerationRange range. */
    public range: AccelerationRange;

    /**
     * Creates a new SetAccelerationRange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetAccelerationRange instance
     */
    public static create(properties?: ISetAccelerationRange): SetAccelerationRange;

    /**
     * Encodes the specified SetAccelerationRange message. Does not implicitly {@link SetAccelerationRange.verify|verify} messages.
     * @param message SetAccelerationRange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetAccelerationRange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetAccelerationRange message, length delimited. Does not implicitly {@link SetAccelerationRange.verify|verify} messages.
     * @param message SetAccelerationRange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetAccelerationRange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetAccelerationRange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetAccelerationRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetAccelerationRange;

    /**
     * Decodes a SetAccelerationRange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetAccelerationRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetAccelerationRange;

    /**
     * Verifies a SetAccelerationRange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetAccelerationRange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetAccelerationRange
     */
    public static fromObject(object: { [k: string]: any }): SetAccelerationRange;

    /**
     * Creates a plain object from a SetAccelerationRange message. Also converts values to other types if specified.
     * @param message SetAccelerationRange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetAccelerationRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetAccelerationRange to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetAccelerationRange
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SetRotationRange. */
export class SetRotationRange implements ISetRotationRange {

    /**
     * Constructs a new SetRotationRange.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetRotationRange);

    /** SetRotationRange range. */
    public range: RotationRange;

    /**
     * Creates a new SetRotationRange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetRotationRange instance
     */
    public static create(properties?: ISetRotationRange): SetRotationRange;

    /**
     * Encodes the specified SetRotationRange message. Does not implicitly {@link SetRotationRange.verify|verify} messages.
     * @param message SetRotationRange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetRotationRange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetRotationRange message, length delimited. Does not implicitly {@link SetRotationRange.verify|verify} messages.
     * @param message SetRotationRange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetRotationRange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetRotationRange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetRotationRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetRotationRange;

    /**
     * Decodes a SetRotationRange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetRotationRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetRotationRange;

    /**
     * Verifies a SetRotationRange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetRotationRange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetRotationRange
     */
    public static fromObject(object: { [k: string]: any }): SetRotationRange;

    /**
     * Creates a plain object from a SetRotationRange message. Also converts values to other types if specified.
     * @param message SetRotationRange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetRotationRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetRotationRange to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetRotationRange
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SetAccelerationRate. */
export class SetAccelerationRate implements ISetAccelerationRate {

    /**
     * Constructs a new SetAccelerationRate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetAccelerationRate);

    /** SetAccelerationRate rate. */
    public rate: DataRate;

    /**
     * Creates a new SetAccelerationRate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetAccelerationRate instance
     */
    public static create(properties?: ISetAccelerationRate): SetAccelerationRate;

    /**
     * Encodes the specified SetAccelerationRate message. Does not implicitly {@link SetAccelerationRate.verify|verify} messages.
     * @param message SetAccelerationRate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetAccelerationRate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetAccelerationRate message, length delimited. Does not implicitly {@link SetAccelerationRate.verify|verify} messages.
     * @param message SetAccelerationRate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetAccelerationRate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetAccelerationRate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetAccelerationRate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetAccelerationRate;

    /**
     * Decodes a SetAccelerationRate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetAccelerationRate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetAccelerationRate;

    /**
     * Verifies a SetAccelerationRate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetAccelerationRate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetAccelerationRate
     */
    public static fromObject(object: { [k: string]: any }): SetAccelerationRate;

    /**
     * Creates a plain object from a SetAccelerationRate message. Also converts values to other types if specified.
     * @param message SetAccelerationRate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetAccelerationRate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetAccelerationRate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetAccelerationRate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SetRotationRate. */
export class SetRotationRate implements ISetRotationRate {

    /**
     * Constructs a new SetRotationRate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetRotationRate);

    /** SetRotationRate rate. */
    public rate: DataRate;

    /**
     * Creates a new SetRotationRate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetRotationRate instance
     */
    public static create(properties?: ISetRotationRate): SetRotationRate;

    /**
     * Encodes the specified SetRotationRate message. Does not implicitly {@link SetRotationRate.verify|verify} messages.
     * @param message SetRotationRate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetRotationRate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetRotationRate message, length delimited. Does not implicitly {@link SetRotationRate.verify|verify} messages.
     * @param message SetRotationRate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetRotationRate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetRotationRate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetRotationRate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetRotationRate;

    /**
     * Decodes a SetRotationRate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetRotationRate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetRotationRate;

    /**
     * Verifies a SetRotationRate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetRotationRate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetRotationRate
     */
    public static fromObject(object: { [k: string]: any }): SetRotationRate;

    /**
     * Creates a plain object from a SetRotationRate message. Also converts values to other types if specified.
     * @param message SetRotationRate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetRotationRate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetRotationRate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetRotationRate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SetPressureSensorDataRate. */
export class SetPressureSensorDataRate implements ISetPressureSensorDataRate {

    /**
     * Constructs a new SetPressureSensorDataRate.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetPressureSensorDataRate);

    /** SetPressureSensorDataRate rate. */
    public rate: PressureSensorDataRate;

    /**
     * Creates a new SetPressureSensorDataRate instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetPressureSensorDataRate instance
     */
    public static create(properties?: ISetPressureSensorDataRate): SetPressureSensorDataRate;

    /**
     * Encodes the specified SetPressureSensorDataRate message. Does not implicitly {@link SetPressureSensorDataRate.verify|verify} messages.
     * @param message SetPressureSensorDataRate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetPressureSensorDataRate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetPressureSensorDataRate message, length delimited. Does not implicitly {@link SetPressureSensorDataRate.verify|verify} messages.
     * @param message SetPressureSensorDataRate message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetPressureSensorDataRate, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetPressureSensorDataRate message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetPressureSensorDataRate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetPressureSensorDataRate;

    /**
     * Decodes a SetPressureSensorDataRate message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetPressureSensorDataRate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetPressureSensorDataRate;

    /**
     * Verifies a SetPressureSensorDataRate message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetPressureSensorDataRate message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetPressureSensorDataRate
     */
    public static fromObject(object: { [k: string]: any }): SetPressureSensorDataRate;

    /**
     * Creates a plain object from a SetPressureSensorDataRate message. Also converts values to other types if specified.
     * @param message SetPressureSensorDataRate
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetPressureSensorDataRate, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetPressureSensorDataRate to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetPressureSensorDataRate
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SetUVSensorGain. */
export class SetUVSensorGain implements ISetUVSensorGain {

    /**
     * Constructs a new SetUVSensorGain.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetUVSensorGain);

    /** SetUVSensorGain gain. */
    public gain: UVSensorGain;

    /**
     * Creates a new SetUVSensorGain instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetUVSensorGain instance
     */
    public static create(properties?: ISetUVSensorGain): SetUVSensorGain;

    /**
     * Encodes the specified SetUVSensorGain message. Does not implicitly {@link SetUVSensorGain.verify|verify} messages.
     * @param message SetUVSensorGain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetUVSensorGain, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetUVSensorGain message, length delimited. Does not implicitly {@link SetUVSensorGain.verify|verify} messages.
     * @param message SetUVSensorGain message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetUVSensorGain, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetUVSensorGain message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetUVSensorGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetUVSensorGain;

    /**
     * Decodes a SetUVSensorGain message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetUVSensorGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetUVSensorGain;

    /**
     * Verifies a SetUVSensorGain message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetUVSensorGain message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetUVSensorGain
     */
    public static fromObject(object: { [k: string]: any }): SetUVSensorGain;

    /**
     * Creates a plain object from a SetUVSensorGain message. Also converts values to other types if specified.
     * @param message SetUVSensorGain
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetUVSensorGain, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetUVSensorGain to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetUVSensorGain
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SetUVSensorMode. */
export class SetUVSensorMode implements ISetUVSensorMode {

    /**
     * Constructs a new SetUVSensorMode.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetUVSensorMode);

    /** SetUVSensorMode mode. */
    public mode: UVSensorMode;

    /**
     * Creates a new SetUVSensorMode instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetUVSensorMode instance
     */
    public static create(properties?: ISetUVSensorMode): SetUVSensorMode;

    /**
     * Encodes the specified SetUVSensorMode message. Does not implicitly {@link SetUVSensorMode.verify|verify} messages.
     * @param message SetUVSensorMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetUVSensorMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetUVSensorMode message, length delimited. Does not implicitly {@link SetUVSensorMode.verify|verify} messages.
     * @param message SetUVSensorMode message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetUVSensorMode, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetUVSensorMode message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetUVSensorMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetUVSensorMode;

    /**
     * Decodes a SetUVSensorMode message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetUVSensorMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetUVSensorMode;

    /**
     * Verifies a SetUVSensorMode message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetUVSensorMode message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetUVSensorMode
     */
    public static fromObject(object: { [k: string]: any }): SetUVSensorMode;

    /**
     * Creates a plain object from a SetUVSensorMode message. Also converts values to other types if specified.
     * @param message SetUVSensorMode
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetUVSensorMode, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetUVSensorMode to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetUVSensorMode
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SetUVSensorResolution. */
export class SetUVSensorResolution implements ISetUVSensorResolution {

    /**
     * Constructs a new SetUVSensorResolution.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetUVSensorResolution);

    /** SetUVSensorResolution resolution. */
    public resolution: UVSensorResolution;

    /**
     * Creates a new SetUVSensorResolution instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetUVSensorResolution instance
     */
    public static create(properties?: ISetUVSensorResolution): SetUVSensorResolution;

    /**
     * Encodes the specified SetUVSensorResolution message. Does not implicitly {@link SetUVSensorResolution.verify|verify} messages.
     * @param message SetUVSensorResolution message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetUVSensorResolution, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetUVSensorResolution message, length delimited. Does not implicitly {@link SetUVSensorResolution.verify|verify} messages.
     * @param message SetUVSensorResolution message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetUVSensorResolution, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetUVSensorResolution message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetUVSensorResolution
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetUVSensorResolution;

    /**
     * Decodes a SetUVSensorResolution message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetUVSensorResolution
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetUVSensorResolution;

    /**
     * Verifies a SetUVSensorResolution message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetUVSensorResolution message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetUVSensorResolution
     */
    public static fromObject(object: { [k: string]: any }): SetUVSensorResolution;

    /**
     * Creates a plain object from a SetUVSensorResolution message. Also converts values to other types if specified.
     * @param message SetUVSensorResolution
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetUVSensorResolution, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetUVSensorResolution to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetUVSensorResolution
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an Error. */
export class Error implements IError {

    /**
     * Constructs a new Error.
     * @param [properties] Properties to set
     */
    constructor(properties?: IError);

    /** Error message. */
    public message: string;

    /**
     * Creates a new Error instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Error instance
     */
    public static create(properties?: IError): Error;

    /**
     * Encodes the specified Error message. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Error message, length delimited. Does not implicitly {@link Error.verify|verify} messages.
     * @param message Error message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IError, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Error message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Error;

    /**
     * Decodes an Error message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Error
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Error;

    /**
     * Verifies an Error message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an Error message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Error
     */
    public static fromObject(object: { [k: string]: any }): Error;

    /**
     * Creates a plain object from an Error message. Also converts values to other types if specified.
     * @param message Error
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Error, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Error to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Error
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Response. */
export class Response implements IResponse {

    /**
     * Constructs a new Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResponse);

    /** Response id. */
    public id: number;

    /** Response success. */
    public success: boolean;

    /** Response deviceState. */
    public deviceState?: (IDeviceState|null);

    /** Response deviceEvent. */
    public deviceEvent?: (IDeviceEvent|null);

    /** Response error. */
    public error?: (IError|null);

    /** Response payload. */
    public payload?: ("deviceState"|"deviceEvent"|"error");

    /**
     * Creates a new Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Response instance
     */
    public static create(properties?: IResponse): Response;

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @param message Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Response;

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Response;

    /**
     * Verifies a Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Response
     */
    public static fromObject(object: { [k: string]: any }): Response;

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @param message Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DeviceState. */
export class DeviceState implements IDeviceState {

    /**
     * Constructs a new DeviceState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceState);

    /** DeviceState type. */
    public type: DeviceType;

    /** DeviceState address. */
    public address: number;

    /** DeviceState connected. */
    public connected: boolean;

    /** DeviceState co2Sensor. */
    public co2Sensor?: (ICO2SensorState|null);

    /** DeviceState distanceSensor. */
    public distanceSensor?: (IDistanceSensorState|null);

    /** DeviceState gyroscope. */
    public gyroscope?: (IGyroscopeState|null);

    /** DeviceState linearEncoder. */
    public linearEncoder?: (ILinearEncoderState|null);

    /** DeviceState neoDriver. */
    public neoDriver?: (INeoDriverState|null);

    /** DeviceState nfcTag. */
    public nfcTag?: (INFCTagState|null);

    /** DeviceState pressureSensor. */
    public pressureSensor?: (IPressureSensorState|null);

    /** DeviceState rfidReader. */
    public rfidReader?: (IRFIDReaderState|null);

    /** DeviceState rotaryEncoder. */
    public rotaryEncoder?: (IRotaryEncoderState|null);

    /** DeviceState trinkey. */
    public trinkey?: (ITrinkeyState|null);

    /** DeviceState touchSensor. */
    public touchSensor?: (ITouchSensorState|null);

    /** DeviceState uvSensor. */
    public uvSensor?: (IUVSensorState|null);

    /** DeviceState state. */
    public state?: ("co2Sensor"|"distanceSensor"|"gyroscope"|"linearEncoder"|"neoDriver"|"nfcTag"|"pressureSensor"|"rfidReader"|"rotaryEncoder"|"trinkey"|"touchSensor"|"uvSensor");

    /**
     * Creates a new DeviceState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceState instance
     */
    public static create(properties?: IDeviceState): DeviceState;

    /**
     * Encodes the specified DeviceState message. Does not implicitly {@link DeviceState.verify|verify} messages.
     * @param message DeviceState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceState message, length delimited. Does not implicitly {@link DeviceState.verify|verify} messages.
     * @param message DeviceState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceState;

    /**
     * Decodes a DeviceState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceState;

    /**
     * Verifies a DeviceState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceState
     */
    public static fromObject(object: { [k: string]: any }): DeviceState;

    /**
     * Creates a plain object from a DeviceState message. Also converts values to other types if specified.
     * @param message DeviceState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DeviceEvent. */
export class DeviceEvent implements IDeviceEvent {

    /**
     * Constructs a new DeviceEvent.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDeviceEvent);

    /** DeviceEvent type. */
    public type: DeviceType;

    /** DeviceEvent address. */
    public address: number;

    /** DeviceEvent co2SensorData. */
    public co2SensorData?: (ICO2SensorData|null);

    /** DeviceEvent distanceSensorData. */
    public distanceSensorData?: (IDistanceSensorData|null);

    /** DeviceEvent gyroscopeData. */
    public gyroscopeData?: (IGyroscopeChanged|null);

    /** DeviceEvent linearChanged. */
    public linearChanged?: (ILinearEncoderChanged|null);

    /** DeviceEvent pressureSensorData. */
    public pressureSensorData?: (IPressureSensorData|null);

    /** DeviceEvent rfidReaderData. */
    public rfidReaderData?: (IRFIDReaderData|null);

    /** DeviceEvent rotaryButton. */
    public rotaryButton?: (IRotaryEncoderButton|null);

    /** DeviceEvent rotaryChanged. */
    public rotaryChanged?: (IRotaryEncoderChanged|null);

    /** DeviceEvent touchButton. */
    public touchButton?: (ITouchSensorButton|null);

    /** DeviceEvent uvSensorData. */
    public uvSensorData?: (IUVSensorData|null);

    /** DeviceEvent event. */
    public event?: ("co2SensorData"|"distanceSensorData"|"gyroscopeData"|"linearChanged"|"pressureSensorData"|"rfidReaderData"|"rotaryButton"|"rotaryChanged"|"touchButton"|"uvSensorData");

    /**
     * Creates a new DeviceEvent instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DeviceEvent instance
     */
    public static create(properties?: IDeviceEvent): DeviceEvent;

    /**
     * Encodes the specified DeviceEvent message. Does not implicitly {@link DeviceEvent.verify|verify} messages.
     * @param message DeviceEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDeviceEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DeviceEvent message, length delimited. Does not implicitly {@link DeviceEvent.verify|verify} messages.
     * @param message DeviceEvent message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDeviceEvent, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DeviceEvent message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DeviceEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DeviceEvent;

    /**
     * Decodes a DeviceEvent message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DeviceEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DeviceEvent;

    /**
     * Verifies a DeviceEvent message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DeviceEvent message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DeviceEvent
     */
    public static fromObject(object: { [k: string]: any }): DeviceEvent;

    /**
     * Creates a plain object from a DeviceEvent message. Also converts values to other types if specified.
     * @param message DeviceEvent
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DeviceEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DeviceEvent to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DeviceEvent
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TrinkeyState. */
export class TrinkeyState implements ITrinkeyState {

    /**
     * Constructs a new TrinkeyState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITrinkeyState);

    /** TrinkeyState brightness. */
    public brightness: number;

    /** TrinkeyState pixel. */
    public pixel: number;

    /**
     * Creates a new TrinkeyState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TrinkeyState instance
     */
    public static create(properties?: ITrinkeyState): TrinkeyState;

    /**
     * Encodes the specified TrinkeyState message. Does not implicitly {@link TrinkeyState.verify|verify} messages.
     * @param message TrinkeyState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITrinkeyState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TrinkeyState message, length delimited. Does not implicitly {@link TrinkeyState.verify|verify} messages.
     * @param message TrinkeyState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITrinkeyState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TrinkeyState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TrinkeyState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TrinkeyState;

    /**
     * Decodes a TrinkeyState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TrinkeyState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TrinkeyState;

    /**
     * Verifies a TrinkeyState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TrinkeyState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TrinkeyState
     */
    public static fromObject(object: { [k: string]: any }): TrinkeyState;

    /**
     * Creates a plain object from a TrinkeyState message. Also converts values to other types if specified.
     * @param message TrinkeyState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TrinkeyState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TrinkeyState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TrinkeyState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NeoDriverState. */
export class NeoDriverState implements INeoDriverState {

    /**
     * Constructs a new NeoDriverState.
     * @param [properties] Properties to set
     */
    constructor(properties?: INeoDriverState);

    /** NeoDriverState brightness. */
    public brightness: number;

    /** NeoDriverState length. */
    public length: number;

    /**
     * Creates a new NeoDriverState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NeoDriverState instance
     */
    public static create(properties?: INeoDriverState): NeoDriverState;

    /**
     * Encodes the specified NeoDriverState message. Does not implicitly {@link NeoDriverState.verify|verify} messages.
     * @param message NeoDriverState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INeoDriverState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NeoDriverState message, length delimited. Does not implicitly {@link NeoDriverState.verify|verify} messages.
     * @param message NeoDriverState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INeoDriverState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NeoDriverState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NeoDriverState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NeoDriverState;

    /**
     * Decodes a NeoDriverState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NeoDriverState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NeoDriverState;

    /**
     * Verifies a NeoDriverState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NeoDriverState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NeoDriverState
     */
    public static fromObject(object: { [k: string]: any }): NeoDriverState;

    /**
     * Creates a plain object from a NeoDriverState message. Also converts values to other types if specified.
     * @param message NeoDriverState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NeoDriverState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NeoDriverState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NeoDriverState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RotaryEncoderState. */
export class RotaryEncoderState implements IRotaryEncoderState {

    /**
     * Constructs a new RotaryEncoderState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRotaryEncoderState);

    /** RotaryEncoderState brightness. */
    public brightness: number;

    /** RotaryEncoderState pixel. */
    public pixel: number;

    /** RotaryEncoderState isPressed. */
    public isPressed: boolean;

    /** RotaryEncoderState value. */
    public value: number;

    /**
     * Creates a new RotaryEncoderState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RotaryEncoderState instance
     */
    public static create(properties?: IRotaryEncoderState): RotaryEncoderState;

    /**
     * Encodes the specified RotaryEncoderState message. Does not implicitly {@link RotaryEncoderState.verify|verify} messages.
     * @param message RotaryEncoderState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRotaryEncoderState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RotaryEncoderState message, length delimited. Does not implicitly {@link RotaryEncoderState.verify|verify} messages.
     * @param message RotaryEncoderState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRotaryEncoderState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RotaryEncoderState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RotaryEncoderState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RotaryEncoderState;

    /**
     * Decodes a RotaryEncoderState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RotaryEncoderState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RotaryEncoderState;

    /**
     * Verifies a RotaryEncoderState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RotaryEncoderState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RotaryEncoderState
     */
    public static fromObject(object: { [k: string]: any }): RotaryEncoderState;

    /**
     * Creates a plain object from a RotaryEncoderState message. Also converts values to other types if specified.
     * @param message RotaryEncoderState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RotaryEncoderState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RotaryEncoderState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RotaryEncoderState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RotaryEncoderChanged. */
export class RotaryEncoderChanged implements IRotaryEncoderChanged {

    /**
     * Constructs a new RotaryEncoderChanged.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRotaryEncoderChanged);

    /** RotaryEncoderChanged value. */
    public value: number;

    /** RotaryEncoderChanged isPressed. */
    public isPressed: boolean;

    /**
     * Creates a new RotaryEncoderChanged instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RotaryEncoderChanged instance
     */
    public static create(properties?: IRotaryEncoderChanged): RotaryEncoderChanged;

    /**
     * Encodes the specified RotaryEncoderChanged message. Does not implicitly {@link RotaryEncoderChanged.verify|verify} messages.
     * @param message RotaryEncoderChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRotaryEncoderChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RotaryEncoderChanged message, length delimited. Does not implicitly {@link RotaryEncoderChanged.verify|verify} messages.
     * @param message RotaryEncoderChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRotaryEncoderChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RotaryEncoderChanged message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RotaryEncoderChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RotaryEncoderChanged;

    /**
     * Decodes a RotaryEncoderChanged message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RotaryEncoderChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RotaryEncoderChanged;

    /**
     * Verifies a RotaryEncoderChanged message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RotaryEncoderChanged message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RotaryEncoderChanged
     */
    public static fromObject(object: { [k: string]: any }): RotaryEncoderChanged;

    /**
     * Creates a plain object from a RotaryEncoderChanged message. Also converts values to other types if specified.
     * @param message RotaryEncoderChanged
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RotaryEncoderChanged, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RotaryEncoderChanged to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RotaryEncoderChanged
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RotaryEncoderButton. */
export class RotaryEncoderButton implements IRotaryEncoderButton {

    /**
     * Constructs a new RotaryEncoderButton.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRotaryEncoderButton);

    /** RotaryEncoderButton isPressed. */
    public isPressed: boolean;

    /**
     * Creates a new RotaryEncoderButton instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RotaryEncoderButton instance
     */
    public static create(properties?: IRotaryEncoderButton): RotaryEncoderButton;

    /**
     * Encodes the specified RotaryEncoderButton message. Does not implicitly {@link RotaryEncoderButton.verify|verify} messages.
     * @param message RotaryEncoderButton message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRotaryEncoderButton, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RotaryEncoderButton message, length delimited. Does not implicitly {@link RotaryEncoderButton.verify|verify} messages.
     * @param message RotaryEncoderButton message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRotaryEncoderButton, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RotaryEncoderButton message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RotaryEncoderButton
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RotaryEncoderButton;

    /**
     * Decodes a RotaryEncoderButton message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RotaryEncoderButton
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RotaryEncoderButton;

    /**
     * Verifies a RotaryEncoderButton message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RotaryEncoderButton message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RotaryEncoderButton
     */
    public static fromObject(object: { [k: string]: any }): RotaryEncoderButton;

    /**
     * Creates a plain object from a RotaryEncoderButton message. Also converts values to other types if specified.
     * @param message RotaryEncoderButton
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RotaryEncoderButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RotaryEncoderButton to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RotaryEncoderButton
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a LinearEncoderState. */
export class LinearEncoderState implements ILinearEncoderState {

    /**
     * Constructs a new LinearEncoderState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILinearEncoderState);

    /** LinearEncoderState brightness. */
    public brightness: number;

    /** LinearEncoderState pixels. */
    public pixels: Uint8Array;

    /** LinearEncoderState value. */
    public value: number;

    /**
     * Creates a new LinearEncoderState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LinearEncoderState instance
     */
    public static create(properties?: ILinearEncoderState): LinearEncoderState;

    /**
     * Encodes the specified LinearEncoderState message. Does not implicitly {@link LinearEncoderState.verify|verify} messages.
     * @param message LinearEncoderState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILinearEncoderState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LinearEncoderState message, length delimited. Does not implicitly {@link LinearEncoderState.verify|verify} messages.
     * @param message LinearEncoderState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILinearEncoderState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LinearEncoderState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LinearEncoderState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LinearEncoderState;

    /**
     * Decodes a LinearEncoderState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LinearEncoderState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LinearEncoderState;

    /**
     * Verifies a LinearEncoderState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LinearEncoderState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LinearEncoderState
     */
    public static fromObject(object: { [k: string]: any }): LinearEncoderState;

    /**
     * Creates a plain object from a LinearEncoderState message. Also converts values to other types if specified.
     * @param message LinearEncoderState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LinearEncoderState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LinearEncoderState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LinearEncoderState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a LinearEncoderChanged. */
export class LinearEncoderChanged implements ILinearEncoderChanged {

    /**
     * Constructs a new LinearEncoderChanged.
     * @param [properties] Properties to set
     */
    constructor(properties?: ILinearEncoderChanged);

    /** LinearEncoderChanged value. */
    public value: number;

    /**
     * Creates a new LinearEncoderChanged instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LinearEncoderChanged instance
     */
    public static create(properties?: ILinearEncoderChanged): LinearEncoderChanged;

    /**
     * Encodes the specified LinearEncoderChanged message. Does not implicitly {@link LinearEncoderChanged.verify|verify} messages.
     * @param message LinearEncoderChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ILinearEncoderChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified LinearEncoderChanged message, length delimited. Does not implicitly {@link LinearEncoderChanged.verify|verify} messages.
     * @param message LinearEncoderChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ILinearEncoderChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a LinearEncoderChanged message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LinearEncoderChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): LinearEncoderChanged;

    /**
     * Decodes a LinearEncoderChanged message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LinearEncoderChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): LinearEncoderChanged;

    /**
     * Verifies a LinearEncoderChanged message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a LinearEncoderChanged message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LinearEncoderChanged
     */
    public static fromObject(object: { [k: string]: any }): LinearEncoderChanged;

    /**
     * Creates a plain object from a LinearEncoderChanged message. Also converts values to other types if specified.
     * @param message LinearEncoderChanged
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: LinearEncoderChanged, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this LinearEncoderChanged to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for LinearEncoderChanged
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TouchSensorState. */
export class TouchSensorState implements ITouchSensorState {

    /**
     * Constructs a new TouchSensorState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITouchSensorState);

    /** TouchSensorState touchedMask. */
    public touchedMask: number;

    /**
     * Creates a new TouchSensorState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TouchSensorState instance
     */
    public static create(properties?: ITouchSensorState): TouchSensorState;

    /**
     * Encodes the specified TouchSensorState message. Does not implicitly {@link TouchSensorState.verify|verify} messages.
     * @param message TouchSensorState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITouchSensorState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TouchSensorState message, length delimited. Does not implicitly {@link TouchSensorState.verify|verify} messages.
     * @param message TouchSensorState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITouchSensorState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TouchSensorState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TouchSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TouchSensorState;

    /**
     * Decodes a TouchSensorState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TouchSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TouchSensorState;

    /**
     * Verifies a TouchSensorState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TouchSensorState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TouchSensorState
     */
    public static fromObject(object: { [k: string]: any }): TouchSensorState;

    /**
     * Creates a plain object from a TouchSensorState message. Also converts values to other types if specified.
     * @param message TouchSensorState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TouchSensorState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TouchSensorState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TouchSensorState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TouchSensorButton. */
export class TouchSensorButton implements ITouchSensorButton {

    /**
     * Constructs a new TouchSensorButton.
     * @param [properties] Properties to set
     */
    constructor(properties?: ITouchSensorButton);

    /** TouchSensorButton touchedMask. */
    public touchedMask: number;

    /**
     * Creates a new TouchSensorButton instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TouchSensorButton instance
     */
    public static create(properties?: ITouchSensorButton): TouchSensorButton;

    /**
     * Encodes the specified TouchSensorButton message. Does not implicitly {@link TouchSensorButton.verify|verify} messages.
     * @param message TouchSensorButton message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ITouchSensorButton, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified TouchSensorButton message, length delimited. Does not implicitly {@link TouchSensorButton.verify|verify} messages.
     * @param message TouchSensorButton message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ITouchSensorButton, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a TouchSensorButton message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TouchSensorButton
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): TouchSensorButton;

    /**
     * Decodes a TouchSensorButton message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TouchSensorButton
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): TouchSensorButton;

    /**
     * Verifies a TouchSensorButton message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a TouchSensorButton message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TouchSensorButton
     */
    public static fromObject(object: { [k: string]: any }): TouchSensorButton;

    /**
     * Creates a plain object from a TouchSensorButton message. Also converts values to other types if specified.
     * @param message TouchSensorButton
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: TouchSensorButton, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this TouchSensorButton to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for TouchSensorButton
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GyroscopeState. */
export class GyroscopeState implements IGyroscopeState {

    /**
     * Constructs a new GyroscopeState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGyroscopeState);

    /** GyroscopeState accelerationX. */
    public accelerationX: number;

    /** GyroscopeState accelerationY. */
    public accelerationY: number;

    /** GyroscopeState accelerationZ. */
    public accelerationZ: number;

    /** GyroscopeState rotationX. */
    public rotationX: number;

    /** GyroscopeState rotationY. */
    public rotationY: number;

    /** GyroscopeState rotationZ. */
    public rotationZ: number;

    /** GyroscopeState temperature. */
    public temperature: number;

    /** GyroscopeState accelerationDataRate. */
    public accelerationDataRate: DataRate;

    /** GyroscopeState rotationDataRate. */
    public rotationDataRate: DataRate;

    /** GyroscopeState accelerationRange. */
    public accelerationRange: AccelerationRange;

    /** GyroscopeState rotationRange. */
    public rotationRange: RotationRange;

    /**
     * Creates a new GyroscopeState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GyroscopeState instance
     */
    public static create(properties?: IGyroscopeState): GyroscopeState;

    /**
     * Encodes the specified GyroscopeState message. Does not implicitly {@link GyroscopeState.verify|verify} messages.
     * @param message GyroscopeState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGyroscopeState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GyroscopeState message, length delimited. Does not implicitly {@link GyroscopeState.verify|verify} messages.
     * @param message GyroscopeState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGyroscopeState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GyroscopeState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GyroscopeState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GyroscopeState;

    /**
     * Decodes a GyroscopeState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GyroscopeState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GyroscopeState;

    /**
     * Verifies a GyroscopeState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GyroscopeState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GyroscopeState
     */
    public static fromObject(object: { [k: string]: any }): GyroscopeState;

    /**
     * Creates a plain object from a GyroscopeState message. Also converts values to other types if specified.
     * @param message GyroscopeState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GyroscopeState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GyroscopeState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GyroscopeState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GyroscopeChanged. */
export class GyroscopeChanged implements IGyroscopeChanged {

    /**
     * Constructs a new GyroscopeChanged.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGyroscopeChanged);

    /** GyroscopeChanged accelerationX. */
    public accelerationX: number;

    /** GyroscopeChanged accelerationY. */
    public accelerationY: number;

    /** GyroscopeChanged accelerationZ. */
    public accelerationZ: number;

    /** GyroscopeChanged rotationX. */
    public rotationX: number;

    /** GyroscopeChanged rotationY. */
    public rotationY: number;

    /** GyroscopeChanged rotationZ. */
    public rotationZ: number;

    /** GyroscopeChanged temperature. */
    public temperature: number;

    /**
     * Creates a new GyroscopeChanged instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GyroscopeChanged instance
     */
    public static create(properties?: IGyroscopeChanged): GyroscopeChanged;

    /**
     * Encodes the specified GyroscopeChanged message. Does not implicitly {@link GyroscopeChanged.verify|verify} messages.
     * @param message GyroscopeChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGyroscopeChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GyroscopeChanged message, length delimited. Does not implicitly {@link GyroscopeChanged.verify|verify} messages.
     * @param message GyroscopeChanged message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGyroscopeChanged, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GyroscopeChanged message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GyroscopeChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GyroscopeChanged;

    /**
     * Decodes a GyroscopeChanged message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GyroscopeChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GyroscopeChanged;

    /**
     * Verifies a GyroscopeChanged message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GyroscopeChanged message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GyroscopeChanged
     */
    public static fromObject(object: { [k: string]: any }): GyroscopeChanged;

    /**
     * Creates a plain object from a GyroscopeChanged message. Also converts values to other types if specified.
     * @param message GyroscopeChanged
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GyroscopeChanged, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GyroscopeChanged to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GyroscopeChanged
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** GyroscopeChipset enum. */
export enum GyroscopeChipset {
    GYROSCOPE_CHIPSET_UNSPECIFIED = 0,
    GYROSCOPE_CHIPSET_LSM6DSOX = 1,
    GYROSCOPE_CHIPSET_ISM330DHCX = 2,
    GYROSCOPE_CHIPSET_LSM6DSO32 = 3
}

/** DataRate enum. */
export enum DataRate {
    GYROSCOPE_DATA_RATE_SHUTDOWN = 0,
    GYROSCOPE_DATA_RATE_HZ_12_5 = 1,
    GYROSCOPE_DATA_RATE_HZ_26 = 2,
    GYROSCOPE_DATA_RATE_HZ_52 = 3,
    GYROSCOPE_DATA_RATE_HZ_104 = 4,
    GYROSCOPE_DATA_RATE_HZ_208 = 5,
    GYROSCOPE_DATA_RATE_HZ_416 = 6,
    GYROSCOPE_DATA_RATE_HZ_833 = 7,
    GYROSCOPE_DATA_RATE_HZ_1_66K = 8,
    GYROSCOPE_DATA_RATE_HZ_3_33K = 9,
    GYROSCOPE_DATA_RATE_HZ_6_66K = 10
}

/** AccelerationRange enum. */
export enum AccelerationRange {
    GYROSCOPE_ACCELERATION_RANGE_4_G = 0,
    GYROSCOPE_ACCELERATION_RANGE_8_G = 1,
    GYROSCOPE_ACCELERATION_RANGE_16_G = 2,
    GYROSCOPE_ACCELERATION_RANGE_32_G = 3
}

/** RotationRange enum. */
export enum RotationRange {
    GYROSCOPE_ROTATION_RANGE_DPS_125 = 0,
    GYROSCOPE_ROTATION_RANGE_DPS_250 = 1,
    GYROSCOPE_ROTATION_RANGE_DPS_500 = 2,
    GYROSCOPE_ROTATION_RANGE_DPS_1000 = 3,
    GYROSCOPE_ROTATION_RANGE_DPS_2000 = 4,
    GYROSCOPE_ROTATION_RANGE_DPS_4000 = 5
}

/** Represents a PressureSensorState. */
export class PressureSensorState implements IPressureSensorState {

    /**
     * Constructs a new PressureSensorState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPressureSensorState);

    /** PressureSensorState pressure. */
    public pressure: number;

    /** PressureSensorState temperature. */
    public temperature: number;

    /** PressureSensorState dataRate. */
    public dataRate: PressureSensorDataRate;

    /**
     * Creates a new PressureSensorState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PressureSensorState instance
     */
    public static create(properties?: IPressureSensorState): PressureSensorState;

    /**
     * Encodes the specified PressureSensorState message. Does not implicitly {@link PressureSensorState.verify|verify} messages.
     * @param message PressureSensorState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPressureSensorState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PressureSensorState message, length delimited. Does not implicitly {@link PressureSensorState.verify|verify} messages.
     * @param message PressureSensorState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPressureSensorState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PressureSensorState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PressureSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PressureSensorState;

    /**
     * Decodes a PressureSensorState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PressureSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PressureSensorState;

    /**
     * Verifies a PressureSensorState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PressureSensorState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PressureSensorState
     */
    public static fromObject(object: { [k: string]: any }): PressureSensorState;

    /**
     * Creates a plain object from a PressureSensorState message. Also converts values to other types if specified.
     * @param message PressureSensorState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PressureSensorState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PressureSensorState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PressureSensorState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PressureSensorData. */
export class PressureSensorData implements IPressureSensorData {

    /**
     * Constructs a new PressureSensorData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPressureSensorData);

    /** PressureSensorData pressure. */
    public pressure: number;

    /** PressureSensorData temperature. */
    public temperature: number;

    /**
     * Creates a new PressureSensorData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PressureSensorData instance
     */
    public static create(properties?: IPressureSensorData): PressureSensorData;

    /**
     * Encodes the specified PressureSensorData message. Does not implicitly {@link PressureSensorData.verify|verify} messages.
     * @param message PressureSensorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPressureSensorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PressureSensorData message, length delimited. Does not implicitly {@link PressureSensorData.verify|verify} messages.
     * @param message PressureSensorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPressureSensorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PressureSensorData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PressureSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PressureSensorData;

    /**
     * Decodes a PressureSensorData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PressureSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PressureSensorData;

    /**
     * Verifies a PressureSensorData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PressureSensorData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PressureSensorData
     */
    public static fromObject(object: { [k: string]: any }): PressureSensorData;

    /**
     * Creates a plain object from a PressureSensorData message. Also converts values to other types if specified.
     * @param message PressureSensorData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PressureSensorData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PressureSensorData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PressureSensorData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** PressureSensorChipset enum. */
export enum PressureSensorChipset {
    PRESSURE_SENSOR_CHIPSET_UNSPECIFIED = 0,
    PRESSURE_SENSOR_CHIPSET_LPS22 = 1,
    PRESSURE_SENSOR_CHIPSET_LPS25 = 2
}

/** PressureSensorDataRate enum. */
export enum PressureSensorDataRate {
    PRESSURE_SENSOR_DATA_RATE_ONE_SHOT = 0,
    PRESSURE_SENSOR_DATA_RATE_1_HZ = 1,
    PRESSURE_SENSOR_DATA_RATE_7_HZ = 2,
    PRESSURE_SENSOR_DATA_RATE_10_HZ = 3,
    PRESSURE_SENSOR_DATA_RATE_12_5_HZ = 4,
    PRESSURE_SENSOR_DATA_RATE_25_HZ = 5,
    PRESSURE_SENSOR_DATA_RATE_50_HZ = 6,
    PRESSURE_SENSOR_DATA_RATE_75_HZ = 7
}

/** Represents a CO2SensorState. */
export class CO2SensorState implements ICO2SensorState {

    /**
     * Constructs a new CO2SensorState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICO2SensorState);

    /** CO2SensorState co2. */
    public co2: number;

    /** CO2SensorState humidity. */
    public humidity: number;

    /** CO2SensorState temperature. */
    public temperature: number;

    /**
     * Creates a new CO2SensorState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CO2SensorState instance
     */
    public static create(properties?: ICO2SensorState): CO2SensorState;

    /**
     * Encodes the specified CO2SensorState message. Does not implicitly {@link CO2SensorState.verify|verify} messages.
     * @param message CO2SensorState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICO2SensorState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CO2SensorState message, length delimited. Does not implicitly {@link CO2SensorState.verify|verify} messages.
     * @param message CO2SensorState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICO2SensorState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CO2SensorState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CO2SensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CO2SensorState;

    /**
     * Decodes a CO2SensorState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CO2SensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CO2SensorState;

    /**
     * Verifies a CO2SensorState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CO2SensorState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CO2SensorState
     */
    public static fromObject(object: { [k: string]: any }): CO2SensorState;

    /**
     * Creates a plain object from a CO2SensorState message. Also converts values to other types if specified.
     * @param message CO2SensorState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CO2SensorState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CO2SensorState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CO2SensorState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CO2SensorData. */
export class CO2SensorData implements ICO2SensorData {

    /**
     * Constructs a new CO2SensorData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICO2SensorData);

    /** CO2SensorData co2. */
    public co2: number;

    /** CO2SensorData humidity. */
    public humidity: number;

    /** CO2SensorData temperature. */
    public temperature: number;

    /**
     * Creates a new CO2SensorData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CO2SensorData instance
     */
    public static create(properties?: ICO2SensorData): CO2SensorData;

    /**
     * Encodes the specified CO2SensorData message. Does not implicitly {@link CO2SensorData.verify|verify} messages.
     * @param message CO2SensorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICO2SensorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CO2SensorData message, length delimited. Does not implicitly {@link CO2SensorData.verify|verify} messages.
     * @param message CO2SensorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICO2SensorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CO2SensorData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CO2SensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CO2SensorData;

    /**
     * Decodes a CO2SensorData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CO2SensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CO2SensorData;

    /**
     * Verifies a CO2SensorData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CO2SensorData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CO2SensorData
     */
    public static fromObject(object: { [k: string]: any }): CO2SensorData;

    /**
     * Creates a plain object from a CO2SensorData message. Also converts values to other types if specified.
     * @param message CO2SensorData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CO2SensorData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CO2SensorData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CO2SensorData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DistanceSensorState. */
export class DistanceSensorState implements IDistanceSensorState {

    /**
     * Constructs a new DistanceSensorState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDistanceSensorState);

    /** DistanceSensorState distance. */
    public distance: number;

    /**
     * Creates a new DistanceSensorState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DistanceSensorState instance
     */
    public static create(properties?: IDistanceSensorState): DistanceSensorState;

    /**
     * Encodes the specified DistanceSensorState message. Does not implicitly {@link DistanceSensorState.verify|verify} messages.
     * @param message DistanceSensorState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDistanceSensorState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DistanceSensorState message, length delimited. Does not implicitly {@link DistanceSensorState.verify|verify} messages.
     * @param message DistanceSensorState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDistanceSensorState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DistanceSensorState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DistanceSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DistanceSensorState;

    /**
     * Decodes a DistanceSensorState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DistanceSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DistanceSensorState;

    /**
     * Verifies a DistanceSensorState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DistanceSensorState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DistanceSensorState
     */
    public static fromObject(object: { [k: string]: any }): DistanceSensorState;

    /**
     * Creates a plain object from a DistanceSensorState message. Also converts values to other types if specified.
     * @param message DistanceSensorState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DistanceSensorState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DistanceSensorState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DistanceSensorState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DistanceSensorData. */
export class DistanceSensorData implements IDistanceSensorData {

    /**
     * Constructs a new DistanceSensorData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDistanceSensorData);

    /** DistanceSensorData distance. */
    public distance: number;

    /**
     * Creates a new DistanceSensorData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DistanceSensorData instance
     */
    public static create(properties?: IDistanceSensorData): DistanceSensorData;

    /**
     * Encodes the specified DistanceSensorData message. Does not implicitly {@link DistanceSensorData.verify|verify} messages.
     * @param message DistanceSensorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDistanceSensorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DistanceSensorData message, length delimited. Does not implicitly {@link DistanceSensorData.verify|verify} messages.
     * @param message DistanceSensorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDistanceSensorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DistanceSensorData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DistanceSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DistanceSensorData;

    /**
     * Decodes a DistanceSensorData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DistanceSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DistanceSensorData;

    /**
     * Verifies a DistanceSensorData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DistanceSensorData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DistanceSensorData
     */
    public static fromObject(object: { [k: string]: any }): DistanceSensorData;

    /**
     * Creates a plain object from a DistanceSensorData message. Also converts values to other types if specified.
     * @param message DistanceSensorData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DistanceSensorData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DistanceSensorData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DistanceSensorData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a UVSensorState. */
export class UVSensorState implements IUVSensorState {

    /**
     * Constructs a new UVSensorState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUVSensorState);

    /** UVSensorState value. */
    public value: number;

    /** UVSensorState mode. */
    public mode: UVSensorMode;

    /** UVSensorState gain. */
    public gain: UVSensorGain;

    /** UVSensorState resolution. */
    public resolution: UVSensorResolution;

    /**
     * Creates a new UVSensorState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UVSensorState instance
     */
    public static create(properties?: IUVSensorState): UVSensorState;

    /**
     * Encodes the specified UVSensorState message. Does not implicitly {@link UVSensorState.verify|verify} messages.
     * @param message UVSensorState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUVSensorState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UVSensorState message, length delimited. Does not implicitly {@link UVSensorState.verify|verify} messages.
     * @param message UVSensorState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUVSensorState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UVSensorState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UVSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UVSensorState;

    /**
     * Decodes a UVSensorState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UVSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UVSensorState;

    /**
     * Verifies a UVSensorState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UVSensorState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UVSensorState
     */
    public static fromObject(object: { [k: string]: any }): UVSensorState;

    /**
     * Creates a plain object from a UVSensorState message. Also converts values to other types if specified.
     * @param message UVSensorState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UVSensorState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UVSensorState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UVSensorState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a UVSensorData. */
export class UVSensorData implements IUVSensorData {

    /**
     * Constructs a new UVSensorData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUVSensorData);

    /** UVSensorData value. */
    public value: number;

    /**
     * Creates a new UVSensorData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UVSensorData instance
     */
    public static create(properties?: IUVSensorData): UVSensorData;

    /**
     * Encodes the specified UVSensorData message. Does not implicitly {@link UVSensorData.verify|verify} messages.
     * @param message UVSensorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUVSensorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UVSensorData message, length delimited. Does not implicitly {@link UVSensorData.verify|verify} messages.
     * @param message UVSensorData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUVSensorData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UVSensorData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UVSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UVSensorData;

    /**
     * Decodes a UVSensorData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UVSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UVSensorData;

    /**
     * Verifies a UVSensorData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UVSensorData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UVSensorData
     */
    public static fromObject(object: { [k: string]: any }): UVSensorData;

    /**
     * Creates a plain object from a UVSensorData message. Also converts values to other types if specified.
     * @param message UVSensorData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UVSensorData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UVSensorData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UVSensorData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** UVSensorMode enum. */
export enum UVSensorMode {
    UV_SENSOR_MODE_ALS = 0,
    UV_SENSOR_MODE_UVS = 1
}

/** UVSensorGain enum. */
export enum UVSensorGain {
    UV_SENSOR_GAIN_1 = 0,
    UV_SENSOR_GAIN_3 = 1,
    UV_SENSOR_GAIN_6 = 2,
    UV_SENSOR_GAIN_9 = 3,
    UV_SENSOR_GAIN_18 = 4
}

/** UVSensorResolution enum. */
export enum UVSensorResolution {
    UV_SENSOR_RESOLUTION_20_BIT = 0,
    UV_SENSOR_RESOLUTION_19_BIT = 1,
    UV_SENSOR_RESOLUTION_18_BIT = 2,
    UV_SENSOR_RESOLUTION_17_BIT = 3,
    UV_SENSOR_RESOLUTION_16_BIT = 4,
    UV_SENSOR_RESOLUTION_13_BIT = 5
}

/** Represents a NFCTagState. */
export class NFCTagState implements INFCTagState {

    /**
     * Constructs a new NFCTagState.
     * @param [properties] Properties to set
     */
    constructor(properties?: INFCTagState);

    /** NFCTagState recordType. */
    public recordType: NFCRecordType;

    /** NFCTagState information. */
    public information: string;

    /** NFCTagState text. */
    public text: string;

    /** NFCTagState language. */
    public language: string;

    /** NFCTagState uri. */
    public uri: string;

    /** NFCTagState protocol. */
    public protocol: string;

    /** NFCTagState phoneNumber. */
    public phoneNumber: string;

    /** NFCTagState smsMessage. */
    public smsMessage: string;

    /** NFCTagState emailAddress. */
    public emailAddress: string;

    /** NFCTagState subject. */
    public subject: string;

    /** NFCTagState emailMessage. */
    public emailMessage: string;

    /** NFCTagState latitude. */
    public latitude: number;

    /** NFCTagState longitude. */
    public longitude: number;

    /** NFCTagState vcardFirstName. */
    public vcardFirstName: string;

    /** NFCTagState vcardName. */
    public vcardName: string;

    /** NFCTagState vcardTitle. */
    public vcardTitle: string;

    /** NFCTagState vcardOrganization. */
    public vcardOrganization: string;

    /** NFCTagState vcardEmail. */
    public vcardEmail: string;

    /** NFCTagState vcardHomeEmail. */
    public vcardHomeEmail: string;

    /** NFCTagState vcardWorkEmail. */
    public vcardWorkEmail: string;

    /** NFCTagState vcardCellularPhone. */
    public vcardCellularPhone: string;

    /** NFCTagState vcardHomePhone. */
    public vcardHomePhone: string;

    /** NFCTagState vcardWorkPhone. */
    public vcardWorkPhone: string;

    /** NFCTagState vcardAddress. */
    public vcardAddress: string;

    /** NFCTagState vcardHomeAddress. */
    public vcardHomeAddress: string;

    /** NFCTagState vcardWorkAddress. */
    public vcardWorkAddress: string;

    /** NFCTagState vcardUrl. */
    public vcardUrl: string;

    /**
     * Creates a new NFCTagState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NFCTagState instance
     */
    public static create(properties?: INFCTagState): NFCTagState;

    /**
     * Encodes the specified NFCTagState message. Does not implicitly {@link NFCTagState.verify|verify} messages.
     * @param message NFCTagState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INFCTagState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NFCTagState message, length delimited. Does not implicitly {@link NFCTagState.verify|verify} messages.
     * @param message NFCTagState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INFCTagState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NFCTagState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NFCTagState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NFCTagState;

    /**
     * Decodes a NFCTagState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NFCTagState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NFCTagState;

    /**
     * Verifies a NFCTagState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NFCTagState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NFCTagState
     */
    public static fromObject(object: { [k: string]: any }): NFCTagState;

    /**
     * Creates a plain object from a NFCTagState message. Also converts values to other types if specified.
     * @param message NFCTagState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NFCTagState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NFCTagState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NFCTagState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NFCWriteText. */
export class NFCWriteText implements INFCWriteText {

    /**
     * Constructs a new NFCWriteText.
     * @param [properties] Properties to set
     */
    constructor(properties?: INFCWriteText);

    /** NFCWriteText text. */
    public text: string;

    /** NFCWriteText language. */
    public language: string;

    /**
     * Creates a new NFCWriteText instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NFCWriteText instance
     */
    public static create(properties?: INFCWriteText): NFCWriteText;

    /**
     * Encodes the specified NFCWriteText message. Does not implicitly {@link NFCWriteText.verify|verify} messages.
     * @param message NFCWriteText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INFCWriteText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NFCWriteText message, length delimited. Does not implicitly {@link NFCWriteText.verify|verify} messages.
     * @param message NFCWriteText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INFCWriteText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NFCWriteText message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NFCWriteText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NFCWriteText;

    /**
     * Decodes a NFCWriteText message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NFCWriteText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NFCWriteText;

    /**
     * Verifies a NFCWriteText message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NFCWriteText message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NFCWriteText
     */
    public static fromObject(object: { [k: string]: any }): NFCWriteText;

    /**
     * Creates a plain object from a NFCWriteText message. Also converts values to other types if specified.
     * @param message NFCWriteText
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NFCWriteText, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NFCWriteText to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NFCWriteText
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NFCWriteUri. */
export class NFCWriteUri implements INFCWriteUri {

    /**
     * Constructs a new NFCWriteUri.
     * @param [properties] Properties to set
     */
    constructor(properties?: INFCWriteUri);

    /** NFCWriteUri protocol. */
    public protocol: string;

    /** NFCWriteUri uri. */
    public uri: string;

    /** NFCWriteUri information. */
    public information: string;

    /**
     * Creates a new NFCWriteUri instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NFCWriteUri instance
     */
    public static create(properties?: INFCWriteUri): NFCWriteUri;

    /**
     * Encodes the specified NFCWriteUri message. Does not implicitly {@link NFCWriteUri.verify|verify} messages.
     * @param message NFCWriteUri message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INFCWriteUri, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NFCWriteUri message, length delimited. Does not implicitly {@link NFCWriteUri.verify|verify} messages.
     * @param message NFCWriteUri message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INFCWriteUri, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NFCWriteUri message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NFCWriteUri
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NFCWriteUri;

    /**
     * Decodes a NFCWriteUri message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NFCWriteUri
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NFCWriteUri;

    /**
     * Verifies a NFCWriteUri message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NFCWriteUri message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NFCWriteUri
     */
    public static fromObject(object: { [k: string]: any }): NFCWriteUri;

    /**
     * Creates a plain object from a NFCWriteUri message. Also converts values to other types if specified.
     * @param message NFCWriteUri
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NFCWriteUri, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NFCWriteUri to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NFCWriteUri
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NFCWriteUnabridgedUri. */
export class NFCWriteUnabridgedUri implements INFCWriteUnabridgedUri {

    /**
     * Constructs a new NFCWriteUnabridgedUri.
     * @param [properties] Properties to set
     */
    constructor(properties?: INFCWriteUnabridgedUri);

    /** NFCWriteUnabridgedUri uri. */
    public uri: string;

    /** NFCWriteUnabridgedUri information. */
    public information: string;

    /**
     * Creates a new NFCWriteUnabridgedUri instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NFCWriteUnabridgedUri instance
     */
    public static create(properties?: INFCWriteUnabridgedUri): NFCWriteUnabridgedUri;

    /**
     * Encodes the specified NFCWriteUnabridgedUri message. Does not implicitly {@link NFCWriteUnabridgedUri.verify|verify} messages.
     * @param message NFCWriteUnabridgedUri message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INFCWriteUnabridgedUri, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NFCWriteUnabridgedUri message, length delimited. Does not implicitly {@link NFCWriteUnabridgedUri.verify|verify} messages.
     * @param message NFCWriteUnabridgedUri message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INFCWriteUnabridgedUri, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NFCWriteUnabridgedUri message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NFCWriteUnabridgedUri
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NFCWriteUnabridgedUri;

    /**
     * Decodes a NFCWriteUnabridgedUri message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NFCWriteUnabridgedUri
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NFCWriteUnabridgedUri;

    /**
     * Verifies a NFCWriteUnabridgedUri message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NFCWriteUnabridgedUri message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NFCWriteUnabridgedUri
     */
    public static fromObject(object: { [k: string]: any }): NFCWriteUnabridgedUri;

    /**
     * Creates a plain object from a NFCWriteUnabridgedUri message. Also converts values to other types if specified.
     * @param message NFCWriteUnabridgedUri
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NFCWriteUnabridgedUri, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NFCWriteUnabridgedUri to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NFCWriteUnabridgedUri
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NFCWriteSms. */
export class NFCWriteSms implements INFCWriteSms {

    /**
     * Constructs a new NFCWriteSms.
     * @param [properties] Properties to set
     */
    constructor(properties?: INFCWriteSms);

    /** NFCWriteSms phoneNumber. */
    public phoneNumber: string;

    /** NFCWriteSms message. */
    public message: string;

    /** NFCWriteSms information. */
    public information: string;

    /**
     * Creates a new NFCWriteSms instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NFCWriteSms instance
     */
    public static create(properties?: INFCWriteSms): NFCWriteSms;

    /**
     * Encodes the specified NFCWriteSms message. Does not implicitly {@link NFCWriteSms.verify|verify} messages.
     * @param message NFCWriteSms message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INFCWriteSms, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NFCWriteSms message, length delimited. Does not implicitly {@link NFCWriteSms.verify|verify} messages.
     * @param message NFCWriteSms message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INFCWriteSms, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NFCWriteSms message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NFCWriteSms
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NFCWriteSms;

    /**
     * Decodes a NFCWriteSms message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NFCWriteSms
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NFCWriteSms;

    /**
     * Verifies a NFCWriteSms message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NFCWriteSms message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NFCWriteSms
     */
    public static fromObject(object: { [k: string]: any }): NFCWriteSms;

    /**
     * Creates a plain object from a NFCWriteSms message. Also converts values to other types if specified.
     * @param message NFCWriteSms
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NFCWriteSms, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NFCWriteSms to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NFCWriteSms
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NFCWriteEmail. */
export class NFCWriteEmail implements INFCWriteEmail {

    /**
     * Constructs a new NFCWriteEmail.
     * @param [properties] Properties to set
     */
    constructor(properties?: INFCWriteEmail);

    /** NFCWriteEmail email. */
    public email: string;

    /** NFCWriteEmail subject. */
    public subject: string;

    /** NFCWriteEmail message. */
    public message: string;

    /** NFCWriteEmail information. */
    public information: string;

    /**
     * Creates a new NFCWriteEmail instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NFCWriteEmail instance
     */
    public static create(properties?: INFCWriteEmail): NFCWriteEmail;

    /**
     * Encodes the specified NFCWriteEmail message. Does not implicitly {@link NFCWriteEmail.verify|verify} messages.
     * @param message NFCWriteEmail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INFCWriteEmail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NFCWriteEmail message, length delimited. Does not implicitly {@link NFCWriteEmail.verify|verify} messages.
     * @param message NFCWriteEmail message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INFCWriteEmail, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NFCWriteEmail message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NFCWriteEmail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NFCWriteEmail;

    /**
     * Decodes a NFCWriteEmail message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NFCWriteEmail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NFCWriteEmail;

    /**
     * Verifies a NFCWriteEmail message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NFCWriteEmail message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NFCWriteEmail
     */
    public static fromObject(object: { [k: string]: any }): NFCWriteEmail;

    /**
     * Creates a plain object from a NFCWriteEmail message. Also converts values to other types if specified.
     * @param message NFCWriteEmail
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NFCWriteEmail, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NFCWriteEmail to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NFCWriteEmail
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NFCWriteGeoLocation. */
export class NFCWriteGeoLocation implements INFCWriteGeoLocation {

    /**
     * Constructs a new NFCWriteGeoLocation.
     * @param [properties] Properties to set
     */
    constructor(properties?: INFCWriteGeoLocation);

    /** NFCWriteGeoLocation latitude. */
    public latitude: number;

    /** NFCWriteGeoLocation longitude. */
    public longitude: number;

    /** NFCWriteGeoLocation information. */
    public information: string;

    /**
     * Creates a new NFCWriteGeoLocation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NFCWriteGeoLocation instance
     */
    public static create(properties?: INFCWriteGeoLocation): NFCWriteGeoLocation;

    /**
     * Encodes the specified NFCWriteGeoLocation message. Does not implicitly {@link NFCWriteGeoLocation.verify|verify} messages.
     * @param message NFCWriteGeoLocation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INFCWriteGeoLocation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NFCWriteGeoLocation message, length delimited. Does not implicitly {@link NFCWriteGeoLocation.verify|verify} messages.
     * @param message NFCWriteGeoLocation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INFCWriteGeoLocation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NFCWriteGeoLocation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NFCWriteGeoLocation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NFCWriteGeoLocation;

    /**
     * Decodes a NFCWriteGeoLocation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NFCWriteGeoLocation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NFCWriteGeoLocation;

    /**
     * Verifies a NFCWriteGeoLocation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NFCWriteGeoLocation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NFCWriteGeoLocation
     */
    public static fromObject(object: { [k: string]: any }): NFCWriteGeoLocation;

    /**
     * Creates a plain object from a NFCWriteGeoLocation message. Also converts values to other types if specified.
     * @param message NFCWriteGeoLocation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NFCWriteGeoLocation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NFCWriteGeoLocation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NFCWriteGeoLocation
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NFCWriteVCard. */
export class NFCWriteVCard implements INFCWriteVCard {

    /**
     * Constructs a new NFCWriteVCard.
     * @param [properties] Properties to set
     */
    constructor(properties?: INFCWriteVCard);

    /** NFCWriteVCard firstName. */
    public firstName: string;

    /** NFCWriteVCard name. */
    public name: string;

    /** NFCWriteVCard title. */
    public title: string;

    /** NFCWriteVCard organization. */
    public organization: string;

    /** NFCWriteVCard email. */
    public email: string;

    /** NFCWriteVCard homeEmail. */
    public homeEmail: string;

    /** NFCWriteVCard workEmail. */
    public workEmail: string;

    /** NFCWriteVCard cellularPhone. */
    public cellularPhone: string;

    /** NFCWriteVCard homePhone. */
    public homePhone: string;

    /** NFCWriteVCard workPhone. */
    public workPhone: string;

    /** NFCWriteVCard address. */
    public address: string;

    /** NFCWriteVCard homeAddress. */
    public homeAddress: string;

    /** NFCWriteVCard workAddress. */
    public workAddress: string;

    /** NFCWriteVCard url. */
    public url: string;

    /**
     * Creates a new NFCWriteVCard instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NFCWriteVCard instance
     */
    public static create(properties?: INFCWriteVCard): NFCWriteVCard;

    /**
     * Encodes the specified NFCWriteVCard message. Does not implicitly {@link NFCWriteVCard.verify|verify} messages.
     * @param message NFCWriteVCard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INFCWriteVCard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NFCWriteVCard message, length delimited. Does not implicitly {@link NFCWriteVCard.verify|verify} messages.
     * @param message NFCWriteVCard message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INFCWriteVCard, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NFCWriteVCard message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NFCWriteVCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NFCWriteVCard;

    /**
     * Decodes a NFCWriteVCard message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NFCWriteVCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NFCWriteVCard;

    /**
     * Verifies a NFCWriteVCard message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NFCWriteVCard message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NFCWriteVCard
     */
    public static fromObject(object: { [k: string]: any }): NFCWriteVCard;

    /**
     * Creates a plain object from a NFCWriteVCard message. Also converts values to other types if specified.
     * @param message NFCWriteVCard
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NFCWriteVCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NFCWriteVCard to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NFCWriteVCard
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** NFCRecordType enum. */
export enum NFCRecordType {
    NFC_RECORD_UNSPECIFIED = 0,
    NFC_RECORD_TEXT = 1,
    NFC_RECORD_URI = 2,
    NFC_RECORD_UNABRIDGED_URI = 3,
    NFC_RECORD_SMS = 4,
    NFC_RECORD_EMAIL = 5,
    NFC_RECORD_GEO_LOCATION = 6,
    NFC_RECORD_VCARD = 7
}

/** Represents a RFIDReaderState. */
export class RFIDReaderState implements IRFIDReaderState {

    /**
     * Constructs a new RFIDReaderState.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRFIDReaderState);

    /** RFIDReaderState tagId. */
    public tagId: string;

    /**
     * Creates a new RFIDReaderState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RFIDReaderState instance
     */
    public static create(properties?: IRFIDReaderState): RFIDReaderState;

    /**
     * Encodes the specified RFIDReaderState message. Does not implicitly {@link RFIDReaderState.verify|verify} messages.
     * @param message RFIDReaderState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRFIDReaderState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RFIDReaderState message, length delimited. Does not implicitly {@link RFIDReaderState.verify|verify} messages.
     * @param message RFIDReaderState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRFIDReaderState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RFIDReaderState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RFIDReaderState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RFIDReaderState;

    /**
     * Decodes a RFIDReaderState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RFIDReaderState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RFIDReaderState;

    /**
     * Verifies a RFIDReaderState message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RFIDReaderState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RFIDReaderState
     */
    public static fromObject(object: { [k: string]: any }): RFIDReaderState;

    /**
     * Creates a plain object from a RFIDReaderState message. Also converts values to other types if specified.
     * @param message RFIDReaderState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RFIDReaderState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RFIDReaderState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RFIDReaderState
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RFIDReaderData. */
export class RFIDReaderData implements IRFIDReaderData {

    /**
     * Constructs a new RFIDReaderData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRFIDReaderData);

    /** RFIDReaderData tagId. */
    public tagId: string;

    /**
     * Creates a new RFIDReaderData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RFIDReaderData instance
     */
    public static create(properties?: IRFIDReaderData): RFIDReaderData;

    /**
     * Encodes the specified RFIDReaderData message. Does not implicitly {@link RFIDReaderData.verify|verify} messages.
     * @param message RFIDReaderData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRFIDReaderData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RFIDReaderData message, length delimited. Does not implicitly {@link RFIDReaderData.verify|verify} messages.
     * @param message RFIDReaderData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRFIDReaderData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RFIDReaderData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RFIDReaderData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RFIDReaderData;

    /**
     * Decodes a RFIDReaderData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RFIDReaderData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RFIDReaderData;

    /**
     * Verifies a RFIDReaderData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RFIDReaderData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RFIDReaderData
     */
    public static fromObject(object: { [k: string]: any }): RFIDReaderData;

    /**
     * Creates a plain object from a RFIDReaderData message. Also converts values to other types if specified.
     * @param message RFIDReaderData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RFIDReaderData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RFIDReaderData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RFIDReaderData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** DeviceType enum. */
export enum DeviceType {
    DEVICE_TYPE_UNSPECIFIED = 0,
    DEVICE_TYPE_NEO_DRIVER = 1,
    DEVICE_TYPE_ROTARY_ENCODER = 2,
    DEVICE_TYPE_LINEAR_ENCODER = 3,
    DEVICE_TYPE_TOUCH_SENSOR = 4,
    DEVICE_TYPE_GYROSCOPE = 5,
    DEVICE_TYPE_TRINKEY = 6,
    DEVICE_TYPE_PRESSURE_SENSOR = 7,
    DEVICE_TYPE_CO2_SENSOR = 8,
    DEVICE_TYPE_DISTANCE_SENSOR = 9,
    DEVICE_TYPE_UV_SENSOR = 10,
    DEVICE_TYPE_NFC_TAG = 11,
    DEVICE_TYPE_RFID_READER = 12
}
