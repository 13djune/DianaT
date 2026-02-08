// src/geminiService.ts

export const getEmpatheticMessage = async (situation: string): Promise<string> => {
  // 1. Recuperamos la clave segura
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  if (!API_KEY) {
    console.error("⛔ FALTA LA CLAVE: Revisa tu archivo .env.local");
    return "Mi brújula interna necesita calibración (Falta API Key).";
  }

  // 2. Usamos el modelo rápido que te funcionó
  const MODEL_NAME = "gemini-2.5-flash"; 
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Actúa como Diana, una compañera sabia del proyecto DianaT.
            
            TU PERSONALIDAD:
            - Positiva y cálida, pero REALISTA. 
            - PROHIBIDO el estilo "Mr. Wonderful" (nada de "tú puedes con todo" vacío).
            - Si hay dolor, valídalo antes de dar luz.
            
            TU MISIÓN:
            Responde a: "${situation}" en máximo 2 frases.
            
            INSTRUCCIÓN ESPECIAL:
            - Si encaja bien, incluye una cita famosa, un proverbio o una frase de "sobre de azúcar" que tenga sentido con lo que cuenta la usuaria.
            - Si no pega una cita (con el nombre del autor/a), da un consejo breve y reconfortante.
            
            Ejemplos de tono deseado:
            - "'Pies, para qué los quiero si tengo alas para volar.' - Frida Kahlo:  Hoy descansa, mañana vuelas."
            - "Está bien no estar bien. Las tormentas también riegan las flores."`
          }]
        }]
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Error de Google:", errorData);
      return "A veces las palabras se atascan, pero el cariño está aquí. Inténtalo de nuevo.";
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    // Limpieza final de texto
    return text?.replace(/^"|"$/g, '').trim() || "Respira. Todo pasa.";

  } catch (error) {
    console.error("❌ Error de conexión:", error);
    return "La conexión falló, pero tú sigues conectada a la vida. Prueba otra vez.";
  }
};