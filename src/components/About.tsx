"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Brain, Users } from "lucide-react";
import { Card } from "@/components/ui/Card";

const stats = [
  { value: "3+", label: "Years Experience", icon: Clock },
  { value: "24/7", label: "Network Monitoring", icon: Shield },
  { value: "99.9%", label: "SLA Compliance", icon: Brain },
  { value: "2+", label: "Companies Served", icon: Users },
];

const values = [
  {
    title: "High Availability",
    description: "Ensuring network systems run 24/7 with minimal downtime, meeting strict SLA standards for ISP customers.",
    icon: Shield,
  },
  {
    title: "Fast Incident Response",
    description: "Rapidly identifying and resolving faults in network connectivity, latency, and service interruptions to minimize impact.",
    icon: Clock,
  },
  {
    title: "Continuous Learning",
    description: "Currently expanding into network automation, cybersecurity, and cloud networking to stay ahead of the curve.",
    icon: Brain,
  },
  {
    title: "Cross-team Collaboration",
    description: "Working effectively with L2/L3 teams, vendors, and cross-functional departments to implement updates and improvements.",
    icon: Users,
  },
];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 bg-gray-50 dark:bg-dark-200/50">
      <div className="max-w-7xl mx-auto">
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
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance mb-4">
            Keeping Networks <span className="text-primary-600 dark:text-primary-400">Running 24/7</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m a dedicated Network Operation Center Engineer with a strong problem-solving mindset and
            effective communication skills. I thrive in fast-paced 24/7 environments where uptime and
            reliability are critical. I&apos;m currently seeking opportunities to grow in network automation,
            cybersecurity, or cloud networking.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16"
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
                <Card variant="elevated" hover className="text-center p-4 sm:p-6">
                  <div className="flex items-center justify-center mb-3">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
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
                <Card variant="outlined" hover className="p-5 sm:p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
