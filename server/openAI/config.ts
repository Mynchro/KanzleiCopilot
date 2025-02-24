import { config } from "dotenv";
import OpenAI from "openai";

config({ path: "../.env" });

const openaiApiKey: string | undefined = process.env.OPENAI_API_KEY;
console.log("apiKey", openaiApiKey);

if (!openaiApiKey) {
  console.error("OPENAI_API_KEY is not set.");
  process.exit(1);
}

const openai = new OpenAI({
  apiKey: openaiApiKey,
});

export default openai;
