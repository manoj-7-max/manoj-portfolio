import mongoose from "mongoose";

const SkillSchema = new mongoose.Schema({
  category: { type: String, required: true }, // e.g. Frontend, Backend, AI
  name: { type: String, required: true },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
