"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
};

export function Skills({ skills = [] }: { skills?: any[] }) {
  // Group flat skills by category
  const groupedSkills = skills.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  const skillCategories = Object.keys(groupedSkills).map(category => ({
    title: category,
    skills: groupedSkills[category]
  }));

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium border rounded-full text-primary border-primary/30 bg-primary/5">
            My Arsenal
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Technologies & Tools
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A comprehensive list of frameworks, languages, and tools I use to architect and build robust digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={idx >= 3 ? "lg:col-span-1.5" : ""}
            >
              <Card className="h-full bg-white/5 border-white/10 backdrop-blur-md overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 relative z-10">
                  <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                    {category.title}
                  </h3>
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {category.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        variants={itemVariants}
                        className="px-3 py-1.5 text-sm font-medium bg-white/10 text-zinc-300 rounded-md border border-white/5 hover:bg-primary/20 hover:text-white hover:border-primary/50 transition-colors cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
