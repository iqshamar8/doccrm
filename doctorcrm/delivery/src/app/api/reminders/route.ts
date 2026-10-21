import { NextResponse } from 'next/server';
export async function GET(req: Request) {
  const secret = req.headers.get('x-cron-secret');
  if (secret !== process.env.CRON_SECRET) return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  return NextResponse.json({ ok: true, message: 'Reminder scheduler ready. Configure notification_jobs + WhatsApp provider.' });
}
