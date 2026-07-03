require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define MONGODB_URI in .env.local");
  process.exit(1);
}

const TestimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  content: { type: String, required: true },
  avatar: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const CertificateSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  date: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String },
  order: { type: Number, default: 0 },
}, { timestamps: true });

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  excerpt: { type: String, required: true },
  content: { type: String, required: true },
  coverImage: { type: String },
  category: { type: String, default: "General" },
  readTime: { type: String, default: "5 min read" },
  published: { type: Boolean, default: false },
}, { timestamps: true });

const Testimonial = mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);
const Certificate = mongoose.models.Certificate || mongoose.model("Certificate", CertificateSchema);
const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechStart",
    content: "Manoj transformed our vision into a scalable SaaS platform. His architectural decisions and attention to UI/UX details were phenomenal.",
    order: 1
  },
  {
    name: "David Chen",
    role: "CTO, EduCorp",
    content: "The ERP system Manoj built for us streamlined our entire department operations. Highly professional and deeply technical.",
    order: 2
  },
  {
    name: "Elena Rodriguez",
    role: "Director, SecureVision",
    content: "Integrating AI into our CCTV networks seemed impossible until we worked with Manoj. A true expert in his field.",
    order: 3
  },
  {
    name: "Michael Chang",
    role: "Founder, FoodieTech",
    content: "Our restaurant management system is lightning fast and flawlessly designed. Best full-stack developer I've worked with.",
    order: 4
  }
];

const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    image: "https://via.placeholder.com/600x400/1e1e2f/8b5cf6?text=AWS+Certificate",
    link: "#",
    order: 1
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2022",
    image: "https://via.placeholder.com/600x400/1e1e2f/3b82f6?text=GCP+Certificate",
    link: "#",
    order: 2
  },
  {
    title: "Meta Front-End Developer Professional",
    issuer: "Coursera",
    date: "2021",
    image: "https://via.placeholder.com/600x400/1e1e2f/ec4899?text=Meta+Certificate",
    link: "#",
    order: 3
  }
];

const posts = [
  {
    title: "Architecting Scalable SaaS Platforms with Next.js",
    slug: "architecting-scalable-saas-platforms-with-nextjs",
    excerpt: "Learn how to build multi-tenant applications using App Router, middleware, and specialized database schemas.",
    content: "Full content coming soon...",
    readTime: "8 min read",
    category: "Architecture",
    published: true,
  },
  {
    title: "Integrating LLMs into Enterprise Workflows",
    slug: "integrating-llms-into-enterprise-workflows",
    excerpt: "A practical guide to leveraging OpenAI and LangChain to automate repetitive business processes securely.",
    content: "Full content coming soon...",
    readTime: "12 min read",
    category: "AI",
    published: true,
  },
  {
    title: "The Future of Web Animations with Framer Motion",
    slug: "the-future-of-web-animations-with-framer-motion",
    excerpt: "Exploring complex physics-based animations and layout transitions to create premium user experiences.",
    content: "Full content coming soon...",
    readTime: "6 min read",
    category: "Frontend",
    published: true,
  }
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to DB.");

    await Testimonial.deleteMany({});
    await Certificate.deleteMany({});
    await Blog.deleteMany({});
    console.log("Cleared existing data.");

    await Testimonial.insertMany(testimonials);
    await Certificate.insertMany(certificates);
    await Blog.insertMany(posts);

    console.log("Successfully seeded testimonials, certificates, and blogs.");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

seed();
