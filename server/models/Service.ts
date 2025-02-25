import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  frequency: {
    type: String,
    enum: ["einmalig", "quartalsweise", "monatlich", "jährlich"],
    required: true,
  },
  serviceType: { type: String, required: true },
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
