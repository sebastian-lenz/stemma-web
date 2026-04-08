import { BaseDevice } from "./BaseDevice";
import { DeviceType } from "../proto/messages";
import type { INFCTagState } from "../proto/messages";
import type { Connection } from "../usb/Connection";
import type { IDeviceState } from "../proto/messages";

export type NFCTagAddress = (typeof NFCTag.ADDRESSES)[number];

export interface ShortMessage {
  information?: string;
  message: string;
  phoneNumber: string;
}

export interface GeoLocation {
  information?: string;
  latitude: number;
  longitude: number;
}

export interface EmailMessage {
  email: string;
  information?: string;
  message: string;
  subject: string;
}

export interface VCard {
  address: string;
  cellularPhone: string;
  email: string;
  firstName: string;
  name: string;
  homeAddress: string;
  homeEmail: string;
  homePhone: string;
  organization: string;
  title: string;
  url: string;
  workAddress: string;
  workPhone: string;
  workEmail: string;
}

export class NFCTag extends BaseDevice<NFCTagAddress, {}> {
  private _state: INFCTagState | null = null;

  static readonly ADDRESSES: Array<number> = [0x2d];
  static readonly EVENTS: Array<string> = [];

  constructor(address: NFCTagAddress, connection: Connection) {
    super(DeviceType.DEVICE_TYPE_NFC_TAG, address, connection);
  }

  // ── Read methods ─────────────────────────────────────────────────────────────

  async readGeoLocation(): Promise<GeoLocation> {
    const s = await this._fetchState();
    return {
      latitude: s?.latitude ?? 0,
      longitude: s?.longitude ?? 0,
      information: s?.information ?? "",
    };
  }

  async readEmail(): Promise<EmailMessage> {
    const s = await this._fetchState();
    return {
      email: s?.emailAddress ?? "",
      subject: s?.subject ?? "",
      message: s?.emailMessage ?? "",
      information: s?.information ?? "",
    };
  }

  async readSms(): Promise<ShortMessage> {
    const s = await this._fetchState();
    return {
      phoneNumber: s?.phoneNumber ?? "",
      message: s?.smsMessage ?? "",
      information: s?.information ?? "",
    };
  }

  async readText(): Promise<string> {
    const s = await this._fetchState();
    return s?.text ?? "";
  }

  async readUnabridgedUri(): Promise<string> {
    const s = await this._fetchState();
    return s?.uri ?? "";
  }

  async readUri(): Promise<string> {
    const s = await this._fetchState();
    return (s?.protocol ?? "") + (s?.uri ?? "");
  }

  async readVcard(): Promise<VCard> {
    const s = await this._fetchState();
    return {
      firstName: s?.vcardFirstName ?? "",
      name: s?.vcardName ?? "",
      title: s?.vcardTitle ?? "",
      organization: s?.vcardOrganization ?? "",
      email: s?.vcardEmail ?? "",
      homeEmail: s?.vcardHomeEmail ?? "",
      workEmail: s?.vcardWorkEmail ?? "",
      cellularPhone: s?.vcardCellularPhone ?? "",
      homePhone: s?.vcardHomePhone ?? "",
      workPhone: s?.vcardWorkPhone ?? "",
      address: s?.vcardAddress ?? "",
      homeAddress: s?.vcardHomeAddress ?? "",
      workAddress: s?.vcardWorkAddress ?? "",
      url: s?.vcardUrl ?? "",
    };
  }

  // ── Write methods ─────────────────────────────────────────────────────────────

  async writeGeoLocation(
    geoLocationOrLatitude: GeoLocation | number,
    longitude?: number,
    information = "",
  ): Promise<boolean> {
    const geo =
      typeof geoLocationOrLatitude === "number"
        ? {
            latitude: geoLocationOrLatitude,
            longitude: longitude!,
            information,
          }
        : geoLocationOrLatitude;

    const resp = await this._request({
      nfcWriteGeo: {
        latitude: geo.latitude,
        longitude: geo.longitude,
        information: geo.information ?? "",
      },
    });
    return resp.success ?? false;
  }

  async writeEmail(
    emailOrObj: EmailMessage | string,
    subject?: string,
    message?: string,
    information = "",
  ): Promise<boolean> {
    const em =
      typeof emailOrObj === "string"
        ? {
            email: emailOrObj,
            subject: subject!,
            message: message!,
            information,
          }
        : emailOrObj;

    const resp = await this._request({
      nfcWriteEmail: {
        email: em.email,
        subject: em.subject,
        message: em.message,
        information: em.information ?? "",
      },
    });
    return resp.success ?? false;
  }

  async writeSms(
    shortMessageOrPhone: ShortMessage | string,
    message?: string,
    information = "",
  ): Promise<boolean> {
    const sms =
      typeof shortMessageOrPhone === "string"
        ? { phoneNumber: shortMessageOrPhone, message: message!, information }
        : shortMessageOrPhone;

    const resp = await this._request({
      nfcWriteSms: {
        phoneNumber: sms.phoneNumber,
        message: sms.message,
        information: sms.information ?? "",
      },
    });
    return resp.success ?? false;
  }

  async writeText(text: string, language = "en"): Promise<boolean> {
    const resp = await this._request({ nfcWriteText: { text, language } });
    return resp.success ?? false;
  }

  async writeUnabridgedUri(uri: string, information = ""): Promise<boolean> {
    const resp = await this._request({
      nfcWriteUnabridgedUri: { uri, information },
    });
    return resp.success ?? false;
  }

  async writeUri(
    protocol: string,
    uri: string,
    information = "",
  ): Promise<boolean> {
    const resp = await this._request({
      nfcWriteUri: { protocol, uri, information },
    });
    return resp.success ?? false;
  }

  async writeVcard(vcard: Partial<VCard>): Promise<boolean> {
    const resp = await this._request({
      nfcWriteVcard: {
        firstName: vcard.firstName ?? "",
        name: vcard.name ?? "",
        title: vcard.title ?? "",
        organization: vcard.organization ?? "",
        email: vcard.email ?? "",
        homeEmail: vcard.homeEmail ?? "",
        workEmail: vcard.workEmail ?? "",
        cellularPhone: vcard.cellularPhone ?? "",
        homePhone: vcard.homePhone ?? "",
        workPhone: vcard.workPhone ?? "",
        address: vcard.address ?? "",
        homeAddress: vcard.homeAddress ?? "",
        workAddress: vcard.workAddress ?? "",
        url: vcard.url ?? "",
      },
    });
    return resp.success ?? false;
  }

  override _applyState(deviceState: IDeviceState): void {
    super._applyState(deviceState);
    this._state = deviceState.nfcTag ?? null;
  }

  // ── Private helpers ───────────────────────────────────────────────────────────

  private async _fetchState(): Promise<INFCTagState | null> {
    await this._request({ getState: {} });
    return this._state;
  }
}
