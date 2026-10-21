import { supabase } from '../db/client';

export type BotState = 'idle' | 'awaiting_service' | 'awaiting_date' | 'awaiting_time' | 'confirm' | 'done';

export async function findConversation(phone: string) {
  const { data } = await supabase
    .from('whatsapp_conversations')
    .select('*')
    .eq('phone', phone)
    .maybeSingle();
  return data;
}

export async function upsertConversation(phone: string, state: BotState, context: any) {
  const { data, error } = await supabase
    .from('whatsapp_conversations')
    .upsert({ phone, state, context, updated_at: new Date().toISOString() }, { onConflict: 'phone' })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function listServices() {
  const { data, error } = await supabase.from('services').select('*').order('name');
  if (error) throw error;
  return data || [];
}

export async function createAppointment(input: { patientId: string; serviceId: string; start: Date; end: Date; source: string }) {
  const { data, error } = await supabase
    .from('appointments')
    .insert({ patient_id: input.patientId, service_id: input.serviceId, start_time: input.start.toISOString(), end_time: input.end.toISOString(), source: input.source, status: 'pending' })
    .select()
    .single();
  if (error) throw error;
  return data;
}

export async function cancelAppointment(id: string) {
  const { data, error } = await supabase
    .from('appointments')
    .update({ status: 'cancelled', updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
}
