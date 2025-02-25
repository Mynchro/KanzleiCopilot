import mongoose from "mongoose";

const taxDutySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  frequency: {
    type: String,
    enum: ["monatlich", "quartalsweise", "jährlich"],
    required: true,
  },
  amount: { type: Number, required: true },
  dueDate: { type: Date, required: true },
});

const TaxDuty = mongoose.model("TaxDuty", taxDutySchema);

export default TaxDuty;
