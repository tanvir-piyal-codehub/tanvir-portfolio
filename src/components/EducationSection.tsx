import React from 'react';
import { SectionHeader } from './SectionHeader';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookOpen, CheckCircle, Award } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-indigo-500/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="EDUCATION"
          subtitle="Academic path and foundational coursework in Computer Science & Engineering."
        />

        <div className="max-w-4xl mx-auto mt-8">
          <div className="relative rounded-2xl border border-[#1b2c68a0] bg-[#10172d]/95 backdrop-blur-md p-6 sm:p-8 shadow-2xl hover:border-[#16f2b3]/60 transition-all duration-300">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#16f2b3] to-transparent" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-[#1b2c68]/70">
              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-[#0a0f24] border border-[#1b2c68] text-[#16f2b3] shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {EDUCATION_DATA.institution}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-[#16f2b3] mt-0.5">
                    {EDUCATION_DATA.degree}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-pink-400" />
                      {EDUCATION_DATA.location}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 font-mono text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {EDUCATION_DATA.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="self-start">
                <span className="inline-block px-3 py-1.5 rounded-lg bg-[#0d1224] border border-[#1b2c68] text-xs font-mono text-[#16f2b3]">
                  {EDUCATION_DATA.status}
                </span>
              </div>
            </div>

            {/* Academic Summary */}
            <div className="py-6 border-b border-[#1b2c68]/70 text-sm text-slate-300 leading-relaxed">
              <p>{EDUCATION_DATA.summary}</p>
            </div>

            {/* Core Coursework & Focus Areas */}
            <div className="pt-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#16f2b3]" />
                Key Coursework & Academic Focus Areas
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {EDUCATION_DATA.academicFocus.map((course, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#0a0f24]/70 border border-[#1b2c68]/60 text-xs text-slate-200"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#16f2b3] shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
