"use client";

import { useState, type ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Activity, Server, Shield, Zap, type LucideProps } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const projects = [
  {
    id: 1,
    title: "24/7 Network Monitoring",
    description: "Real-time monitoring of ISP network infrastructure — servers, routers, switches, and applications — using multi-platform monitoring tools with automated alerting.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    tags: ["Zabbix", "PRTG", "The Dude", "SNMP", "Grafana", "Alerting"],
    category: "monitoring",
    features: ["Real-time alerts", "Custom dashboards", "Multi-site monitoring", "24/7 uptime"],
  },
  {
    id: 2,
    title: "Incident Response System",
    description: "End-to-end incident lifecycle management — from detection and diagnosis through escalation to L2/L3 teams and final resolution — ensuring SLA compliance.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop",
    tags: ["Smart Tracker", "SLA", "Escalation", "ITIL", "Documentation"],
    category: "management",
    features: ["SLA tracking", "Ticket management", "L2/L3 escalation", "Post-incident reports"],
  },
  {
    id: 3,
    title: "Mikrotik Infrastructure",
    description: "Configuration, management, and troubleshooting of Mikrotik RouterOS-based network infrastructure including routing, bandwidth management, firewall, and VPN.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop",
    tags: ["Mikrotik", "RouterOS", "Firewall", "BGP", "OSPF", "VPN"],
    category: "infrastructure",
    features: ["Routing config", "Firewall rules", "Bandwidth management", "VPN tunnels"],
  },
  {
    id: 4,
    title: "Cisco Network Architecture",
    description: "Deployment, configuration, and troubleshooting of Cisco switching and routing infrastructure with a focus on high availability and performance.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    tags: ["Cisco", "Switching", "Routing", "VLAN", "STP", "QoS"],
    category: "infrastructure",
    features: ["Layer 2/3 switching", "VLAN segmentation", "High availability", "QoS policies"],
  },
  {
    id: 5,
    title: "SLA Compliance & Reporting",
    description: "Monitoring and reporting of service level agreement compliance with trend analysis, availability reports, and stakeholder dashboards built in Grafana.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["Grafana", "KPI", "Reporting", "Analytics", "Dashboards"],
    category: "monitoring",
    features: ["Availability reports", "KPI tracking", "Trend analysis", "Stakeholder views"],
  },
  {
    id: 6,
    title: "IT Infrastructure Support",
    description: "Comprehensive IT support covering hardware troubleshooting, local network monitoring, server administration, Synology NAS management, and website maintenance.",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=600&fit=crop",
    tags: ["Hardware", "Networking", "Synology", "Linux", "Windows"],
    category: "management",
    features: ["Hardware repair", "NAS management", "Network setup", "Web content"],
  },
];

type Category = {
  id: string;
  label: string;
  icon?: ComponentType<LucideProps>;
};

const categories: Category[] = [
  { id: "all", label: "All" },
  { id: "monitoring", label: "Monitoring", icon: Activity },
  { id: "infrastructure", label: "Infrastructure", icon: Server },
  { id: "management", label: "Management", icon: Shield },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 bg-white dark:bg-dark-300">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
            Work Highlights
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-balance mb-4">
            Key <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Core areas of responsibility and expertise from real-world network operations.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
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
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -6 }}
    >
      <Card
        variant="elevated"
        hover
        className="overflow-hidden h-full flex flex-col group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
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
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4 sm:p-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2.5 py-1 text-xs font-medium bg-white/10 backdrop-blur-sm text-white/70 border border-white/20 rounded-full">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="p-5 sm:p-6 flex flex-col flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {project.title}
            </h3>
            <span
              className={`px-2 py-0.5 text-xs font-medium rounded-full flex-shrink-0 ${
                project.category === "monitoring"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  : project.category === "infrastructure"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                  : "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300"
              }`}
            >
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
          </div>

          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {project.features.map((feature) => (
              <span key={feature} className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
                <Zap className="w-3 h-3 text-primary-500 flex-shrink-0" />
                {feature}
              </span>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
