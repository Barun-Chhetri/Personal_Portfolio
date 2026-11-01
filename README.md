# Barun Chhetri — Interactive 3D Spider-Man-Inspired Developer Portfolio

A production-quality, cinematic personal portfolio built for **Barun Chhetri**, Computer Science Junior at the **University of North Texas (GPA 3.850)**, specializing in Full-Stack Development, Data Acquisition Pipelines, Spring Boot Backends, PGVector Semantic RAG systems, and modern React 19/Next.js 16 architectures.

---

## 🕷️ Visual Concept & Highlights

- **Cinematic Spider-Man Aesthetic:** Deep midnight blue (`#030712`), Spider-Man red (`#e62429`), electric cyan (`#00d4ff`), glassmorphism HUD cards, glowing outlines, and web matrix patterns.
- **Dimensional 3D NYC Skyline:** Interactive Three.js canvas featuring procedural skyscrapers, rotating city searchlights, glowing antenna beacons, and atmospheric floating embers that respond to mouse parallax.
- **Signature Web-Slinging Mechanics:**
  - **Interactive Cursor:** Generates silky trailing web strands and shoots glowing web splats on click.
  - **Interactive 3D Web-Slinging Lab:** Click any floating tech orb (Spring Boot, PGVector, React, Grounded RAG, Spider-Web Core, 180-Day Tracker) to launch an elastic web strand pulling it with Hooke's spring mechanics and pendulum drift, or drag & throw objects with momentum!
  - **Synthesized Web-Shooter Audio:** Real-time Web Audio API synthesized sound effects ("thwip" audio and spring recoil) with zero external audio assets, complete with a global mute toggle.
- **Authentic Identity & Resume Access:** Prominently features Barun's actual photograph with custom 3D perspective tilt, verified academic standing (UNT CS Junior · GPA 3.850 · Keller, TX), and 1-click access to his updated resume PDF.

---

## 🚀 Two Live Deployed Projects

### 1. [AI Resume Intelligence Platform](https://resume-analyzer.barunchamlagain.me/)
- **Live Demo:** [https://resume-analyzer.barunchamlagain.me/](https://resume-analyzer.barunchamlagain.me/)
- **Source Code:** [https://github.com/Barun-Chhetri/Resume_Analyzer](https://github.com/Barun-Chhetri/Resume_Analyzer)
- **Stack:** Java 21, Spring Boot, Spring AI, PostgreSQL, PGVector, React, Docker Compose, Flyway.
- **Highlights:** Full-stack platform for data acquisition and ingestion of resumes (PDF, DOCX, TXT) and job postings using Apache PDFBox and Apache POI. 4-tier entity resolution and skill-matching engine (exact, normalized, alias table, and cosine similarity on 1536-dimensional embeddings) backed by a canonical taxonomy of 100+ skills. Skill-gap analysis separating critical from preferred gaps, and zero-hallucination RAG recommendations constrained to verified resume content. Documented with OpenAPI/Swagger and verified via MockMvc integration tests.

### 2. [180-Day Interview Prep Tracker](https://interview-crack.barunchamlagain.me/)
- **Live Demo:** [https://interview-crack.barunchamlagain.me/](https://interview-crack.barunchamlagain.me/)
- **Source Code:** [https://github.com/Barun-Chhetri/interview-crack-tracker](https://github.com/Barun-Chhetri/interview-crack-tracker)
- **Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, PostgreSQL, Prisma ORM, Docker, BCrypt, JWT, Vitest.
- **Highlights:** Digitize a 180-day study handbook into 900 tasks and 965 spaced-repetition review intervals parsed from a PDF and seeded via Prisma. Persistent timestamp study timer that survives refreshes, partial task carryover with undo and duplicate prevention in database transactions, daily/weekly/monthly reports emailed via Resend/SMTP, and 26 passing automated Vitest scenarios.

---

## 🏆 Featured Certificates

1. **Introduction to Large Language Models**  
   *Issuer:* Google · *Issued:* May 2026  
   *Credential ID:* `24175569`  
   *Verification:* Google Cloud Skills Boost credential.

2. **Introduction to Artificial Intelligence**  
   *Issuer:* LinkedIn · *Issued:* September 2026  
   *Verification:* [Public Certificate on LinkedIn](https://www.linkedin.com/in/Barun-Chhetri)

3. **Cybersecurity Foundations**  
   *Issuer:* LinkedIn · *Issued:* September 2026  
   *Credential ID:* `1468e96aa129ad86380513601b91571925f04158e7b4fd393763f92ee35e7dc5`  
   *Verification:* [Public Certificate on LinkedIn](https://www.linkedin.com/learning/certificates/1468e96aa129ad86380513601b91571925f04158e7b4fd393763f92ee35e7dc5)

4. **Career Essentials in Generative AI by Microsoft and LinkedIn**  
   *Issuer:* Microsoft & LinkedIn · *Issued:* May 2026  
   *Credential ID:* `ca3b133a124874ec4b7252fab670afde949c5cb8d3da02fe93466a59e4649201`  
   *Verification:* [Public Certificate on LinkedIn](https://www.linkedin.com/learning/certificates/ca3b133a124874ec4b7252fab670afde949c5cb8d3da02fe93466a59e4649201)

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
