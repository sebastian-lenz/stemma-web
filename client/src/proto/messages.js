/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Command = $root.Command = (() => {

    /**
     * Properties of a Command.
     * @exports ICommand
     * @interface ICommand
     * @property {number|null} [id] Command id
     * @property {IDeviceCommand|null} [deviceCommand] Command deviceCommand
     */

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
     */

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

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * DeviceCommand payload.
     * @member {"start"|"stop"|"getState"|"setBrightness"|"setPixelColor"|"setPixelColors"|"setLength"|"setAccelRange"|"setRotRange"|"setAccelRate"|"setRotRate"|undefined} payload
     * @memberof DeviceCommand
     * @instance
     */
    Object.defineProperty(DeviceCommand.prototype, "payload", {
        get: $util.oneOfGetter($oneOfFields = ["start", "stop", "getState", "setBrightness", "setPixelColor", "setPixelColors", "setLength", "setAccelRange", "setRotRange", "setAccelRate", "setRotRate"]),
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
     * Properties of a StartDevice.
     * @exports IStartDevice
     * @interface IStartDevice
     * @property {GyroscopeChipset|null} [gyroscopeChipset] StartDevice gyroscopeChipset
     */

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
        if (options.defaults)
            object.gyroscopeChipset = options.enums === String ? "GYROSCOPE_CHIPSET_UNSPECIFIED" : 0;
        if (message.gyroscopeChipset != null && message.hasOwnProperty("gyroscopeChipset"))
            object.gyroscopeChipset = options.enums === String ? $root.GyroscopeChipset[message.gyroscopeChipset] === undefined ? message.gyroscopeChipset : $root.GyroscopeChipset[message.gyroscopeChipset] : message.gyroscopeChipset;
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
     * Properties of a StopDevice.
     * @exports IStopDevice
     * @interface IStopDevice
     */

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
     * Properties of a GetDeviceState.
     * @exports IGetDeviceState
     * @interface IGetDeviceState
     */

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
     * Properties of a SetBrightness.
     * @exports ISetBrightness
     * @interface ISetBrightness
     * @property {number|null} [brightness] SetBrightness brightness
     */

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
     * Properties of a SetPixelColor.
     * @exports ISetPixelColor
     * @interface ISetPixelColor
     * @property {number|null} [index] SetPixelColor index
     * @property {IColor|null} [color] SetPixelColor color
     */

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
     * @member {IColor|null|undefined} color
     * @memberof SetPixelColor
     * @instance
     */
    SetPixelColor.prototype.color = null;

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
            $root.Color.encode(message.color, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.color = $root.Color.decode(reader, reader.uint32());
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
        if (message.color != null && message.hasOwnProperty("color")) {
            let error = $root.Color.verify(message.color);
            if (error)
                return "color." + error;
        }
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
        if (object.color != null) {
            if (typeof object.color !== "object")
                throw TypeError(".SetPixelColor.color: object expected");
            message.color = $root.Color.fromObject(object.color);
        }
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
            object.color = null;
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.color != null && message.hasOwnProperty("color"))
            object.color = $root.Color.toObject(message.color, options);
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
     * Properties of a SetPixelColors.
     * @exports ISetPixelColors
     * @interface ISetPixelColors
     * @property {number|null} [offset] SetPixelColors offset
     * @property {Array.<IColor>|null} [colors] SetPixelColors colors
     */

    /**
     * Constructs a new SetPixelColors.
     * @exports SetPixelColors
     * @classdesc Represents a SetPixelColors.
     * @implements ISetPixelColors
     * @constructor
     * @param {ISetPixelColors=} [properties] Properties to set
     */
    function SetPixelColors(properties) {
        this.colors = [];
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
     * @member {Array.<IColor>} colors
     * @memberof SetPixelColors
     * @instance
     */
    SetPixelColors.prototype.colors = $util.emptyArray;

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
        if (message.colors != null && message.colors.length)
            for (let i = 0; i < message.colors.length; ++i)
                $root.Color.encode(message.colors[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    if (!(message.colors && message.colors.length))
                        message.colors = [];
                    message.colors.push($root.Color.decode(reader, reader.uint32()));
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
        if (message.colors != null && message.hasOwnProperty("colors")) {
            if (!Array.isArray(message.colors))
                return "colors: array expected";
            for (let i = 0; i < message.colors.length; ++i) {
                let error = $root.Color.verify(message.colors[i]);
                if (error)
                    return "colors." + error;
            }
        }
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
        if (object.colors) {
            if (!Array.isArray(object.colors))
                throw TypeError(".SetPixelColors.colors: array expected");
            message.colors = [];
            for (let i = 0; i < object.colors.length; ++i) {
                if (typeof object.colors[i] !== "object")
                    throw TypeError(".SetPixelColors.colors: object expected");
                message.colors[i] = $root.Color.fromObject(object.colors[i]);
            }
        }
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
        if (options.arrays || options.defaults)
            object.colors = [];
        if (options.defaults)
            object.offset = 0;
        if (message.offset != null && message.hasOwnProperty("offset"))
            object.offset = message.offset;
        if (message.colors && message.colors.length) {
            object.colors = [];
            for (let j = 0; j < message.colors.length; ++j)
                object.colors[j] = $root.Color.toObject(message.colors[j], options);
        }
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
     * Properties of a SetNeoDriverLength.
     * @exports ISetNeoDriverLength
     * @interface ISetNeoDriverLength
     * @property {number|null} [length] SetNeoDriverLength length
     */

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
     * Properties of a SetAccelerationRange.
     * @exports ISetAccelerationRange
     * @interface ISetAccelerationRange
     * @property {AccelerationRange|null} [range] SetAccelerationRange range
     */

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
        case "ACCELERATION_RANGE_4_G":
        case 0:
            message.range = 0;
            break;
        case "ACCELERATION_RANGE_8_G":
        case 1:
            message.range = 1;
            break;
        case "ACCELERATION_RANGE_16_G":
        case 2:
            message.range = 2;
            break;
        case "ACCELERATION_RANGE_32_G":
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
            object.range = options.enums === String ? "ACCELERATION_RANGE_4_G" : 0;
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
     * Properties of a SetRotationRange.
     * @exports ISetRotationRange
     * @interface ISetRotationRange
     * @property {RotationRange|null} [range] SetRotationRange range
     */

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
        case "ROTATION_RANGE_DPS_125":
        case 0:
            message.range = 0;
            break;
        case "ROTATION_RANGE_DPS_250":
        case 1:
            message.range = 1;
            break;
        case "ROTATION_RANGE_DPS_500":
        case 2:
            message.range = 2;
            break;
        case "ROTATION_RANGE_DPS_1000":
        case 3:
            message.range = 3;
            break;
        case "ROTATION_RANGE_DPS_2000":
        case 4:
            message.range = 4;
            break;
        case "ROTATION_RANGE_DPS_4000":
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
            object.range = options.enums === String ? "ROTATION_RANGE_DPS_125" : 0;
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
     * Properties of a SetAccelerationRate.
     * @exports ISetAccelerationRate
     * @interface ISetAccelerationRate
     * @property {DataRate|null} [rate] SetAccelerationRate rate
     */

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
        case "DATA_RATE_SHUTDOWN":
        case 0:
            message.rate = 0;
            break;
        case "DATA_RATE_HZ_12_5":
        case 1:
            message.rate = 1;
            break;
        case "DATA_RATE_HZ_26":
        case 2:
            message.rate = 2;
            break;
        case "DATA_RATE_HZ_52":
        case 3:
            message.rate = 3;
            break;
        case "DATA_RATE_HZ_104":
        case 4:
            message.rate = 4;
            break;
        case "DATA_RATE_HZ_208":
        case 5:
            message.rate = 5;
            break;
        case "DATA_RATE_HZ_416":
        case 6:
            message.rate = 6;
            break;
        case "DATA_RATE_HZ_833":
        case 7:
            message.rate = 7;
            break;
        case "DATA_RATE_HZ_1_66K":
        case 8:
            message.rate = 8;
            break;
        case "DATA_RATE_HZ_3_33K":
        case 9:
            message.rate = 9;
            break;
        case "DATA_RATE_HZ_6_66K":
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
            object.rate = options.enums === String ? "DATA_RATE_SHUTDOWN" : 0;
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
     * Properties of a SetRotationRate.
     * @exports ISetRotationRate
     * @interface ISetRotationRate
     * @property {DataRate|null} [rate] SetRotationRate rate
     */

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
        case "DATA_RATE_SHUTDOWN":
        case 0:
            message.rate = 0;
            break;
        case "DATA_RATE_HZ_12_5":
        case 1:
            message.rate = 1;
            break;
        case "DATA_RATE_HZ_26":
        case 2:
            message.rate = 2;
            break;
        case "DATA_RATE_HZ_52":
        case 3:
            message.rate = 3;
            break;
        case "DATA_RATE_HZ_104":
        case 4:
            message.rate = 4;
            break;
        case "DATA_RATE_HZ_208":
        case 5:
            message.rate = 5;
            break;
        case "DATA_RATE_HZ_416":
        case 6:
            message.rate = 6;
            break;
        case "DATA_RATE_HZ_833":
        case 7:
            message.rate = 7;
            break;
        case "DATA_RATE_HZ_1_66K":
        case 8:
            message.rate = 8;
            break;
        case "DATA_RATE_HZ_3_33K":
        case 9:
            message.rate = 9;
            break;
        case "DATA_RATE_HZ_6_66K":
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
            object.rate = options.enums === String ? "DATA_RATE_SHUTDOWN" : 0;
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

export const Response = $root.Response = (() => {

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
     * Properties of a DeviceState.
     * @exports IDeviceState
     * @interface IDeviceState
     * @property {DeviceType|null} [type] DeviceState type
     * @property {number|null} [address] DeviceState address
     * @property {boolean|null} [connected] DeviceState connected
     * @property {ITrinkeyState|null} [trinkey] DeviceState trinkey
     * @property {INeoDriverState|null} [neoDriver] DeviceState neoDriver
     * @property {IRotaryEncoderState|null} [rotaryEncoder] DeviceState rotaryEncoder
     * @property {ILinearEncoderState|null} [linearEncoder] DeviceState linearEncoder
     * @property {ITouchSensorState|null} [touchSensor] DeviceState touchSensor
     * @property {IGyroscopeState|null} [gyroscope] DeviceState gyroscope
     */

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
     * DeviceState trinkey.
     * @member {ITrinkeyState|null|undefined} trinkey
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.trinkey = null;

    /**
     * DeviceState neoDriver.
     * @member {INeoDriverState|null|undefined} neoDriver
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.neoDriver = null;

    /**
     * DeviceState rotaryEncoder.
     * @member {IRotaryEncoderState|null|undefined} rotaryEncoder
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.rotaryEncoder = null;

    /**
     * DeviceState linearEncoder.
     * @member {ILinearEncoderState|null|undefined} linearEncoder
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.linearEncoder = null;

    /**
     * DeviceState touchSensor.
     * @member {ITouchSensorState|null|undefined} touchSensor
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.touchSensor = null;

    /**
     * DeviceState gyroscope.
     * @member {IGyroscopeState|null|undefined} gyroscope
     * @memberof DeviceState
     * @instance
     */
    DeviceState.prototype.gyroscope = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * DeviceState state.
     * @member {"trinkey"|"neoDriver"|"rotaryEncoder"|"linearEncoder"|"touchSensor"|"gyroscope"|undefined} state
     * @memberof DeviceState
     * @instance
     */
    Object.defineProperty(DeviceState.prototype, "state", {
        get: $util.oneOfGetter($oneOfFields = ["trinkey", "neoDriver", "rotaryEncoder", "linearEncoder", "touchSensor", "gyroscope"]),
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
        if (message.trinkey != null && Object.hasOwnProperty.call(message, "trinkey"))
            $root.TrinkeyState.encode(message.trinkey, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.neoDriver != null && Object.hasOwnProperty.call(message, "neoDriver"))
            $root.NeoDriverState.encode(message.neoDriver, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.rotaryEncoder != null && Object.hasOwnProperty.call(message, "rotaryEncoder"))
            $root.RotaryEncoderState.encode(message.rotaryEncoder, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.linearEncoder != null && Object.hasOwnProperty.call(message, "linearEncoder"))
            $root.LinearEncoderState.encode(message.linearEncoder, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.touchSensor != null && Object.hasOwnProperty.call(message, "touchSensor"))
            $root.TouchSensorState.encode(message.touchSensor, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.gyroscope != null && Object.hasOwnProperty.call(message, "gyroscope"))
            $root.GyroscopeState.encode(message.gyroscope, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
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
                    message.trinkey = $root.TrinkeyState.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.neoDriver = $root.NeoDriverState.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.rotaryEncoder = $root.RotaryEncoderState.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.linearEncoder = $root.LinearEncoderState.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.touchSensor = $root.TouchSensorState.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.gyroscope = $root.GyroscopeState.decode(reader, reader.uint32());
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
                break;
            }
        if (message.address != null && message.hasOwnProperty("address"))
            if (!$util.isInteger(message.address))
                return "address: integer expected";
        if (message.connected != null && message.hasOwnProperty("connected"))
            if (typeof message.connected !== "boolean")
                return "connected: boolean expected";
        if (message.trinkey != null && message.hasOwnProperty("trinkey")) {
            properties.state = 1;
            {
                let error = $root.TrinkeyState.verify(message.trinkey);
                if (error)
                    return "trinkey." + error;
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
        }
        if (object.address != null)
            message.address = object.address >>> 0;
        if (object.connected != null)
            message.connected = Boolean(object.connected);
        if (object.trinkey != null) {
            if (typeof object.trinkey !== "object")
                throw TypeError(".DeviceState.trinkey: object expected");
            message.trinkey = $root.TrinkeyState.fromObject(object.trinkey);
        }
        if (object.neoDriver != null) {
            if (typeof object.neoDriver !== "object")
                throw TypeError(".DeviceState.neoDriver: object expected");
            message.neoDriver = $root.NeoDriverState.fromObject(object.neoDriver);
        }
        if (object.rotaryEncoder != null) {
            if (typeof object.rotaryEncoder !== "object")
                throw TypeError(".DeviceState.rotaryEncoder: object expected");
            message.rotaryEncoder = $root.RotaryEncoderState.fromObject(object.rotaryEncoder);
        }
        if (object.linearEncoder != null) {
            if (typeof object.linearEncoder !== "object")
                throw TypeError(".DeviceState.linearEncoder: object expected");
            message.linearEncoder = $root.LinearEncoderState.fromObject(object.linearEncoder);
        }
        if (object.touchSensor != null) {
            if (typeof object.touchSensor !== "object")
                throw TypeError(".DeviceState.touchSensor: object expected");
            message.touchSensor = $root.TouchSensorState.fromObject(object.touchSensor);
        }
        if (object.gyroscope != null) {
            if (typeof object.gyroscope !== "object")
                throw TypeError(".DeviceState.gyroscope: object expected");
            message.gyroscope = $root.GyroscopeState.fromObject(object.gyroscope);
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
        if (message.trinkey != null && message.hasOwnProperty("trinkey")) {
            object.trinkey = $root.TrinkeyState.toObject(message.trinkey, options);
            if (options.oneofs)
                object.state = "trinkey";
        }
        if (message.neoDriver != null && message.hasOwnProperty("neoDriver")) {
            object.neoDriver = $root.NeoDriverState.toObject(message.neoDriver, options);
            if (options.oneofs)
                object.state = "neoDriver";
        }
        if (message.rotaryEncoder != null && message.hasOwnProperty("rotaryEncoder")) {
            object.rotaryEncoder = $root.RotaryEncoderState.toObject(message.rotaryEncoder, options);
            if (options.oneofs)
                object.state = "rotaryEncoder";
        }
        if (message.linearEncoder != null && message.hasOwnProperty("linearEncoder")) {
            object.linearEncoder = $root.LinearEncoderState.toObject(message.linearEncoder, options);
            if (options.oneofs)
                object.state = "linearEncoder";
        }
        if (message.touchSensor != null && message.hasOwnProperty("touchSensor")) {
            object.touchSensor = $root.TouchSensorState.toObject(message.touchSensor, options);
            if (options.oneofs)
                object.state = "touchSensor";
        }
        if (message.gyroscope != null && message.hasOwnProperty("gyroscope")) {
            object.gyroscope = $root.GyroscopeState.toObject(message.gyroscope, options);
            if (options.oneofs)
                object.state = "gyroscope";
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
     */

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

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * DeviceEvent event.
     * @member {"rotaryChanged"|"rotaryButton"|"linearChanged"|"touchButton"|"gyroscopeData"|undefined} event
     * @memberof DeviceEvent
     * @instance
     */
    Object.defineProperty(DeviceEvent.prototype, "event", {
        get: $util.oneOfGetter($oneOfFields = ["rotaryChanged", "rotaryButton", "linearChanged", "touchButton", "gyroscopeData"]),
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

export const Color = $root.Color = (() => {

    /**
     * Properties of a Color.
     * @exports IColor
     * @interface IColor
     * @property {number|null} [r] Color r
     * @property {number|null} [g] Color g
     * @property {number|null} [b] Color b
     */

    /**
     * Constructs a new Color.
     * @exports Color
     * @classdesc Represents a Color.
     * @implements IColor
     * @constructor
     * @param {IColor=} [properties] Properties to set
     */
    function Color(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Color r.
     * @member {number} r
     * @memberof Color
     * @instance
     */
    Color.prototype.r = 0;

    /**
     * Color g.
     * @member {number} g
     * @memberof Color
     * @instance
     */
    Color.prototype.g = 0;

    /**
     * Color b.
     * @member {number} b
     * @memberof Color
     * @instance
     */
    Color.prototype.b = 0;

    /**
     * Creates a new Color instance using the specified properties.
     * @function create
     * @memberof Color
     * @static
     * @param {IColor=} [properties] Properties to set
     * @returns {Color} Color instance
     */
    Color.create = function create(properties) {
        return new Color(properties);
    };

    /**
     * Encodes the specified Color message. Does not implicitly {@link Color.verify|verify} messages.
     * @function encode
     * @memberof Color
     * @static
     * @param {IColor} message Color message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Color.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.r != null && Object.hasOwnProperty.call(message, "r"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.r);
        if (message.g != null && Object.hasOwnProperty.call(message, "g"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.g);
        if (message.b != null && Object.hasOwnProperty.call(message, "b"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.b);
        return writer;
    };

    /**
     * Encodes the specified Color message, length delimited. Does not implicitly {@link Color.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Color
     * @static
     * @param {IColor} message Color message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Color.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Color message from the specified reader or buffer.
     * @function decode
     * @memberof Color
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Color} Color
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Color.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Color();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.r = reader.uint32();
                    break;
                }
            case 2: {
                    message.g = reader.uint32();
                    break;
                }
            case 3: {
                    message.b = reader.uint32();
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
     * Decodes a Color message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Color
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Color} Color
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Color.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Color message.
     * @function verify
     * @memberof Color
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Color.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.r != null && message.hasOwnProperty("r"))
            if (!$util.isInteger(message.r))
                return "r: integer expected";
        if (message.g != null && message.hasOwnProperty("g"))
            if (!$util.isInteger(message.g))
                return "g: integer expected";
        if (message.b != null && message.hasOwnProperty("b"))
            if (!$util.isInteger(message.b))
                return "b: integer expected";
        return null;
    };

    /**
     * Creates a Color message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Color
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Color} Color
     */
    Color.fromObject = function fromObject(object) {
        if (object instanceof $root.Color)
            return object;
        let message = new $root.Color();
        if (object.r != null)
            message.r = object.r >>> 0;
        if (object.g != null)
            message.g = object.g >>> 0;
        if (object.b != null)
            message.b = object.b >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a Color message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Color
     * @static
     * @param {Color} message Color
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Color.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.r = 0;
            object.g = 0;
            object.b = 0;
        }
        if (message.r != null && message.hasOwnProperty("r"))
            object.r = message.r;
        if (message.g != null && message.hasOwnProperty("g"))
            object.g = message.g;
        if (message.b != null && message.hasOwnProperty("b"))
            object.b = message.b;
        return object;
    };

    /**
     * Converts this Color to JSON.
     * @function toJSON
     * @memberof Color
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Color.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Color
     * @function getTypeUrl
     * @memberof Color
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Color.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Color";
    };

    return Color;
})();

export const Vector3 = $root.Vector3 = (() => {

    /**
     * Properties of a Vector3.
     * @exports IVector3
     * @interface IVector3
     * @property {number|null} [x] Vector3 x
     * @property {number|null} [y] Vector3 y
     * @property {number|null} [z] Vector3 z
     */

    /**
     * Constructs a new Vector3.
     * @exports Vector3
     * @classdesc Represents a Vector3.
     * @implements IVector3
     * @constructor
     * @param {IVector3=} [properties] Properties to set
     */
    function Vector3(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Vector3 x.
     * @member {number} x
     * @memberof Vector3
     * @instance
     */
    Vector3.prototype.x = 0;

    /**
     * Vector3 y.
     * @member {number} y
     * @memberof Vector3
     * @instance
     */
    Vector3.prototype.y = 0;

    /**
     * Vector3 z.
     * @member {number} z
     * @memberof Vector3
     * @instance
     */
    Vector3.prototype.z = 0;

    /**
     * Creates a new Vector3 instance using the specified properties.
     * @function create
     * @memberof Vector3
     * @static
     * @param {IVector3=} [properties] Properties to set
     * @returns {Vector3} Vector3 instance
     */
    Vector3.create = function create(properties) {
        return new Vector3(properties);
    };

    /**
     * Encodes the specified Vector3 message. Does not implicitly {@link Vector3.verify|verify} messages.
     * @function encode
     * @memberof Vector3
     * @static
     * @param {IVector3} message Vector3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Vector3.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 5 =*/13).float(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 5 =*/21).float(message.y);
        if (message.z != null && Object.hasOwnProperty.call(message, "z"))
            writer.uint32(/* id 3, wireType 5 =*/29).float(message.z);
        return writer;
    };

    /**
     * Encodes the specified Vector3 message, length delimited. Does not implicitly {@link Vector3.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Vector3
     * @static
     * @param {IVector3} message Vector3 message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Vector3.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Vector3 message from the specified reader or buffer.
     * @function decode
     * @memberof Vector3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Vector3} Vector3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Vector3.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Vector3();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.x = reader.float();
                    break;
                }
            case 2: {
                    message.y = reader.float();
                    break;
                }
            case 3: {
                    message.z = reader.float();
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
     * Decodes a Vector3 message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Vector3
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Vector3} Vector3
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Vector3.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Vector3 message.
     * @function verify
     * @memberof Vector3
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Vector3.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        if (message.z != null && message.hasOwnProperty("z"))
            if (typeof message.z !== "number")
                return "z: number expected";
        return null;
    };

    /**
     * Creates a Vector3 message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Vector3
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Vector3} Vector3
     */
    Vector3.fromObject = function fromObject(object) {
        if (object instanceof $root.Vector3)
            return object;
        let message = new $root.Vector3();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        if (object.z != null)
            message.z = Number(object.z);
        return message;
    };

    /**
     * Creates a plain object from a Vector3 message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Vector3
     * @static
     * @param {Vector3} message Vector3
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Vector3.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
            object.z = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        if (message.z != null && message.hasOwnProperty("z"))
            object.z = options.json && !isFinite(message.z) ? String(message.z) : message.z;
        return object;
    };

    /**
     * Converts this Vector3 to JSON.
     * @function toJSON
     * @memberof Vector3
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Vector3.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Vector3
     * @function getTypeUrl
     * @memberof Vector3
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Vector3.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Vector3";
    };

    return Vector3;
})();

export const TrinkeyState = $root.TrinkeyState = (() => {

    /**
     * Properties of a TrinkeyState.
     * @exports ITrinkeyState
     * @interface ITrinkeyState
     * @property {number|null} [brightness] TrinkeyState brightness
     * @property {IColor|null} [pixel] TrinkeyState pixel
     */

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
     * @member {IColor|null|undefined} pixel
     * @memberof TrinkeyState
     * @instance
     */
    TrinkeyState.prototype.pixel = null;

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
            $root.Color.encode(message.pixel, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.pixel = $root.Color.decode(reader, reader.uint32());
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
        if (message.pixel != null && message.hasOwnProperty("pixel")) {
            let error = $root.Color.verify(message.pixel);
            if (error)
                return "pixel." + error;
        }
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
        if (object.pixel != null) {
            if (typeof object.pixel !== "object")
                throw TypeError(".TrinkeyState.pixel: object expected");
            message.pixel = $root.Color.fromObject(object.pixel);
        }
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
            object.pixel = null;
        }
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            object.brightness = message.brightness;
        if (message.pixel != null && message.hasOwnProperty("pixel"))
            object.pixel = $root.Color.toObject(message.pixel, options);
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
     * Properties of a NeoDriverState.
     * @exports INeoDriverState
     * @interface INeoDriverState
     * @property {number|null} [brightness] NeoDriverState brightness
     * @property {number|null} [length] NeoDriverState length
     */

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
     * Properties of a RotaryEncoderState.
     * @exports IRotaryEncoderState
     * @interface IRotaryEncoderState
     * @property {number|null} [brightness] RotaryEncoderState brightness
     * @property {IColor|null} [pixel] RotaryEncoderState pixel
     * @property {boolean|null} [isPressed] RotaryEncoderState isPressed
     * @property {number|null} [value] RotaryEncoderState value
     */

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
     * @member {IColor|null|undefined} pixel
     * @memberof RotaryEncoderState
     * @instance
     */
    RotaryEncoderState.prototype.pixel = null;

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
            $root.Color.encode(message.pixel, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    message.pixel = $root.Color.decode(reader, reader.uint32());
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
        if (message.pixel != null && message.hasOwnProperty("pixel")) {
            let error = $root.Color.verify(message.pixel);
            if (error)
                return "pixel." + error;
        }
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
        if (object.pixel != null) {
            if (typeof object.pixel !== "object")
                throw TypeError(".RotaryEncoderState.pixel: object expected");
            message.pixel = $root.Color.fromObject(object.pixel);
        }
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
            object.pixel = null;
            object.isPressed = false;
            object.value = 0;
        }
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            object.brightness = message.brightness;
        if (message.pixel != null && message.hasOwnProperty("pixel"))
            object.pixel = $root.Color.toObject(message.pixel, options);
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
     * Properties of a RotaryEncoderChanged.
     * @exports IRotaryEncoderChanged
     * @interface IRotaryEncoderChanged
     * @property {number|null} [value] RotaryEncoderChanged value
     * @property {boolean|null} [isPressed] RotaryEncoderChanged isPressed
     */

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
     * Properties of a RotaryEncoderButton.
     * @exports IRotaryEncoderButton
     * @interface IRotaryEncoderButton
     * @property {boolean|null} [isPressed] RotaryEncoderButton isPressed
     */

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
     * Properties of a LinearEncoderState.
     * @exports ILinearEncoderState
     * @interface ILinearEncoderState
     * @property {number|null} [brightness] LinearEncoderState brightness
     * @property {Array.<IColor>|null} [pixels] LinearEncoderState pixels
     * @property {number|null} [value] LinearEncoderState value
     */

    /**
     * Constructs a new LinearEncoderState.
     * @exports LinearEncoderState
     * @classdesc Represents a LinearEncoderState.
     * @implements ILinearEncoderState
     * @constructor
     * @param {ILinearEncoderState=} [properties] Properties to set
     */
    function LinearEncoderState(properties) {
        this.pixels = [];
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
     * @member {Array.<IColor>} pixels
     * @memberof LinearEncoderState
     * @instance
     */
    LinearEncoderState.prototype.pixels = $util.emptyArray;

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
        if (message.pixels != null && message.pixels.length)
            for (let i = 0; i < message.pixels.length; ++i)
                $root.Color.encode(message.pixels[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                    if (!(message.pixels && message.pixels.length))
                        message.pixels = [];
                    message.pixels.push($root.Color.decode(reader, reader.uint32()));
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
        if (message.pixels != null && message.hasOwnProperty("pixels")) {
            if (!Array.isArray(message.pixels))
                return "pixels: array expected";
            for (let i = 0; i < message.pixels.length; ++i) {
                let error = $root.Color.verify(message.pixels[i]);
                if (error)
                    return "pixels." + error;
            }
        }
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
        if (object.pixels) {
            if (!Array.isArray(object.pixels))
                throw TypeError(".LinearEncoderState.pixels: array expected");
            message.pixels = [];
            for (let i = 0; i < object.pixels.length; ++i) {
                if (typeof object.pixels[i] !== "object")
                    throw TypeError(".LinearEncoderState.pixels: object expected");
                message.pixels[i] = $root.Color.fromObject(object.pixels[i]);
            }
        }
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
        if (options.arrays || options.defaults)
            object.pixels = [];
        if (options.defaults) {
            object.brightness = 0;
            object.value = 0;
        }
        if (message.brightness != null && message.hasOwnProperty("brightness"))
            object.brightness = message.brightness;
        if (message.pixels && message.pixels.length) {
            object.pixels = [];
            for (let j = 0; j < message.pixels.length; ++j)
                object.pixels[j] = $root.Color.toObject(message.pixels[j], options);
        }
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
     * Properties of a LinearEncoderChanged.
     * @exports ILinearEncoderChanged
     * @interface ILinearEncoderChanged
     * @property {number|null} [value] LinearEncoderChanged value
     */

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
     * Properties of a TouchSensorState.
     * @exports ITouchSensorState
     * @interface ITouchSensorState
     * @property {number|null} [touchedMask] TouchSensorState touchedMask
     */

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
     * Properties of a TouchSensorButton.
     * @exports ITouchSensorButton
     * @interface ITouchSensorButton
     * @property {number|null} [touchedMask] TouchSensorButton touchedMask
     */

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
        case "DATA_RATE_SHUTDOWN":
        case 0:
            message.accelerationDataRate = 0;
            break;
        case "DATA_RATE_HZ_12_5":
        case 1:
            message.accelerationDataRate = 1;
            break;
        case "DATA_RATE_HZ_26":
        case 2:
            message.accelerationDataRate = 2;
            break;
        case "DATA_RATE_HZ_52":
        case 3:
            message.accelerationDataRate = 3;
            break;
        case "DATA_RATE_HZ_104":
        case 4:
            message.accelerationDataRate = 4;
            break;
        case "DATA_RATE_HZ_208":
        case 5:
            message.accelerationDataRate = 5;
            break;
        case "DATA_RATE_HZ_416":
        case 6:
            message.accelerationDataRate = 6;
            break;
        case "DATA_RATE_HZ_833":
        case 7:
            message.accelerationDataRate = 7;
            break;
        case "DATA_RATE_HZ_1_66K":
        case 8:
            message.accelerationDataRate = 8;
            break;
        case "DATA_RATE_HZ_3_33K":
        case 9:
            message.accelerationDataRate = 9;
            break;
        case "DATA_RATE_HZ_6_66K":
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
        case "DATA_RATE_SHUTDOWN":
        case 0:
            message.rotationDataRate = 0;
            break;
        case "DATA_RATE_HZ_12_5":
        case 1:
            message.rotationDataRate = 1;
            break;
        case "DATA_RATE_HZ_26":
        case 2:
            message.rotationDataRate = 2;
            break;
        case "DATA_RATE_HZ_52":
        case 3:
            message.rotationDataRate = 3;
            break;
        case "DATA_RATE_HZ_104":
        case 4:
            message.rotationDataRate = 4;
            break;
        case "DATA_RATE_HZ_208":
        case 5:
            message.rotationDataRate = 5;
            break;
        case "DATA_RATE_HZ_416":
        case 6:
            message.rotationDataRate = 6;
            break;
        case "DATA_RATE_HZ_833":
        case 7:
            message.rotationDataRate = 7;
            break;
        case "DATA_RATE_HZ_1_66K":
        case 8:
            message.rotationDataRate = 8;
            break;
        case "DATA_RATE_HZ_3_33K":
        case 9:
            message.rotationDataRate = 9;
            break;
        case "DATA_RATE_HZ_6_66K":
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
        case "ACCELERATION_RANGE_4_G":
        case 0:
            message.accelerationRange = 0;
            break;
        case "ACCELERATION_RANGE_8_G":
        case 1:
            message.accelerationRange = 1;
            break;
        case "ACCELERATION_RANGE_16_G":
        case 2:
            message.accelerationRange = 2;
            break;
        case "ACCELERATION_RANGE_32_G":
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
        case "ROTATION_RANGE_DPS_125":
        case 0:
            message.rotationRange = 0;
            break;
        case "ROTATION_RANGE_DPS_250":
        case 1:
            message.rotationRange = 1;
            break;
        case "ROTATION_RANGE_DPS_500":
        case 2:
            message.rotationRange = 2;
            break;
        case "ROTATION_RANGE_DPS_1000":
        case 3:
            message.rotationRange = 3;
            break;
        case "ROTATION_RANGE_DPS_2000":
        case 4:
            message.rotationRange = 4;
            break;
        case "ROTATION_RANGE_DPS_4000":
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
            object.accelerationDataRate = options.enums === String ? "DATA_RATE_SHUTDOWN" : 0;
            object.rotationDataRate = options.enums === String ? "DATA_RATE_SHUTDOWN" : 0;
            object.accelerationRange = options.enums === String ? "ACCELERATION_RANGE_4_G" : 0;
            object.rotationRange = options.enums === String ? "ROTATION_RANGE_DPS_125" : 0;
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
 * @property {number} DATA_RATE_SHUTDOWN=0 DATA_RATE_SHUTDOWN value
 * @property {number} DATA_RATE_HZ_12_5=1 DATA_RATE_HZ_12_5 value
 * @property {number} DATA_RATE_HZ_26=2 DATA_RATE_HZ_26 value
 * @property {number} DATA_RATE_HZ_52=3 DATA_RATE_HZ_52 value
 * @property {number} DATA_RATE_HZ_104=4 DATA_RATE_HZ_104 value
 * @property {number} DATA_RATE_HZ_208=5 DATA_RATE_HZ_208 value
 * @property {number} DATA_RATE_HZ_416=6 DATA_RATE_HZ_416 value
 * @property {number} DATA_RATE_HZ_833=7 DATA_RATE_HZ_833 value
 * @property {number} DATA_RATE_HZ_1_66K=8 DATA_RATE_HZ_1_66K value
 * @property {number} DATA_RATE_HZ_3_33K=9 DATA_RATE_HZ_3_33K value
 * @property {number} DATA_RATE_HZ_6_66K=10 DATA_RATE_HZ_6_66K value
 */
export const DataRate = $root.DataRate = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "DATA_RATE_SHUTDOWN"] = 0;
    values[valuesById[1] = "DATA_RATE_HZ_12_5"] = 1;
    values[valuesById[2] = "DATA_RATE_HZ_26"] = 2;
    values[valuesById[3] = "DATA_RATE_HZ_52"] = 3;
    values[valuesById[4] = "DATA_RATE_HZ_104"] = 4;
    values[valuesById[5] = "DATA_RATE_HZ_208"] = 5;
    values[valuesById[6] = "DATA_RATE_HZ_416"] = 6;
    values[valuesById[7] = "DATA_RATE_HZ_833"] = 7;
    values[valuesById[8] = "DATA_RATE_HZ_1_66K"] = 8;
    values[valuesById[9] = "DATA_RATE_HZ_3_33K"] = 9;
    values[valuesById[10] = "DATA_RATE_HZ_6_66K"] = 10;
    return values;
})();

/**
 * AccelerationRange enum.
 * @exports AccelerationRange
 * @enum {number}
 * @property {number} ACCELERATION_RANGE_4_G=0 ACCELERATION_RANGE_4_G value
 * @property {number} ACCELERATION_RANGE_8_G=1 ACCELERATION_RANGE_8_G value
 * @property {number} ACCELERATION_RANGE_16_G=2 ACCELERATION_RANGE_16_G value
 * @property {number} ACCELERATION_RANGE_32_G=3 ACCELERATION_RANGE_32_G value
 */
export const AccelerationRange = $root.AccelerationRange = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ACCELERATION_RANGE_4_G"] = 0;
    values[valuesById[1] = "ACCELERATION_RANGE_8_G"] = 1;
    values[valuesById[2] = "ACCELERATION_RANGE_16_G"] = 2;
    values[valuesById[3] = "ACCELERATION_RANGE_32_G"] = 3;
    return values;
})();

/**
 * RotationRange enum.
 * @exports RotationRange
 * @enum {number}
 * @property {number} ROTATION_RANGE_DPS_125=0 ROTATION_RANGE_DPS_125 value
 * @property {number} ROTATION_RANGE_DPS_250=1 ROTATION_RANGE_DPS_250 value
 * @property {number} ROTATION_RANGE_DPS_500=2 ROTATION_RANGE_DPS_500 value
 * @property {number} ROTATION_RANGE_DPS_1000=3 ROTATION_RANGE_DPS_1000 value
 * @property {number} ROTATION_RANGE_DPS_2000=4 ROTATION_RANGE_DPS_2000 value
 * @property {number} ROTATION_RANGE_DPS_4000=5 ROTATION_RANGE_DPS_4000 value
 */
export const RotationRange = $root.RotationRange = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "ROTATION_RANGE_DPS_125"] = 0;
    values[valuesById[1] = "ROTATION_RANGE_DPS_250"] = 1;
    values[valuesById[2] = "ROTATION_RANGE_DPS_500"] = 2;
    values[valuesById[3] = "ROTATION_RANGE_DPS_1000"] = 3;
    values[valuesById[4] = "ROTATION_RANGE_DPS_2000"] = 4;
    values[valuesById[5] = "ROTATION_RANGE_DPS_4000"] = 5;
    return values;
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
    return values;
})();

export { $root as default };
