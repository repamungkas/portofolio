"use client";

import Link from "next/link";
import { Mail, Code, Heart, ArrowUp } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/BrandIcons";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = {
    Navigation: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    Connect: [
      { label: "LinkedIn", href: "https://linkedin.com/in/repamungkas" },
      { label: "Email", href: "mailto:pamungkas.re@gmail.com" },
      { label: "WhatsApp", href: "https://wa.me/6282257537871" },
    ],
  };

  const socialLinks = [
    { icon: LinkedinIcon, href: "https://linkedin.com/in/repamungkas", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail, href: "mailto:pamungkas.re@gmail.com", label: "Email", color: "hover:text-green-400" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-200/50 border-t border-gray-200 dark:border-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
          <motion.div
            className="col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="#" className="font-display text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <Code className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              <span>Resa<span className="text-primary-600 dark:text-primary-400">.</span></span>
            </Link>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 max-w-xs leading-relaxed">
              NOC Engineer passionate about keeping networks running 24/7.
              Seeking opportunities in network automation, cybersecurity, and cloud networking.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-gray-100 dark:bg-dark-100 flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300 ${social.color}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(navLinks).map(([category, links], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
            >
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-dark-100 to-transparent" />
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-100 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary-600" />
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-dark-100 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
            &copy; {currentYear} Resa Putra Agung Pamungkas. Built with Next.js &amp; Tailwind CSS.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
              Made with <Heart className="w-4 h-4 text-red-500 inline-block align-middle mx-1" /> from Tangerang
            </p>
            <motion.button
              className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
