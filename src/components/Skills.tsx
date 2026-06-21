"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/Card";

const skills = [
  {
    category: "Monitoring Tools",
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "Zabbix", level: 95 },
      { name: "PRTG", level: 85 },
      { name: "Grafana", level: 80 },
      { name: "The Dude", level: 75 },
    ],
  },
  {
    category: "Network Infrastructure",
    color: "from-green-500 to-emerald-500",
    items: [
      { name: "Mikrotik RouterOS", level: 90 },
      { name: "Cisco", level: 80 },
      { name: "Routing & Switching", level: 85 },
      { name: "Wireless", level: 75 },
    ],
  },
  {
    category: "Operating Systems",
    color: "from-purple-500 to-pink-500",
    items: [
      { name: "Linux", level: 80 },
      { name: "Windows Server", level: 75 },
      { name: "Synology NAS", level: 70 },
    ],
  },
  {
    category: "Core Competencies",
    color: "from-orange-500 to-red-500",
    items: [
      { name: "Troubleshooting", level: 95 },
      { name: "Incident Management", level: 90 },
      { name: "SLA Compliance", level: 90 },
      { name: "Documentation", level: 85 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 bg-gray-50 dark:bg-dark-200/50">
      <div className="max-w-7xl mx-auto">
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
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance mb-4">
            Skills & <span className="text-primary-600 dark:text-primary-400">Expertise</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            A focused skill set built through years of hands-on experience in 24/7 network operations.
            Always expanding, always refining.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 * catIndex }}
            >
              <Card variant="elevated" hover className="h-full p-5 sm:p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                    <span className="text-white font-bold text-sm">{category.category.slice(0, 2).toUpperCase()}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-tight">{category.category}</h3>
                </div>

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

        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-center text-lg font-medium text-gray-600 dark:text-gray-400 mb-8">
            Also Familiar With
          </h3>
          <TechCloud />
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div ref={ref} className="group">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500 dark:text-gray-400 font-mono">{level}%</span>
      </div>
      <div className="h-2 bg-gray-100 dark:bg-dark-100 rounded-full overflow-hidden relative">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color} relative`}
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${level}%` : 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay }}
        >
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

function TechCloud() {
  const techs = [
    "BGP", "OSPF", "VPN", "VLAN", "NAT", "Firewall", "SNMP", "SSH",
    "Telnet", "Wireshark", "Ping", "Traceroute", "DHCP", "DNS",
    "Smart Tracker", "Ticketing Systems", "Bash Scripting", "SLA Reporting",
    "Incident Response", "Network Documentation", "ISP Infrastructure",
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
      {techs.map((tech, i) => (
        <motion.span
          key={tech}
          className="px-3 sm:px-4 py-1.5 rounded-full bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium border border-gray-200 dark:border-dark-200 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 cursor-default"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.04 * i }}
          whileHover={{ scale: 1.05, y: -2 }}
        >
          {tech}
        </motion.span>
      ))}
    </div>
  );
}
