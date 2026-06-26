# Portfolio Redesign — Editorial/Resume-Style Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Redesign portfolio from dark/animated style to a clean Editorial/Resume-Style — text-only Hero, Experience first, photo in About, subtle animations only.

**Architecture:** All changes are in-place rewrites of existing component files. No new files are created except `public/photo.jpg` (user-provided). Page order in `src/app/page.tsx` is updated to put Experience before About. All animations use framer-motion `whileInView` — no SMIL, no marquee, no looping animations.

**Tech Stack:** Next.js 16.2.9, React 19.2.4, Tailwind CSS v3.4.19, framer-motion v12, TypeScript strict

## Global Constraints

- Accent color: teal `#14b8a6` (Tailwind `primary-500`) — used sparingly on dots, underlines, buttons
- framer-motion v12 uses WAAPI — never animate SVG presentation attributes (`cx`, `cy`, `r`) via motion
- No SVG topology, no marquee, no SMIL animations, no looping/particle animations
- Profile photo at `public/photo.jpg` — use Next.js `<Image>` with `onError` fallback to initials placeholder
- Dark mode must remain functional on all components
- All components keep `"use client"` directive
- TypeScript strict — no `any`, explicit prop types
- Run `npm run build` after each task to verify no TypeScript errors

---

### Task 1: Swap page order — Experience before About

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `Hero`, `Experience`, `About`, `Skills`, `Projects`, `Contact` — no changes to exports
- Produces: page renders in order: Hero → Experience → About → Skills → Projects → Contact

- [ ] **Step 1: Update import order and component order in page.tsx**

Replace entire file:

```tsx
import { Hero } from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```
Expected: exit 0, "Compiled successfully"

- [ ] **Step 3: Commit**

```bash
git add src/app/page.tsx
git commit -m "redesign: move Experience before About in page order"
```

---

### Task 2: Hero — text-only clean rewrite

**Files:**
- Modify: `src/components/Hero.tsx` (complete rewrite — removes SVG topology, terminal window, tools ticker, SMIL animations)

**Interfaces:**
- Consumes: `Button` from `@/components/ui/Button`, `LinkedinIcon` from `@/components/icons/BrandIcons`
- Produces: `export function Hero()` — `<section>` full-viewport, left-aligned text layout

- [ ] **Step 1: Replace Hero.tsx entirely**

