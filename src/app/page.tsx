import { Hero } from "@/components/Hero";
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

export default async function Home() {
  const projects = await getProjects();
  const skills = await getSkills();
  const experiences = await getExperiences();

  return (
    <div className="flex flex-col gap-0 w-full overflow-hidden">
      <Hero />
      <About />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Services />
      <Testimonials />
      <Certificates />
      <Blog />
      <Contact />
    </div>
  );
}

