import React from 'react';
import { Terminal, ExternalLink, Code2, Sparkles, Layers } from 'lucide-react';

interface PortfolioCardPreviewProps {
  className?: string;
}

export const PortfolioCardPreview: React.FC<PortfolioCardPreviewProps> = ({ className = '' }) => {
  return (
    <div
      className={`relative w-full h-full bg-[#080d1e] overflow-hidden select-none font-sans p-3 sm:p-4 flex flex-col justify-between border border-[#1b2c68]/80 ${className}`}
    >
      {/* Ambient background glows matching theme */}
      <div className="absolute top-0 left-0 w-36 h-36 bg-pink-500/20 blur-2xl pointer-events-none rounded-full" />
      <div className="absolute top-1/2 right-0 w-44 h-44 bg-[#16f2b3]/15 blur-2xl pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-violet-600/20 blur-2xl pointer-events-none rounded-full" />

      {/* Main Preview Grid */}
      <div className="grid grid-cols-12 gap-2.5 sm:gap-3 h-full items-stretch">
        
        {/* Left Side: Hero Intro & Code Editor */}
        <div className="col-span-6 sm:col-span-7 flex flex-col justify-between space-y-2">
          {/* Hero text */}
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[#10172d] border border-[#1b2c68] text-[8px] sm:text-[9px] text-[#16f2b3] font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16f2b3] animate-pulse" />
              <span>DIU · 2nd-Year CSE</span>
            </div>

            <h3 className="text-xs sm:text-sm md:text-base font-extrabold tracking-tight text-white leading-tight">
              HI, I'M{' '}
              <span className="bg-gradient-to-r from-[#16f2b3] via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                MD. TANVIR HOSSAIN
              </span>
              .
            </h3>

            <p className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold text-pink-400 uppercase tracking-wide">
              Computer Science & Engineering Student
            </p>

            <p className="text-[7px] sm:text-[8px] md:text-[9px] text-slate-400 leading-tight line-clamp-2">
              Passionate about programming, problem solving, software development, and building useful technology.
            </p>

            <div className="pt-0.5 flex items-center gap-1.5">
              <span className="px-2 py-0.5 rounded-md bg-[#16f2b3] text-[#080d1e] font-bold text-[8px] sm:text-[9px] shadow-[0_0_10px_rgba(22,242,179,0.4)]">
                SEE PROJECTS
              </span>
              <span className="px-2 py-0.5 rounded-md bg-[#10172d] border border-[#1b2c68] text-slate-300 font-mono text-[8px]">
                CONTACT
              </span>
            </div>
          </div>

          {/* Mini Code Window */}
          <div className="rounded-lg bg-[#050814]/90 border border-[#1b2c68] p-2 overflow-hidden shadow-lg font-mono text-[7px] sm:text-[8px] text-slate-300">
            <div className="flex items-center justify-between pb-1 mb-1 border-b border-[#1b2c68]/60">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="ml-1 text-[7px] text-slate-400">developer.ts</span>
              </div>
              <span className="text-[7px] text-[#16f2b3]">TypeScript</span>
            </div>
            <div className="leading-tight space-y-0.5">
              <div>
                <span className="text-pink-400">const </span>
                <span className="text-[#16f2b3]">dev </span>
                <span className="text-pink-400">= </span>
                <span className="text-yellow-300">&#123;</span>
              </div>
              <div className="pl-2">
                <span className="text-slate-400">name: </span>
                <span className="text-amber-300">'Md. Tanvir Hossain'</span>,
              </div>
              <div className="pl-2">
                <span className="text-slate-400">dept: </span>
                <span className="text-amber-300">'CSE @ DIU'</span>,
              </div>
              <div className="pl-2">
                <span className="text-slate-400">skills: </span>
                <span className="text-cyan-300">['C++', 'React', 'DSA']</span>
              </div>
              <div>
                <span className="text-yellow-300">&#125;</span>;
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Mini Project Cards Showcase */}
        <div className="col-span-6 sm:col-span-5 flex flex-col justify-between space-y-1.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-pink-400 font-bold flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-[#16f2b3]" />
              FEATURED PROJECTS
            </span>
            <span className="text-[7px] font-mono text-slate-400">4 Projects</span>
          </div>

          {/* Mini Project 1 */}
          <div className="p-1.5 rounded-lg bg-[#0e152d]/90 border border-cyan-500/40 hover:border-cyan-400 transition-colors shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[8px] sm:text-[9px] font-bold text-white flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16f2b3]" />
                GridWise
              </span>
              <span className="text-[6.5px] font-mono text-[#16f2b3] bg-[#050814] px-1 py-0.5 rounded border border-[#1b2c68]">
                Hackathon
              </span>
            </div>
            <p className="text-[7px] text-slate-400 leading-tight mt-0.5 line-clamp-1">
              Smart power telemetry & energy optimization.
            </p>
            <div className="mt-1 flex items-center justify-between text-[6.5px] font-mono">
              <span className="text-slate-400">React · API</span>
              <span className="text-cyan-300 flex items-center gap-0.5">Live Demo →</span>
            </div>
          </div>

          {/* Mini Project 2 - Treasure Hunter Grid DP */}
          <div className="p-1.5 rounded-lg bg-[#0e152d]/90 border border-emerald-500/40 hover:border-emerald-400 transition-colors shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[8px] sm:text-[9px] font-bold text-white flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Treasure Hunter DP
              </span>
              <span className="text-[6.5px] font-mono text-emerald-300 bg-[#050814] px-1 py-0.5 rounded border border-[#1b2c68]">
                2D Grid DP
              </span>
            </div>
            <p className="text-[7px] text-slate-400 leading-tight mt-0.5 line-clamp-1">
              C console game computing mathematically optimal path.
            </p>
            <div className="mt-1 flex items-center justify-between text-[6.5px] font-mono">
              <span className="text-slate-400">C · DP · Matrix</span>
              <span className="text-emerald-300 flex items-center gap-0.5">GitHub →</span>
            </div>
          </div>

          {/* Mini Project 3 */}
          <div className="p-1.5 rounded-lg bg-[#0e152d]/90 border border-purple-500/40 hover:border-purple-400 transition-colors shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[8px] sm:text-[9px] font-bold text-white flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Order Processing System
              </span>
              <span className="text-[6.5px] font-mono text-purple-300 bg-[#050814] px-1 py-0.5 rounded border border-[#1b2c68]">
                C Engine
              </span>
            </div>
            <p className="text-[7px] text-slate-400 leading-tight mt-0.5 line-clamp-1">
              Order processing & data structures in C.
            </p>
            <div className="mt-1 flex items-center justify-between text-[6.5px] font-mono">
              <span className="text-slate-400">C · Structs · Array</span>
              <span className="text-purple-300 flex items-center gap-0.5">GitHub →</span>
            </div>
          </div>

          {/* Mini Project 3 */}
          <div className="p-1.5 rounded-lg bg-[#0e152d]/90 border border-pink-500/40 hover:border-pink-400 transition-colors shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-[8px] sm:text-[9px] font-bold text-white flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
                Personal Portfolio
              </span>
              <span className="text-[6.5px] font-mono text-pink-300 bg-[#050814] px-1 py-0.5 rounded border border-[#1b2c68]">
                Vite + React
              </span>
            </div>
            <p className="text-[7px] text-slate-400 leading-tight mt-0.5 line-clamp-1">
              Responsive showcase for Md. Tanvir Hossain.
            </p>
            <div className="mt-1 flex items-center justify-between text-[6.5px] font-mono">
              <span className="text-slate-400">React · TS · Tailwind</span>
              <span className="text-pink-300 flex items-center gap-0.5">Active →</span>
            </div>
          </div>
        </div>

      </div>

      {/* Floating Watermark Badge */}
      <div className="absolute bottom-1 right-2 pointer-events-none opacity-40 text-[7px] font-mono text-slate-400">
        tanvir-portfolio.vercel.app
      </div>
    </div>
  );
};
