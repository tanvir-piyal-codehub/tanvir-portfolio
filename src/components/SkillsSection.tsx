import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { SKILLS_DATA } from '../data/portfolioData';
import { Code, Cpu, Globe, Wrench, Layers } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', ...SKILLS_DATA.map((c) => c.category)];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code className="w-4 h-4 text-[#16f2b3]" />;
      case 'Computer Science':
        return <Cpu className="w-4 h-4 text-pink-400" />;
      case 'Web Development':
        return <Globe className="w-4 h-4 text-cyan-400" />;
      case 'Tools':
        return <Wrench className="w-4 h-4 text-purple-400" />;
      default:
        return <Layers className="w-4 h-4 text-amber-400" />;
    }
  };

  // Flattened skills for the marquee
  const allSkillsList = SKILLS_DATA.flatMap((cat) =>
    cat.skills.map((s) => ({ ...s, category: cat.category }))
  );

  return (
    <section id="skills" className="relative py-16 md:py-24">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-[#16f2b3]/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="SKILLS & PROFICIENCIES"
          subtitle="Core programming languages, computer science foundations, and development tools I actively use."
        />

        {/* Marquee Tech Strip */}
        <div className="mt-8 mb-12 relative overflow-hidden py-3 border-y border-[#1b2c68]/60 bg-[#0b1021]/60">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0d1224] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0d1224] to-transparent z-10 pointer-events-none" />
          
          <div className="animate-marquee flex items-center gap-6">
            {[...allSkillsList, ...allSkillsList].map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-[#10172d] border border-[#1b2c68a0] shadow-sm hover:border-[#16f2b3]/60 transition-colors whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-[#16f2b3]" />
                <span className="text-xs sm:text-sm font-semibold text-slate-200">
                  {skill.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-lg shadow-pink-500/20'
                    : 'bg-[#10172d] border border-[#1b2c68a0] text-slate-300 hover:text-white hover:border-[#16f2b3]/40'
                }`}
              >
                {cat !== 'All' && getCategoryIcon(cat)}
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS_DATA.filter(
            (catGroup) =>
              selectedCategory === 'All' || catGroup.category === selectedCategory
          ).map((categoryGroup) => (
            <div
              key={categoryGroup.category}
              className="rounded-2xl border border-[#1b2c68a0] bg-[#10172d]/90 p-6 backdrop-blur-sm hover:border-[#16f2b3]/50 transition-all duration-300 shadow-xl"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#1b2c68]/80">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#0d1224] border border-[#1b2c68]">
                    {getCategoryIcon(categoryGroup.category)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {categoryGroup.category}
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      {categoryGroup.description}
                    </p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-[#16f2b3] bg-[#0d1224] px-2.5 py-1 rounded-md border border-[#1b2c68]">
                  {categoryGroup.skills.length} skills
                </span>
              </div>

              {/* Skills Items */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categoryGroup.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-3 rounded-xl bg-[#0d1224]/80 border border-[#1b2c68]/70 hover:border-[#16f2b3]/50 hover:bg-[#0f1836] transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-[#16f2b3] transition-colors">
                        {skill.name}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16f2b3] group-hover:scale-125 transition-transform" />
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                      <span>Status:</span>
                      <span className="text-slate-300 font-mono">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
