import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getSkills } from "@/actions/skillActions";
import SkillClientView from "./SkillClientView";

export default async function AdminSkillsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }

  const skills = await getSkills();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Manage Skills</h1>
      </div>
      <SkillClientView initialSkills={skills} />
    </div>
  );
}
