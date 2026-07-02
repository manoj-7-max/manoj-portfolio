"use server";

import connectDB from "@/lib/db";
import Certificate from "@/models/Certificate";
import { revalidatePath } from "next/cache";

export async function getCertificates() {
  await connectDB();
  const certificates = await Certificate.find().sort({ order: 1, createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(certificates));
}

export async function createCertificate(formData: FormData) {
  await connectDB();
  
  const title = formData.get("title") as string;
  const issuer = formData.get("issuer") as string;
  const date = formData.get("date") as string;
  const link = formData.get("link") as string;
  const image = formData.get("image") as string;
  const order = Number(formData.get("order")) || 0;

  const newCertificate = await Certificate.create({
    title,
    issuer,
    date,
    link,
    image,
    order
  });

  revalidatePath("/admin/certificates");
  revalidatePath("/");
  
  return { success: true, certificate: JSON.parse(JSON.stringify(newCertificate)) };
}

export async function updateCertificate(id: string, formData: FormData) {
  await connectDB();
  
  const title = formData.get("title") as string;
  const issuer = formData.get("issuer") as string;
  const date = formData.get("date") as string;
  const link = formData.get("link") as string;
  const image = formData.get("image") as string;
  const order = Number(formData.get("order")) || 0;

  const updatedCertificate = await Certificate.findByIdAndUpdate(
    id, 
    { title, issuer, date, link, image, order },
    { new: true }
  );

  revalidatePath("/admin/certificates");
  revalidatePath("/");

  return { success: true, certificate: JSON.parse(JSON.stringify(updatedCertificate)) };
}

export async function deleteCertificate(id: string) {
  await connectDB();
  await Certificate.findByIdAndDelete(id);
  
  revalidatePath("/admin/certificates");
  revalidatePath("/");
  
  return { success: true };
}
