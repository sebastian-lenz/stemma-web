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
     * @property {ISetPixel|null} [setPixel] Command setPixel
     * @property {ISetAll|null} [setAll] Command setAll
     * @property {IGetStatus|null} [getStatus] Command getStatus
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
     * Command setPixel.
     * @member {ISetPixel|null|undefined} setPixel
     * @memberof Command
     * @instance
     */
    Command.prototype.setPixel = null;

    /**
     * Command setAll.
     * @member {ISetAll|null|undefined} setAll
     * @memberof Command
     * @instance
     */
    Command.prototype.setAll = null;

    /**
     * Command getStatus.
     * @member {IGetStatus|null|undefined} getStatus
     * @memberof Command
     * @instance
     */
    Command.prototype.getStatus = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Command payload.
     * @member {"setPixel"|"setAll"|"getStatus"|undefined} payload
     * @memberof Command
     * @instance
     */
    Object.defineProperty(Command.prototype, "payload", {
        get: $util.oneOfGetter($oneOfFields = ["setPixel", "setAll", "getStatus"]),
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
        if (message.setPixel != null && Object.hasOwnProperty.call(message, "setPixel"))
            $root.SetPixel.encode(message.setPixel, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.setAll != null && Object.hasOwnProperty.call(message, "setAll"))
            $root.SetAll.encode(message.setAll, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.getStatus != null && Object.hasOwnProperty.call(message, "getStatus"))
            $root.GetStatus.encode(message.getStatus, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
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
            case 2: {
                    message.setPixel = $root.SetPixel.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.setAll = $root.SetAll.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.getStatus = $root.GetStatus.decode(reader, reader.uint32());
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
        if (message.setPixel != null && message.hasOwnProperty("setPixel")) {
            properties.payload = 1;
            {
                let error = $root.SetPixel.verify(message.setPixel);
                if (error)
                    return "setPixel." + error;
            }
        }
        if (message.setAll != null && message.hasOwnProperty("setAll")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.SetAll.verify(message.setAll);
                if (error)
                    return "setAll." + error;
            }
        }
        if (message.getStatus != null && message.hasOwnProperty("getStatus")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                let error = $root.GetStatus.verify(message.getStatus);
                if (error)
                    return "getStatus." + error;
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
        if (object.setPixel != null) {
            if (typeof object.setPixel !== "object")
                throw TypeError(".Command.setPixel: object expected");
            message.setPixel = $root.SetPixel.fromObject(object.setPixel);
        }
        if (object.setAll != null) {
            if (typeof object.setAll !== "object")
                throw TypeError(".Command.setAll: object expected");
            message.setAll = $root.SetAll.fromObject(object.setAll);
        }
        if (object.getStatus != null) {
            if (typeof object.getStatus !== "object")
                throw TypeError(".Command.getStatus: object expected");
            message.getStatus = $root.GetStatus.fromObject(object.getStatus);
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
        if (message.setPixel != null && message.hasOwnProperty("setPixel")) {
            object.setPixel = $root.SetPixel.toObject(message.setPixel, options);
            if (options.oneofs)
                object.payload = "setPixel";
        }
        if (message.setAll != null && message.hasOwnProperty("setAll")) {
            object.setAll = $root.SetAll.toObject(message.setAll, options);
            if (options.oneofs)
                object.payload = "setAll";
        }
        if (message.getStatus != null && message.hasOwnProperty("getStatus")) {
            object.getStatus = $root.GetStatus.toObject(message.getStatus, options);
            if (options.oneofs)
                object.payload = "getStatus";
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

export const SetPixel = $root.SetPixel = (() => {

    /**
     * Properties of a SetPixel.
     * @exports ISetPixel
     * @interface ISetPixel
     * @property {number|null} [index] SetPixel index
     * @property {number|null} [r] SetPixel r
     * @property {number|null} [g] SetPixel g
     * @property {number|null} [b] SetPixel b
     */

    /**
     * Constructs a new SetPixel.
     * @exports SetPixel
     * @classdesc Represents a SetPixel.
     * @implements ISetPixel
     * @constructor
     * @param {ISetPixel=} [properties] Properties to set
     */
    function SetPixel(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetPixel index.
     * @member {number} index
     * @memberof SetPixel
     * @instance
     */
    SetPixel.prototype.index = 0;

    /**
     * SetPixel r.
     * @member {number} r
     * @memberof SetPixel
     * @instance
     */
    SetPixel.prototype.r = 0;

    /**
     * SetPixel g.
     * @member {number} g
     * @memberof SetPixel
     * @instance
     */
    SetPixel.prototype.g = 0;

    /**
     * SetPixel b.
     * @member {number} b
     * @memberof SetPixel
     * @instance
     */
    SetPixel.prototype.b = 0;

    /**
     * Creates a new SetPixel instance using the specified properties.
     * @function create
     * @memberof SetPixel
     * @static
     * @param {ISetPixel=} [properties] Properties to set
     * @returns {SetPixel} SetPixel instance
     */
    SetPixel.create = function create(properties) {
        return new SetPixel(properties);
    };

    /**
     * Encodes the specified SetPixel message. Does not implicitly {@link SetPixel.verify|verify} messages.
     * @function encode
     * @memberof SetPixel
     * @static
     * @param {ISetPixel} message SetPixel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetPixel.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.index != null && Object.hasOwnProperty.call(message, "index"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.index);
        if (message.r != null && Object.hasOwnProperty.call(message, "r"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.r);
        if (message.g != null && Object.hasOwnProperty.call(message, "g"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.g);
        if (message.b != null && Object.hasOwnProperty.call(message, "b"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.b);
        return writer;
    };

    /**
     * Encodes the specified SetPixel message, length delimited. Does not implicitly {@link SetPixel.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetPixel
     * @static
     * @param {ISetPixel} message SetPixel message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetPixel.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetPixel message from the specified reader or buffer.
     * @function decode
     * @memberof SetPixel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetPixel} SetPixel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetPixel.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetPixel();
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
                    message.r = reader.uint32();
                    break;
                }
            case 3: {
                    message.g = reader.uint32();
                    break;
                }
            case 4: {
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
     * Decodes a SetPixel message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetPixel
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetPixel} SetPixel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetPixel.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetPixel message.
     * @function verify
     * @memberof SetPixel
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetPixel.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.index != null && message.hasOwnProperty("index"))
            if (!$util.isInteger(message.index))
                return "index: integer expected";
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
     * Creates a SetPixel message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetPixel
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetPixel} SetPixel
     */
    SetPixel.fromObject = function fromObject(object) {
        if (object instanceof $root.SetPixel)
            return object;
        let message = new $root.SetPixel();
        if (object.index != null)
            message.index = object.index >>> 0;
        if (object.r != null)
            message.r = object.r >>> 0;
        if (object.g != null)
            message.g = object.g >>> 0;
        if (object.b != null)
            message.b = object.b >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a SetPixel message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetPixel
     * @static
     * @param {SetPixel} message SetPixel
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetPixel.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.index = 0;
            object.r = 0;
            object.g = 0;
            object.b = 0;
        }
        if (message.index != null && message.hasOwnProperty("index"))
            object.index = message.index;
        if (message.r != null && message.hasOwnProperty("r"))
            object.r = message.r;
        if (message.g != null && message.hasOwnProperty("g"))
            object.g = message.g;
        if (message.b != null && message.hasOwnProperty("b"))
            object.b = message.b;
        return object;
    };

    /**
     * Converts this SetPixel to JSON.
     * @function toJSON
     * @memberof SetPixel
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetPixel.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetPixel
     * @function getTypeUrl
     * @memberof SetPixel
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetPixel.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetPixel";
    };

    return SetPixel;
})();

export const SetAll = $root.SetAll = (() => {

    /**
     * Properties of a SetAll.
     * @exports ISetAll
     * @interface ISetAll
     * @property {number|null} [r] SetAll r
     * @property {number|null} [g] SetAll g
     * @property {number|null} [b] SetAll b
     */

    /**
     * Constructs a new SetAll.
     * @exports SetAll
     * @classdesc Represents a SetAll.
     * @implements ISetAll
     * @constructor
     * @param {ISetAll=} [properties] Properties to set
     */
    function SetAll(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SetAll r.
     * @member {number} r
     * @memberof SetAll
     * @instance
     */
    SetAll.prototype.r = 0;

    /**
     * SetAll g.
     * @member {number} g
     * @memberof SetAll
     * @instance
     */
    SetAll.prototype.g = 0;

    /**
     * SetAll b.
     * @member {number} b
     * @memberof SetAll
     * @instance
     */
    SetAll.prototype.b = 0;

    /**
     * Creates a new SetAll instance using the specified properties.
     * @function create
     * @memberof SetAll
     * @static
     * @param {ISetAll=} [properties] Properties to set
     * @returns {SetAll} SetAll instance
     */
    SetAll.create = function create(properties) {
        return new SetAll(properties);
    };

    /**
     * Encodes the specified SetAll message. Does not implicitly {@link SetAll.verify|verify} messages.
     * @function encode
     * @memberof SetAll
     * @static
     * @param {ISetAll} message SetAll message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetAll.encode = function encode(message, writer) {
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
     * Encodes the specified SetAll message, length delimited. Does not implicitly {@link SetAll.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SetAll
     * @static
     * @param {ISetAll} message SetAll message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SetAll.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SetAll message from the specified reader or buffer.
     * @function decode
     * @memberof SetAll
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SetAll} SetAll
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetAll.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SetAll();
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
     * Decodes a SetAll message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SetAll
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SetAll} SetAll
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SetAll.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SetAll message.
     * @function verify
     * @memberof SetAll
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SetAll.verify = function verify(message) {
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
     * Creates a SetAll message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SetAll
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SetAll} SetAll
     */
    SetAll.fromObject = function fromObject(object) {
        if (object instanceof $root.SetAll)
            return object;
        let message = new $root.SetAll();
        if (object.r != null)
            message.r = object.r >>> 0;
        if (object.g != null)
            message.g = object.g >>> 0;
        if (object.b != null)
            message.b = object.b >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a SetAll message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SetAll
     * @static
     * @param {SetAll} message SetAll
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SetAll.toObject = function toObject(message, options) {
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
     * Converts this SetAll to JSON.
     * @function toJSON
     * @memberof SetAll
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SetAll.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SetAll
     * @function getTypeUrl
     * @memberof SetAll
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SetAll.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SetAll";
    };

    return SetAll;
})();

export const GetStatus = $root.GetStatus = (() => {

    /**
     * Properties of a GetStatus.
     * @exports IGetStatus
     * @interface IGetStatus
     */

    /**
     * Constructs a new GetStatus.
     * @exports GetStatus
     * @classdesc Represents a GetStatus.
     * @implements IGetStatus
     * @constructor
     * @param {IGetStatus=} [properties] Properties to set
     */
    function GetStatus(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new GetStatus instance using the specified properties.
     * @function create
     * @memberof GetStatus
     * @static
     * @param {IGetStatus=} [properties] Properties to set
     * @returns {GetStatus} GetStatus instance
     */
    GetStatus.create = function create(properties) {
        return new GetStatus(properties);
    };

    /**
     * Encodes the specified GetStatus message. Does not implicitly {@link GetStatus.verify|verify} messages.
     * @function encode
     * @memberof GetStatus
     * @static
     * @param {IGetStatus} message GetStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetStatus.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified GetStatus message, length delimited. Does not implicitly {@link GetStatus.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetStatus
     * @static
     * @param {IGetStatus} message GetStatus message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetStatus.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetStatus message from the specified reader or buffer.
     * @function decode
     * @memberof GetStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetStatus} GetStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetStatus.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetStatus();
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
     * Decodes a GetStatus message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetStatus
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetStatus} GetStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetStatus.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetStatus message.
     * @function verify
     * @memberof GetStatus
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetStatus.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a GetStatus message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetStatus
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetStatus} GetStatus
     */
    GetStatus.fromObject = function fromObject(object) {
        if (object instanceof $root.GetStatus)
            return object;
        return new $root.GetStatus();
    };

    /**
     * Creates a plain object from a GetStatus message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetStatus
     * @static
     * @param {GetStatus} message GetStatus
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetStatus.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this GetStatus to JSON.
     * @function toJSON
     * @memberof GetStatus
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetStatus.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetStatus
     * @function getTypeUrl
     * @memberof GetStatus
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetStatus";
    };

    return GetStatus;
})();

export const Response = $root.Response = (() => {

    /**
     * Properties of a Response.
     * @exports IResponse
     * @interface IResponse
     * @property {number|null} [id] Response id
     * @property {boolean|null} [success] Response success
     * @property {IStatus|null} [status] Response status
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
     * Response status.
     * @member {IStatus|null|undefined} status
     * @memberof Response
     * @instance
     */
    Response.prototype.status = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    /**
     * Response payload.
     * @member {"status"|undefined} payload
     * @memberof Response
     * @instance
     */
    Object.defineProperty(Response.prototype, "payload", {
        get: $util.oneOfGetter($oneOfFields = ["status"]),
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
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            $root.Status.encode(message.status, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
            case 3: {
                    message.status = $root.Status.decode(reader, reader.uint32());
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
        if (message.status != null && message.hasOwnProperty("status")) {
            properties.payload = 1;
            {
                let error = $root.Status.verify(message.status);
                if (error)
                    return "status." + error;
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
        if (object.status != null) {
            if (typeof object.status !== "object")
                throw TypeError(".Response.status: object expected");
            message.status = $root.Status.fromObject(object.status);
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
        if (message.status != null && message.hasOwnProperty("status")) {
            object.status = $root.Status.toObject(message.status, options);
            if (options.oneofs)
                object.payload = "status";
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

export const Status = $root.Status = (() => {

    /**
     * Properties of a Status.
     * @exports IStatus
     * @interface IStatus
     * @property {number|null} [pixelCount] Status pixelCount
     * @property {boolean|null} [touchActive] Status touchActive
     */

    /**
     * Constructs a new Status.
     * @exports Status
     * @classdesc Represents a Status.
     * @implements IStatus
     * @constructor
     * @param {IStatus=} [properties] Properties to set
     */
    function Status(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Status pixelCount.
     * @member {number} pixelCount
     * @memberof Status
     * @instance
     */
    Status.prototype.pixelCount = 0;

    /**
     * Status touchActive.
     * @member {boolean} touchActive
     * @memberof Status
     * @instance
     */
    Status.prototype.touchActive = false;

    /**
     * Creates a new Status instance using the specified properties.
     * @function create
     * @memberof Status
     * @static
     * @param {IStatus=} [properties] Properties to set
     * @returns {Status} Status instance
     */
    Status.create = function create(properties) {
        return new Status(properties);
    };

    /**
     * Encodes the specified Status message. Does not implicitly {@link Status.verify|verify} messages.
     * @function encode
     * @memberof Status
     * @static
     * @param {IStatus} message Status message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Status.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pixelCount != null && Object.hasOwnProperty.call(message, "pixelCount"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.pixelCount);
        if (message.touchActive != null && Object.hasOwnProperty.call(message, "touchActive"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.touchActive);
        return writer;
    };

    /**
     * Encodes the specified Status message, length delimited. Does not implicitly {@link Status.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Status
     * @static
     * @param {IStatus} message Status message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Status.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Status message from the specified reader or buffer.
     * @function decode
     * @memberof Status
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Status} Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Status.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.Status();
        while (reader.pos < end) {
            let tag = reader.uint32();
            if (tag === error)
                break;
            switch (tag >>> 3) {
            case 1: {
                    message.pixelCount = reader.uint32();
                    break;
                }
            case 2: {
                    message.touchActive = reader.bool();
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
     * Decodes a Status message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Status
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Status} Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Status.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Status message.
     * @function verify
     * @memberof Status
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Status.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pixelCount != null && message.hasOwnProperty("pixelCount"))
            if (!$util.isInteger(message.pixelCount))
                return "pixelCount: integer expected";
        if (message.touchActive != null && message.hasOwnProperty("touchActive"))
            if (typeof message.touchActive !== "boolean")
                return "touchActive: boolean expected";
        return null;
    };

    /**
     * Creates a Status message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Status
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Status} Status
     */
    Status.fromObject = function fromObject(object) {
        if (object instanceof $root.Status)
            return object;
        let message = new $root.Status();
        if (object.pixelCount != null)
            message.pixelCount = object.pixelCount >>> 0;
        if (object.touchActive != null)
            message.touchActive = Boolean(object.touchActive);
        return message;
    };

    /**
     * Creates a plain object from a Status message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Status
     * @static
     * @param {Status} message Status
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Status.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.pixelCount = 0;
            object.touchActive = false;
        }
        if (message.pixelCount != null && message.hasOwnProperty("pixelCount"))
            object.pixelCount = message.pixelCount;
        if (message.touchActive != null && message.hasOwnProperty("touchActive"))
            object.touchActive = message.touchActive;
        return object;
    };

    /**
     * Converts this Status to JSON.
     * @function toJSON
     * @memberof Status
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Status.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for Status
     * @function getTypeUrl
     * @memberof Status
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    Status.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Status";
    };

    return Status;
})();

export { $root as default };
