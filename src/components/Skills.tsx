import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import {
  Code,
  Layout,
  Server,
  Cpu,
  Database,
  CheckCircle,
  Sparkles,
  Layers
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-4 h-4" />;
      case 'Layout':
        return <Layout className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'Database':
        return <Database className="w-4 h-4" />;
      default:
        return <Layers className="w-4 h-4" />;
    }
  };

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'Advanced':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-950/70 text-emerald-400 border border-emerald-500/30">
            Advanced
          </span>
        );
      case 'Proficient':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-cyan-950/70 text-cyan-400 border border-cyan-500/30">
            Proficient
          </span>
        );
      default:
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-950/70 text-amber-400 border border-amber-500/30">
            Hands-on
          </span>
        );
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-red-950/60 text-red-400 border border-red-500/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>VERIFIED TECHNICAL TAXONOMY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-cyan-400">Stack &amp; Skills</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Grounded in confirmed project architecture, repository implementations, and coursework. No arbitrary vanity percentages.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  setActiveTab(idx);
                  soundFX.playClick();
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-spider-red scale-105'
                    : 'spider-glass text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                {getCategoryIcon(cat.iconName)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {SKILL_CATEGORIES[activeTab].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="group relative rounded-2xl p-5 spider-glass border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-spider-blue hover:-translate-y-1 overflow-hidden"
              >
                {/* Spider-Man glowing web accent line on top */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-red-500 via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping" />
                    <h3 className="text-base font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  {getLevelBadge(skill.level)}
                </div>

                <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                  {skill.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="flex items-center gap-1 text-slate-400">
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                    <span>Project Verified</span>
                  </span>
                  <span className="text-slate-400 font-medium">{SKILL_CATEGORIES[activeTab].title.split(' ')[0]}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* All-Category Grid Summary Bar */}
        <div className="mt-14 p-6 rounded-2xl spider-glass border border-slate-800 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-mono text-slate-300">
            <div>
              <span className="text-red-400 font-bold">Languages:</span> Java, Python, SQL, JavaScript, TypeScript
            </div>
            <div className="hidden md:inline text-slate-700">·</div>
            <div>
              <span className="text-cyan-400 font-bold">Frameworks:</span> Spring Boot, Spring AI, React 19, Next.js 16, PDFBox, POI, Prisma
            </div>
            <div className="hidden md:inline text-slate-700">·</div>
            <div>
              <span className="text-emerald-400 font-bold">Data &amp; AI:</span> PostgreSQL, PGVector, Semantic RAG, Entity Resolution, ETL
            </div>
            <div className="hidden md:inline text-slate-700">·</div>
            <div>
              <span className="text-amber-400 font-bold">Tools &amp; Testing:</span> Docker, REST API, OpenAPI, AWS, Flyway, JUnit, Vitest, JWT, BCrypt
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
