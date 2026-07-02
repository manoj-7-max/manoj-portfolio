"use server";

import connectDB from "@/lib/db";
import Blog from "@/models/Blog";
import { revalidatePath } from "next/cache";

export async function getBlogs() {
  await connectDB();
  const blogs = await Blog.find().sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(blogs));
}

export async function createBlog(formData: FormData) {
  await connectDB();
  
  const title = formData.get("title") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const coverImage = formData.get("coverImage") as string;
  const tags = (formData.get("tags") as string)?.split(",").map(t => t.trim()).filter(Boolean) || [];
  const published = formData.get("published") === "on";

  const newBlog = await Blog.create({
    title,
    excerpt,
    content,
    coverImage,
    tags,
    published,
    slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
  });

  revalidatePath("/admin/blog");
  revalidatePath("/");
  
  return { success: true, blog: JSON.parse(JSON.stringify(newBlog)) };
}

export async function updateBlog(id: string, formData: FormData) {
  await connectDB();
  
  const title = formData.get("title") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const coverImage = formData.get("coverImage") as string;
  const tags = (formData.get("tags") as string)?.split(",").map(t => t.trim()).filter(Boolean) || [];
  const published = formData.get("published") === "on";

  const updatedBlog = await Blog.findByIdAndUpdate(
    id, 
    { 
      title, 
      excerpt, 
      content, 
      coverImage, 
      tags, 
      published,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '') 
    },
    { new: true }
  );

  revalidatePath("/admin/blog");
  revalidatePath("/");

  return { success: true, blog: JSON.parse(JSON.stringify(updatedBlog)) };
}

export async function deleteBlog(id: string) {
  await connectDB();
  await Blog.findByIdAndDelete(id);
  
  revalidatePath("/admin/blog");
  revalidatePath("/");
  
  return { success: true };
}
