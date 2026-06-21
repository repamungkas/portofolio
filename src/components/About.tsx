"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Heart, Coffee, Users, Award } from "lucide-react";
import { Card } from "@/components/ui/Card";

const stats = [
  { value: "3+", label: "Years Experience", icon: Award },
  { value: "50+", label: "Projects Completed", icon: Code2 },
  { value: "15+", label: "Technologies", icon: Brain },
  { value: "8", label: "Cups of Coffee", icon: Coffee },
];

const values = [
  {
    title: "Clean Code",
    description: "Writing maintainable, scalable, and well-tested code following best practices and design patterns.",
    icon: Code2,
  },
  {
    title: "Continuous Learning",
    description: "Constantly exploring new technologies, frameworks, and methodologies to stay ahead of the curve.",
    icon: Brain,
  },
  {
    title: "User-Centric",
    description: "Building intuitive, accessible, and delightful experiences that put users first.",
    icon: Heart,
  },
  {
    title: "Collaboration",
    description: "Thriving in cross-functional teams, sharing knowledge, and growing together.",
    icon: Users,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-6 bg-gray-50 dark:bg-dark-200/50">
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
            Get to Know Me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-balance mb-4">
            Crafting Code with <span className="text-primary-600 dark:text-primary-400">Passion & Precision</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m a full-stack developer who loves turning complex problems into elegant, performant solutions.
            When I&apos;m not coding, you&apos;ll find me exploring new tech, contributing to open source, or perfecting my pour-over.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Card variant="elevated" hover className="text-center p-6">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="font-display text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Values */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <Card variant="outlined" hover className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
