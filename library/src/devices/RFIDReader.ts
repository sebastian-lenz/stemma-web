import { BaseDevice } from "./BaseDevice";
import { DeviceType } from "../proto/messages";
import type { Connection } from "../usb/Connection";
import type { IDeviceState, IDeviceEvent } from "../proto/messages";

export type RFIDReaderAddress = (typeof RFIDReader.ADDRESSES)[number];

export type RFIDReaderEvent = CustomEvent<{
  tagId: string;
}>;

export type RFIDReaderEvents = {
  changed: RFIDReaderEvent;
};

export class RFIDReader extends BaseDevice<
  RFIDReaderAddress,
  RFIDReaderEvents
> {
  private _tagId: string | null = null;

  static readonly ADDRESSES: Array<number> = [
    0x30, 0x31, 0x32, 0x33, 0x34, 0x35, 0x36, 0x37,
  ];
  static readonly EVENTS: Array<string> = ["changed"];

  constructor(address: RFIDReaderAddress, connection: Connection) {
    super(DeviceType.DEVICE_TYPE_RFID_READER, address, connection);
  }

  getTagID(): string | null {
    return this._tagId;
  }

  override _applyState(deviceState: IDeviceState): void {
    super._applyState(deviceState);

    const state = deviceState.rfidReader;
    if (!state) return;

    this._tagId = state.tagId || null;
  }

  override _applyEvent(event: IDeviceEvent): void {
    const data = event.rfidReaderData;
    if (!data) return;

    this._tagId = data.tagId || null;
    this._dispatch("changed", { tagId: this._tagId ?? "" });
  }
}
