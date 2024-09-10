import { createClient } from '@supabase/supabase-js';
import axios from 'axios';

// Reemplaza con tus credenciales de Supabase
const supabaseUrl = 'https://uongaafiuikzrnhngxya.supabase.co'; // Reemplaza con tu URL de Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvbmdhYWZpdWlrenJuaG5neHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzODQ2NjAsImV4cCI6MjA0MDk2MDY2MH0.TqolZNFxUYbcJdHtqc5w0ts2U_2QIY6rQJdvmqrNfl4'; // Reemplaza con
const supabase = createClient(supabaseUrl, supabaseKey);

const apiUrl = 'http://localhost:3000'; // Cambia esto a la URL de tu backend

export const generateItinerary = async (city, days) => {
    try {
        const response = await axios.post(`${apiUrl}/generate-itinerary`, { city, days });
        return response.data.itinerary;
    } catch (error) {
        console.error('Error al generar el itinerario:', error);
        throw error;
    }
};
// Función para obtener recomendaciones
export const getRecommendations = async () => {
    const { data, error } = await supabase
        .from('recommendations') // Nombre de la tabla
        .select('*'); // Ajusta la selección según las columnas de tu tabla

    if (error) {
        console.error('Error al obtener recomendaciones:', error);
        throw error;
    }

    return data;
};

// Función para obtener el perfil del usuario
export const getProfile = async () => {
    const { data, error } = await supabase
        .from('profiles') // Reemplaza con el nombre correcto de tu tabla
        .select('*')
        .single(); // Obtiene un solo perfil

    if (error) {
        throw error;
    }

    return data;
};

// Función para actualizar el perfil del usuario
export const updateProfile = async (profile) => {
    const { data, error } = await supabase
        .from('profiles') // Reemplaza con el nombre correcto de tu tabla
        .upsert(profile); // Utiliza 'upsert' para insertar o actualizar

    if (error) {
        throw error;
    }

    return data;
};
