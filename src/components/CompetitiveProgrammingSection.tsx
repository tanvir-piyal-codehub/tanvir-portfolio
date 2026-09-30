import React from 'react';
import { SectionHeader } from './SectionHeader';
import { COMPETITIVE_PLATFORMS } from '../data/portfolioData';
import { Code2, Terminal, Binary, Github, ExternalLink, Clock, Brain, Target, ShieldCheck } from 'lucide-react';

export const CompetitiveProgrammingSection: React.FC = () => {
  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Codeforces':
        return <Binary className="w-5 h-5 text-red-400" />;
      case 'LeetCode':
        return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'CodeChef':
        return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'GitHub':
        return <Github className="w-5 h-5 text-[#16f2b3]" />;
      default:
        return <Target className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="competitive-programming" className="relative py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] bg-purple-500/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="COMPETITIVE PROGRAMMING"
          subtitle="Strengthening algorithmic problem solving, time-space efficiency, and mathematical thinking across coding platforms."
        />

        {/* Philosophy / Mindset Box */}
        <div className="mb-10 p-5 rounded-2xl bg-[#10172d]/80 border border-[#1b2c68a0] max-w-3xl mx-auto flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="p-3 rounded-xl bg-[#0a0f24] border border-[#1b2c68] text-[#16f2b3]">
            <Brain className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white mb-1">
              Active Foundations & Consistent Practice
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              As a 2nd-year CSE student, my competitive programming journey focuses on building rigorous intuition for Data Structures, recursion, two-pointer techniques, sorting routines, and greedy strategies. Profiles and handles are actively being curated as my contest participation progresses.
            </p>
          </div>
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPETITIVE_PLATFORMS.map((item) => {
            const hasUrl = Boolean(item.url);

            return (
              <div
                key={item.platform}
                className="rounded-2xl border border-[#1b2c68a0] bg-[#10172d] p-5 flex flex-col justify-between hover:border-[#16f2b3]/60 transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Top Bar with Icon and Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-[#0a0f24] border border-[#1b2c68]">
                      {getPlatformIcon(item.platform)}
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                        hasUrl
                          ? 'bg-[#16f2b3]/10 text-[#16f2b3] border-[#16f2b3]/40'
                          : 'bg-slate-800/80 text-slate-400 border-slate-700/60'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  {/* Platform Name */}
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Footer Link / Indicator */}
                <div className="pt-3 border-t border-[#1b2c68]/60">
                  {hasUrl ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16f2b3] hover:underline"
                    >
                      <span>Visit Profile</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5 text-amber-400" />
                      <span>Handle integration in progress</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
