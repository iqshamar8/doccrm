-- clinics / profiles / patients / services / appointments / payments / whatsapp / audit / settings
CREATE TABLE IF NOT EXISTS clinics (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT, timezone TEXT DEFAULT 'UTC');
CREATE TABLE IF NOT EXISTS patients (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), clinic_id UUID REFERENCES clinics(id), name TEXT, phone TEXT UNIQUE, email TEXT, dob DATE, gender TEXT, registered_at TIMESTAMPTZ DEFAULT now(), status TEXT DEFAULT 'active');
CREATE TABLE IF NOT EXISTS services (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), clinic_id UUID REFERENCES clinics(id), name TEXT, duration_minutes INT, price NUMERIC);
CREATE TABLE IF NOT EXISTS appointments (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), clinic_id UUID REFERENCES clinics(id), patient_id UUID REFERENCES patients(id), service_id UUID REFERENCES services(id), start_time TIMESTAMPTZ, end_time TIMESTAMPTZ, status TEXT DEFAULT 'new');
CREATE TABLE IF NOT EXISTS payments (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), clinic_id UUID REFERENCES clinics(id), patient_id UUID REFERENCES patients(id), amount NUMERIC, method TEXT, paid_at TIMESTAMPTZ DEFAULT now());
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
