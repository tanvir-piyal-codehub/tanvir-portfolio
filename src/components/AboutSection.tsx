import React from 'react';
import { SectionHeader } from './SectionHeader';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BookOpen, GraduationCap, MapPin, Laptop, Terminal, Sparkles, CheckCircle2, Code2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#8b5cf6]/10 blur-[120px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="ABOUT ME"
          subtitle="A glimpse into my academic background, technical curiosities, and what drives my development journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-10">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md group">
              {/* Outer Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#16f2b3]/40 via-pink-500/25 to-[#8b5cf6]/40 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-2xl border border-[#1b2c68a0] bg-[#10172d] p-6 shadow-2xl overflow-hidden">
                {/* Visual Identity / Profile container */}
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden border border-[#1b2c68] mb-5 bg-gradient-to-b from-[#172142] via-[#0f172a] to-[#090d1c] shadow-inner group flex flex-col items-center justify-center p-6 text-center">
                  {/* Subtle Studio Lighting Gradients behind subject */}
                  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#16f2b3]/15 rounded-full blur-2xl pointer-events-none" />
                  <div className="absolute bottom-12 right-6 w-40 h-40 bg-[#8b5cf6]/20 rounded-full blur-xl pointer-events-none" />

                  {/* Auto-detected user photo: if you put profile.jpg in the public/ folder, it displays automatically! */}
                  <img
                    src="/profile.jpg"
                    alt="Md. Tanvir Hossain"
                    className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 z-10 hidden"
                    onLoad={(e) => {
                      e.currentTarget.classList.remove('hidden');
                    }}
                    onError={(e) => {
                      e.currentTarget.classList.add('hidden');
                    }}
                  />

                  {/* Developer Monogram Card (Shown by default when no profile.jpg is in public/) */}
                  <div className="relative z-0 flex flex-col items-center justify-center py-6">
                    <div className="relative mb-4">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-tr from-[#16f2b3]/20 via-[#8b5cf6]/20 to-pink-500/20 border-2 border-[#16f2b3]/60 flex items-center justify-center shadow-2xl backdrop-blur-sm group-hover:scale-105 group-hover:border-[#16f2b3] transition-all">
                        <span className="text-3xl sm:text-4xl font-mono font-bold tracking-tight bg-gradient-to-r from-[#16f2b3] via-cyan-300 to-[#8b5cf6] bg-clip-text text-transparent">
                          &lt;TH/&gt;
                        </span>
                      </div>
                      <span className="absolute -bottom-2 -right-2 px-2 py-0.5 rounded-full bg-[#0d1224] border border-[#16f2b3]/80 text-[10px] font-mono text-[#16f2b3] font-semibold">
                        CSE '27
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1">Md. Tanvir Hossain</h4>
                    <p className="text-xs font-mono text-[#16f2b3] mb-2">Competitive Programmer & Developer</p>
                    <p className="text-[11px] text-slate-400 max-w-[220px] leading-relaxed">
                      Daffodil International University · 2nd Year
                    </p>
                  </div>

                  {/* Gradient shadow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10172d] via-transparent to-transparent opacity-80 pointer-events-none z-10" />
                  
                  {/* Verified Badge */}
                  <div className="absolute top-3 right-3 bg-[#0d1224]/90 backdrop-blur-md border border-[#16f2b3]/50 rounded-full px-3 py-1 flex items-center gap-1.5 shadow-lg pointer-events-none z-20">
                    <span className="w-2 h-2 rounded-full bg-[#16f2b3] animate-pulse" />
                    <span className="text-[11px] font-mono text-[#16f2b3] font-semibold">Active Student</span>
                  </div>

                  {/* Floating Tag at Bottom */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#0d1224]/90 backdrop-blur-md border border-[#1b2c68] rounded-xl px-4 py-2.5 flex items-center justify-between text-xs shadow-xl z-20 pointer-events-none">
                    <div>
                      <p className="text-white font-bold">Md. Tanvir Hossain</p>
                      <p className="text-[11px] text-slate-400">BSc in CSE · 2nd Year</p>
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-[#16f2b3] bg-[#10172d] px-2 py-1 rounded border border-[#1b2c68]">
                      DIU
                    </span>
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0d1224]/80 border border-[#1b2c68]/60 hover:border-[#16f2b3]/40 transition-colors">
                    <GraduationCap className="w-4 h-4 text-[#16f2b3] shrink-0" />
                    <span className="font-medium">Daffodil International University</span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0d1224]/80 border border-[#1b2c68]/60 hover:border-pink-400/40 transition-colors">
                    <MapPin className="w-4 h-4 text-pink-400 shrink-0" />
                    <span className="font-medium">Dhaka, Bangladesh</span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#0d1224]/80 border border-[#1b2c68]/60 hover:border-purple-400/40 transition-colors">
                    <Laptop className="w-4 h-4 text-purple-400 shrink-0" />
                    <span className="font-medium">BSc in Computer Science & Engineering</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Personal Narrative & Focus */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p className="border-l-2 border-[#16f2b3] pl-4 py-1 text-slate-200 font-medium">
                {PERSONAL_INFO.aboutParagraph1}
              </p>

              <p className="text-slate-300 pl-4">
                {PERSONAL_INFO.aboutParagraph2}
              </p>
            </div>

            {/* Core Interests & Competencies */}
            <div className="mt-8 pt-6 border-t border-[#1b2c68]/60">
              <h3 className="text-xs uppercase font-mono tracking-wider text-[#16f2b3] mb-4 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                PRIMARY AREAS OF EXPLORATION
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {PERSONAL_INFO.interests.map((interest) => (
                  <div
                    key={interest}
                    className="p-2.5 rounded-lg bg-[#10172d] border border-[#1b2c68a0] hover:border-[#16f2b3]/60 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#16f2b3]" />
                    <span className="text-xs font-medium text-slate-200 truncate">
                      {interest}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Commitment Quote */}
            <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-[#10172d] to-[#151c38] border border-[#1b2c68a0] text-xs text-slate-300 flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#16f2b3] shrink-0 mt-0.5" />
              <p>
                <span className="text-white font-semibold">Continuous Evolution:</span>{' '}
                As an early-career undergraduate, my emphasis is on mastering fundamentals—writing clean, maintainable code, understanding memory and algorithms, and converting problems into practical software.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
