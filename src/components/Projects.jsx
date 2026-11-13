import React, { useState } from 'react';
import { Eye, ExternalLink, Calendar, MapPin, Building, Sparkles } from 'lucide-react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/projects';
import LightboxModal from './LightboxModal';

export default function Projects({ onOpenQuote }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxProject, setActiveLightboxProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#121316] relative border-b border-[#23262E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executed Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            Our Industrial <span className="text-[#FF8C00]">Projects & Gallery</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300">
            Showcasing real executed machinery relocation, equipment installation, piping manifolds, and structural fabrication works.
          </p>
          <div className="w-20 h-1 bg-[#FF8C00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#FF8C00] text-black shadow-lg shadow-[#FF8C00]/25'
                  : 'bg-[#1A1D24] text-gray-300 hover:text-white hover:bg-[#232731] border border-[#2B2F3D]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Project Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-[#181A22] border border-[#282C38] hover:border-[#FF8C00]/60 transition-all duration-300 flex flex-col justify-between shadow-xl hover:-translate-y-1"
            >
              {/* Image Container with Zoom & Hover Overlay */}
              <div
                className="relative h-60 w-full overflow-hidden bg-black cursor-pointer"
                onClick={() => setActiveLightboxProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-108 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181A22] via-transparent to-black/40 opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#FF8C00] text-black text-[11px] font-extrabold uppercase tracking-wider shadow">
                    {project.badge || project.categoryLabel}
                  </span>
                </div>

                {/* Photo Count Indicator if multiple images */}
                {project.additionalImages && project.additionalImages.length > 0 && (
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/70 text-gray-200 text-[10px] font-semibold border border-white/10">
                    +{project.additionalImages.length + 1} Photos
                  </div>
                )}

                {/* Hover Quick View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#FF8C00] text-black text-xs font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>View Project Details</span>
                  </span>
                </div>
              </div>

              {/* Project Card Info */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3
                    onClick={() => setActiveLightboxProject(project)}
                    className="text-lg sm:text-xl font-bold text-white font-['Montserrat'] group-hover:text-[#FF8C00] transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-gray-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#252834] space-y-1.5 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5 truncate">
                    <Building className="w-3.5 h-3.5 text-[#FF8C00] shrink-0" />
                    <span className="truncate">Client: <strong className="text-gray-200">{project.client}</strong></span>
                  </div>
                  <div className="flex items-center justify-between text-gray-400">
                    <span className="flex items-center gap-1.5 truncate">
                      <MapPin className="w-3.5 h-3.5 text-[#FF8C00] shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </span>
                    {project.year && (
                      <span className="flex items-center gap-1 shrink-0 text-gray-300 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#FF8C00]" />
                        <span>{project.year}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxProject && (
        <LightboxModal
          project={activeLightboxProject}
          onClose={() => setActiveLightboxProject(null)}
          onOpenQuote={onOpenQuote}
        />
      )}
    </section>
  );
}

