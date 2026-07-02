import mongoose from "mongoose";

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true }, // e.g., CEO at Company
  content: { type: String, required: true },
  avatar: { type: String }, // URL to avatar image
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);
