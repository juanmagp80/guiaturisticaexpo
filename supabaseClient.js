import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uongaafiuikzrnhngxya.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvbmdhYWZpdWlrenJuaG5neHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzODQ2NjAsImV4cCI6MjA0MDk2MDY2MH0.TqolZNFxUYbcJdHtqc5w0ts2U_2QIY6rQJdvmqrNfl4'; // Reemplaza con tu clave anónima

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
