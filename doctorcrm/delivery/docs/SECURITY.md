# Security
- Supabase Auth + RLS on all tables.
- Service role key only on server (never in browser).
- All inputs validated on server.
- Webhook signature verified with HMAC.
- Audit log for sensitive ops.
- No secrets in code; use .env (gitignored).
