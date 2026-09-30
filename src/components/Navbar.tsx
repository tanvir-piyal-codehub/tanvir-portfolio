import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Competitive', href: '#competitive-programming' },
  { label: 'Activities', href: '#activities' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d1224]/90 backdrop-blur-md border-b border-[#1b2c68a0] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-2.5 text-sm sm:text-base md:text-lg font-bold tracking-wider text-slate-100 transition-colors"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#16f2b3]/80 p-[1px] bg-gradient-to-r from-[#16f2b3] to-[#8b5cf6] shrink-0 group-hover:scale-105 transition-transform flex items-center justify-center bg-[#0d1224] text-[10px] font-mono font-bold text-[#16f2b3] relative">
              <img
                src="/profile.jpg"
                alt="Md. Tanvir Hossain"
                className="absolute inset-0 w-full h-full object-cover object-top rounded-full hidden z-10"
                onLoad={(e) => e.currentTarget.classList.remove('hidden')}
                onError={(e) => e.currentTarget.classList.add('hidden')}
              />
              TH
            </div>
            <span className="text-[#16f2b3] group-hover:text-pink-400 transition-colors font-mono hidden sm:inline">
              &lt;
            </span>
            <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent group-hover:from-[#16f2b3] group-hover:to-cyan-400 transition-all truncate max-w-[200px] sm:max-w-none">
              {PERSONAL_INFO.name.toUpperCase()}
            </span>
            <span className="text-[#16f2b3] group-hover:text-pink-400 transition-colors font-mono hidden sm:inline">
              /&gt;
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium transition-all relative rounded-md ${
                    isActive
                      ? 'text-[#16f2b3] font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-[#16f2b3] to-[#8b5cf6] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Social & Action Links */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-[#16f2b3] hover:bg-[#1b2c68]/40 rounded-lg transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-[#16f2b3] hover:bg-[#1b2c68]/40 rounded-lg transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative inline-flex items-center justify-center p-[1px] overflow-hidden rounded-lg group text-xs font-semibold text-white shadow-sm hover:scale-105 active:scale-95 transition-all"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-[#8b5cf6] to-[#16f2b3]"></span>
              <span className="relative px-4 py-2 transition-all ease-in duration-200 bg-[#0d1224] rounded-[7px] group-hover:bg-opacity-0 flex items-center gap-1.5">
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#16f2b3] group-hover:text-white transition-colors" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-slate-400 hover:text-[#16f2b3]"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#16f2b3]"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0d1224]/95 backdrop-blur-xl border-b border-[#1b2c68a0] px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#1b2c68]/50 text-[#16f2b3] font-semibold border-l-2 border-[#16f2b3]'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-[#16f2b3] bg-slate-800/60 rounded-lg"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-300 hover:text-[#16f2b3] bg-slate-800/60 rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 text-slate-300 hover:text-[#16f2b3] bg-slate-800/60 rounded-lg"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-pink-500 to-violet-600 text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
