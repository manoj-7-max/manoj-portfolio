import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getExperiences } from "@/actions/experienceActions";
import ExperienceClientView from "./ExperienceClientView";

export default async function AdminExperiencePage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }

  const experiences = await getExperiences();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Manage Experience</h1>
      </div>
      <ExperienceClientView initialExperiences={experiences} />
    </div>
  );
}
