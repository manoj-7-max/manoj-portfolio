import mongoose from "mongoose";

const CertificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: String, required: true },
  image: { type: String, required: true }, // URL to certificate image
  link: { type: String }, // Verification link
  order: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.models.Certificate || mongoose.model("Certificate", CertificateSchema);
