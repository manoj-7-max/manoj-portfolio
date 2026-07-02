import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true }, // Markdown or HTML content
  coverImage: { type: String },
  published: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
