import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a Command. */
export interface ICommand {

    /** Command id */
    id?: (number|null);

    /** Command setPixel */
    setPixel?: (ISetPixel|null);

    /** Command setAll */
    setAll?: (ISetAll|null);

    /** Command getStatus */
    getStatus?: (IGetStatus|null);
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

    /** Command setPixel. */
    public setPixel?: (ISetPixel|null);

    /** Command setAll. */
    public setAll?: (ISetAll|null);

    /** Command getStatus. */
    public getStatus?: (IGetStatus|null);

    /** Command payload. */
    public payload?: ("setPixel"|"setAll"|"getStatus");

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

/** Properties of a SetPixel. */
export interface ISetPixel {

    /** SetPixel index */
    index?: (number|null);

    /** SetPixel r */
    r?: (number|null);

    /** SetPixel g */
    g?: (number|null);

    /** SetPixel b */
    b?: (number|null);
}

/** Represents a SetPixel. */
export class SetPixel implements ISetPixel {

    /**
     * Constructs a new SetPixel.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetPixel);

    /** SetPixel index. */
    public index: number;

    /** SetPixel r. */
    public r: number;

    /** SetPixel g. */
    public g: number;

    /** SetPixel b. */
    public b: number;

    /**
     * Creates a new SetPixel instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetPixel instance
     */
    public static create(properties?: ISetPixel): SetPixel;

    /**
     * Encodes the specified SetPixel message. Does not implicitly {@link SetPixel.verify|verify} messages.
     * @param message SetPixel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetPixel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetPixel message, length delimited. Does not implicitly {@link SetPixel.verify|verify} messages.
     * @param message SetPixel message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetPixel, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetPixel message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetPixel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetPixel;

    /**
     * Decodes a SetPixel message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetPixel
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetPixel;

    /**
     * Verifies a SetPixel message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetPixel message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetPixel
     */
    public static fromObject(object: { [k: string]: any }): SetPixel;

    /**
     * Creates a plain object from a SetPixel message. Also converts values to other types if specified.
     * @param message SetPixel
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetPixel, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetPixel to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetPixel
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a SetAll. */
export interface ISetAll {

    /** SetAll r */
    r?: (number|null);

    /** SetAll g */
    g?: (number|null);

    /** SetAll b */
    b?: (number|null);
}

/** Represents a SetAll. */
export class SetAll implements ISetAll {

    /**
     * Constructs a new SetAll.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISetAll);

    /** SetAll r. */
    public r: number;

    /** SetAll g. */
    public g: number;

    /** SetAll b. */
    public b: number;

    /**
     * Creates a new SetAll instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SetAll instance
     */
    public static create(properties?: ISetAll): SetAll;

    /**
     * Encodes the specified SetAll message. Does not implicitly {@link SetAll.verify|verify} messages.
     * @param message SetAll message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISetAll, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SetAll message, length delimited. Does not implicitly {@link SetAll.verify|verify} messages.
     * @param message SetAll message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISetAll, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SetAll message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SetAll
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SetAll;

    /**
     * Decodes a SetAll message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SetAll
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SetAll;

    /**
     * Verifies a SetAll message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SetAll message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SetAll
     */
    public static fromObject(object: { [k: string]: any }): SetAll;

    /**
     * Creates a plain object from a SetAll message. Also converts values to other types if specified.
     * @param message SetAll
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SetAll, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SetAll to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SetAll
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GetStatus. */
export interface IGetStatus {
}

/** Represents a GetStatus. */
export class GetStatus implements IGetStatus {

    /**
     * Constructs a new GetStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetStatus);

    /**
     * Creates a new GetStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetStatus instance
     */
    public static create(properties?: IGetStatus): GetStatus;

    /**
     * Encodes the specified GetStatus message. Does not implicitly {@link GetStatus.verify|verify} messages.
     * @param message GetStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetStatus message, length delimited. Does not implicitly {@link GetStatus.verify|verify} messages.
     * @param message GetStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetStatus;

    /**
     * Decodes a GetStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetStatus;

    /**
     * Verifies a GetStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetStatus
     */
    public static fromObject(object: { [k: string]: any }): GetStatus;

    /**
     * Creates a plain object from a GetStatus message. Also converts values to other types if specified.
     * @param message GetStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetStatus
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

    /** Response status */
    status?: (IStatus|null);
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

    /** Response status. */
    public status?: (IStatus|null);

    /** Response payload. */
    public payload?: "status";

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

/** Properties of a Status. */
export interface IStatus {

    /** Status pixelCount */
    pixelCount?: (number|null);

    /** Status touchActive */
    touchActive?: (boolean|null);
}

/** Represents a Status. */
export class Status implements IStatus {

    /**
     * Constructs a new Status.
     * @param [properties] Properties to set
     */
    constructor(properties?: IStatus);

    /** Status pixelCount. */
    public pixelCount: number;

    /** Status touchActive. */
    public touchActive: boolean;

    /**
     * Creates a new Status instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Status instance
     */
    public static create(properties?: IStatus): Status;

    /**
     * Encodes the specified Status message. Does not implicitly {@link Status.verify|verify} messages.
     * @param message Status message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Status message, length delimited. Does not implicitly {@link Status.verify|verify} messages.
     * @param message Status message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Status message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Status;

    /**
     * Decodes a Status message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Status
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Status;

    /**
     * Verifies a Status message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Status message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Status
     */
    public static fromObject(object: { [k: string]: any }): Status;

    /**
     * Creates a plain object from a Status message. Also converts values to other types if specified.
     * @param message Status
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Status to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for Status
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
