import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';
import {
  GraduationCap,
  Award,
  BookOpen,
  Terminal,
  Cpu,
  Database,
  Shield,
  Layers,
  MapPin,
  CheckCircle2
} from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/60 text-cyan-400 border border-cyan-500/30 mb-3">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>BACKGROUND &amp; PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            Engineering With <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-cyan-400">Purpose</span> &amp; Precision
          </h2>
          <p className="mt-4 text-slate-400 text-base leading-relaxed">
            Bridging foundational Computer Science principles with cutting-edge AI pipelines and reliable full-stack applications.
          </p>
        </div>

        {/* Main Grid: Photo card + Professional Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photograph Card with Spider-Man Theme Frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="relative w-full max-w-[360px] rounded-3xl p-3 spider-glass border border-red-500/30 shadow-spider-red group">
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] bg-slate-900 shadow-inner">
                <img
                  src={PERSONAL_INFO.profileFallback}
                  alt="Barun Chhetri"
                  className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="px-3 py-2 rounded-xl spider-glass border border-slate-700/60 backdrop-blur-md">
                    <p className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-red-400" />
                      <span>{PERSONAL_INFO.location}</span>
                    </p>
                    <p className="text-white font-display text-sm font-bold mt-0.5">
                      Barun Chhetri
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified academic badge */}
              <div className="mt-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Academic Standing</span>
                <span className="text-cyan-400 font-bold">GPA: 3.850 / 4.00</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Bio paragraphs */}
            <div className="space-y-4 text-slate-300 text-base leading-relaxed">
              <p className="text-lg text-white font-medium">
                {PERSONAL_INFO.aboutBio[0]}
              </p>
              <p>
                {PERSONAL_INFO.aboutBio[1]}
              </p>
              <p>
                {PERSONAL_INFO.aboutBio[2]}
              </p>
            </div>

            {/* Academic Highlights & Honors Card */}
            <div className="p-6 rounded-2xl spider-glass border border-slate-800 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <h3 className="text-white font-display font-bold text-lg">
                  Education &amp; Honors
                </h3>
              </div>

              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-slate-800/80">
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {EDUCATION_DATA.institution}
                    </h4>
                    <p className="text-xs text-slate-400">
                      {EDUCATION_DATA.degree} · Denton, TX
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-2.5 py-1 rounded bg-cyan-950/70 text-cyan-400 border border-cyan-500/30 text-xs font-mono font-bold">
                      GPA 3.850
                    </span>
                    <p className="text-[11px] font-mono text-slate-400 mt-0.5">
                      {EDUCATION_DATA.graduation}
                    </p>
                  </div>
                </div>

                {/* Dean's List honors */}
                <div>
                  <h5 className="text-xs font-mono font-semibold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-red-400" />
                    <span>Academic Honors</span>
                  </h5>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {EDUCATION_DATA.honors.map((honor, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{honor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Extracurricular involvement */}
                <div className="pt-2">
                  <h5 className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Involvement &amp; Growth</span>
                  </h5>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {EDUCATION_DATA.involvement.map((inv, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
                        <span>{inv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Competencies Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl spider-glass border border-slate-800 text-center">
                <Cpu className="w-6 h-6 text-red-400 mx-auto mb-2" />
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">
                  AI &amp; Vector Search
                </h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  PGVector embeddings, Spring AI &amp; Grounded RAG pipelines
                </p>
              </div>

              <div className="p-4 rounded-xl spider-glass border border-slate-800 text-center">
                <Database className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">
                  Data &amp; Databases
                </h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  PostgreSQL, Flyway migrations, indexing &amp; complex SQL
                </p>
              </div>

              <div className="p-4 rounded-xl spider-glass border border-slate-800 text-center">
                <Shield className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">
                  Full-Stack Reliability
                </h4>
                <p className="text-[11px] text-slate-400 leading-tight">
                  Clean REST APIs, JWT authentication &amp; automated test suites
                </p>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
