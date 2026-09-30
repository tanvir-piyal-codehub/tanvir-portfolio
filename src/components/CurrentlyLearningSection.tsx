import React from 'react';
import { SectionHeader } from './SectionHeader';
import { CURRENTLY_LEARNING_DATA } from '../data/portfolioData';
import { Sparkles, Compass, Flame, ArrowUpRight } from 'lucide-react';

export const CurrentlyLearningSection: React.FC = () => {
  return (
    <section id="currently-learning" className="relative py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-pink-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="CURRENTLY LEARNING"
          subtitle="Areas where I am actively expanding my knowledge base through daily practice, lab projects, and courses."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {CURRENTLY_LEARNING_DATA.map((item, index) => (
            <div
              key={item.topic}
              className={`relative rounded-2xl border ${item.border} bg-gradient-to-br ${item.color} bg-[#10172d] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group`}
            >
              {/* Top Accent & Index */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-400">
                  0{index + 1}. Focus
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-[#16f2b3] bg-[#0d1224] px-2.5 py-0.5 rounded-full border border-[#1b2c68]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16f2b3] animate-pulse" />
                  {item.status}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-[#16f2b3] transition-colors">
                {item.topic}
              </h3>

              {/* Focus Details */}
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {item.focus}
              </p>

              {/* Bottom Subtle Bar */}
              <div className="pt-3 border-t border-[#1b2c68]/40 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Active Track</span>
                <Compass className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#16f2b3] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
