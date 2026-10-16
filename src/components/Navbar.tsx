import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import {
  Menu,
  X,
  Volume2,
  VolumeX,
  Activity,
  ArrowUpRight,
  Shield
} from 'lucide-react';

interface NavbarProps {
  motionEnabled: boolean;
  onToggleMotion: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ motionEnabled, onToggleMotion }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundFX.getMuted());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Determine active section based on scroll offset
      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSoundToggle = () => {
    const muted = soundFX.toggleMute();
    setIsMuted(muted);
    if (!muted) soundFX.playClick();
  };

  const handleNavClick = (href: string) => {
    soundFX.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'spider-glass border-b border-slate-800/80 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand with Spider-Man Theme */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2.5 group"
          >
            {/* Spider Badge Emblem */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-rose-700 flex items-center justify-center shadow-spider-red group-hover:scale-105 transition-transform">
              <span className="font-display font-black text-white text-base tracking-tighter">
                BC
              </span>
            </div>
            <div>
              <div className="font-display font-black text-base tracking-wider text-white flex items-center gap-1.5">
                <span>BARUN</span>
                <span className="text-red-500">CHHETRI</span>
              </div>
              <div className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
                Full-Stack · AI
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-2xl spider-glass border border-slate-800/80">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-spider-red font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Controls: Sound toggle, Motion toggle, and CTA */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Sound FX Toggle */}
            <button
              onClick={handleSoundToggle}
              title={isMuted ? 'Unmute Spider-Man audio FX' : 'Mute audio FX'}
              className="p-2 rounded-xl spider-glass border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            {/* Motion Toggle */}
            <button
              onClick={onToggleMotion}
              title={motionEnabled ? 'Disable cursor & interactive motion' : 'Enable full motion'}
              className="p-2 rounded-xl spider-glass border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            >
              <Activity className={`w-4 h-4 ${motionEnabled ? 'text-red-400' : 'text-slate-400'}`} />
            </button>

            {/* GitHub Quick CTA */}
            <a
              href="https://github.com/Barun-Chhetri"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => soundFX.playClick()}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700/80 text-xs font-mono font-semibold transition-all hover:shadow-spider-blue"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleSoundToggle}
              className="p-2 rounded-xl spider-glass border border-slate-800 text-slate-400"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>

            <button
              onClick={() => {
                soundFX.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-xl spider-glass border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-red-500" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 mt-2 spider-glass border-b border-slate-800 shadow-2xl">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-4 py-2.5 rounded-xl text-sm font-mono transition-all ${
                    isActive
                      ? 'bg-red-600 text-white font-bold shadow-spider-red'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
};
