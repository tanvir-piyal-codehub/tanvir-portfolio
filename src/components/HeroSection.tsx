import React, { useState } from 'react';
import { Github, Linkedin, Mail, ArrowRight, Copy, Check, Terminal, Sparkles, MapPin, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import officialPhoto from '../assets/images/tanvir_official_photo.jpg';

export const HeroSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'interests'>('profile');

  const codeSnippet = `const student: CSECoder = {
  name: 'Md. Tanvir Hossain',
  university: 'Daffodil International University',
  location: 'Dhaka, Bangladesh',
  academicYear: '2nd-year CSE',
  coreSkills: [
    'C', 'C++', 'Python', 'JavaScript',
    'React', 'DSA', 'OOP', 'Git'
  ],
  passions: [
    'Competitive Programming',
    'Machine Learning',
    'Web Development',
    'Problem Solving'
  ],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  isReadyToBuild: function() {
    return (
      this.hardWorker &&
      this.problemSolver &&
      this.coreSkills.length >= 8
    );
  }
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Ambient Glows & Grid */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-[#16f2b3]/10 via-[#8b5cf6]/15 to-transparent blur-[120px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-pink-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#1b2c68_1px,transparent_1px)] [background-size:32px_32px] opacity-25 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            {/* Profile Avatar & Academic Status */}
            <div className="flex items-center gap-3.5 mb-5">
              <div
                className="relative group/avatar cursor-pointer shrink-0"
                onClick={() => scrollToSection('about')}
                title="View About Me"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#16f2b3] via-pink-500 to-[#8b5cf6] rounded-full blur-sm opacity-75 group-hover/avatar:opacity-100 transition duration-300" />
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#16f2b3] bg-[#0d1224] shadow-xl">
                  <img
                    src={officialPhoto}
                    alt="Md. Tanvir Hossain"
                    className="w-full h-full object-cover object-top group-hover/avatar:scale-110 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.src.includes('tanvir_official_photo.jpg') && !target.src.includes('tanvir_photo.jpg')) {
                        target.src = '/tanvir_official_photo.jpg';
                      }
                    }}
                  />
                </div>
                <span
                  className="absolute bottom-0 right-0 w-4 h-4 bg-[#16f2b3] border-2 border-[#0d1224] rounded-full flex items-center justify-center shadow"
                  title="Available for projects & hackathons"
                >
                  <span className="w-1.5 h-1.5 bg-[#0d1224] rounded-full" />
                </span>
              </div>

              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#10172d] border border-[#1b2c68a0]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#16f2b3] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#16f2b3]"></span>
                  </span>
                  <span className="text-[11px] sm:text-xs font-medium text-slate-300">
                    2nd-Year CSE · Daffodil International University
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono mt-1 pl-1">
                  Dhaka, Bangladesh · Software & Problem Solving
                </p>
              </div>
            </div>

            {/* Main Greeting */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-[#16f2b3] via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Md. Tanvir Hossain
              </span>
            </h1>

            {/* Designation / Role */}
            <h2 className="mt-3 text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 flex items-center gap-2">
              <span className="text-pink-500">&gt;</span>
              <span>Computer Science & Engineering Student</span>
            </h2>

            {/* Location & Academic Meta */}
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-[#16f2b3]" />
                Daffodil International University
              </span>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-pink-400" />
                Dhaka, Bangladesh
              </span>
            </div>

            {/* Short Description */}
            <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
              {PERSONAL_INFO.heroDescription}
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group relative p-2.5 rounded-full bg-[#10172d] border border-[#1b2c68a0] text-slate-300 hover:text-[#16f2b3] hover:border-[#16f2b3]/60 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group relative p-2.5 rounded-full bg-[#10172d] border border-[#1b2c68a0] text-slate-300 hover:text-[#16f2b3] hover:border-[#16f2b3]/60 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Email"
                className="group relative p-2.5 rounded-full bg-[#10172d] border border-[#1b2c68a0] text-slate-300 hover:text-[#16f2b3] hover:border-[#16f2b3]/60 transition-all duration-300 hover:-translate-y-1 shadow-sm"
              >
                <Mail className="w-5 h-5" />
              </a>

              <span className="text-xs text-slate-500 pl-2 font-mono">
                {PERSONAL_INFO.email}
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="relative inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-white transition-all bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 rounded-xl shadow-lg hover:shadow-pink-500/25 hover:scale-[1.02] active:scale-[0.98] group overflow-hidden"
              >
                <span className="relative flex items-center gap-2">
                  <span>View My Projects</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="relative inline-flex items-center justify-center p-[1px] text-sm font-semibold rounded-xl group transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#16f2b3] to-[#8b5cf6] rounded-xl opacity-75 group-hover:opacity-100 transition-opacity"></span>
                <span className="relative px-6 py-3 transition-all duration-200 bg-[#0d1224] rounded-[11px] group-hover:bg-[#10172d] text-slate-100 flex items-center gap-2">
                  <span>Contact Me</span>
                  <Mail className="w-4 h-4 text-[#16f2b3]" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Code IDE Window */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-xl">
              {/* Glow backdrop behind code window */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#16f2b3]/20 via-[#8b5cf6]/30 to-pink-500/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 -z-10" />

              <div className="rounded-2xl border border-[#1b2c68a0] bg-[#090d1c]/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                {/* IDE Window Top Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#10172d]/80 border-b border-[#1b2c68a0]">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                    <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                    <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-[#16f2b3]" />
                      tanvir_student.ts
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyCode}
                      className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1b2c68]/40 hover:bg-[#1b2c68] text-slate-300 hover:text-white text-xs font-mono transition-colors"
                      title="Copy code snippet"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3 text-[#16f2b3]" />
                          <span className="text-[#16f2b3]">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3 text-slate-400" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* IDE Code Content */}
                <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs md:text-[13px] leading-relaxed overflow-x-auto text-slate-200">
                  <div>
                    <span className="text-pink-400">const </span>
                    <span className="text-[#16f2b3]">student</span>
                    <span className="text-slate-400">: </span>
                    <span className="text-teal-300">CSECoder </span>
                    <span className="text-pink-400">= </span>
                    <span className="text-yellow-400">&#123;</span>
                  </div>

                  <div className="pl-4 sm:pl-6">
                    <span className="text-slate-300">name: </span>
                    <span className="text-amber-300">'Md. Tanvir Hossain'</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4 sm:pl-6">
                    <span className="text-slate-300">university: </span>
                    <span className="text-amber-300">'Daffodil International University'</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4 sm:pl-6">
                    <span className="text-slate-300">location: </span>
                    <span className="text-amber-300">'Dhaka, Bangladesh'</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4 sm:pl-6">
                    <span className="text-slate-300">academicYear: </span>
                    <span className="text-amber-300">'2nd-year CSE'</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4 sm:pl-6">
                    <span className="text-slate-300">coreSkills: </span>
                    <span className="text-yellow-400">&#91;</span>
                  </div>

                  <div className="pl-8 sm:pl-10 text-amber-200">
                    <span>'C'</span><span className="text-slate-400">, </span>
                    <span>'C++'</span><span className="text-slate-400">, </span>
                    <span>'Python'</span><span className="text-slate-400">, </span>
                    <span>'JavaScript'</span><span className="text-slate-400">, </span>
                    <br className="hidden sm:inline" />
                    <span>'React'</span><span className="text-slate-400">, </span>
                    <span>'DSA'</span><span className="text-slate-400">, </span>
                    <span>'OOP'</span><span className="text-slate-400">, </span>
                    <span>'Git'</span>
                  </div>

                  <div className="pl-4 sm:pl-6">
                    <span className="text-yellow-400">&#93;</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4 sm:pl-6">
                    <span className="text-slate-300">hardWorker: </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4 sm:pl-6">
                    <span className="text-slate-300">quickLearner: </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4 sm:pl-6">
                    <span className="text-slate-300">problemSolver: </span>
                    <span className="text-orange-400">true</span>
                    <span className="text-slate-400">,</span>
                  </div>

                  <div className="pl-4 sm:pl-6">
                    <span className="text-[#16f2b3]">isReadyToBuild: </span>
                    <span className="text-pink-400">function</span>
                    <span className="text-yellow-400">() &#123;</span>
                  </div>

                  <div className="pl-8 sm:pl-10">
                    <span className="text-pink-400">return </span>
                    <span className="text-yellow-400">(</span>
                  </div>

                  <div className="pl-12 sm:pl-14 text-cyan-300">
                    <span className="text-purple-300">this</span>.hardWorker <span className="text-pink-400">&amp;&amp;</span>
                    <br />
                    <span className="text-purple-300">this</span>.problemSolver <span className="text-pink-400">&amp;&amp;</span>
                    <br />
                    <span className="text-purple-300">this</span>.coreSkills.length <span className="text-pink-400">&gt;=</span> <span className="text-orange-400">8</span>
                  </div>

                  <div className="pl-8 sm:pl-10">
                    <span className="text-yellow-400">)</span>
                    <span className="text-slate-400">;</span>
                  </div>

                  <div className="pl-4 sm:pl-6">
                    <span className="text-yellow-400">&#125;</span>
                  </div>

                  <div>
                    <span className="text-yellow-400">&#125;</span>
                    <span className="text-slate-400">;</span>
                  </div>
                </div>

                {/* IDE Footer Status Bar */}
                <div className="px-4 py-2 bg-[#0a0f24] border-t border-[#1b2c68a0] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#16f2b3]"></span>
                    <span>TypeScript</span>
                    <span>·</span>
                    <span>UTF-8</span>
                  </div>
                  <div className="text-[#16f2b3]">status: Active Learner</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
