import {GoogleGenAI} from '@google/genai';

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;


async function askGemini(question='') {
  const ai = new GoogleGenAI({vertexai: false, apiKey: GEMINI_API_KEY});
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: question,
  });
  
  return {
    provider: "Gemini",
    model: "gemini-2.5-flash",
    answer: response.text
};
}



export default askGemini;