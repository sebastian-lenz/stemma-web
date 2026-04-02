import { Command, Response } from "../proto/messages.js";
import { DeviceType } from "../devices/types.js";
import type { ICommand, IDeviceCommand } from "../proto/messages.js";
import type { DeviceCommandPayload } from "../devices/base-device.js";

export type CommandPayload = {
  type: "device_command";
  deviceType: DeviceType;
  address: number;
  payload: DeviceCommandPayload;
};

export function encodeCommand(id: number, payload: CommandPayload): Uint8Array {
  const cmd: ICommand = {
    id,
    deviceCommand: {
      type: payload.deviceType,
      address: payload.address,
      ...payload.payload,
    } satisfies IDeviceCommand,
  };

  return Command.encode(cmd).finish() as Uint8Array<ArrayBuffer>;
}

export function decodeResponse(bytes: Uint8Array): Response {
  return Response.decode(bytes);
}

/** Wrap an encoded message with a 2-byte big-endian length header. */
export function frame(payload: Uint8Array): Uint8Array<ArrayBuffer> {
  const out = new Uint8Array(2 + payload.length);
  out[0] = (payload.length >> 8) & 0xff;
  out[1] = payload.length & 0xff;
  out.set(payload, 2);

  return out;
}
