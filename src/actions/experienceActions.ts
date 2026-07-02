"use server";

import connectDB from "@/lib/db";
import Experience from "@/models/Experience";
import { revalidatePath } from "next/cache";

export async function getExperiences() {
  await connectDB();
  const experiences = await Experience.find().sort({ order: 1, createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(experiences));
}

export async function createExperience(formData: FormData) {
  await connectDB();
  
  const title = formData.get("title") as string;
  const company = formData.get("company") as string;
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;
  const description = formData.get("description") as string;
  const order = Number(formData.get("order")) || 0;

  const newExperience = await Experience.create({
    title,
    company,
    startDate,
    endDate,
    description,
    order
  });

  revalidatePath("/admin/experience");
  revalidatePath("/");
  
  return { success: true, experience: JSON.parse(JSON.stringify(newExperience)) };
}

export async function updateExperience(id: string, formData: FormData) {
  await connectDB();
  
  const title = formData.get("title") as string;
  const company = formData.get("company") as string;
  const startDate = formData.get("startDate") as string;
  const endDate = formData.get("endDate") as string;
  const description = formData.get("description") as string;
  const order = Number(formData.get("order")) || 0;

  const updatedExperience = await Experience.findByIdAndUpdate(
    id, 
    { title, company, startDate, endDate, description, order },
    { new: true }
  );

  revalidatePath("/admin/experience");
  revalidatePath("/");

  return { success: true, experience: JSON.parse(JSON.stringify(updatedExperience)) };
}

export async function deleteExperience(id: string) {
  await connectDB();
  await Experience.findByIdAndDelete(id);
  
  revalidatePath("/admin/experience");
  revalidatePath("/");
  
  return { success: true };
}
