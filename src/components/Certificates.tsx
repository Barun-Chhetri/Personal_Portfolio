import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import {
  Award,
  ExternalLink,
  Copy,
  Check,
  ShieldCheck,
  BrainCircuit,
  Database,
  Sparkles,
  Info
} from 'lucide-react';

export const Certificates: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyId = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    soundFX.playClick();
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const getCertIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-6 h-6" style={{ color }} />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6" style={{ color }} />;
      case 'Database':
        return <Database className="w-6 h-6" style={{ color }} />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" style={{ color }} />;
      default:
        return <Award className="w-6 h-6" style={{ color }} />;
    }
  };

  return (
    <section id="certificates" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-950/70 text-cyan-400 border border-cyan-500/30 mb-3">
            <Award className="w-3.5 h-3.5 text-cyan-400" />
            <span>CREDENTIAL VERIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-cyan-400">Certificates</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Verified technical credentials across Generative AI, Large Language Models, Database Systems, and Cybersecurity.
          </p>
        </div>

        {/* 4 Featured Certificate Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CERTIFICATES_DATA.map((cert, idx) => {
            const isCopied = copiedId === cert.id;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-3xl p-6 sm:p-7 spider-glass border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-spider-blue flex flex-col justify-between"
              >
                {/* Spider-Man corner notch */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                  <div
                    className="absolute transform rotate-45 bg-gradient-to-r from-red-500 to-cyan-400 text-[9px] font-mono font-bold text-slate-950 text-center py-0.5 right-[-35px] top-[18px] w-[120px] shadow"
                  >
                    VERIFIED
                  </div>
                </div>

                <div>
                  {/* Top Bar: Icon & Issuer */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                      {getCertIcon(cert.icon, cert.accentColor)}
                    </div>
                    <span className="text-xs font-mono text-slate-400 mr-8">
                      Issued: {cert.issuedDate}
                    </span>
                  </div>

                  {/* Title & Issuer */}
                  <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-red-400 mb-4">
                    Issuer: {cert.issuer}
                  </p>

                  {/* Skills Tagged */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900/90 text-slate-300 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential ID Bar & Actions */}
                <div className="pt-4 border-t border-slate-800/80 space-y-3">
                  {/* Credential ID Copy Box */}
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
                    <div className="flex items-center gap-2 overflow-hidden mr-2">
                      <span className="text-slate-400 text-[10px] uppercase font-bold shrink-0">ID:</span>
                      <span className="text-slate-300 truncate font-mono select-all text-[11px]">
                        {cert.credentialId}
                      </span>
                    </div>

                    <button
                      onClick={() => handleCopyId(cert.id, cert.credentialId)}
                      title="Copy Credential ID"
                      className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 shrink-0 text-[11px]"
                    >
                      {isCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Verification Link or Honest Notice */}
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundFX.playClick()}
                      className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-950 to-blue-950 hover:from-cyan-900 hover:to-blue-900 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 text-xs font-mono font-medium flex items-center justify-center gap-2 transition-all"
                    >
                      <span>View Public Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/40 border border-slate-800/80 text-[11px] font-mono text-slate-400">
                      <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Direct verification URL not publicly hosted by issuer; verify via Credential ID.</span>
                    </div>
                  )}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
