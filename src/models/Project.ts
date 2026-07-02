import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String }, // Added image
  category: { type: String }, // Added category (e.g. SaaS, Web, AI)
  features: [{ type: String }],
  tech: [{ type: String }],
  githubLink: { type: String },
  liveLink: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
