require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define MONGODB_URI in .env.local");
  process.exit(1);
}

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  projectUrl: String,
  githubUrl: String,
  tech: [String],
  features: [String],
  order: Number,
}, { timestamps: true });

const SkillSchema = new mongoose.Schema({
  title: String,
  skills: [String],
  order: Number,
}, { timestamps: true });

const ExperienceSchema = new mongoose.Schema({
  title: String,
  company: String,
  startDate: String,
  endDate: String,
  description: String,
  highlights: [String],
  order: Number,
}, { timestamps: true });

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);
const Skill = mongoose.models.Skill || mongoose.model("Skill", SkillSchema);
const Experience = mongoose.models.Experience || mongoose.model("Experience", ExperienceSchema);

const projects = [
  {
    title: "ID Card Generator Pro",
    description: "A professional Canva-like ID card generation software supporting bulk Excel import, visual editing, drag-and-drop design, direct printing, photo management, export, and enterprise licensing.",
    features: ["Bulk Create", "Excel Import", "Visual Editor", "Direct Print", "Multiple Templates", "QR Code", "Barcode", "Licensing System"],
    tech: ["Next.js", "Electron", "Node.js", "MongoDB"],
    order: 1
  },
  {
    title: "KVCET Department ERP",
    description: "A complete ERP platform for educational institutions with separate portals for HOD, Faculty, Students, Attendance, Circulars, Complaints, Reports, Analytics, and Administration.",
    features: ["Multi-role Login", "Dashboard", "Attendance", "Student Management", "Faculty Portal", "Reports", "Notifications"],
    tech: ["React", "Node.js", "PostgreSQL", "Express"],
    order: 2
  },
  {
    title: "Restaurant Management System",
    description: "Cloud-based restaurant management software with POS, Kitchen Display, QR Ordering, Inventory, Billing, Reports, and Customer Management.",
    features: ["POS System", "QR Ordering", "Inventory Tracking", "Analytics", "Role Management"],
    tech: ["Next.js", "Tailwind CSS", "Firebase", "Stripe"],
    order: 3
  },
  {
    title: "Business Websites Portfolio",
    description: "A collection of high-performance, SEO-optimized business websites developed for various clients across different industries.",
    features: ["SEO Optimized", "Responsive Design", "CMS Integration", "Fast Loading"],
    tech: ["Next.js", "Framer Motion", "Tailwind CSS", "Sanity CMS"],
    order: 4
  }
];

const flatSkills = [];
let skillOrder = 1;

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "Firebase", "Supabase", "REST APIs"],
  },
  {
    title: "AI",
    skills: ["OpenAI", "Gemini", "Claude", "Prompt Engineering", "AI Automation", "LLM Integration"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Vercel", "Firebase Hosting", "MongoDB Atlas", "Docker", "GitHub"],
  },
  {
    title: "Design",
    skills: ["Figma", "Canva", "Photoshop"],
  },
];

skillCategories.forEach((cat) => {
  cat.skills.forEach((skillName) => {
    flatSkills.push({
      category: cat.title,
      name: skillName,
      order: skillOrder++
    });
  });
});

const experiences = [
  {
    title: "Freelance Developer & Consultant",
    company: "Self-Employed",
    startDate: "2025",
    endDate: "Present",
    description: "Developing custom web applications, SaaS platforms, and enterprise solutions for global clients. Focused on scalable architectures and premium user experiences.\n\n- Building full-stack projects\n- Implementing custom AI integrations\n- Delivering high-performance Next.js applications",
    highlights: ["Building full-stack projects", "Implementing custom AI integrations", "Delivering high-performance Next.js applications"],
    order: 1
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to DB.");

    // Delete existing dummy data
    await Project.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    console.log("Cleared existing data.");

    await Project.insertMany(projects);
    await Skill.insertMany(flatSkills);
    await Experience.insertMany(experiences);

    console.log("Successfully seeded new projects, skills, and experiences.");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

seed();
