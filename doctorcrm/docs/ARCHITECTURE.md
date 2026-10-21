# MediFlow CRM Architecture

## Stack
- Next.js 16 App Router + TypeScript + Tailwind CSS 4
- Supabase (PostgreSQL + Auth + RLS)
- WhatsApp Business Cloud API (official)
- Vitest + Playwright

## Layers
- `src/app` — pages + API routes (Next.js server)
- `src/lib/db` — Supabase client (anon + service role)
- `src/lib/services` — business logic (patients, appointments, payments, bot)
- `src/components` — shared UI
- `supabase/migrations` — SQL migrations

## Data flow
Client -> Next Route -> service -> Supabase (RLS enforced).
WhatsApp -> /api/whatsapp/webhook (signature verified) -> bot service -> DB.
Reminders -> notification_jobs -> scheduled worker -> WhatsApp provider.
