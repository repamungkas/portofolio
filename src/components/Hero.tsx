"use client";

import { motion } from "framer-motion";
import { Network, Mail, ArrowRight, MapPin } from "lucide-react";
import { LinkedinIcon } from "@/components/icons/BrandIcons";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import React from "react";

// ─── Topology data (all static — no Math.random to avoid hydration errors) ───

type NodeDef = { id: string; cx: number; cy: number; r: number; label: string; type: string };
type EdgeDef = { from: string; to: string; dashed?: boolean };
type PacketDef = {
  id: number;
  x1: number; y1: number;
  x2: number; y2: number;
  duration: number;
  delay: number;
  repeatDelay: number;
  monitoring?: boolean;
};

const NODES: NodeDef[] = [
  { id: "cloud", cx: 50,  cy: 5,  r: 3.5, label: "Internet",   type: "cloud"  },
  { id: "core",  cx: 50,  cy: 22, r: 5.5, label: "Core Router",type: "core"   },
  { id: "srv1",  cx: 15,  cy: 22, r: 3,   label: "Server",     type: "server" },
  { id: "srv2",  cx: 85,  cy: 22, r: 3,   label: "Server",     type: "server" },
  { id: "dist1", cx: 18,  cy: 45, r: 3.8, label: "SW-Dist-1",  type: "dist"   },
  { id: "dist2", cx: 50,  cy: 45, r: 3.8, label: "SW-Dist-2",  type: "dist"   },
  { id: "dist3", cx: 82,  cy: 45, r: 3.8, label: "SW-Dist-3",  type: "dist"   },
  { id: "acc1",  cx: 6,   cy: 67, r: 2.8, label: "SW-Acc-1",   type: "access" },
  { id: "acc2",  cx: 26,  cy: 67, r: 2.8, label: "SW-Acc-2",   type: "access" },
  { id: "acc3",  cx: 50,  cy: 67, r: 2.8, label: "SW-Acc-3",   type: "access" },
  { id: "acc4",  cx: 74,  cy: 67, r: 2.8, label: "SW-Acc-4",   type: "access" },
  { id: "acc5",  cx: 94,  cy: 67, r: 2.8, label: "SW-Acc-5",   type: "access" },
  { id: "noc",   cx: 50,  cy: 87, r: 4.5, label: "NOC",        type: "noc"    },
];

const EDGES: EdgeDef[] = [
  { from: "cloud", to: "core"  },
  { from: "core",  to: "srv1"  },
  { from: "core",  to: "srv2"  },
  { from: "srv1",  to: "srv2"  },
  { from: "core",  to: "dist1" },
  { from: "core",  to: "dist2" },
  { from: "core",  to: "dist3" },
  { from: "dist1", to: "acc1"  },
  { from: "dist1", to: "acc2"  },
  { from: "dist2", to: "acc3"  },
  { from: "dist3", to: "acc4"  },
  { from: "dist3", to: "acc5"  },
  { from: "noc", to: "dist1", dashed: true },
  { from: "noc", to: "dist2", dashed: true },
  { from: "noc", to: "dist3", dashed: true },
];

const NODE_MAP = Object.fromEntries(NODES.map((n) => [n.id, n]));

// Deterministic packet generation (no Math.random)
function buildPackets(): PacketDef[] {
  const packets: PacketDef[] = [];
  let pid = 0;

  EDGES.filter((e) => !e.dashed).forEach((edge, i) => {
    const f = NODE_MAP[edge.from];
    const t = NODE_MAP[edge.to];
    const count = 3;
    const gap = 2.4;
    for (let j = 0; j < count; j++) {
      const dur = 1.8 + (i % 3) * 0.25;
      const delay = j * gap + (i % 5) * 0.55;
      packets.push({ id: pid++, x1: f.cx, y1: f.cy, x2: t.cx, y2: t.cy, duration: dur, delay, repeatDelay: count * gap - dur });
      packets.push({ id: pid++, x1: t.cx, y1: t.cy, x2: f.cx, y2: f.cy, duration: dur + 0.4, delay: delay + 1.1, repeatDelay: count * gap - dur - 0.4 });
    }
  });

  EDGES.filter((e) => e.dashed).forEach((edge, i) => {
    const f = NODE_MAP[edge.from];
    const t = NODE_MAP[edge.to];
    for (let j = 0; j < 2; j++) {
      packets.push({ id: pid++, x1: f.cx, y1: f.cy, x2: t.cx, y2: t.cy, duration: 2.2, delay: j * 4.5 + i * 1.8, repeatDelay: 7, monitoring: true });
    }
  });

  return packets;
}

const PACKETS = buildPackets();

