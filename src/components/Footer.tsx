import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Manoj R
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Building AI Solutions, SaaS Platforms, Enterprise Software & Smart Automation Systems. Turning complex problems into elegant solutions.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h4>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group">About <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"/></Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group">Projects <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"/></Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group">Services <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"/></Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-1 group">Contact <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"/></Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/itsmanoj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all hover:scale-110">
                <FaGithub className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com/in/itsmanoj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all hover:scale-110">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com/itsmanoj" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all hover:scale-110">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="mailto:hello@itsmanoj.me" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:text-white hover:bg-white/10 transition-all hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Manoj R. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/admin" className="text-xs text-muted-foreground hover:text-primary transition-colors">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
