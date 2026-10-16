import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import {
  ArrowDown,
  ExternalLink,
  Mail,
  Sparkles,
  Terminal,
  ShieldCheck,
  Cpu,
  Layers,
  ChevronRight
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const Hero: React.FC = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 14, y: -y * 14 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* Left Column: Headlines & Call to Actions */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Animated Spider-HUD Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider bg-red-950/60 text-red-400 border border-red-500/40 shadow-spider-red mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>{PERSONAL_INFO.label}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black font-display tracking-tight text-white leading-[1.1] mb-6">
            Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-cyan-400">Web</span>.
            <br />
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-red-500">What’s Next</span>.
          </h1>

          {/* Supporting Bio */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
            Hi, I’m <strong className="text-white font-semibold">Barun Chhetri</strong> — a Computer Science junior at the{' '}
            <span className="text-cyan-400 font-medium">University of North Texas (GPA 3.85)</span> specializing in full-stack architecture,
            Spring Boot backends, vector search with PGVector, and grounded AI applications.
          </p>

          {/* Core Badges Row */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg spider-glass border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Java 21 · Spring Boot</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg spider-glass border border-red-500/30 text-xs font-mono text-red-300">
              <Cpu className="w-3.5 h-3.5 text-red-400" />
              <span>PGVector · Semantic RAG</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg spider-glass border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>React · Next.js · PostgreSQL</span>
            </div>
          </div>

          {/* The Three Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            {/* 1. Explore My Projects */}
            <a
              href="#projects"
              onClick={() => soundFX.playWebShoot()}
              className="relative group px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white font-semibold text-sm shadow-spider-red hover:shadow-spider-dual transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Explore My Projects</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* 2. View My GitHub */}
            <a
              href="https://github.com/Barun-Chhetri"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="px-5 py-3.5 rounded-xl spider-glass border border-slate-700 hover:border-cyan-500 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 flex items-center gap-2 hover:shadow-spider-blue transform hover:-translate-y-0.5"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>View GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            {/* 3. Contact Me */}
            <a
              href="#contact"
              onClick={() => soundFX.playClick()}
              className="px-5 py-3.5 rounded-xl spider-glass border border-slate-700 hover:border-red-500 text-slate-200 hover:text-white font-medium text-sm transition-all duration-300 flex items-center gap-2 hover:shadow-spider-red transform hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4 text-red-400" />
              <span>Contact Me</span>
            </a>
          </div>

          {/* Quick status pill */}
          <div className="mt-8 flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>Targeting Software Engineering &amp; AI Internships (Summer 2027)</span>
          </div>
        </motion.div>

        {/* Right Column: Actual Photograph with Cinematic Spider-Man Aura & Holographic HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center items-center relative"
        >
          {/* Subtle Spider-Man Web Radar Glow Rings */}
          <div className="absolute w-[360px] sm:w-[440px] h-[360px] sm:h-[440px] rounded-full border border-red-500/20 animate-spin" style={{ animationDuration: '60s' }} />
          <div className="absolute w-[300px] sm:w-[380px] h-[300px] sm:h-[380px] rounded-full border border-cyan-500/20 border-dashed animate-spin" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />

          {/* Interactive 3D Tilt Card containing Barun's Actual Photograph */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transition: 'transform 0.15s ease-out'
            }}
            className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] rounded-3xl p-3 spider-glass border border-cyan-500/30 shadow-spider-dual group"
          >
            {/* Glowing Corner Accents */}
            <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-red-500 rounded-tl-lg" />
            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-cyan-400 rounded-tr-lg" />
            <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-cyan-400 rounded-bl-lg" />
            <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-red-500 rounded-br-lg" />

            {/* Profile Image Container */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-900 shadow-inner">
              <picture>
                <source srcSet={PERSONAL_INFO.profileImage} type="image/webp" />
                <img
                  src={PERSONAL_INFO.profileFallback}
                  alt="Barun Chhetri - Full-Stack Developer"
                  className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
              </picture>

              {/* Spider-Man Red and Cyan Rim Light Gradients */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/15 via-transparent to-cyan-500/15 pointer-events-none" />

              {/* Holographic HUD Overlay on Hover */}
              <div className="absolute bottom-4 inset-x-4 p-3 rounded-xl spider-glass border border-white/10 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-display font-bold text-sm tracking-wide">
                      Barun Chhetri
                    </h3>
                    <p className="text-[11px] font-mono text-cyan-300">
                      UNT CS Junior · GPA 3.85
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-mono text-red-400 bg-red-950/80 px-2 py-0.5 rounded border border-red-500/40">
                    <ShieldCheck className="w-3 h-3 text-red-400" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Developer Badge (Spring Boot & Vector RAG) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 px-3 py-2 rounded-xl spider-glass border border-cyan-400/50 shadow-spider-blue text-xs font-mono font-medium text-cyan-300 hidden sm:flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Spring AI + PGVector</span>
            </motion.div>

            {/* Floating Developer Badge 2 (Live Deployments) */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 px-3 py-2 rounded-xl spider-glass border border-red-500/50 shadow-spider-red text-xs font-mono font-medium text-red-300 hidden sm:flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>2 Live Deployed Systems</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 inset-x-0 flex flex-col items-center justify-center text-slate-400 pointer-events-none">
        <span className="text-[11px] font-mono tracking-widest uppercase mb-1 opacity-70">
          Scroll to Explore
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-cyan-400" />
        </motion.div>
      </div>
    </section>
  );
};
