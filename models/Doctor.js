import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  experience: Number,
  location: String,
  fees: Number,
  education: String,
  services: [String],
  rating: Number,
});

export default mongoose.model("Doctor", doctorSchema);