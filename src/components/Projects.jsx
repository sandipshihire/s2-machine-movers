import React, { useState } from 'react';
import { Eye, Sparkles, Image as ImageIcon } from 'lucide-react';
import { GALLERY_IMAGES, PROJECT_CATEGORIES } from '../data/projects';
import LightboxModal from './LightboxModal';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const filteredImages = activeCategory === 'all'
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.filter((item) => item.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-28 bg-[#121316] relative border-b border-[#23262E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>On-Site Work Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-['Montserrat'] tracking-tight">
            Our Work <span className="text-[#FF8C00]">Gallery</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gray-300">
            Real photographic proof of executed industrial machinery shifting, equipment installation, piping manifolds, and crane rigging.
          </p>
          <div className="w-20 h-1 bg-[#FF8C00] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
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

        {/* Pure Image Grid (Only Images, No Heavy Text Cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {filteredImages.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(idx)}
              className="group relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-[#181A22] border border-[#282C38] hover:border-[#FF8C00] shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#FF8C00]/10"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-95 group-hover:scale-108 transition-transform duration-500"
                loading="lazy"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Category Badge on Top */}
              <div className="absolute top-2.5 left-2.5 opacity-90 group-hover:opacity-100 transition-opacity">
                <span className="px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm border border-white/10 text-[#FF8C00] text-[10px] font-bold uppercase tracking-wider">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Title & View Icon on Hover / Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-3 sm:p-4 transform translate-y-1 group-hover:translate-y-0 transition-transform">
                <p className="text-xs sm:text-sm font-bold text-white font-['Montserrat'] line-clamp-1 group-hover:text-[#FF8C00] transition-colors">
                  {item.title}
                </p>
                <div className="mt-1 flex items-center gap-1.5 text-[11px] text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-3.5 h-3.5 text-[#FF8C00]" />
                  <span>Click to view full photo</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <LightboxModal
          images={filteredImages}
          activeIndex={activeLightboxIndex}
          onClose={() => setActiveLightboxIndex(null)}
          onChangeIndex={(newIdx) => setActiveLightboxIndex(newIdx)}
        />
      )}
    </section>
  );
}
