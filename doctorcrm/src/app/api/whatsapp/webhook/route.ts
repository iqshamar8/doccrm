import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

export function GET(req: NextRequest) {
  const mode = req.nextUrl.searchParams.get('hub.mode');
  const token = req.nextUrl.searchParams.get('verify_token');
  const challenge = req.nextUrl.searchParams.get('hub.challenge');
  if (mode === 'subscribe' && token === process.env.WHATSAPP_VERIFY_TOKEN) {
    return new Response(challenge, { status: 200 });
  }
  return NextResponse.json({ error: 'invalid' }, { status: 403 });
}

export async function POST(req: NextRequest) {
  const sig = req.headers.get('x-hub-signature-256') || '';
  const raw = await req.text();
  const secret = process.env.WHATSAPP_APP_SECRET || '';
  const expected = 'sha256=' + crypto.createHmac('sha256', secret).update(raw).digest('hex');
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) {
    return NextResponse.json({ error: 'bad signature' }, { status: 401 });
  }
  const body = JSON.parse(raw);
  console.log('WHATSAPP WEBHOOK RECEIVED', JSON.stringify(body, null, 0));
  return NextResponse.json({ ok: true });
}
