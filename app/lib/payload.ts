'use server';

import { getPayloadHMR } from '@payloadcms/next/utilities';
import type { Payload } from 'payload';
import config from '@/payload-config';

let cached: Payload | null = null;

interface GetPayloadOptions {
  config?: any;
}

export const getPayload = async (options?: GetPayloadOptions): Promise<Payload> => {
  if (!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET environment variable is not set');
  }

  if (cached) return cached;

  const payload = await getPayloadHMR({
    config,
    importMap: {},
  });

  cached = payload;
  return payload;
};
