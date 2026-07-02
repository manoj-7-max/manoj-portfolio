"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "https://via.placeholder.com/600x400/1e1e2f/8b5cf6?text=AWS+Certificate",
    link: "#"
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    image: "https://via.placeholder.com/600x400/1e1e2f/3b82f6?text=GCP+Certificate",
    link: "#"
  },
  {
    title: "Meta Front-End Developer Professional",
    issuer: "Coursera",
    date: "2021",
    image: "https://via.placeholder.com/600x400/1e1e2f/ec4899?text=Meta+Certificate",
    link: "#"
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="relative py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium border rounded-full text-primary border-primary/30 bg-primary/5">
            Achievements
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Certifications
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors duration-300">
                <div className="relative h-48 w-full overflow-hidden bg-black/40">
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 opacity-60" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cert.image} alt={cert.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" />
                  <Award className="absolute top-4 right-4 w-6 h-6 text-primary z-20" />
                </div>
                <CardContent className="p-6 relative z-20 -mt-8">
                  <h3 className="font-bold text-lg text-white mb-1 group-hover:text-primary transition-colors">{cert.title}</h3>
                  <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                  <a href={cert.link} className="inline-flex items-center gap-2 text-sm text-primary hover:text-white transition-colors">
                    Verify Credential <ExternalLink className="w-4 h-4" />
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
