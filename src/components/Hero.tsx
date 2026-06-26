"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, MapPin, ChevronDown } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/BrandIcons";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white dark:bg-dark-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Available badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-green-700 dark:text-green-400">
              Available for opportunities
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-4">
            <span className="text-gray-900 dark:text-white block">Hi, I&apos;m</span>
            <span className="relative inline-block">
              <span className="text-gray-900 dark:text-white">Resa Pamungkas</span>
              <span className="text-primary-600 dark:text-primary-400">.</span>
              <motion.span
                className="absolute bottom-1 left-0 w-full h-[3px] bg-primary-500/30 -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                style={{ originX: "0%" }}
                transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-500 dark:text-gray-400 mb-6">
            Network Operation Center Engineer
          </h2>

          {/* Bio */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-4 leading-relaxed">
            Dedicated NOC Engineer with 3+ years of experience monitoring, maintaining, and
            troubleshooting network systems in a 24/7 operational environment. Skilled in
            Zabbix, PRTG, Grafana, Mikrotik RouterOS, and Cisco infrastructure.
          </p>

          {/* Location */}
          <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm mb-8">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>Tangerang, Indonesia</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-10">
            <Button
              size="lg"
              className="group"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get In Touch
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Experience
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/repamungkas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group"
            >
              <motion.div
                className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-dark-100 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
                whileHover={{ scale: 1.1, rotate: -3 }}
              >
                <LinkedinIcon className="w-5 h-5" />
              </motion.div>
            </a>
            <a
              href="mailto:pamungkas.re@gmail.com"
              aria-label="Email"
              className="group"
            >
              <motion.div
                className="w-11 h-11 rounded-xl bg-gray-100 dark:bg-dark-100 flex items-center justify-center text-gray-500 dark:text-gray-400 transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white"
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <Mail className="w-5 h-5" />
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-xs text-gray-400 dark:text-gray-500 tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 text-gray-400 dark:text-gray-500" />
      </motion.div>
    </section>
  );
}
