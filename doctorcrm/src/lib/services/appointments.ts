import { supabase } from '../db/client';
export async function getAppointments() {
  const { data, error } = await supabase
    .from('appointments')
    .select('*, patients(full_name), services(name)')
    .order('start_time', { ascending: true })
    .limit(100);
  if (error) throw error;
  return data || [];
}
