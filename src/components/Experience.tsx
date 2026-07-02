"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2020 - Present",
    description: "Developing custom web applications, SaaS platforms, and enterprise solutions for global clients. Focused on scalable architectures and premium user experiences.",
    highlights: ["Delivered 15+ full-stack projects", "Implemented custom AI integrations", "Maintained 100% client satisfaction"],
  },
  {
    role: "AI Solution Builder",
    company: "Tech Innovations Inc.",
    period: "2022 - 2023",
    description: "Architected AI-driven workflows and integrated Large Language Models into existing business processes to automate repetitive tasks.",
    highlights: ["Reduced manual processing by 40%", "Built internal tools using Next.js & OpenAI", "Optimized database queries"],
  },
  {
    role: "Software Developer",
    company: "Startup Nexus",
    period: "2021 - 2022",
    description: "Core team member responsible for building the MVP of a B2B SaaS platform. Handled frontend architecture and backend API design.",
    highlights: ["Led frontend development with React", "Designed RESTful APIs", "Set up CI/CD pipelines"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium border rounded-full text-primary border-primary/30 bg-primary/5">
            Career Journey
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Professional Experience
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            My track record of building products and adding value to organizations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/10 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 items-start ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 mt-1.5 md:mt-0 w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.8)] z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 pl-6 md:pl-0 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                    <div className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-2 mb-4 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary hidden md:block" />
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-medium text-zinc-300 mb-4">{exp.company}</h4>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <ul className={`space-y-2 ${index % 2 !== 0 ? "md:inline-block md:text-right" : ""}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className={`flex items-start gap-2 text-sm text-zinc-400 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
                          <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
