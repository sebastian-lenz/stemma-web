import { DeviceType } from "../proto/messages";
import { TypedEventTarget } from "../utils/events";
import type { Connection } from "../usb/Connection";
import type { DeviceCommandPayload } from "../usb/utils";
import type { DeviceIdentifier } from "../utils/types";
import type { EventMap, CustomEventKeysOf } from "../utils/events";
import type { IDeviceState, IDeviceEvent, Response } from "../proto/messages";

export abstract class BaseDevice<
  TAddress extends number = 0,
  TEvents extends EventMap = {},
> extends TypedEventTarget<TEvents> {
  readonly id: DeviceIdentifier<TAddress>;

  protected readonly _connection: Connection;
  private _isConnected = false;

  constructor(type: DeviceType, address: TAddress, connection: Connection) {
    super();

    this.id = { type, address };
    this._connection = connection;
  }

  get isConnected(): boolean {
    return this._isConnected;
  }

  _applyState(deviceState: IDeviceState): void {
    this._isConnected = deviceState.connected ?? false;
  }

  _applyEvent(event: IDeviceEvent): void {}

  _start(): Promise<Response> {
    return this._request({ start: {} });
  }

  dispatch<K extends CustomEventKeysOf<TEvents>>(
    type: K,
    detail: TEvents[K] extends CustomEvent<infer D> ? D : never,
  ): boolean {
    return super.dispatchEvent(new CustomEvent(type as string, { detail }));
  }

  protected _send(payload: DeviceCommandPayload): Promise<number> {
    return this._connection.send({
      type: "device_command",
      deviceType: this.id.type,
      address: this.id.address,
      payload,
    });
  }

  protected _request(payload: DeviceCommandPayload): Promise<Response> {
    return this._connection.request({
      type: "device_command",
      deviceType: this.id.type,
      address: this.id.address,
      payload,
    });
  }
}
