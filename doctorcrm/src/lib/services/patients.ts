import { supabase } from '../db/client';
export async function getPatients() {
  const { data, error } = await supabase.from('patients').select('*').eq('status','active').limit(50);
  if (error) throw error;
  return data || [];
}
