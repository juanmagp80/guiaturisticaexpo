import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-supabase-url.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseAnonKey = 'your-anon-key'; // Reemplaza con tu clave anónima

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
