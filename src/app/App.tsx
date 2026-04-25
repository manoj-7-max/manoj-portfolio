import { ProjectCard } from "./components/ProjectCard";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Github, Linkedin, Mail, MapPin, Code2, Palette, Zap, Phone, Globe } from "lucide-react";

export default function App() {
  const projects = [
    {
      title: "NEXUS GO - Travel Booking & Location Tracking",
      description: "Integrated travel booking platform with location tracking. Designed UI/UX using Figma with high fidelity prototypes and wireframes. Optimized booking flow to reduce user clicks by 25%.",
      image: "https://images.unsplash.com/photo-1759460336001-0a8cce4e5c95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBib29raW5nJTIwYXBwfGVufDF8fHx8MTc2Mzk5NzAxMXww&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["UI/UX Design", "Figma", "Prototyping", "Wireframing", "Design System"],
    },
    {
      title: "Generative AI Research",
      description: "Researched ethical AI deployment in Oracle Cloud environments. Explored Gen AI use cases including content creation, code generation, and data analysis.",
      image: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM5Njc2NTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["Generative AI", "LLMs", "Oracle Cloud", "Research"],
    },
    {
      title: "MERN Stack Development",
      description: "Full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Designed and tested RESTful API endpoints with focus on UI responsiveness and user experience.",
      image: "https://images.unsplash.com/photo-1643116774075-acc00caa9a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYzOTg3NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tags: ["React", "Node.js", "MongoDB", "Express.js", "RESTful APIs"],
    },
  ];

  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "Express.js",
    "HTML5",
    "CSS3",
    "JavaScript",
    "RESTful APIs",
    "Figma",
    "UI/UX Design",
    "Responsive Design",
    "Git/GitHub",
    "Python",
    "C/C++",
    "Generative AI",
    "LLMs",
  ];

  const experiences = [
    {
      title: "Generative AI Internship",
      company: "AdroIT Technologies - Innovative Solutions Pvt LTD (Oracle Partner)",
      period: "October 2025",
      description: [
        "Completed research on ethical AI deployment in Oracle Cloud environments",
        "Gained training in Generative AI principles and LLMs",
        "Explored Gen AI use cases such as content creation, code generation, and data analysis",
      ],
    },
    {
      title: "Full-Stack Developer Intern",
      company: "VEI Technologies",
      period: "February 2025 – March 2025",
      description: [
        "Assisted in designing and testing 5 RESTful API endpoints using Node.js/Express.js",
        "Contributed to MERN-based feature development with focus on UI and responsiveness",
        "Collaborated via Git/GitHub for commits, merges, and version control",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <span className="text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Manoj R</span>
          <div className="flex gap-6">
            <a href="#about" className="hover:text-primary transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-blue-50 opacity-50 -z-10"></div>
        <div className="max-w-3xl relative">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
            <span className="text-white text-sm">Available for Internship</span>
          </div>
          <h1 className="text-5xl md:text-7xl mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">Manoj R</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            UI/UX Designer & Full-Stack Developer
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            Highly motivated student seeking an Internship in UI/UX Design or Full-Stack Development. 
            Proven foundational experience in MERN and Generative AI applications. Proficient in leveraging 
            design tools like Figma to create user-centric, responsive digital experiences.
          </p>
          <div className="flex gap-4">
            <Button size="lg" asChild className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-purple-600 text-purple-600 hover:bg-purple-50">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 -z-10"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-xl hover:shadow-purple-100">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-3 rounded-xl inline-block mb-4">
                  <Code2 className="size-12 text-white" />
                </div>
                <h3 className="text-xl mb-2">Full-Stack Development</h3>
                <p className="text-muted-foreground">
                  Building scalable web applications using MERN stack with RESTful APIs and modern best practices.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-pink-200 hover:border-pink-400 transition-all hover:shadow-xl hover:shadow-pink-100">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-3 rounded-xl inline-block mb-4">
                  <Palette className="size-12 text-white" />
                </div>
                <h3 className="text-xl mb-2">UI/UX Design</h3>
                <p className="text-muted-foreground">
                  Creating user-centric, responsive interfaces with Figma, focusing on optimal user experience.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-xl hover:shadow-blue-100">
              <CardContent className="pt-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-3 rounded-xl inline-block mb-4">
                  <Zap className="size-12 text-white" />
                </div>
                <h3 className="text-xl mb-2">Generative AI</h3>
                <p className="text-muted-foreground">
                  Exploring AI solutions with LLMs, ethical deployment, and innovative use cases in cloud environments.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 max-w-3xl">
            <h3 className="text-2xl mb-4">Education</h3>
            <Card className="border-2 border-green-200 hover:border-green-400 transition-all">
              <CardContent className="pt-6">
                <h4 className="text-lg mb-2">Bachelor of Engineering (B.E.) in Computer Science</h4>
                <p className="text-muted-foreground mb-2">Karpaga Vinayaga College of Engineering and Technology, Chengalpattu, Tamil Nadu</p>
                <p className="text-sm text-muted-foreground mb-4">Expected May 2027</p>
                <p className="text-sm text-muted-foreground">
                  Relevant Coursework: Web Development, Database Management, Data Structures, UI/UX Design, Full Stack Development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 -z-10"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">Experience</h2>
          <div className="space-y-6 max-w-4xl">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-2 border-teal-200 hover:border-teal-400 transition-all hover:shadow-xl hover:shadow-teal-100">
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl mb-1">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 border-teal-500 text-teal-700 bg-teal-50">
                      {exp.period}
                    </Badge>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex gap-2">
                        <span className="text-teal-600 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 -z-10"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 -z-10"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => {
              const colors = [
                "bg-gradient-to-r from-blue-500 to-cyan-500",
                "bg-gradient-to-r from-purple-500 to-pink-500",
                "bg-gradient-to-r from-green-500 to-teal-500",
                "bg-gradient-to-r from-orange-500 to-red-500",
                "bg-gradient-to-r from-indigo-500 to-purple-500",
                "bg-gradient-to-r from-pink-500 to-rose-500",
              ];
              const colorClass = colors[index % colors.length];
              return (
                <Badge key={skill} className={`px-4 py-2 text-base ${colorClass} text-white border-0 hover:scale-105 transition-transform`}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-fuchsia-50 to-purple-50 -z-10"></div>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl mb-12 bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">Get In Touch</h2>
          <div className="max-w-2xl">
            <p className="text-lg text-muted-foreground mb-8">
              I'm actively seeking internship opportunities in UI/UX Design or Full-Stack Development. 
              Feel free to reach out if you'd like to discuss potential opportunities or collaborate on projects!
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-purple-200 hover:border-purple-400 transition-all">
                <div className="bg-gradient-to-br from-purple-500 to-purple-700 p-2 rounded-lg">
                  <Mail className="size-5 text-white" />
                </div>
                <a href="mailto:manojr9043@gmail.com" className="hover:text-primary transition-colors">
                  manojr9043@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-pink-200 hover:border-pink-400 transition-all">
                <div className="bg-gradient-to-br from-pink-500 to-pink-700 p-2 rounded-lg">
                  <Phone className="size-5 text-white" />
                </div>
                <a href="tel:+919944305980" className="hover:text-primary transition-colors">
                  +91 9944305980
                </a>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-all">
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-lg">
                  <MapPin className="size-5 text-white" />
                </div>
                <span>Chengalpattu, Tamil Nadu, India</span>
              </div>
              <div className="flex gap-4 mt-6">
                <Button variant="outline" size="icon" asChild className="border-2 border-purple-500 text-purple-600 hover:bg-purple-50">
                  <a href="https://github.com/manoj-7-max" target="_blank" rel="noopener noreferrer">
                    <Github className="size-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50">
                  <a href="https://linkedin.com/in/manojrajkumar07" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="size-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="border-2 border-green-500 text-green-600 hover:bg-green-50">
                  <a href="https://manojsecuritysolutions.in/" target="_blank" rel="noopener noreferrer">
                    <Globe className="size-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4 text-center text-white">
          <p>© 2025 Manoj R. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
