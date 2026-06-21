"use client";

import Link from "next/link";
import { Mail, Code, Heart, ArrowUp } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterXIcon } from "@/components/icons/BrandIcons";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = {
    Product: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "#" },
      { label: "Roadmap", href: "#" },
    ],
    Company: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "Community", href: "#" },
      { label: "Templates", href: "#" },
      { label: "API Reference", href: "#" },
    ],
    Legal: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Security", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com", label: "GitHub", color: "hover:text-gray-400" },
    { icon: LinkedinIcon, href: "https://linkedin.com", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: TwitterXIcon, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-400" },
    { icon: Mail, href: "mailto:hello@developer.dev", label: "Email", color: "hover:text-green-400" },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-dark-200/50 border-t border-gray-200 dark:border-dark-100 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
          <motion.div className="col-span-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link href="#" className="font-display text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
              <Code className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              <span>Portfolio</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xs leading-relaxed">
              Crafting performant, accessible, and delightful web experiences.
              Built with passion, precision, and lots of coffee.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-gray-100 dark:bg-dark-100 flex items-center justify-center text-gray-600 dark:text-gray-300 transition-all duration-300 group ${social.color}`}
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
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * linkIndex }}
                  >
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
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
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
            &copy; {currentYear} Portfolio. Built with Next.js, TypeScript, Tailwind &amp; Framer Motion.
          </p>

          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block">
              Made with
              <Heart className="w-4 h-4 text-red-500 inline-block align-middle mx-1" />
              by Developer
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
