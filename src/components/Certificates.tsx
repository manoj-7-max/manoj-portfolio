"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";

export function Certificates({ certificates = [] }: { certificates?: any[] }) {
  if (!certificates || certificates.length === 0) return null;

  return (
    <section id="certificates" className="relative py-24 md:py-32">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

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
              key={cert._id || index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-white/5 border-white/10 overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-500 shadow-xl shadow-black/20 hover:shadow-primary/10">
                <div className="relative h-48 w-full overflow-hidden bg-black/40">
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cert.image} alt={cert.title} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ease-out" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/50 backdrop-blur-md flex items-center justify-center z-20 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/20 transition-all duration-300">
                     <Award className="w-5 h-5 text-white group-hover:text-primary transition-colors duration-300" />
                  </div>
                </div>
                <CardContent className="p-6 relative z-20 -mt-10 backdrop-blur-sm bg-background/30 border-t border-white/5 mx-4 mb-4 rounded-xl shadow-lg">
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">{cert.title}</h3>
                  <div className="flex justify-between items-center text-sm text-zinc-400 mb-4">
                    <span className="font-medium text-zinc-300">{cert.issuer}</span>
                    <span className="bg-white/10 px-2 py-0.5 rounded text-xs">{cert.date}</span>
                  </div>
                  <a href={cert.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-white transition-colors group/link">
                    Verify Credential <ExternalLink className="w-4 h-4 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" />
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
