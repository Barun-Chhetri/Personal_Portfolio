import React from 'react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import {
  ArrowUp,
  Code2,
  Mail,
  Heart
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    soundFX.playWebShoot();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return <GithubIcon className="w-4 h-4" />;
      case 'LinkedIn':
        return <LinkedinIcon className="w-4 h-4" />;
      case 'LeetCode':
        return <Code2 className="w-4 h-4" />;
      default:
        return <Mail className="w-4 h-4" />;
    }
  };

  return (
    <footer className="relative bg-[#02050e] border-t border-slate-900 pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden text-slate-400">
      {/* Spider-Man Web SVG Ambient Accent at Center */}
      <div className="absolute top-0 inset-x-0 flex justify-center pointer-events-none opacity-20">
        <svg width="240" height="40" viewBox="0 0 240 40" fill="none">
          <path d="M0 0 C60 30, 180 30, 240 0" stroke="#ff1f2d" strokeWidth="1.5" />
          <path d="M20 0 C70 20, 170 20, 220 0" stroke="#00d4ff" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="120" cy="22" r="3" fill="#ff1f2d" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        {/* Brand & Title */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-display font-black text-white text-lg tracking-wider">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-red-500 font-bold">·</span>
            <span className="text-xs font-mono text-cyan-400">
              Full-Stack Developer
            </span>
          </div>
          <p className="text-xs text-slate-500">
            Computer Science @ University of North Texas · Software Engineering &amp; AI
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              title={link.name}
              className="p-2.5 rounded-xl spider-glass border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500 transition-all hover:scale-110"
            >
              {getSocialIcon(link.name)}
            </a>
          ))}
        </div>

        {/* Dynamic Copyright & Back-to-Top Button */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <span>&copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.</span>
          <button
            onClick={scrollToTop}
            title="Back to Top"
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/80 transition-colors flex items-center justify-center hover:shadow-spider-red"
          >
            <ArrowUp className="w-4 h-4 text-red-500" />
          </button>
        </div>

      </div>
    </footer>
  );
};
