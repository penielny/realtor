import { createClient } from '@supabase/supabase-js';

const PRIVATE_KEY =  process.env['SUPABASE_KEY']!
const PROJECT_URL =  process.env['SUPABASE_URL']!

const supabaseClient = createClient(PROJECT_URL, PRIVATE_KEY);


export default supabaseClient;
