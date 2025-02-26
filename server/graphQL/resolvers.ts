import Client from "../models/Client";
import openai from "../openAI/config";
import { Clientform } from "../../client/src/types";
import TaxDuty from "../models/TaxDuty";
import Service from "../models/Service";

export const resolvers = {
  Query: {
    getClients: async () => {
      return await Client.find();
    },
    getTaxDuties: async () => {
      return await TaxDuty.find();
    },
    getServices: async () => {
      return await Service.find();
    },
  },
  Mutation: {
    createClient: async (
      _: any,
      { firstName, lastName, email }: Clientform
    ) => {
      const client = new Client({ firstName, lastName, email });
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
              content:
                "Du bist ein KI-Steuerberater namens KanzleiCoPilot. Sei freundlich, nutze Emojis und frage nach weiteren Fragen. Nutze max 150 Wörter.",
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
    updateClient: async (_: any, { id, input }: { id: string; input: any }) => {
      const client = await Client.findById(id);
      if (!client) {
        throw new Error("Client nicht gefunden");
      }
      if (input.legalForm !== undefined) client.legalForm = input.legalForm;
      if (input.taxDuties !== undefined) client.taxDuties = input.taxDuties;
      if (input.services !== undefined) client.services = input.services;

      await client.save();

      return client;
    },
  },
};
