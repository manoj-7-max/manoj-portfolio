"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, BrainCircuit, Layout, Blocks, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const roles = [
  { icon: <Code2 className="w-8 h-8 text-blue-400" />, title: "Full Stack Developer", description: "Building scalable web applications from front to back." },
  { icon: <BrainCircuit className="w-8 h-8 text-purple-400" />, title: "AI Enthusiast", description: "Integrating LLMs and intelligent agents into products." },
  { icon: <Layout className="w-8 h-8 text-pink-400" />, title: "UI/UX Designer", description: "Crafting beautiful, intuitive, and premium interfaces." },
  { icon: <Blocks className="w-8 h-8 text-emerald-400" />, title: "SaaS Developer", description: "Architecting multi-tenant platforms and SaaS solutions." },
  { icon: <Cpu className="w-8 h-8 text-orange-400" />, title: "Automation Engineer", description: "Streamlining enterprise workflows with smart automation." },
];

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden" ref={containerRef}>
      {/* Background gradients */}
      <div className="absolute top-1/2 -left-64 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          style={{ opacity, y }}
          className="flex flex-col items-center text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium border rounded-full text-primary border-primary/30 bg-primary/5">
            About Me
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Architecting the Future
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            I am a passionate technologist dedicated to building premium software solutions. 
            From conceptualizing UI/UX designs to deploying scalable AI-integrated architectures, 
            I bridge the gap between complex engineering and elegant human experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={index === roles.length - 1 ? "md:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-2xl bg-black/40 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {role.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{role.title}</h3>
                  <p className="text-muted-foreground">{role.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
