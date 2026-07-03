"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export function Blog({ posts = [] }: { posts?: any[] }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section id="blog" className="relative py-24 md:py-32 bg-black/40">
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
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
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors group font-medium px-6 py-3 rounded-full border border-primary/20 hover:border-primary/50 bg-primary/5 hover:bg-primary/10">
            View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post, index) => {
            // Format the date if it's a valid date string/object
            let formattedDate = post.date || "Just now";
            if (post.createdAt) {
              const d = new Date(post.createdAt);
              if (!isNaN(d.getTime())) {
                 formattedDate = d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
              }
            }

            return (
            <motion.div
              key={post._id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link href={`/blog/${post.slug || '#'}`}>
                <Card className="h-full bg-white/5 border-white/10 overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-500 shadow-xl shadow-black/20 hover:shadow-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <CardContent className="p-6 md:p-8 flex flex-col h-full relative z-10">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category || "General"}
                      </span>
                      <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                    <h3 className="font-bold text-xl text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-zinc-500 pt-5 border-t border-white/10">
                      <div className="flex items-center gap-1.5 group-hover:text-zinc-300 transition-colors">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{formattedDate}</span>
                      </div>
                      <div className="flex items-center gap-1.5 group-hover:text-zinc-300 transition-colors">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{post.readTime || "5 min read"}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          )})}
        </div>
      </div>
    </section>
  );
}
