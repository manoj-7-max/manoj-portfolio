"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Cloud, 
  Brain, 
  Smartphone, 
  Database, 
  BarChart3, 
  Wand2,
  Cpu,
  Globe,
  Settings,
  Shield,
  Layers
} from "lucide-react";

const services = [
  { icon: <Code />, title: "Custom Software Development", desc: "Tailored enterprise solutions built to scale." },
  { icon: <Cloud />, title: "SaaS Development", desc: "End-to-end multi-tenant platform architecture." },
  { icon: <Brain />, title: "AI Integration", desc: "Infusing products with LLMs and smart agents." },
  { icon: <Globe />, title: "Web Development", desc: "High-performance, SEO-optimized web applications." },
  { icon: <Smartphone />, title: "Mobile App Development", desc: "Cross-platform mobile experiences." },
  { icon: <Database />, title: "ERP Systems", desc: "Comprehensive resource planning platforms." },
  { icon: <Layers />, title: "CRM Systems", desc: "Customer relationship management tools." },
  { icon: <Cpu />, title: "Business Automation", desc: "Streamlining workflows with smart scripts." },
  { icon: <BarChart3 />, title: "Dashboard Development", desc: "Interactive data visualization interfaces." },
  { icon: <Wand2 />, title: "UI/UX Design", desc: "Premium, user-centric interface design." },
  { icon: <Settings />, title: "API Integration", desc: "Connecting third-party services seamlessly." },
  { icon: <Shield />, title: "Cloud Deployment", desc: "Secure and scalable infrastructure setup." },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium border rounded-full text-primary border-primary/30 bg-primary/5">
            What I Do
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Premium Services
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Comprehensive technical solutions designed to accelerate your business growth and streamline operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <CardContent className="p-6 flex items-start gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-black/40 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.desc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
