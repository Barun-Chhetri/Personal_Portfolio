# Barun Chhetri — Interactive 3D Spider-Man-Inspired Developer Portfolio

A production-quality, cinematic personal portfolio built for **Barun Chhetri**, Computer Science Junior at the **University of North Texas (GPA 3.850)**, specializing in Full-Stack Development, Spring Boot Backends, PGVector Semantic RAG systems, and modern React/Next.js architectures.

---

## 🕷️ Visual Concept & Highlights

- **Cinematic Spider-Man Aesthetic:** Deep midnight blue (`#030712`), Spider-Man red (`#e62429`), electric cyan (`#00d4ff`), glassmorphism HUD cards, glowing outlines, and web matrix patterns.
- **Dimensional 3D NYC Skyline:** Interactive Three.js canvas featuring procedural skyscrapers, rotating city searchlights, glowing antenna beacons, and atmospheric floating embers that respond to mouse parallax.
- **Signature Web-Slinging Mechanics:**
  - **Interactive Cursor:** Generates silky trailing web strands and shoots glowing web splats on click.
  - **Interactive 3D Web-Slinging Lab:** Click any floating tech orb (Spring Boot, PGVector, React, Grounded RAG, Spider-Web Core, 180-Day Tracker) to launch an elastic web strand pulling it with Hooke's spring mechanics and pendulum drift, or drag & throw objects with momentum!
  - **Synthesized Web-Shooter Audio:** Real-time Web Audio API synthesized sound effects ("thwip" audio and spring recoil) with zero external audio assets, complete with a global mute toggle.
- **Authentic Identity:** Prominently features Barun's actual photograph in the Spider-Man suit with custom 3D perspective tilt and verified academic standing (UNT CS Junior · GPA 3.85).

---

## 🚀 Two Live Deployed Projects

### 1. [AI Resume Intelligence Platform](https://resume-analyzer.barunchamlagain.me/)
- **Live Demo:** [https://resume-analyzer.barunchamlagain.me/](https://resume-analyzer.barunchamlagain.me/)
- **Source Code:** [https://github.com/Barun-Chhetri/Resume_Analyzer](https://github.com/Barun-Chhetri/Resume_Analyzer)
- **Stack:** Java 21, Spring Boot 3.4, Spring AI, PostgreSQL 16, PGVector, React 18, Vite, Docker Compose, Flyway.
- **Highlights:** Multi-format document parsing (Apache PDFBox/POI), 1536-dimensional PGVector dense vector embeddings, 4-tier semantic matching (Exact, Normalized, Alias, Cosine Similarity >= 0.65), critical vs adjacent gap partitioning, and zero-hallucination RAG recommendations.

### 2. [180-Day SWE Interview Preparation Tracker](https://interview-crack.barunchamlagain.me/)
- **Live Demo:** [https://interview-crack.barunchamlagain.me/](https://interview-crack.barunchamlagain.me/)
- **Source Code:** [https://github.com/Barun-Chhetri/interview-crack-tracker](https://github.com/Barun-Chhetri/interview-crack-tracker)
- **Stack:** Next.js 15 (App Router), React, TypeScript, Tailwind CSS, PostgreSQL 16, Prisma ORM, BCrypt, JWT, Vitest.
- **Highlights:** Digitize 180 study days and 900+ tasks from the handbook PDF, persistent study timer with pause time exclusion, partial carryover workload balancer with >3hr overload detection, STAR behavioral story bank, F-1 CPT checklist, and 26 passing automated Vitest scenarios.

---

## 🏆 Featured Certificates (Exactly 4)

1. **Career Essentials in Generative AI by Microsoft and LinkedIn**  
   *Issuer:* Microsoft & LinkedIn · *Issued:* May 2026  
   *Credential ID:* `ca3b133a124874ec4b7252fab670afde949c5cb8d3da02fe93466a59e4649201`  
   *Verification:* [Public Certificate on LinkedIn](https://www.linkedin.com/learning/certificates/ca3b133a124874ec4b7252fab670afde949c5cb8d3da02fe93466a59e4649201)

2. **Introduction to Large Language Models**  
   *Issuer:* Google · *Issued:* May 2026  
   *Credential ID:* `24175569`  
   *Verification:* Copyable ID badge with official Google Cloud Skills Boost credential attribution.

3. **SQL (Basic) Certificate**  
   *Issuer:* HackerRank · *Issued:* May 2026  
   *Credential ID:* `B610B8D34CAD`  
   *Verification:* [Public Certificate on HackerRank](https://www.hackerrank.com/certificates/B610B8D34CAD)

4. **Cybersecurity Foundations**  
   *Issuer:* LinkedIn · *Issued:* September 2026  
   *Credential ID:* `1468e96aa129ad86380513601b91571925f04158e7b4fd393763f92ee35e7dc5`  
   *Verification:* [Public Certificate on LinkedIn](https://www.linkedin.com/learning/certificates/1468e96aa129ad86380513601b91571925f04158e7b4fd393763f92ee35e7dc5)

---

## 🛠️ Tech Stack & Architecture

- **Core Framework:** React 18, TypeScript, Vite
- **Styling & Theme:** Tailwind CSS, Custom Glassmorphism, Neon Shadows, Web Grid Shaders
- **3D Graphics & Canvas:** Three.js, `@react-three/fiber`, HTML5 Canvas
- **Animation & Physics:** Framer Motion, Hooke's Spring Law, Elastic Web Physics
- **Icons:** Lucide React & Handcrafted SVGs
- **Audio:** Web Audio API Native Synthesizer

---

## 💻 Running Locally

### Prerequisites
- Node.js 18+ (tested on Node v23)
- npm or pnpm

### Quick Start
```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```
Open [http://localhost:5180](http://localhost:5180) in your browser.

### Production Build
```bash
# Compile TypeScript and bundle via Vite
npm run build

# Preview production build locally
npm run preview
```

### Automated E2E Testing
```bash
node test-e2e.cjs
```
This runs a headless Chrome automation suite verifying all 7 sections, screenshots, live demo URLs, GitHub links, form validation, and 0 console/runtime errors.
