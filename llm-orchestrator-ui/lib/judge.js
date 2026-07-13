import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});


export default async function judge(question, responses) {

const system_prompt=`you are an expert Evaluator.
your job is to judge the response providd by different models

you will be given-
1. user questions
2. answers to those questions given by different AI models

Your job is to:
- to evalute each answer for correctness
- check for factual error
- decides which answer is best
- Create one final answer that combines the strengths of the best responses.

Be objective and concise.
`;

const user_prompt = `
Question:
${question}

-----------------------------------

OpenAI
${responses.openai.answer}

-----------------------------------

Claude
${responses.claude.answer}

-----------------------------------

Gemini
${responses.gemini.answer}

-----------------------------------

Return your response in the following format:

Winner:
<Provider Name> in bold and Green in color like it has been passed as test cases passes so they have green with a tick


Reason:
<Why this answer is the best>

Final Answer:
<Your improved final answer>
`;
  const result = await client.messages.create({
    max_tokens: 1024,
    messages: [{
        role:"user",
        content:user_prompt
    }],
    system:system_prompt,
    model: "claude-haiku-4-5",
  });

return result.content[0].text;

}
