import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export function ProjectCard({ title, description, image, tags, demoUrl, githubUrl }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 5, rotateY: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group relative h-full perspective-1000"
    >
      <div className="relative h-full bg-white/5 backdrop-blur-md border border-white/10 rounded-[32px] overflow-hidden transition-all group-hover:border-purple-500/50 group-hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col preserve-3d">
        <div className="aspect-[16/10] overflow-hidden relative">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60"></div>
          
          <div className="absolute top-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-purple-600 transition-colors">
                <Github className="size-5" />
              </a>
            )}
            {demoUrl && (
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black/50 backdrop-blur-md text-white hover:bg-purple-600 transition-colors">
                <ExternalLink className="size-5" />
              </a>
            )}
          </div>
        </div>

        <div className="p-8 flex-1 flex flex-col">
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-purple-400 bg-purple-400/10 px-2 py-1 rounded-md">
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors flex items-center justify-between">
            {title}
            <ArrowUpRight className="size-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
          </h3>
          
          <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">
            {description}
          </p>

          <div className="pt-4 border-t border-white/5 flex justify-between items-center">
            <span className="text-xs text-gray-500 font-medium">VIEW PROJECT</span>
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-[#030014] bg-gray-800"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
