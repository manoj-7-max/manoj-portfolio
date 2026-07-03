import { Hero } from "@/components/Hero";
export const dynamic = 'force-dynamic';
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Certificates } from "@/components/Certificates";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { getProjects } from "@/actions/projectActions";
import { getSkills } from "@/actions/skillActions";
import { getExperiences } from "@/actions/experienceActions";
import { getTestimonials } from "@/actions/testimonialActions";
import { getCertificates } from "@/actions/certificateActions";
import { getBlogs } from "@/actions/blogActions";

export default async function Home() {
  const projects = await getProjects();
  const skills = await getSkills();
  const experiences = await getExperiences();
  const testimonials = await getTestimonials();
  const certificates = await getCertificates();
  const blogPosts = await getBlogs();

  return (
    <div className="flex flex-col gap-0 w-full overflow-hidden">
      <Hero />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Services />
      <Testimonials testimonials={testimonials} />
      <Certificates certificates={certificates} />
      <Blog posts={blogPosts} />
      <Contact />
    </div>
  );
}

