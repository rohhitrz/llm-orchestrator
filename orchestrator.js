import askOpenAI from "./providers/openai.js";
import askClaude from "./providers/anthropic.js";
import askGemini from "./providers/gemini.js";

export default async function orchestrate(question) {
  const results = await Promise.allSettled([
    askOpenAI(question),
    askClaude(question),
    askGemini(question),
  ]);

  return {
    openai: (results[0].status === "fulfilled"
      ? results[0].value
      : { error: results[0].reason.message }),
    claude: (results[1].status === "fulfilled"
      ? results[1].value
      : { error: results[1].reason.message }),
    gemini: (results[2].status === "fulfilled"
      ? results[2].value
      : { error: results[2].reason.message }),
  };
}
