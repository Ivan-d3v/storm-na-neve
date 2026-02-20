
import { GoogleGenAI } from "@google/genai";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  async getHistoricalContext(topic: string, eventDetails: string, lat?: number, lng?: number): Promise<{text: string, sources?: any[]}> {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Ты - нейтральный исторический эксперт по революционному Петрограду 1917 года. 
        Событие: "${topic}". Контекст: "${eventDetails}".
        Расскажи подробнее о социальных причинах, личностях и значении этого места для истории города. 
        Используй инструменты для проверки фактов. Ответ на русском языке.`,
        config: {
          tools: [{ googleMaps: {} }],
          toolConfig: {
            retrievalConfig: {
              latLng: lat && lng ? { latitude: lat, longitude: lng } : undefined
            }
          },
          temperature: 0.5,
        }
      });

      const text = response.text || "Извините, не удалось получить информацию.";
      const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks;

      return { text, sources };
    } catch (error) {
      console.error("Gemini API Error:", error);
      return { text: "Произошла ошибка при подключении к архиву знаний." };
    }
  }
}

export const geminiService = new GeminiService();
