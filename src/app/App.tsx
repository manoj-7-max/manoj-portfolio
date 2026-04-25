import { ProjectCard } from "./components/ProjectCard";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Code2, Palette, Zap, Phone, Globe, ExternalLink, ArrowRight, MousePointer2, Send, CheckCircle2 } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useMotionValue } from "motion/react";
import manojPhoto from "../assets/manoj_photo.png";
import { useState, useRef, useEffect } from "react";

export default function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("about");
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success">("idle");
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => {
      setFormStatus("success");
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
    setTimeout(() => setFormStatus("idle"), 5000);
  };

  const projects = [
    {
      title: "NEXUS GO - Travel Booking",
      description: "Integrated travel booking platform with location tracking. Designed UI/UX using Figma with high fidelity prototypes. Optimized booking flow to reduce user clicks by 25%.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop",
      tags: ["UI/UX Design", "Figma", "Prototyping"],
      githubUrl: "https://github.com/manoj-7-max/",
    },
    {
      title: "Generative AI Research",
      description: "Researched ethical AI deployment in Oracle Cloud. Explored Gen AI use cases including content creation, code generation, and data analysis.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
      tags: ["Gen AI", "LLMs", "Oracle Cloud"],
      githubUrl: "https://github.com/manoj-7-max/",
    },
    {
      title: "MERN Stack Development",
      description: "Full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Designed and tested RESTful API endpoints.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/manoj-7-max/",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030014] text-white selection:bg-purple-500/30 overflow-x-hidden cursor-none" ref={containerRef}>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-purple-500 rounded-full pointer-events-none z-[999] mix-blend-difference hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-purple-500 rounded-full pointer-events-none z-[999] hidden md:block"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left z-[101]"
        style={{ scaleX }}
      />

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,#3b0764,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_120%,#1e1b4b,transparent_50%)]"></div>
        
        {/* Animated Orbs */}
        <motion.div 
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] left-[10%] w-64 h-64 bg-purple-600/10 blur-[120px] rounded-full"
        />
        <motion.div 
          animate={{ x: [0, -40, 0], y: [0, 60, 0] }}
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
          <div className="hidden md:flex gap-8 items-center text-sm font-medium">
            {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`transition-colors duration-300 ${activeSection === item.toLowerCase() ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                {item}
              </a>
            ))}
            <Button variant="outline" asChild className="border-purple-500/50 text-white hover:bg-purple-500/10 h-9 px-4 rounded-full">
              <a href="https://www.linkedin.com/in/manoj-rajkumar07/" target="_blank" rel="noopener noreferrer">Resume</a>
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
              <span className="text-purple-400 font-normal"> UI/UX</span> and <span className="text-blue-400 font-normal">Full-Stack Development</span>.
            </p>

            <div className="flex flex-wrap gap-5">
              <Button size="lg" asChild className="bg-purple-600 hover:bg-purple-700 text-white px-8 rounded-full h-14 text-lg shadow-[0_0_20px_rgba(147,51,234,0.3)] group">
                <a href="#contact">
                  Work with me
                  <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" asChild className="text-white hover:bg-white/5 px-8 rounded-full h-14 text-lg border border-white/10">
                <a href="#projects">View Portfolio</a>
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
              className="relative z-20 w-full max-w-[500px] aspect-[4/5] mx-auto rounded-[40px] overflow-hidden border border-white/20 shadow-2xl preserve-3d group"
            >
              <img 
                src={manojPhoto} 
                alt="Manoj R" 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <motion.p className="text-3xl font-bold" layout>Manoj R</motion.p>
                <motion.p className="text-purple-400 font-medium" layout>Full-Stack Developer & UI/UX Designer</motion.p>
              </div>
            </motion.div>
            
            {/* 3D Decorative Cards */}
            {[
              { icon: <Code2 />, color: "blue", x: 20, y: 20, pos: "-top-10 -right-10" },
              { icon: <Palette />, color: "pink", x: -25, y: -25, pos: "-bottom-10 -left-10" },
              { icon: <Zap />, color: "purple", x: 30, y: -30, pos: "-top-20 left-20" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                style={{
                  x: (mousePosition.x - window.innerWidth / 2) / item.x,
                  y: (mousePosition.y - window.innerHeight / 2) / item.y,
                }}
                className={`absolute ${item.pos} z-30 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl hidden md:block`}
              >
                <div className={`text-${item.color}-400`}>{item.icon}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="about" className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Expertise</h2>
            <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Code2 />, title: "Full Stack", color: "blue", desc: "Crafting robust backends and dynamic frontends using MERN stack with scalable architectures." },
              { icon: <Palette />, title: "UI/UX Design", color: "purple", desc: "User-centric design systems built with precision in Figma, focusing on high-end interactions." },
              { icon: <Zap />, title: "Gen AI", color: "pink", desc: "Implementing cutting-edge LLMs and AI solutions to solve complex automation problems." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.07] hover:border-purple-500/50 transition-all"
              >
                <div className={`p-4 rounded-2xl bg-${item.color}-500/10 text-${item.color}-400 inline-block mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl -z-10"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
           <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Experience</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-12">
            {[
              {
                title: "Generative AI Internship",
                company: "AdroIT Technologies (Oracle Partner)",
                period: "Oct 2025",
                description: "Researched ethical AI deployment and Gain training in Generative AI principles and LLMs.",
                color: "purple"
              },
              {
                title: "Full-Stack Developer Intern",
                company: "VEI Technologies",
                period: "Feb 2025 – Mar 2025",
                description: "Designed RESTful API endpoints and contributed to MERN-based feature development.",
                color: "blue"
              }
            ].map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l border-white/10 group"
              >
                <div className={`absolute top-0 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-${exp.color}-500 group-hover:scale-150 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.5)]`} />
                <div className="bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-white/20 transition-all">
                  <span className="text-sm text-gray-500 font-bold mb-2 block">{exp.period}</span>
                  <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                  <p className={`text-${exp.color}-400 font-medium mb-4`}>{exp.company}</p>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
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
              <p className="text-gray-400">A collection of projects built with passion and code</p>
            </div>
            <Button variant="link" asChild className="text-purple-400 hover:text-purple-300 text-lg group">
              <a href="https://github.com/manoj-7-max/" target="_blank" rel="noopener noreferrer">
                All Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
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
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-black mb-8">LET'S <br /><span className="text-purple-500">CONNECT</span></h2>
              <p className="text-xl text-gray-400 mb-12 max-w-md">
                I'm currently looking for new opportunities and collaborations. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                    <Mail className="size-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Me</p>
                    <a href="mailto:manojr9043@gmail.com" className="text-lg hover:text-purple-400 transition-colors">manojr9043@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-gray-300 group">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 group-hover:border-blue-500/50 transition-colors">
                    <Globe className="size-6 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">My Agency</p>
                    <a href="https://manojsecuritysolutions.in/" target="_blank" className="text-lg hover:text-blue-400 transition-colors">manojsecuritysolutions.in</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-12">
                {[
                  { icon: <Github />, url: "https://github.com/manoj-7-max/" },
                  { icon: <Linkedin />, url: "https://www.linkedin.com/in/manoj-rajkumar07/" },
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -5, scale: 1.1 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 md:p-12 rounded-[40px] bg-white/5 border border-white/10 backdrop-blur-md relative"
            >
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1 font-bold uppercase tracking-wider">Name</label>
                    <input type="text" required placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500/50 transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400 ml-1 font-bold uppercase tracking-wider">Email</label>
                    <input type="email" required placeholder="john@example.com" className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500/50 transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-gray-400 ml-1 font-bold uppercase tracking-wider">Message</label>
                  <textarea rows={4} required placeholder="Tell me about your project..." className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-purple-500/50 transition-colors resize-none" />
                </div>
                
                <Button 
                  disabled={formStatus !== "idle"}
                  className="w-full h-16 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white text-lg font-bold transition-all relative overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    {formStatus === "idle" && (
                      <motion.div key="idle" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-2">
                        Send Message <Send className="size-5" />
                      </motion.div>
                    )}
                    {formStatus === "sending" && (
                      <motion.div key="sending" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-2">
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                          <Zap className="size-5" />
                        </motion.div>
                        Sending...
                      </motion.div>
                    )}
                    {formStatus === "success" && (
                      <motion.div key="success" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="flex items-center gap-2 text-green-400">
                        Success! <CheckCircle2 className="size-5" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-black/40">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">MANOJ R</p>
            <p className="text-gray-500 text-sm italic font-light">"Designing the future, one pixel at a time."</p>
          </div>
          <div className="flex gap-8 text-gray-500 text-xs font-black tracking-widest uppercase">
            <a href="https://github.com/manoj-7-max/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GITHUB</a>
            <a href="https://www.linkedin.com/in/manoj-rajkumar07/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LINKEDIN</a>
            <a href="https://manojsecuritysolutions.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WEBSITE</a>
          </div>
          <p className="text-gray-600 text-[10px] font-bold tracking-tighter uppercase">© 2025 MANOJ R. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}
