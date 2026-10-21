# Deployment
1. Create Supabase project, run migrations.
2. Set env vars.
3. Push to GitHub (CI runs build).
4. Deploy on Vercel (import repo, add env vars).

## Real Env Values Used
- NEXT_PUBLIC_SUPABASE_URL=https://jzlialymhmuexoyvaeff.supabase.co
- NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_C6wfS3N5RRtdWlA0HwItKQ_4oPp8hVV

## Missing Before Full Production
- SUPABASE_SERVICE_ROLE_KEY
- WhatsApp Access Token / Phone Number ID / Verify Token / App Secret
- CRON_SECRET (reminders)
