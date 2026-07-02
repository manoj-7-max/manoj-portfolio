import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getCertificates } from "@/actions/certificateActions";
import CertificateClientView from "./CertificateClientView";

export default async function AdminCertificatesPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }

  const certificates = await getCertificates();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Manage Certificates</h1>
      </div>
      <CertificateClientView initialCertificates={certificates} />
    </div>
  );
}
