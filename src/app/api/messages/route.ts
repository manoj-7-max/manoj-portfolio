import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Message from "@/models/Message";

export async function GET() {
  try {
    await connectDB();
    const messages = await Message.find({}).sort({ createdAt: -1 });
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch messages" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const message = await Message.create(body);
    return NextResponse.json({ success: true, message }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to create message" }, { status: 500 });
  }
}
