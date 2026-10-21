# MediFlow CRM — Implementation Plan

## Status (2026-10-21)
- Project scaffolded with Next.js 16 + TypeScript + Tailwind CSS 4
- Dependencies installed (Supabase SSR, Zod, react-hook-form, vitest, playwright)
- Arabic RTL layout, shadcn components, database schema (migrations) to follow

## Execution Order
1. DB schema / migrations + RLS policies
2. Auth (Supabase Auth + SSR guard) + roles
3. UI design system (RTL sidebar, header, table components)
4. Patients, Services, Appointments, Payments modules
5. WhatsApp Cloud layer + webhook verification
6. Bot state machine + reminder cron
7. Tests + build + docs

## External Dependencies Needed
- Supabase project + URL + anon/service keys (set in .env)
- Meta WhatsApp Business API token + phone ID + verify token (optional for real send)
- Vercel / Fly deploy (optional)
