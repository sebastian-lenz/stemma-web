import { Command, Response as PbResponse } from './messages.js';

// ── Public types ──────────────────────────────────────────────────────────────

export type CommandPayload =
  | { type: 'set_pixel'; index: number; r: number; g: number; b: number }
  | { type: 'set_all'; r: number; g: number; b: number }
  | { type: 'get_status' };

export interface StatusResponse {
  pixelCount: number;
  touchActive: boolean;
}

export interface Response {
  id: number;
  success: boolean;
  status: StatusResponse | null;
}

// ── Encode / Decode ───────────────────────────────────────────────────────────

export function encodeCommand(id: number, payload: CommandPayload): Uint8Array {
  let cmd: Parameters<typeof Command.encode>[0];

  if (payload.type === 'set_pixel') {
    cmd = { id, setPixel: { index: payload.index, r: payload.r, g: payload.g, b: payload.b } };
  } else if (payload.type === 'set_all') {
    cmd = { id, setAll: { r: payload.r, g: payload.g, b: payload.b } };
  } else {
    cmd = { id, getStatus: {} };
  }

  return Command.encode(cmd).finish() as Uint8Array<ArrayBuffer>;
}

export function decodeResponse(bytes: Uint8Array): Response {
  const pb = PbResponse.decode(bytes);
  return {
    id: pb.id,
    success: pb.success,
    status: pb.status
      ? { pixelCount: pb.status.pixelCount ?? 0, touchActive: pb.status.touchActive ?? false }
      : null,
  };
}

// ── Framing helpers (2-byte big-endian length prefix) ─────────────────────────

/** Wrap an encoded message with a 2-byte big-endian length header. */
export function frame(payload: Uint8Array): Uint8Array {
  const out = new Uint8Array(2 + payload.length);
  out[0] = (payload.length >> 8) & 0xff;
  out[1] = payload.length & 0xff;
  out.set(payload, 2);
  return out;
}

/**
 * Stateful receive buffer that reassembles length-prefixed frames.
 * Push incoming bytes via `push(chunk)`. Fully assembled message
 * payloads are delivered through the `onMessage` callback.
 */
export class FrameDecoder {
  private _onMessage: (payload: Uint8Array) => void;
  private _buf: Uint8Array;
  private _len: number;

  constructor(onMessage: (payload: Uint8Array) => void) {
    this._onMessage = onMessage;
    this._buf = new Uint8Array(256);
    this._len = 0;
  }

  push(chunk: Uint8Array): void {
    if (this._len + chunk.length > this._buf.length) {
      const bigger = new Uint8Array((this._len + chunk.length) * 2);
      bigger.set(this._buf.subarray(0, this._len));
      this._buf = bigger;
    }
    this._buf.set(chunk, this._len);
    this._len += chunk.length;

    while (this._len >= 2) {
      const msgLen = (this._buf[0] << 8) | this._buf[1];
      if (this._len < 2 + msgLen) break;

      const payload = this._buf.slice(2, 2 + msgLen);
      this._onMessage(payload);

      this._buf.copyWithin(0, 2 + msgLen, this._len);
      this._len -= 2 + msgLen;
    }
  }
}
