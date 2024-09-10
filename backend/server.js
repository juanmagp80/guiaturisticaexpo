const express = require('express');
const { Client } = require('@supabase/supabase-js');
const OpenAI = require('openai'); // Asegúrate de instalar el paquete correspondiente

const app = express();
app.use(express.json());

// Configuración de Supabase
const supabaseUrl = 'https://uongaafiuikzrnhngxya.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVvbmdhYWZpdWlrenJuaG5neHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzODQ2NjAsImV4cCI6MjA0MDk2MDY2MH0.TqolZNFxUYbcJdHtqc5w0ts2U_2QIY6rQJdvmqrNfl4';
const supabase = new Client(supabaseUrl, supabaseKey);

// Configuración de OpenAI
const openai = new OpenAI({ apiKey: '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' });

// Controlador para generar itinerarios
const generateItinerary = async (req, res) => {
    const { city, days } = req.body;

    try {
        const prompt = `Genera un itinerario para visitar ${city} durante ${days} días.`;
        const response = await openai.completions.create({
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 150
        });

        const itinerary = response.choices[0].text;

        const { data, error } = await supabase
            .from('itineraries')
            .insert([{ city, days, itinerary }]);

        if (error) {
            return res.status(500).json({ error: error.message });
        }

        res.json({ itinerary: data[0] });
    } catch (err) {
        res.status(500).json({ error: 'Error al generar el itinerario: ' + err.message });
    }
};

// Definir rutas
app.post('/generate-itinerary', generateItinerary);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
