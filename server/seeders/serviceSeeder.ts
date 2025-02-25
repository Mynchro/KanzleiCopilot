import Service from "../models/Service";
import mongoose from "mongoose";

import dotenv from "dotenv";

import { connectDB } from "../db";

dotenv.config({ path: "../.env" });

const services = [
  {
    name: "Steuerberatung",
    description:
      "Beratung und Unterstützung bei der Steuererklärung und Steueroptimierung",
    price: 200,
    frequency: "einmalig",
    serviceType: "Beratung",
  },
  {
    name: "Buchhaltung",
    description: "Monatliche oder quartalsweise Buchführung für Freiberufler",
    price: 150,
    frequency: "monatlich",
    serviceType: "Buchhaltung",
  },
  {
    name: "Umsatzsteuer-Voranmeldung",
    description:
      "Erstellung und Abgabe der monatlichen oder vierteljährlichen Umsatzsteuer-Voranmeldung",
    price: 50,
    frequency: "quartalsweise",
    serviceType: "Steuererklärung",
  },
  {
    name: "Einkommensteuererklärung",
    description:
      "Hilfe bei der Erstellung und Abgabe der jährlichen Einkommensteuererklärung",
    price: 300,
    frequency: "jährlich",
    serviceType: "Steuererklärung",
  },
];

const seedServices = async () => {
  await connectDB();

  await Service.insertMany(services);

  console.log("Packages were added!");
  mongoose.connection.close();
};

seedServices().catch((err) => console.error("Error while seeding:", err));
