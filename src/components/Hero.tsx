"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Polyfill random for points
const generateParticles = (count: number) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos((Math.random() * 2) - 1);
    const r = (Math.random() * 1.5) + 1.2; // radius between 1.2 and 2.7
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
};

function ParticleCloud() {
  const ref = useRef<any>(null);
  
  const sphere = useMemo(() => generateParticles(5000), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ParticleCloud />
        </Canvas>
      </div>

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-block border border-primary/30 bg-primary/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium text-primary mb-2 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
            Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-primary to-purple-600">
              Manoj R.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            I Build AI Solutions, SaaS Platforms, Enterprise Software & Smart Automation Systems. Turning complex problems into elegant solutions.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link 
              href="#projects" 
              className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-300 bg-primary rounded-full hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Projects <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-4 font-semibold transition-all duration-300 border border-white/20 rounded-full hover:bg-white/10 hover:border-white/40 bg-white/5 backdrop-blur-md"
            >
              Hire Me
            </Link>
            <a 
              href="/resume.pdf" 
              target="_blank"
              className="inline-flex items-center justify-center p-4 text-muted-foreground transition-all duration-300 border border-white/10 rounded-full hover:bg-white/10 hover:text-white bg-white/5 backdrop-blur-md"
              title="Download Resume"
            >
              <Download className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            <div>
              <h3 className="text-3xl font-bold text-white">20+</h3>
              <p className="text-sm text-muted-foreground mt-1">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">15+</h3>
              <p className="text-sm text-muted-foreground mt-1">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">4+</h3>
              <p className="text-sm text-muted-foreground mt-1">Years Learning</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-white">100%</h3>
              <p className="text-sm text-muted-foreground mt-1">Passion</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          {/* Photo wrapper with glow */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-tr from-blue-500 via-primary to-purple-600 animate-spin-slow">
            <div className="absolute inset-0 rounded-full blur-2xl bg-gradient-to-tr from-blue-500 via-primary to-purple-600 opacity-60"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background bg-muted">
              {/* Fallback avatar if no image provided yet */}
              {/* <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-6xl font-bold text-zinc-600">MR</div> */}
              {/* Actual image */}
              <Image 
                src="/me.jpg" 
                alt="Manoj R" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
