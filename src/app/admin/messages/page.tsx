import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getMessages } from "@/actions/messageActions";
import MessageClientView from "./MessageClientView";

export default async function AdminMessagesPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }

  const messages = await getMessages();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Messages</h1>
      </div>
      <MessageClientView initialMessages={messages} />
    </div>
  );
}
