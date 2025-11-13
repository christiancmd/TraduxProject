import { GoogleGenAI } from "@google/genai";

const apiKey1 = import.meta.env.VITE_GOOGLE_API_KEY1;
const apiKey2 = import.meta.env.VITE_GOOGLE_API_KEY2;

if (!apiKey1 || !apiKey2) {
  throw new Error("Una o ambas API keys estan ausentes");
}

let apiUsage = true; // Estado de alternancia

function getApi(): GoogleGenAI {
  const apiKey = apiUsage ? apiKey1 : apiKey2;
  apiUsage = !apiUsage; // alterna para la próxima vez
  
  return new GoogleGenAI({apiKey})
}

export async function main(rawText:string) {

    const ai = getApi();

    const prompt = `Traduce:${rawText} de spanish al ingles, solo traduccion, sin recomendaciones ni ejemplos`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash-lite",
        contents: prompt,
    });

    const text = response?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
        throw new Error("No se pudo obtener la traducción del modelo");
    }

    return text ?? '';
}

export async function serviceAPI(rawText: string ) {

  try {
    const processText = await main(rawText);

    if (!processText) {
        console.warn("No se recibió texto procesado");
    }
    
    return processText ?? '';

  } catch (error) {
    console.error("Error al procesar el texto:", error);
    // Aseguramos devolver una cadena vacía en caso de fallo para mantener el tipo esperado
    return '';
  }
}

