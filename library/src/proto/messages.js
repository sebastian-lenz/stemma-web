/**
 * Properties of a Command.
 * @exports ICommand
 * @interface ICommand
 * @property {number|null} [id] Command id
 * @property {IDeviceCommand|null} [deviceCommand] Command deviceCommand
 */

/**
 * Properties of a DeviceCommand.
 * @exports IDeviceCommand
 * @interface IDeviceCommand
 * @property {DeviceType|null} [type] DeviceCommand type
 * @property {number|null} [address] DeviceCommand address
 * @property {IStartDevice|null} [start] DeviceCommand start
 * @property {IStopDevice|null} [stop] DeviceCommand stop
 * @property {IGetDeviceState|null} [getState] DeviceCommand getState
 * @property {ISetBrightness|null} [setBrightness] DeviceCommand setBrightness
 * @property {ISetPixelColor|null} [setPixelColor] DeviceCommand setPixelColor
 * @property {ISetPixelColors|null} [setPixelColors] DeviceCommand setPixelColors
 * @property {ISetNeoDriverLength|null} [setLength] DeviceCommand setLength
 * @property {ISetAccelerationRange|null} [setAccelRange] DeviceCommand setAccelRange
 * @property {ISetRotationRange|null} [setRotRange] DeviceCommand setRotRange
 * @property {ISetAccelerationRate|null} [setAccelRate] DeviceCommand setAccelRate
 * @property {ISetRotationRate|null} [setRotRate] DeviceCommand setRotRate
 * @property {ISetPressureSensorDataRate|null} [setPressureRate] DeviceCommand setPressureRate
 * @property {ISetUVSensorGain|null} [setUvGain] DeviceCommand setUvGain
 * @property {ISetUVSensorMode|null} [setUvMode] DeviceCommand setUvMode
 * @property {ISetUVSensorResolution|null} [setUvResolution] DeviceCommand setUvResolution
 * @property {INFCWriteText|null} [nfcWriteText] DeviceCommand nfcWriteText
 * @property {INFCWriteUri|null} [nfcWriteUri] DeviceCommand nfcWriteUri
 * @property {INFCWriteUnabridgedUri|null} [nfcWriteUnabridgedUri] DeviceCommand nfcWriteUnabridgedUri
 * @property {INFCWriteSms|null} [nfcWriteSms] DeviceCommand nfcWriteSms
 * @property {INFCWriteEmail|null} [nfcWriteEmail] DeviceCommand nfcWriteEmail
 * @property {INFCWriteGeoLocation|null} [nfcWriteGeo] DeviceCommand nfcWriteGeo
 * @property {INFCWriteVCard|null} [nfcWriteVcard] DeviceCommand nfcWriteVcard
 */

/**
 * Properties of a StartDevice.
 * @exports IStartDevice
 * @interface IStartDevice
 * @property {GyroscopeChipset|null} [gyroscopeChipset] StartDevice gyroscopeChipset
 * @property {PressureSensorChipset|null} [pressureSensorChipset] StartDevice pressureSensorChipset
 */

/**
 * Properties of a StopDevice.
 * @exports IStopDevice
 * @interface IStopDevice
 */

/**
 * Properties of a GetDeviceState.
 * @exports IGetDeviceState
 * @interface IGetDeviceState
 */

/**
 * Properties of a SetBrightness.
 * @exports ISetBrightness
 * @interface ISetBrightness
 * @property {number|null} [brightness] SetBrightness brightness
 */

/**
 * Properties of a SetPixelColor.
 * @exports ISetPixelColor
 * @interface ISetPixelColor
 * @property {number|null} [index] SetPixelColor index
 * @property {number|null} [color] SetPixelColor color
 */

/**
 * Properties of a SetPixelColors.
 * @exports ISetPixelColors
 * @interface ISetPixelColors
 * @property {number|null} [offset] SetPixelColors offset
 * @property {Uint8Array|null} [colors] SetPixelColors colors
 * @property {boolean|null} [show] SetPixelColors show
 */

/**
 * Properties of a SetNeoDriverLength.
 * @exports ISetNeoDriverLength
 * @interface ISetNeoDriverLength
 * @property {number|null} [length] SetNeoDriverLength length
 */

/**
 * Properties of a SetAccelerationRange.
 * @exports ISetAccelerationRange
 * @interface ISetAccelerationRange
 * @property {AccelerationRange|null} [range] SetAccelerationRange range
 */

/**
 * Properties of a SetRotationRange.
 * @exports ISetRotationRange
 * @interface ISetRotationRange
 * @property {RotationRange|null} [range] SetRotationRange range
 */

/**
 * Properties of a SetAccelerationRate.
 * @exports ISetAccelerationRate
 * @interface ISetAccelerationRate
 * @property {DataRate|null} [rate] SetAccelerationRate rate
 */

/**
 * Properties of a SetRotationRate.
 * @exports ISetRotationRate
 * @interface ISetRotationRate
 * @property {DataRate|null} [rate] SetRotationRate rate
 */

/**
 * Properties of a SetPressureSensorDataRate.
 * @exports ISetPressureSensorDataRate
 * @interface ISetPressureSensorDataRate
 * @property {PressureSensorDataRate|null} [rate] SetPressureSensorDataRate rate
 */

/**
 * Properties of a SetUVSensorGain.
 * @exports ISetUVSensorGain
 * @interface ISetUVSensorGain
 * @property {UVSensorGain|null} [gain] SetUVSensorGain gain
 */

/**
 * Properties of a SetUVSensorMode.
 * @exports ISetUVSensorMode
 * @interface ISetUVSensorMode
 * @property {UVSensorMode|null} [mode] SetUVSensorMode mode
 */

/**
 * Properties of a SetUVSensorResolution.
 * @exports ISetUVSensorResolution
 * @interface ISetUVSensorResolution
 * @property {UVSensorResolution|null} [resolution] SetUVSensorResolution resolution
 */

/**
 * Properties of a Response.
 * @exports IResponse
 * @interface IResponse
 * @property {number|null} [id] Response id
 * @property {boolean|null} [success] Response success
 * @property {IDeviceState|null} [deviceState] Response deviceState
 * @property {IDeviceEvent|null} [deviceEvent] Response deviceEvent
 */

/**
 * Properties of a DeviceState.
 * @exports IDeviceState
 * @interface IDeviceState
 * @property {DeviceType|null} [type] DeviceState type
 * @property {number|null} [address] DeviceState address
 * @property {boolean|null} [connected] DeviceState connected
 * @property {ICO2SensorState|null} [co2Sensor] DeviceState co2Sensor
 * @property {IDistanceSensorState|null} [distanceSensor] DeviceState distanceSensor
 * @property {IGyroscopeState|null} [gyroscope] DeviceState gyroscope
 * @property {ILinearEncoderState|null} [linearEncoder] DeviceState linearEncoder
 * @property {INeoDriverState|null} [neoDriver] DeviceState neoDriver
 * @property {INFCTagState|null} [nfcTag] DeviceState nfcTag
 * @property {IPressureSensorState|null} [pressureSensor] DeviceState pressureSensor
 * @property {IRFIDReaderState|null} [rfidReader] DeviceState rfidReader
 * @property {IRotaryEncoderState|null} [rotaryEncoder] DeviceState rotaryEncoder
 * @property {ITrinkeyState|null} [trinkey] DeviceState trinkey
 * @property {ITouchSensorState|null} [touchSensor] DeviceState touchSensor
 * @property {IUVSensorState|null} [uvSensor] DeviceState uvSensor
 */

/**
 * Properties of a DeviceEvent.
 * @exports IDeviceEvent
 * @interface IDeviceEvent
 * @property {DeviceType|null} [type] DeviceEvent type
 * @property {number|null} [address] DeviceEvent address
 * @property {IRotaryEncoderChanged|null} [rotaryChanged] DeviceEvent rotaryChanged
 * @property {IRotaryEncoderButton|null} [rotaryButton] DeviceEvent rotaryButton
 * @property {ILinearEncoderChanged|null} [linearChanged] DeviceEvent linearChanged
 * @property {ITouchSensorButton|null} [touchButton] DeviceEvent touchButton
 * @property {IGyroscopeChanged|null} [gyroscopeData] DeviceEvent gyroscopeData
 * @property {IPressureSensorData|null} [pressureSensorData] DeviceEvent pressureSensorData
 * @property {ICO2SensorData|null} [co2SensorData] DeviceEvent co2SensorData
 * @property {IDistanceSensorData|null} [distanceSensorData] DeviceEvent distanceSensorData
 * @property {IUVSensorData|null} [uvSensorData] DeviceEvent uvSensorData
 * @property {IRFIDReaderData|null} [rfidReaderData] DeviceEvent rfidReaderData
 */

/**
 * Properties of a TrinkeyState.
 * @exports ITrinkeyState
 * @interface ITrinkeyState
 * @property {number|null} [brightness] TrinkeyState brightness
 * @property {number|null} [pixel] TrinkeyState pixel
 */

/**
 * Properties of a NeoDriverState.
 * @exports INeoDriverState
 * @interface INeoDriverState
 * @property {number|null} [brightness] NeoDriverState brightness
 * @property {number|null} [length] NeoDriverState length
 */

/**
 * Properties of a RotaryEncoderState.
 * @exports IRotaryEncoderState
 * @interface IRotaryEncoderState
 * @property {number|null} [brightness] RotaryEncoderState brightness
 * @property {number|null} [pixel] RotaryEncoderState pixel
 * @property {boolean|null} [isPressed] RotaryEncoderState isPressed
 * @property {number|null} [value] RotaryEncoderState value
 */

/**
 * Properties of a RotaryEncoderChanged.
 * @exports IRotaryEncoderChanged
 * @interface IRotaryEncoderChanged
 * @property {number|null} [value] RotaryEncoderChanged value
 * @property {boolean|null} [isPressed] RotaryEncoderChanged isPressed
 */

/**
 * Properties of a RotaryEncoderButton.
 * @exports IRotaryEncoderButton
 * @interface IRotaryEncoderButton
 * @property {boolean|null} [isPressed] RotaryEncoderButton isPressed
 */

/**
 * Properties of a LinearEncoderState.
 * @exports ILinearEncoderState
 * @interface ILinearEncoderState
 * @property {number|null} [brightness] LinearEncoderState brightness
 * @property {Uint8Array|null} [pixels] LinearEncoderState pixels
 * @property {number|null} [value] LinearEncoderState value
 */

/**
 * Properties of a LinearEncoderChanged.
 * @exports ILinearEncoderChanged
 * @interface ILinearEncoderChanged
 * @property {number|null} [value] LinearEncoderChanged value
 */

/**
 * Properties of a TouchSensorState.
 * @exports ITouchSensorState
 * @interface ITouchSensorState
 * @property {number|null} [touchedMask] TouchSensorState touchedMask
 */

/**
 * Properties of a TouchSensorButton.
 * @exports ITouchSensorButton
 * @interface ITouchSensorButton
 * @property {number|null} [touchedMask] TouchSensorButton touchedMask
 */

/**
 * Properties of a GyroscopeState.
 * @exports IGyroscopeState
 * @interface IGyroscopeState
 * @property {number|null} [accelerationX] GyroscopeState accelerationX
 * @property {number|null} [accelerationY] GyroscopeState accelerationY
 * @property {number|null} [accelerationZ] GyroscopeState accelerationZ
 * @property {number|null} [rotationX] GyroscopeState rotationX
 * @property {number|null} [rotationY] GyroscopeState rotationY
 * @property {number|null} [rotationZ] GyroscopeState rotationZ
 * @property {number|null} [temperature] GyroscopeState temperature
 * @property {DataRate|null} [accelerationDataRate] GyroscopeState accelerationDataRate
 * @property {DataRate|null} [rotationDataRate] GyroscopeState rotationDataRate
 * @property {AccelerationRange|null} [accelerationRange] GyroscopeState accelerationRange
 * @property {RotationRange|null} [rotationRange] GyroscopeState rotationRange
 */

/**
 * Properties of a GyroscopeChanged.
 * @exports IGyroscopeChanged
 * @interface IGyroscopeChanged
 * @property {number|null} [accelerationX] GyroscopeChanged accelerationX
 * @property {number|null} [accelerationY] GyroscopeChanged accelerationY
 * @property {number|null} [accelerationZ] GyroscopeChanged accelerationZ
 * @property {number|null} [rotationX] GyroscopeChanged rotationX
 * @property {number|null} [rotationY] GyroscopeChanged rotationY
 * @property {number|null} [rotationZ] GyroscopeChanged rotationZ
 * @property {number|null} [temperature] GyroscopeChanged temperature
 */

/**
 * Properties of a PressureSensorState.
 * @exports IPressureSensorState
 * @interface IPressureSensorState
 * @property {number|null} [pressure] PressureSensorState pressure
 * @property {number|null} [temperature] PressureSensorState temperature
 * @property {PressureSensorDataRate|null} [dataRate] PressureSensorState dataRate
 */

/**
 * Properties of a PressureSensorData.
 * @exports IPressureSensorData
 * @interface IPressureSensorData
 * @property {number|null} [pressure] PressureSensorData pressure
 * @property {number|null} [temperature] PressureSensorData temperature
 */

/**
 * Properties of a CO2SensorState.
 * @exports ICO2SensorState
 * @interface ICO2SensorState
 * @property {number|null} [co2] CO2SensorState co2
 * @property {number|null} [humidity] CO2SensorState humidity
 * @property {number|null} [temperature] CO2SensorState temperature
 */

/**
 * Properties of a CO2SensorData.
 * @exports ICO2SensorData
 * @interface ICO2SensorData
 * @property {number|null} [co2] CO2SensorData co2
 * @property {number|null} [humidity] CO2SensorData humidity
 * @property {number|null} [temperature] CO2SensorData temperature
 */

/**
 * Properties of a DistanceSensorState.
 * @exports IDistanceSensorState
 * @interface IDistanceSensorState
 * @property {number|null} [distance] DistanceSensorState distance
 */

/**
 * Properties of a DistanceSensorData.
 * @exports IDistanceSensorData
 * @interface IDistanceSensorData
 * @property {number|null} [distance] DistanceSensorData distance
 */

/**
 * Properties of a UVSensorState.
 * @exports IUVSensorState
 * @interface IUVSensorState
 * @property {number|null} [value] UVSensorState value
 * @property {UVSensorMode|null} [mode] UVSensorState mode
 * @property {UVSensorGain|null} [gain] UVSensorState gain
 * @property {UVSensorResolution|null} [resolution] UVSensorState resolution
 */

/**
 * Properties of a UVSensorData.
 * @exports IUVSensorData
 * @interface IUVSensorData
 * @property {number|null} [value] UVSensorData value
 */

/**
 * Properties of a NFCTagState.
 * @exports INFCTagState
 * @interface INFCTagState
 * @property {NFCRecordType|null} [recordType] NFCTagState recordType
 * @property {string|null} [information] NFCTagState information
 * @property {string|null} [text] NFCTagState text
 * @property {string|null} [language] NFCTagState language
 * @property {string|null} [uri] NFCTagState uri
 * @property {string|null} [protocol] NFCTagState protocol
 * @property {string|null} [phoneNumber] NFCTagState phoneNumber
 * @property {string|null} [smsMessage] NFCTagState smsMessage
 * @property {string|null} [emailAddress] NFCTagState emailAddress
 * @property {string|null} [subject] NFCTagState subject
 * @property {string|null} [emailMessage] NFCTagState emailMessage
 * @property {number|null} [latitude] NFCTagState latitude
 * @property {number|null} [longitude] NFCTagState longitude
 * @property {string|null} [vcardFirstName] NFCTagState vcardFirstName
 * @property {string|null} [vcardName] NFCTagState vcardName
 * @property {string|null} [vcardTitle] NFCTagState vcardTitle
 * @property {string|null} [vcardOrganization] NFCTagState vcardOrganization
 * @property {string|null} [vcardEmail] NFCTagState vcardEmail
 * @property {string|null} [vcardHomeEmail] NFCTagState vcardHomeEmail
 * @property {string|null} [vcardWorkEmail] NFCTagState vcardWorkEmail
 * @property {string|null} [vcardCellularPhone] NFCTagState vcardCellularPhone
 * @property {string|null} [vcardHomePhone] NFCTagState vcardHomePhone
 * @property {string|null} [vcardWorkPhone] NFCTagState vcardWorkPhone
 * @property {string|null} [vcardAddress] NFCTagState vcardAddress
 * @property {string|null} [vcardHomeAddress] NFCTagState vcardHomeAddress
 * @property {string|null} [vcardWorkAddress] NFCTagState vcardWorkAddress
 * @property {string|null} [vcardUrl] NFCTagState vcardUrl
 */

/**
 * Properties of a NFCWriteText.
 * @exports INFCWriteText
 * @interface INFCWriteText
 * @property {string|null} [text] NFCWriteText text
 * @property {string|null} [language] NFCWriteText language
 */

/**
 * Properties of a NFCWriteUri.
 * @exports INFCWriteUri
 * @interface INFCWriteUri
 * @property {string|null} [protocol] NFCWriteUri protocol
 * @property {string|null} [uri] NFCWriteUri uri
 * @property {string|null} [information] NFCWriteUri information
 */

/**
 * Properties of a NFCWriteUnabridgedUri.
 * @exports INFCWriteUnabridgedUri
 * @interface INFCWriteUnabridgedUri
 * @property {string|null} [uri] NFCWriteUnabridgedUri uri
 * @property {string|null} [information] NFCWriteUnabridgedUri information
 */

/**
 * Properties of a NFCWriteSms.
 * @exports INFCWriteSms
 * @interface INFCWriteSms
 * @property {string|null} [phoneNumber] NFCWriteSms phoneNumber
 * @property {string|null} [message] NFCWriteSms message
 * @property {string|null} [information] NFCWriteSms information
 */

/**
 * Properties of a NFCWriteEmail.
 * @exports INFCWriteEmail
 * @interface INFCWriteEmail
 * @property {string|null} [email] NFCWriteEmail email
 * @property {string|null} [subject] NFCWriteEmail subject
 * @property {string|null} [message] NFCWriteEmail message
 * @property {string|null} [information] NFCWriteEmail information
 */

/**
 * Properties of a NFCWriteGeoLocation.
 * @exports INFCWriteGeoLocation
 * @interface INFCWriteGeoLocation
 * @property {number|null} [latitude] NFCWriteGeoLocation latitude
 * @property {number|null} [longitude] NFCWriteGeoLocation longitude
 * @property {string|null} [information] NFCWriteGeoLocation information
 */

/**
 * Properties of a NFCWriteVCard.
 * @exports INFCWriteVCard
 * @interface INFCWriteVCard
 * @property {string|null} [firstName] NFCWriteVCard firstName
 * @property {string|null} [name] NFCWriteVCard name
 * @property {string|null} [title] NFCWriteVCard title
 * @property {string|null} [organization] NFCWriteVCard organization
 * @property {string|null} [email] NFCWriteVCard email
 * @property {string|null} [homeEmail] NFCWriteVCard homeEmail
 * @property {string|null} [workEmail] NFCWriteVCard workEmail
 * @property {string|null} [cellularPhone] NFCWriteVCard cellularPhone
 * @property {string|null} [homePhone] NFCWriteVCard homePhone
 * @property {string|null} [workPhone] NFCWriteVCard workPhone
 * @property {string|null} [address] NFCWriteVCard address
 * @property {string|null} [homeAddress] NFCWriteVCard homeAddress
 * @property {string|null} [workAddress] NFCWriteVCard workAddress
 * @property {string|null} [url] NFCWriteVCard url
 */

/**
 * Properties of a RFIDReaderState.
 * @exports IRFIDReaderState
 * @interface IRFIDReaderState
 * @property {string|null} [tagId] RFIDReaderState tagId
 */

