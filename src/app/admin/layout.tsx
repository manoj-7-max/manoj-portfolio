import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, FolderKanban, Code, MessageSquare, LogOut } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Let the login page handle itself without layout, or redirect if not on login
    // We'll actually handle this inside the individual pages, but doing it in layout is fine if we exclude login.
    // Wait, if we are at /admin/login, this layout applies. We should probably not wrap the login page in the dashboard layout.
  }

  return (
    <div className="min-h-screen bg-background flex">
      {session && (
        <aside className="w-64 border-r border-white/10 bg-black/20 p-6 flex flex-col gap-8 hidden md:flex">
          <div className="font-bold text-xl">Admin Panel</div>
          <nav className="flex flex-col gap-2 flex-grow">
            <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
              <LayoutDashboard className="w-5 h-5" /> Dashboard
            </Link>
            <Link href="/admin/projects" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
              <FolderKanban className="w-5 h-5" /> Projects
            </Link>
            <Link href="/admin/skills" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
              <Code className="w-5 h-5" /> Skills
            </Link>
            <Link href="/admin/messages" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
              <MessageSquare className="w-5 h-5" /> Messages
            </Link>
          </nav>
          <div className="mt-auto">
            <a href="/api/auth/signout" className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-500 hover:bg-red-500/10 transition-colors">
              <LogOut className="w-5 h-5" /> Logout
            </a>
          </div>
        </aside>
      )}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
