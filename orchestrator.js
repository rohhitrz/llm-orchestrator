import askOpenAI from "./providers/openai.js";
import askClaude from "./providers/anthropic.js";
import askGemini from "./providers/gemini.js";

export default async function orchestrate(question) {
  const [openai, claude, gemini] = await Promise.all([
    askOpenAI(question),
    askClaude(question),
    askGemini(question),
  ]);

  return {
    openai,
    claude,
    gemini,
  };
}
