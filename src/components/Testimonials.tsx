"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechStart",
    content: "Manoj transformed our vision into a scalable SaaS platform. His architectural decisions and attention to UI/UX details were phenomenal.",
    initial: "S"
  },
  {
    name: "David Chen",
    role: "CTO, EduCorp",
    content: "The ERP system Manoj built for us streamlined our entire department operations. Highly professional and deeply technical.",
    initial: "D"
  },
  {
    name: "Elena Rodriguez",
    role: "Director, SecureVision",
    content: "Integrating AI into our CCTV networks seemed impossible until we worked with Manoj. A true expert in his field.",
    initial: "E"
  },
  {
    name: "Michael Chang",
    role: "Founder, FoodieTech",
    content: "Our restaurant management system is lightning fast and flawlessly designed. Best full-stack developer I've worked with.",
    initial: "M"
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium border rounded-full text-primary border-primary/30 bg-primary/5">
            Client Feedback
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            What They Say
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Testimonials from clients and partners I've had the pleasure of working with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md relative">
                <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
                <CardContent className="p-8 flex flex-col justify-between h-full">
                  <p className="text-lg text-zinc-300 italic mb-8 relative z-10">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.initial}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
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
