"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Mail, ArrowRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import React from "react";

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], borderRadius: ["30%", "70%", "30%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.15, 1], borderRadius: ["70%", "30%", "70%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
        />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            Available for freelance &amp; full-time opportunities
          </motion.span>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance mb-6">
            Building <br />
            <span className="relative">
              <span className="relative z-10">Digital</span>
              <motion.span
                className="absolute bottom-2 left-0 right-0 h-4 bg-primary-500/20 -z-10"
                animate={{ scaleX: [0, 1] }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              />
            </span>
            <span className="text-primary-600 dark:text-primary-400">Experiences</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-8 leading-relaxed">
            Full-stack developer crafting performant, accessible, and delightful web applications.
            Turning complex problems into elegant solutions.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="group">
              View Projects
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              <Mail className="w-5 h-5" />
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-dark-100 flex items-center justify-center transition-all duration-300 group-hover:bg-primary-600 group-hover:text-white"
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <GithubIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
              </motion.div>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-dark-100 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white"
                whileHover={{ scale: 1.1, rotate: -3 }}
              >
                <LinkedinIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
              </motion.div>
            </a>
            <a href="mailto:hello@example.com" className="group">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-dark-100 flex items-center justify-center transition-all duration-300 group-hover:bg-green-600 group-hover:text-white"
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
              </motion.div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          <TerminalWindow />
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div className="w-6 h-10 border-2 border-gray-300 dark:border-dark-100 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full"
            animate={{ y: [0, 6, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    opacity: Math.random() * 0.3 + 0.1,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-primary-500/30 dark:text-primary-400/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {["{", "}", "<", ">", ";", "=>", "()", "[]"].join(" ")}
        </motion.div>
      ))}
    </div>
  );
}

function TerminalWindow() {
  const lines = [
    { text: "developer@portfolio:~$ whoami", delay: 0, speed: 30 },
    { text: "fullstack-developer", delay: 1.2, speed: 0 },
    { text: "developer@portfolio:~$ cat skills.json", delay: 1.8, speed: 30 },
    { text: '{"frontend": ["Next.js", "React", "TypeScript", "Tailwind"]}', delay: 2.5, speed: 0 },
    { text: '{"backend": ["Node.js", "PostgreSQL", "Prisma", "Redis"]}', delay: 2.8, speed: 0 },
    { text: '{"tools": ["Git", "Docker", "Vercel", "Framer Motion"]}', delay: 3.1, speed: 0 },
    { text: "developer@portfolio:~$ npm run deploy", delay: 3.8, speed: 30 },
    { text: "> Building...", delay: 4.5, speed: 0 },
    { text: "> Optimizing...", delay: 4.8, speed: 0 },
    { text: "> Deployed to Vercel!", delay: 5.1, speed: 0 },
    { text: "developer@portfolio:~$ _", delay: 5.5, speed: 0, cursor: true },
  ];

  return (
    <Card variant="elevated" className="w-full max-w-xl mx-auto animate-float">
      <div className="overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-dark-100 border-b border-gray-200 dark:border-dark-100">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 text-center text-xs text-gray-500 dark:text-gray-400 font-mono">
            portfolio:~
          </div>
        </div>

        <div className="p-6 font-mono text-sm text-gray-100 bg-dark-300 min-h-[300px]">
          <TerminalOutput lines={lines} />
        </div>
      </div>
    </Card>
  );
}

function TerminalOutput({ lines }: { lines: Array<{ text: string; delay: number; speed: number; cursor?: boolean }> }) {
  const [visibleLines, setVisibleLines] = React.useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState("");
  const [showCursor, setShowCursor] = React.useState(false);

  React.useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const line = lines[currentLineIndex];
    const timeout = setTimeout(() => {
      if (line.speed > 0) {
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          setCurrentText(line.text.slice(0, charIndex + 1));
          charIndex++;
          if (charIndex >= line.text.length) {
            clearInterval(typeInterval);
            setTimeout(() => {
              setVisibleLines((prev) => [...prev, line.text]);
              setCurrentText("");
              setCurrentLineIndex((prev) => prev + 1);
              setShowCursor(line.cursor || false);
            }, line.delay * 1000);
          }
        }, line.speed);
        return () => clearInterval(typeInterval);
      } else {
        setVisibleLines((prev) => [...prev, line.text]);
        setCurrentLineIndex((prev) => prev + 1);
        setShowCursor(line.cursor || false);
      }
    }, line.delay * 1000);

    return () => clearTimeout(timeout);
  }, [currentLineIndex, lines]);

  return (
    <div className="space-y-1">
      {visibleLines.map((line, i) => (
        <div key={i} className="text-green-400 whitespace-pre-wrap">
          {line}
        </div>
      ))}
      {currentText && (
        <div className="text-green-400 whitespace-pre-wrap">
          {currentText}
          <span className="animate-pulse">|</span>
        </div>
      )}
      {showCursor && (
        <div className="flex items-center gap-1 text-green-400">
          <span>developer@portfolio:~$</span>
          <span className="animate-pulse">|</span>
        </div>
      )}
    </div>
  );
}