```tsx
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
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```
Expected: exit 0, "Compiled successfully"

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "redesign: Hero — clean text-only editorial layout"
```

---

### Task 3: Experience — full-width vertical timeline

**Files:**
- Modify: `src/components/Experience.tsx` (complete rewrite — keep existing data, redesign layout)

**Interfaces:**
- Consumes: `motion` from `framer-motion`, `Briefcase`, `GraduationCap`, `MapPin`, `Calendar` from `lucide-react`
- Produces: `export function Experience()` — `<section id="experience">`, `bg-gray-50`

- [ ] **Step 1: Replace Experience.tsx entirely**

```tsx
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
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```
Expected: exit 0

- [ ] **Step 3: Commit**

```bash
git add src/components/Experience.tsx
git commit -m "redesign: Experience — full-width vertical timeline with education below"
```

---

### Task 4: About — 2-col photo + bio + stats

**Files:**
- Modify: `src/components/About.tsx` (complete rewrite — removes values cards, adds photo column)

**Interfaces:**
- Consumes: `Image` from `next/image`, `motion` from `framer-motion`
- Produces: `export function About()` — `<section id="about">`, `bg-white`
- Photo: Next.js `<Image src="/photo.jpg">` with `onError` → initials "RP" fallback

- [ ] **Step 1: Replace About.tsx entirely**

```tsx
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
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```
Expected: exit 0

- [ ] **Step 3: Commit**

```bash
git add src/components/About.tsx
git commit -m "redesign: About — 2-col photo + bio + stats"
```

---

### Task 5: Navbar — clean desktop links (remove icons)

**Files:**
- Modify: `src/components/Navbar.tsx` (targeted edit — remove icon fields from nav links, remove unused imports)

**Interfaces:**
- No interface changes — same `export function Navbar()`
- Scroll-aware transparency already implemented — keep as-is

- [ ] **Step 1: Update navLinks to remove icon field**

Replace the `navLinks` array:

```tsx
const navLinks = [
  { href: "#about",      label: "About"      },
  { href: "#experience", label: "Experience" },
  { href: "#skills",     label: "Skills"     },
  { href: "#projects",   label: "Projects"   },
  { href: "#contact",    label: "Contact"    },
];
```

- [ ] **Step 2: Update lucide-react import — remove Briefcase and User**

```tsx
import { Menu, X, Sun, Moon, Mail, Code } from "lucide-react";
```

- [ ] **Step 3: Update desktop nav link render — remove Icon component**

Replace the desktop nav link map:

```tsx
{navLinks.map((link) => (
  <Link
    key={link.href}
    href={link.href}
    className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors relative group"
  >
    {link.label}
    <motion.span
      className="absolute bottom-[-4px] left-0 w-full h-0.5 bg-primary-500 origin-center"
      initial={{ scaleX: 0 }}
      whileHover={{ scaleX: 1 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    />
  </Link>
))}
```

- [ ] **Step 4: Update mobile nav link render — remove Icon component**

Replace the mobile nav link map:

```tsx
{navLinks.map((link) => (
  <Link
    key={link.href}
    href={link.href}
    className="flex items-center px-2 py-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-dark-100 font-medium"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    {link.label}
  </Link>
))}
```

- [ ] **Step 5: Verify build passes**

```bash
npm run build
```
Expected: exit 0, no unused variable warnings

- [ ] **Step 6: Commit**

```bash
git add src/components/Navbar.tsx
git commit -m "redesign: Navbar — clean text links, remove nav icons"
```

---

### Task 6: Cleanup — remove marquee from globals.css and tailwind.config.ts

**Files:**
- Modify: `src/app/globals.css`
- Modify: `tailwind.config.ts`

**Interfaces:** No component interface changes — CSS/config cleanup only

- [ ] **Step 1: Remove marquee keyframe and utility from globals.css**

In `src/app/globals.css`:

Remove these lines (the `@keyframes` block outside layers):
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

And remove from `@layer utilities`:
```css
.animate-marquee {
  animation: marquee 30s linear infinite;
}
```

The final `globals.css` should be:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-inter: "Inter", system-ui, sans-serif;
    --font-display: "Space Grotesk", system-ui, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-white dark:bg-dark-300 text-gray-900 dark:text-gray-100 transition-colors duration-300;
  }

  ::selection {
    @apply bg-primary-500/30 text-primary-600;
  }

  .dark ::selection {
    @apply text-primary-400;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .animate-delay-100 { animation-delay: 100ms; }
  .animate-delay-200 { animation-delay: 200ms; }
  .animate-delay-300 { animation-delay: 300ms; }
  .animate-delay-400 { animation-delay: 400ms; }
  .animate-delay-500 { animation-delay: 500ms; }
}
```

- [ ] **Step 2: Remove marquee from tailwind.config.ts**

In `tailwind.config.ts`, remove from `animation` object:
```ts
"marquee": "marquee 30s linear infinite",
```

Remove from `keyframes` object:
```ts
marquee: {
  "0%": { transform: "translateX(0)" },
  "100%": { transform: "translateX(-50%)" },
},
```

- [ ] **Step 3: Verify build passes**

```bash
npm run build
```
Expected: exit 0

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css tailwind.config.ts
git commit -m "cleanup: remove marquee animation (ticker removed)"
```

---

### Task 7: Push to GitHub and add profile photo

**Files:**
- No code changes — push + manual photo step

- [ ] **Step 1: Push all commits to GitHub**

```bash
git push
```
Expected: master → master, all 6 commits pushed

- [ ] **Step 2: Add profile photo (manual step for user)**

Place profile photo file at `public/photo.jpg` in the project root.
Photo requirements: minimum 400×480px, JPG or PNG renamed to `photo.jpg`.

Then commit and push:
```bash
git add public/photo.jpg
git commit -m "add: profile photo"
git push
```

- [ ] **Step 3: Verify production at https://portofolio-repams.vercel.app/**

After Vercel rebuild (~2 min), confirm:
- Hero: large text, no SVG background, "Available" badge visible
- Experience: vertical timeline, teal dot on current job
- About: profile photo (or "RP" fallback), 2-col layout, 4 stats
- Navbar: clean text links, transparent at top → solid on scroll
- No console errors
