# MediFlow CRM — Multi-Tenant Medical SaaS

Stage 1: Foundation / Database / Auth / Tenant isolation / UI skeleton.

## Priority
1. Data isolation (tenant_id + RLS)
2. Appointment integrity (no overlaps)
3. Stable core
4. WhatsApp integration structure (no live keys yet)
5. AI agent settings (isolated per tenant)

## Tech Stack (proposed)
- Next.js + TypeScript
- Tailwind + shadcn/ui
- PostgreSQL + Prisma/Drizzle
- Auth via secure session-based provider
- Background jobs (queues) for reminders
- Dual language: Arabic (RTL default) + English

## Folders
- /app — Next.js app
- /db — schema, migrations, seed
- /components — UI
- /lib — auth, db, ai-agent helpers
- /docs — setup instructions

## Security
- No secrets in frontend
- Row Level Security where possible
- Server-side permission checks always
- Rate limiting on auth + API
