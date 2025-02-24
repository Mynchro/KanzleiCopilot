import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  const uri = process.env.MONGODB_URI as string;
  if (!uri) {
    throw new Error("❌ Keine MONGODB_URI in .env Datei gefunden!");
  }
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error while connecting:", error);
    process.exit(1);
  }
};
