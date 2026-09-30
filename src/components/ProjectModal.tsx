import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle, Tag, Layers, Calendar } from 'lucide-react';
import { ProjectItem } from '../data/portfolioData';
import { PortfolioCardPreview } from './PortfolioCardPreview';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0d1224] border border-[#1b2c68] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-[#10172d] border border-[#1b2c68a0] text-slate-400 hover:text-white hover:border-[#16f2b3] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Tag & Category */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#16f2b3] mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>{project.category}</span>
          <span>·</span>
          <span className="text-slate-400">{project.tagline}</span>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          {project.title}
        </h2>

        {/* Image Preview */}
        <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-[#1b2c68] mb-6 bg-[#090d1c]">
          {project.id === 'personal-portfolio' ? (
            <PortfolioCardPreview className="w-full h-full" />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          )}
        </div>

        {/* Description */}
        <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          <p>{project.description}</p>
        </div>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#16f2b3]" />
              Core Implementation Features
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              {project.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-[#10172d]/70 border border-[#1b2c68]/40">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#16f2b3] mt-1.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <Tag className="w-3.5 h-3.5 text-pink-400" />
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg bg-[#10172d] border border-[#1b2c68a0] text-xs font-mono text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#1b2c68]/60">
          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-violet-600 text-white text-xs sm:text-sm font-semibold shadow-lg hover:shadow-pink-500/25 transition-all"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10172d] border border-[#1b2c68] text-slate-200 hover:text-white hover:border-[#16f2b3] text-xs sm:text-sm font-semibold transition-all"
            >
              <Github className="w-4 h-4 text-[#16f2b3]" />
              <span>Source Code</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-slate-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
