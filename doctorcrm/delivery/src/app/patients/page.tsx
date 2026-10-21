"use client";
import { getPatients } from '../../lib/services/patients';
import { useEffect, useState } from 'react';
export default function PatientsPage() {
  const [patients, setPatients] = useState<any[]>([]);
  useEffect(() => {
    getPatients().then(d => setPatients(d)).catch(() => setPatients([]));
  }, []);
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-teal-700">إدارة المرضى</h1>
      <p>عدد المرضى النشطين: {patients.length}</p>
      <pre className="mt-4 text-xs bg-slate-100 p-3 rounded overflow-auto">{JSON.stringify(patients, null, 2)}</pre>
    </main>
  );
}
