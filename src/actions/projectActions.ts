"use server";

import connectDB from "@/lib/db";
import Project from "@/models/Project";
import { revalidatePath } from "next/cache";

export async function getProjects() {
  await connectDB();
  const projects = await Project.find().sort({ order: 1, createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(projects));
}

export async function createProject(formData: FormData) {
  await connectDB();
  
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as string;
  const category = formData.get("category") as string;
  const features = (formData.get("features") as string)?.split(",").map(f => f.trim()).filter(Boolean) || [];
  const tech = (formData.get("tech") as string)?.split(",").map(t => t.trim()).filter(Boolean) || [];
  const githubLink = formData.get("githubLink") as string;
  const liveLink = formData.get("liveLink") as string;
  const order = Number(formData.get("order")) || 0;

  const newProject = await Project.create({
    title,
    description,
    image,
    category,
    features,
    tech,
    githubLink,
    liveLink,
    order
  });

  revalidatePath("/admin/projects");
  revalidatePath("/");
  
  return { success: true, project: JSON.parse(JSON.stringify(newProject)) };
}

export async function updateProject(id: string, formData: FormData) {
  await connectDB();
  
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const image = formData.get("image") as string;
  const category = formData.get("category") as string;
  const features = (formData.get("features") as string)?.split(",").map(f => f.trim()).filter(Boolean) || [];
  const tech = (formData.get("tech") as string)?.split(",").map(t => t.trim()).filter(Boolean) || [];
  const githubLink = formData.get("githubLink") as string;
  const liveLink = formData.get("liveLink") as string;
  const order = Number(formData.get("order")) || 0;

  const updatedProject = await Project.findByIdAndUpdate(
    id, 
    { title, description, image, category, features, tech, githubLink, liveLink, order },
    { new: true }
  );

  revalidatePath("/admin/projects");
  revalidatePath("/");

  return { success: true, project: JSON.parse(JSON.stringify(updatedProject)) };
}

export async function deleteProject(id: string) {
  await connectDB();
  await Project.findByIdAndDelete(id);
  
  revalidatePath("/admin/projects");
  revalidatePath("/");
  
  return { success: true };
}
