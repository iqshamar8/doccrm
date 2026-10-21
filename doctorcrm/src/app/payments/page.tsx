"use client";
import { getPayments } from '../../lib/services/payments';
import { useEffect, useState } from 'react';
export default function PaymentsPage() {
  const [payments, setPayments] = useState<any[]>([]);
  useEffect(() => {
    getPayments().then(d => setPayments(d)).catch(() => setPayments([]));
  }, []);
  const total = payments.reduce((s: number, p: any) => s + Number(p.amount || 0), 0);
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-teal-700">المدفوعات</h1>
      <p>إجمالي المسجل: {total}</p>
      <pre className="mt-4 text-xs bg-slate-100 p-3 rounded overflow-auto">{JSON.stringify(payments, null, 2)}</pre>
    </main>
  );
}
