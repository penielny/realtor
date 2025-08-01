import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

const supabaseUrl = environment.supabaseUrl;
const supabaseKey = environment.supabaseKey;

let supabaseInstance: SupabaseClient | null = null;

if (!supabaseInstance) {
  supabaseInstance = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
}

export const supabase = supabaseInstance;
