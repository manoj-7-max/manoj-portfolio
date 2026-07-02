import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getBlogs } from "@/actions/blogActions";
import BlogClientView from "./BlogClientView";

export default async function AdminBlogPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }

  const blogs = await getBlogs();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Manage Blog Posts</h1>
      </div>
      <BlogClientView initialBlogs={blogs} />
    </div>
  );
}
