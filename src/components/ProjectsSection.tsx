import React, { useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { PROJECTS_DATA, ProjectItem } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { PortfolioCardPreview } from './PortfolioCardPreview';
import { ExternalLink, Github, Eye, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Hackathon', 'Software Engineering', 'Web Development'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-16 md:py-24">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-[#16f2b3]/10 to-[#8b5cf6]/10 blur-[140px] pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="FEATURED PROJECTS"
          subtitle="Real projects built during hackathons, academic coursework, and practical software engineering explorations."
        />

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-500 to-violet-600 text-white shadow-lg shadow-pink-500/20'
                    : 'bg-[#10172d] border border-[#1b2c68a0] text-slate-300 hover:text-white hover:border-[#16f2b3]/40'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-[#1b2c68a0] bg-[#10172d]/95 backdrop-blur-md overflow-hidden flex flex-col justify-between hover:border-[#16f2b3]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-xl"
            >
              <div>
                {/* Top IDE / Browser Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f24] border-b border-[#1b2c68]/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ef4444]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                    <span className="ml-2 text-[11px] font-mono text-slate-400">
                      project_0{index + 1}.tsx
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#16f2b3] bg-[#10172d] px-2 py-0.5 rounded border border-[#1b2c68]">
                    {project.category}
                  </span>
                </div>

                {/* Project Thumbnail Image with Hover Zoom */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-[#070a14] cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.id === 'personal-portfolio' ? (
                    <PortfolioCardPreview className="w-full h-full" />
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10172d] via-transparent to-transparent opacity-80 pointer-events-none" />

                  {/* Quick view button overlay */}
                  <div className="absolute inset-0 bg-[#0d1224]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                      className="px-4 py-2 rounded-xl bg-[#0d1224]/90 border border-[#16f2b3] text-xs font-semibold text-[#16f2b3] flex items-center gap-1.5 shadow-lg backdrop-blur-sm"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6">
                  {/* Title & Tagline */}
                  <div className="mb-3">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#16f2b3] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Features highlights (up to 3 items) */}
                  {project.features && (
                    <div className="mb-4 space-y-1.5">
                      {project.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16f2b3] mt-0.5 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#1b2c68]/50">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-[#0d1224] border border-[#1b2c68]/80 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer / Action Buttons */}
              <div className="p-5 pt-0 flex items-center gap-3">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 text-white text-xs font-semibold hover:shadow-lg hover:shadow-pink-500/20 transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-[#0d1224] border border-[#1b2c68] text-slate-300 hover:text-white hover:border-[#16f2b3] text-xs font-semibold transition-all"
                  >
                    <Github className="w-3.5 h-3.5 text-[#16f2b3]" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for detailed view */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
