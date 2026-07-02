"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

const posts = [
  {
    title: "Architecting Scalable SaaS Platforms with Next.js",
    excerpt: "Learn how to build multi-tenant applications using App Router, middleware, and specialized database schemas.",
    date: "Oct 12, 2025",
    readTime: "8 min read",
    category: "Architecture"
  },
  {
    title: "Integrating LLMs into Enterprise Workflows",
    excerpt: "A practical guide to leveraging OpenAI and LangChain to automate repetitive business processes securely.",
    date: "Sep 28, 2025",
    readTime: "12 min read",
    category: "AI"
  },
  {
    title: "The Future of Web Animations with Framer Motion",
    excerpt: "Exploring complex physics-based animations and layout transitions to create premium user experiences.",
    date: "Aug 15, 2025",
    readTime: "6 min read",
    category: "Frontend"
  }
];

export function Blog() {
  return (
    <section id="blog" className="relative py-24 md:py-32 bg-black/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 text-sm font-medium border rounded-full text-primary border-primary/30 bg-primary/5">
              Insights & Thoughts
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Latest Articles
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors group font-medium">
            View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-white/5 border-white/10 overflow-hidden group cursor-pointer hover:border-primary/50 transition-colors duration-300">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-xl text-white mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-zinc-500 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
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
