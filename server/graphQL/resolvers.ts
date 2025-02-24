import User from "../models/User";
import Package from "../models/Package";
import openai from "../openAI/config";

interface UserInput {
  name: string;
  email: string;
  selectedPackage: string;
}

export const resolvers = {
  Query: {
    getUser: async (_: any, { id }: { id: string }) => {
      return await User.findById(id);
    },
    getPackages: async () => {
      return await Package.find();
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email, selectedPackage }: UserInput) => {
      const user = new User({ name, email, selectedPackage });
      await user.save();
      return user;
    },
    updateUserPackage: async (
      _: any,
      { id, selectedPackage }: { id: string; selectedPackage: string }
    ) => {
      const user = await User.findById(id);
      if (!user) {
        throw new Error("User not found");
      }
      user.selectedPackage = selectedPackage;
      await user.save();
      return user;
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
