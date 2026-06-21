"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/Card";

const experiences = [
  {
    type: "work",
    title: "Network Operation Center Engineer",
    organization: "PT Mitra Akses Globalindo",
    location: "Jakarta",
    period: "March 2022 — Present",
    current: true,
    responsibilities: [
      "Monitor network systems, servers, and applications using real-time monitoring tools 24/7 (Zabbix, PRTG, Dude)",
      "Identify and resolve faults in network connectivity, latency, or service interruptions",
      "Escalate complex incidents to Layer 2/3 teams and follow up to resolution",
      "Document incidents, troubleshooting steps, and resolutions in ticketing systems (Smart Tracker)",
      "Creating tickets for customer update issues with Smart Tracker",
      "Collaborate with cross-functional teams to implement updates and scheduled maintenance",
      "Support security and compliance efforts through incident detection and response",
      "Ensure SLAs are met and contribute to continuous improvement initiatives",
    ],
    tools: ["Zabbix", "PRTG", "Dude", "Mikrotik", "Cisco", "Smart Tracker", "Grafana"],
  },
  {
    type: "work",
    title: "IT Support",
    organization: "PT Loka Abadi Sentausa",
    location: "Malang",
    period: "November 2021 — March 2022",
    current: false,
    responsibilities: [
      "Support troubleshooting internal hardware such as PC, printer, AP, and router",
      "Monitoring local network, server, and Synology NAS",
      "Design brochures for the marketing team",
      "Support layouting events for the marketing team",
      "Maintain website and create product content",
    ],
    tools: ["Hardware", "Networking", "Synology", "Router", "AP"],
  },
];

const education = [
  {
    degree: "Diploma IV — Informatics Engineering",
    institution: "Politeknik Negeri Malang",
    location: "Malang",
    period: "January 2017 — January 2021",
  },
  {
    degree: "Computer and Network Engineering",
    institution: "SMK Telkom Malang",
    location: "Malang",
    period: "January 2015 — January 2017",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 bg-white dark:bg-dark-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance mb-4">
            Work <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Over 3 years building expertise in network operations, incident management, and infrastructure monitoring.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Employment History</h3>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-300 to-transparent hidden sm:block" />

              <div className="space-y-8">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={exp.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.1 * i }}
                    className="sm:pl-12 relative"
                  >
                    <div className="absolute left-0 top-6 w-8 h-8 rounded-full bg-primary-500 border-4 border-white dark:border-dark-300 hidden sm:flex items-center justify-center -translate-y-1/2">
                      <div className={`w-2 h-2 rounded-full ${exp.current ? "bg-white animate-pulse" : "bg-white/70"}`} />
                    </div>

                    <Card variant="elevated" hover className="p-5 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">{exp.title}</h4>
                          <p className="text-primary-600 dark:text-primary-400 font-semibold">{exp.organization}</p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
                          {exp.current && (
                            <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                              Current
                            </span>
                          )}
                          <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                            <Calendar className="w-3.5 h-3.5" />
                            <span className="whitespace-nowrap">{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <ul className="space-y-2 mb-4">
                        {exp.responsibilities.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-dark-100">
                        {exp.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 text-xs font-medium rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 border border-primary-200 dark:border-primary-800/50"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: 0.1 * i }}
                >
                  <Card variant="outlined" hover className="p-5">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1 leading-snug">{edu.degree}</h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">{edu.institution}</p>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                        <MapPin className="w-3 h-3" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6"
            >
              <Card variant="outlined" className="p-5">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4">Languages</h4>
                <div className="space-y-3">
                  {[
                    { lang: "Indonesian", level: "Native", pct: 100 },
                    { lang: "English", level: "Professional", pct: 75 },
                  ].map((l) => (
                    <div key={l.lang}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">{l.lang}</span>
                        <span className="text-gray-500 dark:text-gray-400">{l.level}</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 dark:bg-dark-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-cyan-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${l.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
