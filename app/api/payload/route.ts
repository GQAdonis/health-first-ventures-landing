import { NextRequest, NextResponse } from 'next/server';
import payload from 'payload';
import config from '@/payload-config';

interface PayloadCache {
  client: typeof payload | null;
  promise: Promise<typeof payload> | null;
}

// Extend global to include our cache
declare global {
  var payload: PayloadCache;
}

// Initialize the cache if it doesn't exist
if (!global.payload) {
  global.payload = {
    client: null,
    promise: null,
  };
}

export async function GET(req: NextRequest) {
  if (!global.payload.client) {
    if (!global.payload.promise) {
      global.payload.promise = payload.init({
        config,
      });
    }
    
    try {
      global.payload.client = await global.payload.promise;
    } catch (e: unknown) {
      global.payload.promise = null;
      throw e;
    }
  }

  return NextResponse.json({ message: 'Payload initialized' });
}