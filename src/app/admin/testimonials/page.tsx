import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { getTestimonials } from "@/actions/testimonialActions";
import TestimonialClientView from "./TestimonialClientView";

export default async function AdminTestimonialsPage() {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    redirect("/admin/login");
  }

  const testimonials = await getTestimonials();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Manage Testimonials</h1>
      </div>
      <TestimonialClientView initialTestimonials={testimonials} />
    </div>
  );
}
