"use server";

import connectDB from "@/lib/db";
import Message from "@/models/Message";
import { revalidatePath } from "next/cache";

export async function getMessages() {
  await connectDB();
  const messages = await Message.find().sort({ createdAt: -1 }).lean();
  return JSON.parse(JSON.stringify(messages));
}

export async function deleteMessage(id: string) {
  await connectDB();
  await Message.findByIdAndDelete(id);
  
  revalidatePath("/admin/messages");
  
  return { success: true };
}

export async function markMessageRead(id: string) {
  await connectDB();
  await Message.findByIdAndUpdate(id, { read: true });
  
  revalidatePath("/admin/messages");
  
  return { success: true };
}
