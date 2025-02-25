import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  legalForm: {
    type: String,
    enum: ["GmbH", "UG", "AG", "Einzelunternehmen", "GbR", "Freiberufler"],
  },
  taxDuties: [{ type: mongoose.Schema.Types.ObjectId, ref: "TaxDuty" }],
  requestedServices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
  createdAt: { type: Date, default: Date.now },
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
