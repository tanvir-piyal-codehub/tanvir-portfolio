import React from 'react';
import { SectionHeader } from './SectionHeader';
import { ACTIVITIES_DATA } from '../data/portfolioData';
import { Trophy, Code, Users, Calendar, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

export const ActivitiesSection: React.FC = () => {
  const getActivityIcon = (badge: string) => {
    if (badge.includes('Hackathon')) {
      return <Trophy className="w-5 h-5 text-amber-400" />;
    }
    if (badge.includes('Competitive')) {
      return <Code className="w-5 h-5 text-[#16f2b3]" />;
    }
    return <Users className="w-5 h-5 text-purple-400" />;
  };

  return (
    <section id="activities" className="relative py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-[#16f2b3]/10 blur-[130px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="HACKATHONS & ACTIVITIES"
          subtitle="Collaborative hackathons, campus programming contests, and social innovation initiatives."
        />

        {/* Timeline / Card layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {ACTIVITIES_DATA.map((item, index) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#1b2c68a0] bg-[#10172d] p-6 flex flex-col justify-between hover:border-[#16f2b3]/60 transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              <div>
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="p-3 rounded-xl bg-[#0a0f24] border border-[#1b2c68]">
                    {getActivityIcon(item.badge)}
                  </div>
                  <span className="text-[10px] font-mono text-[#16f2b3] bg-[#0d1224] px-2.5 py-1 rounded-md border border-[#1b2c68]">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Organization */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-pink-400 font-medium mb-3">
                  {item.organization}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Key Takeaways / Highlights */}
                <div className="space-y-2 mb-4">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#16f2b3] mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Project Link if Available */}
              {item.projectLink && (
                <div className="pt-4 border-t border-[#1b2c68]/60 mt-2">
                  <a
                    href={item.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#16f2b3] hover:underline"
                  >
                    <span>View GridWise Project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
