# Database

14 tables: clinics, profiles, patients, services, appointments, visits, payments, clinic_settings, whatsapp_conversations, whatsapp_messages, webhook_events, notification_jobs, audit_logs.
UUIDs everywhere, FK constraints, CHECK constraints, GIST exclude for appointment overlap (no double booking), indexes on phone/start_time/patient.
Run: supabase/migrations/001_init.sql in Supabase SQL editor.
