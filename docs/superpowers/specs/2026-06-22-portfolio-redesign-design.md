# Portfolio Redesign — Editorial/Resume-Style
**Date:** 2026-06-22
**Author:** Resa Putra Agung Pamungkas
**Status:** Approved

---

## Overview

Full redesign of the personal portfolio website from the current "NOC dark/animated" style to a clean, professional Editorial/Resume-Style. Target audience: recruiters and hiring managers in network/ISP companies. Primary goal: make Experience the hero content, support easy readability, and present a trustworthy professional image.

---

## Design Decisions

### Style Direction
- **Approach:** Editorial / Resume-Style (Option A)
- **Primary mode:** Light (white + gray-50 sections)
- **Dark mode:** Supported, secondary
- **Accent color:** Teal (`#14b8a6`) — used sparingly on dots, underlines, buttons, borders
- **Typography:** Space Grotesk (headings/display) + Inter (body) — both already in project

### What's Removed
- Network topology SVG animation (too busy)
- Tools ticker scrolling marquee (gimmicky)
- Terminal window in Hero
- SMIL packet/pulse animations
- WhatsApp link (already removed, privacy)
- Phone number (already removed, privacy)

### What's New
- Profile photo in About section (`rounded-2xl`)
- Vertical timeline for Experience
- Text-only Hero with large typography
- Subtle scroll fade-in animations only

---

## Page Structure

```
Navbar → Hero → Experience → About → Skills → Projects → Contact → Footer
```

---

## Section Specs

### Navbar
- Transparent at top → `bg-white/90 backdrop-blur-md` on scroll
- Brand: "Resa." with teal dot
- Links: About, Experience, Skills, Projects, Contact
- Right: dark/light mode toggle
- Mobile: hamburger → full-screen overlay menu

### Hero
- Full viewport height, content left-aligned, vertically centered
- Badge: green dot + "Available for opportunities"
- Heading: "Hi, I'm / Resa Pamungkas." — Space Grotesk, `text-6xl` to `text-8xl`
- Name underline: teal subtle underline decoration
- Subtitle: "Network Operation Center Engineer" — `text-2xl`, `text-gray-600`
- Bio: 2–3 sentences, `text-lg`, `text-gray-600`
- CTAs: `[Get In Touch]` (teal solid) + `[View Experience]` (outline)
- Social icons: LinkedIn + Email
- Location: `📍 Tangerang, Indonesia`
- Background: pure white, no pattern/SVG
- Scroll indicator: animated arrow at bottom center

### Experience *(highlighted first after Hero)*
- Background: `gray-50`
- Vertical timeline with center line
- Each job entry: white card, `shadow-sm`
  - Current job: teal solid dot + "Current" badge
  - Past jobs: gray outline dot
  - Content: Company name, role, period, location, bullet points, tool tags
- Tool tags: `bg-teal-50 text-teal-700` pill style
- Education sub-section below jobs: same timeline style
- Animation: card slide-in from left on scroll

**Jobs:**
1. PT Mitra Akses Globalindo — NOC Engineer, Mar 2022–Present, Jakarta *(current)*
2. PT Loka Abadi Sentausa — NOC Staff, Nov 2021–Mar 2022, Malang

**Education:**
1. Politeknik Negeri Malang
2. SMK Telkom Malang

### About
- Background: white
- 2-column layout (desktop): photo left, bio + stats right
- Mobile: photo top, content below
- Photo: `rounded-2xl`, `shadow-lg` — uploaded to `public/photo.jpg`
- Bio: 3–4 sentences about background, passion, and goals
- Stats grid (2×2):
  - 3+ Years Experience
  - 99.9% SLA Compliance
  - 24/7 Operations
  - 2+ Companies

### Skills
- Background: `gray-50`
- 2×2 card grid (4 categories)
- Each card: white, `shadow-sm`, border `gray-100`
- Skill bar: teal gradient, width animates on scroll enter (framer-motion `whileInView`)
- Categories:
  1. Monitoring Tools: Zabbix 95%, PRTG 85%, Grafana 80%, The Dude 75%
  2. Network Infrastructure: Mikrotik 90%, Cisco 80%, Routing & Switching 85%, Wireless 75%
  3. Operating Systems: Linux 80%, Windows Server 75%, Synology NAS 70%
  4. Core Competencies: Troubleshooting 95%, Incident Management 90%, SLA Compliance 90%, Documentation 85%
- Tech cloud below: pill tags, `bg-white border border-gray-200`, hover teal
  - BGP, OSPF, VPN, VLAN, NAT, Firewall, SNMP, SSH, Wireshark, DHCP, DNS, Bash Scripting, SLA Reporting, Incident Response, Smart Tracker, Ticketing Systems

### Projects
- Background: white
- Title: "Work Highlights"
- Filter tabs: All | Monitoring | Infrastructure | Management
- Card grid: 3-col desktop, 2-col tablet, 1-col mobile
- Each card: white, `shadow-sm`, hover: lift + teal border
- Card anatomy: category dot (top-left) + title + description + tool tags (bottom)
- No GitHub/demo links (real work projects, not open source)
- 6 projects across 3 categories

### Contact
- Background: `gray-50`
- 2-column layout (desktop): info left, form right
- Contact info: Email, Location, LinkedIn + Email social icons
- Form fields: Name, Email, Subject, Message (textarea)
- Submit button: teal solid, full width, with loading/success states
- Mobile: stack vertical

### Footer
- Background: white, top border gradient via teal
- 4-column layout: Brand col (span 2) + Navigation + Connect
- Brand: "Resa." logo + NOC bio blurb + social icons
- Navigation links: About, Experience, Skills, Projects, Contact
- Connect links: LinkedIn, Email
- Bottom bar: copyright + "Made with ♥ from Tangerang" + scroll-to-top button

---

## Responsive Breakpoints

| Section | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero | Centered, smaller text | Left-aligned | Left-aligned, max-w-2xl |
| Experience | Full width timeline | Full width | Max-w-4xl centered |
| About | Stack vertical | Stack vertical | 2-col |
| Skills | 1-col | 2-col | 2×2 grid |
| Projects | 1-col | 2-col | 3-col |
| Contact | Stack vertical | Stack vertical | 2-col |
| Footer | 2-col | 2-col | 4-col |

---

## Animation Principles

- **Only:** `framer-motion` `whileInView` fade-in + slide-up (no SMIL, no keyframe-heavy)
- **Entrance:** `opacity: 0 → 1`, `y: 30 → 0`, `duration: 0.6s`
- **Stagger:** `0.1s` delay between sibling elements
- **Hover:** subtle scale `1.02` on cards, color transition on buttons/links
- **No:** looping animations, marquees, particle systems, topology graphics

---

## Tech Constraints

- Next.js 16.2.9 with Turbopack
- React 19.2.4
- framer-motion v12.x (WAAPI — avoid animating SVG presentation attributes)
- Tailwind CSS v3.4.19 with existing teal primary palette
- TypeScript strict mode
- Existing component library: `Card`, `Button` in `src/components/ui/`
- Photo: user will provide, placed at `public/photo.jpg`
