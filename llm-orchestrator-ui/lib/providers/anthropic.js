import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({
    apiKey: process.env["ANTHROPIC_API_KEY"] // This is the default and can be omitted
  });
 
  async function askClaude(question=''){
  const response = await client.messages.create({
    max_tokens: 1024,
    messages: [{ role: "user", content: question }],
    model: "claude-haiku-4-5"
  });

  const resultClaude=response.content[0].text
  return{
    provider:"Claude",
    model:"claude-haiku-4-5",
    answer:resultClaude
  }
}

export default askClaude;
