import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getProjects } from "@/actions/projectActions";
import ProjectClientView from "./ProjectClientView";

export default async function AdminProjectsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }

  const projects = await getProjects();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Manage Projects</h1>
      </div>
      <ProjectClientView initialProjects={projects} />
    </div>
  );
}
