import React from 'react';
import { Github, Linkedin, Mail, ArrowUp, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative border-t border-[#1b2c68a0] bg-[#070a14] py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-base font-bold text-white tracking-wider flex items-center justify-center md:justify-start gap-1.5"
            >
              <span className="text-[#16f2b3] font-mono">&lt;</span>
              <span>{PERSONAL_INFO.name.toUpperCase()}</span>
              <span className="text-[#16f2b3] font-mono">/&gt;</span>
            </a>
            <p className="text-xs text-slate-400 mt-1 font-mono">
              Computer Science & Engineering Student · Daffodil International University
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#10172d] border border-[#1b2c68a0] text-slate-300 hover:text-[#16f2b3] hover:border-[#16f2b3] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-[#10172d] border border-[#1b2c68a0] text-slate-300 hover:text-[#16f2b3] hover:border-[#16f2b3] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-full bg-[#10172d] border border-[#1b2c68a0] text-slate-300 hover:text-[#16f2b3] hover:border-[#16f2b3] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-[#10172d] border border-[#1b2c68a0] text-slate-300 hover:text-[#16f2b3] hover:border-[#16f2b3] transition-colors ml-2"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-8 pt-6 border-t border-[#1b2c68]/40 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2 font-mono">
          <p>
            © 2026 {PERSONAL_INFO.name}. Built with curiosity and code.
          </p>
          <p className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>Daffodil International University</span>
            <span>·</span>
            <span>Dhaka, Bangladesh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
