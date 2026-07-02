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

export default function Home() {
  return (
    <div className="flex flex-col gap-0 w-full overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      <Testimonials />
      <Certificates />
      <Blog />
      <Contact />
    </div>
  );
}

