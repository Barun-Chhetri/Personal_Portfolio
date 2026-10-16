import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import {
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2,
  Cpu,
  ArrowUpRight,
  ShieldAlert,
  Calendar,
  Zap
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [activeProjectModal, setActiveProjectModal] = useState<string | null>(null);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-red-950/70 text-red-400 border border-red-500/30 mb-3">
              <Zap className="w-3.5 h-3.5 text-red-400" />
              <span>PRODUCTION SYSTEMS · VERIFIED LIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-cyan-400">Engineering Projects</span>
            </h2>
            <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
              Both systems are fully deployed and accessible live. Built with robust backend architectures, databases, and automated testing suites.
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1.5 rounded-lg border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>2 / 2 Deployed &amp; Online</span>
          </div>
        </div>

        {/* Projects Cards Showcase */}
        <div className="space-y-16">
          {PROJECTS_DATA.map((project, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group relative rounded-3xl p-6 sm:p-8 lg:p-10 spider-glass border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-spider-dual overflow-hidden"
              >
                {/* Subtle Dual Spider-Glow Background */}
                <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none ${isEven ? 'bg-cyan-500' : 'bg-red-500'}`} />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Project Information */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      {/* Category & Status */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/70 border border-cyan-500/30">
                          {project.category}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium text-red-300 bg-red-950/70 border border-red-500/30">
                          {project.role}
                        </span>
                      </div>

                      {/* Title & Tagline */}
                      <h3 className="text-2xl sm:text-3xl font-display font-black text-white group-hover:text-cyan-300 transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-sm font-mono text-red-400 mb-4 font-medium">
                        {project.tagline}
                      </p>

                      {/* Verified Description */}
                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Metrics Showcase Bar */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-6">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="text-center">
                            <div className="text-base sm:text-lg font-mono font-bold text-white">
                              {m.value}
                            </div>
                            <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Key Architectural Highlights */}
                      <div className="space-y-2 mb-6">
                        <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
                          Verified Highlights:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {project.keyHighlights.slice(0, 3).map((hl, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{hl}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {project.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-700/80 hover:border-cyan-400 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Both Mandatory Action Buttons: Live Demo AND View Source Code */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
                      {/* Prominent Live Demo Button */}
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFX.playWebShoot()}
                        className="px-5 py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-xs sm:text-sm shadow-spider-red hover:shadow-spider-dual transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-0.5"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                        <span>Live Demo</span>
                        <span className="text-[10px] font-mono opacity-80">(Deployed Web App)</span>
                      </a>

                      {/* Separate View Source Code (GitHub) Button */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundFX.playClick()}
                        className="px-4 py-3 rounded-xl spider-glass border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white font-medium text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 hover:shadow-spider-blue transform hover:-translate-y-0.5"
                      >
                        <GithubIcon className="w-4 h-4 text-cyan-400" />
                        <span>View Source Code</span>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Architectural Terminal Preview */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl p-5 font-mono text-xs text-slate-300">
                      {/* Terminal Title Bar */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-red-500/80" />
                          <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[11px] text-slate-400">
                          {project.id === 'resume-analyzer' ? 'spring-ai-pipeline.sh' : 'interview-tracker-tests.ts'}
                        </span>
                      </div>

                      {/* Code / Architecture Output Preview */}
                      {project.id === 'resume-analyzer' ? (
                        <div className="space-y-2.5">
                          <div className="text-cyan-400">
                            $ curl -X POST /api/v1/resume/analyze \
                          </div>
                          <div className="text-slate-400 pl-4">
                            -F "resume=@Barun_Chhetri_Resume.pdf" \
                            <br />
                            -F "job_id=senior-fullstack-dev"
                          </div>
                          <div className="pt-2 text-emerald-400">
                            ✓ Document Parsed (Apache PDFBox)
                          </div>
                          <div className="text-emerald-400">
                            ✓ Embeddings: 1536-dim unit vector generated
                          </div>
                          <div className="text-slate-300">
                            Matching Tiers Evaluated:
                            <br />
                            • Tier 1 (Exact): "Java" == "Java" (1.00)
                            <br />
                            • Tier 2 (Norm): "Spring Boot" == "springboot" (0.98)
                            <br />
                            • Tier 3 (Alias): "AWS" -&gt; Amazon Web Services
                            <br />
                            • Tier 4 (Cosine): Similarity = 0.89 (&gt;= 0.65)
                          </div>
                          <div className="pt-2 border-t border-slate-800 text-cyan-300 flex items-center justify-between">
                            <span>Status: COMPATIBILITY EVALUATED</span>
                            <span className="text-emerald-400 font-bold">200 OK</span>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2.5">
                          <div className="text-cyan-400">
                            $ npm run test:vitest
                          </div>
                          <div className="text-slate-400">
                            RUN v2.1.8 /interview-crack-tracker/tests
                          </div>
                          <div className="text-emerald-400">
                            ✓ tests/interview-tracker.test.ts (26 tests)
                          </div>
                          <div className="text-slate-400 pl-4 space-y-1 text-[11px]">
                            <div>✓ 180-day program duration math &amp; calendar</div>
                            <div>✓ Timer pause exclusion &amp; refresh persistence</div>
                            <div>✓ Partial carryover transfer (only remaining mins)</div>
                            <div>✓ &gt;3 hour daily workload overload detection</div>
                            <div>✓ BCrypt hash validation &amp; JWT cookie auth</div>
                          </div>
                          <div className="pt-2 border-t border-slate-800 text-emerald-400 flex items-center justify-between">
                            <span>Test Suites: 1 passed (1)</span>
                            <span className="font-bold">Tests: 26 passed (26)</span>
                          </div>
                        </div>
                      )}

                      {/* Live Link Direct Anchor at Bottom of Terminal */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                        <span className="text-slate-400">Endpoint:</span>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 hover:underline flex items-center gap-1"
                        >
                          <span>{project.liveUrl.replace('https://', '')}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
