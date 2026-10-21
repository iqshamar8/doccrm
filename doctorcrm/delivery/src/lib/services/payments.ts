import { supabase } from '../db/client';
export async function getPayments() {
  const { data, error } = await supabase
    .from('payments')
    .select('*, patients(full_name)')
    .order('paid_at', { ascending: false })
    .limit(100);
  if (error) throw error;
  return data || [];
}
