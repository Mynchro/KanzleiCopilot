import mongoose from "mongoose";
import dotenv from "dotenv";
import Package from "../models/Package";
import { connectDB } from "../db";

dotenv.config({ path: "../.env" });

const seedPackages = async () => {
  await connectDB();

  await Package.insertMany([
    {
      name: "Basis",
      price: 49.99,
      description: "A standard Package for the basic needs.",
    },
    {
      name: "Premium",
      price: 99.99,
      description: "A premium Package, individually set for your needs",
    },
    {
      name: "Enterprise",
      price: 199.99,
      description: "Our flagship with everything you can imagine!",
    },
  ]);

  console.log("Packages were added!");
  mongoose.connection.close();
};

seedPackages().catch((err) => console.error("Error while seeding:", err));
