"use client";

import { useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Code, Server, Globe, Zap, type LucideProps } from "lucide-react";
import { GithubIcon } from "@/components/icons/BrandIcons";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce with real-time inventory, Stripe payments, admin dashboard, and analytics.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Tailwind"],
    category: "fullstack",
    links: {
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    features: ["Real-time updates", "Role-based auth", "PDF invoices", "Email notifications"],
  },
  {
    id: 2,
    title: "Task Management SaaS",
    description: "Collaborative project management tool with drag-and-drop boards, real-time sync, and team workspaces.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Redis", "Docker"],
    category: "fullstack",
    links: {
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    features: ["Drag & drop", "Real-time collab", "Webhooks", "Dark mode"],
  },
  {
    id: 3,
    title: "Design System Library",
    description: "Accessible component library with Storybook, design tokens, theming, and automated visual regression testing.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "Storybook", "Tailwind", "Chromatic", "Vitest"],
    category: "frontend",
    links: {
      github: "https://github.com",
      demo: "https://storybook.js.org",
    },
    features: ["60+ components", "Design tokens", "RTL support", "A11y first"],
  },
  {
    id: 4,
    title: "Real-time Chat App",
    description: "End-to-end encrypted messaging with channels, threads, reactions, file sharing, and push notifications.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7621?w=800&h=600&fit=crop",
    tags: ["Next.js", "WebSockets", "PostgreSQL", "Prisma", "WebRTC", "Pusher"],
    category: "fullstack",
    links: {
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    features: ["E2E encryption", "Voice calls", "File sharing", "Mobile PWA"],
  },
  {
    id: 5,
    title: "API Gateway & Auth",
    description: "High-performance API gateway with rate limiting, JWT/OAuth2, request validation, and observability.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    tags: ["Go", "Redis", "PostgreSQL", "Docker", "Prometheus", "Grafana"],
    category: "backend",
    links: {
      github: "https://github.com",
      demo: null,
    },
    features: ["Rate limiting", "OAuth2/OIDC", "Metrics", "Distributed tracing"],
  },
  {
    id: 6,
    title: "Data Visualization Dashboard",
    description: "Interactive analytics dashboard with real-time charts, custom reports, and export capabilities.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "TypeScript", "Recharts", "Web Workers", "IndexedDB"],
    category: "frontend",
    links: {
      github: "https://github.com",
      demo: "https://vercel.com",
    },
    features: ["Real-time charts", "Custom reports", "CSV/PDF export", "Offline support"],
  },
];

type Category = {
  id: string;
  label: string;
  icon?: ComponentType<LucideProps>;
};

const categories: Category[] = [
  { id: "all", label: "All Projects" },
  { id: "fullstack", label: "Full Stack", icon: Globe },
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "backend", label: "Backend", icon: Server },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 px-6 bg-gray-50 dark:bg-dark-200/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Selected Work
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-4">
            Projects <span className="text-primary-600 dark:text-primary-400">Showcase</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            A collection of production-ready applications solving real-world problems.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "primary" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat.id)}
              className="gap-2"
            >
              {cat.icon && <cat.icon className="w-4 h-4" />}
              {cat.label}
            </Button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button variant="outline" size="lg" className="group">
            View More on GitHub
            <GithubIcon className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -8 }}
    >
      <Card variant="elevated" hover className="overflow-hidden h-full flex flex-col group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <AnimatePresence>
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                  {project.tags.length > 4 && (
                    <motion.span
                      className="px-3 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white/70 border border-white/20 rounded-full"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      +{project.tags.length - 4} more
                    </motion.span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
            <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${
              project.category === "fullstack" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" :
              project.category === "frontend" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" :
              "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
            }`}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.features.slice(0, 3).map((feature) => (
              <span key={feature} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                <Zap className="w-3 h-3 text-primary-500" />
                {feature}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-dark-100">
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
            >
              <GithubIcon className="w-4 h-4" />
              Code
            </a>
            {project.links.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
              >
                <ExternalLink className="w-4 h-4" />
                Live
              </a>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
