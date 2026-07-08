import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();
const client = new OpenAI();

async function askOpenAI(question = "") {
  const response = await client.responses.create({
    model: "gpt-4o-mini",
    input: question,
  });
  const resultOpenAI = response.output_text;
  return{
    provider:"OpenAI",
    model:"gpt-4o-mini",
    answer:resultOpenAI
  }
}

export default askOpenAI

