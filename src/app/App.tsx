import { ProjectCard } from "./components/ProjectCard";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Code2, Palette, Zap, Phone, Globe, ExternalLink, ArrowRight, MousePointer2 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "motion/react";
import manojPhoto from "../assets/manoj_photo.png";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const projects = [
    {
      title: "NEXUS GO - Travel Booking",
      description: "Integrated travel booking platform with location tracking. Designed UI/UX using Figma with high fidelity prototypes. Optimized booking flow to reduce user clicks by 25%.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
      tags: ["UI/UX Design", "Figma", "Prototyping"],
    },
    {
      title: "Generative AI Research",
      description: "Researched ethical AI deployment in Oracle Cloud. Explored Gen AI use cases including content creation, code generation, and data analysis.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      tags: ["Gen AI", "LLMs", "Oracle Cloud"],
    },
    {
      title: "MERN Stack Development",
      description: "Full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Designed and tested RESTful API endpoints.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
    },
  ];

  const skills = [
    "React.js", "Node.js", "MongoDB", "Express.js", "HTML5", "CSS3", "JavaScript", 
    "RESTful APIs", "Figma", "UI/UX Design", "Python", "Generative AI", "LLMs"
  ];

  const experiences = [
    {
      title: "Generative AI Internship",
      company: "AdroIT Technologies (Oracle Partner)",
      period: "October 2025",
      description: [
        "Research on ethical AI deployment in Oracle Cloud environments",
        "Training in Generative AI principles and LLMs",
        "Explored Gen AI use cases for content and code generation",
      ],
    },
    {
      title: "Full-Stack Developer Intern",
      company: "VEI Technologies",
      period: "Feb 2025 – March 2025",
      description: [
        "Designed and tested 5 RESTful API endpoints using Node.js",
        "Contributed to MERN-based feature development",
        "Collaborated via Git/GitHub for version control",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30 overflow-x-hidden" ref={containerRef}>
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b0764,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_120%,#1e1b4b,transparent_50%)]"></div>
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-600/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-blue-600/10 blur-[150px] rounded-full"
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-[100] border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            MANOJ R
          </motion.span>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-400">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                {item}
              </a>
            ))}
            <Button variant="outline" className="border-purple-500/50 text-white hover:bg-purple-500/10 h-9 px-4 rounded-full">
              Resume
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
        <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-semibold mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Available for Internships
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9]">
              FUTURE <br />
              <span className="bg-gradient-to-r from-white via-white to-purple-400 bg-clip-text text-transparent">ENGINEERING</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-xl mb-10 leading-relaxed font-light">
              Hi, I'm <span className="text-white font-semibold">Manoj R</span>. 
              I design and build next-generation digital experiences specializing in 
              <span className="text-purple-400"> UI/UX</span> and <span className="text-blue-400">Full-Stack Development</span>.
            </p>

            <div className="flex flex-wrap gap-5">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 rounded-full h-14 text-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] group">
                Work with me
                <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="ghost" className="text-white hover:bg-white/5 px-8 rounded-full h-14 text-lg border border-white/10">
                View Portfolio
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative perspective-1000"
          >
            <motion.div
              style={{
                rotateX: (mousePosition.y - window.innerHeight / 2) / 50,
                rotateY: -(mousePosition.x - window.innerWidth / 2) / 50,
              }}
              className="relative z-20 w-full max-w-[500px] aspect-[4/5] mx-auto rounded-[40px] overflow-hidden border border-white/20 shadow-2xl preserve-3d"
            >
              <img 
                src={manojPhoto} 
                alt="Manoj R" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-3xl font-bold">Manoj R</p>
                <p className="text-purple-400 font-medium">Full-Stack Developer & UI/UX Designer</p>
              </div>
            </motion.div>
            
            {/* 3D Decorative Cards */}
            <motion.div 
              style={{
                x: (mousePosition.x - window.innerWidth / 2) / 20,
                y: (mousePosition.y - window.innerHeight / 2) / 20,
              }}
              className="absolute -top-10 -right-10 z-30 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hidden md:block"
            >
              <Code2 className="size-10 text-blue-400" />
            </motion.div>
            <motion.div 
              style={{
                x: -(mousePosition.x - window.innerWidth / 2) / 25,
                y: -(mousePosition.y - window.innerHeight / 2) / 25,
              }}
              className="absolute -bottom-10 -left-10 z-30 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hidden md:block"
            >
              <Palette className="size-10 text-pink-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">A Bit About Me</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Code2 />, title: "Full Stack", color: "blue", desc: "Crafting robust backends and dynamic frontends using MERN." },
              { icon: <Palette />, title: "UI/UX Design", color: "purple", desc: "User-centric design systems built with precision in Figma." },
              { icon: <Zap />, title: "Gen AI", color: "pink", desc: "Implementing cutting-edge LLMs and AI cloud solutions." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-purple-500/50 transition-all preserve-3d"
              >
                <div className={`p-4 rounded-2xl bg-${item.color}-500/10 text-${item.color}-400 inline-block mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Selected Works</h2>
              <p className="text-gray-400">Explore my latest projects and research</p>
            </div>
            <Button variant="link" className="text-purple-400 hover:text-purple-300 text-lg group">
              View all
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-12 md:p-20 rounded-[50px] bg-gradient-to-b from-purple-600/20 to-blue-600/10 border border-white/10 backdrop-blur-md relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-[0.9]">READY TO START <br /> A PROJECT?</h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Currently open for internships and freelance collaborations. 
              Let's build something exceptional together.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-10 rounded-full h-16 text-xl font-bold transition-transform hover:scale-105 active:scale-95">
                Email Me
              </Button>
              <div className="flex gap-4 items-center">
                {[Github, Linkedin, Globe].map((Icon, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    href="#"
                    className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                  >
                    <Icon className="size-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <p>© 2025 MANOJ R. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white">TWITTER</a>
            <a href="#" className="hover:text-white">LINKEDIN</a>
            <a href="#" className="hover:text-white">DRIBBBLE</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
