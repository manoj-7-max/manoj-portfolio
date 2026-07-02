"use server";

import connectDB from "@/lib/db";
import Testimonial from "@/models/Testimonial";
import { revalidatePath } from "next/cache";

export async function getTestimonials() {
  await connectDB();
  const testimonials = await Testimonial.find().sort({ order: 1, createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(testimonials));
}

export async function createTestimonial(formData: FormData) {
  await connectDB();
  
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const content = formData.get("content") as string;
  const avatar = formData.get("avatar") as string;
  const order = Number(formData.get("order")) || 0;

  const newTestimonial = await Testimonial.create({
    name,
    role,
    content,
    avatar,
    order
  });

  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  
  return { success: true, testimonial: JSON.parse(JSON.stringify(newTestimonial)) };
}

export async function updateTestimonial(id: string, formData: FormData) {
  await connectDB();
  
  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const content = formData.get("content") as string;
  const avatar = formData.get("avatar") as string;
  const order = Number(formData.get("order")) || 0;

  const updatedTestimonial = await Testimonial.findByIdAndUpdate(
    id, 
    { name, role, content, avatar, order },
    { new: true }
  );

  revalidatePath("/admin/testimonials");
  revalidatePath("/");

  return { success: true, testimonial: JSON.parse(JSON.stringify(updatedTestimonial)) };
}

export async function deleteTestimonial(id: string) {
  await connectDB();
  await Testimonial.findByIdAndDelete(id);
  
  revalidatePath("/admin/testimonials");
  revalidatePath("/");
  
  return { success: true };
}
