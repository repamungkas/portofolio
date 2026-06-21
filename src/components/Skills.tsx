"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { Card } from "@/components/ui/Card";

const skills = [
  // Frontend
  { category: "Frontend", color: "from-blue-500 to-cyan-500", items: [
    { name: "Next.js", level: 95 },
    { name: "React", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Framer Motion", level: 85 },
    { name: "Vue.js", level: 75 },
  ]},
  // Backend
  { category: "Backend", color: "from-green-500 to-emerald-500", items: [
    { name: "Node.js", level: 90 },
    { name: "PostgreSQL", level: 85 },
    { name: "Prisma ORM", level: 85 },
    { name: "Redis", level: 80 },
    { name: "GraphQL", level: 75 },
    { name: "REST APIs", level: 90 },
  ]},
  // Tools & DevOps
  { category: "Tools & DevOps", color: "from-purple-500 to-pink-500", items: [
    { name: "Git/GitHub", level: 95 },
    { name: "Docker", level: 80 },
    { name: "Vercel/AWS", level: 85 },
    { name: "CI/CD", level: 80 },
    { name: "Testing (Jest/Vitest)", level: 80 },
    { name: "Figma", level: 70 },
  ]},
  // Soft Skills
  { category: "Core Competencies", color: "from-orange-500 to-red-500", items: [
    { name: "Problem Solving", level: 95 },
    { name: "System Design", level: 85 },
    { name: "Code Review", level: 90 },
    { name: "Mentoring", level: 80 },
    { name: "Agile/Scrum", level: 85 },
    { name: "Technical Writing", level: 75 },
  ]},
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 bg-white dark:bg-dark-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Technical Arsenal
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-4">
            Skills & <span className="text-primary-600 dark:text-primary-400">Expertise</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            A curated stack built through years of shipping production applications.
            Always expanding, always refining.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 * catIndex }}
            >
              <Card variant="elevated" hover className="h-full p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <span className="text-white font-bold text-sm">{category.category.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{category.category}</h3>
                </div>

                {/* Skill Bars */}
                <div className="space-y-5">
                  {category.items.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      delay={skillIndex * 0.1}
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Tech Cloud - Floating Tags */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-center text-lg font-medium text-gray-600 dark:text-gray-400 mb-8">
            Also Comfortable With
          </h3>
          <TechCloud />
        </motion.div>
      </div>
    </section>
  );
}

// Animated Skill Bar Component
function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const width = useTransform(scrollYProgress, [0, 1], [`${level}%`, `${level}%`]);

  // Animate on scroll into view
  useEffect(() => {
    if (isInView) {
      // Trigger animation via CSS
    }
  }, [isInView]);

  return (
    <motion.div ref={ref} className="group">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500 dark:text-gray-400 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-dark-100 rounded-full overflow-hidden relative">
        <motion.div
          className="h-full rounded-full relative"
          style={{ background: `linear-gradient(to right, ${color.replace("from-", "").replace(" to-", ", ")})` }}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute top-0 right-0 w-4 h-full bg-white/30 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Floating Tech Cloud
function TechCloud() {
  const techs = [
    "GraphQL", "WebSockets", "WebRTC", "Three.js", "D3.js",
    "Storybook", "Playwright", "Cypress", "ESLint", "Prettier",
    "Husky", "Lint-staged", "Commitlint", "Semantic Release",
    "Kubernetes", "Terraform", "NGINX", "Cloudflare", "Supabase",
    "Firebase", "Auth0", "NextAuth", "Zod", "React Hook Form",
    "TanStack Query", "Zustand", "Jotai", "Valibot", "ArkType"
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
      {techs.map((tech, i) => (
        <motion.span
          key={tech}
          className="px-4 py-1.5 rounded-full bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-sm font-medium border border-gray-200 dark:border-dark-200 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 cursor-default"
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.05 * i }}
          whileHover={{ scale: 1.05, y: -2, boxShadow: "0 4px 12px rgba(14, 165, 233, 0.3)" }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}
