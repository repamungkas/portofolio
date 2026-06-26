"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
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
      "Collaborate with cross-functional teams to implement updates and scheduled maintenance",
      "Ensure SLAs are met and contribute to continuous improvement initiatives",
    ],
    tools: ["Zabbix", "PRTG", "Grafana", "The Dude", "Mikrotik", "Cisco", "Smart Tracker"],
  },
  {
    title: "IT Support",
    organization: "PT Loka Abadi Sentausa",
    location: "Malang",
    period: "November 2021 — March 2022",
    current: false,
    responsibilities: [
      "Support troubleshooting internal hardware such as PC, printer, AP, and router",
      "Monitor local network, server, and Synology NAS",
      "Maintain website and create product content",
      "Design and layout marketing materials",
    ],
    tools: ["Networking", "Synology NAS", "Router", "AP", "Hardware"],
  },
];

const education = [
  {
    degree: "Diploma IV — Informatics Engineering",
    institution: "Politeknik Negeri Malang",
    location: "Malang",
    period: "2017 — 2021",
  },
  {
    degree: "Computer and Network Engineering",
    institution: "SMK Telkom Malang",
    location: "Malang",
    period: "2015 — 2017",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32 px-4 sm:px-6 bg-gray-50 dark:bg-dark-200/50">
      <div className="max-w-4xl mx-auto">

        {/* Section header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Over 3 years building expertise in network operations, incident management, and infrastructure monitoring.
          </p>
        </motion.div>

        {/* Work timeline */}
        <div className="relative mb-20">
          <div className="absolute left-4 sm:left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-primary-300 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.organization}
                className="relative pl-14 sm:pl-20"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-0 sm:left-[6px] top-6 w-8 h-8 rounded-full border-4 border-gray-50 dark:border-dark-200 flex items-center justify-center -translate-y-1/2 ${
                  exp.current
                    ? "bg-primary-500"
                    : "bg-white dark:bg-dark-100 border-2 border-gray-300 dark:border-dark-100"
                }`}>
                  <Briefcase className={`w-3.5 h-3.5 ${exp.current ? "text-white" : "text-gray-400"}`} />
                </div>

                {/* Card */}
                <div className="bg-white dark:bg-dark-100 rounded-2xl shadow-sm border border-gray-100 dark:border-dark-100 p-5 sm:p-6 hover:shadow-md transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-snug">
                        {exp.title}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-semibold text-sm mt-0.5">
                        {exp.organization}
                      </p>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                      {exp.current && (
                        <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          Current
                        </span>
                      )}
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3.5 h-3.5" />
                        <span className="whitespace-nowrap">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.responsibilities.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300 leading-relaxed"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100 dark:border-dark-100">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 text-xs font-medium rounded-lg bg-teal-50 dark:bg-primary-900/20 text-teal-700 dark:text-primary-300 border border-teal-100 dark:border-primary-800/30"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education header */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-9 h-9 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-600 dark:text-primary-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
        </motion.div>

        {/* Education timeline */}
        <div className="relative">
          <div className="absolute left-4 sm:left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-gray-300 via-gray-200 to-transparent dark:from-dark-100 dark:via-dark-100" />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                className="relative pl-14 sm:pl-20"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              >
                <div className="absolute left-0 sm:left-[6px] top-5 w-8 h-8 rounded-full bg-white dark:bg-dark-100 border-2 border-gray-200 dark:border-dark-100 flex items-center justify-center -translate-y-1/2">
                  <GraduationCap className="w-3.5 h-3.5 text-gray-400" />
                </div>

                <div className="bg-white dark:bg-dark-100 rounded-2xl border border-gray-100 dark:border-dark-100 p-5 hover:shadow-sm transition-shadow duration-300">
                  <h4 className="font-bold text-gray-900 dark:text-white leading-snug mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                      <MapPin className="w-3 h-3" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
