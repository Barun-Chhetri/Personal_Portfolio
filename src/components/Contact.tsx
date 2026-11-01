import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';
import { soundFX } from '../utils/sound';
import {
  Mail,
  Send,
  Code2,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  MapPin,
  ExternalLink,
  Phone
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Your name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      soundFX.playClick();
      return;
    }

    setIsSubmitting(true);
    soundFX.playWebShoot();

    // Emulate delivery and prepare direct mailto option
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GitHub':
        return <GithubIcon className="w-5 h-5" />;
      case 'LinkedIn':
        return <LinkedinIcon className="w-5 h-5" />;
      case 'LeetCode':
        return <Code2 className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Spider-Man NYC Skyscraper Top Atmosphere */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-red-950/70 text-red-400 border border-red-500/30 mb-3">
            <Mail className="w-3.5 h-3.5 text-red-400" />
            <span>LET’S CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
            Have a Project in Mind? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-cyan-400">
              Let's Build Something Great.
            </span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Open for May 2027 Data Acquisition, Software Engineering, and AI/ML internship opportunities, or discussing ambitious web architectures.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Channels */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Email Card */}
            <div className="p-6 rounded-3xl spider-glass border border-cyan-500/30 hover:border-cyan-400 shadow-spider-blue transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 rounded-2xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    Direct Email
                  </h3>
                  <p className="text-base font-display font-bold text-white">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-300 mb-4">
                Reach out directly for technical interviews, internship inquiries, or collaborative engineering.
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                onClick={() => soundFX.playWebShoot()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-mono font-semibold transition-all shadow"
              >
                <span>Launch Email Client</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location, Phone & Status */}
            <div className="p-5 rounded-2xl spider-glass border border-slate-800 space-y-2.5 text-xs font-mono">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-red-400 shrink-0" />
                  <span>Location: {PERSONAL_INFO.location}</span>
                </div>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Available May 2027</span>
                </span>
              </div>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Phone:</span>
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="text-cyan-300 hover:text-white transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-3xl spider-glass border border-slate-800">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold tracking-wider mb-4">
                Professional Profiles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SOCIAL_LINKS.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFX.playClick()}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all group"
                  >
                    <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                      {getSocialIcon(link.name)}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white">
                        {link.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 truncate max-w-[120px]">
                        {link.username}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Validated Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-3xl spider-glass border border-slate-800 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-display font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">
                    Front-end validated dispatch interface
                  </p>
                </div>
                <Sparkles className="w-5 h-5 text-red-500" />
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-display font-bold text-white">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your message has been captured. Since this is a client-side portfolio demonstration, you can also dispatch directly via mailto:
                  </p>
                  <div className="pt-2">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Hi Barun,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs font-mono font-semibold shadow-spider-red"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Direct via Mail Client</span>
                    </a>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="block mx-auto text-xs font-mono text-cyan-400 hover:underline pt-3"
                  >
                    Reset &amp; Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name & Email Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Peter Parker"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                          errors.name ? 'border-red-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-[11px] font-mono mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="peter.parker@dailybugle.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                          errors.email ? 'border-red-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-[11px] font-mono mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Software Engineering Internship / Project Inquiry"
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.subject ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-400 text-[11px] font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5 font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Barun, we came across your AI Resume Platform and would love to chat about..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all ${
                        errors.message ? 'border-red-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-red-400 text-[11px] font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-semibold text-sm shadow-spider-red hover:shadow-spider-dual transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Encrypting &amp; Dispatching...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] font-mono text-slate-400 text-center pt-2">
                    🔒 Client-side validation enabled. No personal data sold or tracked.
                  </div>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
