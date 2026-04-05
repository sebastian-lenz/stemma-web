import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Command. */
export interface ICommand {

    /** Command id */
    id?: (number|null);

    /** Command deviceCommand */
    deviceCommand?: (IDeviceCommand|null);
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

    /** DeviceCommand payload. */
    public payload?: ("start"|"stop"|"getState"|"setBrightness"|"setPixelColor"|"setPixelColors"|"setLength"|"setAccelRange"|"setRotRange"|"setAccelRate"|"setRotRate");

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

/** Properties of a StartDevice. */
export interface IStartDevice {

    /** StartDevice gyroscopeChipset */
    gyroscopeChipset?: (GyroscopeChipset|null);
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

/** Properties of a StopDevice. */
export interface IStopDevice {
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

/** Properties of a GetDeviceState. */
export interface IGetDeviceState {
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

/** Properties of a SetBrightness. */
export interface ISetBrightness {

    /** SetBrightness brightness */
    brightness?: (number|null);
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

/** Properties of a SetPixelColor. */
export interface ISetPixelColor {

    /** SetPixelColor index */
    index?: (number|null);

    /** SetPixelColor color */
    color?: (number|null);
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

/** Properties of a SetPixelColors. */
export interface ISetPixelColors {

    /** SetPixelColors offset */
    offset?: (number|null);

    /** SetPixelColors colors */
    colors?: (Uint8Array|null);

    /** SetPixelColors show */
    show?: (boolean|null);
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

/** Properties of a SetNeoDriverLength. */
export interface ISetNeoDriverLength {

    /** SetNeoDriverLength length */
    length?: (number|null);
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

/** Properties of a SetAccelerationRange. */
export interface ISetAccelerationRange {

    /** SetAccelerationRange range */
    range?: (AccelerationRange|null);
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

/** Properties of a SetRotationRange. */
export interface ISetRotationRange {

    /** SetRotationRange range */
    range?: (RotationRange|null);
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

/** Properties of a SetAccelerationRate. */
export interface ISetAccelerationRate {

    /** SetAccelerationRate rate */
    rate?: (DataRate|null);
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

/** Properties of a SetRotationRate. */
export interface ISetRotationRate {

    /** SetRotationRate rate */
    rate?: (DataRate|null);
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

    /** Response payload. */
    public payload?: ("deviceState"|"deviceEvent");

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

/** Properties of a DeviceState. */
export interface IDeviceState {

    /** DeviceState type */
    type?: (DeviceType|null);

    /** DeviceState address */
    address?: (number|null);

    /** DeviceState connected */
    connected?: (boolean|null);

    /** DeviceState trinkey */
    trinkey?: (ITrinkeyState|null);

    /** DeviceState neoDriver */
    neoDriver?: (INeoDriverState|null);

    /** DeviceState rotaryEncoder */
    rotaryEncoder?: (IRotaryEncoderState|null);

    /** DeviceState linearEncoder */
    linearEncoder?: (ILinearEncoderState|null);

    /** DeviceState touchSensor */
    touchSensor?: (ITouchSensorState|null);

    /** DeviceState gyroscope */
    gyroscope?: (IGyroscopeState|null);
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

    /** DeviceState trinkey. */
    public trinkey?: (ITrinkeyState|null);

    /** DeviceState neoDriver. */
    public neoDriver?: (INeoDriverState|null);

    /** DeviceState rotaryEncoder. */
    public rotaryEncoder?: (IRotaryEncoderState|null);

    /** DeviceState linearEncoder. */
    public linearEncoder?: (ILinearEncoderState|null);

    /** DeviceState touchSensor. */
    public touchSensor?: (ITouchSensorState|null);

    /** DeviceState gyroscope. */
    public gyroscope?: (IGyroscopeState|null);

    /** DeviceState state. */
    public state?: ("trinkey"|"neoDriver"|"rotaryEncoder"|"linearEncoder"|"touchSensor"|"gyroscope");

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

/** Properties of a DeviceEvent. */
export interface IDeviceEvent {

    /** DeviceEvent type */
    type?: (DeviceType|null);

    /** DeviceEvent address */
    address?: (number|null);

    /** DeviceEvent rotaryChanged */
    rotaryChanged?: (IRotaryEncoderChanged|null);

    /** DeviceEvent rotaryButton */
    rotaryButton?: (IRotaryEncoderButton|null);

    /** DeviceEvent linearChanged */
    linearChanged?: (ILinearEncoderChanged|null);

