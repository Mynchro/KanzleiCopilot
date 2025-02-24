import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  type: {
    type: String,
    enum: ["Freiberufler", "GmbH", "Einzelunternehmer", "UG", "AG"],
  },
  legalForm: {
    type: String,
    enum: ["GmbH", "UG", "AG", "Einzelunternehmen", "GbR", "Freiberufler"],
  },
  taxDuties: [{ type: mongoose.Schema.Types.ObjectId, ref: "TaxDuty" }],
  requestedServices: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
});

const Client = mongoose.model("Client", clientSchema);

export default Client;
