"use server";

import connectDB from "@/lib/db";
import Skill from "@/models/Skill";
import { revalidatePath } from "next/cache";

export async function getSkills() {
  await connectDB();
  const skills = await Skill.find().sort({ order: 1, createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(skills));
}

export async function createSkill(formData: FormData) {
  await connectDB();
  
  const category = formData.get("category") as string;
  const name = formData.get("name") as string;
  const order = Number(formData.get("order")) || 0;

  const newSkill = await Skill.create({
    category,
    name,
    order
  });

  revalidatePath("/admin/skills");
  revalidatePath("/");
  
  return { success: true, skill: JSON.parse(JSON.stringify(newSkill)) };
}

export async function updateSkill(id: string, formData: FormData) {
  await connectDB();
  
  const category = formData.get("category") as string;
  const name = formData.get("name") as string;
  const order = Number(formData.get("order")) || 0;

  const updatedSkill = await Skill.findByIdAndUpdate(
    id, 
    { category, name, order },
    { new: true }
  );

  revalidatePath("/admin/skills");
  revalidatePath("/");

  return { success: true, skill: JSON.parse(JSON.stringify(updatedSkill)) };
}

export async function deleteSkill(id: string) {
  await connectDB();
  await Skill.findByIdAndDelete(id);
  
  revalidatePath("/admin/skills");
  revalidatePath("/");
  
  return { success: true };
}
