"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

const featuredProjects = [
  {
    title: "ID Card Generator Pro",
    description: "A professional Canva-like ID card generation software supporting bulk Excel import, visual editing, drag-and-drop design, direct printing, photo management, export, and enterprise licensing.",
    features: ["Bulk Create", "Excel Import", "Visual Editor", "Direct Print", "Multiple Templates", "QR Code", "Barcode", "Licensing System"],
    tech: ["Next.js", "Electron", "Node.js", "MongoDB"],
    gradient: "from-blue-600/20 to-purple-600/20",
  },
  {
    title: "KVCET Department ERP",
    description: "A complete ERP platform for educational institutions with separate portals for HOD, Faculty, Students, Attendance, Circulars, Complaints, Reports, Analytics, and Administration.",
    features: ["Multi-role Login", "Dashboard", "Attendance", "Student Management", "Faculty Portal", "Reports", "Notifications"],
    tech: ["React", "Node.js", "PostgreSQL", "Express"],
    gradient: "from-emerald-600/20 to-teal-600/20",
  },

  {
    title: "Restaurant Management System",
    description: "Cloud-based restaurant management software with POS, Kitchen Display, QR Ordering, Inventory, Billing, Reports, and Customer Management.",
    features: ["POS System", "QR Ordering", "Inventory Tracking", "Analytics", "Role Management"],
    tech: ["Next.js", "Tailwind CSS", "Firebase", "Stripe"],
    gradient: "from-amber-600/20 to-yellow-600/20",
  },

  {
    title: "Business Websites Portfolio",
    description: "A collection of high-performance, SEO-optimized business websites developed for various clients across different industries.",
    features: ["SEO Optimized", "Responsive Design", "CMS Integration", "Fast Loading"],
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
    gradient: "from-pink-600/20 to-rose-600/20",
  }
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium border rounded-full text-primary border-primary/30 bg-primary/5">
            Featured Work
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Selected Projects
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A showcase of enterprise software, AI solutions, and SaaS platforms I've architected and built.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Simple 3D Tilt effect based on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="h-full transition-transform duration-200 ease-out will-change-transform"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md overflow-hidden relative group">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0`} />
          
          <CardContent className="p-8 relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center border border-white/10">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <div className="flex gap-3">
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            
            <p className="text-muted-foreground mb-6 flex-grow">
              {project.description}
            </p>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wider text-xs">Core Features</h4>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature: string) => (
                    <span key={feature} className="px-2 py-1 text-xs font-medium bg-white/5 text-zinc-400 rounded-md border border-white/5">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-zinc-300 mb-2 uppercase tracking-wider text-xs">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span key={tech} className="text-xs font-semibold text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
