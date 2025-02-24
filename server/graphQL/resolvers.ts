import Client from "../models/Client";
import Package from "../models/Package";
import openai from "../openAI/config";

interface ClientInput {
  name: string;
  email: string;
}

export const resolvers = {
  Query: {
    getClient: async (_: any, { id }: { id: string }) => {
      return await Client.findById(id);
    },
    getPackages: async () => {
      return await Package.find();
    },
  },
  Mutation: {
    createClient: async (_: any, { name, email }: ClientInput) => {
      const client = new Client({ name, email });
      await client.save();
      return client;
    },
    getTaxAdvice: async (_: any, { question }: { question: string }) => {
      try {
        const response = await openai.chat.completions.create({
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: "Du bist ein KI-Steuerberater.",
            },
            {
              role: "user",
              content: question,
            },
          ],
        });
        return response.choices[0].message.content;
      } catch (error) {
        console.error(error);
        throw new Error("Fehler bei der Kommunikation mit OpenAI.");
      }
    },
  },
};
