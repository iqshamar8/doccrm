"use client";
import { getAppointments } from '../../lib/services/appointments';
import { useEffect, useState } from 'react';
export default function AppointmentsPage() {
  const [appts, setAppts] = useState<any[]>([]);
  useEffect(() => {
    getAppointments().then(d => setAppts(d)).catch(() => setAppts([]));
  }, []);
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-teal-700">المواعيد</h1>
      <p>إجمالي المواعيد: {appts.length}</p>
      <pre className="mt-4 text-xs bg-slate-100 p-3 rounded overflow-auto">{JSON.stringify(appts, null, 2)}</pre>
    </main>
  );
}