/**
 * Properties of a RFIDReaderData.
 * @exports IRFIDReaderData
 * @interface IRFIDReaderData
 * @property {string|null} [tagId] RFIDReaderData tagId
 *//*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Command = $root.Command = (() => {

    

    /**
     * Constructs a new Command.
     * @exports Command
     * @classdesc Represents a Command.
     * @implements ICommand
     * @constructor
     * @param {ICommand=} [properties] Properties to set
     */
    function Command(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Command id.
     * @member {number} id
     * @memberof Command
     * @instance
     */
    Command.prototype.id = 0;

    /**
     * Command deviceCommand.
     * @member {IDeviceCommand|null|undefined} deviceCommand
     * @memberof Command
     * @instance
     */
    Command.prototype.deviceCommand = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Command payload.
     * @member {"deviceCommand"|undefined} payload
     * @memberof Command
     * @instance
     */
    Object.defineProperty(Command.prototype, "payload", {
        get: $util.oneOfGetter($oneOfFields = ["deviceCommand"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Command instance using the specified properties.
     * @function create
     * @memberof Command
     * @static
     * @param {ICommand=} [properties] Properties to set
     * @returns {Command} Command instance
     */
    Command.create = function create(properties) {
        return new Command(properties);
    };

    /**
     * Encodes the specified Command message. Does not implicitly {@link Command.verify|verify} messages.
     * @function encode
     * @memberof Command
     * @static
     * @param {ICommand} message Command message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Command.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.deviceCommand != null && Object.hasOwnProperty.call(message, "deviceCommand"))
            $root.DeviceCommand.encode(message.deviceCommand, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Command message, length delimited. Does not implicitly {@link Command.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Command
     * @static
     * @param {ICommand} message Command message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Command.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Command message from the specified reader or buffer.
     * @function decode
     * @memberof Command
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Command} Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Command.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Command();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.uint32();
                    break;
                }
            case 5: {
                    message.deviceCommand = $root.DeviceCommand.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Command message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Command
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Command} Command
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Command.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Command message.
     * @function verify
     * @memberof Command
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Command.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.deviceCommand != null && message.hasOwnProperty("deviceCommand")) {
            properties.payload = 1;
            {
                let error = $root.DeviceCommand.verify(message.deviceCommand);
                if (error)
                    return "deviceCommand." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Command message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Command
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Command} Command
     */
    Command.fromObject = function fromObject(object) {
        if (object instanceof $root.Command)
            return object;
        let message = new $root.Command();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.deviceCommand != null) {
            if (typeof object.deviceCommand !== "object")
                throw TypeError(".Command.deviceCommand: object expected");
            message.deviceCommand = $root.DeviceCommand.fromObject(object.deviceCommand);
        }
        return message;
    };

    /**
     * Creates a plain object from a Command message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Command
     * @static
     * @param {Command} message Command
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Command.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.id = 0;
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.deviceCommand != null && message.hasOwnProperty("deviceCommand")) {
            object.deviceCommand = $root.DeviceCommand.toObject(message.deviceCommand, options);
            if (options.oneofs)
                object.payload = "deviceCommand";
        }
        return object;
    };

    /**
     * Converts this Command to JSON.
     * @function toJSON
     * @memberof Command
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Command.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Command
     * @function getTypeUrl
     * @memberof Command
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Command.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Command";
    };

    return Command;
})();

export const DeviceCommand = $root.DeviceCommand = (() => {

    

    /**
     * Constructs a new DeviceCommand.
     * @exports DeviceCommand
     * @classdesc Represents a DeviceCommand.
     * @implements IDeviceCommand
     * @constructor
     * @param {IDeviceCommand=} [properties] Properties to set
     */
    function DeviceCommand(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceCommand type.
     * @member {DeviceType} type
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.type = 0;

    /**
     * DeviceCommand address.
     * @member {number} address
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.address = 0;

    /**
     * DeviceCommand start.
     * @member {IStartDevice|null|undefined} start
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.start = null;

    /**
     * DeviceCommand stop.
     * @member {IStopDevice|null|undefined} stop
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.stop = null;

    /**
     * DeviceCommand getState.
     * @member {IGetDeviceState|null|undefined} getState
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.getState = null;

    /**
     * DeviceCommand setBrightness.
     * @member {ISetBrightness|null|undefined} setBrightness
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.setBrightness = null;

    /**
     * DeviceCommand setPixelColor.
     * @member {ISetPixelColor|null|undefined} setPixelColor
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.setPixelColor = null;

    /**
     * DeviceCommand setPixelColors.
     * @member {ISetPixelColors|null|undefined} setPixelColors
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.setPixelColors = null;

    /**
     * DeviceCommand setLength.
     * @member {ISetNeoDriverLength|null|undefined} setLength
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.setLength = null;

    /**
     * DeviceCommand setAccelRange.
     * @member {ISetAccelerationRange|null|undefined} setAccelRange
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.setAccelRange = null;

    /**
     * DeviceCommand setRotRange.
     * @member {ISetRotationRange|null|undefined} setRotRange
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.setRotRange = null;

    /**
     * DeviceCommand setAccelRate.
     * @member {ISetAccelerationRate|null|undefined} setAccelRate
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.setAccelRate = null;

    /**
     * DeviceCommand setRotRate.
     * @member {ISetRotationRate|null|undefined} setRotRate
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.setRotRate = null;

    /**
     * DeviceCommand setPressureRate.
     * @member {ISetPressureSensorDataRate|null|undefined} setPressureRate
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.setPressureRate = null;

    /**
     * DeviceCommand setUvGain.
     * @member {ISetUVSensorGain|null|undefined} setUvGain
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.setUvGain = null;

    /**
     * DeviceCommand setUvMode.
     * @member {ISetUVSensorMode|null|undefined} setUvMode
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.setUvMode = null;

    /**
     * DeviceCommand setUvResolution.
     * @member {ISetUVSensorResolution|null|undefined} setUvResolution
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.setUvResolution = null;

    /**
     * DeviceCommand nfcWriteText.
     * @member {INFCWriteText|null|undefined} nfcWriteText
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.nfcWriteText = null;

    /**
     * DeviceCommand nfcWriteUri.
     * @member {INFCWriteUri|null|undefined} nfcWriteUri
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.nfcWriteUri = null;

    /**
     * DeviceCommand nfcWriteUnabridgedUri.
     * @member {INFCWriteUnabridgedUri|null|undefined} nfcWriteUnabridgedUri
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.nfcWriteUnabridgedUri = null;

    /**
     * DeviceCommand nfcWriteSms.
     * @member {INFCWriteSms|null|undefined} nfcWriteSms
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.nfcWriteSms = null;

    /**
     * DeviceCommand nfcWriteEmail.
     * @member {INFCWriteEmail|null|undefined} nfcWriteEmail
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.nfcWriteEmail = null;

    /**
     * DeviceCommand nfcWriteGeo.
     * @member {INFCWriteGeoLocation|null|undefined} nfcWriteGeo
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.nfcWriteGeo = null;

    /**
     * DeviceCommand nfcWriteVcard.
     * @member {INFCWriteVCard|null|undefined} nfcWriteVcard
     * @memberof DeviceCommand
     * @instance
     */
    DeviceCommand.prototype.nfcWriteVcard = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * DeviceCommand payload.
     * @member {"start"|"stop"|"getState"|"setBrightness"|"setPixelColor"|"setPixelColors"|"setLength"|"setAccelRange"|"setRotRange"|"setAccelRate"|"setRotRate"|"setPressureRate"|"setUvGain"|"setUvMode"|"setUvResolution"|"nfcWriteText"|"nfcWriteUri"|"nfcWriteUnabridgedUri"|"nfcWriteSms"|"nfcWriteEmail"|"nfcWriteGeo"|"nfcWriteVcard"|undefined} payload
     * @memberof DeviceCommand
     * @instance
     */
    Object.defineProperty(DeviceCommand.prototype, "payload", {
        get: $util.oneOfGetter($oneOfFields = ["start", "stop", "getState", "setBrightness", "setPixelColor", "setPixelColors", "setLength", "setAccelRange", "setRotRange", "setAccelRate", "setRotRate", "setPressureRate", "setUvGain", "setUvMode", "setUvResolution", "nfcWriteText", "nfcWriteUri", "nfcWriteUnabridgedUri", "nfcWriteSms", "nfcWriteEmail", "nfcWriteGeo", "nfcWriteVcard"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new DeviceCommand instance using the specified properties.
     * @function create
     * @memberof DeviceCommand
     * @static
     * @param {IDeviceCommand=} [properties] Properties to set
     * @returns {DeviceCommand} DeviceCommand instance
     */
    DeviceCommand.create = function create(properties) {
        return new DeviceCommand(properties);
    };

    /**
     * Encodes the specified DeviceCommand message. Does not implicitly {@link DeviceCommand.verify|verify} messages.
     * @function encode
     * @memberof DeviceCommand
     * @static
     * @param {IDeviceCommand} message DeviceCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceCommand.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.address != null && Object.hasOwnProperty.call(message, "address"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.address);
        if (message.start != null && Object.hasOwnProperty.call(message, "start"))
            $root.StartDevice.encode(message.start, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.stop != null && Object.hasOwnProperty.call(message, "stop"))
            $root.StopDevice.encode(message.stop, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.getState != null && Object.hasOwnProperty.call(message, "getState"))
            $root.GetDeviceState.encode(message.getState, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.setBrightness != null && Object.hasOwnProperty.call(message, "setBrightness"))
            $root.SetBrightness.encode(message.setBrightness, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.setPixelColor != null && Object.hasOwnProperty.call(message, "setPixelColor"))
            $root.SetPixelColor.encode(message.setPixelColor, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.setPixelColors != null && Object.hasOwnProperty.call(message, "setPixelColors"))
            $root.SetPixelColors.encode(message.setPixelColors, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.setLength != null && Object.hasOwnProperty.call(message, "setLength"))
            $root.SetNeoDriverLength.encode(message.setLength, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.setAccelRange != null && Object.hasOwnProperty.call(message, "setAccelRange"))
            $root.SetAccelerationRange.encode(message.setAccelRange, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.setRotRange != null && Object.hasOwnProperty.call(message, "setRotRange"))
            $root.SetRotationRange.encode(message.setRotRange, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.setAccelRate != null && Object.hasOwnProperty.call(message, "setAccelRate"))
            $root.SetAccelerationRate.encode(message.setAccelRate, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.setRotRate != null && Object.hasOwnProperty.call(message, "setRotRate"))
            $root.SetRotationRate.encode(message.setRotRate, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.setPressureRate != null && Object.hasOwnProperty.call(message, "setPressureRate"))
            $root.SetPressureSensorDataRate.encode(message.setPressureRate, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.setUvGain != null && Object.hasOwnProperty.call(message, "setUvGain"))
            $root.SetUVSensorGain.encode(message.setUvGain, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.setUvMode != null && Object.hasOwnProperty.call(message, "setUvMode"))
            $root.SetUVSensorMode.encode(message.setUvMode, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.setUvResolution != null && Object.hasOwnProperty.call(message, "setUvResolution"))
            $root.SetUVSensorResolution.encode(message.setUvResolution, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.nfcWriteText != null && Object.hasOwnProperty.call(message, "nfcWriteText"))
            $root.NFCWriteText.encode(message.nfcWriteText, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.nfcWriteUri != null && Object.hasOwnProperty.call(message, "nfcWriteUri"))
            $root.NFCWriteUri.encode(message.nfcWriteUri, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.nfcWriteUnabridgedUri != null && Object.hasOwnProperty.call(message, "nfcWriteUnabridgedUri"))
            $root.NFCWriteUnabridgedUri.encode(message.nfcWriteUnabridgedUri, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.nfcWriteSms != null && Object.hasOwnProperty.call(message, "nfcWriteSms"))
            $root.NFCWriteSms.encode(message.nfcWriteSms, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.nfcWriteEmail != null && Object.hasOwnProperty.call(message, "nfcWriteEmail"))
            $root.NFCWriteEmail.encode(message.nfcWriteEmail, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
        if (message.nfcWriteGeo != null && Object.hasOwnProperty.call(message, "nfcWriteGeo"))
            $root.NFCWriteGeoLocation.encode(message.nfcWriteGeo, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
        if (message.nfcWriteVcard != null && Object.hasOwnProperty.call(message, "nfcWriteVcard"))
            $root.NFCWriteVCard.encode(message.nfcWriteVcard, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DeviceCommand message, length delimited. Does not implicitly {@link DeviceCommand.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeviceCommand
     * @static
     * @param {IDeviceCommand} message DeviceCommand message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceCommand.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeviceCommand message from the specified reader or buffer.
     * @function decode
     * @memberof DeviceCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeviceCommand} DeviceCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceCommand.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceCommand();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.int32();
                    break;
                }
            case 2: {
                    message.address = reader.uint32();
                    break;
                }
            case 3: {
                    message.start = $root.StartDevice.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.stop = $root.StopDevice.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.getState = $root.GetDeviceState.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.setBrightness = $root.SetBrightness.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.setPixelColor = $root.SetPixelColor.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.setPixelColors = $root.SetPixelColors.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.setLength = $root.SetNeoDriverLength.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.setAccelRange = $root.SetAccelerationRange.decode(reader, reader.uint32());
                    break;
                }
            case 11: {
                    message.setRotRange = $root.SetRotationRange.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.setAccelRate = $root.SetAccelerationRate.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.setRotRate = $root.SetRotationRate.decode(reader, reader.uint32());
                    break;
                }
            case 14: {
                    message.setPressureRate = $root.SetPressureSensorDataRate.decode(reader, reader.uint32());
                    break;
                }
            case 15: {
                    message.setUvGain = $root.SetUVSensorGain.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.setUvMode = $root.SetUVSensorMode.decode(reader, reader.uint32());
                    break;
                }
            case 17: {
                    message.setUvResolution = $root.SetUVSensorResolution.decode(reader, reader.uint32());
                    break;
                }
            case 20: {
                    message.nfcWriteText = $root.NFCWriteText.decode(reader, reader.uint32());
                    break;
                }
            case 21: {
                    message.nfcWriteUri = $root.NFCWriteUri.decode(reader, reader.uint32());
                    break;
                }
            case 22: {
                    message.nfcWriteUnabridgedUri = $root.NFCWriteUnabridgedUri.decode(reader, reader.uint32());
                    break;
                }
            case 23: {
                    message.nfcWriteSms = $root.NFCWriteSms.decode(reader, reader.uint32());
                    break;
                }
            case 24: {
                    message.nfcWriteEmail = $root.NFCWriteEmail.decode(reader, reader.uint32());
                    break;
                }
            case 25: {
                    message.nfcWriteGeo = $root.NFCWriteGeoLocation.decode(reader, reader.uint32());
                    break;
                }
            case 26: {
                    message.nfcWriteVcard = $root.NFCWriteVCard.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeviceCommand message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeviceCommand
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeviceCommand} DeviceCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceCommand.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeviceCommand message.
     * @function verify
     * @memberof DeviceCommand
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeviceCommand.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                break;
            }
        if (message.address != null && message.hasOwnProperty("address"))
            if (!$util.isInteger(message.address))
                return "address: integer expected";
        if (message.start != null && message.hasOwnProperty("start")) {
            properties.payload = 1;
            {
                let error = $root.StartDevice.verify(message.start);
                if (error)
                    return "start." + error;
            }
        }
        if (message.stop != null && message.hasOwnProperty("stop")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.StopDevice.verify(message.stop);
                if (error)
                    return "stop." + error;
            }
        }
        if (message.getState != null && message.hasOwnProperty("getState")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.GetDeviceState.verify(message.getState);
                if (error)
                    return "getState." + error;
            }
        }
        if (message.setBrightness != null && message.hasOwnProperty("setBrightness")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetBrightness.verify(message.setBrightness);
                if (error)
                    return "setBrightness." + error;
            }
        }
        if (message.setPixelColor != null && message.hasOwnProperty("setPixelColor")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetPixelColor.verify(message.setPixelColor);
                if (error)
                    return "setPixelColor." + error;
            }
        }
        if (message.setPixelColors != null && message.hasOwnProperty("setPixelColors")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetPixelColors.verify(message.setPixelColors);
                if (error)
                    return "setPixelColors." + error;
            }
        }
        if (message.setLength != null && message.hasOwnProperty("setLength")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetNeoDriverLength.verify(message.setLength);
                if (error)
                    return "setLength." + error;
            }
        }
        if (message.setAccelRange != null && message.hasOwnProperty("setAccelRange")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetAccelerationRange.verify(message.setAccelRange);
                if (error)
                    return "setAccelRange." + error;
            }
        }
        if (message.setRotRange != null && message.hasOwnProperty("setRotRange")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetRotationRange.verify(message.setRotRange);
                if (error)
                    return "setRotRange." + error;
            }
        }
        if (message.setAccelRate != null && message.hasOwnProperty("setAccelRate")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetAccelerationRate.verify(message.setAccelRate);
                if (error)
                    return "setAccelRate." + error;
            }
        }
        if (message.setRotRate != null && message.hasOwnProperty("setRotRate")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetRotationRate.verify(message.setRotRate);
                if (error)
                    return "setRotRate." + error;
            }
        }
        if (message.setPressureRate != null && message.hasOwnProperty("setPressureRate")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetPressureSensorDataRate.verify(message.setPressureRate);
                if (error)
                    return "setPressureRate." + error;
            }
        }
        if (message.setUvGain != null && message.hasOwnProperty("setUvGain")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetUVSensorGain.verify(message.setUvGain);
                if (error)
                    return "setUvGain." + error;
            }
        }
        if (message.setUvMode != null && message.hasOwnProperty("setUvMode")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetUVSensorMode.verify(message.setUvMode);
                if (error)
                    return "setUvMode." + error;
            }
        }
        if (message.setUvResolution != null && message.hasOwnProperty("setUvResolution")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetUVSensorResolution.verify(message.setUvResolution);
                if (error)
                    return "setUvResolution." + error;
            }
        }
        if (message.nfcWriteText != null && message.hasOwnProperty("nfcWriteText")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.NFCWriteText.verify(message.nfcWriteText);
                if (error)
                    return "nfcWriteText." + error;
            }
        }
        if (message.nfcWriteUri != null && message.hasOwnProperty("nfcWriteUri")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.NFCWriteUri.verify(message.nfcWriteUri);
                if (error)
                    return "nfcWriteUri." + error;
            }
        }
        if (message.nfcWriteUnabridgedUri != null && message.hasOwnProperty("nfcWriteUnabridgedUri")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.NFCWriteUnabridgedUri.verify(message.nfcWriteUnabridgedUri);
                if (error)
                    return "nfcWriteUnabridgedUri." + error;
            }
        }
        if (message.nfcWriteSms != null && message.hasOwnProperty("nfcWriteSms")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.NFCWriteSms.verify(message.nfcWriteSms);
                if (error)
                    return "nfcWriteSms." + error;
            }
        }
        if (message.nfcWriteEmail != null && message.hasOwnProperty("nfcWriteEmail")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.NFCWriteEmail.verify(message.nfcWriteEmail);
                if (error)
                    return "nfcWriteEmail." + error;
            }
        }
        if (message.nfcWriteGeo != null && message.hasOwnProperty("nfcWriteGeo")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.NFCWriteGeoLocation.verify(message.nfcWriteGeo);
                if (error)
                    return "nfcWriteGeo." + error;
            }
        }
        if (message.nfcWriteVcard != null && message.hasOwnProperty("nfcWriteVcard")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.NFCWriteVCard.verify(message.nfcWriteVcard);
                if (error)
                    return "nfcWriteVcard." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DeviceCommand message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeviceCommand
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeviceCommand} DeviceCommand
     */
    DeviceCommand.fromObject = function fromObject(object) {
        if (object instanceof $root.DeviceCommand)
            return object;
        let message = new $root.DeviceCommand();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "DEVICE_TYPE_UNSPECIFIED":
        case 0:
            message.type = 0;
            break;
        case "DEVICE_TYPE_NEO_DRIVER":
        case 1:
            message.type = 1;
            break;
        case "DEVICE_TYPE_ROTARY_ENCODER":
        case 2:
            message.type = 2;
            break;
        case "DEVICE_TYPE_LINEAR_ENCODER":
        case 3:
            message.type = 3;
            break;
        case "DEVICE_TYPE_TOUCH_SENSOR":
        case 4:
            message.type = 4;
            break;
        case "DEVICE_TYPE_GYROSCOPE":
        case 5:
            message.type = 5;
            break;
        case "DEVICE_TYPE_TRINKEY":
        case 6:
            message.type = 6;
            break;
        case "DEVICE_TYPE_PRESSURE_SENSOR":
        case 7:
            message.type = 7;
            break;
        case "DEVICE_TYPE_CO2_SENSOR":
        case 8:
            message.type = 8;
            break;
        case "DEVICE_TYPE_DISTANCE_SENSOR":
        case 9:
            message.type = 9;
            break;
        case "DEVICE_TYPE_UV_SENSOR":
        case 10:
            message.type = 10;
            break;
        case "DEVICE_TYPE_NFC_TAG":
        case 11:
            message.type = 11;
            break;
        case "DEVICE_TYPE_RFID_READER":
        case 12:
            message.type = 12;
            break;
        }
        if (object.address != null)
            message.address = object.address >>> 0;
        if (object.start != null) {
            if (typeof object.start !== "object")
                throw TypeError(".DeviceCommand.start: object expected");
            message.start = $root.StartDevice.fromObject(object.start);
        }
        if (object.stop != null) {
            if (typeof object.stop !== "object")
                throw TypeError(".DeviceCommand.stop: object expected");
            message.stop = $root.StopDevice.fromObject(object.stop);
        }
        if (object.getState != null) {
            if (typeof object.getState !== "object")
                throw TypeError(".DeviceCommand.getState: object expected");
            message.getState = $root.GetDeviceState.fromObject(object.getState);
        }
        if (object.setBrightness != null) {
            if (typeof object.setBrightness !== "object")
                throw TypeError(".DeviceCommand.setBrightness: object expected");
            message.setBrightness = $root.SetBrightness.fromObject(object.setBrightness);
        }
        if (object.setPixelColor != null) {
            if (typeof object.setPixelColor !== "object")
                throw TypeError(".DeviceCommand.setPixelColor: object expected");
            message.setPixelColor = $root.SetPixelColor.fromObject(object.setPixelColor);
        }
        if (object.setPixelColors != null) {
            if (typeof object.setPixelColors !== "object")
                throw TypeError(".DeviceCommand.setPixelColors: object expected");
            message.setPixelColors = $root.SetPixelColors.fromObject(object.setPixelColors);
        }
        if (object.setLength != null) {
            if (typeof object.setLength !== "object")
                throw TypeError(".DeviceCommand.setLength: object expected");
            message.setLength = $root.SetNeoDriverLength.fromObject(object.setLength);
        }
        if (object.setAccelRange != null) {
            if (typeof object.setAccelRange !== "object")
                throw TypeError(".DeviceCommand.setAccelRange: object expected");
            message.setAccelRange = $root.SetAccelerationRange.fromObject(object.setAccelRange);
        }
        if (object.setRotRange != null) {
            if (typeof object.setRotRange !== "object")
                throw TypeError(".DeviceCommand.setRotRange: object expected");
            message.setRotRange = $root.SetRotationRange.fromObject(object.setRotRange);
        }
        if (object.setAccelRate != null) {
            if (typeof object.setAccelRate !== "object")
                throw TypeError(".DeviceCommand.setAccelRate: object expected");
            message.setAccelRate = $root.SetAccelerationRate.fromObject(object.setAccelRate);
        }
        if (object.setRotRate != null) {
            if (typeof object.setRotRate !== "object")
                throw TypeError(".DeviceCommand.setRotRate: object expected");
            message.setRotRate = $root.SetRotationRate.fromObject(object.setRotRate);
        }
        if (object.setPressureRate != null) {
            if (typeof object.setPressureRate !== "object")
                throw TypeError(".DeviceCommand.setPressureRate: object expected");
            message.setPressureRate = $root.SetPressureSensorDataRate.fromObject(object.setPressureRate);
        }
        if (object.setUvGain != null) {
            if (typeof object.setUvGain !== "object")
                throw TypeError(".DeviceCommand.setUvGain: object expected");
            message.setUvGain = $root.SetUVSensorGain.fromObject(object.setUvGain);
        }
        if (object.setUvMode != null) {
            if (typeof object.setUvMode !== "object")
                throw TypeError(".DeviceCommand.setUvMode: object expected");
            message.setUvMode = $root.SetUVSensorMode.fromObject(object.setUvMode);
        }
        if (object.setUvResolution != null) {
            if (typeof object.setUvResolution !== "object")
                throw TypeError(".DeviceCommand.setUvResolution: object expected");
            message.setUvResolution = $root.SetUVSensorResolution.fromObject(object.setUvResolution);
        }
        if (object.nfcWriteText != null) {
            if (typeof object.nfcWriteText !== "object")
                throw TypeError(".DeviceCommand.nfcWriteText: object expected");
            message.nfcWriteText = $root.NFCWriteText.fromObject(object.nfcWriteText);
        }
        if (object.nfcWriteUri != null) {
            if (typeof object.nfcWriteUri !== "object")
                throw TypeError(".DeviceCommand.nfcWriteUri: object expected");
            message.nfcWriteUri = $root.NFCWriteUri.fromObject(object.nfcWriteUri);
        }
        if (object.nfcWriteUnabridgedUri != null) {
            if (typeof object.nfcWriteUnabridgedUri !== "object")
                throw TypeError(".DeviceCommand.nfcWriteUnabridgedUri: object expected");
            message.nfcWriteUnabridgedUri = $root.NFCWriteUnabridgedUri.fromObject(object.nfcWriteUnabridgedUri);
        }
        if (object.nfcWriteSms != null) {
            if (typeof object.nfcWriteSms !== "object")
                throw TypeError(".DeviceCommand.nfcWriteSms: object expected");
            message.nfcWriteSms = $root.NFCWriteSms.fromObject(object.nfcWriteSms);
        }
        if (object.nfcWriteEmail != null) {
            if (typeof object.nfcWriteEmail !== "object")
                throw TypeError(".DeviceCommand.nfcWriteEmail: object expected");
            message.nfcWriteEmail = $root.NFCWriteEmail.fromObject(object.nfcWriteEmail);
        }
        if (object.nfcWriteGeo != null) {
            if (typeof object.nfcWriteGeo !== "object")
                throw TypeError(".DeviceCommand.nfcWriteGeo: object expected");
            message.nfcWriteGeo = $root.NFCWriteGeoLocation.fromObject(object.nfcWriteGeo);
        }
        if (object.nfcWriteVcard != null) {
            if (typeof object.nfcWriteVcard !== "object")
                throw TypeError(".DeviceCommand.nfcWriteVcard: object expected");
            message.nfcWriteVcard = $root.NFCWriteVCard.fromObject(object.nfcWriteVcard);
        }
        return message;
    };

    /**
     * Creates a plain object from a DeviceCommand message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeviceCommand
     * @static
     * @param {DeviceCommand} message DeviceCommand
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeviceCommand.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "DEVICE_TYPE_UNSPECIFIED" : 0;
            object.address = 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.DeviceType[message.type] === undefined ? message.type : $root.DeviceType[message.type] : message.type;
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = message.address;
        if (message.start != null && message.hasOwnProperty("start")) {
            object.start = $root.StartDevice.toObject(message.start, options);
            if (options.oneofs)
                object.payload = "start";
        }
        if (message.stop != null && message.hasOwnProperty("stop")) {
            object.stop = $root.StopDevice.toObject(message.stop, options);
            if (options.oneofs)
                object.payload = "stop";
        }
        if (message.getState != null && message.hasOwnProperty("getState")) {
            object.getState = $root.GetDeviceState.toObject(message.getState, options);
            if (options.oneofs)
                object.payload = "getState";
        }
        if (message.setBrightness != null && message.hasOwnProperty("setBrightness")) {
            object.setBrightness = $root.SetBrightness.toObject(message.setBrightness, options);
            if (options.oneofs)
                object.payload = "setBrightness";
        }
        if (message.setPixelColor != null && message.hasOwnProperty("setPixelColor")) {
            object.setPixelColor = $root.SetPixelColor.toObject(message.setPixelColor, options);
            if (options.oneofs)
                object.payload = "setPixelColor";
        }
        if (message.setPixelColors != null && message.hasOwnProperty("setPixelColors")) {
            object.setPixelColors = $root.SetPixelColors.toObject(message.setPixelColors, options);
            if (options.oneofs)
                object.payload = "setPixelColors";
        }
        if (message.setLength != null && message.hasOwnProperty("setLength")) {
            object.setLength = $root.SetNeoDriverLength.toObject(message.setLength, options);
            if (options.oneofs)
                object.payload = "setLength";
        }
        if (message.setAccelRange != null && message.hasOwnProperty("setAccelRange")) {
            object.setAccelRange = $root.SetAccelerationRange.toObject(message.setAccelRange, options);
            if (options.oneofs)
                object.payload = "setAccelRange";
        }
        if (message.setRotRange != null && message.hasOwnProperty("setRotRange")) {
            object.setRotRange = $root.SetRotationRange.toObject(message.setRotRange, options);
            if (options.oneofs)
                object.payload = "setRotRange";
        }
        if (message.setAccelRate != null && message.hasOwnProperty("setAccelRate")) {
            object.setAccelRate = $root.SetAccelerationRate.toObject(message.setAccelRate, options);
            if (options.oneofs)
                object.payload = "setAccelRate";
        }
        if (message.setRotRate != null && message.hasOwnProperty("setRotRate")) {
            object.setRotRate = $root.SetRotationRate.toObject(message.setRotRate, options);
            if (options.oneofs)
                object.payload = "setRotRate";
        }
        if (message.setPressureRate != null && message.hasOwnProperty("setPressureRate")) {
            object.setPressureRate = $root.SetPressureSensorDataRate.toObject(message.setPressureRate, options);
            if (options.oneofs)
                object.payload = "setPressureRate";
        }
        if (message.setUvGain != null && message.hasOwnProperty("setUvGain")) {
            object.setUvGain = $root.SetUVSensorGain.toObject(message.setUvGain, options);
            if (options.oneofs)
                object.payload = "setUvGain";
        }
        if (message.setUvMode != null && message.hasOwnProperty("setUvMode")) {
            object.setUvMode = $root.SetUVSensorMode.toObject(message.setUvMode, options);
            if (options.oneofs)
                object.payload = "setUvMode";
        }
        if (message.setUvResolution != null && message.hasOwnProperty("setUvResolution")) {
            object.setUvResolution = $root.SetUVSensorResolution.toObject(message.setUvResolution, options);
            if (options.oneofs)
                object.payload = "setUvResolution";
        }
        if (message.nfcWriteText != null && message.hasOwnProperty("nfcWriteText")) {
            object.nfcWriteText = $root.NFCWriteText.toObject(message.nfcWriteText, options);
            if (options.oneofs)
                object.payload = "nfcWriteText";
        }
        if (message.nfcWriteUri != null && message.hasOwnProperty("nfcWriteUri")) {
            object.nfcWriteUri = $root.NFCWriteUri.toObject(message.nfcWriteUri, options);
            if (options.oneofs)
                object.payload = "nfcWriteUri";
        }
        if (message.nfcWriteUnabridgedUri != null && message.hasOwnProperty("nfcWriteUnabridgedUri")) {
            object.nfcWriteUnabridgedUri = $root.NFCWriteUnabridgedUri.toObject(message.nfcWriteUnabridgedUri, options);
            if (options.oneofs)
                object.payload = "nfcWriteUnabridgedUri";
        }
        if (message.nfcWriteSms != null && message.hasOwnProperty("nfcWriteSms")) {
            object.nfcWriteSms = $root.NFCWriteSms.toObject(message.nfcWriteSms, options);
            if (options.oneofs)
                object.payload = "nfcWriteSms";
        }
        if (message.nfcWriteEmail != null && message.hasOwnProperty("nfcWriteEmail")) {
            object.nfcWriteEmail = $root.NFCWriteEmail.toObject(message.nfcWriteEmail, options);
            if (options.oneofs)
                object.payload = "nfcWriteEmail";
        }
        if (message.nfcWriteGeo != null && message.hasOwnProperty("nfcWriteGeo")) {
            object.nfcWriteGeo = $root.NFCWriteGeoLocation.toObject(message.nfcWriteGeo, options);
            if (options.oneofs)
                object.payload = "nfcWriteGeo";
        }
        if (message.nfcWriteVcard != null && message.hasOwnProperty("nfcWriteVcard")) {
            object.nfcWriteVcard = $root.NFCWriteVCard.toObject(message.nfcWriteVcard, options);
            if (options.oneofs)
                object.payload = "nfcWriteVcard";
        }
        return object;
    };

    /**
     * Converts this DeviceCommand to JSON.
     * @function toJSON
     * @memberof DeviceCommand
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeviceCommand.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DeviceCommand
     * @function getTypeUrl
     * @memberof DeviceCommand
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DeviceCommand.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DeviceCommand";
    };

    return DeviceCommand;
})();

export const StartDevice = $root.StartDevice = (() => {

    

    /**
     * Constructs a new StartDevice.
     * @exports StartDevice
     * @classdesc Represents a StartDevice.
     * @implements IStartDevice
     * @constructor
     * @param {IStartDevice=} [properties] Properties to set
     */
    function StartDevice(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * StartDevice gyroscopeChipset.
     * @member {GyroscopeChipset} gyroscopeChipset
     * @memberof StartDevice
     * @instance
     */
    StartDevice.prototype.gyroscopeChipset = 0;

    /**
     * StartDevice pressureSensorChipset.
     * @member {PressureSensorChipset} pressureSensorChipset
     * @memberof StartDevice
     * @instance
     */
    StartDevice.prototype.pressureSensorChipset = 0;

    /**
     * Creates a new StartDevice instance using the specified properties.
     * @function create
     * @memberof StartDevice
     * @static
     * @param {IStartDevice=} [properties] Properties to set
     * @returns {StartDevice} StartDevice instance
     */
    StartDevice.create = function create(properties) {
        return new StartDevice(properties);
    };

    /**
     * Encodes the specified StartDevice message. Does not implicitly {@link StartDevice.verify|verify} messages.
     * @function encode
     * @memberof StartDevice
     * @static
     * @param {IStartDevice} message StartDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartDevice.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.gyroscopeChipset != null && Object.hasOwnProperty.call(message, "gyroscopeChipset"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gyroscopeChipset);
        if (message.pressureSensorChipset != null && Object.hasOwnProperty.call(message, "pressureSensorChipset"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.pressureSensorChipset);
        return writer;
    };

    /**
     * Encodes the specified StartDevice message, length delimited. Does not implicitly {@link StartDevice.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StartDevice
     * @static
     * @param {IStartDevice} message StartDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StartDevice.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StartDevice message from the specified reader or buffer.
     * @function decode
     * @memberof StartDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StartDevice} StartDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartDevice.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.StartDevice();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.gyroscopeChipset = reader.int32();
                    break;
                }
            case 2: {
                    message.pressureSensorChipset = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StartDevice message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StartDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StartDevice} StartDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StartDevice.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StartDevice message.
     * @function verify
     * @memberof StartDevice
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StartDevice.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.gyroscopeChipset != null && message.hasOwnProperty("gyroscopeChipset"))
            switch (message.gyroscopeChipset) {
            default:
                return "gyroscopeChipset: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.pressureSensorChipset != null && message.hasOwnProperty("pressureSensorChipset"))
            switch (message.pressureSensorChipset) {
            default:
                return "pressureSensorChipset: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        return null;
    };

    /**
     * Creates a StartDevice message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StartDevice
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StartDevice} StartDevice
     */
    StartDevice.fromObject = function fromObject(object) {
        if (object instanceof $root.StartDevice)
            return object;
        let message = new $root.StartDevice();
        switch (object.gyroscopeChipset) {
        default:
            if (typeof object.gyroscopeChipset === "number") {
                message.gyroscopeChipset = object.gyroscopeChipset;
                break;
            }
            break;
        case "GYROSCOPE_CHIPSET_UNSPECIFIED":
        case 0:
            message.gyroscopeChipset = 0;
            break;
        case "GYROSCOPE_CHIPSET_LSM6DSOX":
        case 1:
            message.gyroscopeChipset = 1;
            break;
        case "GYROSCOPE_CHIPSET_ISM330DHCX":
        case 2:
            message.gyroscopeChipset = 2;
            break;
        case "GYROSCOPE_CHIPSET_LSM6DSO32":
        case 3:
            message.gyroscopeChipset = 3;
            break;
        }
        switch (object.pressureSensorChipset) {
        default:
            if (typeof object.pressureSensorChipset === "number") {
                message.pressureSensorChipset = object.pressureSensorChipset;
                break;
            }
            break;
        case "PRESSURE_SENSOR_CHIPSET_UNSPECIFIED":
        case 0:
            message.pressureSensorChipset = 0;
            break;
        case "PRESSURE_SENSOR_CHIPSET_LPS22":
        case 1:
            message.pressureSensorChipset = 1;
            break;
        case "PRESSURE_SENSOR_CHIPSET_LPS25":
        case 2:
            message.pressureSensorChipset = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a StartDevice message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StartDevice
     * @static
     * @param {StartDevice} message StartDevice
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StartDevice.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.gyroscopeChipset = options.enums === String ? "GYROSCOPE_CHIPSET_UNSPECIFIED" : 0;
            object.pressureSensorChipset = options.enums === String ? "PRESSURE_SENSOR_CHIPSET_UNSPECIFIED" : 0;
        }
        if (message.gyroscopeChipset != null && message.hasOwnProperty("gyroscopeChipset"))
            object.gyroscopeChipset = options.enums === String ? $root.GyroscopeChipset[message.gyroscopeChipset] === undefined ? message.gyroscopeChipset : $root.GyroscopeChipset[message.gyroscopeChipset] : message.gyroscopeChipset;
        if (message.pressureSensorChipset != null && message.hasOwnProperty("pressureSensorChipset"))
            object.pressureSensorChipset = options.enums === String ? $root.PressureSensorChipset[message.pressureSensorChipset] === undefined ? message.pressureSensorChipset : $root.PressureSensorChipset[message.pressureSensorChipset] : message.pressureSensorChipset;
        return object;
    };

    /**
     * Converts this StartDevice to JSON.
     * @function toJSON
     * @memberof StartDevice
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StartDevice.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for StartDevice
     * @function getTypeUrl
     * @memberof StartDevice
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StartDevice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StartDevice";
    };

    return StartDevice;
})();

export const StopDevice = $root.StopDevice = (() => {

    

    /**
     * Constructs a new StopDevice.
     * @exports StopDevice
     * @classdesc Represents a StopDevice.
     * @implements IStopDevice
     * @constructor
     * @param {IStopDevice=} [properties] Properties to set
     */
    function StopDevice(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new StopDevice instance using the specified properties.
     * @function create
     * @memberof StopDevice
     * @static
     * @param {IStopDevice=} [properties] Properties to set
     * @returns {StopDevice} StopDevice instance
     */
    StopDevice.create = function create(properties) {
        return new StopDevice(properties);
    };

    /**
     * Encodes the specified StopDevice message. Does not implicitly {@link StopDevice.verify|verify} messages.
     * @function encode
     * @memberof StopDevice
     * @static
     * @param {IStopDevice} message StopDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StopDevice.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified StopDevice message, length delimited. Does not implicitly {@link StopDevice.verify|verify} messages.
     * @function encodeDelimited
     * @memberof StopDevice
     * @static
     * @param {IStopDevice} message StopDevice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    StopDevice.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a StopDevice message from the specified reader or buffer.
     * @function decode
     * @memberof StopDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {StopDevice} StopDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StopDevice.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.StopDevice();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a StopDevice message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof StopDevice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {StopDevice} StopDevice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    StopDevice.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a StopDevice message.
     * @function verify
     * @memberof StopDevice
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    StopDevice.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a StopDevice message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof StopDevice
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {StopDevice} StopDevice
     */
    StopDevice.fromObject = function fromObject(object) {
        if (object instanceof $root.StopDevice)
            return object;
        return new $root.StopDevice();
    };

    /**
     * Creates a plain object from a StopDevice message. Also converts values to other types if specified.
     * @function toObject
     * @memberof StopDevice
     * @static
     * @param {StopDevice} message StopDevice
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    StopDevice.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this StopDevice to JSON.
     * @function toJSON
     * @memberof StopDevice
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    StopDevice.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for StopDevice
     * @function getTypeUrl
     * @memberof StopDevice
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    StopDevice.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/StopDevice";
    };

    return StopDevice;
})();

export const GetDeviceState = $root.GetDeviceState = (() => {

    

    /**
     * Constructs a new GetDeviceState.
     * @exports GetDeviceState
     * @classdesc Represents a GetDeviceState.
     * @implements IGetDeviceState
     * @constructor
     * @param {IGetDeviceState=} [properties] Properties to set
     */
    function GetDeviceState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new GetDeviceState instance using the specified properties.
     * @function create
     * @memberof GetDeviceState
     * @static
     * @param {IGetDeviceState=} [properties] Properties to set
     * @returns {GetDeviceState} GetDeviceState instance
     */
    GetDeviceState.create = function create(properties) {
        return new GetDeviceState(properties);
    };

    /**
     * Encodes the specified GetDeviceState message. Does not implicitly {@link GetDeviceState.verify|verify} messages.
     * @function encode
     * @memberof GetDeviceState
     * @static
     * @param {IGetDeviceState} message GetDeviceState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetDeviceState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified GetDeviceState message, length delimited. Does not implicitly {@link GetDeviceState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetDeviceState
     * @static
     * @param {IGetDeviceState} message GetDeviceState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetDeviceState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetDeviceState message from the specified reader or buffer.
     * @function decode
     * @memberof GetDeviceState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetDeviceState} GetDeviceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetDeviceState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetDeviceState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetDeviceState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetDeviceState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetDeviceState} GetDeviceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetDeviceState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetDeviceState message.
     * @function verify
     * @memberof GetDeviceState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetDeviceState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a GetDeviceState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetDeviceState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetDeviceState} GetDeviceState
     */
    GetDeviceState.fromObject = function fromObject(object) {
        if (object instanceof $root.GetDeviceState)
            return object;
        return new $root.GetDeviceState();
    };

    /**
     * Creates a plain object from a GetDeviceState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetDeviceState
     * @static
     * @param {GetDeviceState} message GetDeviceState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetDeviceState.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this GetDeviceState to JSON.
     * @function toJSON
     * @memberof GetDeviceState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetDeviceState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetDeviceState
     * @function getTypeUrl
     * @memberof GetDeviceState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetDeviceState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetDeviceState";
    };

    return GetDeviceState;
})();

export const SetBrightness = $root.SetBrightness = (() => {

    

    /**
     * Constructs a new SetBrightness.
     * @exports SetBrightness
     * @classdesc Represents a SetBrightness.
     * @implements ISetBrightness
     * @constructor
     * @param {ISetBrightness=} [properties] Properties to set
     */
    function SetBrightness(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetBrightness brightness.
     * @member {number} brightness
     * @memberof SetBrightness
     * @instance
     */
    SetBrightness.prototype.brightness = 0;

    /**
     * Creates a new SetBrightness instance using the specified properties.
     * @function create
     * @memberof SetBrightness
     * @static
     * @param {ISetBrightness=} [properties] Properties to set
     * @returns {SetBrightness} SetBrightness instance
     */
    SetBrightness.create = function create(properties) {
        return new SetBrightness(properties);
    };

    /**
     * Encodes the specified SetBrightness message. Does not implicitly {@link SetBrightness.verify|verify} messages.
     * @function encode
     * @memberof SetBrightness
     * @static
     * @param {ISetBrightness} message SetBrightness message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetBrightness.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.brightness != null && Object.hasOwnProperty.call(message, "brightness"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.brightness);
        return writer;
    };

    /**
     * Encodes the specified SetBrightness message, length delimited. Does not implicitly {@link SetBrightness.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetBrightness
     * @static
     * @param {ISetBrightness} message SetBrightness message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetBrightness.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetBrightness message from the specified reader or buffer.
     * @function decode
     * @memberof SetBrightness
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetBrightness} SetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetBrightness.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetBrightness();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.brightness = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetBrightness message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetBrightness
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetBrightness} SetBrightness
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetBrightness.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetBrightness message.
     * @function verify
     * @memberof SetBrightness
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetBrightness.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            if (!$util.isInteger(message.brightness))
                return "brightness: integer expected";
        return null;
    };

    /**
     * Creates a SetBrightness message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetBrightness
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetBrightness} SetBrightness
     */
    SetBrightness.fromObject = function fromObject(object) {
        if (object instanceof $root.SetBrightness)
            return object;
        let message = new $root.SetBrightness();
        if (object.brightness != null)
            message.brightness = object.brightness >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a SetBrightness message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetBrightness
     * @static
     * @param {SetBrightness} message SetBrightness
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetBrightness.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.brightness = 0;
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            object.brightness = message.brightness;
        return object;
    };

    /**
     * Converts this SetBrightness to JSON.
     * @function toJSON
     * @memberof SetBrightness
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetBrightness.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetBrightness
     * @function getTypeUrl
     * @memberof SetBrightness
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetBrightness.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetBrightness";
    };

    return SetBrightness;
})();

export const SetPixelColor = $root.SetPixelColor = (() => {

    

    /**
     * Constructs a new SetPixelColor.
     * @exports SetPixelColor
     * @classdesc Represents a SetPixelColor.
     * @implements ISetPixelColor
     * @constructor
     * @param {ISetPixelColor=} [properties] Properties to set
     */
    function SetPixelColor(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetPixelColor index.
     * @member {number} index
     * @memberof SetPixelColor
     * @instance
     */
    SetPixelColor.prototype.index = 0;

    /**
     * SetPixelColor color.
     * @member {number} color
     * @memberof SetPixelColor
     * @instance
     */
    SetPixelColor.prototype.color = 0;

    /**
     * Creates a new SetPixelColor instance using the specified properties.
     * @function create
     * @memberof SetPixelColor
     * @static
     * @param {ISetPixelColor=} [properties] Properties to set
     * @returns {SetPixelColor} SetPixelColor instance
     */
    SetPixelColor.create = function create(properties) {
        return new SetPixelColor(properties);
    };

    /**
     * Encodes the specified SetPixelColor message. Does not implicitly {@link SetPixelColor.verify|verify} messages.
     * @function encode
     * @memberof SetPixelColor
     * @static
     * @param {ISetPixelColor} message SetPixelColor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetPixelColor.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
        if (message.color != null && Object.hasOwnProperty.call(message, "color"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.color);
        return writer;
    };

    /**
     * Encodes the specified SetPixelColor message, length delimited. Does not implicitly {@link SetPixelColor.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetPixelColor
     * @static
     * @param {ISetPixelColor} message SetPixelColor message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetPixelColor.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetPixelColor message from the specified reader or buffer.
     * @function decode
     * @memberof SetPixelColor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetPixelColor} SetPixelColor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetPixelColor.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetPixelColor();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.index = reader.uint32();
                    break;
                }
            case 2: {
                    message.color = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetPixelColor message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetPixelColor
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetPixelColor} SetPixelColor
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetPixelColor.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetPixelColor message.
     * @function verify
     * @memberof SetPixelColor
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetPixelColor.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
        if (message.color != null && message.hasOwnProperty("color"))
            if (!$util.isInteger(message.color))
                return "color: integer expected";
        return null;
    };

    /**
     * Creates a SetPixelColor message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetPixelColor
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetPixelColor} SetPixelColor
     */
    SetPixelColor.fromObject = function fromObject(object) {
        if (object instanceof $root.SetPixelColor)
            return object;
        let message = new $root.SetPixelColor();
        if (object.index != null)
            message.index = object.index >>> 0;
        if (object.color != null)
            message.color = object.color >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a SetPixelColor message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetPixelColor
     * @static
     * @param {SetPixelColor} message SetPixelColor
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetPixelColor.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.index = 0;
            object.color = 0;
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = message.color;
        return object;
    };

    /**
     * Converts this SetPixelColor to JSON.
     * @function toJSON
     * @memberof SetPixelColor
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetPixelColor.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetPixelColor
     * @function getTypeUrl
     * @memberof SetPixelColor
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetPixelColor.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetPixelColor";
    };

    return SetPixelColor;
})();

export const SetPixelColors = $root.SetPixelColors = (() => {

    

    /**
     * Constructs a new SetPixelColors.
     * @exports SetPixelColors
     * @classdesc Represents a SetPixelColors.
     * @implements ISetPixelColors
     * @constructor
     * @param {ISetPixelColors=} [properties] Properties to set
     */
    function SetPixelColors(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetPixelColors offset.
     * @member {number} offset
     * @memberof SetPixelColors
     * @instance
     */
    SetPixelColors.prototype.offset = 0;

    /**
     * SetPixelColors colors.
     * @member {Uint8Array} colors
     * @memberof SetPixelColors
     * @instance
     */
    SetPixelColors.prototype.colors = $util.newBuffer([]);

    /**
     * SetPixelColors show.
     * @member {boolean} show
     * @memberof SetPixelColors
     * @instance
     */
    SetPixelColors.prototype.show = false;

    /**
     * Creates a new SetPixelColors instance using the specified properties.
     * @function create
     * @memberof SetPixelColors
     * @static
     * @param {ISetPixelColors=} [properties] Properties to set
     * @returns {SetPixelColors} SetPixelColors instance
     */
    SetPixelColors.create = function create(properties) {
        return new SetPixelColors(properties);
    };

    /**
     * Encodes the specified SetPixelColors message. Does not implicitly {@link SetPixelColors.verify|verify} messages.
     * @function encode
     * @memberof SetPixelColors
     * @static
     * @param {ISetPixelColors} message SetPixelColors message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetPixelColors.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.offset != null && Object.hasOwnProperty.call(message, "offset"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.offset);
        if (message.colors != null && Object.hasOwnProperty.call(message, "colors"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.colors);
        if (message.show != null && Object.hasOwnProperty.call(message, "show"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.show);
        return writer;
    };

    /**
     * Encodes the specified SetPixelColors message, length delimited. Does not implicitly {@link SetPixelColors.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetPixelColors
     * @static
     * @param {ISetPixelColors} message SetPixelColors message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetPixelColors.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetPixelColors message from the specified reader or buffer.
     * @function decode
     * @memberof SetPixelColors
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetPixelColors} SetPixelColors
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetPixelColors.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetPixelColors();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.offset = reader.uint32();
                    break;
                }
            case 2: {
                    message.colors = reader.bytes();
                    break;
                }
            case 3: {
                    message.show = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetPixelColors message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetPixelColors
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetPixelColors} SetPixelColors
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetPixelColors.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetPixelColors message.
     * @function verify
     * @memberof SetPixelColors
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetPixelColors.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.offset != null && message.hasOwnProperty("offset"))
            if (!$util.isInteger(message.offset))
                return "offset: integer expected";
        if (message.colors != null && message.hasOwnProperty("colors"))
            if (!(message.colors && typeof message.colors.length === "number" || $util.isString(message.colors)))
                return "colors: buffer expected";
        if (message.show != null && message.hasOwnProperty("show"))
            if (typeof message.show !== "boolean")
                return "show: boolean expected";
        return null;
    };

    /**
     * Creates a SetPixelColors message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetPixelColors
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetPixelColors} SetPixelColors
     */
    SetPixelColors.fromObject = function fromObject(object) {
        if (object instanceof $root.SetPixelColors)
            return object;
        let message = new $root.SetPixelColors();
        if (object.offset != null)
            message.offset = object.offset >>> 0;
        if (object.colors != null)
            if (typeof object.colors === "string")
                $util.base64.decode(object.colors, message.colors = $util.newBuffer($util.base64.length(object.colors)), 0);
            else if (object.colors.length >= 0)
                message.colors = object.colors;
        if (object.show != null)
            message.show = Boolean(object.show);
        return message;
    };

    /**
     * Creates a plain object from a SetPixelColors message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetPixelColors
     * @static
     * @param {SetPixelColors} message SetPixelColors
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetPixelColors.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.offset = 0;
            if (options.bytes === String)
                object.colors = "";
            else {
                object.colors = [];
                if (options.bytes !== Array)
                    object.colors = $util.newBuffer(object.colors);
            }
            object.show = false;
        }
        if (message.offset != null && message.hasOwnProperty("offset"))
            object.offset = message.offset;
        if (message.colors != null && message.hasOwnProperty("colors"))
            object.colors = options.bytes === String ? $util.base64.encode(message.colors, 0, message.colors.length) : options.bytes === Array ? Array.prototype.slice.call(message.colors) : message.colors;
        if (message.show != null && message.hasOwnProperty("show"))
            object.show = message.show;
        return object;
    };

    /**
     * Converts this SetPixelColors to JSON.
     * @function toJSON
     * @memberof SetPixelColors
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetPixelColors.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetPixelColors
     * @function getTypeUrl
     * @memberof SetPixelColors
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetPixelColors.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetPixelColors";
    };

    return SetPixelColors;
})();

export const SetNeoDriverLength = $root.SetNeoDriverLength = (() => {

    

    /**
     * Constructs a new SetNeoDriverLength.
     * @exports SetNeoDriverLength
     * @classdesc Represents a SetNeoDriverLength.
     * @implements ISetNeoDriverLength
     * @constructor
     * @param {ISetNeoDriverLength=} [properties] Properties to set
     */
    function SetNeoDriverLength(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetNeoDriverLength length.
     * @member {number} length
     * @memberof SetNeoDriverLength
     * @instance
     */
    SetNeoDriverLength.prototype.length = 0;

    /**
     * Creates a new SetNeoDriverLength instance using the specified properties.
     * @function create
     * @memberof SetNeoDriverLength
     * @static
     * @param {ISetNeoDriverLength=} [properties] Properties to set
     * @returns {SetNeoDriverLength} SetNeoDriverLength instance
     */
    SetNeoDriverLength.create = function create(properties) {
        return new SetNeoDriverLength(properties);
    };

    /**
     * Encodes the specified SetNeoDriverLength message. Does not implicitly {@link SetNeoDriverLength.verify|verify} messages.
     * @function encode
     * @memberof SetNeoDriverLength
     * @static
     * @param {ISetNeoDriverLength} message SetNeoDriverLength message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetNeoDriverLength.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.length != null && Object.hasOwnProperty.call(message, "length"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.length);
        return writer;
    };

    /**
     * Encodes the specified SetNeoDriverLength message, length delimited. Does not implicitly {@link SetNeoDriverLength.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetNeoDriverLength
     * @static
     * @param {ISetNeoDriverLength} message SetNeoDriverLength message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetNeoDriverLength.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetNeoDriverLength message from the specified reader or buffer.
     * @function decode
     * @memberof SetNeoDriverLength
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetNeoDriverLength} SetNeoDriverLength
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetNeoDriverLength.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetNeoDriverLength();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.length = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetNeoDriverLength message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetNeoDriverLength
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetNeoDriverLength} SetNeoDriverLength
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetNeoDriverLength.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetNeoDriverLength message.
     * @function verify
     * @memberof SetNeoDriverLength
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetNeoDriverLength.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.length != null && message.hasOwnProperty("length"))
            if (!$util.isInteger(message.length))
                return "length: integer expected";
        return null;
    };

    /**
     * Creates a SetNeoDriverLength message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetNeoDriverLength
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetNeoDriverLength} SetNeoDriverLength
     */
    SetNeoDriverLength.fromObject = function fromObject(object) {
        if (object instanceof $root.SetNeoDriverLength)
            return object;
        let message = new $root.SetNeoDriverLength();
        if (object.length != null)
            message.length = object.length >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a SetNeoDriverLength message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetNeoDriverLength
     * @static
     * @param {SetNeoDriverLength} message SetNeoDriverLength
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetNeoDriverLength.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.length = 0;
        if (message.length != null && message.hasOwnProperty("length"))
            object.length = message.length;
        return object;
    };

    /**
     * Converts this SetNeoDriverLength to JSON.
     * @function toJSON
     * @memberof SetNeoDriverLength
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetNeoDriverLength.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetNeoDriverLength
     * @function getTypeUrl
     * @memberof SetNeoDriverLength
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetNeoDriverLength.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetNeoDriverLength";
    };

    return SetNeoDriverLength;
})();

export const SetAccelerationRange = $root.SetAccelerationRange = (() => {

    

    /**
     * Constructs a new SetAccelerationRange.
     * @exports SetAccelerationRange
     * @classdesc Represents a SetAccelerationRange.
     * @implements ISetAccelerationRange
     * @constructor
     * @param {ISetAccelerationRange=} [properties] Properties to set
     */
    function SetAccelerationRange(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetAccelerationRange range.
     * @member {AccelerationRange} range
     * @memberof SetAccelerationRange
     * @instance
     */
    SetAccelerationRange.prototype.range = 0;

    /**
     * Creates a new SetAccelerationRange instance using the specified properties.
     * @function create
     * @memberof SetAccelerationRange
     * @static
     * @param {ISetAccelerationRange=} [properties] Properties to set
     * @returns {SetAccelerationRange} SetAccelerationRange instance
     */
    SetAccelerationRange.create = function create(properties) {
        return new SetAccelerationRange(properties);
    };

    /**
     * Encodes the specified SetAccelerationRange message. Does not implicitly {@link SetAccelerationRange.verify|verify} messages.
     * @function encode
     * @memberof SetAccelerationRange
     * @static
     * @param {ISetAccelerationRange} message SetAccelerationRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetAccelerationRange.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.range != null && Object.hasOwnProperty.call(message, "range"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.range);
        return writer;
    };

    /**
     * Encodes the specified SetAccelerationRange message, length delimited. Does not implicitly {@link SetAccelerationRange.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetAccelerationRange
     * @static
     * @param {ISetAccelerationRange} message SetAccelerationRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetAccelerationRange.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetAccelerationRange message from the specified reader or buffer.
     * @function decode
     * @memberof SetAccelerationRange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetAccelerationRange} SetAccelerationRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetAccelerationRange.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetAccelerationRange();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.range = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetAccelerationRange message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetAccelerationRange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetAccelerationRange} SetAccelerationRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetAccelerationRange.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetAccelerationRange message.
     * @function verify
     * @memberof SetAccelerationRange
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetAccelerationRange.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.range != null && message.hasOwnProperty("range"))
            switch (message.range) {
            default:
                return "range: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        return null;
    };

    /**
     * Creates a SetAccelerationRange message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetAccelerationRange
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetAccelerationRange} SetAccelerationRange
     */
    SetAccelerationRange.fromObject = function fromObject(object) {
        if (object instanceof $root.SetAccelerationRange)
            return object;
        let message = new $root.SetAccelerationRange();
        switch (object.range) {
        default:
            if (typeof object.range === "number") {
                message.range = object.range;
                break;
            }
            break;
        case "GYROSCOPE_ACCELERATION_RANGE_4_G":
        case 0:
            message.range = 0;
            break;
        case "GYROSCOPE_ACCELERATION_RANGE_8_G":
        case 1:
            message.range = 1;
            break;
        case "GYROSCOPE_ACCELERATION_RANGE_16_G":
        case 2:
            message.range = 2;
            break;
        case "GYROSCOPE_ACCELERATION_RANGE_32_G":
        case 3:
            message.range = 3;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a SetAccelerationRange message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetAccelerationRange
     * @static
     * @param {SetAccelerationRange} message SetAccelerationRange
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetAccelerationRange.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.range = options.enums === String ? "GYROSCOPE_ACCELERATION_RANGE_4_G" : 0;
        if (message.range != null && message.hasOwnProperty("range"))
            object.range = options.enums === String ? $root.AccelerationRange[message.range] === undefined ? message.range : $root.AccelerationRange[message.range] : message.range;
        return object;
    };

    /**
     * Converts this SetAccelerationRange to JSON.
     * @function toJSON
     * @memberof SetAccelerationRange
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetAccelerationRange.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetAccelerationRange
     * @function getTypeUrl
     * @memberof SetAccelerationRange
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetAccelerationRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetAccelerationRange";
    };

    return SetAccelerationRange;
})();

export const SetRotationRange = $root.SetRotationRange = (() => {

    

    /**
     * Constructs a new SetRotationRange.
     * @exports SetRotationRange
     * @classdesc Represents a SetRotationRange.
     * @implements ISetRotationRange
     * @constructor
     * @param {ISetRotationRange=} [properties] Properties to set
     */
    function SetRotationRange(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetRotationRange range.
     * @member {RotationRange} range
     * @memberof SetRotationRange
     * @instance
     */
    SetRotationRange.prototype.range = 0;

    /**
     * Creates a new SetRotationRange instance using the specified properties.
     * @function create
     * @memberof SetRotationRange
     * @static
     * @param {ISetRotationRange=} [properties] Properties to set
     * @returns {SetRotationRange} SetRotationRange instance
     */
    SetRotationRange.create = function create(properties) {
        return new SetRotationRange(properties);
    };

    /**
     * Encodes the specified SetRotationRange message. Does not implicitly {@link SetRotationRange.verify|verify} messages.
     * @function encode
     * @memberof SetRotationRange
     * @static
     * @param {ISetRotationRange} message SetRotationRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetRotationRange.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.range != null && Object.hasOwnProperty.call(message, "range"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.range);
        return writer;
    };

    /**
     * Encodes the specified SetRotationRange message, length delimited. Does not implicitly {@link SetRotationRange.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetRotationRange
     * @static
     * @param {ISetRotationRange} message SetRotationRange message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetRotationRange.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetRotationRange message from the specified reader or buffer.
     * @function decode
     * @memberof SetRotationRange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetRotationRange} SetRotationRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetRotationRange.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetRotationRange();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.range = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetRotationRange message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetRotationRange
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetRotationRange} SetRotationRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetRotationRange.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetRotationRange message.
     * @function verify
     * @memberof SetRotationRange
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetRotationRange.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.range != null && message.hasOwnProperty("range"))
            switch (message.range) {
            default:
                return "range: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        return null;
    };

    /**
     * Creates a SetRotationRange message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetRotationRange
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetRotationRange} SetRotationRange
     */
    SetRotationRange.fromObject = function fromObject(object) {
        if (object instanceof $root.SetRotationRange)
            return object;
        let message = new $root.SetRotationRange();
        switch (object.range) {
        default:
            if (typeof object.range === "number") {
                message.range = object.range;
                break;
            }
            break;
        case "GYROSCOPE_ROTATION_RANGE_DPS_125":
        case 0:
            message.range = 0;
            break;
        case "GYROSCOPE_ROTATION_RANGE_DPS_250":
        case 1:
            message.range = 1;
            break;
        case "GYROSCOPE_ROTATION_RANGE_DPS_500":
        case 2:
            message.range = 2;
            break;
        case "GYROSCOPE_ROTATION_RANGE_DPS_1000":
        case 3:
            message.range = 3;
            break;
        case "GYROSCOPE_ROTATION_RANGE_DPS_2000":
        case 4:
            message.range = 4;
            break;
        case "GYROSCOPE_ROTATION_RANGE_DPS_4000":
        case 5:
            message.range = 5;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a SetRotationRange message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetRotationRange
     * @static
     * @param {SetRotationRange} message SetRotationRange
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetRotationRange.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.range = options.enums === String ? "GYROSCOPE_ROTATION_RANGE_DPS_125" : 0;
        if (message.range != null && message.hasOwnProperty("range"))
            object.range = options.enums === String ? $root.RotationRange[message.range] === undefined ? message.range : $root.RotationRange[message.range] : message.range;
        return object;
    };

    /**
     * Converts this SetRotationRange to JSON.
     * @function toJSON
     * @memberof SetRotationRange
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetRotationRange.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetRotationRange
     * @function getTypeUrl
     * @memberof SetRotationRange
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetRotationRange.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetRotationRange";
    };

    return SetRotationRange;
})();

export const SetAccelerationRate = $root.SetAccelerationRate = (() => {

    

    /**
     * Constructs a new SetAccelerationRate.
     * @exports SetAccelerationRate
     * @classdesc Represents a SetAccelerationRate.
     * @implements ISetAccelerationRate
     * @constructor
     * @param {ISetAccelerationRate=} [properties] Properties to set
     */
    function SetAccelerationRate(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetAccelerationRate rate.
     * @member {DataRate} rate
     * @memberof SetAccelerationRate
     * @instance
     */
    SetAccelerationRate.prototype.rate = 0;

    /**
     * Creates a new SetAccelerationRate instance using the specified properties.
     * @function create
     * @memberof SetAccelerationRate
     * @static
     * @param {ISetAccelerationRate=} [properties] Properties to set
     * @returns {SetAccelerationRate} SetAccelerationRate instance
     */
    SetAccelerationRate.create = function create(properties) {
        return new SetAccelerationRate(properties);
    };

    /**
     * Encodes the specified SetAccelerationRate message. Does not implicitly {@link SetAccelerationRate.verify|verify} messages.
     * @function encode
     * @memberof SetAccelerationRate
     * @static
     * @param {ISetAccelerationRate} message SetAccelerationRate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetAccelerationRate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rate != null && Object.hasOwnProperty.call(message, "rate"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rate);
        return writer;
    };

    /**
     * Encodes the specified SetAccelerationRate message, length delimited. Does not implicitly {@link SetAccelerationRate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetAccelerationRate
     * @static
     * @param {ISetAccelerationRate} message SetAccelerationRate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetAccelerationRate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetAccelerationRate message from the specified reader or buffer.
     * @function decode
     * @memberof SetAccelerationRate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetAccelerationRate} SetAccelerationRate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetAccelerationRate.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetAccelerationRate();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.rate = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetAccelerationRate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetAccelerationRate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetAccelerationRate} SetAccelerationRate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetAccelerationRate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetAccelerationRate message.
     * @function verify
     * @memberof SetAccelerationRate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetAccelerationRate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rate != null && message.hasOwnProperty("rate"))
            switch (message.rate) {
            default:
                return "rate: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                break;
            }
        return null;
    };

    /**
     * Creates a SetAccelerationRate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetAccelerationRate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetAccelerationRate} SetAccelerationRate
     */
    SetAccelerationRate.fromObject = function fromObject(object) {
        if (object instanceof $root.SetAccelerationRate)
            return object;
        let message = new $root.SetAccelerationRate();
        switch (object.rate) {
        default:
            if (typeof object.rate === "number") {
                message.rate = object.rate;
                break;
            }
            break;
        case "GYROSCOPE_DATA_RATE_SHUTDOWN":
        case 0:
            message.rate = 0;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_12_5":
        case 1:
            message.rate = 1;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_26":
        case 2:
            message.rate = 2;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_52":
        case 3:
            message.rate = 3;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_104":
        case 4:
            message.rate = 4;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_208":
        case 5:
            message.rate = 5;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_416":
        case 6:
            message.rate = 6;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_833":
        case 7:
            message.rate = 7;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_1_66K":
        case 8:
            message.rate = 8;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_3_33K":
        case 9:
            message.rate = 9;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_6_66K":
        case 10:
            message.rate = 10;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a SetAccelerationRate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetAccelerationRate
     * @static
     * @param {SetAccelerationRate} message SetAccelerationRate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetAccelerationRate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.rate = options.enums === String ? "GYROSCOPE_DATA_RATE_SHUTDOWN" : 0;
        if (message.rate != null && message.hasOwnProperty("rate"))
            object.rate = options.enums === String ? $root.DataRate[message.rate] === undefined ? message.rate : $root.DataRate[message.rate] : message.rate;
        return object;
    };

    /**
     * Converts this SetAccelerationRate to JSON.
     * @function toJSON
     * @memberof SetAccelerationRate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetAccelerationRate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetAccelerationRate
     * @function getTypeUrl
     * @memberof SetAccelerationRate
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetAccelerationRate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetAccelerationRate";
    };

    return SetAccelerationRate;
})();

export const SetRotationRate = $root.SetRotationRate = (() => {

    

    /**
     * Constructs a new SetRotationRate.
     * @exports SetRotationRate
     * @classdesc Represents a SetRotationRate.
     * @implements ISetRotationRate
     * @constructor
     * @param {ISetRotationRate=} [properties] Properties to set
     */
    function SetRotationRate(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetRotationRate rate.
     * @member {DataRate} rate
     * @memberof SetRotationRate
     * @instance
     */
    SetRotationRate.prototype.rate = 0;

    /**
     * Creates a new SetRotationRate instance using the specified properties.
     * @function create
     * @memberof SetRotationRate
     * @static
     * @param {ISetRotationRate=} [properties] Properties to set
     * @returns {SetRotationRate} SetRotationRate instance
     */
    SetRotationRate.create = function create(properties) {
        return new SetRotationRate(properties);
    };

    /**
     * Encodes the specified SetRotationRate message. Does not implicitly {@link SetRotationRate.verify|verify} messages.
     * @function encode
     * @memberof SetRotationRate
     * @static
     * @param {ISetRotationRate} message SetRotationRate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetRotationRate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rate != null && Object.hasOwnProperty.call(message, "rate"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rate);
        return writer;
    };

    /**
     * Encodes the specified SetRotationRate message, length delimited. Does not implicitly {@link SetRotationRate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetRotationRate
     * @static
     * @param {ISetRotationRate} message SetRotationRate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetRotationRate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetRotationRate message from the specified reader or buffer.
     * @function decode
     * @memberof SetRotationRate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetRotationRate} SetRotationRate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetRotationRate.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetRotationRate();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.rate = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetRotationRate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetRotationRate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetRotationRate} SetRotationRate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetRotationRate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetRotationRate message.
     * @function verify
     * @memberof SetRotationRate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetRotationRate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rate != null && message.hasOwnProperty("rate"))
            switch (message.rate) {
            default:
                return "rate: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                break;
            }
        return null;
    };

    /**
     * Creates a SetRotationRate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetRotationRate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetRotationRate} SetRotationRate
     */
    SetRotationRate.fromObject = function fromObject(object) {
        if (object instanceof $root.SetRotationRate)
            return object;
        let message = new $root.SetRotationRate();
        switch (object.rate) {
        default:
            if (typeof object.rate === "number") {
                message.rate = object.rate;
                break;
            }
            break;
        case "GYROSCOPE_DATA_RATE_SHUTDOWN":
        case 0:
            message.rate = 0;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_12_5":
        case 1:
            message.rate = 1;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_26":
        case 2:
            message.rate = 2;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_52":
        case 3:
            message.rate = 3;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_104":
        case 4:
            message.rate = 4;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_208":
        case 5:
            message.rate = 5;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_416":
        case 6:
            message.rate = 6;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_833":
        case 7:
            message.rate = 7;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_1_66K":
        case 8:
            message.rate = 8;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_3_33K":
        case 9:
            message.rate = 9;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_6_66K":
        case 10:
            message.rate = 10;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a SetRotationRate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetRotationRate
     * @static
     * @param {SetRotationRate} message SetRotationRate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetRotationRate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.rate = options.enums === String ? "GYROSCOPE_DATA_RATE_SHUTDOWN" : 0;
        if (message.rate != null && message.hasOwnProperty("rate"))
            object.rate = options.enums === String ? $root.DataRate[message.rate] === undefined ? message.rate : $root.DataRate[message.rate] : message.rate;
        return object;
    };

    /**
     * Converts this SetRotationRate to JSON.
     * @function toJSON
     * @memberof SetRotationRate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetRotationRate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetRotationRate
     * @function getTypeUrl
     * @memberof SetRotationRate
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetRotationRate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetRotationRate";
    };

    return SetRotationRate;
})();

export const SetPressureSensorDataRate = $root.SetPressureSensorDataRate = (() => {

    

    /**
     * Constructs a new SetPressureSensorDataRate.
     * @exports SetPressureSensorDataRate
     * @classdesc Represents a SetPressureSensorDataRate.
     * @implements ISetPressureSensorDataRate
     * @constructor
     * @param {ISetPressureSensorDataRate=} [properties] Properties to set
     */
    function SetPressureSensorDataRate(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetPressureSensorDataRate rate.
     * @member {PressureSensorDataRate} rate
     * @memberof SetPressureSensorDataRate
     * @instance
     */
    SetPressureSensorDataRate.prototype.rate = 0;

    /**
     * Creates a new SetPressureSensorDataRate instance using the specified properties.
     * @function create
     * @memberof SetPressureSensorDataRate
     * @static
     * @param {ISetPressureSensorDataRate=} [properties] Properties to set
     * @returns {SetPressureSensorDataRate} SetPressureSensorDataRate instance
     */
    SetPressureSensorDataRate.create = function create(properties) {
        return new SetPressureSensorDataRate(properties);
    };

    /**
     * Encodes the specified SetPressureSensorDataRate message. Does not implicitly {@link SetPressureSensorDataRate.verify|verify} messages.
     * @function encode
     * @memberof SetPressureSensorDataRate
     * @static
     * @param {ISetPressureSensorDataRate} message SetPressureSensorDataRate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetPressureSensorDataRate.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rate != null && Object.hasOwnProperty.call(message, "rate"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.rate);
        return writer;
    };

    /**
     * Encodes the specified SetPressureSensorDataRate message, length delimited. Does not implicitly {@link SetPressureSensorDataRate.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetPressureSensorDataRate
     * @static
     * @param {ISetPressureSensorDataRate} message SetPressureSensorDataRate message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetPressureSensorDataRate.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetPressureSensorDataRate message from the specified reader or buffer.
     * @function decode
     * @memberof SetPressureSensorDataRate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetPressureSensorDataRate} SetPressureSensorDataRate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetPressureSensorDataRate.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetPressureSensorDataRate();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.rate = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetPressureSensorDataRate message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetPressureSensorDataRate
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetPressureSensorDataRate} SetPressureSensorDataRate
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetPressureSensorDataRate.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetPressureSensorDataRate message.
     * @function verify
     * @memberof SetPressureSensorDataRate
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetPressureSensorDataRate.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rate != null && message.hasOwnProperty("rate"))
            switch (message.rate) {
            default:
                return "rate: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
        return null;
    };

    /**
     * Creates a SetPressureSensorDataRate message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetPressureSensorDataRate
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetPressureSensorDataRate} SetPressureSensorDataRate
     */
    SetPressureSensorDataRate.fromObject = function fromObject(object) {
        if (object instanceof $root.SetPressureSensorDataRate)
            return object;
        let message = new $root.SetPressureSensorDataRate();
        switch (object.rate) {
        default:
            if (typeof object.rate === "number") {
                message.rate = object.rate;
                break;
            }
            break;
        case "PRESSURE_SENSOR_DATA_RATE_ONE_SHOT":
        case 0:
            message.rate = 0;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_1_HZ":
        case 1:
            message.rate = 1;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_7_HZ":
        case 2:
            message.rate = 2;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_10_HZ":
        case 3:
            message.rate = 3;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_12_5_HZ":
        case 4:
            message.rate = 4;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_25_HZ":
        case 5:
            message.rate = 5;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_50_HZ":
        case 6:
            message.rate = 6;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_75_HZ":
        case 7:
            message.rate = 7;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a SetPressureSensorDataRate message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetPressureSensorDataRate
     * @static
     * @param {SetPressureSensorDataRate} message SetPressureSensorDataRate
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetPressureSensorDataRate.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.rate = options.enums === String ? "PRESSURE_SENSOR_DATA_RATE_ONE_SHOT" : 0;
        if (message.rate != null && message.hasOwnProperty("rate"))
            object.rate = options.enums === String ? $root.PressureSensorDataRate[message.rate] === undefined ? message.rate : $root.PressureSensorDataRate[message.rate] : message.rate;
        return object;
    };

    /**
     * Converts this SetPressureSensorDataRate to JSON.
     * @function toJSON
     * @memberof SetPressureSensorDataRate
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetPressureSensorDataRate.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetPressureSensorDataRate
     * @function getTypeUrl
     * @memberof SetPressureSensorDataRate
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetPressureSensorDataRate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetPressureSensorDataRate";
    };

    return SetPressureSensorDataRate;
})();

export const SetUVSensorGain = $root.SetUVSensorGain = (() => {

    

    /**
     * Constructs a new SetUVSensorGain.
     * @exports SetUVSensorGain
     * @classdesc Represents a SetUVSensorGain.
     * @implements ISetUVSensorGain
     * @constructor
     * @param {ISetUVSensorGain=} [properties] Properties to set
     */
    function SetUVSensorGain(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetUVSensorGain gain.
     * @member {UVSensorGain} gain
     * @memberof SetUVSensorGain
     * @instance
     */
    SetUVSensorGain.prototype.gain = 0;

    /**
     * Creates a new SetUVSensorGain instance using the specified properties.
     * @function create
     * @memberof SetUVSensorGain
     * @static
     * @param {ISetUVSensorGain=} [properties] Properties to set
     * @returns {SetUVSensorGain} SetUVSensorGain instance
     */
    SetUVSensorGain.create = function create(properties) {
        return new SetUVSensorGain(properties);
    };

    /**
     * Encodes the specified SetUVSensorGain message. Does not implicitly {@link SetUVSensorGain.verify|verify} messages.
     * @function encode
     * @memberof SetUVSensorGain
     * @static
     * @param {ISetUVSensorGain} message SetUVSensorGain message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetUVSensorGain.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.gain != null && Object.hasOwnProperty.call(message, "gain"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gain);
        return writer;
    };

    /**
     * Encodes the specified SetUVSensorGain message, length delimited. Does not implicitly {@link SetUVSensorGain.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetUVSensorGain
     * @static
     * @param {ISetUVSensorGain} message SetUVSensorGain message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetUVSensorGain.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetUVSensorGain message from the specified reader or buffer.
     * @function decode
     * @memberof SetUVSensorGain
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetUVSensorGain} SetUVSensorGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetUVSensorGain.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetUVSensorGain();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.gain = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetUVSensorGain message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetUVSensorGain
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetUVSensorGain} SetUVSensorGain
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetUVSensorGain.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetUVSensorGain message.
     * @function verify
     * @memberof SetUVSensorGain
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetUVSensorGain.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.gain != null && message.hasOwnProperty("gain"))
            switch (message.gain) {
            default:
                return "gain: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        return null;
    };

    /**
     * Creates a SetUVSensorGain message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetUVSensorGain
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetUVSensorGain} SetUVSensorGain
     */
    SetUVSensorGain.fromObject = function fromObject(object) {
        if (object instanceof $root.SetUVSensorGain)
            return object;
        let message = new $root.SetUVSensorGain();
        switch (object.gain) {
        default:
            if (typeof object.gain === "number") {
                message.gain = object.gain;
                break;
            }
            break;
        case "UV_SENSOR_GAIN_1":
        case 0:
            message.gain = 0;
            break;
        case "UV_SENSOR_GAIN_3":
        case 1:
            message.gain = 1;
            break;
        case "UV_SENSOR_GAIN_6":
        case 2:
            message.gain = 2;
            break;
        case "UV_SENSOR_GAIN_9":
        case 3:
            message.gain = 3;
            break;
        case "UV_SENSOR_GAIN_18":
        case 4:
            message.gain = 4;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a SetUVSensorGain message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetUVSensorGain
     * @static
     * @param {SetUVSensorGain} message SetUVSensorGain
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetUVSensorGain.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.gain = options.enums === String ? "UV_SENSOR_GAIN_1" : 0;
        if (message.gain != null && message.hasOwnProperty("gain"))
            object.gain = options.enums === String ? $root.UVSensorGain[message.gain] === undefined ? message.gain : $root.UVSensorGain[message.gain] : message.gain;
        return object;
    };

    /**
     * Converts this SetUVSensorGain to JSON.
     * @function toJSON
     * @memberof SetUVSensorGain
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetUVSensorGain.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetUVSensorGain
     * @function getTypeUrl
     * @memberof SetUVSensorGain
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetUVSensorGain.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetUVSensorGain";
    };

    return SetUVSensorGain;
})();

export const SetUVSensorMode = $root.SetUVSensorMode = (() => {

    

    /**
     * Constructs a new SetUVSensorMode.
     * @exports SetUVSensorMode
     * @classdesc Represents a SetUVSensorMode.
     * @implements ISetUVSensorMode
     * @constructor
     * @param {ISetUVSensorMode=} [properties] Properties to set
     */
    function SetUVSensorMode(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetUVSensorMode mode.
     * @member {UVSensorMode} mode
     * @memberof SetUVSensorMode
     * @instance
     */
    SetUVSensorMode.prototype.mode = 0;

    /**
     * Creates a new SetUVSensorMode instance using the specified properties.
     * @function create
     * @memberof SetUVSensorMode
     * @static
     * @param {ISetUVSensorMode=} [properties] Properties to set
     * @returns {SetUVSensorMode} SetUVSensorMode instance
     */
    SetUVSensorMode.create = function create(properties) {
        return new SetUVSensorMode(properties);
    };

    /**
     * Encodes the specified SetUVSensorMode message. Does not implicitly {@link SetUVSensorMode.verify|verify} messages.
     * @function encode
     * @memberof SetUVSensorMode
     * @static
     * @param {ISetUVSensorMode} message SetUVSensorMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetUVSensorMode.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mode);
        return writer;
    };

    /**
     * Encodes the specified SetUVSensorMode message, length delimited. Does not implicitly {@link SetUVSensorMode.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetUVSensorMode
     * @static
     * @param {ISetUVSensorMode} message SetUVSensorMode message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetUVSensorMode.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetUVSensorMode message from the specified reader or buffer.
     * @function decode
     * @memberof SetUVSensorMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetUVSensorMode} SetUVSensorMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetUVSensorMode.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetUVSensorMode();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.mode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetUVSensorMode message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetUVSensorMode
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetUVSensorMode} SetUVSensorMode
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetUVSensorMode.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetUVSensorMode message.
     * @function verify
     * @memberof SetUVSensorMode
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetUVSensorMode.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            switch (message.mode) {
            default:
                return "mode: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates a SetUVSensorMode message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetUVSensorMode
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetUVSensorMode} SetUVSensorMode
     */
    SetUVSensorMode.fromObject = function fromObject(object) {
        if (object instanceof $root.SetUVSensorMode)
            return object;
        let message = new $root.SetUVSensorMode();
        switch (object.mode) {
        default:
            if (typeof object.mode === "number") {
                message.mode = object.mode;
                break;
            }
            break;
        case "UV_SENSOR_MODE_ALS":
        case 0:
            message.mode = 0;
            break;
        case "UV_SENSOR_MODE_UVS":
        case 1:
            message.mode = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a SetUVSensorMode message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetUVSensorMode
     * @static
     * @param {SetUVSensorMode} message SetUVSensorMode
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetUVSensorMode.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.mode = options.enums === String ? "UV_SENSOR_MODE_ALS" : 0;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = options.enums === String ? $root.UVSensorMode[message.mode] === undefined ? message.mode : $root.UVSensorMode[message.mode] : message.mode;
        return object;
    };

    /**
     * Converts this SetUVSensorMode to JSON.
     * @function toJSON
     * @memberof SetUVSensorMode
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetUVSensorMode.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetUVSensorMode
     * @function getTypeUrl
     * @memberof SetUVSensorMode
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetUVSensorMode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetUVSensorMode";
    };

    return SetUVSensorMode;
})();

export const SetUVSensorResolution = $root.SetUVSensorResolution = (() => {

    

    /**
     * Constructs a new SetUVSensorResolution.
     * @exports SetUVSensorResolution
     * @classdesc Represents a SetUVSensorResolution.
     * @implements ISetUVSensorResolution
     * @constructor
     * @param {ISetUVSensorResolution=} [properties] Properties to set
     */
    function SetUVSensorResolution(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetUVSensorResolution resolution.
     * @member {UVSensorResolution} resolution
     * @memberof SetUVSensorResolution
     * @instance
     */
    SetUVSensorResolution.prototype.resolution = 0;

    /**
     * Creates a new SetUVSensorResolution instance using the specified properties.
     * @function create
     * @memberof SetUVSensorResolution
     * @static
     * @param {ISetUVSensorResolution=} [properties] Properties to set
     * @returns {SetUVSensorResolution} SetUVSensorResolution instance
     */
    SetUVSensorResolution.create = function create(properties) {
        return new SetUVSensorResolution(properties);
    };

    /**
     * Encodes the specified SetUVSensorResolution message. Does not implicitly {@link SetUVSensorResolution.verify|verify} messages.
     * @function encode
     * @memberof SetUVSensorResolution
     * @static
     * @param {ISetUVSensorResolution} message SetUVSensorResolution message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetUVSensorResolution.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.resolution != null && Object.hasOwnProperty.call(message, "resolution"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.resolution);
        return writer;
    };

    /**
     * Encodes the specified SetUVSensorResolution message, length delimited. Does not implicitly {@link SetUVSensorResolution.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetUVSensorResolution
     * @static
     * @param {ISetUVSensorResolution} message SetUVSensorResolution message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetUVSensorResolution.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetUVSensorResolution message from the specified reader or buffer.
     * @function decode
     * @memberof SetUVSensorResolution
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetUVSensorResolution} SetUVSensorResolution
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetUVSensorResolution.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetUVSensorResolution();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.resolution = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SetUVSensorResolution message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetUVSensorResolution
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetUVSensorResolution} SetUVSensorResolution
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetUVSensorResolution.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetUVSensorResolution message.
     * @function verify
     * @memberof SetUVSensorResolution
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetUVSensorResolution.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.resolution != null && message.hasOwnProperty("resolution"))
            switch (message.resolution) {
            default:
                return "resolution: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        return null;
    };

    /**
     * Creates a SetUVSensorResolution message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetUVSensorResolution
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetUVSensorResolution} SetUVSensorResolution
     */
    SetUVSensorResolution.fromObject = function fromObject(object) {
        if (object instanceof $root.SetUVSensorResolution)
            return object;
        let message = new $root.SetUVSensorResolution();
        switch (object.resolution) {
        default:
            if (typeof object.resolution === "number") {
                message.resolution = object.resolution;
                break;
            }
            break;
        case "UV_SENSOR_RESOLUTION_20_BIT":
        case 0:
            message.resolution = 0;
            break;
        case "UV_SENSOR_RESOLUTION_19_BIT":
        case 1:
            message.resolution = 1;
            break;
        case "UV_SENSOR_RESOLUTION_18_BIT":
        case 2:
            message.resolution = 2;
            break;
        case "UV_SENSOR_RESOLUTION_17_BIT":
        case 3:
            message.resolution = 3;
            break;
        case "UV_SENSOR_RESOLUTION_16_BIT":
        case 4:
            message.resolution = 4;
            break;
        case "UV_SENSOR_RESOLUTION_13_BIT":
        case 5:
            message.resolution = 5;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a SetUVSensorResolution message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetUVSensorResolution
     * @static
     * @param {SetUVSensorResolution} message SetUVSensorResolution
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetUVSensorResolution.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.resolution = options.enums === String ? "UV_SENSOR_RESOLUTION_20_BIT" : 0;
        if (message.resolution != null && message.hasOwnProperty("resolution"))
            object.resolution = options.enums === String ? $root.UVSensorResolution[message.resolution] === undefined ? message.resolution : $root.UVSensorResolution[message.resolution] : message.resolution;
        return object;
    };

    /**
     * Converts this SetUVSensorResolution to JSON.
     * @function toJSON
     * @memberof SetUVSensorResolution
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetUVSensorResolution.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetUVSensorResolution
     * @function getTypeUrl
     * @memberof SetUVSensorResolution
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetUVSensorResolution.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetUVSensorResolution";
    };

    return SetUVSensorResolution;
})();

export const Response = $root.Response = (() => {

    

    /**
     * Constructs a new Response.
     * @exports Response
     * @classdesc Represents a Response.
     * @implements IResponse
     * @constructor
     * @param {IResponse=} [properties] Properties to set
     */
    function Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Response id.
     * @member {number} id
     * @memberof Response
     * @instance
     */
    Response.prototype.id = 0;

    /**
     * Response success.
     * @member {boolean} success
     * @memberof Response
     * @instance
     */
    Response.prototype.success = false;

    /**
     * Response deviceState.
     * @member {IDeviceState|null|undefined} deviceState
     * @memberof Response
     * @instance
     */
    Response.prototype.deviceState = null;

    /**
     * Response deviceEvent.
     * @member {IDeviceEvent|null|undefined} deviceEvent
     * @memberof Response
     * @instance
     */
    Response.prototype.deviceEvent = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Response payload.
     * @member {"deviceState"|"deviceEvent"|undefined} payload
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "payload", {
        get: $util.oneOfGetter($oneOfFields = ["deviceState", "deviceEvent"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new Response instance using the specified properties.
     * @function create
     * @memberof Response
     * @static
     * @param {IResponse=} [properties] Properties to set
     * @returns {Response} Response instance
     */
    Response.create = function create(properties) {
        return new Response(properties);
    };

    /**
     * Encodes the specified Response message. Does not implicitly {@link Response.verify|verify} messages.
     * @function encode
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.success);
        if (message.deviceState != null && Object.hasOwnProperty.call(message, "deviceState"))
            $root.DeviceState.encode(message.deviceState, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.deviceEvent != null && Object.hasOwnProperty.call(message, "deviceEvent"))
            $root.DeviceEvent.encode(message.deviceEvent, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified Response message, length delimited. Does not implicitly {@link Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Response
     * @static
     * @param {IResponse} message Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Response message from the specified reader or buffer.
     * @function decode
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.uint32();
                    break;
                }
            case 2: {
                    message.success = reader.bool();
                    break;
                }
            case 4: {
                    message.deviceState = $root.DeviceState.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.deviceEvent = $root.DeviceEvent.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Response} Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Response message.
     * @function verify
     * @memberof Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.deviceState != null && message.hasOwnProperty("deviceState")) {
            properties.payload = 1;
            {
                let error = $root.DeviceState.verify(message.deviceState);
                if (error)
                    return "deviceState." + error;
            }
        }
        if (message.deviceEvent != null && message.hasOwnProperty("deviceEvent")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.DeviceEvent.verify(message.deviceEvent);
                if (error)
                    return "deviceEvent." + error;
            }
        }
        return null;
    };

    /**
     * Creates a Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Response} Response
     */
    Response.fromObject = function fromObject(object) {
        if (object instanceof $root.Response)
            return object;
        let message = new $root.Response();
        if (object.id != null)
            message.id = object.id >>> 0;
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.deviceState != null) {
            if (typeof object.deviceState !== "object")
                throw TypeError(".Response.deviceState: object expected");
            message.deviceState = $root.DeviceState.fromObject(object.deviceState);
        }
        if (object.deviceEvent != null) {
            if (typeof object.deviceEvent !== "object")
                throw TypeError(".Response.deviceEvent: object expected");
            message.deviceEvent = $root.DeviceEvent.fromObject(object.deviceEvent);
        }
        return message;
    };

    /**
     * Creates a plain object from a Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Response
     * @static
     * @param {Response} message Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.id = 0;
            object.success = false;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.deviceState != null && message.hasOwnProperty("deviceState")) {
            object.deviceState = $root.DeviceState.toObject(message.deviceState, options);
            if (options.oneofs)
                object.payload = "deviceState";
        }
        if (message.deviceEvent != null && message.hasOwnProperty("deviceEvent")) {
            object.deviceEvent = $root.DeviceEvent.toObject(message.deviceEvent, options);
            if (options.oneofs)
                object.payload = "deviceEvent";
        }
        return object;
    };

    /**
     * Converts this Response to JSON.
     * @function toJSON
     * @memberof Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Response
     * @function getTypeUrl
     * @memberof Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Response";
    };

    return Response;
})();

export const DeviceState = $root.DeviceState = (() => {

    

    /**
     * Constructs a new DeviceState.
     * @exports DeviceState
     * @classdesc Represents a DeviceState.
     * @implements IDeviceState
     * @constructor
     * @param {IDeviceState=} [properties] Properties to set
     */
    function DeviceState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceState type.
     * @member {DeviceType} type
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.type = 0;

    /**
     * DeviceState address.
     * @member {number} address
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.address = 0;

    /**
     * DeviceState connected.
     * @member {boolean} connected
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.connected = false;

    /**
     * DeviceState co2Sensor.
     * @member {ICO2SensorState|null|undefined} co2Sensor
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.co2Sensor = null;

    /**
     * DeviceState distanceSensor.
     * @member {IDistanceSensorState|null|undefined} distanceSensor
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.distanceSensor = null;

    /**
     * DeviceState gyroscope.
     * @member {IGyroscopeState|null|undefined} gyroscope
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.gyroscope = null;

    /**
     * DeviceState linearEncoder.
     * @member {ILinearEncoderState|null|undefined} linearEncoder
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.linearEncoder = null;

    /**
     * DeviceState neoDriver.
     * @member {INeoDriverState|null|undefined} neoDriver
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.neoDriver = null;

    /**
     * DeviceState nfcTag.
     * @member {INFCTagState|null|undefined} nfcTag
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.nfcTag = null;

    /**
     * DeviceState pressureSensor.
     * @member {IPressureSensorState|null|undefined} pressureSensor
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.pressureSensor = null;

    /**
     * DeviceState rfidReader.
     * @member {IRFIDReaderState|null|undefined} rfidReader
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.rfidReader = null;

    /**
     * DeviceState rotaryEncoder.
     * @member {IRotaryEncoderState|null|undefined} rotaryEncoder
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.rotaryEncoder = null;

    /**
     * DeviceState trinkey.
     * @member {ITrinkeyState|null|undefined} trinkey
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.trinkey = null;

    /**
     * DeviceState touchSensor.
     * @member {ITouchSensorState|null|undefined} touchSensor
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.touchSensor = null;

    /**
     * DeviceState uvSensor.
     * @member {IUVSensorState|null|undefined} uvSensor
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.uvSensor = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * DeviceState state.
     * @member {"co2Sensor"|"distanceSensor"|"gyroscope"|"linearEncoder"|"neoDriver"|"nfcTag"|"pressureSensor"|"rfidReader"|"rotaryEncoder"|"trinkey"|"touchSensor"|"uvSensor"|undefined} state
     * @memberof DeviceState
     * @instance
     */
    Object.defineProperty(DeviceState.prototype, "state", {
        get: $util.oneOfGetter($oneOfFields = ["co2Sensor", "distanceSensor", "gyroscope", "linearEncoder", "neoDriver", "nfcTag", "pressureSensor", "rfidReader", "rotaryEncoder", "trinkey", "touchSensor", "uvSensor"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new DeviceState instance using the specified properties.
     * @function create
     * @memberof DeviceState
     * @static
     * @param {IDeviceState=} [properties] Properties to set
     * @returns {DeviceState} DeviceState instance
     */
    DeviceState.create = function create(properties) {
        return new DeviceState(properties);
    };

    /**
     * Encodes the specified DeviceState message. Does not implicitly {@link DeviceState.verify|verify} messages.
     * @function encode
     * @memberof DeviceState
     * @static
     * @param {IDeviceState} message DeviceState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.address != null && Object.hasOwnProperty.call(message, "address"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.address);
        if (message.connected != null && Object.hasOwnProperty.call(message, "connected"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.connected);
        if (message.co2Sensor != null && Object.hasOwnProperty.call(message, "co2Sensor"))
            $root.CO2SensorState.encode(message.co2Sensor, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.distanceSensor != null && Object.hasOwnProperty.call(message, "distanceSensor"))
            $root.DistanceSensorState.encode(message.distanceSensor, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.gyroscope != null && Object.hasOwnProperty.call(message, "gyroscope"))
            $root.GyroscopeState.encode(message.gyroscope, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.linearEncoder != null && Object.hasOwnProperty.call(message, "linearEncoder"))
            $root.LinearEncoderState.encode(message.linearEncoder, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.neoDriver != null && Object.hasOwnProperty.call(message, "neoDriver"))
            $root.NeoDriverState.encode(message.neoDriver, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.nfcTag != null && Object.hasOwnProperty.call(message, "nfcTag"))
            $root.NFCTagState.encode(message.nfcTag, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.pressureSensor != null && Object.hasOwnProperty.call(message, "pressureSensor"))
            $root.PressureSensorState.encode(message.pressureSensor, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.rfidReader != null && Object.hasOwnProperty.call(message, "rfidReader"))
            $root.RFIDReaderState.encode(message.rfidReader, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.rotaryEncoder != null && Object.hasOwnProperty.call(message, "rotaryEncoder"))
            $root.RotaryEncoderState.encode(message.rotaryEncoder, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.trinkey != null && Object.hasOwnProperty.call(message, "trinkey"))
            $root.TrinkeyState.encode(message.trinkey, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.touchSensor != null && Object.hasOwnProperty.call(message, "touchSensor"))
            $root.TouchSensorState.encode(message.touchSensor, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.uvSensor != null && Object.hasOwnProperty.call(message, "uvSensor"))
            $root.UVSensorState.encode(message.uvSensor, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DeviceState message, length delimited. Does not implicitly {@link DeviceState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeviceState
     * @static
     * @param {IDeviceState} message DeviceState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeviceState message from the specified reader or buffer.
     * @function decode
     * @memberof DeviceState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeviceState} DeviceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.int32();
                    break;
                }
            case 2: {
                    message.address = reader.uint32();
                    break;
                }
            case 3: {
                    message.connected = reader.bool();
                    break;
                }
            case 4: {
                    message.co2Sensor = $root.CO2SensorState.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.distanceSensor = $root.DistanceSensorState.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.gyroscope = $root.GyroscopeState.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.linearEncoder = $root.LinearEncoderState.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.neoDriver = $root.NeoDriverState.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.nfcTag = $root.NFCTagState.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.pressureSensor = $root.PressureSensorState.decode(reader, reader.uint32());
                    break;
                }
            case 11: {
                    message.rfidReader = $root.RFIDReaderState.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.rotaryEncoder = $root.RotaryEncoderState.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.trinkey = $root.TrinkeyState.decode(reader, reader.uint32());
                    break;
                }
            case 14: {
                    message.touchSensor = $root.TouchSensorState.decode(reader, reader.uint32());
                    break;
                }
            case 15: {
                    message.uvSensor = $root.UVSensorState.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeviceState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeviceState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeviceState} DeviceState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeviceState message.
     * @function verify
     * @memberof DeviceState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeviceState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                break;
            }
        if (message.address != null && message.hasOwnProperty("address"))
            if (!$util.isInteger(message.address))
                return "address: integer expected";
        if (message.connected != null && message.hasOwnProperty("connected"))
            if (typeof message.connected !== "boolean")
                return "connected: boolean expected";
        if (message.co2Sensor != null && message.hasOwnProperty("co2Sensor")) {
            properties.state = 1;
            {
                let error = $root.CO2SensorState.verify(message.co2Sensor);
                if (error)
                    return "co2Sensor." + error;
            }
        }
        if (message.distanceSensor != null && message.hasOwnProperty("distanceSensor")) {
            if (properties.state === 1)
                return "state: multiple values";
            properties.state = 1;
            {
                let error = $root.DistanceSensorState.verify(message.distanceSensor);
                if (error)
                    return "distanceSensor." + error;
            }
        }
        if (message.gyroscope != null && message.hasOwnProperty("gyroscope")) {
            if (properties.state === 1)
                return "state: multiple values";
            properties.state = 1;
            {
                let error = $root.GyroscopeState.verify(message.gyroscope);
                if (error)
                    return "gyroscope." + error;
            }
        }
        if (message.linearEncoder != null && message.hasOwnProperty("linearEncoder")) {
            if (properties.state === 1)
                return "state: multiple values";
            properties.state = 1;
            {
                let error = $root.LinearEncoderState.verify(message.linearEncoder);
                if (error)
                    return "linearEncoder." + error;
            }
        }
        if (message.neoDriver != null && message.hasOwnProperty("neoDriver")) {
            if (properties.state === 1)
                return "state: multiple values";
            properties.state = 1;
            {
                let error = $root.NeoDriverState.verify(message.neoDriver);
                if (error)
                    return "neoDriver." + error;
            }
        }
        if (message.nfcTag != null && message.hasOwnProperty("nfcTag")) {
            if (properties.state === 1)
                return "state: multiple values";
            properties.state = 1;
            {
                let error = $root.NFCTagState.verify(message.nfcTag);
                if (error)
                    return "nfcTag." + error;
            }
        }
        if (message.pressureSensor != null && message.hasOwnProperty("pressureSensor")) {
            if (properties.state === 1)
                return "state: multiple values";
            properties.state = 1;
            {
                let error = $root.PressureSensorState.verify(message.pressureSensor);
                if (error)
                    return "pressureSensor." + error;
            }
        }
        if (message.rfidReader != null && message.hasOwnProperty("rfidReader")) {
            if (properties.state === 1)
                return "state: multiple values";
            properties.state = 1;
            {
                let error = $root.RFIDReaderState.verify(message.rfidReader);
                if (error)
                    return "rfidReader." + error;
            }
        }
        if (message.rotaryEncoder != null && message.hasOwnProperty("rotaryEncoder")) {
            if (properties.state === 1)
                return "state: multiple values";
            properties.state = 1;
            {
                let error = $root.RotaryEncoderState.verify(message.rotaryEncoder);
                if (error)
                    return "rotaryEncoder." + error;
            }
        }
        if (message.trinkey != null && message.hasOwnProperty("trinkey")) {
            if (properties.state === 1)
                return "state: multiple values";
            properties.state = 1;
            {
                let error = $root.TrinkeyState.verify(message.trinkey);
                if (error)
                    return "trinkey." + error;
            }
        }
        if (message.touchSensor != null && message.hasOwnProperty("touchSensor")) {
            if (properties.state === 1)
                return "state: multiple values";
            properties.state = 1;
            {
                let error = $root.TouchSensorState.verify(message.touchSensor);
                if (error)
                    return "touchSensor." + error;
            }
        }
        if (message.uvSensor != null && message.hasOwnProperty("uvSensor")) {
            if (properties.state === 1)
                return "state: multiple values";
            properties.state = 1;
            {
                let error = $root.UVSensorState.verify(message.uvSensor);
                if (error)
                    return "uvSensor." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DeviceState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeviceState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeviceState} DeviceState
     */
    DeviceState.fromObject = function fromObject(object) {
        if (object instanceof $root.DeviceState)
            return object;
        let message = new $root.DeviceState();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "DEVICE_TYPE_UNSPECIFIED":
        case 0:
            message.type = 0;
            break;
        case "DEVICE_TYPE_NEO_DRIVER":
        case 1:
            message.type = 1;
            break;
        case "DEVICE_TYPE_ROTARY_ENCODER":
        case 2:
            message.type = 2;
            break;
        case "DEVICE_TYPE_LINEAR_ENCODER":
        case 3:
            message.type = 3;
            break;
        case "DEVICE_TYPE_TOUCH_SENSOR":
        case 4:
            message.type = 4;
            break;
        case "DEVICE_TYPE_GYROSCOPE":
        case 5:
            message.type = 5;
            break;
        case "DEVICE_TYPE_TRINKEY":
        case 6:
            message.type = 6;
            break;
        case "DEVICE_TYPE_PRESSURE_SENSOR":
        case 7:
            message.type = 7;
            break;
        case "DEVICE_TYPE_CO2_SENSOR":
        case 8:
            message.type = 8;
            break;
        case "DEVICE_TYPE_DISTANCE_SENSOR":
        case 9:
            message.type = 9;
            break;
        case "DEVICE_TYPE_UV_SENSOR":
        case 10:
            message.type = 10;
            break;
        case "DEVICE_TYPE_NFC_TAG":
        case 11:
            message.type = 11;
            break;
        case "DEVICE_TYPE_RFID_READER":
        case 12:
            message.type = 12;
            break;
        }
        if (object.address != null)
            message.address = object.address >>> 0;
        if (object.connected != null)
            message.connected = Boolean(object.connected);
        if (object.co2Sensor != null) {
            if (typeof object.co2Sensor !== "object")
                throw TypeError(".DeviceState.co2Sensor: object expected");
            message.co2Sensor = $root.CO2SensorState.fromObject(object.co2Sensor);
        }
        if (object.distanceSensor != null) {
            if (typeof object.distanceSensor !== "object")
                throw TypeError(".DeviceState.distanceSensor: object expected");
            message.distanceSensor = $root.DistanceSensorState.fromObject(object.distanceSensor);
        }
        if (object.gyroscope != null) {
            if (typeof object.gyroscope !== "object")
                throw TypeError(".DeviceState.gyroscope: object expected");
            message.gyroscope = $root.GyroscopeState.fromObject(object.gyroscope);
        }
        if (object.linearEncoder != null) {
            if (typeof object.linearEncoder !== "object")
                throw TypeError(".DeviceState.linearEncoder: object expected");
            message.linearEncoder = $root.LinearEncoderState.fromObject(object.linearEncoder);
        }
        if (object.neoDriver != null) {
            if (typeof object.neoDriver !== "object")
                throw TypeError(".DeviceState.neoDriver: object expected");
            message.neoDriver = $root.NeoDriverState.fromObject(object.neoDriver);
        }
        if (object.nfcTag != null) {
            if (typeof object.nfcTag !== "object")
                throw TypeError(".DeviceState.nfcTag: object expected");
            message.nfcTag = $root.NFCTagState.fromObject(object.nfcTag);
        }
        if (object.pressureSensor != null) {
            if (typeof object.pressureSensor !== "object")
                throw TypeError(".DeviceState.pressureSensor: object expected");
            message.pressureSensor = $root.PressureSensorState.fromObject(object.pressureSensor);
        }
        if (object.rfidReader != null) {
            if (typeof object.rfidReader !== "object")
                throw TypeError(".DeviceState.rfidReader: object expected");
            message.rfidReader = $root.RFIDReaderState.fromObject(object.rfidReader);
        }
        if (object.rotaryEncoder != null) {
            if (typeof object.rotaryEncoder !== "object")
                throw TypeError(".DeviceState.rotaryEncoder: object expected");
            message.rotaryEncoder = $root.RotaryEncoderState.fromObject(object.rotaryEncoder);
        }
        if (object.trinkey != null) {
            if (typeof object.trinkey !== "object")
                throw TypeError(".DeviceState.trinkey: object expected");
            message.trinkey = $root.TrinkeyState.fromObject(object.trinkey);
        }
        if (object.touchSensor != null) {
            if (typeof object.touchSensor !== "object")
                throw TypeError(".DeviceState.touchSensor: object expected");
            message.touchSensor = $root.TouchSensorState.fromObject(object.touchSensor);
        }
        if (object.uvSensor != null) {
            if (typeof object.uvSensor !== "object")
                throw TypeError(".DeviceState.uvSensor: object expected");
            message.uvSensor = $root.UVSensorState.fromObject(object.uvSensor);
        }
        return message;
    };

    /**
     * Creates a plain object from a DeviceState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeviceState
     * @static
     * @param {DeviceState} message DeviceState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeviceState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "DEVICE_TYPE_UNSPECIFIED" : 0;
            object.address = 0;
            object.connected = false;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.DeviceType[message.type] === undefined ? message.type : $root.DeviceType[message.type] : message.type;
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = message.address;
        if (message.connected != null && message.hasOwnProperty("connected"))
            object.connected = message.connected;
        if (message.co2Sensor != null && message.hasOwnProperty("co2Sensor")) {
            object.co2Sensor = $root.CO2SensorState.toObject(message.co2Sensor, options);
            if (options.oneofs)
                object.state = "co2Sensor";
        }
        if (message.distanceSensor != null && message.hasOwnProperty("distanceSensor")) {
            object.distanceSensor = $root.DistanceSensorState.toObject(message.distanceSensor, options);
            if (options.oneofs)
                object.state = "distanceSensor";
        }
        if (message.gyroscope != null && message.hasOwnProperty("gyroscope")) {
            object.gyroscope = $root.GyroscopeState.toObject(message.gyroscope, options);
            if (options.oneofs)
                object.state = "gyroscope";
        }
        if (message.linearEncoder != null && message.hasOwnProperty("linearEncoder")) {
            object.linearEncoder = $root.LinearEncoderState.toObject(message.linearEncoder, options);
            if (options.oneofs)
                object.state = "linearEncoder";
        }
        if (message.neoDriver != null && message.hasOwnProperty("neoDriver")) {
            object.neoDriver = $root.NeoDriverState.toObject(message.neoDriver, options);
            if (options.oneofs)
                object.state = "neoDriver";
        }
        if (message.nfcTag != null && message.hasOwnProperty("nfcTag")) {
            object.nfcTag = $root.NFCTagState.toObject(message.nfcTag, options);
            if (options.oneofs)
                object.state = "nfcTag";
        }
        if (message.pressureSensor != null && message.hasOwnProperty("pressureSensor")) {
            object.pressureSensor = $root.PressureSensorState.toObject(message.pressureSensor, options);
            if (options.oneofs)
                object.state = "pressureSensor";
        }
        if (message.rfidReader != null && message.hasOwnProperty("rfidReader")) {
            object.rfidReader = $root.RFIDReaderState.toObject(message.rfidReader, options);
            if (options.oneofs)
                object.state = "rfidReader";
        }
        if (message.rotaryEncoder != null && message.hasOwnProperty("rotaryEncoder")) {
            object.rotaryEncoder = $root.RotaryEncoderState.toObject(message.rotaryEncoder, options);
            if (options.oneofs)
                object.state = "rotaryEncoder";
        }
        if (message.trinkey != null && message.hasOwnProperty("trinkey")) {
            object.trinkey = $root.TrinkeyState.toObject(message.trinkey, options);
            if (options.oneofs)
                object.state = "trinkey";
        }
        if (message.touchSensor != null && message.hasOwnProperty("touchSensor")) {
            object.touchSensor = $root.TouchSensorState.toObject(message.touchSensor, options);
            if (options.oneofs)
                object.state = "touchSensor";
        }
        if (message.uvSensor != null && message.hasOwnProperty("uvSensor")) {
            object.uvSensor = $root.UVSensorState.toObject(message.uvSensor, options);
            if (options.oneofs)
                object.state = "uvSensor";
        }
        return object;
    };

    /**
     * Converts this DeviceState to JSON.
     * @function toJSON
     * @memberof DeviceState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeviceState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DeviceState
     * @function getTypeUrl
     * @memberof DeviceState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DeviceState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DeviceState";
    };

    return DeviceState;
})();

export const DeviceEvent = $root.DeviceEvent = (() => {

    

    /**
     * Constructs a new DeviceEvent.
     * @exports DeviceEvent
     * @classdesc Represents a DeviceEvent.
     * @implements IDeviceEvent
     * @constructor
     * @param {IDeviceEvent=} [properties] Properties to set
     */
    function DeviceEvent(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DeviceEvent type.
     * @member {DeviceType} type
     * @memberof DeviceEvent
     * @instance
     */
    DeviceEvent.prototype.type = 0;

    /**
     * DeviceEvent address.
     * @member {number} address
     * @memberof DeviceEvent
     * @instance
     */
    DeviceEvent.prototype.address = 0;

    /**
     * DeviceEvent rotaryChanged.
     * @member {IRotaryEncoderChanged|null|undefined} rotaryChanged
     * @memberof DeviceEvent
     * @instance
     */
    DeviceEvent.prototype.rotaryChanged = null;

    /**
     * DeviceEvent rotaryButton.
     * @member {IRotaryEncoderButton|null|undefined} rotaryButton
     * @memberof DeviceEvent
     * @instance
     */
    DeviceEvent.prototype.rotaryButton = null;

    /**
     * DeviceEvent linearChanged.
     * @member {ILinearEncoderChanged|null|undefined} linearChanged
     * @memberof DeviceEvent
     * @instance
     */
    DeviceEvent.prototype.linearChanged = null;

    /**
     * DeviceEvent touchButton.
     * @member {ITouchSensorButton|null|undefined} touchButton
     * @memberof DeviceEvent
     * @instance
     */
    DeviceEvent.prototype.touchButton = null;

    /**
     * DeviceEvent gyroscopeData.
     * @member {IGyroscopeChanged|null|undefined} gyroscopeData
     * @memberof DeviceEvent
     * @instance
     */
    DeviceEvent.prototype.gyroscopeData = null;

    /**
     * DeviceEvent pressureSensorData.
     * @member {IPressureSensorData|null|undefined} pressureSensorData
     * @memberof DeviceEvent
     * @instance
     */
    DeviceEvent.prototype.pressureSensorData = null;

    /**
     * DeviceEvent co2SensorData.
     * @member {ICO2SensorData|null|undefined} co2SensorData
     * @memberof DeviceEvent
     * @instance
     */
    DeviceEvent.prototype.co2SensorData = null;

    /**
     * DeviceEvent distanceSensorData.
     * @member {IDistanceSensorData|null|undefined} distanceSensorData
     * @memberof DeviceEvent
     * @instance
     */
    DeviceEvent.prototype.distanceSensorData = null;

    /**
     * DeviceEvent uvSensorData.
     * @member {IUVSensorData|null|undefined} uvSensorData
     * @memberof DeviceEvent
     * @instance
     */
    DeviceEvent.prototype.uvSensorData = null;

    /**
     * DeviceEvent rfidReaderData.
     * @member {IRFIDReaderData|null|undefined} rfidReaderData
     * @memberof DeviceEvent
     * @instance
     */
    DeviceEvent.prototype.rfidReaderData = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * DeviceEvent event.
     * @member {"rotaryChanged"|"rotaryButton"|"linearChanged"|"touchButton"|"gyroscopeData"|"pressureSensorData"|"co2SensorData"|"distanceSensorData"|"uvSensorData"|"rfidReaderData"|undefined} event
     * @memberof DeviceEvent
     * @instance
     */
    Object.defineProperty(DeviceEvent.prototype, "event", {
        get: $util.oneOfGetter($oneOfFields = ["rotaryChanged", "rotaryButton", "linearChanged", "touchButton", "gyroscopeData", "pressureSensorData", "co2SensorData", "distanceSensorData", "uvSensorData", "rfidReaderData"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new DeviceEvent instance using the specified properties.
     * @function create
     * @memberof DeviceEvent
     * @static
     * @param {IDeviceEvent=} [properties] Properties to set
     * @returns {DeviceEvent} DeviceEvent instance
     */
    DeviceEvent.create = function create(properties) {
        return new DeviceEvent(properties);
    };

    /**
     * Encodes the specified DeviceEvent message. Does not implicitly {@link DeviceEvent.verify|verify} messages.
     * @function encode
     * @memberof DeviceEvent
     * @static
     * @param {IDeviceEvent} message DeviceEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceEvent.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.address != null && Object.hasOwnProperty.call(message, "address"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.address);
        if (message.rotaryChanged != null && Object.hasOwnProperty.call(message, "rotaryChanged"))
            $root.RotaryEncoderChanged.encode(message.rotaryChanged, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.rotaryButton != null && Object.hasOwnProperty.call(message, "rotaryButton"))
            $root.RotaryEncoderButton.encode(message.rotaryButton, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.linearChanged != null && Object.hasOwnProperty.call(message, "linearChanged"))
            $root.LinearEncoderChanged.encode(message.linearChanged, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.touchButton != null && Object.hasOwnProperty.call(message, "touchButton"))
            $root.TouchSensorButton.encode(message.touchButton, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.gyroscopeData != null && Object.hasOwnProperty.call(message, "gyroscopeData"))
            $root.GyroscopeChanged.encode(message.gyroscopeData, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.pressureSensorData != null && Object.hasOwnProperty.call(message, "pressureSensorData"))
            $root.PressureSensorData.encode(message.pressureSensorData, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.co2SensorData != null && Object.hasOwnProperty.call(message, "co2SensorData"))
            $root.CO2SensorData.encode(message.co2SensorData, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.distanceSensorData != null && Object.hasOwnProperty.call(message, "distanceSensorData"))
            $root.DistanceSensorData.encode(message.distanceSensorData, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.uvSensorData != null && Object.hasOwnProperty.call(message, "uvSensorData"))
            $root.UVSensorData.encode(message.uvSensorData, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.rfidReaderData != null && Object.hasOwnProperty.call(message, "rfidReaderData"))
            $root.RFIDReaderData.encode(message.rfidReaderData, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DeviceEvent message, length delimited. Does not implicitly {@link DeviceEvent.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DeviceEvent
     * @static
     * @param {IDeviceEvent} message DeviceEvent message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DeviceEvent.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DeviceEvent message from the specified reader or buffer.
     * @function decode
     * @memberof DeviceEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DeviceEvent} DeviceEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceEvent.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DeviceEvent();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.int32();
                    break;
                }
            case 2: {
                    message.address = reader.uint32();
                    break;
                }
            case 3: {
                    message.rotaryChanged = $root.RotaryEncoderChanged.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.rotaryButton = $root.RotaryEncoderButton.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.linearChanged = $root.LinearEncoderChanged.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.touchButton = $root.TouchSensorButton.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.gyroscopeData = $root.GyroscopeChanged.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.pressureSensorData = $root.PressureSensorData.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.co2SensorData = $root.CO2SensorData.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.distanceSensorData = $root.DistanceSensorData.decode(reader, reader.uint32());
                    break;
                }
            case 11: {
                    message.uvSensorData = $root.UVSensorData.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.rfidReaderData = $root.RFIDReaderData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DeviceEvent message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DeviceEvent
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DeviceEvent} DeviceEvent
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DeviceEvent.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DeviceEvent message.
     * @function verify
     * @memberof DeviceEvent
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DeviceEvent.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
                break;
            }
        if (message.address != null && message.hasOwnProperty("address"))
            if (!$util.isInteger(message.address))
                return "address: integer expected";
        if (message.rotaryChanged != null && message.hasOwnProperty("rotaryChanged")) {
            properties.event = 1;
            {
                let error = $root.RotaryEncoderChanged.verify(message.rotaryChanged);
                if (error)
                    return "rotaryChanged." + error;
            }
        }
        if (message.rotaryButton != null && message.hasOwnProperty("rotaryButton")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.RotaryEncoderButton.verify(message.rotaryButton);
                if (error)
                    return "rotaryButton." + error;
            }
        }
        if (message.linearChanged != null && message.hasOwnProperty("linearChanged")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.LinearEncoderChanged.verify(message.linearChanged);
                if (error)
                    return "linearChanged." + error;
            }
        }
        if (message.touchButton != null && message.hasOwnProperty("touchButton")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.TouchSensorButton.verify(message.touchButton);
                if (error)
                    return "touchButton." + error;
            }
        }
        if (message.gyroscopeData != null && message.hasOwnProperty("gyroscopeData")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.GyroscopeChanged.verify(message.gyroscopeData);
                if (error)
                    return "gyroscopeData." + error;
            }
        }
        if (message.pressureSensorData != null && message.hasOwnProperty("pressureSensorData")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.PressureSensorData.verify(message.pressureSensorData);
                if (error)
                    return "pressureSensorData." + error;
            }
        }
        if (message.co2SensorData != null && message.hasOwnProperty("co2SensorData")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.CO2SensorData.verify(message.co2SensorData);
                if (error)
                    return "co2SensorData." + error;
            }
        }
        if (message.distanceSensorData != null && message.hasOwnProperty("distanceSensorData")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.DistanceSensorData.verify(message.distanceSensorData);
                if (error)
                    return "distanceSensorData." + error;
            }
        }
        if (message.uvSensorData != null && message.hasOwnProperty("uvSensorData")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.UVSensorData.verify(message.uvSensorData);
                if (error)
                    return "uvSensorData." + error;
            }
        }
        if (message.rfidReaderData != null && message.hasOwnProperty("rfidReaderData")) {
            if (properties.event === 1)
                return "event: multiple values";
            properties.event = 1;
            {
                let error = $root.RFIDReaderData.verify(message.rfidReaderData);
                if (error)
                    return "rfidReaderData." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DeviceEvent message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DeviceEvent
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DeviceEvent} DeviceEvent
     */
    DeviceEvent.fromObject = function fromObject(object) {
        if (object instanceof $root.DeviceEvent)
            return object;
        let message = new $root.DeviceEvent();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "DEVICE_TYPE_UNSPECIFIED":
        case 0:
            message.type = 0;
            break;
        case "DEVICE_TYPE_NEO_DRIVER":
        case 1:
            message.type = 1;
            break;
        case "DEVICE_TYPE_ROTARY_ENCODER":
        case 2:
            message.type = 2;
            break;
        case "DEVICE_TYPE_LINEAR_ENCODER":
        case 3:
            message.type = 3;
            break;
        case "DEVICE_TYPE_TOUCH_SENSOR":
        case 4:
            message.type = 4;
            break;
        case "DEVICE_TYPE_GYROSCOPE":
        case 5:
            message.type = 5;
            break;
        case "DEVICE_TYPE_TRINKEY":
        case 6:
            message.type = 6;
            break;
        case "DEVICE_TYPE_PRESSURE_SENSOR":
        case 7:
            message.type = 7;
            break;
        case "DEVICE_TYPE_CO2_SENSOR":
        case 8:
            message.type = 8;
            break;
        case "DEVICE_TYPE_DISTANCE_SENSOR":
        case 9:
            message.type = 9;
            break;
        case "DEVICE_TYPE_UV_SENSOR":
        case 10:
            message.type = 10;
            break;
        case "DEVICE_TYPE_NFC_TAG":
        case 11:
            message.type = 11;
            break;
        case "DEVICE_TYPE_RFID_READER":
        case 12:
            message.type = 12;
            break;
        }
        if (object.address != null)
            message.address = object.address >>> 0;
        if (object.rotaryChanged != null) {
            if (typeof object.rotaryChanged !== "object")
                throw TypeError(".DeviceEvent.rotaryChanged: object expected");
            message.rotaryChanged = $root.RotaryEncoderChanged.fromObject(object.rotaryChanged);
        }
        if (object.rotaryButton != null) {
            if (typeof object.rotaryButton !== "object")
                throw TypeError(".DeviceEvent.rotaryButton: object expected");
            message.rotaryButton = $root.RotaryEncoderButton.fromObject(object.rotaryButton);
        }
        if (object.linearChanged != null) {
            if (typeof object.linearChanged !== "object")
                throw TypeError(".DeviceEvent.linearChanged: object expected");
            message.linearChanged = $root.LinearEncoderChanged.fromObject(object.linearChanged);
        }
        if (object.touchButton != null) {
            if (typeof object.touchButton !== "object")
                throw TypeError(".DeviceEvent.touchButton: object expected");
            message.touchButton = $root.TouchSensorButton.fromObject(object.touchButton);
        }
        if (object.gyroscopeData != null) {
            if (typeof object.gyroscopeData !== "object")
                throw TypeError(".DeviceEvent.gyroscopeData: object expected");
            message.gyroscopeData = $root.GyroscopeChanged.fromObject(object.gyroscopeData);
        }
        if (object.pressureSensorData != null) {
            if (typeof object.pressureSensorData !== "object")
                throw TypeError(".DeviceEvent.pressureSensorData: object expected");
            message.pressureSensorData = $root.PressureSensorData.fromObject(object.pressureSensorData);
        }
        if (object.co2SensorData != null) {
            if (typeof object.co2SensorData !== "object")
                throw TypeError(".DeviceEvent.co2SensorData: object expected");
            message.co2SensorData = $root.CO2SensorData.fromObject(object.co2SensorData);
        }
        if (object.distanceSensorData != null) {
            if (typeof object.distanceSensorData !== "object")
                throw TypeError(".DeviceEvent.distanceSensorData: object expected");
            message.distanceSensorData = $root.DistanceSensorData.fromObject(object.distanceSensorData);
        }
        if (object.uvSensorData != null) {
            if (typeof object.uvSensorData !== "object")
                throw TypeError(".DeviceEvent.uvSensorData: object expected");
            message.uvSensorData = $root.UVSensorData.fromObject(object.uvSensorData);
        }
        if (object.rfidReaderData != null) {
            if (typeof object.rfidReaderData !== "object")
                throw TypeError(".DeviceEvent.rfidReaderData: object expected");
            message.rfidReaderData = $root.RFIDReaderData.fromObject(object.rfidReaderData);
        }
        return message;
    };

    /**
     * Creates a plain object from a DeviceEvent message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DeviceEvent
     * @static
     * @param {DeviceEvent} message DeviceEvent
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DeviceEvent.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "DEVICE_TYPE_UNSPECIFIED" : 0;
            object.address = 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.DeviceType[message.type] === undefined ? message.type : $root.DeviceType[message.type] : message.type;
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = message.address;
        if (message.rotaryChanged != null && message.hasOwnProperty("rotaryChanged")) {
            object.rotaryChanged = $root.RotaryEncoderChanged.toObject(message.rotaryChanged, options);
            if (options.oneofs)
                object.event = "rotaryChanged";
        }
        if (message.rotaryButton != null && message.hasOwnProperty("rotaryButton")) {
            object.rotaryButton = $root.RotaryEncoderButton.toObject(message.rotaryButton, options);
            if (options.oneofs)
                object.event = "rotaryButton";
        }
        if (message.linearChanged != null && message.hasOwnProperty("linearChanged")) {
            object.linearChanged = $root.LinearEncoderChanged.toObject(message.linearChanged, options);
            if (options.oneofs)
                object.event = "linearChanged";
        }
        if (message.touchButton != null && message.hasOwnProperty("touchButton")) {
            object.touchButton = $root.TouchSensorButton.toObject(message.touchButton, options);
            if (options.oneofs)
                object.event = "touchButton";
        }
        if (message.gyroscopeData != null && message.hasOwnProperty("gyroscopeData")) {
            object.gyroscopeData = $root.GyroscopeChanged.toObject(message.gyroscopeData, options);
            if (options.oneofs)
                object.event = "gyroscopeData";
        }
        if (message.pressureSensorData != null && message.hasOwnProperty("pressureSensorData")) {
            object.pressureSensorData = $root.PressureSensorData.toObject(message.pressureSensorData, options);
            if (options.oneofs)
                object.event = "pressureSensorData";
        }
        if (message.co2SensorData != null && message.hasOwnProperty("co2SensorData")) {
            object.co2SensorData = $root.CO2SensorData.toObject(message.co2SensorData, options);
            if (options.oneofs)
                object.event = "co2SensorData";
        }
        if (message.distanceSensorData != null && message.hasOwnProperty("distanceSensorData")) {
            object.distanceSensorData = $root.DistanceSensorData.toObject(message.distanceSensorData, options);
            if (options.oneofs)
                object.event = "distanceSensorData";
        }
        if (message.uvSensorData != null && message.hasOwnProperty("uvSensorData")) {
            object.uvSensorData = $root.UVSensorData.toObject(message.uvSensorData, options);
            if (options.oneofs)
                object.event = "uvSensorData";
        }
        if (message.rfidReaderData != null && message.hasOwnProperty("rfidReaderData")) {
            object.rfidReaderData = $root.RFIDReaderData.toObject(message.rfidReaderData, options);
            if (options.oneofs)
                object.event = "rfidReaderData";
        }
        return object;
    };

    /**
     * Converts this DeviceEvent to JSON.
     * @function toJSON
     * @memberof DeviceEvent
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DeviceEvent.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DeviceEvent
     * @function getTypeUrl
     * @memberof DeviceEvent
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DeviceEvent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DeviceEvent";
    };

    return DeviceEvent;
})();

export const TrinkeyState = $root.TrinkeyState = (() => {

    

    /**
     * Constructs a new TrinkeyState.
     * @exports TrinkeyState
     * @classdesc Represents a TrinkeyState.
     * @implements ITrinkeyState
     * @constructor
     * @param {ITrinkeyState=} [properties] Properties to set
     */
    function TrinkeyState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TrinkeyState brightness.
     * @member {number} brightness
     * @memberof TrinkeyState
     * @instance
     */
    TrinkeyState.prototype.brightness = 0;

    /**
     * TrinkeyState pixel.
     * @member {number} pixel
     * @memberof TrinkeyState
     * @instance
     */
    TrinkeyState.prototype.pixel = 0;

    /**
     * Creates a new TrinkeyState instance using the specified properties.
     * @function create
     * @memberof TrinkeyState
     * @static
     * @param {ITrinkeyState=} [properties] Properties to set
     * @returns {TrinkeyState} TrinkeyState instance
     */
    TrinkeyState.create = function create(properties) {
        return new TrinkeyState(properties);
    };

    /**
     * Encodes the specified TrinkeyState message. Does not implicitly {@link TrinkeyState.verify|verify} messages.
     * @function encode
     * @memberof TrinkeyState
     * @static
     * @param {ITrinkeyState} message TrinkeyState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TrinkeyState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.brightness != null && Object.hasOwnProperty.call(message, "brightness"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.brightness);
        if (message.pixel != null && Object.hasOwnProperty.call(message, "pixel"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.pixel);
        return writer;
    };

    /**
     * Encodes the specified TrinkeyState message, length delimited. Does not implicitly {@link TrinkeyState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TrinkeyState
     * @static
     * @param {ITrinkeyState} message TrinkeyState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TrinkeyState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TrinkeyState message from the specified reader or buffer.
     * @function decode
     * @memberof TrinkeyState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TrinkeyState} TrinkeyState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TrinkeyState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TrinkeyState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.brightness = reader.uint32();
                    break;
                }
            case 2: {
                    message.pixel = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TrinkeyState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TrinkeyState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TrinkeyState} TrinkeyState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TrinkeyState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TrinkeyState message.
     * @function verify
     * @memberof TrinkeyState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TrinkeyState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            if (!$util.isInteger(message.brightness))
                return "brightness: integer expected";
        if (message.pixel != null && message.hasOwnProperty("pixel"))
            if (!$util.isInteger(message.pixel))
                return "pixel: integer expected";
        return null;
    };

    /**
     * Creates a TrinkeyState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TrinkeyState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TrinkeyState} TrinkeyState
     */
    TrinkeyState.fromObject = function fromObject(object) {
        if (object instanceof $root.TrinkeyState)
            return object;
        let message = new $root.TrinkeyState();
        if (object.brightness != null)
            message.brightness = object.brightness >>> 0;
        if (object.pixel != null)
            message.pixel = object.pixel >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a TrinkeyState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TrinkeyState
     * @static
     * @param {TrinkeyState} message TrinkeyState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TrinkeyState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.brightness = 0;
            object.pixel = 0;
        }
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            object.brightness = message.brightness;
        if (message.pixel != null && message.hasOwnProperty("pixel"))
            object.pixel = message.pixel;
        return object;
    };

    /**
     * Converts this TrinkeyState to JSON.
     * @function toJSON
     * @memberof TrinkeyState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TrinkeyState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TrinkeyState
     * @function getTypeUrl
     * @memberof TrinkeyState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TrinkeyState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TrinkeyState";
    };

    return TrinkeyState;
})();

export const NeoDriverState = $root.NeoDriverState = (() => {

    

    /**
     * Constructs a new NeoDriverState.
     * @exports NeoDriverState
     * @classdesc Represents a NeoDriverState.
     * @implements INeoDriverState
     * @constructor
     * @param {INeoDriverState=} [properties] Properties to set
     */
    function NeoDriverState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NeoDriverState brightness.
     * @member {number} brightness
     * @memberof NeoDriverState
     * @instance
     */
    NeoDriverState.prototype.brightness = 0;

    /**
     * NeoDriverState length.
     * @member {number} length
     * @memberof NeoDriverState
     * @instance
     */
    NeoDriverState.prototype.length = 0;

    /**
     * Creates a new NeoDriverState instance using the specified properties.
     * @function create
     * @memberof NeoDriverState
     * @static
     * @param {INeoDriverState=} [properties] Properties to set
     * @returns {NeoDriverState} NeoDriverState instance
     */
    NeoDriverState.create = function create(properties) {
        return new NeoDriverState(properties);
    };

    /**
     * Encodes the specified NeoDriverState message. Does not implicitly {@link NeoDriverState.verify|verify} messages.
     * @function encode
     * @memberof NeoDriverState
     * @static
     * @param {INeoDriverState} message NeoDriverState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NeoDriverState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.brightness != null && Object.hasOwnProperty.call(message, "brightness"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.brightness);
        if (message.length != null && Object.hasOwnProperty.call(message, "length"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.length);
        return writer;
    };

    /**
     * Encodes the specified NeoDriverState message, length delimited. Does not implicitly {@link NeoDriverState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NeoDriverState
     * @static
     * @param {INeoDriverState} message NeoDriverState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NeoDriverState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NeoDriverState message from the specified reader or buffer.
     * @function decode
     * @memberof NeoDriverState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NeoDriverState} NeoDriverState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NeoDriverState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NeoDriverState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.brightness = reader.uint32();
                    break;
                }
            case 2: {
                    message.length = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NeoDriverState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NeoDriverState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NeoDriverState} NeoDriverState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NeoDriverState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NeoDriverState message.
     * @function verify
     * @memberof NeoDriverState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NeoDriverState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            if (!$util.isInteger(message.brightness))
                return "brightness: integer expected";
        if (message.length != null && message.hasOwnProperty("length"))
            if (!$util.isInteger(message.length))
                return "length: integer expected";
        return null;
    };

    /**
     * Creates a NeoDriverState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NeoDriverState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NeoDriverState} NeoDriverState
     */
    NeoDriverState.fromObject = function fromObject(object) {
        if (object instanceof $root.NeoDriverState)
            return object;
        let message = new $root.NeoDriverState();
        if (object.brightness != null)
            message.brightness = object.brightness >>> 0;
        if (object.length != null)
            message.length = object.length >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a NeoDriverState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NeoDriverState
     * @static
     * @param {NeoDriverState} message NeoDriverState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NeoDriverState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.brightness = 0;
            object.length = 0;
        }
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            object.brightness = message.brightness;
        if (message.length != null && message.hasOwnProperty("length"))
            object.length = message.length;
        return object;
    };

    /**
     * Converts this NeoDriverState to JSON.
     * @function toJSON
     * @memberof NeoDriverState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NeoDriverState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NeoDriverState
     * @function getTypeUrl
     * @memberof NeoDriverState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NeoDriverState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NeoDriverState";
    };

    return NeoDriverState;
})();

export const RotaryEncoderState = $root.RotaryEncoderState = (() => {

    

    /**
     * Constructs a new RotaryEncoderState.
     * @exports RotaryEncoderState
     * @classdesc Represents a RotaryEncoderState.
     * @implements IRotaryEncoderState
     * @constructor
     * @param {IRotaryEncoderState=} [properties] Properties to set
     */
    function RotaryEncoderState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RotaryEncoderState brightness.
     * @member {number} brightness
     * @memberof RotaryEncoderState
     * @instance
     */
    RotaryEncoderState.prototype.brightness = 0;

    /**
     * RotaryEncoderState pixel.
     * @member {number} pixel
     * @memberof RotaryEncoderState
     * @instance
     */
    RotaryEncoderState.prototype.pixel = 0;

    /**
     * RotaryEncoderState isPressed.
     * @member {boolean} isPressed
     * @memberof RotaryEncoderState
     * @instance
     */
    RotaryEncoderState.prototype.isPressed = false;

    /**
     * RotaryEncoderState value.
     * @member {number} value
     * @memberof RotaryEncoderState
     * @instance
     */
    RotaryEncoderState.prototype.value = 0;

    /**
     * Creates a new RotaryEncoderState instance using the specified properties.
     * @function create
     * @memberof RotaryEncoderState
     * @static
     * @param {IRotaryEncoderState=} [properties] Properties to set
     * @returns {RotaryEncoderState} RotaryEncoderState instance
     */
    RotaryEncoderState.create = function create(properties) {
        return new RotaryEncoderState(properties);
    };

    /**
     * Encodes the specified RotaryEncoderState message. Does not implicitly {@link RotaryEncoderState.verify|verify} messages.
     * @function encode
     * @memberof RotaryEncoderState
     * @static
     * @param {IRotaryEncoderState} message RotaryEncoderState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RotaryEncoderState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.brightness != null && Object.hasOwnProperty.call(message, "brightness"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.brightness);
        if (message.pixel != null && Object.hasOwnProperty.call(message, "pixel"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.pixel);
        if (message.isPressed != null && Object.hasOwnProperty.call(message, "isPressed"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.isPressed);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.value);
        return writer;
    };

    /**
     * Encodes the specified RotaryEncoderState message, length delimited. Does not implicitly {@link RotaryEncoderState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RotaryEncoderState
     * @static
     * @param {IRotaryEncoderState} message RotaryEncoderState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RotaryEncoderState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RotaryEncoderState message from the specified reader or buffer.
     * @function decode
     * @memberof RotaryEncoderState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RotaryEncoderState} RotaryEncoderState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RotaryEncoderState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RotaryEncoderState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.brightness = reader.uint32();
                    break;
                }
            case 2: {
                    message.pixel = reader.uint32();
                    break;
                }
            case 3: {
                    message.isPressed = reader.bool();
                    break;
                }
            case 4: {
                    message.value = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RotaryEncoderState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RotaryEncoderState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RotaryEncoderState} RotaryEncoderState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RotaryEncoderState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RotaryEncoderState message.
     * @function verify
     * @memberof RotaryEncoderState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RotaryEncoderState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            if (!$util.isInteger(message.brightness))
                return "brightness: integer expected";
        if (message.pixel != null && message.hasOwnProperty("pixel"))
            if (!$util.isInteger(message.pixel))
                return "pixel: integer expected";
        if (message.isPressed != null && message.hasOwnProperty("isPressed"))
            if (typeof message.isPressed !== "boolean")
                return "isPressed: boolean expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates a RotaryEncoderState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RotaryEncoderState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RotaryEncoderState} RotaryEncoderState
     */
    RotaryEncoderState.fromObject = function fromObject(object) {
        if (object instanceof $root.RotaryEncoderState)
            return object;
        let message = new $root.RotaryEncoderState();
        if (object.brightness != null)
            message.brightness = object.brightness >>> 0;
        if (object.pixel != null)
            message.pixel = object.pixel >>> 0;
        if (object.isPressed != null)
            message.isPressed = Boolean(object.isPressed);
        if (object.value != null)
            message.value = object.value | 0;
        return message;
    };

    /**
     * Creates a plain object from a RotaryEncoderState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RotaryEncoderState
     * @static
     * @param {RotaryEncoderState} message RotaryEncoderState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RotaryEncoderState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.brightness = 0;
            object.pixel = 0;
            object.isPressed = false;
            object.value = 0;
        }
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            object.brightness = message.brightness;
        if (message.pixel != null && message.hasOwnProperty("pixel"))
            object.pixel = message.pixel;
        if (message.isPressed != null && message.hasOwnProperty("isPressed"))
            object.isPressed = message.isPressed;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this RotaryEncoderState to JSON.
     * @function toJSON
     * @memberof RotaryEncoderState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RotaryEncoderState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RotaryEncoderState
     * @function getTypeUrl
     * @memberof RotaryEncoderState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RotaryEncoderState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RotaryEncoderState";
    };

    return RotaryEncoderState;
})();

export const RotaryEncoderChanged = $root.RotaryEncoderChanged = (() => {

    

    /**
     * Constructs a new RotaryEncoderChanged.
     * @exports RotaryEncoderChanged
     * @classdesc Represents a RotaryEncoderChanged.
     * @implements IRotaryEncoderChanged
     * @constructor
     * @param {IRotaryEncoderChanged=} [properties] Properties to set
     */
    function RotaryEncoderChanged(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RotaryEncoderChanged value.
     * @member {number} value
     * @memberof RotaryEncoderChanged
     * @instance
     */
    RotaryEncoderChanged.prototype.value = 0;

    /**
     * RotaryEncoderChanged isPressed.
     * @member {boolean} isPressed
     * @memberof RotaryEncoderChanged
     * @instance
     */
    RotaryEncoderChanged.prototype.isPressed = false;

    /**
     * Creates a new RotaryEncoderChanged instance using the specified properties.
     * @function create
     * @memberof RotaryEncoderChanged
     * @static
     * @param {IRotaryEncoderChanged=} [properties] Properties to set
     * @returns {RotaryEncoderChanged} RotaryEncoderChanged instance
     */
    RotaryEncoderChanged.create = function create(properties) {
        return new RotaryEncoderChanged(properties);
    };

    /**
     * Encodes the specified RotaryEncoderChanged message. Does not implicitly {@link RotaryEncoderChanged.verify|verify} messages.
     * @function encode
     * @memberof RotaryEncoderChanged
     * @static
     * @param {IRotaryEncoderChanged} message RotaryEncoderChanged message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RotaryEncoderChanged.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
        if (message.isPressed != null && Object.hasOwnProperty.call(message, "isPressed"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isPressed);
        return writer;
    };

    /**
     * Encodes the specified RotaryEncoderChanged message, length delimited. Does not implicitly {@link RotaryEncoderChanged.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RotaryEncoderChanged
     * @static
     * @param {IRotaryEncoderChanged} message RotaryEncoderChanged message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RotaryEncoderChanged.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RotaryEncoderChanged message from the specified reader or buffer.
     * @function decode
     * @memberof RotaryEncoderChanged
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RotaryEncoderChanged} RotaryEncoderChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RotaryEncoderChanged.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RotaryEncoderChanged();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.value = reader.int32();
                    break;
                }
            case 2: {
                    message.isPressed = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RotaryEncoderChanged message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RotaryEncoderChanged
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RotaryEncoderChanged} RotaryEncoderChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RotaryEncoderChanged.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RotaryEncoderChanged message.
     * @function verify
     * @memberof RotaryEncoderChanged
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RotaryEncoderChanged.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        if (message.isPressed != null && message.hasOwnProperty("isPressed"))
            if (typeof message.isPressed !== "boolean")
                return "isPressed: boolean expected";
        return null;
    };

    /**
     * Creates a RotaryEncoderChanged message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RotaryEncoderChanged
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RotaryEncoderChanged} RotaryEncoderChanged
     */
    RotaryEncoderChanged.fromObject = function fromObject(object) {
        if (object instanceof $root.RotaryEncoderChanged)
            return object;
        let message = new $root.RotaryEncoderChanged();
        if (object.value != null)
            message.value = object.value | 0;
        if (object.isPressed != null)
            message.isPressed = Boolean(object.isPressed);
        return message;
    };

    /**
     * Creates a plain object from a RotaryEncoderChanged message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RotaryEncoderChanged
     * @static
     * @param {RotaryEncoderChanged} message RotaryEncoderChanged
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RotaryEncoderChanged.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.value = 0;
            object.isPressed = false;
        }
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        if (message.isPressed != null && message.hasOwnProperty("isPressed"))
            object.isPressed = message.isPressed;
        return object;
    };

    /**
     * Converts this RotaryEncoderChanged to JSON.
     * @function toJSON
     * @memberof RotaryEncoderChanged
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RotaryEncoderChanged.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RotaryEncoderChanged
     * @function getTypeUrl
     * @memberof RotaryEncoderChanged
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RotaryEncoderChanged.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RotaryEncoderChanged";
    };

    return RotaryEncoderChanged;
})();

export const RotaryEncoderButton = $root.RotaryEncoderButton = (() => {

    

    /**
     * Constructs a new RotaryEncoderButton.
     * @exports RotaryEncoderButton
     * @classdesc Represents a RotaryEncoderButton.
     * @implements IRotaryEncoderButton
     * @constructor
     * @param {IRotaryEncoderButton=} [properties] Properties to set
     */
    function RotaryEncoderButton(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RotaryEncoderButton isPressed.
     * @member {boolean} isPressed
     * @memberof RotaryEncoderButton
     * @instance
     */
    RotaryEncoderButton.prototype.isPressed = false;

    /**
     * Creates a new RotaryEncoderButton instance using the specified properties.
     * @function create
     * @memberof RotaryEncoderButton
     * @static
     * @param {IRotaryEncoderButton=} [properties] Properties to set
     * @returns {RotaryEncoderButton} RotaryEncoderButton instance
     */
    RotaryEncoderButton.create = function create(properties) {
        return new RotaryEncoderButton(properties);
    };

    /**
     * Encodes the specified RotaryEncoderButton message. Does not implicitly {@link RotaryEncoderButton.verify|verify} messages.
     * @function encode
     * @memberof RotaryEncoderButton
     * @static
     * @param {IRotaryEncoderButton} message RotaryEncoderButton message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RotaryEncoderButton.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.isPressed != null && Object.hasOwnProperty.call(message, "isPressed"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.isPressed);
        return writer;
    };

    /**
     * Encodes the specified RotaryEncoderButton message, length delimited. Does not implicitly {@link RotaryEncoderButton.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RotaryEncoderButton
     * @static
     * @param {IRotaryEncoderButton} message RotaryEncoderButton message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RotaryEncoderButton.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RotaryEncoderButton message from the specified reader or buffer.
     * @function decode
     * @memberof RotaryEncoderButton
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RotaryEncoderButton} RotaryEncoderButton
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RotaryEncoderButton.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RotaryEncoderButton();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.isPressed = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RotaryEncoderButton message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RotaryEncoderButton
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RotaryEncoderButton} RotaryEncoderButton
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RotaryEncoderButton.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RotaryEncoderButton message.
     * @function verify
     * @memberof RotaryEncoderButton
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RotaryEncoderButton.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.isPressed != null && message.hasOwnProperty("isPressed"))
            if (typeof message.isPressed !== "boolean")
                return "isPressed: boolean expected";
        return null;
    };

    /**
     * Creates a RotaryEncoderButton message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RotaryEncoderButton
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RotaryEncoderButton} RotaryEncoderButton
     */
    RotaryEncoderButton.fromObject = function fromObject(object) {
        if (object instanceof $root.RotaryEncoderButton)
            return object;
        let message = new $root.RotaryEncoderButton();
        if (object.isPressed != null)
            message.isPressed = Boolean(object.isPressed);
        return message;
    };

    /**
     * Creates a plain object from a RotaryEncoderButton message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RotaryEncoderButton
     * @static
     * @param {RotaryEncoderButton} message RotaryEncoderButton
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RotaryEncoderButton.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.isPressed = false;
        if (message.isPressed != null && message.hasOwnProperty("isPressed"))
            object.isPressed = message.isPressed;
        return object;
    };

    /**
     * Converts this RotaryEncoderButton to JSON.
     * @function toJSON
     * @memberof RotaryEncoderButton
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RotaryEncoderButton.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RotaryEncoderButton
     * @function getTypeUrl
     * @memberof RotaryEncoderButton
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RotaryEncoderButton.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RotaryEncoderButton";
    };

    return RotaryEncoderButton;
})();

export const LinearEncoderState = $root.LinearEncoderState = (() => {

    

    /**
     * Constructs a new LinearEncoderState.
     * @exports LinearEncoderState
     * @classdesc Represents a LinearEncoderState.
     * @implements ILinearEncoderState
     * @constructor
     * @param {ILinearEncoderState=} [properties] Properties to set
     */
    function LinearEncoderState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LinearEncoderState brightness.
     * @member {number} brightness
     * @memberof LinearEncoderState
     * @instance
     */
    LinearEncoderState.prototype.brightness = 0;

    /**
     * LinearEncoderState pixels.
     * @member {Uint8Array} pixels
     * @memberof LinearEncoderState
     * @instance
     */
    LinearEncoderState.prototype.pixels = $util.newBuffer([]);

    /**
     * LinearEncoderState value.
     * @member {number} value
     * @memberof LinearEncoderState
     * @instance
     */
    LinearEncoderState.prototype.value = 0;

    /**
     * Creates a new LinearEncoderState instance using the specified properties.
     * @function create
     * @memberof LinearEncoderState
     * @static
     * @param {ILinearEncoderState=} [properties] Properties to set
     * @returns {LinearEncoderState} LinearEncoderState instance
     */
    LinearEncoderState.create = function create(properties) {
        return new LinearEncoderState(properties);
    };

    /**
     * Encodes the specified LinearEncoderState message. Does not implicitly {@link LinearEncoderState.verify|verify} messages.
     * @function encode
     * @memberof LinearEncoderState
     * @static
     * @param {ILinearEncoderState} message LinearEncoderState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LinearEncoderState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.brightness != null && Object.hasOwnProperty.call(message, "brightness"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.brightness);
        if (message.pixels != null && Object.hasOwnProperty.call(message, "pixels"))
            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.pixels);
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.value);
        return writer;
    };

    /**
     * Encodes the specified LinearEncoderState message, length delimited. Does not implicitly {@link LinearEncoderState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LinearEncoderState
     * @static
     * @param {ILinearEncoderState} message LinearEncoderState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LinearEncoderState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LinearEncoderState message from the specified reader or buffer.
     * @function decode
     * @memberof LinearEncoderState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LinearEncoderState} LinearEncoderState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LinearEncoderState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LinearEncoderState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.brightness = reader.uint32();
                    break;
                }
            case 2: {
                    message.pixels = reader.bytes();
                    break;
                }
            case 3: {
                    message.value = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LinearEncoderState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LinearEncoderState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LinearEncoderState} LinearEncoderState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LinearEncoderState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LinearEncoderState message.
     * @function verify
     * @memberof LinearEncoderState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LinearEncoderState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            if (!$util.isInteger(message.brightness))
                return "brightness: integer expected";
        if (message.pixels != null && message.hasOwnProperty("pixels"))
            if (!(message.pixels && typeof message.pixels.length === "number" || $util.isString(message.pixels)))
                return "pixels: buffer expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates a LinearEncoderState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LinearEncoderState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LinearEncoderState} LinearEncoderState
     */
    LinearEncoderState.fromObject = function fromObject(object) {
        if (object instanceof $root.LinearEncoderState)
            return object;
        let message = new $root.LinearEncoderState();
        if (object.brightness != null)
            message.brightness = object.brightness >>> 0;
        if (object.pixels != null)
            if (typeof object.pixels === "string")
                $util.base64.decode(object.pixels, message.pixels = $util.newBuffer($util.base64.length(object.pixels)), 0);
            else if (object.pixels.length >= 0)
                message.pixels = object.pixels;
        if (object.value != null)
            message.value = object.value >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LinearEncoderState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LinearEncoderState
     * @static
     * @param {LinearEncoderState} message LinearEncoderState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LinearEncoderState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.brightness = 0;
            if (options.bytes === String)
                object.pixels = "";
            else {
                object.pixels = [];
                if (options.bytes !== Array)
                    object.pixels = $util.newBuffer(object.pixels);
            }
            object.value = 0;
        }
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            object.brightness = message.brightness;
        if (message.pixels != null && message.hasOwnProperty("pixels"))
            object.pixels = options.bytes === String ? $util.base64.encode(message.pixels, 0, message.pixels.length) : options.bytes === Array ? Array.prototype.slice.call(message.pixels) : message.pixels;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this LinearEncoderState to JSON.
     * @function toJSON
     * @memberof LinearEncoderState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LinearEncoderState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LinearEncoderState
     * @function getTypeUrl
     * @memberof LinearEncoderState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LinearEncoderState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LinearEncoderState";
    };

    return LinearEncoderState;
})();

export const LinearEncoderChanged = $root.LinearEncoderChanged = (() => {

    

    /**
     * Constructs a new LinearEncoderChanged.
     * @exports LinearEncoderChanged
     * @classdesc Represents a LinearEncoderChanged.
     * @implements ILinearEncoderChanged
     * @constructor
     * @param {ILinearEncoderChanged=} [properties] Properties to set
     */
    function LinearEncoderChanged(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * LinearEncoderChanged value.
     * @member {number} value
     * @memberof LinearEncoderChanged
     * @instance
     */
    LinearEncoderChanged.prototype.value = 0;

    /**
     * Creates a new LinearEncoderChanged instance using the specified properties.
     * @function create
     * @memberof LinearEncoderChanged
     * @static
     * @param {ILinearEncoderChanged=} [properties] Properties to set
     * @returns {LinearEncoderChanged} LinearEncoderChanged instance
     */
    LinearEncoderChanged.create = function create(properties) {
        return new LinearEncoderChanged(properties);
    };

    /**
     * Encodes the specified LinearEncoderChanged message. Does not implicitly {@link LinearEncoderChanged.verify|verify} messages.
     * @function encode
     * @memberof LinearEncoderChanged
     * @static
     * @param {ILinearEncoderChanged} message LinearEncoderChanged message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LinearEncoderChanged.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
        return writer;
    };

    /**
     * Encodes the specified LinearEncoderChanged message, length delimited. Does not implicitly {@link LinearEncoderChanged.verify|verify} messages.
     * @function encodeDelimited
     * @memberof LinearEncoderChanged
     * @static
     * @param {ILinearEncoderChanged} message LinearEncoderChanged message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    LinearEncoderChanged.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a LinearEncoderChanged message from the specified reader or buffer.
     * @function decode
     * @memberof LinearEncoderChanged
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {LinearEncoderChanged} LinearEncoderChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LinearEncoderChanged.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.LinearEncoderChanged();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.value = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a LinearEncoderChanged message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof LinearEncoderChanged
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {LinearEncoderChanged} LinearEncoderChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    LinearEncoderChanged.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a LinearEncoderChanged message.
     * @function verify
     * @memberof LinearEncoderChanged
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    LinearEncoderChanged.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates a LinearEncoderChanged message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof LinearEncoderChanged
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {LinearEncoderChanged} LinearEncoderChanged
     */
    LinearEncoderChanged.fromObject = function fromObject(object) {
        if (object instanceof $root.LinearEncoderChanged)
            return object;
        let message = new $root.LinearEncoderChanged();
        if (object.value != null)
            message.value = object.value >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a LinearEncoderChanged message. Also converts values to other types if specified.
     * @function toObject
     * @memberof LinearEncoderChanged
     * @static
     * @param {LinearEncoderChanged} message LinearEncoderChanged
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    LinearEncoderChanged.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this LinearEncoderChanged to JSON.
     * @function toJSON
     * @memberof LinearEncoderChanged
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    LinearEncoderChanged.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for LinearEncoderChanged
     * @function getTypeUrl
     * @memberof LinearEncoderChanged
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    LinearEncoderChanged.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/LinearEncoderChanged";
    };

    return LinearEncoderChanged;
})();

export const TouchSensorState = $root.TouchSensorState = (() => {

    

    /**
     * Constructs a new TouchSensorState.
     * @exports TouchSensorState
     * @classdesc Represents a TouchSensorState.
     * @implements ITouchSensorState
     * @constructor
     * @param {ITouchSensorState=} [properties] Properties to set
     */
    function TouchSensorState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TouchSensorState touchedMask.
     * @member {number} touchedMask
     * @memberof TouchSensorState
     * @instance
     */
    TouchSensorState.prototype.touchedMask = 0;

    /**
     * Creates a new TouchSensorState instance using the specified properties.
     * @function create
     * @memberof TouchSensorState
     * @static
     * @param {ITouchSensorState=} [properties] Properties to set
     * @returns {TouchSensorState} TouchSensorState instance
     */
    TouchSensorState.create = function create(properties) {
        return new TouchSensorState(properties);
    };

    /**
     * Encodes the specified TouchSensorState message. Does not implicitly {@link TouchSensorState.verify|verify} messages.
     * @function encode
     * @memberof TouchSensorState
     * @static
     * @param {ITouchSensorState} message TouchSensorState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TouchSensorState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.touchedMask != null && Object.hasOwnProperty.call(message, "touchedMask"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.touchedMask);
        return writer;
    };

    /**
     * Encodes the specified TouchSensorState message, length delimited. Does not implicitly {@link TouchSensorState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TouchSensorState
     * @static
     * @param {ITouchSensorState} message TouchSensorState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TouchSensorState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TouchSensorState message from the specified reader or buffer.
     * @function decode
     * @memberof TouchSensorState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TouchSensorState} TouchSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TouchSensorState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TouchSensorState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.touchedMask = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TouchSensorState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TouchSensorState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TouchSensorState} TouchSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TouchSensorState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TouchSensorState message.
     * @function verify
     * @memberof TouchSensorState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TouchSensorState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.touchedMask != null && message.hasOwnProperty("touchedMask"))
            if (!$util.isInteger(message.touchedMask))
                return "touchedMask: integer expected";
        return null;
    };

    /**
     * Creates a TouchSensorState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TouchSensorState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TouchSensorState} TouchSensorState
     */
    TouchSensorState.fromObject = function fromObject(object) {
        if (object instanceof $root.TouchSensorState)
            return object;
        let message = new $root.TouchSensorState();
        if (object.touchedMask != null)
            message.touchedMask = object.touchedMask >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a TouchSensorState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TouchSensorState
     * @static
     * @param {TouchSensorState} message TouchSensorState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TouchSensorState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.touchedMask = 0;
        if (message.touchedMask != null && message.hasOwnProperty("touchedMask"))
            object.touchedMask = message.touchedMask;
        return object;
    };

    /**
     * Converts this TouchSensorState to JSON.
     * @function toJSON
     * @memberof TouchSensorState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TouchSensorState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TouchSensorState
     * @function getTypeUrl
     * @memberof TouchSensorState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TouchSensorState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TouchSensorState";
    };

    return TouchSensorState;
})();

export const TouchSensorButton = $root.TouchSensorButton = (() => {

    

    /**
     * Constructs a new TouchSensorButton.
     * @exports TouchSensorButton
     * @classdesc Represents a TouchSensorButton.
     * @implements ITouchSensorButton
     * @constructor
     * @param {ITouchSensorButton=} [properties] Properties to set
     */
    function TouchSensorButton(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * TouchSensorButton touchedMask.
     * @member {number} touchedMask
     * @memberof TouchSensorButton
     * @instance
     */
    TouchSensorButton.prototype.touchedMask = 0;

    /**
     * Creates a new TouchSensorButton instance using the specified properties.
     * @function create
     * @memberof TouchSensorButton
     * @static
     * @param {ITouchSensorButton=} [properties] Properties to set
     * @returns {TouchSensorButton} TouchSensorButton instance
     */
    TouchSensorButton.create = function create(properties) {
        return new TouchSensorButton(properties);
    };

    /**
     * Encodes the specified TouchSensorButton message. Does not implicitly {@link TouchSensorButton.verify|verify} messages.
     * @function encode
     * @memberof TouchSensorButton
     * @static
     * @param {ITouchSensorButton} message TouchSensorButton message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TouchSensorButton.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.touchedMask != null && Object.hasOwnProperty.call(message, "touchedMask"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.touchedMask);
        return writer;
    };

    /**
     * Encodes the specified TouchSensorButton message, length delimited. Does not implicitly {@link TouchSensorButton.verify|verify} messages.
     * @function encodeDelimited
     * @memberof TouchSensorButton
     * @static
     * @param {ITouchSensorButton} message TouchSensorButton message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    TouchSensorButton.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a TouchSensorButton message from the specified reader or buffer.
     * @function decode
     * @memberof TouchSensorButton
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {TouchSensorButton} TouchSensorButton
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TouchSensorButton.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.TouchSensorButton();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.touchedMask = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a TouchSensorButton message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof TouchSensorButton
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {TouchSensorButton} TouchSensorButton
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    TouchSensorButton.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a TouchSensorButton message.
     * @function verify
     * @memberof TouchSensorButton
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    TouchSensorButton.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.touchedMask != null && message.hasOwnProperty("touchedMask"))
            if (!$util.isInteger(message.touchedMask))
                return "touchedMask: integer expected";
        return null;
    };

    /**
     * Creates a TouchSensorButton message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof TouchSensorButton
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {TouchSensorButton} TouchSensorButton
     */
    TouchSensorButton.fromObject = function fromObject(object) {
        if (object instanceof $root.TouchSensorButton)
            return object;
        let message = new $root.TouchSensorButton();
        if (object.touchedMask != null)
            message.touchedMask = object.touchedMask >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a TouchSensorButton message. Also converts values to other types if specified.
     * @function toObject
     * @memberof TouchSensorButton
     * @static
     * @param {TouchSensorButton} message TouchSensorButton
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    TouchSensorButton.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.touchedMask = 0;
        if (message.touchedMask != null && message.hasOwnProperty("touchedMask"))
            object.touchedMask = message.touchedMask;
        return object;
    };

    /**
     * Converts this TouchSensorButton to JSON.
     * @function toJSON
     * @memberof TouchSensorButton
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    TouchSensorButton.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for TouchSensorButton
     * @function getTypeUrl
     * @memberof TouchSensorButton
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    TouchSensorButton.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/TouchSensorButton";
    };

    return TouchSensorButton;
})();

export const GyroscopeState = $root.GyroscopeState = (() => {

    

    /**
     * Constructs a new GyroscopeState.
     * @exports GyroscopeState
     * @classdesc Represents a GyroscopeState.
     * @implements IGyroscopeState
     * @constructor
     * @param {IGyroscopeState=} [properties] Properties to set
     */
    function GyroscopeState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GyroscopeState accelerationX.
     * @member {number} accelerationX
     * @memberof GyroscopeState
     * @instance
     */
    GyroscopeState.prototype.accelerationX = 0;

    /**
     * GyroscopeState accelerationY.
     * @member {number} accelerationY
     * @memberof GyroscopeState
     * @instance
     */
    GyroscopeState.prototype.accelerationY = 0;

    /**
     * GyroscopeState accelerationZ.
     * @member {number} accelerationZ
     * @memberof GyroscopeState
     * @instance
     */
    GyroscopeState.prototype.accelerationZ = 0;

    /**
     * GyroscopeState rotationX.
     * @member {number} rotationX
     * @memberof GyroscopeState
     * @instance
     */
    GyroscopeState.prototype.rotationX = 0;

    /**
     * GyroscopeState rotationY.
     * @member {number} rotationY
     * @memberof GyroscopeState
     * @instance
     */
    GyroscopeState.prototype.rotationY = 0;

    /**
     * GyroscopeState rotationZ.
     * @member {number} rotationZ
     * @memberof GyroscopeState
     * @instance
     */
    GyroscopeState.prototype.rotationZ = 0;

    /**
     * GyroscopeState temperature.
     * @member {number} temperature
     * @memberof GyroscopeState
     * @instance
     */
    GyroscopeState.prototype.temperature = 0;

    /**
     * GyroscopeState accelerationDataRate.
     * @member {DataRate} accelerationDataRate
     * @memberof GyroscopeState
     * @instance
     */
    GyroscopeState.prototype.accelerationDataRate = 0;

    /**
     * GyroscopeState rotationDataRate.
     * @member {DataRate} rotationDataRate
     * @memberof GyroscopeState
     * @instance
     */
    GyroscopeState.prototype.rotationDataRate = 0;

    /**
     * GyroscopeState accelerationRange.
     * @member {AccelerationRange} accelerationRange
     * @memberof GyroscopeState
     * @instance
     */
    GyroscopeState.prototype.accelerationRange = 0;

    /**
     * GyroscopeState rotationRange.
     * @member {RotationRange} rotationRange
     * @memberof GyroscopeState
     * @instance
     */
    GyroscopeState.prototype.rotationRange = 0;

    /**
     * Creates a new GyroscopeState instance using the specified properties.
     * @function create
     * @memberof GyroscopeState
     * @static
     * @param {IGyroscopeState=} [properties] Properties to set
     * @returns {GyroscopeState} GyroscopeState instance
     */
    GyroscopeState.create = function create(properties) {
        return new GyroscopeState(properties);
    };

    /**
     * Encodes the specified GyroscopeState message. Does not implicitly {@link GyroscopeState.verify|verify} messages.
     * @function encode
     * @memberof GyroscopeState
     * @static
     * @param {IGyroscopeState} message GyroscopeState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GyroscopeState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.accelerationX != null && Object.hasOwnProperty.call(message, "accelerationX"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.accelerationX);
        if (message.accelerationY != null && Object.hasOwnProperty.call(message, "accelerationY"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.accelerationY);
        if (message.accelerationZ != null && Object.hasOwnProperty.call(message, "accelerationZ"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.accelerationZ);
        if (message.rotationX != null && Object.hasOwnProperty.call(message, "rotationX"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.rotationX);
        if (message.rotationY != null && Object.hasOwnProperty.call(message, "rotationY"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.rotationY);
        if (message.rotationZ != null && Object.hasOwnProperty.call(message, "rotationZ"))
            writer.uint32(/* id 6, wireType 5 =*/53).float(message.rotationZ);
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 7, wireType 5 =*/61).float(message.temperature);
        if (message.accelerationDataRate != null && Object.hasOwnProperty.call(message, "accelerationDataRate"))
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.accelerationDataRate);
        if (message.rotationDataRate != null && Object.hasOwnProperty.call(message, "rotationDataRate"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.rotationDataRate);
        if (message.accelerationRange != null && Object.hasOwnProperty.call(message, "accelerationRange"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.accelerationRange);
        if (message.rotationRange != null && Object.hasOwnProperty.call(message, "rotationRange"))
            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.rotationRange);
        return writer;
    };

    /**
     * Encodes the specified GyroscopeState message, length delimited. Does not implicitly {@link GyroscopeState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GyroscopeState
     * @static
     * @param {IGyroscopeState} message GyroscopeState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GyroscopeState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GyroscopeState message from the specified reader or buffer.
     * @function decode
     * @memberof GyroscopeState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GyroscopeState} GyroscopeState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GyroscopeState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GyroscopeState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.accelerationX = reader.float();
                    break;
                }
            case 2: {
                    message.accelerationY = reader.float();
                    break;
                }
            case 3: {
                    message.accelerationZ = reader.float();
                    break;
                }
            case 4: {
                    message.rotationX = reader.float();
                    break;
                }
            case 5: {
                    message.rotationY = reader.float();
                    break;
                }
            case 6: {
                    message.rotationZ = reader.float();
                    break;
                }
            case 7: {
                    message.temperature = reader.float();
                    break;
                }
            case 8: {
                    message.accelerationDataRate = reader.int32();
                    break;
                }
            case 9: {
                    message.rotationDataRate = reader.int32();
                    break;
                }
            case 10: {
                    message.accelerationRange = reader.int32();
                    break;
                }
            case 11: {
                    message.rotationRange = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GyroscopeState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GyroscopeState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GyroscopeState} GyroscopeState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GyroscopeState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GyroscopeState message.
     * @function verify
     * @memberof GyroscopeState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GyroscopeState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.accelerationX != null && message.hasOwnProperty("accelerationX"))
            if (typeof message.accelerationX !== "number")
                return "accelerationX: number expected";
        if (message.accelerationY != null && message.hasOwnProperty("accelerationY"))
            if (typeof message.accelerationY !== "number")
                return "accelerationY: number expected";
        if (message.accelerationZ != null && message.hasOwnProperty("accelerationZ"))
            if (typeof message.accelerationZ !== "number")
                return "accelerationZ: number expected";
        if (message.rotationX != null && message.hasOwnProperty("rotationX"))
            if (typeof message.rotationX !== "number")
                return "rotationX: number expected";
        if (message.rotationY != null && message.hasOwnProperty("rotationY"))
            if (typeof message.rotationY !== "number")
                return "rotationY: number expected";
        if (message.rotationZ != null && message.hasOwnProperty("rotationZ"))
            if (typeof message.rotationZ !== "number")
                return "rotationZ: number expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (typeof message.temperature !== "number")
                return "temperature: number expected";
        if (message.accelerationDataRate != null && message.hasOwnProperty("accelerationDataRate"))
            switch (message.accelerationDataRate) {
            default:
                return "accelerationDataRate: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                break;
            }
        if (message.rotationDataRate != null && message.hasOwnProperty("rotationDataRate"))
            switch (message.rotationDataRate) {
            default:
                return "rotationDataRate: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
                break;
            }
        if (message.accelerationRange != null && message.hasOwnProperty("accelerationRange"))
            switch (message.accelerationRange) {
            default:
                return "accelerationRange: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.rotationRange != null && message.hasOwnProperty("rotationRange"))
            switch (message.rotationRange) {
            default:
                return "rotationRange: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        return null;
    };

    /**
     * Creates a GyroscopeState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GyroscopeState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GyroscopeState} GyroscopeState
     */
    GyroscopeState.fromObject = function fromObject(object) {
        if (object instanceof $root.GyroscopeState)
            return object;
        let message = new $root.GyroscopeState();
        if (object.accelerationX != null)
            message.accelerationX = Number(object.accelerationX);
        if (object.accelerationY != null)
            message.accelerationY = Number(object.accelerationY);
        if (object.accelerationZ != null)
            message.accelerationZ = Number(object.accelerationZ);
        if (object.rotationX != null)
            message.rotationX = Number(object.rotationX);
        if (object.rotationY != null)
            message.rotationY = Number(object.rotationY);
        if (object.rotationZ != null)
            message.rotationZ = Number(object.rotationZ);
        if (object.temperature != null)
            message.temperature = Number(object.temperature);
        switch (object.accelerationDataRate) {
        default:
            if (typeof object.accelerationDataRate === "number") {
                message.accelerationDataRate = object.accelerationDataRate;
                break;
            }
            break;
        case "GYROSCOPE_DATA_RATE_SHUTDOWN":
        case 0:
            message.accelerationDataRate = 0;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_12_5":
        case 1:
            message.accelerationDataRate = 1;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_26":
        case 2:
            message.accelerationDataRate = 2;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_52":
        case 3:
            message.accelerationDataRate = 3;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_104":
        case 4:
            message.accelerationDataRate = 4;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_208":
        case 5:
            message.accelerationDataRate = 5;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_416":
        case 6:
            message.accelerationDataRate = 6;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_833":
        case 7:
            message.accelerationDataRate = 7;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_1_66K":
        case 8:
            message.accelerationDataRate = 8;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_3_33K":
        case 9:
            message.accelerationDataRate = 9;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_6_66K":
        case 10:
            message.accelerationDataRate = 10;
            break;
        }
        switch (object.rotationDataRate) {
        default:
            if (typeof object.rotationDataRate === "number") {
                message.rotationDataRate = object.rotationDataRate;
                break;
            }
            break;
        case "GYROSCOPE_DATA_RATE_SHUTDOWN":
        case 0:
            message.rotationDataRate = 0;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_12_5":
        case 1:
            message.rotationDataRate = 1;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_26":
        case 2:
            message.rotationDataRate = 2;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_52":
        case 3:
            message.rotationDataRate = 3;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_104":
        case 4:
            message.rotationDataRate = 4;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_208":
        case 5:
            message.rotationDataRate = 5;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_416":
        case 6:
            message.rotationDataRate = 6;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_833":
        case 7:
            message.rotationDataRate = 7;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_1_66K":
        case 8:
            message.rotationDataRate = 8;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_3_33K":
        case 9:
            message.rotationDataRate = 9;
            break;
        case "GYROSCOPE_DATA_RATE_HZ_6_66K":
        case 10:
            message.rotationDataRate = 10;
            break;
        }
        switch (object.accelerationRange) {
        default:
            if (typeof object.accelerationRange === "number") {
                message.accelerationRange = object.accelerationRange;
                break;
            }
            break;
        case "GYROSCOPE_ACCELERATION_RANGE_4_G":
        case 0:
            message.accelerationRange = 0;
            break;
        case "GYROSCOPE_ACCELERATION_RANGE_8_G":
        case 1:
            message.accelerationRange = 1;
            break;
        case "GYROSCOPE_ACCELERATION_RANGE_16_G":
        case 2:
            message.accelerationRange = 2;
            break;
        case "GYROSCOPE_ACCELERATION_RANGE_32_G":
        case 3:
            message.accelerationRange = 3;
            break;
        }
        switch (object.rotationRange) {
        default:
            if (typeof object.rotationRange === "number") {
                message.rotationRange = object.rotationRange;
                break;
            }
            break;
        case "GYROSCOPE_ROTATION_RANGE_DPS_125":
        case 0:
            message.rotationRange = 0;
            break;
        case "GYROSCOPE_ROTATION_RANGE_DPS_250":
        case 1:
            message.rotationRange = 1;
            break;
        case "GYROSCOPE_ROTATION_RANGE_DPS_500":
        case 2:
            message.rotationRange = 2;
            break;
        case "GYROSCOPE_ROTATION_RANGE_DPS_1000":
        case 3:
            message.rotationRange = 3;
            break;
        case "GYROSCOPE_ROTATION_RANGE_DPS_2000":
        case 4:
            message.rotationRange = 4;
            break;
        case "GYROSCOPE_ROTATION_RANGE_DPS_4000":
        case 5:
            message.rotationRange = 5;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a GyroscopeState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GyroscopeState
     * @static
     * @param {GyroscopeState} message GyroscopeState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GyroscopeState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.accelerationX = 0;
            object.accelerationY = 0;
            object.accelerationZ = 0;
            object.rotationX = 0;
            object.rotationY = 0;
            object.rotationZ = 0;
            object.temperature = 0;
            object.accelerationDataRate = options.enums === String ? "GYROSCOPE_DATA_RATE_SHUTDOWN" : 0;
            object.rotationDataRate = options.enums === String ? "GYROSCOPE_DATA_RATE_SHUTDOWN" : 0;
            object.accelerationRange = options.enums === String ? "GYROSCOPE_ACCELERATION_RANGE_4_G" : 0;
            object.rotationRange = options.enums === String ? "GYROSCOPE_ROTATION_RANGE_DPS_125" : 0;
        }
        if (message.accelerationX != null && message.hasOwnProperty("accelerationX"))
            object.accelerationX = options.json && !isFinite(message.accelerationX) ? String(message.accelerationX) : message.accelerationX;
        if (message.accelerationY != null && message.hasOwnProperty("accelerationY"))
            object.accelerationY = options.json && !isFinite(message.accelerationY) ? String(message.accelerationY) : message.accelerationY;
        if (message.accelerationZ != null && message.hasOwnProperty("accelerationZ"))
            object.accelerationZ = options.json && !isFinite(message.accelerationZ) ? String(message.accelerationZ) : message.accelerationZ;
        if (message.rotationX != null && message.hasOwnProperty("rotationX"))
            object.rotationX = options.json && !isFinite(message.rotationX) ? String(message.rotationX) : message.rotationX;
        if (message.rotationY != null && message.hasOwnProperty("rotationY"))
            object.rotationY = options.json && !isFinite(message.rotationY) ? String(message.rotationY) : message.rotationY;
        if (message.rotationZ != null && message.hasOwnProperty("rotationZ"))
            object.rotationZ = options.json && !isFinite(message.rotationZ) ? String(message.rotationZ) : message.rotationZ;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
        if (message.accelerationDataRate != null && message.hasOwnProperty("accelerationDataRate"))
            object.accelerationDataRate = options.enums === String ? $root.DataRate[message.accelerationDataRate] === undefined ? message.accelerationDataRate : $root.DataRate[message.accelerationDataRate] : message.accelerationDataRate;
        if (message.rotationDataRate != null && message.hasOwnProperty("rotationDataRate"))
            object.rotationDataRate = options.enums === String ? $root.DataRate[message.rotationDataRate] === undefined ? message.rotationDataRate : $root.DataRate[message.rotationDataRate] : message.rotationDataRate;
        if (message.accelerationRange != null && message.hasOwnProperty("accelerationRange"))
            object.accelerationRange = options.enums === String ? $root.AccelerationRange[message.accelerationRange] === undefined ? message.accelerationRange : $root.AccelerationRange[message.accelerationRange] : message.accelerationRange;
        if (message.rotationRange != null && message.hasOwnProperty("rotationRange"))
            object.rotationRange = options.enums === String ? $root.RotationRange[message.rotationRange] === undefined ? message.rotationRange : $root.RotationRange[message.rotationRange] : message.rotationRange;
        return object;
    };

    /**
     * Converts this GyroscopeState to JSON.
     * @function toJSON
     * @memberof GyroscopeState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GyroscopeState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GyroscopeState
     * @function getTypeUrl
     * @memberof GyroscopeState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GyroscopeState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GyroscopeState";
    };

    return GyroscopeState;
})();

export const GyroscopeChanged = $root.GyroscopeChanged = (() => {

    

    /**
     * Constructs a new GyroscopeChanged.
     * @exports GyroscopeChanged
     * @classdesc Represents a GyroscopeChanged.
     * @implements IGyroscopeChanged
     * @constructor
     * @param {IGyroscopeChanged=} [properties] Properties to set
     */
    function GyroscopeChanged(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GyroscopeChanged accelerationX.
     * @member {number} accelerationX
     * @memberof GyroscopeChanged
     * @instance
     */
    GyroscopeChanged.prototype.accelerationX = 0;

    /**
     * GyroscopeChanged accelerationY.
     * @member {number} accelerationY
     * @memberof GyroscopeChanged
     * @instance
     */
    GyroscopeChanged.prototype.accelerationY = 0;

    /**
     * GyroscopeChanged accelerationZ.
     * @member {number} accelerationZ
     * @memberof GyroscopeChanged
     * @instance
     */
    GyroscopeChanged.prototype.accelerationZ = 0;

    /**
     * GyroscopeChanged rotationX.
     * @member {number} rotationX
     * @memberof GyroscopeChanged
     * @instance
     */
    GyroscopeChanged.prototype.rotationX = 0;

    /**
     * GyroscopeChanged rotationY.
     * @member {number} rotationY
     * @memberof GyroscopeChanged
     * @instance
     */
    GyroscopeChanged.prototype.rotationY = 0;

    /**
     * GyroscopeChanged rotationZ.
     * @member {number} rotationZ
     * @memberof GyroscopeChanged
     * @instance
     */
    GyroscopeChanged.prototype.rotationZ = 0;

    /**
     * GyroscopeChanged temperature.
     * @member {number} temperature
     * @memberof GyroscopeChanged
     * @instance
     */
    GyroscopeChanged.prototype.temperature = 0;

    /**
     * Creates a new GyroscopeChanged instance using the specified properties.
     * @function create
     * @memberof GyroscopeChanged
     * @static
     * @param {IGyroscopeChanged=} [properties] Properties to set
     * @returns {GyroscopeChanged} GyroscopeChanged instance
     */
    GyroscopeChanged.create = function create(properties) {
        return new GyroscopeChanged(properties);
    };

    /**
     * Encodes the specified GyroscopeChanged message. Does not implicitly {@link GyroscopeChanged.verify|verify} messages.
     * @function encode
     * @memberof GyroscopeChanged
     * @static
     * @param {IGyroscopeChanged} message GyroscopeChanged message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GyroscopeChanged.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.accelerationX != null && Object.hasOwnProperty.call(message, "accelerationX"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.accelerationX);
        if (message.accelerationY != null && Object.hasOwnProperty.call(message, "accelerationY"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.accelerationY);
        if (message.accelerationZ != null && Object.hasOwnProperty.call(message, "accelerationZ"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.accelerationZ);
        if (message.rotationX != null && Object.hasOwnProperty.call(message, "rotationX"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.rotationX);
        if (message.rotationY != null && Object.hasOwnProperty.call(message, "rotationY"))
            writer.uint32(/* id 5, wireType 5 =*/45).float(message.rotationY);
        if (message.rotationZ != null && Object.hasOwnProperty.call(message, "rotationZ"))
            writer.uint32(/* id 6, wireType 5 =*/53).float(message.rotationZ);
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 7, wireType 5 =*/61).float(message.temperature);
        return writer;
    };

    /**
     * Encodes the specified GyroscopeChanged message, length delimited. Does not implicitly {@link GyroscopeChanged.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GyroscopeChanged
     * @static
     * @param {IGyroscopeChanged} message GyroscopeChanged message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GyroscopeChanged.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GyroscopeChanged message from the specified reader or buffer.
     * @function decode
     * @memberof GyroscopeChanged
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GyroscopeChanged} GyroscopeChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GyroscopeChanged.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GyroscopeChanged();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.accelerationX = reader.float();
                    break;
                }
            case 2: {
                    message.accelerationY = reader.float();
                    break;
                }
            case 3: {
                    message.accelerationZ = reader.float();
                    break;
                }
            case 4: {
                    message.rotationX = reader.float();
                    break;
                }
            case 5: {
                    message.rotationY = reader.float();
                    break;
                }
            case 6: {
                    message.rotationZ = reader.float();
                    break;
                }
            case 7: {
                    message.temperature = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GyroscopeChanged message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GyroscopeChanged
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GyroscopeChanged} GyroscopeChanged
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GyroscopeChanged.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GyroscopeChanged message.
     * @function verify
     * @memberof GyroscopeChanged
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GyroscopeChanged.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.accelerationX != null && message.hasOwnProperty("accelerationX"))
            if (typeof message.accelerationX !== "number")
                return "accelerationX: number expected";
        if (message.accelerationY != null && message.hasOwnProperty("accelerationY"))
            if (typeof message.accelerationY !== "number")
                return "accelerationY: number expected";
        if (message.accelerationZ != null && message.hasOwnProperty("accelerationZ"))
            if (typeof message.accelerationZ !== "number")
                return "accelerationZ: number expected";
        if (message.rotationX != null && message.hasOwnProperty("rotationX"))
            if (typeof message.rotationX !== "number")
                return "rotationX: number expected";
        if (message.rotationY != null && message.hasOwnProperty("rotationY"))
            if (typeof message.rotationY !== "number")
                return "rotationY: number expected";
        if (message.rotationZ != null && message.hasOwnProperty("rotationZ"))
            if (typeof message.rotationZ !== "number")
                return "rotationZ: number expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (typeof message.temperature !== "number")
                return "temperature: number expected";
        return null;
    };

    /**
     * Creates a GyroscopeChanged message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GyroscopeChanged
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GyroscopeChanged} GyroscopeChanged
     */
    GyroscopeChanged.fromObject = function fromObject(object) {
        if (object instanceof $root.GyroscopeChanged)
            return object;
        let message = new $root.GyroscopeChanged();
        if (object.accelerationX != null)
            message.accelerationX = Number(object.accelerationX);
        if (object.accelerationY != null)
            message.accelerationY = Number(object.accelerationY);
        if (object.accelerationZ != null)
            message.accelerationZ = Number(object.accelerationZ);
        if (object.rotationX != null)
            message.rotationX = Number(object.rotationX);
        if (object.rotationY != null)
            message.rotationY = Number(object.rotationY);
        if (object.rotationZ != null)
            message.rotationZ = Number(object.rotationZ);
        if (object.temperature != null)
            message.temperature = Number(object.temperature);
        return message;
    };

    /**
     * Creates a plain object from a GyroscopeChanged message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GyroscopeChanged
     * @static
     * @param {GyroscopeChanged} message GyroscopeChanged
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GyroscopeChanged.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.accelerationX = 0;
            object.accelerationY = 0;
            object.accelerationZ = 0;
            object.rotationX = 0;
            object.rotationY = 0;
            object.rotationZ = 0;
            object.temperature = 0;
        }
        if (message.accelerationX != null && message.hasOwnProperty("accelerationX"))
            object.accelerationX = options.json && !isFinite(message.accelerationX) ? String(message.accelerationX) : message.accelerationX;
        if (message.accelerationY != null && message.hasOwnProperty("accelerationY"))
            object.accelerationY = options.json && !isFinite(message.accelerationY) ? String(message.accelerationY) : message.accelerationY;
        if (message.accelerationZ != null && message.hasOwnProperty("accelerationZ"))
            object.accelerationZ = options.json && !isFinite(message.accelerationZ) ? String(message.accelerationZ) : message.accelerationZ;
        if (message.rotationX != null && message.hasOwnProperty("rotationX"))
            object.rotationX = options.json && !isFinite(message.rotationX) ? String(message.rotationX) : message.rotationX;
        if (message.rotationY != null && message.hasOwnProperty("rotationY"))
            object.rotationY = options.json && !isFinite(message.rotationY) ? String(message.rotationY) : message.rotationY;
        if (message.rotationZ != null && message.hasOwnProperty("rotationZ"))
            object.rotationZ = options.json && !isFinite(message.rotationZ) ? String(message.rotationZ) : message.rotationZ;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
        return object;
    };

    /**
     * Converts this GyroscopeChanged to JSON.
     * @function toJSON
     * @memberof GyroscopeChanged
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GyroscopeChanged.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GyroscopeChanged
     * @function getTypeUrl
     * @memberof GyroscopeChanged
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GyroscopeChanged.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GyroscopeChanged";
    };

    return GyroscopeChanged;
})();

/**
 * GyroscopeChipset enum.
 * @exports GyroscopeChipset
 * @enum {number}
 * @property {number} GYROSCOPE_CHIPSET_UNSPECIFIED=0 GYROSCOPE_CHIPSET_UNSPECIFIED value
 * @property {number} GYROSCOPE_CHIPSET_LSM6DSOX=1 GYROSCOPE_CHIPSET_LSM6DSOX value
 * @property {number} GYROSCOPE_CHIPSET_ISM330DHCX=2 GYROSCOPE_CHIPSET_ISM330DHCX value
 * @property {number} GYROSCOPE_CHIPSET_LSM6DSO32=3 GYROSCOPE_CHIPSET_LSM6DSO32 value
 */
export const GyroscopeChipset = $root.GyroscopeChipset = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GYROSCOPE_CHIPSET_UNSPECIFIED"] = 0;
    values[valuesById[1] = "GYROSCOPE_CHIPSET_LSM6DSOX"] = 1;
    values[valuesById[2] = "GYROSCOPE_CHIPSET_ISM330DHCX"] = 2;
    values[valuesById[3] = "GYROSCOPE_CHIPSET_LSM6DSO32"] = 3;
    return values;
})();

/**
 * DataRate enum.
 * @exports DataRate
 * @enum {number}
 * @property {number} GYROSCOPE_DATA_RATE_SHUTDOWN=0 GYROSCOPE_DATA_RATE_SHUTDOWN value
 * @property {number} GYROSCOPE_DATA_RATE_HZ_12_5=1 GYROSCOPE_DATA_RATE_HZ_12_5 value
 * @property {number} GYROSCOPE_DATA_RATE_HZ_26=2 GYROSCOPE_DATA_RATE_HZ_26 value
 * @property {number} GYROSCOPE_DATA_RATE_HZ_52=3 GYROSCOPE_DATA_RATE_HZ_52 value
 * @property {number} GYROSCOPE_DATA_RATE_HZ_104=4 GYROSCOPE_DATA_RATE_HZ_104 value
 * @property {number} GYROSCOPE_DATA_RATE_HZ_208=5 GYROSCOPE_DATA_RATE_HZ_208 value
 * @property {number} GYROSCOPE_DATA_RATE_HZ_416=6 GYROSCOPE_DATA_RATE_HZ_416 value
 * @property {number} GYROSCOPE_DATA_RATE_HZ_833=7 GYROSCOPE_DATA_RATE_HZ_833 value
 * @property {number} GYROSCOPE_DATA_RATE_HZ_1_66K=8 GYROSCOPE_DATA_RATE_HZ_1_66K value
 * @property {number} GYROSCOPE_DATA_RATE_HZ_3_33K=9 GYROSCOPE_DATA_RATE_HZ_3_33K value
 * @property {number} GYROSCOPE_DATA_RATE_HZ_6_66K=10 GYROSCOPE_DATA_RATE_HZ_6_66K value
 */
export const DataRate = $root.DataRate = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GYROSCOPE_DATA_RATE_SHUTDOWN"] = 0;
    values[valuesById[1] = "GYROSCOPE_DATA_RATE_HZ_12_5"] = 1;
    values[valuesById[2] = "GYROSCOPE_DATA_RATE_HZ_26"] = 2;
    values[valuesById[3] = "GYROSCOPE_DATA_RATE_HZ_52"] = 3;
    values[valuesById[4] = "GYROSCOPE_DATA_RATE_HZ_104"] = 4;
    values[valuesById[5] = "GYROSCOPE_DATA_RATE_HZ_208"] = 5;
    values[valuesById[6] = "GYROSCOPE_DATA_RATE_HZ_416"] = 6;
    values[valuesById[7] = "GYROSCOPE_DATA_RATE_HZ_833"] = 7;
    values[valuesById[8] = "GYROSCOPE_DATA_RATE_HZ_1_66K"] = 8;
    values[valuesById[9] = "GYROSCOPE_DATA_RATE_HZ_3_33K"] = 9;
    values[valuesById[10] = "GYROSCOPE_DATA_RATE_HZ_6_66K"] = 10;
    return values;
})();

/**
 * AccelerationRange enum.
 * @exports AccelerationRange
 * @enum {number}
 * @property {number} GYROSCOPE_ACCELERATION_RANGE_4_G=0 GYROSCOPE_ACCELERATION_RANGE_4_G value
 * @property {number} GYROSCOPE_ACCELERATION_RANGE_8_G=1 GYROSCOPE_ACCELERATION_RANGE_8_G value
 * @property {number} GYROSCOPE_ACCELERATION_RANGE_16_G=2 GYROSCOPE_ACCELERATION_RANGE_16_G value
 * @property {number} GYROSCOPE_ACCELERATION_RANGE_32_G=3 GYROSCOPE_ACCELERATION_RANGE_32_G value
 */
export const AccelerationRange = $root.AccelerationRange = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GYROSCOPE_ACCELERATION_RANGE_4_G"] = 0;
    values[valuesById[1] = "GYROSCOPE_ACCELERATION_RANGE_8_G"] = 1;
    values[valuesById[2] = "GYROSCOPE_ACCELERATION_RANGE_16_G"] = 2;
    values[valuesById[3] = "GYROSCOPE_ACCELERATION_RANGE_32_G"] = 3;
    return values;
})();

/**
 * RotationRange enum.
 * @exports RotationRange
 * @enum {number}
 * @property {number} GYROSCOPE_ROTATION_RANGE_DPS_125=0 GYROSCOPE_ROTATION_RANGE_DPS_125 value
 * @property {number} GYROSCOPE_ROTATION_RANGE_DPS_250=1 GYROSCOPE_ROTATION_RANGE_DPS_250 value
 * @property {number} GYROSCOPE_ROTATION_RANGE_DPS_500=2 GYROSCOPE_ROTATION_RANGE_DPS_500 value
 * @property {number} GYROSCOPE_ROTATION_RANGE_DPS_1000=3 GYROSCOPE_ROTATION_RANGE_DPS_1000 value
 * @property {number} GYROSCOPE_ROTATION_RANGE_DPS_2000=4 GYROSCOPE_ROTATION_RANGE_DPS_2000 value
 * @property {number} GYROSCOPE_ROTATION_RANGE_DPS_4000=5 GYROSCOPE_ROTATION_RANGE_DPS_4000 value
 */
export const RotationRange = $root.RotationRange = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "GYROSCOPE_ROTATION_RANGE_DPS_125"] = 0;
    values[valuesById[1] = "GYROSCOPE_ROTATION_RANGE_DPS_250"] = 1;
    values[valuesById[2] = "GYROSCOPE_ROTATION_RANGE_DPS_500"] = 2;
    values[valuesById[3] = "GYROSCOPE_ROTATION_RANGE_DPS_1000"] = 3;
    values[valuesById[4] = "GYROSCOPE_ROTATION_RANGE_DPS_2000"] = 4;
    values[valuesById[5] = "GYROSCOPE_ROTATION_RANGE_DPS_4000"] = 5;
    return values;
})();

export const PressureSensorState = $root.PressureSensorState = (() => {

    

    /**
     * Constructs a new PressureSensorState.
     * @exports PressureSensorState
     * @classdesc Represents a PressureSensorState.
     * @implements IPressureSensorState
     * @constructor
     * @param {IPressureSensorState=} [properties] Properties to set
     */
    function PressureSensorState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PressureSensorState pressure.
     * @member {number} pressure
     * @memberof PressureSensorState
     * @instance
     */
    PressureSensorState.prototype.pressure = 0;

    /**
     * PressureSensorState temperature.
     * @member {number} temperature
     * @memberof PressureSensorState
     * @instance
     */
    PressureSensorState.prototype.temperature = 0;

    /**
     * PressureSensorState dataRate.
     * @member {PressureSensorDataRate} dataRate
     * @memberof PressureSensorState
     * @instance
     */
    PressureSensorState.prototype.dataRate = 0;

    /**
     * Creates a new PressureSensorState instance using the specified properties.
     * @function create
     * @memberof PressureSensorState
     * @static
     * @param {IPressureSensorState=} [properties] Properties to set
     * @returns {PressureSensorState} PressureSensorState instance
     */
    PressureSensorState.create = function create(properties) {
        return new PressureSensorState(properties);
    };

    /**
     * Encodes the specified PressureSensorState message. Does not implicitly {@link PressureSensorState.verify|verify} messages.
     * @function encode
     * @memberof PressureSensorState
     * @static
     * @param {IPressureSensorState} message PressureSensorState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PressureSensorState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pressure != null && Object.hasOwnProperty.call(message, "pressure"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.pressure);
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.temperature);
        if (message.dataRate != null && Object.hasOwnProperty.call(message, "dataRate"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.dataRate);
        return writer;
    };

    /**
     * Encodes the specified PressureSensorState message, length delimited. Does not implicitly {@link PressureSensorState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PressureSensorState
     * @static
     * @param {IPressureSensorState} message PressureSensorState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PressureSensorState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PressureSensorState message from the specified reader or buffer.
     * @function decode
     * @memberof PressureSensorState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PressureSensorState} PressureSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PressureSensorState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PressureSensorState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.pressure = reader.float();
                    break;
                }
            case 2: {
                    message.temperature = reader.float();
                    break;
                }
            case 3: {
                    message.dataRate = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PressureSensorState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PressureSensorState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PressureSensorState} PressureSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PressureSensorState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PressureSensorState message.
     * @function verify
     * @memberof PressureSensorState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PressureSensorState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pressure != null && message.hasOwnProperty("pressure"))
            if (typeof message.pressure !== "number")
                return "pressure: number expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (typeof message.temperature !== "number")
                return "temperature: number expected";
        if (message.dataRate != null && message.hasOwnProperty("dataRate"))
            switch (message.dataRate) {
            default:
                return "dataRate: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
        return null;
    };

    /**
     * Creates a PressureSensorState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PressureSensorState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PressureSensorState} PressureSensorState
     */
    PressureSensorState.fromObject = function fromObject(object) {
        if (object instanceof $root.PressureSensorState)
            return object;
        let message = new $root.PressureSensorState();
        if (object.pressure != null)
            message.pressure = Number(object.pressure);
        if (object.temperature != null)
            message.temperature = Number(object.temperature);
        switch (object.dataRate) {
        default:
            if (typeof object.dataRate === "number") {
                message.dataRate = object.dataRate;
                break;
            }
            break;
        case "PRESSURE_SENSOR_DATA_RATE_ONE_SHOT":
        case 0:
            message.dataRate = 0;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_1_HZ":
        case 1:
            message.dataRate = 1;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_7_HZ":
        case 2:
            message.dataRate = 2;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_10_HZ":
        case 3:
            message.dataRate = 3;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_12_5_HZ":
        case 4:
            message.dataRate = 4;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_25_HZ":
        case 5:
            message.dataRate = 5;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_50_HZ":
        case 6:
            message.dataRate = 6;
            break;
        case "PRESSURE_SENSOR_DATA_RATE_75_HZ":
        case 7:
            message.dataRate = 7;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a PressureSensorState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PressureSensorState
     * @static
     * @param {PressureSensorState} message PressureSensorState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PressureSensorState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.pressure = 0;
            object.temperature = 0;
            object.dataRate = options.enums === String ? "PRESSURE_SENSOR_DATA_RATE_ONE_SHOT" : 0;
        }
        if (message.pressure != null && message.hasOwnProperty("pressure"))
            object.pressure = options.json && !isFinite(message.pressure) ? String(message.pressure) : message.pressure;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
        if (message.dataRate != null && message.hasOwnProperty("dataRate"))
            object.dataRate = options.enums === String ? $root.PressureSensorDataRate[message.dataRate] === undefined ? message.dataRate : $root.PressureSensorDataRate[message.dataRate] : message.dataRate;
        return object;
    };

    /**
     * Converts this PressureSensorState to JSON.
     * @function toJSON
     * @memberof PressureSensorState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PressureSensorState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PressureSensorState
     * @function getTypeUrl
     * @memberof PressureSensorState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PressureSensorState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PressureSensorState";
    };

    return PressureSensorState;
})();

export const PressureSensorData = $root.PressureSensorData = (() => {

    

    /**
     * Constructs a new PressureSensorData.
     * @exports PressureSensorData
     * @classdesc Represents a PressureSensorData.
     * @implements IPressureSensorData
     * @constructor
     * @param {IPressureSensorData=} [properties] Properties to set
     */
    function PressureSensorData(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PressureSensorData pressure.
     * @member {number} pressure
     * @memberof PressureSensorData
     * @instance
     */
    PressureSensorData.prototype.pressure = 0;

    /**
     * PressureSensorData temperature.
     * @member {number} temperature
     * @memberof PressureSensorData
     * @instance
     */
    PressureSensorData.prototype.temperature = 0;

    /**
     * Creates a new PressureSensorData instance using the specified properties.
     * @function create
     * @memberof PressureSensorData
     * @static
     * @param {IPressureSensorData=} [properties] Properties to set
     * @returns {PressureSensorData} PressureSensorData instance
     */
    PressureSensorData.create = function create(properties) {
        return new PressureSensorData(properties);
    };

    /**
     * Encodes the specified PressureSensorData message. Does not implicitly {@link PressureSensorData.verify|verify} messages.
     * @function encode
     * @memberof PressureSensorData
     * @static
     * @param {IPressureSensorData} message PressureSensorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PressureSensorData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pressure != null && Object.hasOwnProperty.call(message, "pressure"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.pressure);
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.temperature);
        return writer;
    };

    /**
     * Encodes the specified PressureSensorData message, length delimited. Does not implicitly {@link PressureSensorData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PressureSensorData
     * @static
     * @param {IPressureSensorData} message PressureSensorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PressureSensorData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PressureSensorData message from the specified reader or buffer.
     * @function decode
     * @memberof PressureSensorData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PressureSensorData} PressureSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PressureSensorData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PressureSensorData();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.pressure = reader.float();
                    break;
                }
            case 2: {
                    message.temperature = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PressureSensorData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PressureSensorData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PressureSensorData} PressureSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PressureSensorData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PressureSensorData message.
     * @function verify
     * @memberof PressureSensorData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PressureSensorData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pressure != null && message.hasOwnProperty("pressure"))
            if (typeof message.pressure !== "number")
                return "pressure: number expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (typeof message.temperature !== "number")
                return "temperature: number expected";
        return null;
    };

    /**
     * Creates a PressureSensorData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PressureSensorData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PressureSensorData} PressureSensorData
     */
    PressureSensorData.fromObject = function fromObject(object) {
        if (object instanceof $root.PressureSensorData)
            return object;
        let message = new $root.PressureSensorData();
        if (object.pressure != null)
            message.pressure = Number(object.pressure);
        if (object.temperature != null)
            message.temperature = Number(object.temperature);
        return message;
    };

    /**
     * Creates a plain object from a PressureSensorData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PressureSensorData
     * @static
     * @param {PressureSensorData} message PressureSensorData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PressureSensorData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.pressure = 0;
            object.temperature = 0;
        }
        if (message.pressure != null && message.hasOwnProperty("pressure"))
            object.pressure = options.json && !isFinite(message.pressure) ? String(message.pressure) : message.pressure;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
        return object;
    };

    /**
     * Converts this PressureSensorData to JSON.
     * @function toJSON
     * @memberof PressureSensorData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PressureSensorData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PressureSensorData
     * @function getTypeUrl
     * @memberof PressureSensorData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PressureSensorData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PressureSensorData";
    };

    return PressureSensorData;
})();

/**
 * PressureSensorChipset enum.
 * @exports PressureSensorChipset
 * @enum {number}
 * @property {number} PRESSURE_SENSOR_CHIPSET_UNSPECIFIED=0 PRESSURE_SENSOR_CHIPSET_UNSPECIFIED value
 * @property {number} PRESSURE_SENSOR_CHIPSET_LPS22=1 PRESSURE_SENSOR_CHIPSET_LPS22 value
 * @property {number} PRESSURE_SENSOR_CHIPSET_LPS25=2 PRESSURE_SENSOR_CHIPSET_LPS25 value
 */
export const PressureSensorChipset = $root.PressureSensorChipset = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "PRESSURE_SENSOR_CHIPSET_UNSPECIFIED"] = 0;
    values[valuesById[1] = "PRESSURE_SENSOR_CHIPSET_LPS22"] = 1;
    values[valuesById[2] = "PRESSURE_SENSOR_CHIPSET_LPS25"] = 2;
    return values;
})();

/**
 * PressureSensorDataRate enum.
 * @exports PressureSensorDataRate
 * @enum {number}
 * @property {number} PRESSURE_SENSOR_DATA_RATE_ONE_SHOT=0 PRESSURE_SENSOR_DATA_RATE_ONE_SHOT value
 * @property {number} PRESSURE_SENSOR_DATA_RATE_1_HZ=1 PRESSURE_SENSOR_DATA_RATE_1_HZ value
 * @property {number} PRESSURE_SENSOR_DATA_RATE_7_HZ=2 PRESSURE_SENSOR_DATA_RATE_7_HZ value
 * @property {number} PRESSURE_SENSOR_DATA_RATE_10_HZ=3 PRESSURE_SENSOR_DATA_RATE_10_HZ value
 * @property {number} PRESSURE_SENSOR_DATA_RATE_12_5_HZ=4 PRESSURE_SENSOR_DATA_RATE_12_5_HZ value
 * @property {number} PRESSURE_SENSOR_DATA_RATE_25_HZ=5 PRESSURE_SENSOR_DATA_RATE_25_HZ value
 * @property {number} PRESSURE_SENSOR_DATA_RATE_50_HZ=6 PRESSURE_SENSOR_DATA_RATE_50_HZ value
 * @property {number} PRESSURE_SENSOR_DATA_RATE_75_HZ=7 PRESSURE_SENSOR_DATA_RATE_75_HZ value
 */
export const PressureSensorDataRate = $root.PressureSensorDataRate = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "PRESSURE_SENSOR_DATA_RATE_ONE_SHOT"] = 0;
    values[valuesById[1] = "PRESSURE_SENSOR_DATA_RATE_1_HZ"] = 1;
    values[valuesById[2] = "PRESSURE_SENSOR_DATA_RATE_7_HZ"] = 2;
    values[valuesById[3] = "PRESSURE_SENSOR_DATA_RATE_10_HZ"] = 3;
    values[valuesById[4] = "PRESSURE_SENSOR_DATA_RATE_12_5_HZ"] = 4;
    values[valuesById[5] = "PRESSURE_SENSOR_DATA_RATE_25_HZ"] = 5;
    values[valuesById[6] = "PRESSURE_SENSOR_DATA_RATE_50_HZ"] = 6;
    values[valuesById[7] = "PRESSURE_SENSOR_DATA_RATE_75_HZ"] = 7;
    return values;
})();

export const CO2SensorState = $root.CO2SensorState = (() => {

    

    /**
     * Constructs a new CO2SensorState.
     * @exports CO2SensorState
     * @classdesc Represents a CO2SensorState.
     * @implements ICO2SensorState
     * @constructor
     * @param {ICO2SensorState=} [properties] Properties to set
     */
    function CO2SensorState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CO2SensorState co2.
     * @member {number} co2
     * @memberof CO2SensorState
     * @instance
     */
    CO2SensorState.prototype.co2 = 0;

    /**
     * CO2SensorState humidity.
     * @member {number} humidity
     * @memberof CO2SensorState
     * @instance
     */
    CO2SensorState.prototype.humidity = 0;

    /**
     * CO2SensorState temperature.
     * @member {number} temperature
     * @memberof CO2SensorState
     * @instance
     */
    CO2SensorState.prototype.temperature = 0;

    /**
     * Creates a new CO2SensorState instance using the specified properties.
     * @function create
     * @memberof CO2SensorState
     * @static
     * @param {ICO2SensorState=} [properties] Properties to set
     * @returns {CO2SensorState} CO2SensorState instance
     */
    CO2SensorState.create = function create(properties) {
        return new CO2SensorState(properties);
    };

    /**
     * Encodes the specified CO2SensorState message. Does not implicitly {@link CO2SensorState.verify|verify} messages.
     * @function encode
     * @memberof CO2SensorState
     * @static
     * @param {ICO2SensorState} message CO2SensorState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CO2SensorState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.co2 != null && Object.hasOwnProperty.call(message, "co2"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.co2);
        if (message.humidity != null && Object.hasOwnProperty.call(message, "humidity"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.humidity);
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.temperature);
        return writer;
    };

    /**
     * Encodes the specified CO2SensorState message, length delimited. Does not implicitly {@link CO2SensorState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CO2SensorState
     * @static
     * @param {ICO2SensorState} message CO2SensorState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CO2SensorState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CO2SensorState message from the specified reader or buffer.
     * @function decode
     * @memberof CO2SensorState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CO2SensorState} CO2SensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CO2SensorState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CO2SensorState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.co2 = reader.uint32();
                    break;
                }
            case 2: {
                    message.humidity = reader.float();
                    break;
                }
            case 3: {
                    message.temperature = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CO2SensorState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CO2SensorState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CO2SensorState} CO2SensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CO2SensorState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CO2SensorState message.
     * @function verify
     * @memberof CO2SensorState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CO2SensorState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.co2 != null && message.hasOwnProperty("co2"))
            if (!$util.isInteger(message.co2))
                return "co2: integer expected";
        if (message.humidity != null && message.hasOwnProperty("humidity"))
            if (typeof message.humidity !== "number")
                return "humidity: number expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (typeof message.temperature !== "number")
                return "temperature: number expected";
        return null;
    };

    /**
     * Creates a CO2SensorState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CO2SensorState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CO2SensorState} CO2SensorState
     */
    CO2SensorState.fromObject = function fromObject(object) {
        if (object instanceof $root.CO2SensorState)
            return object;
        let message = new $root.CO2SensorState();
        if (object.co2 != null)
            message.co2 = object.co2 >>> 0;
        if (object.humidity != null)
            message.humidity = Number(object.humidity);
        if (object.temperature != null)
            message.temperature = Number(object.temperature);
        return message;
    };

    /**
     * Creates a plain object from a CO2SensorState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CO2SensorState
     * @static
     * @param {CO2SensorState} message CO2SensorState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CO2SensorState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.co2 = 0;
            object.humidity = 0;
            object.temperature = 0;
        }
        if (message.co2 != null && message.hasOwnProperty("co2"))
            object.co2 = message.co2;
        if (message.humidity != null && message.hasOwnProperty("humidity"))
            object.humidity = options.json && !isFinite(message.humidity) ? String(message.humidity) : message.humidity;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
        return object;
    };

    /**
     * Converts this CO2SensorState to JSON.
     * @function toJSON
     * @memberof CO2SensorState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CO2SensorState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CO2SensorState
     * @function getTypeUrl
     * @memberof CO2SensorState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CO2SensorState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CO2SensorState";
    };

    return CO2SensorState;
})();

export const CO2SensorData = $root.CO2SensorData = (() => {

    

    /**
     * Constructs a new CO2SensorData.
     * @exports CO2SensorData
     * @classdesc Represents a CO2SensorData.
     * @implements ICO2SensorData
     * @constructor
     * @param {ICO2SensorData=} [properties] Properties to set
     */
    function CO2SensorData(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CO2SensorData co2.
     * @member {number} co2
     * @memberof CO2SensorData
     * @instance
     */
    CO2SensorData.prototype.co2 = 0;

    /**
     * CO2SensorData humidity.
     * @member {number} humidity
     * @memberof CO2SensorData
     * @instance
     */
    CO2SensorData.prototype.humidity = 0;

    /**
     * CO2SensorData temperature.
     * @member {number} temperature
     * @memberof CO2SensorData
     * @instance
     */
    CO2SensorData.prototype.temperature = 0;

    /**
     * Creates a new CO2SensorData instance using the specified properties.
     * @function create
     * @memberof CO2SensorData
     * @static
     * @param {ICO2SensorData=} [properties] Properties to set
     * @returns {CO2SensorData} CO2SensorData instance
     */
    CO2SensorData.create = function create(properties) {
        return new CO2SensorData(properties);
    };

    /**
     * Encodes the specified CO2SensorData message. Does not implicitly {@link CO2SensorData.verify|verify} messages.
     * @function encode
     * @memberof CO2SensorData
     * @static
     * @param {ICO2SensorData} message CO2SensorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CO2SensorData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.co2 != null && Object.hasOwnProperty.call(message, "co2"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.co2);
        if (message.humidity != null && Object.hasOwnProperty.call(message, "humidity"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.humidity);
        if (message.temperature != null && Object.hasOwnProperty.call(message, "temperature"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.temperature);
        return writer;
    };

    /**
     * Encodes the specified CO2SensorData message, length delimited. Does not implicitly {@link CO2SensorData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CO2SensorData
     * @static
     * @param {ICO2SensorData} message CO2SensorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CO2SensorData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CO2SensorData message from the specified reader or buffer.
     * @function decode
     * @memberof CO2SensorData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CO2SensorData} CO2SensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CO2SensorData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CO2SensorData();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.co2 = reader.uint32();
                    break;
                }
            case 2: {
                    message.humidity = reader.float();
                    break;
                }
            case 3: {
                    message.temperature = reader.float();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CO2SensorData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CO2SensorData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CO2SensorData} CO2SensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CO2SensorData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CO2SensorData message.
     * @function verify
     * @memberof CO2SensorData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CO2SensorData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.co2 != null && message.hasOwnProperty("co2"))
            if (!$util.isInteger(message.co2))
                return "co2: integer expected";
        if (message.humidity != null && message.hasOwnProperty("humidity"))
            if (typeof message.humidity !== "number")
                return "humidity: number expected";
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            if (typeof message.temperature !== "number")
                return "temperature: number expected";
        return null;
    };

    /**
     * Creates a CO2SensorData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CO2SensorData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CO2SensorData} CO2SensorData
     */
    CO2SensorData.fromObject = function fromObject(object) {
        if (object instanceof $root.CO2SensorData)
            return object;
        let message = new $root.CO2SensorData();
        if (object.co2 != null)
            message.co2 = object.co2 >>> 0;
        if (object.humidity != null)
            message.humidity = Number(object.humidity);
        if (object.temperature != null)
            message.temperature = Number(object.temperature);
        return message;
    };

    /**
     * Creates a plain object from a CO2SensorData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CO2SensorData
     * @static
     * @param {CO2SensorData} message CO2SensorData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CO2SensorData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.co2 = 0;
            object.humidity = 0;
            object.temperature = 0;
        }
        if (message.co2 != null && message.hasOwnProperty("co2"))
            object.co2 = message.co2;
        if (message.humidity != null && message.hasOwnProperty("humidity"))
            object.humidity = options.json && !isFinite(message.humidity) ? String(message.humidity) : message.humidity;
        if (message.temperature != null && message.hasOwnProperty("temperature"))
            object.temperature = options.json && !isFinite(message.temperature) ? String(message.temperature) : message.temperature;
        return object;
    };

    /**
     * Converts this CO2SensorData to JSON.
     * @function toJSON
     * @memberof CO2SensorData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CO2SensorData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CO2SensorData
     * @function getTypeUrl
     * @memberof CO2SensorData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CO2SensorData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CO2SensorData";
    };

    return CO2SensorData;
})();

export const DistanceSensorState = $root.DistanceSensorState = (() => {

    

    /**
     * Constructs a new DistanceSensorState.
     * @exports DistanceSensorState
     * @classdesc Represents a DistanceSensorState.
     * @implements IDistanceSensorState
     * @constructor
     * @param {IDistanceSensorState=} [properties] Properties to set
     */
    function DistanceSensorState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DistanceSensorState distance.
     * @member {number} distance
     * @memberof DistanceSensorState
     * @instance
     */
    DistanceSensorState.prototype.distance = 0;

    /**
     * Creates a new DistanceSensorState instance using the specified properties.
     * @function create
     * @memberof DistanceSensorState
     * @static
     * @param {IDistanceSensorState=} [properties] Properties to set
     * @returns {DistanceSensorState} DistanceSensorState instance
     */
    DistanceSensorState.create = function create(properties) {
        return new DistanceSensorState(properties);
    };

    /**
     * Encodes the specified DistanceSensorState message. Does not implicitly {@link DistanceSensorState.verify|verify} messages.
     * @function encode
     * @memberof DistanceSensorState
     * @static
     * @param {IDistanceSensorState} message DistanceSensorState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DistanceSensorState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.distance != null && Object.hasOwnProperty.call(message, "distance"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.distance);
        return writer;
    };

    /**
     * Encodes the specified DistanceSensorState message, length delimited. Does not implicitly {@link DistanceSensorState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DistanceSensorState
     * @static
     * @param {IDistanceSensorState} message DistanceSensorState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DistanceSensorState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DistanceSensorState message from the specified reader or buffer.
     * @function decode
     * @memberof DistanceSensorState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DistanceSensorState} DistanceSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DistanceSensorState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DistanceSensorState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.distance = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DistanceSensorState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DistanceSensorState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DistanceSensorState} DistanceSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DistanceSensorState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DistanceSensorState message.
     * @function verify
     * @memberof DistanceSensorState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DistanceSensorState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.distance != null && message.hasOwnProperty("distance"))
            if (!$util.isInteger(message.distance))
                return "distance: integer expected";
        return null;
    };

    /**
     * Creates a DistanceSensorState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DistanceSensorState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DistanceSensorState} DistanceSensorState
     */
    DistanceSensorState.fromObject = function fromObject(object) {
        if (object instanceof $root.DistanceSensorState)
            return object;
        let message = new $root.DistanceSensorState();
        if (object.distance != null)
            message.distance = object.distance >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a DistanceSensorState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DistanceSensorState
     * @static
     * @param {DistanceSensorState} message DistanceSensorState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DistanceSensorState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.distance = 0;
        if (message.distance != null && message.hasOwnProperty("distance"))
            object.distance = message.distance;
        return object;
    };

    /**
     * Converts this DistanceSensorState to JSON.
     * @function toJSON
     * @memberof DistanceSensorState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DistanceSensorState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DistanceSensorState
     * @function getTypeUrl
     * @memberof DistanceSensorState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DistanceSensorState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DistanceSensorState";
    };

    return DistanceSensorState;
})();

export const DistanceSensorData = $root.DistanceSensorData = (() => {

    

    /**
     * Constructs a new DistanceSensorData.
     * @exports DistanceSensorData
     * @classdesc Represents a DistanceSensorData.
     * @implements IDistanceSensorData
     * @constructor
     * @param {IDistanceSensorData=} [properties] Properties to set
     */
    function DistanceSensorData(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DistanceSensorData distance.
     * @member {number} distance
     * @memberof DistanceSensorData
     * @instance
     */
    DistanceSensorData.prototype.distance = 0;

    /**
     * Creates a new DistanceSensorData instance using the specified properties.
     * @function create
     * @memberof DistanceSensorData
     * @static
     * @param {IDistanceSensorData=} [properties] Properties to set
     * @returns {DistanceSensorData} DistanceSensorData instance
     */
    DistanceSensorData.create = function create(properties) {
        return new DistanceSensorData(properties);
    };

    /**
     * Encodes the specified DistanceSensorData message. Does not implicitly {@link DistanceSensorData.verify|verify} messages.
     * @function encode
     * @memberof DistanceSensorData
     * @static
     * @param {IDistanceSensorData} message DistanceSensorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DistanceSensorData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.distance != null && Object.hasOwnProperty.call(message, "distance"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.distance);
        return writer;
    };

    /**
     * Encodes the specified DistanceSensorData message, length delimited. Does not implicitly {@link DistanceSensorData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DistanceSensorData
     * @static
     * @param {IDistanceSensorData} message DistanceSensorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DistanceSensorData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DistanceSensorData message from the specified reader or buffer.
     * @function decode
     * @memberof DistanceSensorData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DistanceSensorData} DistanceSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DistanceSensorData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DistanceSensorData();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.distance = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DistanceSensorData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DistanceSensorData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DistanceSensorData} DistanceSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DistanceSensorData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DistanceSensorData message.
     * @function verify
     * @memberof DistanceSensorData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DistanceSensorData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.distance != null && message.hasOwnProperty("distance"))
            if (!$util.isInteger(message.distance))
                return "distance: integer expected";
        return null;
    };

    /**
     * Creates a DistanceSensorData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DistanceSensorData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DistanceSensorData} DistanceSensorData
     */
    DistanceSensorData.fromObject = function fromObject(object) {
        if (object instanceof $root.DistanceSensorData)
            return object;
        let message = new $root.DistanceSensorData();
        if (object.distance != null)
            message.distance = object.distance >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a DistanceSensorData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DistanceSensorData
     * @static
     * @param {DistanceSensorData} message DistanceSensorData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DistanceSensorData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.distance = 0;
        if (message.distance != null && message.hasOwnProperty("distance"))
            object.distance = message.distance;
        return object;
    };

    /**
     * Converts this DistanceSensorData to JSON.
     * @function toJSON
     * @memberof DistanceSensorData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DistanceSensorData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DistanceSensorData
     * @function getTypeUrl
     * @memberof DistanceSensorData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DistanceSensorData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DistanceSensorData";
    };

    return DistanceSensorData;
})();

export const UVSensorState = $root.UVSensorState = (() => {

    

    /**
     * Constructs a new UVSensorState.
     * @exports UVSensorState
     * @classdesc Represents a UVSensorState.
     * @implements IUVSensorState
     * @constructor
     * @param {IUVSensorState=} [properties] Properties to set
     */
    function UVSensorState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UVSensorState value.
     * @member {number} value
     * @memberof UVSensorState
     * @instance
     */
    UVSensorState.prototype.value = 0;

    /**
     * UVSensorState mode.
     * @member {UVSensorMode} mode
     * @memberof UVSensorState
     * @instance
     */
    UVSensorState.prototype.mode = 0;

    /**
     * UVSensorState gain.
     * @member {UVSensorGain} gain
     * @memberof UVSensorState
     * @instance
     */
    UVSensorState.prototype.gain = 0;

    /**
     * UVSensorState resolution.
     * @member {UVSensorResolution} resolution
     * @memberof UVSensorState
     * @instance
     */
    UVSensorState.prototype.resolution = 0;

    /**
     * Creates a new UVSensorState instance using the specified properties.
     * @function create
     * @memberof UVSensorState
     * @static
     * @param {IUVSensorState=} [properties] Properties to set
     * @returns {UVSensorState} UVSensorState instance
     */
    UVSensorState.create = function create(properties) {
        return new UVSensorState(properties);
    };

    /**
     * Encodes the specified UVSensorState message. Does not implicitly {@link UVSensorState.verify|verify} messages.
     * @function encode
     * @memberof UVSensorState
     * @static
     * @param {IUVSensorState} message UVSensorState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UVSensorState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
        if (message.mode != null && Object.hasOwnProperty.call(message, "mode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.mode);
        if (message.gain != null && Object.hasOwnProperty.call(message, "gain"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.gain);
        if (message.resolution != null && Object.hasOwnProperty.call(message, "resolution"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.resolution);
        return writer;
    };

    /**
     * Encodes the specified UVSensorState message, length delimited. Does not implicitly {@link UVSensorState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UVSensorState
     * @static
     * @param {IUVSensorState} message UVSensorState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UVSensorState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UVSensorState message from the specified reader or buffer.
     * @function decode
     * @memberof UVSensorState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UVSensorState} UVSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UVSensorState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UVSensorState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.value = reader.uint32();
                    break;
                }
            case 2: {
                    message.mode = reader.int32();
                    break;
                }
            case 3: {
                    message.gain = reader.int32();
                    break;
                }
            case 4: {
                    message.resolution = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UVSensorState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UVSensorState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UVSensorState} UVSensorState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UVSensorState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UVSensorState message.
     * @function verify
     * @memberof UVSensorState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UVSensorState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        if (message.mode != null && message.hasOwnProperty("mode"))
            switch (message.mode) {
            default:
                return "mode: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.gain != null && message.hasOwnProperty("gain"))
            switch (message.gain) {
            default:
                return "gain: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.resolution != null && message.hasOwnProperty("resolution"))
            switch (message.resolution) {
            default:
                return "resolution: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            }
        return null;
    };

    /**
     * Creates a UVSensorState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UVSensorState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UVSensorState} UVSensorState
     */
    UVSensorState.fromObject = function fromObject(object) {
        if (object instanceof $root.UVSensorState)
            return object;
        let message = new $root.UVSensorState();
        if (object.value != null)
            message.value = object.value >>> 0;
        switch (object.mode) {
        default:
            if (typeof object.mode === "number") {
                message.mode = object.mode;
                break;
            }
            break;
        case "UV_SENSOR_MODE_ALS":
        case 0:
            message.mode = 0;
            break;
        case "UV_SENSOR_MODE_UVS":
        case 1:
            message.mode = 1;
            break;
        }
        switch (object.gain) {
        default:
            if (typeof object.gain === "number") {
                message.gain = object.gain;
                break;
            }
            break;
        case "UV_SENSOR_GAIN_1":
        case 0:
            message.gain = 0;
            break;
        case "UV_SENSOR_GAIN_3":
        case 1:
            message.gain = 1;
            break;
        case "UV_SENSOR_GAIN_6":
        case 2:
            message.gain = 2;
            break;
        case "UV_SENSOR_GAIN_9":
        case 3:
            message.gain = 3;
            break;
        case "UV_SENSOR_GAIN_18":
        case 4:
            message.gain = 4;
            break;
        }
        switch (object.resolution) {
        default:
            if (typeof object.resolution === "number") {
                message.resolution = object.resolution;
                break;
            }
            break;
        case "UV_SENSOR_RESOLUTION_20_BIT":
        case 0:
            message.resolution = 0;
            break;
        case "UV_SENSOR_RESOLUTION_19_BIT":
        case 1:
            message.resolution = 1;
            break;
        case "UV_SENSOR_RESOLUTION_18_BIT":
        case 2:
            message.resolution = 2;
            break;
        case "UV_SENSOR_RESOLUTION_17_BIT":
        case 3:
            message.resolution = 3;
            break;
        case "UV_SENSOR_RESOLUTION_16_BIT":
        case 4:
            message.resolution = 4;
            break;
        case "UV_SENSOR_RESOLUTION_13_BIT":
        case 5:
            message.resolution = 5;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a UVSensorState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UVSensorState
     * @static
     * @param {UVSensorState} message UVSensorState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UVSensorState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.value = 0;
            object.mode = options.enums === String ? "UV_SENSOR_MODE_ALS" : 0;
            object.gain = options.enums === String ? "UV_SENSOR_GAIN_1" : 0;
            object.resolution = options.enums === String ? "UV_SENSOR_RESOLUTION_20_BIT" : 0;
        }
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        if (message.mode != null && message.hasOwnProperty("mode"))
            object.mode = options.enums === String ? $root.UVSensorMode[message.mode] === undefined ? message.mode : $root.UVSensorMode[message.mode] : message.mode;
        if (message.gain != null && message.hasOwnProperty("gain"))
            object.gain = options.enums === String ? $root.UVSensorGain[message.gain] === undefined ? message.gain : $root.UVSensorGain[message.gain] : message.gain;
        if (message.resolution != null && message.hasOwnProperty("resolution"))
            object.resolution = options.enums === String ? $root.UVSensorResolution[message.resolution] === undefined ? message.resolution : $root.UVSensorResolution[message.resolution] : message.resolution;
        return object;
    };

    /**
     * Converts this UVSensorState to JSON.
     * @function toJSON
     * @memberof UVSensorState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UVSensorState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UVSensorState
     * @function getTypeUrl
     * @memberof UVSensorState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UVSensorState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UVSensorState";
    };

    return UVSensorState;
})();

export const UVSensorData = $root.UVSensorData = (() => {

    

    /**
     * Constructs a new UVSensorData.
     * @exports UVSensorData
     * @classdesc Represents a UVSensorData.
     * @implements IUVSensorData
     * @constructor
     * @param {IUVSensorData=} [properties] Properties to set
     */
    function UVSensorData(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UVSensorData value.
     * @member {number} value
     * @memberof UVSensorData
     * @instance
     */
    UVSensorData.prototype.value = 0;

    /**
     * Creates a new UVSensorData instance using the specified properties.
     * @function create
     * @memberof UVSensorData
     * @static
     * @param {IUVSensorData=} [properties] Properties to set
     * @returns {UVSensorData} UVSensorData instance
     */
    UVSensorData.create = function create(properties) {
        return new UVSensorData(properties);
    };

    /**
     * Encodes the specified UVSensorData message. Does not implicitly {@link UVSensorData.verify|verify} messages.
     * @function encode
     * @memberof UVSensorData
     * @static
     * @param {IUVSensorData} message UVSensorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UVSensorData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
        return writer;
    };

    /**
     * Encodes the specified UVSensorData message, length delimited. Does not implicitly {@link UVSensorData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UVSensorData
     * @static
     * @param {IUVSensorData} message UVSensorData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UVSensorData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UVSensorData message from the specified reader or buffer.
     * @function decode
     * @memberof UVSensorData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UVSensorData} UVSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UVSensorData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.UVSensorData();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.value = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UVSensorData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UVSensorData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UVSensorData} UVSensorData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UVSensorData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UVSensorData message.
     * @function verify
     * @memberof UVSensorData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UVSensorData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (!$util.isInteger(message.value))
                return "value: integer expected";
        return null;
    };

    /**
     * Creates a UVSensorData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UVSensorData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UVSensorData} UVSensorData
     */
    UVSensorData.fromObject = function fromObject(object) {
        if (object instanceof $root.UVSensorData)
            return object;
        let message = new $root.UVSensorData();
        if (object.value != null)
            message.value = object.value >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a UVSensorData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UVSensorData
     * @static
     * @param {UVSensorData} message UVSensorData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UVSensorData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.value = 0;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = message.value;
        return object;
    };

    /**
     * Converts this UVSensorData to JSON.
     * @function toJSON
     * @memberof UVSensorData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UVSensorData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UVSensorData
     * @function getTypeUrl
     * @memberof UVSensorData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UVSensorData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UVSensorData";
    };

    return UVSensorData;
})();

/**
 * UVSensorMode enum.
 * @exports UVSensorMode
 * @enum {number}
 * @property {number} UV_SENSOR_MODE_ALS=0 UV_SENSOR_MODE_ALS value
 * @property {number} UV_SENSOR_MODE_UVS=1 UV_SENSOR_MODE_UVS value
 */
export const UVSensorMode = $root.UVSensorMode = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UV_SENSOR_MODE_ALS"] = 0;
    values[valuesById[1] = "UV_SENSOR_MODE_UVS"] = 1;
    return values;
})();

/**
 * UVSensorGain enum.
 * @exports UVSensorGain
 * @enum {number}
 * @property {number} UV_SENSOR_GAIN_1=0 UV_SENSOR_GAIN_1 value
 * @property {number} UV_SENSOR_GAIN_3=1 UV_SENSOR_GAIN_3 value
 * @property {number} UV_SENSOR_GAIN_6=2 UV_SENSOR_GAIN_6 value
 * @property {number} UV_SENSOR_GAIN_9=3 UV_SENSOR_GAIN_9 value
 * @property {number} UV_SENSOR_GAIN_18=4 UV_SENSOR_GAIN_18 value
 */
export const UVSensorGain = $root.UVSensorGain = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UV_SENSOR_GAIN_1"] = 0;
    values[valuesById[1] = "UV_SENSOR_GAIN_3"] = 1;
    values[valuesById[2] = "UV_SENSOR_GAIN_6"] = 2;
    values[valuesById[3] = "UV_SENSOR_GAIN_9"] = 3;
    values[valuesById[4] = "UV_SENSOR_GAIN_18"] = 4;
    return values;
})();

/**
 * UVSensorResolution enum.
 * @exports UVSensorResolution
 * @enum {number}
 * @property {number} UV_SENSOR_RESOLUTION_20_BIT=0 UV_SENSOR_RESOLUTION_20_BIT value
 * @property {number} UV_SENSOR_RESOLUTION_19_BIT=1 UV_SENSOR_RESOLUTION_19_BIT value
 * @property {number} UV_SENSOR_RESOLUTION_18_BIT=2 UV_SENSOR_RESOLUTION_18_BIT value
 * @property {number} UV_SENSOR_RESOLUTION_17_BIT=3 UV_SENSOR_RESOLUTION_17_BIT value
 * @property {number} UV_SENSOR_RESOLUTION_16_BIT=4 UV_SENSOR_RESOLUTION_16_BIT value
 * @property {number} UV_SENSOR_RESOLUTION_13_BIT=5 UV_SENSOR_RESOLUTION_13_BIT value
 */
export const UVSensorResolution = $root.UVSensorResolution = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "UV_SENSOR_RESOLUTION_20_BIT"] = 0;
    values[valuesById[1] = "UV_SENSOR_RESOLUTION_19_BIT"] = 1;
    values[valuesById[2] = "UV_SENSOR_RESOLUTION_18_BIT"] = 2;
    values[valuesById[3] = "UV_SENSOR_RESOLUTION_17_BIT"] = 3;
    values[valuesById[4] = "UV_SENSOR_RESOLUTION_16_BIT"] = 4;
    values[valuesById[5] = "UV_SENSOR_RESOLUTION_13_BIT"] = 5;
    return values;
})();

export const NFCTagState = $root.NFCTagState = (() => {

    

    /**
     * Constructs a new NFCTagState.
     * @exports NFCTagState
     * @classdesc Represents a NFCTagState.
     * @implements INFCTagState
     * @constructor
     * @param {INFCTagState=} [properties] Properties to set
     */
    function NFCTagState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NFCTagState recordType.
     * @member {NFCRecordType} recordType
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.recordType = 0;

    /**
     * NFCTagState information.
     * @member {string} information
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.information = "";

    /**
     * NFCTagState text.
     * @member {string} text
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.text = "";

    /**
     * NFCTagState language.
     * @member {string} language
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.language = "";

    /**
     * NFCTagState uri.
     * @member {string} uri
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.uri = "";

    /**
     * NFCTagState protocol.
     * @member {string} protocol
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.protocol = "";

    /**
     * NFCTagState phoneNumber.
     * @member {string} phoneNumber
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.phoneNumber = "";

    /**
     * NFCTagState smsMessage.
     * @member {string} smsMessage
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.smsMessage = "";

    /**
     * NFCTagState emailAddress.
     * @member {string} emailAddress
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.emailAddress = "";

    /**
     * NFCTagState subject.
     * @member {string} subject
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.subject = "";

    /**
     * NFCTagState emailMessage.
     * @member {string} emailMessage
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.emailMessage = "";

    /**
     * NFCTagState latitude.
     * @member {number} latitude
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.latitude = 0;

    /**
     * NFCTagState longitude.
     * @member {number} longitude
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.longitude = 0;

    /**
     * NFCTagState vcardFirstName.
     * @member {string} vcardFirstName
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardFirstName = "";

    /**
     * NFCTagState vcardName.
     * @member {string} vcardName
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardName = "";

    /**
     * NFCTagState vcardTitle.
     * @member {string} vcardTitle
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardTitle = "";

    /**
     * NFCTagState vcardOrganization.
     * @member {string} vcardOrganization
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardOrganization = "";

    /**
     * NFCTagState vcardEmail.
     * @member {string} vcardEmail
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardEmail = "";

    /**
     * NFCTagState vcardHomeEmail.
     * @member {string} vcardHomeEmail
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardHomeEmail = "";

    /**
     * NFCTagState vcardWorkEmail.
     * @member {string} vcardWorkEmail
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardWorkEmail = "";

    /**
     * NFCTagState vcardCellularPhone.
     * @member {string} vcardCellularPhone
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardCellularPhone = "";

    /**
     * NFCTagState vcardHomePhone.
     * @member {string} vcardHomePhone
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardHomePhone = "";

    /**
     * NFCTagState vcardWorkPhone.
     * @member {string} vcardWorkPhone
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardWorkPhone = "";

    /**
     * NFCTagState vcardAddress.
     * @member {string} vcardAddress
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardAddress = "";

    /**
     * NFCTagState vcardHomeAddress.
     * @member {string} vcardHomeAddress
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardHomeAddress = "";

    /**
     * NFCTagState vcardWorkAddress.
     * @member {string} vcardWorkAddress
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardWorkAddress = "";

    /**
     * NFCTagState vcardUrl.
     * @member {string} vcardUrl
     * @memberof NFCTagState
     * @instance
     */
    NFCTagState.prototype.vcardUrl = "";

    /**
     * Creates a new NFCTagState instance using the specified properties.
     * @function create
     * @memberof NFCTagState
     * @static
     * @param {INFCTagState=} [properties] Properties to set
     * @returns {NFCTagState} NFCTagState instance
     */
    NFCTagState.create = function create(properties) {
        return new NFCTagState(properties);
    };

    /**
     * Encodes the specified NFCTagState message. Does not implicitly {@link NFCTagState.verify|verify} messages.
     * @function encode
     * @memberof NFCTagState
     * @static
     * @param {INFCTagState} message NFCTagState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCTagState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.recordType != null && Object.hasOwnProperty.call(message, "recordType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.recordType);
        if (message.information != null && Object.hasOwnProperty.call(message, "information"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.information);
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.text);
        if (message.language != null && Object.hasOwnProperty.call(message, "language"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.language);
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.uri);
        if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.protocol);
        if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.phoneNumber);
        if (message.smsMessage != null && Object.hasOwnProperty.call(message, "smsMessage"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.smsMessage);
        if (message.emailAddress != null && Object.hasOwnProperty.call(message, "emailAddress"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.emailAddress);
        if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.subject);
        if (message.emailMessage != null && Object.hasOwnProperty.call(message, "emailMessage"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.emailMessage);
        if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
            writer.uint32(/* id 12, wireType 5 =*/101).float(message.latitude);
        if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
            writer.uint32(/* id 13, wireType 5 =*/109).float(message.longitude);
        if (message.vcardFirstName != null && Object.hasOwnProperty.call(message, "vcardFirstName"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.vcardFirstName);
        if (message.vcardName != null && Object.hasOwnProperty.call(message, "vcardName"))
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.vcardName);
        if (message.vcardTitle != null && Object.hasOwnProperty.call(message, "vcardTitle"))
            writer.uint32(/* id 16, wireType 2 =*/130).string(message.vcardTitle);
        if (message.vcardOrganization != null && Object.hasOwnProperty.call(message, "vcardOrganization"))
            writer.uint32(/* id 17, wireType 2 =*/138).string(message.vcardOrganization);
        if (message.vcardEmail != null && Object.hasOwnProperty.call(message, "vcardEmail"))
            writer.uint32(/* id 18, wireType 2 =*/146).string(message.vcardEmail);
        if (message.vcardHomeEmail != null && Object.hasOwnProperty.call(message, "vcardHomeEmail"))
            writer.uint32(/* id 19, wireType 2 =*/154).string(message.vcardHomeEmail);
        if (message.vcardWorkEmail != null && Object.hasOwnProperty.call(message, "vcardWorkEmail"))
            writer.uint32(/* id 20, wireType 2 =*/162).string(message.vcardWorkEmail);
        if (message.vcardCellularPhone != null && Object.hasOwnProperty.call(message, "vcardCellularPhone"))
            writer.uint32(/* id 21, wireType 2 =*/170).string(message.vcardCellularPhone);
        if (message.vcardHomePhone != null && Object.hasOwnProperty.call(message, "vcardHomePhone"))
            writer.uint32(/* id 22, wireType 2 =*/178).string(message.vcardHomePhone);
        if (message.vcardWorkPhone != null && Object.hasOwnProperty.call(message, "vcardWorkPhone"))
            writer.uint32(/* id 23, wireType 2 =*/186).string(message.vcardWorkPhone);
        if (message.vcardAddress != null && Object.hasOwnProperty.call(message, "vcardAddress"))
            writer.uint32(/* id 24, wireType 2 =*/194).string(message.vcardAddress);
        if (message.vcardHomeAddress != null && Object.hasOwnProperty.call(message, "vcardHomeAddress"))
            writer.uint32(/* id 25, wireType 2 =*/202).string(message.vcardHomeAddress);
        if (message.vcardWorkAddress != null && Object.hasOwnProperty.call(message, "vcardWorkAddress"))
            writer.uint32(/* id 26, wireType 2 =*/210).string(message.vcardWorkAddress);
        if (message.vcardUrl != null && Object.hasOwnProperty.call(message, "vcardUrl"))
            writer.uint32(/* id 27, wireType 2 =*/218).string(message.vcardUrl);
        return writer;
    };

    /**
     * Encodes the specified NFCTagState message, length delimited. Does not implicitly {@link NFCTagState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NFCTagState
     * @static
     * @param {INFCTagState} message NFCTagState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCTagState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NFCTagState message from the specified reader or buffer.
     * @function decode
     * @memberof NFCTagState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NFCTagState} NFCTagState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCTagState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFCTagState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.recordType = reader.int32();
                    break;
                }
            case 2: {
                    message.information = reader.string();
                    break;
                }
            case 3: {
                    message.text = reader.string();
                    break;
                }
            case 4: {
                    message.language = reader.string();
                    break;
                }
            case 5: {
                    message.uri = reader.string();
                    break;
                }
            case 6: {
                    message.protocol = reader.string();
                    break;
                }
            case 7: {
                    message.phoneNumber = reader.string();
                    break;
                }
            case 8: {
                    message.smsMessage = reader.string();
                    break;
                }
            case 9: {
                    message.emailAddress = reader.string();
                    break;
                }
            case 10: {
                    message.subject = reader.string();
                    break;
                }
            case 11: {
                    message.emailMessage = reader.string();
                    break;
                }
            case 12: {
                    message.latitude = reader.float();
                    break;
                }
            case 13: {
                    message.longitude = reader.float();
                    break;
                }
            case 14: {
                    message.vcardFirstName = reader.string();
                    break;
                }
            case 15: {
                    message.vcardName = reader.string();
                    break;
                }
            case 16: {
                    message.vcardTitle = reader.string();
                    break;
                }
            case 17: {
                    message.vcardOrganization = reader.string();
                    break;
                }
            case 18: {
                    message.vcardEmail = reader.string();
                    break;
                }
            case 19: {
                    message.vcardHomeEmail = reader.string();
                    break;
                }
            case 20: {
                    message.vcardWorkEmail = reader.string();
                    break;
                }
            case 21: {
                    message.vcardCellularPhone = reader.string();
                    break;
                }
            case 22: {
                    message.vcardHomePhone = reader.string();
                    break;
                }
            case 23: {
                    message.vcardWorkPhone = reader.string();
                    break;
                }
            case 24: {
                    message.vcardAddress = reader.string();
                    break;
                }
            case 25: {
                    message.vcardHomeAddress = reader.string();
                    break;
                }
            case 26: {
                    message.vcardWorkAddress = reader.string();
                    break;
                }
            case 27: {
                    message.vcardUrl = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NFCTagState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NFCTagState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NFCTagState} NFCTagState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCTagState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NFCTagState message.
     * @function verify
     * @memberof NFCTagState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NFCTagState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.recordType != null && message.hasOwnProperty("recordType"))
            switch (message.recordType) {
            default:
                return "recordType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
                break;
            }
        if (message.information != null && message.hasOwnProperty("information"))
            if (!$util.isString(message.information))
                return "information: string expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        if (message.language != null && message.hasOwnProperty("language"))
            if (!$util.isString(message.language))
                return "language: string expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.protocol != null && message.hasOwnProperty("protocol"))
            if (!$util.isString(message.protocol))
                return "protocol: string expected";
        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
            if (!$util.isString(message.phoneNumber))
                return "phoneNumber: string expected";
        if (message.smsMessage != null && message.hasOwnProperty("smsMessage"))
            if (!$util.isString(message.smsMessage))
                return "smsMessage: string expected";
        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
            if (!$util.isString(message.emailAddress))
                return "emailAddress: string expected";
        if (message.subject != null && message.hasOwnProperty("subject"))
            if (!$util.isString(message.subject))
                return "subject: string expected";
        if (message.emailMessage != null && message.hasOwnProperty("emailMessage"))
            if (!$util.isString(message.emailMessage))
                return "emailMessage: string expected";
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            if (typeof message.latitude !== "number")
                return "latitude: number expected";
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            if (typeof message.longitude !== "number")
                return "longitude: number expected";
        if (message.vcardFirstName != null && message.hasOwnProperty("vcardFirstName"))
            if (!$util.isString(message.vcardFirstName))
                return "vcardFirstName: string expected";
        if (message.vcardName != null && message.hasOwnProperty("vcardName"))
            if (!$util.isString(message.vcardName))
                return "vcardName: string expected";
        if (message.vcardTitle != null && message.hasOwnProperty("vcardTitle"))
            if (!$util.isString(message.vcardTitle))
                return "vcardTitle: string expected";
        if (message.vcardOrganization != null && message.hasOwnProperty("vcardOrganization"))
            if (!$util.isString(message.vcardOrganization))
                return "vcardOrganization: string expected";
        if (message.vcardEmail != null && message.hasOwnProperty("vcardEmail"))
            if (!$util.isString(message.vcardEmail))
                return "vcardEmail: string expected";
        if (message.vcardHomeEmail != null && message.hasOwnProperty("vcardHomeEmail"))
            if (!$util.isString(message.vcardHomeEmail))
                return "vcardHomeEmail: string expected";
        if (message.vcardWorkEmail != null && message.hasOwnProperty("vcardWorkEmail"))
            if (!$util.isString(message.vcardWorkEmail))
                return "vcardWorkEmail: string expected";
        if (message.vcardCellularPhone != null && message.hasOwnProperty("vcardCellularPhone"))
            if (!$util.isString(message.vcardCellularPhone))
                return "vcardCellularPhone: string expected";
        if (message.vcardHomePhone != null && message.hasOwnProperty("vcardHomePhone"))
            if (!$util.isString(message.vcardHomePhone))
                return "vcardHomePhone: string expected";
        if (message.vcardWorkPhone != null && message.hasOwnProperty("vcardWorkPhone"))
            if (!$util.isString(message.vcardWorkPhone))
                return "vcardWorkPhone: string expected";
        if (message.vcardAddress != null && message.hasOwnProperty("vcardAddress"))
            if (!$util.isString(message.vcardAddress))
                return "vcardAddress: string expected";
        if (message.vcardHomeAddress != null && message.hasOwnProperty("vcardHomeAddress"))
            if (!$util.isString(message.vcardHomeAddress))
                return "vcardHomeAddress: string expected";
        if (message.vcardWorkAddress != null && message.hasOwnProperty("vcardWorkAddress"))
            if (!$util.isString(message.vcardWorkAddress))
                return "vcardWorkAddress: string expected";
        if (message.vcardUrl != null && message.hasOwnProperty("vcardUrl"))
            if (!$util.isString(message.vcardUrl))
                return "vcardUrl: string expected";
        return null;
    };

    /**
     * Creates a NFCTagState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NFCTagState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NFCTagState} NFCTagState
     */
    NFCTagState.fromObject = function fromObject(object) {
        if (object instanceof $root.NFCTagState)
            return object;
        let message = new $root.NFCTagState();
        switch (object.recordType) {
        default:
            if (typeof object.recordType === "number") {
                message.recordType = object.recordType;
                break;
            }
            break;
        case "NFC_RECORD_UNSPECIFIED":
        case 0:
            message.recordType = 0;
            break;
        case "NFC_RECORD_TEXT":
        case 1:
            message.recordType = 1;
            break;
        case "NFC_RECORD_URI":
        case 2:
            message.recordType = 2;
            break;
        case "NFC_RECORD_UNABRIDGED_URI":
        case 3:
            message.recordType = 3;
            break;
        case "NFC_RECORD_SMS":
        case 4:
            message.recordType = 4;
            break;
        case "NFC_RECORD_EMAIL":
        case 5:
            message.recordType = 5;
            break;
        case "NFC_RECORD_GEO_LOCATION":
        case 6:
            message.recordType = 6;
            break;
        case "NFC_RECORD_VCARD":
        case 7:
            message.recordType = 7;
            break;
        }
        if (object.information != null)
            message.information = String(object.information);
        if (object.text != null)
            message.text = String(object.text);
        if (object.language != null)
            message.language = String(object.language);
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.protocol != null)
            message.protocol = String(object.protocol);
        if (object.phoneNumber != null)
            message.phoneNumber = String(object.phoneNumber);
        if (object.smsMessage != null)
            message.smsMessage = String(object.smsMessage);
        if (object.emailAddress != null)
            message.emailAddress = String(object.emailAddress);
        if (object.subject != null)
            message.subject = String(object.subject);
        if (object.emailMessage != null)
            message.emailMessage = String(object.emailMessage);
        if (object.latitude != null)
            message.latitude = Number(object.latitude);
        if (object.longitude != null)
            message.longitude = Number(object.longitude);
        if (object.vcardFirstName != null)
            message.vcardFirstName = String(object.vcardFirstName);
        if (object.vcardName != null)
            message.vcardName = String(object.vcardName);
        if (object.vcardTitle != null)
            message.vcardTitle = String(object.vcardTitle);
        if (object.vcardOrganization != null)
            message.vcardOrganization = String(object.vcardOrganization);
        if (object.vcardEmail != null)
            message.vcardEmail = String(object.vcardEmail);
        if (object.vcardHomeEmail != null)
            message.vcardHomeEmail = String(object.vcardHomeEmail);
        if (object.vcardWorkEmail != null)
            message.vcardWorkEmail = String(object.vcardWorkEmail);
        if (object.vcardCellularPhone != null)
            message.vcardCellularPhone = String(object.vcardCellularPhone);
        if (object.vcardHomePhone != null)
            message.vcardHomePhone = String(object.vcardHomePhone);
        if (object.vcardWorkPhone != null)
            message.vcardWorkPhone = String(object.vcardWorkPhone);
        if (object.vcardAddress != null)
            message.vcardAddress = String(object.vcardAddress);
        if (object.vcardHomeAddress != null)
            message.vcardHomeAddress = String(object.vcardHomeAddress);
        if (object.vcardWorkAddress != null)
            message.vcardWorkAddress = String(object.vcardWorkAddress);
        if (object.vcardUrl != null)
            message.vcardUrl = String(object.vcardUrl);
        return message;
    };

    /**
     * Creates a plain object from a NFCTagState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NFCTagState
     * @static
     * @param {NFCTagState} message NFCTagState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NFCTagState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.recordType = options.enums === String ? "NFC_RECORD_UNSPECIFIED" : 0;
            object.information = "";
            object.text = "";
            object.language = "";
            object.uri = "";
            object.protocol = "";
            object.phoneNumber = "";
            object.smsMessage = "";
            object.emailAddress = "";
            object.subject = "";
            object.emailMessage = "";
            object.latitude = 0;
            object.longitude = 0;
            object.vcardFirstName = "";
            object.vcardName = "";
            object.vcardTitle = "";
            object.vcardOrganization = "";
            object.vcardEmail = "";
            object.vcardHomeEmail = "";
            object.vcardWorkEmail = "";
            object.vcardCellularPhone = "";
            object.vcardHomePhone = "";
            object.vcardWorkPhone = "";
            object.vcardAddress = "";
            object.vcardHomeAddress = "";
            object.vcardWorkAddress = "";
            object.vcardUrl = "";
        }
        if (message.recordType != null && message.hasOwnProperty("recordType"))
            object.recordType = options.enums === String ? $root.NFCRecordType[message.recordType] === undefined ? message.recordType : $root.NFCRecordType[message.recordType] : message.recordType;
        if (message.information != null && message.hasOwnProperty("information"))
            object.information = message.information;
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        if (message.language != null && message.hasOwnProperty("language"))
            object.language = message.language;
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.protocol != null && message.hasOwnProperty("protocol"))
            object.protocol = message.protocol;
        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
            object.phoneNumber = message.phoneNumber;
        if (message.smsMessage != null && message.hasOwnProperty("smsMessage"))
            object.smsMessage = message.smsMessage;
        if (message.emailAddress != null && message.hasOwnProperty("emailAddress"))
            object.emailAddress = message.emailAddress;
        if (message.subject != null && message.hasOwnProperty("subject"))
            object.subject = message.subject;
        if (message.emailMessage != null && message.hasOwnProperty("emailMessage"))
            object.emailMessage = message.emailMessage;
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
        if (message.vcardFirstName != null && message.hasOwnProperty("vcardFirstName"))
            object.vcardFirstName = message.vcardFirstName;
        if (message.vcardName != null && message.hasOwnProperty("vcardName"))
            object.vcardName = message.vcardName;
        if (message.vcardTitle != null && message.hasOwnProperty("vcardTitle"))
            object.vcardTitle = message.vcardTitle;
        if (message.vcardOrganization != null && message.hasOwnProperty("vcardOrganization"))
            object.vcardOrganization = message.vcardOrganization;
        if (message.vcardEmail != null && message.hasOwnProperty("vcardEmail"))
            object.vcardEmail = message.vcardEmail;
        if (message.vcardHomeEmail != null && message.hasOwnProperty("vcardHomeEmail"))
            object.vcardHomeEmail = message.vcardHomeEmail;
        if (message.vcardWorkEmail != null && message.hasOwnProperty("vcardWorkEmail"))
            object.vcardWorkEmail = message.vcardWorkEmail;
        if (message.vcardCellularPhone != null && message.hasOwnProperty("vcardCellularPhone"))
            object.vcardCellularPhone = message.vcardCellularPhone;
        if (message.vcardHomePhone != null && message.hasOwnProperty("vcardHomePhone"))
            object.vcardHomePhone = message.vcardHomePhone;
        if (message.vcardWorkPhone != null && message.hasOwnProperty("vcardWorkPhone"))
            object.vcardWorkPhone = message.vcardWorkPhone;
        if (message.vcardAddress != null && message.hasOwnProperty("vcardAddress"))
            object.vcardAddress = message.vcardAddress;
        if (message.vcardHomeAddress != null && message.hasOwnProperty("vcardHomeAddress"))
            object.vcardHomeAddress = message.vcardHomeAddress;
        if (message.vcardWorkAddress != null && message.hasOwnProperty("vcardWorkAddress"))
            object.vcardWorkAddress = message.vcardWorkAddress;
        if (message.vcardUrl != null && message.hasOwnProperty("vcardUrl"))
            object.vcardUrl = message.vcardUrl;
        return object;
    };

    /**
     * Converts this NFCTagState to JSON.
     * @function toJSON
     * @memberof NFCTagState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NFCTagState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NFCTagState
     * @function getTypeUrl
     * @memberof NFCTagState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NFCTagState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NFCTagState";
    };

    return NFCTagState;
})();

export const NFCWriteText = $root.NFCWriteText = (() => {

    

    /**
     * Constructs a new NFCWriteText.
     * @exports NFCWriteText
     * @classdesc Represents a NFCWriteText.
     * @implements INFCWriteText
     * @constructor
     * @param {INFCWriteText=} [properties] Properties to set
     */
    function NFCWriteText(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NFCWriteText text.
     * @member {string} text
     * @memberof NFCWriteText
     * @instance
     */
    NFCWriteText.prototype.text = "";

    /**
     * NFCWriteText language.
     * @member {string} language
     * @memberof NFCWriteText
     * @instance
     */
    NFCWriteText.prototype.language = "";

    /**
     * Creates a new NFCWriteText instance using the specified properties.
     * @function create
     * @memberof NFCWriteText
     * @static
     * @param {INFCWriteText=} [properties] Properties to set
     * @returns {NFCWriteText} NFCWriteText instance
     */
    NFCWriteText.create = function create(properties) {
        return new NFCWriteText(properties);
    };

    /**
     * Encodes the specified NFCWriteText message. Does not implicitly {@link NFCWriteText.verify|verify} messages.
     * @function encode
     * @memberof NFCWriteText
     * @static
     * @param {INFCWriteText} message NFCWriteText message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteText.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.text != null && Object.hasOwnProperty.call(message, "text"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
        if (message.language != null && Object.hasOwnProperty.call(message, "language"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.language);
        return writer;
    };

    /**
     * Encodes the specified NFCWriteText message, length delimited. Does not implicitly {@link NFCWriteText.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NFCWriteText
     * @static
     * @param {INFCWriteText} message NFCWriteText message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteText.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NFCWriteText message from the specified reader or buffer.
     * @function decode
     * @memberof NFCWriteText
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NFCWriteText} NFCWriteText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteText.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFCWriteText();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.text = reader.string();
                    break;
                }
            case 2: {
                    message.language = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NFCWriteText message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NFCWriteText
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NFCWriteText} NFCWriteText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteText.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NFCWriteText message.
     * @function verify
     * @memberof NFCWriteText
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NFCWriteText.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.text != null && message.hasOwnProperty("text"))
            if (!$util.isString(message.text))
                return "text: string expected";
        if (message.language != null && message.hasOwnProperty("language"))
            if (!$util.isString(message.language))
                return "language: string expected";
        return null;
    };

    /**
     * Creates a NFCWriteText message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NFCWriteText
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NFCWriteText} NFCWriteText
     */
    NFCWriteText.fromObject = function fromObject(object) {
        if (object instanceof $root.NFCWriteText)
            return object;
        let message = new $root.NFCWriteText();
        if (object.text != null)
            message.text = String(object.text);
        if (object.language != null)
            message.language = String(object.language);
        return message;
    };

    /**
     * Creates a plain object from a NFCWriteText message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NFCWriteText
     * @static
     * @param {NFCWriteText} message NFCWriteText
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NFCWriteText.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.text = "";
            object.language = "";
        }
        if (message.text != null && message.hasOwnProperty("text"))
            object.text = message.text;
        if (message.language != null && message.hasOwnProperty("language"))
            object.language = message.language;
        return object;
    };

    /**
     * Converts this NFCWriteText to JSON.
     * @function toJSON
     * @memberof NFCWriteText
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NFCWriteText.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NFCWriteText
     * @function getTypeUrl
     * @memberof NFCWriteText
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NFCWriteText.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NFCWriteText";
    };

    return NFCWriteText;
})();

export const NFCWriteUri = $root.NFCWriteUri = (() => {

    

    /**
     * Constructs a new NFCWriteUri.
     * @exports NFCWriteUri
     * @classdesc Represents a NFCWriteUri.
     * @implements INFCWriteUri
     * @constructor
     * @param {INFCWriteUri=} [properties] Properties to set
     */
    function NFCWriteUri(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NFCWriteUri protocol.
     * @member {string} protocol
     * @memberof NFCWriteUri
     * @instance
     */
    NFCWriteUri.prototype.protocol = "";

    /**
     * NFCWriteUri uri.
     * @member {string} uri
     * @memberof NFCWriteUri
     * @instance
     */
    NFCWriteUri.prototype.uri = "";

    /**
     * NFCWriteUri information.
     * @member {string} information
     * @memberof NFCWriteUri
     * @instance
     */
    NFCWriteUri.prototype.information = "";

    /**
     * Creates a new NFCWriteUri instance using the specified properties.
     * @function create
     * @memberof NFCWriteUri
     * @static
     * @param {INFCWriteUri=} [properties] Properties to set
     * @returns {NFCWriteUri} NFCWriteUri instance
     */
    NFCWriteUri.create = function create(properties) {
        return new NFCWriteUri(properties);
    };

    /**
     * Encodes the specified NFCWriteUri message. Does not implicitly {@link NFCWriteUri.verify|verify} messages.
     * @function encode
     * @memberof NFCWriteUri
     * @static
     * @param {INFCWriteUri} message NFCWriteUri message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteUri.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.protocol);
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.uri);
        if (message.information != null && Object.hasOwnProperty.call(message, "information"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.information);
        return writer;
    };

    /**
     * Encodes the specified NFCWriteUri message, length delimited. Does not implicitly {@link NFCWriteUri.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NFCWriteUri
     * @static
     * @param {INFCWriteUri} message NFCWriteUri message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteUri.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NFCWriteUri message from the specified reader or buffer.
     * @function decode
     * @memberof NFCWriteUri
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NFCWriteUri} NFCWriteUri
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteUri.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFCWriteUri();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.protocol = reader.string();
                    break;
                }
            case 2: {
                    message.uri = reader.string();
                    break;
                }
            case 3: {
                    message.information = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NFCWriteUri message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NFCWriteUri
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NFCWriteUri} NFCWriteUri
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteUri.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NFCWriteUri message.
     * @function verify
     * @memberof NFCWriteUri
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NFCWriteUri.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.protocol != null && message.hasOwnProperty("protocol"))
            if (!$util.isString(message.protocol))
                return "protocol: string expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.information != null && message.hasOwnProperty("information"))
            if (!$util.isString(message.information))
                return "information: string expected";
        return null;
    };

    /**
     * Creates a NFCWriteUri message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NFCWriteUri
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NFCWriteUri} NFCWriteUri
     */
    NFCWriteUri.fromObject = function fromObject(object) {
        if (object instanceof $root.NFCWriteUri)
            return object;
        let message = new $root.NFCWriteUri();
        if (object.protocol != null)
            message.protocol = String(object.protocol);
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.information != null)
            message.information = String(object.information);
        return message;
    };

    /**
     * Creates a plain object from a NFCWriteUri message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NFCWriteUri
     * @static
     * @param {NFCWriteUri} message NFCWriteUri
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NFCWriteUri.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.protocol = "";
            object.uri = "";
            object.information = "";
        }
        if (message.protocol != null && message.hasOwnProperty("protocol"))
            object.protocol = message.protocol;
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.information != null && message.hasOwnProperty("information"))
            object.information = message.information;
        return object;
    };

    /**
     * Converts this NFCWriteUri to JSON.
     * @function toJSON
     * @memberof NFCWriteUri
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NFCWriteUri.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NFCWriteUri
     * @function getTypeUrl
     * @memberof NFCWriteUri
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NFCWriteUri.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NFCWriteUri";
    };

    return NFCWriteUri;
})();

export const NFCWriteUnabridgedUri = $root.NFCWriteUnabridgedUri = (() => {

    

    /**
     * Constructs a new NFCWriteUnabridgedUri.
     * @exports NFCWriteUnabridgedUri
     * @classdesc Represents a NFCWriteUnabridgedUri.
     * @implements INFCWriteUnabridgedUri
     * @constructor
     * @param {INFCWriteUnabridgedUri=} [properties] Properties to set
     */
    function NFCWriteUnabridgedUri(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NFCWriteUnabridgedUri uri.
     * @member {string} uri
     * @memberof NFCWriteUnabridgedUri
     * @instance
     */
    NFCWriteUnabridgedUri.prototype.uri = "";

    /**
     * NFCWriteUnabridgedUri information.
     * @member {string} information
     * @memberof NFCWriteUnabridgedUri
     * @instance
     */
    NFCWriteUnabridgedUri.prototype.information = "";

    /**
     * Creates a new NFCWriteUnabridgedUri instance using the specified properties.
     * @function create
     * @memberof NFCWriteUnabridgedUri
     * @static
     * @param {INFCWriteUnabridgedUri=} [properties] Properties to set
     * @returns {NFCWriteUnabridgedUri} NFCWriteUnabridgedUri instance
     */
    NFCWriteUnabridgedUri.create = function create(properties) {
        return new NFCWriteUnabridgedUri(properties);
    };

    /**
     * Encodes the specified NFCWriteUnabridgedUri message. Does not implicitly {@link NFCWriteUnabridgedUri.verify|verify} messages.
     * @function encode
     * @memberof NFCWriteUnabridgedUri
     * @static
     * @param {INFCWriteUnabridgedUri} message NFCWriteUnabridgedUri message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteUnabridgedUri.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.information != null && Object.hasOwnProperty.call(message, "information"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.information);
        return writer;
    };

    /**
     * Encodes the specified NFCWriteUnabridgedUri message, length delimited. Does not implicitly {@link NFCWriteUnabridgedUri.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NFCWriteUnabridgedUri
     * @static
     * @param {INFCWriteUnabridgedUri} message NFCWriteUnabridgedUri message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteUnabridgedUri.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NFCWriteUnabridgedUri message from the specified reader or buffer.
     * @function decode
     * @memberof NFCWriteUnabridgedUri
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NFCWriteUnabridgedUri} NFCWriteUnabridgedUri
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteUnabridgedUri.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFCWriteUnabridgedUri();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.information = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NFCWriteUnabridgedUri message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NFCWriteUnabridgedUri
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NFCWriteUnabridgedUri} NFCWriteUnabridgedUri
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteUnabridgedUri.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NFCWriteUnabridgedUri message.
     * @function verify
     * @memberof NFCWriteUnabridgedUri
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NFCWriteUnabridgedUri.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.information != null && message.hasOwnProperty("information"))
            if (!$util.isString(message.information))
                return "information: string expected";
        return null;
    };

    /**
     * Creates a NFCWriteUnabridgedUri message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NFCWriteUnabridgedUri
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NFCWriteUnabridgedUri} NFCWriteUnabridgedUri
     */
    NFCWriteUnabridgedUri.fromObject = function fromObject(object) {
        if (object instanceof $root.NFCWriteUnabridgedUri)
            return object;
        let message = new $root.NFCWriteUnabridgedUri();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.information != null)
            message.information = String(object.information);
        return message;
    };

    /**
     * Creates a plain object from a NFCWriteUnabridgedUri message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NFCWriteUnabridgedUri
     * @static
     * @param {NFCWriteUnabridgedUri} message NFCWriteUnabridgedUri
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NFCWriteUnabridgedUri.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.information = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.information != null && message.hasOwnProperty("information"))
            object.information = message.information;
        return object;
    };

    /**
     * Converts this NFCWriteUnabridgedUri to JSON.
     * @function toJSON
     * @memberof NFCWriteUnabridgedUri
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NFCWriteUnabridgedUri.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NFCWriteUnabridgedUri
     * @function getTypeUrl
     * @memberof NFCWriteUnabridgedUri
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NFCWriteUnabridgedUri.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NFCWriteUnabridgedUri";
    };

    return NFCWriteUnabridgedUri;
})();

export const NFCWriteSms = $root.NFCWriteSms = (() => {

    

    /**
     * Constructs a new NFCWriteSms.
     * @exports NFCWriteSms
     * @classdesc Represents a NFCWriteSms.
     * @implements INFCWriteSms
     * @constructor
     * @param {INFCWriteSms=} [properties] Properties to set
     */
    function NFCWriteSms(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NFCWriteSms phoneNumber.
     * @member {string} phoneNumber
     * @memberof NFCWriteSms
     * @instance
     */
    NFCWriteSms.prototype.phoneNumber = "";

    /**
     * NFCWriteSms message.
     * @member {string} message
     * @memberof NFCWriteSms
     * @instance
     */
    NFCWriteSms.prototype.message = "";

    /**
     * NFCWriteSms information.
     * @member {string} information
     * @memberof NFCWriteSms
     * @instance
     */
    NFCWriteSms.prototype.information = "";

    /**
     * Creates a new NFCWriteSms instance using the specified properties.
     * @function create
     * @memberof NFCWriteSms
     * @static
     * @param {INFCWriteSms=} [properties] Properties to set
     * @returns {NFCWriteSms} NFCWriteSms instance
     */
    NFCWriteSms.create = function create(properties) {
        return new NFCWriteSms(properties);
    };

    /**
     * Encodes the specified NFCWriteSms message. Does not implicitly {@link NFCWriteSms.verify|verify} messages.
     * @function encode
     * @memberof NFCWriteSms
     * @static
     * @param {INFCWriteSms} message NFCWriteSms message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteSms.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.phoneNumber);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
        if (message.information != null && Object.hasOwnProperty.call(message, "information"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.information);
        return writer;
    };

    /**
     * Encodes the specified NFCWriteSms message, length delimited. Does not implicitly {@link NFCWriteSms.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NFCWriteSms
     * @static
     * @param {INFCWriteSms} message NFCWriteSms message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteSms.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NFCWriteSms message from the specified reader or buffer.
     * @function decode
     * @memberof NFCWriteSms
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NFCWriteSms} NFCWriteSms
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteSms.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFCWriteSms();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.phoneNumber = reader.string();
                    break;
                }
            case 2: {
                    message.message = reader.string();
                    break;
                }
            case 3: {
                    message.information = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NFCWriteSms message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NFCWriteSms
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NFCWriteSms} NFCWriteSms
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteSms.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NFCWriteSms message.
     * @function verify
     * @memberof NFCWriteSms
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NFCWriteSms.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
            if (!$util.isString(message.phoneNumber))
                return "phoneNumber: string expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.information != null && message.hasOwnProperty("information"))
            if (!$util.isString(message.information))
                return "information: string expected";
        return null;
    };

    /**
     * Creates a NFCWriteSms message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NFCWriteSms
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NFCWriteSms} NFCWriteSms
     */
    NFCWriteSms.fromObject = function fromObject(object) {
        if (object instanceof $root.NFCWriteSms)
            return object;
        let message = new $root.NFCWriteSms();
        if (object.phoneNumber != null)
            message.phoneNumber = String(object.phoneNumber);
        if (object.message != null)
            message.message = String(object.message);
        if (object.information != null)
            message.information = String(object.information);
        return message;
    };

    /**
     * Creates a plain object from a NFCWriteSms message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NFCWriteSms
     * @static
     * @param {NFCWriteSms} message NFCWriteSms
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NFCWriteSms.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.phoneNumber = "";
            object.message = "";
            object.information = "";
        }
        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
            object.phoneNumber = message.phoneNumber;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.information != null && message.hasOwnProperty("information"))
            object.information = message.information;
        return object;
    };

    /**
     * Converts this NFCWriteSms to JSON.
     * @function toJSON
     * @memberof NFCWriteSms
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NFCWriteSms.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NFCWriteSms
     * @function getTypeUrl
     * @memberof NFCWriteSms
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NFCWriteSms.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NFCWriteSms";
    };

    return NFCWriteSms;
})();

export const NFCWriteEmail = $root.NFCWriteEmail = (() => {

    

    /**
     * Constructs a new NFCWriteEmail.
     * @exports NFCWriteEmail
     * @classdesc Represents a NFCWriteEmail.
     * @implements INFCWriteEmail
     * @constructor
     * @param {INFCWriteEmail=} [properties] Properties to set
     */
    function NFCWriteEmail(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NFCWriteEmail email.
     * @member {string} email
     * @memberof NFCWriteEmail
     * @instance
     */
    NFCWriteEmail.prototype.email = "";

    /**
     * NFCWriteEmail subject.
     * @member {string} subject
     * @memberof NFCWriteEmail
     * @instance
     */
    NFCWriteEmail.prototype.subject = "";

    /**
     * NFCWriteEmail message.
     * @member {string} message
     * @memberof NFCWriteEmail
     * @instance
     */
    NFCWriteEmail.prototype.message = "";

    /**
     * NFCWriteEmail information.
     * @member {string} information
     * @memberof NFCWriteEmail
     * @instance
     */
    NFCWriteEmail.prototype.information = "";

    /**
     * Creates a new NFCWriteEmail instance using the specified properties.
     * @function create
     * @memberof NFCWriteEmail
     * @static
     * @param {INFCWriteEmail=} [properties] Properties to set
     * @returns {NFCWriteEmail} NFCWriteEmail instance
     */
    NFCWriteEmail.create = function create(properties) {
        return new NFCWriteEmail(properties);
    };

    /**
     * Encodes the specified NFCWriteEmail message. Does not implicitly {@link NFCWriteEmail.verify|verify} messages.
     * @function encode
     * @memberof NFCWriteEmail
     * @static
     * @param {INFCWriteEmail} message NFCWriteEmail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteEmail.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.email);
        if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.subject);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.message);
        if (message.information != null && Object.hasOwnProperty.call(message, "information"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.information);
        return writer;
    };

    /**
     * Encodes the specified NFCWriteEmail message, length delimited. Does not implicitly {@link NFCWriteEmail.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NFCWriteEmail
     * @static
     * @param {INFCWriteEmail} message NFCWriteEmail message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteEmail.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NFCWriteEmail message from the specified reader or buffer.
     * @function decode
     * @memberof NFCWriteEmail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NFCWriteEmail} NFCWriteEmail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteEmail.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFCWriteEmail();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.email = reader.string();
                    break;
                }
            case 2: {
                    message.subject = reader.string();
                    break;
                }
            case 3: {
                    message.message = reader.string();
                    break;
                }
            case 4: {
                    message.information = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NFCWriteEmail message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NFCWriteEmail
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NFCWriteEmail} NFCWriteEmail
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteEmail.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NFCWriteEmail message.
     * @function verify
     * @memberof NFCWriteEmail
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NFCWriteEmail.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        if (message.subject != null && message.hasOwnProperty("subject"))
            if (!$util.isString(message.subject))
                return "subject: string expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.information != null && message.hasOwnProperty("information"))
            if (!$util.isString(message.information))
                return "information: string expected";
        return null;
    };

    /**
     * Creates a NFCWriteEmail message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NFCWriteEmail
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NFCWriteEmail} NFCWriteEmail
     */
    NFCWriteEmail.fromObject = function fromObject(object) {
        if (object instanceof $root.NFCWriteEmail)
            return object;
        let message = new $root.NFCWriteEmail();
        if (object.email != null)
            message.email = String(object.email);
        if (object.subject != null)
            message.subject = String(object.subject);
        if (object.message != null)
            message.message = String(object.message);
        if (object.information != null)
            message.information = String(object.information);
        return message;
    };

    /**
     * Creates a plain object from a NFCWriteEmail message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NFCWriteEmail
     * @static
     * @param {NFCWriteEmail} message NFCWriteEmail
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NFCWriteEmail.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.email = "";
            object.subject = "";
            object.message = "";
            object.information = "";
        }
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.subject != null && message.hasOwnProperty("subject"))
            object.subject = message.subject;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.information != null && message.hasOwnProperty("information"))
            object.information = message.information;
        return object;
    };

    /**
     * Converts this NFCWriteEmail to JSON.
     * @function toJSON
     * @memberof NFCWriteEmail
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NFCWriteEmail.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NFCWriteEmail
     * @function getTypeUrl
     * @memberof NFCWriteEmail
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NFCWriteEmail.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NFCWriteEmail";
    };

    return NFCWriteEmail;
})();

export const NFCWriteGeoLocation = $root.NFCWriteGeoLocation = (() => {

    

    /**
     * Constructs a new NFCWriteGeoLocation.
     * @exports NFCWriteGeoLocation
     * @classdesc Represents a NFCWriteGeoLocation.
     * @implements INFCWriteGeoLocation
     * @constructor
     * @param {INFCWriteGeoLocation=} [properties] Properties to set
     */
    function NFCWriteGeoLocation(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NFCWriteGeoLocation latitude.
     * @member {number} latitude
     * @memberof NFCWriteGeoLocation
     * @instance
     */
    NFCWriteGeoLocation.prototype.latitude = 0;

    /**
     * NFCWriteGeoLocation longitude.
     * @member {number} longitude
     * @memberof NFCWriteGeoLocation
     * @instance
     */
    NFCWriteGeoLocation.prototype.longitude = 0;

    /**
     * NFCWriteGeoLocation information.
     * @member {string} information
     * @memberof NFCWriteGeoLocation
     * @instance
     */
    NFCWriteGeoLocation.prototype.information = "";

    /**
     * Creates a new NFCWriteGeoLocation instance using the specified properties.
     * @function create
     * @memberof NFCWriteGeoLocation
     * @static
     * @param {INFCWriteGeoLocation=} [properties] Properties to set
     * @returns {NFCWriteGeoLocation} NFCWriteGeoLocation instance
     */
    NFCWriteGeoLocation.create = function create(properties) {
        return new NFCWriteGeoLocation(properties);
    };

    /**
     * Encodes the specified NFCWriteGeoLocation message. Does not implicitly {@link NFCWriteGeoLocation.verify|verify} messages.
     * @function encode
     * @memberof NFCWriteGeoLocation
     * @static
     * @param {INFCWriteGeoLocation} message NFCWriteGeoLocation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteGeoLocation.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.latitude);
        if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.longitude);
        if (message.information != null && Object.hasOwnProperty.call(message, "information"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.information);
        return writer;
    };

    /**
     * Encodes the specified NFCWriteGeoLocation message, length delimited. Does not implicitly {@link NFCWriteGeoLocation.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NFCWriteGeoLocation
     * @static
     * @param {INFCWriteGeoLocation} message NFCWriteGeoLocation message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteGeoLocation.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NFCWriteGeoLocation message from the specified reader or buffer.
     * @function decode
     * @memberof NFCWriteGeoLocation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NFCWriteGeoLocation} NFCWriteGeoLocation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteGeoLocation.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFCWriteGeoLocation();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.latitude = reader.float();
                    break;
                }
            case 2: {
                    message.longitude = reader.float();
                    break;
                }
            case 3: {
                    message.information = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NFCWriteGeoLocation message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NFCWriteGeoLocation
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NFCWriteGeoLocation} NFCWriteGeoLocation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteGeoLocation.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NFCWriteGeoLocation message.
     * @function verify
     * @memberof NFCWriteGeoLocation
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NFCWriteGeoLocation.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            if (typeof message.latitude !== "number")
                return "latitude: number expected";
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            if (typeof message.longitude !== "number")
                return "longitude: number expected";
        if (message.information != null && message.hasOwnProperty("information"))
            if (!$util.isString(message.information))
                return "information: string expected";
        return null;
    };

    /**
     * Creates a NFCWriteGeoLocation message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NFCWriteGeoLocation
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NFCWriteGeoLocation} NFCWriteGeoLocation
     */
    NFCWriteGeoLocation.fromObject = function fromObject(object) {
        if (object instanceof $root.NFCWriteGeoLocation)
            return object;
        let message = new $root.NFCWriteGeoLocation();
        if (object.latitude != null)
            message.latitude = Number(object.latitude);
        if (object.longitude != null)
            message.longitude = Number(object.longitude);
        if (object.information != null)
            message.information = String(object.information);
        return message;
    };

    /**
     * Creates a plain object from a NFCWriteGeoLocation message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NFCWriteGeoLocation
     * @static
     * @param {NFCWriteGeoLocation} message NFCWriteGeoLocation
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NFCWriteGeoLocation.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.latitude = 0;
            object.longitude = 0;
            object.information = "";
        }
        if (message.latitude != null && message.hasOwnProperty("latitude"))
            object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
        if (message.longitude != null && message.hasOwnProperty("longitude"))
            object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
        if (message.information != null && message.hasOwnProperty("information"))
            object.information = message.information;
        return object;
    };

    /**
     * Converts this NFCWriteGeoLocation to JSON.
     * @function toJSON
     * @memberof NFCWriteGeoLocation
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NFCWriteGeoLocation.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NFCWriteGeoLocation
     * @function getTypeUrl
     * @memberof NFCWriteGeoLocation
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NFCWriteGeoLocation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NFCWriteGeoLocation";
    };

    return NFCWriteGeoLocation;
})();

export const NFCWriteVCard = $root.NFCWriteVCard = (() => {

    

    /**
     * Constructs a new NFCWriteVCard.
     * @exports NFCWriteVCard
     * @classdesc Represents a NFCWriteVCard.
     * @implements INFCWriteVCard
     * @constructor
     * @param {INFCWriteVCard=} [properties] Properties to set
     */
    function NFCWriteVCard(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NFCWriteVCard firstName.
     * @member {string} firstName
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.firstName = "";

    /**
     * NFCWriteVCard name.
     * @member {string} name
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.name = "";

    /**
     * NFCWriteVCard title.
     * @member {string} title
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.title = "";

    /**
     * NFCWriteVCard organization.
     * @member {string} organization
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.organization = "";

    /**
     * NFCWriteVCard email.
     * @member {string} email
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.email = "";

    /**
     * NFCWriteVCard homeEmail.
     * @member {string} homeEmail
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.homeEmail = "";

    /**
     * NFCWriteVCard workEmail.
     * @member {string} workEmail
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.workEmail = "";

    /**
     * NFCWriteVCard cellularPhone.
     * @member {string} cellularPhone
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.cellularPhone = "";

    /**
     * NFCWriteVCard homePhone.
     * @member {string} homePhone
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.homePhone = "";

    /**
     * NFCWriteVCard workPhone.
     * @member {string} workPhone
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.workPhone = "";

    /**
     * NFCWriteVCard address.
     * @member {string} address
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.address = "";

    /**
     * NFCWriteVCard homeAddress.
     * @member {string} homeAddress
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.homeAddress = "";

    /**
     * NFCWriteVCard workAddress.
     * @member {string} workAddress
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.workAddress = "";

    /**
     * NFCWriteVCard url.
     * @member {string} url
     * @memberof NFCWriteVCard
     * @instance
     */
    NFCWriteVCard.prototype.url = "";

    /**
     * Creates a new NFCWriteVCard instance using the specified properties.
     * @function create
     * @memberof NFCWriteVCard
     * @static
     * @param {INFCWriteVCard=} [properties] Properties to set
     * @returns {NFCWriteVCard} NFCWriteVCard instance
     */
    NFCWriteVCard.create = function create(properties) {
        return new NFCWriteVCard(properties);
    };

    /**
     * Encodes the specified NFCWriteVCard message. Does not implicitly {@link NFCWriteVCard.verify|verify} messages.
     * @function encode
     * @memberof NFCWriteVCard
     * @static
     * @param {INFCWriteVCard} message NFCWriteVCard message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteVCard.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.firstName != null && Object.hasOwnProperty.call(message, "firstName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.firstName);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
        if (message.title != null && Object.hasOwnProperty.call(message, "title"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
        if (message.organization != null && Object.hasOwnProperty.call(message, "organization"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.organization);
        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.email);
        if (message.homeEmail != null && Object.hasOwnProperty.call(message, "homeEmail"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.homeEmail);
        if (message.workEmail != null && Object.hasOwnProperty.call(message, "workEmail"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.workEmail);
        if (message.cellularPhone != null && Object.hasOwnProperty.call(message, "cellularPhone"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.cellularPhone);
        if (message.homePhone != null && Object.hasOwnProperty.call(message, "homePhone"))
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.homePhone);
        if (message.workPhone != null && Object.hasOwnProperty.call(message, "workPhone"))
            writer.uint32(/* id 10, wireType 2 =*/82).string(message.workPhone);
        if (message.address != null && Object.hasOwnProperty.call(message, "address"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.address);
        if (message.homeAddress != null && Object.hasOwnProperty.call(message, "homeAddress"))
            writer.uint32(/* id 12, wireType 2 =*/98).string(message.homeAddress);
        if (message.workAddress != null && Object.hasOwnProperty.call(message, "workAddress"))
            writer.uint32(/* id 13, wireType 2 =*/106).string(message.workAddress);
        if (message.url != null && Object.hasOwnProperty.call(message, "url"))
            writer.uint32(/* id 14, wireType 2 =*/114).string(message.url);
        return writer;
    };

    /**
     * Encodes the specified NFCWriteVCard message, length delimited. Does not implicitly {@link NFCWriteVCard.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NFCWriteVCard
     * @static
     * @param {INFCWriteVCard} message NFCWriteVCard message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NFCWriteVCard.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NFCWriteVCard message from the specified reader or buffer.
     * @function decode
     * @memberof NFCWriteVCard
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NFCWriteVCard} NFCWriteVCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteVCard.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NFCWriteVCard();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.firstName = reader.string();
                    break;
                }
            case 2: {
                    message.name = reader.string();
                    break;
                }
            case 3: {
                    message.title = reader.string();
                    break;
                }
            case 4: {
                    message.organization = reader.string();
                    break;
                }
            case 5: {
                    message.email = reader.string();
                    break;
                }
            case 6: {
                    message.homeEmail = reader.string();
                    break;
                }
            case 7: {
                    message.workEmail = reader.string();
                    break;
                }
            case 8: {
                    message.cellularPhone = reader.string();
                    break;
                }
            case 9: {
                    message.homePhone = reader.string();
                    break;
                }
            case 10: {
                    message.workPhone = reader.string();
                    break;
                }
            case 11: {
                    message.address = reader.string();
                    break;
                }
            case 12: {
                    message.homeAddress = reader.string();
                    break;
                }
            case 13: {
                    message.workAddress = reader.string();
                    break;
                }
            case 14: {
                    message.url = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NFCWriteVCard message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NFCWriteVCard
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NFCWriteVCard} NFCWriteVCard
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NFCWriteVCard.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NFCWriteVCard message.
     * @function verify
     * @memberof NFCWriteVCard
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NFCWriteVCard.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.firstName != null && message.hasOwnProperty("firstName"))
            if (!$util.isString(message.firstName))
                return "firstName: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.title != null && message.hasOwnProperty("title"))
            if (!$util.isString(message.title))
                return "title: string expected";
        if (message.organization != null && message.hasOwnProperty("organization"))
            if (!$util.isString(message.organization))
                return "organization: string expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        if (message.homeEmail != null && message.hasOwnProperty("homeEmail"))
            if (!$util.isString(message.homeEmail))
                return "homeEmail: string expected";
        if (message.workEmail != null && message.hasOwnProperty("workEmail"))
            if (!$util.isString(message.workEmail))
                return "workEmail: string expected";
        if (message.cellularPhone != null && message.hasOwnProperty("cellularPhone"))
            if (!$util.isString(message.cellularPhone))
                return "cellularPhone: string expected";
        if (message.homePhone != null && message.hasOwnProperty("homePhone"))
            if (!$util.isString(message.homePhone))
                return "homePhone: string expected";
        if (message.workPhone != null && message.hasOwnProperty("workPhone"))
            if (!$util.isString(message.workPhone))
                return "workPhone: string expected";
        if (message.address != null && message.hasOwnProperty("address"))
            if (!$util.isString(message.address))
                return "address: string expected";
        if (message.homeAddress != null && message.hasOwnProperty("homeAddress"))
            if (!$util.isString(message.homeAddress))
                return "homeAddress: string expected";
        if (message.workAddress != null && message.hasOwnProperty("workAddress"))
            if (!$util.isString(message.workAddress))
                return "workAddress: string expected";
        if (message.url != null && message.hasOwnProperty("url"))
            if (!$util.isString(message.url))
                return "url: string expected";
        return null;
    };

    /**
     * Creates a NFCWriteVCard message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NFCWriteVCard
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NFCWriteVCard} NFCWriteVCard
     */
    NFCWriteVCard.fromObject = function fromObject(object) {
        if (object instanceof $root.NFCWriteVCard)
            return object;
        let message = new $root.NFCWriteVCard();
        if (object.firstName != null)
            message.firstName = String(object.firstName);
        if (object.name != null)
            message.name = String(object.name);
        if (object.title != null)
            message.title = String(object.title);
        if (object.organization != null)
            message.organization = String(object.organization);
        if (object.email != null)
            message.email = String(object.email);
        if (object.homeEmail != null)
            message.homeEmail = String(object.homeEmail);
        if (object.workEmail != null)
            message.workEmail = String(object.workEmail);
        if (object.cellularPhone != null)
            message.cellularPhone = String(object.cellularPhone);
        if (object.homePhone != null)
            message.homePhone = String(object.homePhone);
        if (object.workPhone != null)
            message.workPhone = String(object.workPhone);
        if (object.address != null)
            message.address = String(object.address);
        if (object.homeAddress != null)
            message.homeAddress = String(object.homeAddress);
        if (object.workAddress != null)
            message.workAddress = String(object.workAddress);
        if (object.url != null)
            message.url = String(object.url);
        return message;
    };

    /**
     * Creates a plain object from a NFCWriteVCard message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NFCWriteVCard
     * @static
     * @param {NFCWriteVCard} message NFCWriteVCard
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NFCWriteVCard.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.firstName = "";
            object.name = "";
            object.title = "";
            object.organization = "";
            object.email = "";
            object.homeEmail = "";
            object.workEmail = "";
            object.cellularPhone = "";
            object.homePhone = "";
            object.workPhone = "";
            object.address = "";
            object.homeAddress = "";
            object.workAddress = "";
            object.url = "";
        }
        if (message.firstName != null && message.hasOwnProperty("firstName"))
            object.firstName = message.firstName;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.title != null && message.hasOwnProperty("title"))
            object.title = message.title;
        if (message.organization != null && message.hasOwnProperty("organization"))
            object.organization = message.organization;
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        if (message.homeEmail != null && message.hasOwnProperty("homeEmail"))
            object.homeEmail = message.homeEmail;
        if (message.workEmail != null && message.hasOwnProperty("workEmail"))
            object.workEmail = message.workEmail;
        if (message.cellularPhone != null && message.hasOwnProperty("cellularPhone"))
            object.cellularPhone = message.cellularPhone;
        if (message.homePhone != null && message.hasOwnProperty("homePhone"))
            object.homePhone = message.homePhone;
        if (message.workPhone != null && message.hasOwnProperty("workPhone"))
            object.workPhone = message.workPhone;
        if (message.address != null && message.hasOwnProperty("address"))
            object.address = message.address;
        if (message.homeAddress != null && message.hasOwnProperty("homeAddress"))
            object.homeAddress = message.homeAddress;
        if (message.workAddress != null && message.hasOwnProperty("workAddress"))
            object.workAddress = message.workAddress;
        if (message.url != null && message.hasOwnProperty("url"))
            object.url = message.url;
        return object;
    };

    /**
     * Converts this NFCWriteVCard to JSON.
     * @function toJSON
     * @memberof NFCWriteVCard
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NFCWriteVCard.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NFCWriteVCard
     * @function getTypeUrl
     * @memberof NFCWriteVCard
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NFCWriteVCard.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NFCWriteVCard";
    };

    return NFCWriteVCard;
})();

/**
 * NFCRecordType enum.
 * @exports NFCRecordType
 * @enum {number}
 * @property {number} NFC_RECORD_UNSPECIFIED=0 NFC_RECORD_UNSPECIFIED value
 * @property {number} NFC_RECORD_TEXT=1 NFC_RECORD_TEXT value
 * @property {number} NFC_RECORD_URI=2 NFC_RECORD_URI value
 * @property {number} NFC_RECORD_UNABRIDGED_URI=3 NFC_RECORD_UNABRIDGED_URI value
 * @property {number} NFC_RECORD_SMS=4 NFC_RECORD_SMS value
 * @property {number} NFC_RECORD_EMAIL=5 NFC_RECORD_EMAIL value
 * @property {number} NFC_RECORD_GEO_LOCATION=6 NFC_RECORD_GEO_LOCATION value
 * @property {number} NFC_RECORD_VCARD=7 NFC_RECORD_VCARD value
 */
export const NFCRecordType = $root.NFCRecordType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NFC_RECORD_UNSPECIFIED"] = 0;
    values[valuesById[1] = "NFC_RECORD_TEXT"] = 1;
    values[valuesById[2] = "NFC_RECORD_URI"] = 2;
    values[valuesById[3] = "NFC_RECORD_UNABRIDGED_URI"] = 3;
    values[valuesById[4] = "NFC_RECORD_SMS"] = 4;
    values[valuesById[5] = "NFC_RECORD_EMAIL"] = 5;
    values[valuesById[6] = "NFC_RECORD_GEO_LOCATION"] = 6;
    values[valuesById[7] = "NFC_RECORD_VCARD"] = 7;
    return values;
})();

export const RFIDReaderState = $root.RFIDReaderState = (() => {

    

    /**
     * Constructs a new RFIDReaderState.
     * @exports RFIDReaderState
     * @classdesc Represents a RFIDReaderState.
     * @implements IRFIDReaderState
     * @constructor
     * @param {IRFIDReaderState=} [properties] Properties to set
     */
    function RFIDReaderState(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RFIDReaderState tagId.
     * @member {string} tagId
     * @memberof RFIDReaderState
     * @instance
     */
    RFIDReaderState.prototype.tagId = "";

    /**
     * Creates a new RFIDReaderState instance using the specified properties.
     * @function create
     * @memberof RFIDReaderState
     * @static
     * @param {IRFIDReaderState=} [properties] Properties to set
     * @returns {RFIDReaderState} RFIDReaderState instance
     */
    RFIDReaderState.create = function create(properties) {
        return new RFIDReaderState(properties);
    };

    /**
     * Encodes the specified RFIDReaderState message. Does not implicitly {@link RFIDReaderState.verify|verify} messages.
     * @function encode
     * @memberof RFIDReaderState
     * @static
     * @param {IRFIDReaderState} message RFIDReaderState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RFIDReaderState.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tagId != null && Object.hasOwnProperty.call(message, "tagId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tagId);
        return writer;
    };

    /**
     * Encodes the specified RFIDReaderState message, length delimited. Does not implicitly {@link RFIDReaderState.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RFIDReaderState
     * @static
     * @param {IRFIDReaderState} message RFIDReaderState message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RFIDReaderState.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RFIDReaderState message from the specified reader or buffer.
     * @function decode
     * @memberof RFIDReaderState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RFIDReaderState} RFIDReaderState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RFIDReaderState.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RFIDReaderState();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.tagId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RFIDReaderState message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RFIDReaderState
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RFIDReaderState} RFIDReaderState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RFIDReaderState.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RFIDReaderState message.
     * @function verify
     * @memberof RFIDReaderState
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RFIDReaderState.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.tagId != null && message.hasOwnProperty("tagId"))
            if (!$util.isString(message.tagId))
                return "tagId: string expected";
        return null;
    };

    /**
     * Creates a RFIDReaderState message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RFIDReaderState
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RFIDReaderState} RFIDReaderState
     */
    RFIDReaderState.fromObject = function fromObject(object) {
        if (object instanceof $root.RFIDReaderState)
            return object;
        let message = new $root.RFIDReaderState();
        if (object.tagId != null)
            message.tagId = String(object.tagId);
        return message;
    };

    /**
     * Creates a plain object from a RFIDReaderState message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RFIDReaderState
     * @static
     * @param {RFIDReaderState} message RFIDReaderState
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RFIDReaderState.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.tagId = "";
        if (message.tagId != null && message.hasOwnProperty("tagId"))
            object.tagId = message.tagId;
        return object;
    };

    /**
     * Converts this RFIDReaderState to JSON.
     * @function toJSON
     * @memberof RFIDReaderState
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RFIDReaderState.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RFIDReaderState
     * @function getTypeUrl
     * @memberof RFIDReaderState
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RFIDReaderState.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RFIDReaderState";
    };

    return RFIDReaderState;
})();

export const RFIDReaderData = $root.RFIDReaderData = (() => {

    

    /**
     * Constructs a new RFIDReaderData.
     * @exports RFIDReaderData
     * @classdesc Represents a RFIDReaderData.
     * @implements IRFIDReaderData
     * @constructor
     * @param {IRFIDReaderData=} [properties] Properties to set
     */
    function RFIDReaderData(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RFIDReaderData tagId.
     * @member {string} tagId
     * @memberof RFIDReaderData
     * @instance
     */
    RFIDReaderData.prototype.tagId = "";

    /**
     * Creates a new RFIDReaderData instance using the specified properties.
     * @function create
     * @memberof RFIDReaderData
     * @static
     * @param {IRFIDReaderData=} [properties] Properties to set
     * @returns {RFIDReaderData} RFIDReaderData instance
     */
    RFIDReaderData.create = function create(properties) {
        return new RFIDReaderData(properties);
    };

    /**
     * Encodes the specified RFIDReaderData message. Does not implicitly {@link RFIDReaderData.verify|verify} messages.
     * @function encode
     * @memberof RFIDReaderData
     * @static
     * @param {IRFIDReaderData} message RFIDReaderData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RFIDReaderData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.tagId != null && Object.hasOwnProperty.call(message, "tagId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.tagId);
        return writer;
    };

    /**
     * Encodes the specified RFIDReaderData message, length delimited. Does not implicitly {@link RFIDReaderData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RFIDReaderData
     * @static
     * @param {IRFIDReaderData} message RFIDReaderData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RFIDReaderData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RFIDReaderData message from the specified reader or buffer.
     * @function decode
     * @memberof RFIDReaderData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RFIDReaderData} RFIDReaderData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RFIDReaderData.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RFIDReaderData();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.tagId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RFIDReaderData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RFIDReaderData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RFIDReaderData} RFIDReaderData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RFIDReaderData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RFIDReaderData message.
     * @function verify
     * @memberof RFIDReaderData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RFIDReaderData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.tagId != null && message.hasOwnProperty("tagId"))
            if (!$util.isString(message.tagId))
                return "tagId: string expected";
        return null;
    };

    /**
     * Creates a RFIDReaderData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RFIDReaderData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RFIDReaderData} RFIDReaderData
     */
    RFIDReaderData.fromObject = function fromObject(object) {
        if (object instanceof $root.RFIDReaderData)
            return object;
        let message = new $root.RFIDReaderData();
        if (object.tagId != null)
            message.tagId = String(object.tagId);
        return message;
    };

    /**
     * Creates a plain object from a RFIDReaderData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RFIDReaderData
     * @static
     * @param {RFIDReaderData} message RFIDReaderData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RFIDReaderData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.tagId = "";
        if (message.tagId != null && message.hasOwnProperty("tagId"))
            object.tagId = message.tagId;
        return object;
    };

    /**
     * Converts this RFIDReaderData to JSON.
     * @function toJSON
     * @memberof RFIDReaderData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RFIDReaderData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RFIDReaderData
     * @function getTypeUrl
     * @memberof RFIDReaderData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RFIDReaderData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RFIDReaderData";
    };

    return RFIDReaderData;
})();

/**
 * DeviceType enum.
 * @exports DeviceType
 * @enum {number}
 * @property {number} DEVICE_TYPE_UNSPECIFIED=0 DEVICE_TYPE_UNSPECIFIED value
 * @property {number} DEVICE_TYPE_NEO_DRIVER=1 DEVICE_TYPE_NEO_DRIVER value
 * @property {number} DEVICE_TYPE_ROTARY_ENCODER=2 DEVICE_TYPE_ROTARY_ENCODER value
 * @property {number} DEVICE_TYPE_LINEAR_ENCODER=3 DEVICE_TYPE_LINEAR_ENCODER value
 * @property {number} DEVICE_TYPE_TOUCH_SENSOR=4 DEVICE_TYPE_TOUCH_SENSOR value
 * @property {number} DEVICE_TYPE_GYROSCOPE=5 DEVICE_TYPE_GYROSCOPE value
 * @property {number} DEVICE_TYPE_TRINKEY=6 DEVICE_TYPE_TRINKEY value
 * @property {number} DEVICE_TYPE_PRESSURE_SENSOR=7 DEVICE_TYPE_PRESSURE_SENSOR value
 * @property {number} DEVICE_TYPE_CO2_SENSOR=8 DEVICE_TYPE_CO2_SENSOR value
 * @property {number} DEVICE_TYPE_DISTANCE_SENSOR=9 DEVICE_TYPE_DISTANCE_SENSOR value
 * @property {number} DEVICE_TYPE_UV_SENSOR=10 DEVICE_TYPE_UV_SENSOR value
 * @property {number} DEVICE_TYPE_NFC_TAG=11 DEVICE_TYPE_NFC_TAG value
 * @property {number} DEVICE_TYPE_RFID_READER=12 DEVICE_TYPE_RFID_READER value
 */
export const DeviceType = $root.DeviceType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "DEVICE_TYPE_UNSPECIFIED"] = 0;
    values[valuesById[1] = "DEVICE_TYPE_NEO_DRIVER"] = 1;
    values[valuesById[2] = "DEVICE_TYPE_ROTARY_ENCODER"] = 2;
    values[valuesById[3] = "DEVICE_TYPE_LINEAR_ENCODER"] = 3;
    values[valuesById[4] = "DEVICE_TYPE_TOUCH_SENSOR"] = 4;
    values[valuesById[5] = "DEVICE_TYPE_GYROSCOPE"] = 5;
    values[valuesById[6] = "DEVICE_TYPE_TRINKEY"] = 6;
    values[valuesById[7] = "DEVICE_TYPE_PRESSURE_SENSOR"] = 7;
    values[valuesById[8] = "DEVICE_TYPE_CO2_SENSOR"] = 8;
    values[valuesById[9] = "DEVICE_TYPE_DISTANCE_SENSOR"] = 9;
    values[valuesById[10] = "DEVICE_TYPE_UV_SENSOR"] = 10;
    values[valuesById[11] = "DEVICE_TYPE_NFC_TAG"] = 11;
    values[valuesById[12] = "DEVICE_TYPE_RFID_READER"] = 12;
    return values;
})();

export { $root as default };
