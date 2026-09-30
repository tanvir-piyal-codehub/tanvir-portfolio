import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center justify-center my-12 md:my-16 text-center">
      {/* Decorative gradient line with centered pill badge */}
      <div className="flex items-center justify-center gap-3 w-full max-w-md px-4">
        <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent to-[#16f2b3]/80"></div>
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#16f2b3] to-[#8b5cf6] rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
          <span className="relative inline-block bg-[#0f172a] border border-[#1b2c68] text-white px-6 py-2.5 text-sm md:text-base font-bold uppercase tracking-widest rounded-lg shadow-[0_0_20px_rgba(22,242,179,0.15)]">
            <span className="text-[#16f2b3] mr-1.5 font-mono">&lt;</span>
            {title}
            <span className="text-[#16f2b3] ml-1.5 font-mono">/&gt;</span>
          </span>
        </div>
        <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent to-[#16f2b3]/80"></div>
      </div>
      {subtitle && (
        <p className="mt-4 text-xs md:text-sm text-slate-400 max-w-xl text-center px-4 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};
