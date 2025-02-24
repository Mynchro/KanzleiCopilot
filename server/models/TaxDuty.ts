import mongoose from "mongoose";

const taxDutySchema = new mongoose.Schema({
  name: String,
  description: String,
  frequency: { type: String, enum: ["monatlich", "quartalsweise", "jährlich"] },
});

const TaxDuty = mongoose.model("TaxDuty", taxDutySchema);

export default TaxDuty;
