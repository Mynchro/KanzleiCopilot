import mongoose from "mongoose";
import dotenv from "dotenv";
import TaxDuty from "../models/TaxDuty";
import { connectDB } from "../db";

dotenv.config({ path: "../.env" });

const taxDuties = [
  {
    name: "Umsatzsteuer",
    description:
      "Abführung der Umsatzsteuer auf Einnahmen aus freiberuflicher Tätigkeit",
    frequency: "monatlich",
    amount: 19,
    dueDate: new Date("2025-03-10"),
  },
  {
    name: "Einkommensteuer",
    description: "Vorauszahlung auf die Einkommensteuer für den Freiberufler",
    frequency: "jährlich",
    amount: 20,
    dueDate: new Date("2025-05-31"),
  },
  {
    name: "Gewerbesteuer",
    description: "Vorauszahlung auf die Gewerbesteuer für Gewerbetreibende",
    frequency: "quartalsweise",
    amount: 10,
    dueDate: new Date("2025-04-15"),
  },
];

const seedTaxDuties = async () => {
  await connectDB();

  await TaxDuty.insertMany(taxDuties);

  console.log("Packages were added!");
  mongoose.connection.close();
};

seedTaxDuties().catch((err) => console.error("Error while seeding:", err));
