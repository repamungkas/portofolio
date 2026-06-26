"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "3+",    label: "Years Experience" },
  { value: "99.9%", label: "SLA Compliance"   },
  { value: "24/7",  label: "Operations"       },
  { value: "2+",    label: "Companies"        },
];

export function About() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 bg-white dark:bg-dark-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Photo column */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {!imgError ? (
              <Image
                src="/photo.jpg"
                alt="Resa Putra Agung Pamungkas"
                width={400}
                height={480}
                className="rounded-2xl shadow-lg object-cover w-full max-w-sm lg:max-w-none"
                onError={() => setImgError(true)}
                priority
              />
            ) : (
              <div className="w-full max-w-sm lg:max-w-none aspect-[4/5] rounded-2xl shadow-lg bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40 flex items-center justify-center">
                <span className="font-display text-7xl font-bold text-primary-600 dark:text-primary-400">
                  RP
                </span>
              </div>
            )}
          </motion.div>

          {/* Content column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-4">
              About Me
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Keeping Networks{" "}
              <span className="text-primary-600 dark:text-primary-400">Running 24/7</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
              <p>
                I&apos;m a dedicated Network Operation Center Engineer based in Tangerang, Indonesia,
                with 3+ years of hands-on experience in ISP network monitoring and incident management.
              </p>
              <p>
                I thrive in fast-paced 24/7 environments where uptime and reliability are critical.
                My work spans real-time monitoring with Zabbix and PRTG, troubleshooting Mikrotik and
                Cisco infrastructure, and ensuring SLA compliance for enterprise customers.
              </p>
              <p>
                I&apos;m currently seeking opportunities to grow in network automation, cybersecurity,
                or cloud networking.
              </p>
            </div>

            {/* Stats 2×2 grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="bg-gray-50 dark:bg-dark-200 rounded-2xl p-5 border border-gray-100 dark:border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + 0.1 * i }}
                >
                  <div className="font-display text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
