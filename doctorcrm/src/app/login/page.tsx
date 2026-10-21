export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="p-8 bg-white rounded shadow">
        <h1 className="text-xl font-bold text-teal-700">MediFlow CRM</h1>
        <p className="text-slate-600 text-sm">Supabase Auth handles login here.</p>
        <p className="text-xs text-slate-500 mt-4">Set SUPABASE_URL + ANON_KEY in .env and configure Auth providers.</p>
      </div>
    </main>
  );
}