// ─── Main Hero ────────────────────────────────────────────────────────────────

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-dark-300">

      {/* ── Network Topology Background ── */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.22]" aria-hidden="true">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          className="text-primary-600 dark:text-primary-400"
        >
          <defs>
            <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="1.2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <radialGradient id="core-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#14b8a6" stopOpacity="1" />
              <stop offset="100%" stopColor="#0d9488" stopOpacity="0.8" />
            </radialGradient>
            <radialGradient id="noc-grad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#2dd4bf" stopOpacity="1" />
              <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.8" />
            </radialGradient>
          </defs>

          {/* Edges */}
          {EDGES.map((edge) => {
            const f = NODE_MAP[edge.from];
            const t = NODE_MAP[edge.to];
            return (
              <line
                key={`${edge.from}-${edge.to}`}
                x1={f.cx} y1={f.cy} x2={t.cx} y2={t.cy}
                stroke="currentColor"
                strokeWidth={edge.dashed ? 0.25 : 0.4}
                strokeDasharray={edge.dashed ? "1.2 1.2" : undefined}
                opacity={edge.dashed ? 0.5 : 0.7}
              />
            );
          })}

          {/* Data packets — native SMIL so SVG attributes animate in all browsers */}
          {PACKETS.map((p) => {
            const cycle = p.duration + p.repeatDelay;
            const tf = +(p.duration / cycle).toFixed(4);
            const kT = `0;${+(0.08 * tf).toFixed(4)};${+(0.92 * tf).toFixed(4)};${tf};1`;
            return (
              <circle
                key={p.id}
                r={p.monitoring ? 0.65 : 0.85}
                fill={p.monitoring ? "#2dd4bf" : "currentColor"}
              >
                <animate attributeName="cx" calcMode="linear" values={`${p.x1};${p.x2};${p.x2}`} keyTimes={`0;${tf};1`} dur={`${cycle}s`} begin={`${p.delay}s`} repeatCount="indefinite" />
                <animate attributeName="cy" calcMode="linear" values={`${p.y1};${p.y2};${p.y2}`} keyTimes={`0;${tf};1`} dur={`${cycle}s`} begin={`${p.delay}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0;0" keyTimes={kT} dur={`${cycle}s`} begin={`${p.delay}s`} repeatCount="indefinite" />
              </circle>
            );
          })}

          {/* Nodes — SMIL for all per-node animations */}
          {NODES.map((node) => {
            const isKey = node.type === "core" || node.type === "noc";
            const pulseBegin = node.type === "noc" ? "1.2s" : "0s";
            const pulseStroke = node.type === "noc" ? "#2dd4bf" : "currentColor";
            return (
              <g key={node.id} filter={isKey ? "url(#node-glow)" : undefined}>
                {/* Expanding pulse ring */}
                {isKey && (
                  <circle cx={node.cx} cy={node.cy} fill="none" stroke={pulseStroke} strokeWidth={0.3}>
                    <animate attributeName="r"       values={`${node.r + 1};${node.r + 4}`} dur="2.5s" begin={pulseBegin} repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1" />
                    <animate attributeName="opacity" values="0.5;0"                          dur="2.5s" begin={pulseBegin} repeatCount="indefinite" />
                  </circle>
                )}
                {/* Node body */}
                <circle
                  cx={node.cx} cy={node.cy} r={node.r}
                  fill={node.type === "core" ? "url(#core-grad)" : node.type === "noc" ? "url(#noc-grad)" : node.type === "cloud" ? "currentColor" : "none"}
                  stroke={isKey ? "none" : "currentColor"}
                  strokeWidth={0.45}
                  opacity={node.type === "cloud" ? 0.8 : 1}
                />
                {/* Blinking green status dot */}
                {node.type === "access" && (
                  <circle cx={node.cx + node.r * 0.6} cy={node.cy - node.r * 0.6} r={0.7} fill="#4ade80">
                    <animate attributeName="opacity" values="1;0.3;1" dur="2s" begin={`${+(node.cx * 0.02).toFixed(2)}s`} repeatCount="indefinite" />
                  </circle>
                )}
                {/* Labels for core / noc / cloud */}
                {(node.type === "core" || node.type === "noc" || node.type === "cloud") && (
                  <text x={node.cx} y={node.cy + node.r + 2.8} textAnchor="middle" fontSize="2.3" fontFamily="monospace" fill="currentColor" opacity={0.85}>
                    {node.label}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>

      {/* Readability overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/55 via-white/20 to-white/55 dark:from-dark-300/65 dark:via-dark-300/20 dark:to-dark-300/65 pointer-events-none" />

      {/* ── Hero content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800/50 mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="flex items-center gap-1.5 text-primary-700 dark:text-primary-300 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available
            </span>
            <span className="w-px h-3.5 bg-primary-300 dark:bg-primary-700" />
            <span className="text-gray-500 dark:text-gray-400 text-xs font-mono tracking-wide">
              Response &lt; 24h
            </span>
          </motion.div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-balance mb-4">
            Hi, I&apos;m{" "}
            <span className="relative">
              <span className="relative z-10 text-primary-600 dark:text-primary-400">Resa</span>
              <motion.span
                className="absolute bottom-2 left-0 right-0 h-3 bg-primary-500/20 -z-10"
                animate={{ scaleX: [0, 1] }}
                transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              />
            </span>
          </h1>

          <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-600 dark:text-gray-300 mb-4">
            Network Operation Center Engineer
          </h2>

          <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-6">
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span>Tangerang, Indonesia</span>
          </div>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8 leading-relaxed">
            Dedicated NOC Engineer with 3+ years of experience monitoring, maintaining, and
            troubleshooting network systems in a 24/7 operational environment. Skilled in
            Zabbix, Grafana, Mikrotik RouterOS, and Cisco infrastructure.
          </p>

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

          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/in/repamungkas" target="_blank" rel="noopener noreferrer" className="group">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-dark-100 flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600"
                whileHover={{ scale: 1.1, rotate: -3 }}
              >
                <LinkedinIcon className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
              </motion.div>
            </a>
            <a href="mailto:pamungkas.re@gmail.com" className="group">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-dark-100 flex items-center justify-center transition-all duration-300 group-hover:bg-green-600"
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <Mail className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
              </motion.div>
            </a>
            <a href="https://wa.me/6282257537871" target="_blank" rel="noopener noreferrer" className="group">
              <motion.div
                className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-dark-100 flex items-center justify-center transition-all duration-300 group-hover:bg-primary-600"
                whileHover={{ scale: 1.1, rotate: 3 }}
              >
                <Network className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors" />
              </motion.div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative hidden sm:block"
        >
          <TerminalWindow />
        </motion.div>
      </div>

      {/* Tools ticker */}
      <ToolsTicker />

      {/* Scroll indicator */}
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

// ─── Tools Ticker ─────────────────────────────────────────────────────────────

const TOOLS = [
  "Zabbix", "PRTG", "Grafana", "The Dude", "Mikrotik RouterOS",
  "Cisco", "Linux", "BGP", "OSPF", "VPN", "Smart Tracker",
  "Wireshark", "SNMP", "Routing & Switching", "Wireless", "Windows Server",
];

function ToolsTicker() {
  const items = [...TOOLS, ...TOOLS];
  return (
    <div className="absolute bottom-24 left-0 right-0 overflow-hidden">
      <div className="flex items-center gap-px mb-2.5">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-dark-100 to-transparent" />
      </div>
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {items.map((tool, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-widest"
          >
            <span className="w-1 h-1 rounded-full bg-primary-500 opacity-70" />
            {tool}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-px mt-2.5">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-dark-100 to-transparent" />
      </div>
    </div>
  );
}

// ─── Terminal ─────────────────────────────────────────────────────────────────

function TerminalWindow() {
  const lines = [
    { text: "noc@network:~$ whoami", delay: 0, speed: 30 },
    { text: "resa-putra-agung-pamungkas", delay: 1.2, speed: 0 },
    { text: "noc@network:~$ cat profile.txt", delay: 1.8, speed: 30 },
    { text: "Role : NOC Engineer", delay: 2.5, speed: 0 },
    { text: "Exp  : 3+ Years (2022 - Present)", delay: 2.7, speed: 0 },
    { text: "Base : Tangerang, Indonesia", delay: 2.9, speed: 0 },
    { text: "noc@network:~$ show tools", delay: 3.5, speed: 30 },
    { text: '{"monitoring": ["Zabbix","PRTG","Grafana","Dude"]}', delay: 4.2, speed: 0 },
    { text: '{"network"  : ["Mikrotik","Cisco","RouterOS"]}', delay: 4.4, speed: 0 },
    { text: '{"os"       : ["Linux","Windows"]}', delay: 4.6, speed: 0 },
    { text: "noc@network:~$ ping -c 3 sla.status", delay: 5.1, speed: 30 },
    { text: "64 bytes: time=99.9% uptime available", delay: 5.9, speed: 0 },
    { text: "64 bytes: time=99.9% uptime available", delay: 6.1, speed: 0 },
    { text: "3 packets transmitted, 0% packet loss", delay: 6.3, speed: 0 },
    { text: "noc@network:~$ _", delay: 6.8, speed: 0, cursor: true },
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
            noc@network:~
          </div>
        </div>
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm text-gray-100 bg-dark-300 min-h-[300px] overflow-x-auto">
          <TerminalOutput lines={lines} />
        </div>
      </div>
    </Card>
  );
}

function TerminalOutput({
  lines,
}: {
  lines: Array<{ text: string; delay: number; speed: number; cursor?: boolean }>;
}) {
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
            }, 300);
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
        <div key={i} className={`whitespace-pre-wrap ${line.startsWith("noc@") ? "text-green-400" : "text-gray-300"}`}>
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
          <span>noc@network:~$</span>
          <span className="animate-pulse ml-1">|</span>
        </div>
      )}
    </div>
  );
}