    /** DeviceEvent touchButton */
    touchButton?: (ITouchSensorButton|null);

    /** DeviceEvent gyroscopeData */
    gyroscopeData?: (IGyroscopeChanged|null);
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

    /** DeviceEvent rotaryChanged. */
    public rotaryChanged?: (IRotaryEncoderChanged|null);

    /** DeviceEvent rotaryButton. */
    public rotaryButton?: (IRotaryEncoderButton|null);

    /** DeviceEvent linearChanged. */
    public linearChanged?: (ILinearEncoderChanged|null);

    /** DeviceEvent touchButton. */
    public touchButton?: (ITouchSensorButton|null);

    /** DeviceEvent gyroscopeData. */
    public gyroscopeData?: (IGyroscopeChanged|null);

    /** DeviceEvent event. */
    public event?: ("rotaryChanged"|"rotaryButton"|"linearChanged"|"touchButton"|"gyroscopeData");

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

/** Properties of a TrinkeyState. */
export interface ITrinkeyState {

    /** TrinkeyState brightness */
    brightness?: (number|null);

    /** TrinkeyState pixel */
    pixel?: (number|null);
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

/** Properties of a NeoDriverState. */
export interface INeoDriverState {

    /** NeoDriverState brightness */
    brightness?: (number|null);

    /** NeoDriverState length */
    length?: (number|null);
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

/** Properties of a RotaryEncoderChanged. */
export interface IRotaryEncoderChanged {

    /** RotaryEncoderChanged value */
    value?: (number|null);

    /** RotaryEncoderChanged isPressed */
    isPressed?: (boolean|null);
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

/** Properties of a RotaryEncoderButton. */
export interface IRotaryEncoderButton {

    /** RotaryEncoderButton isPressed */
    isPressed?: (boolean|null);
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

/** Properties of a LinearEncoderState. */
export interface ILinearEncoderState {

    /** LinearEncoderState brightness */
    brightness?: (number|null);

    /** LinearEncoderState pixels */
    pixels?: (Uint8Array|null);

    /** LinearEncoderState value */
    value?: (number|null);
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

/** Properties of a LinearEncoderChanged. */
export interface ILinearEncoderChanged {

    /** LinearEncoderChanged value */
    value?: (number|null);
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

/** Properties of a TouchSensorState. */
export interface ITouchSensorState {

    /** TouchSensorState touchedMask */
    touchedMask?: (number|null);
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

/** Properties of a TouchSensorButton. */
export interface ITouchSensorButton {

    /** TouchSensorButton touchedMask */
    touchedMask?: (number|null);
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
    DATA_RATE_SHUTDOWN = 0,
    DATA_RATE_HZ_12_5 = 1,
    DATA_RATE_HZ_26 = 2,
    DATA_RATE_HZ_52 = 3,
    DATA_RATE_HZ_104 = 4,
    DATA_RATE_HZ_208 = 5,
    DATA_RATE_HZ_416 = 6,
    DATA_RATE_HZ_833 = 7,
    DATA_RATE_HZ_1_66K = 8,
    DATA_RATE_HZ_3_33K = 9,
    DATA_RATE_HZ_6_66K = 10
}

/** AccelerationRange enum. */
export enum AccelerationRange {
    ACCELERATION_RANGE_4_G = 0,
    ACCELERATION_RANGE_8_G = 1,
    ACCELERATION_RANGE_16_G = 2,
    ACCELERATION_RANGE_32_G = 3
}

/** RotationRange enum. */
export enum RotationRange {
    ROTATION_RANGE_DPS_125 = 0,
    ROTATION_RANGE_DPS_250 = 1,
    ROTATION_RANGE_DPS_500 = 2,
    ROTATION_RANGE_DPS_1000 = 3,
    ROTATION_RANGE_DPS_2000 = 4,
    ROTATION_RANGE_DPS_4000 = 5
}

/** DeviceType enum. */
export enum DeviceType {
    DEVICE_TYPE_UNSPECIFIED = 0,
    DEVICE_TYPE_NEO_DRIVER = 1,
    DEVICE_TYPE_ROTARY_ENCODER = 2,
    DEVICE_TYPE_LINEAR_ENCODER = 3,
    DEVICE_TYPE_TOUCH_SENSOR = 4,
    DEVICE_TYPE_GYROSCOPE = 5,
    DEVICE_TYPE_TRINKEY = 6
}
