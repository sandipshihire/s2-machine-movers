import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Building, Tag, ArrowRight } from 'lucide-react';

export default function LightboxModal({ project, onClose, onOpenQuote }) {
  if (!project) return null;

  const allImages = [project.image, ...(project.additionalImages || [])];
  const [currentIdx, setCurrentIdx] = useState(0);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        setCurrentIdx((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
      }
      if (e.key === 'ArrowRight') {
        setCurrentIdx((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [allImages.length, onClose]);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/92 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#14161D] border border-[#2B2F3D] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#101217] border-b border-[#222530]">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="px-2.5 py-1 rounded bg-[#FF8C00] text-black text-xs font-black uppercase tracking-wider">
              {project.badge || project.categoryLabel}
            </span>
            <span className="text-xs font-medium text-gray-400">
              Photo {currentIdx + 1} of {allImages.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#252834] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Stage */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[440px] max-h-[60vh] bg-black/95 flex items-center justify-center overflow-hidden">
          <img
            key={currentIdx}
            src={allImages[currentIdx]}
            alt={`${project.title} - Photo ${currentIdx + 1}`}
            className="max-h-[58vh] w-auto max-w-full object-contain mx-auto select-none transition-all duration-300"
          />

          {/* Navigation Arrows */}
          {allImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-[#FF8C00] text-white hover:text-black border border-white/10 hover:border-transparent transition-all shadow-lg cursor-pointer z-10"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-[#FF8C00] text-white hover:text-black border border-white/10 hover:border-transparent transition-all shadow-lg cursor-pointer z-10"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Preview Strip */}
        {allImages.length > 1 && (
          <div className="px-4 py-2.5 bg-[#0D0F14] border-t border-[#1F222C] flex items-center gap-2 overflow-x-auto scrollbar-thin">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIdx(i);
                }}
                className={`relative shrink-0 w-14 h-12 sm:w-16 sm:h-12 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${currentIdx === i
                    ? 'border-[#FF8C00] scale-105 shadow-md shadow-[#FF8C00]/20'
                    : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                aria-label={`Go to photo ${i + 1}`}
              >
                <img src={img} alt={`Thumb ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Project Details Bottom Drawer */}
        <div className="p-4 sm:p-5 bg-[#14161D] border-t border-[#222530] space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg sm:text-xl font-black text-white font-['Montserrat']">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenQuote(`Project Inquiry: ${project.title}`);
              }}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-[#FF8C00] hover:bg-[#ffa024] text-black shadow-lg shadow-[#FF8C00]/25 transition-all shrink-0 cursor-pointer"
            >
              <span>Get Similar Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-gray-400 pt-2 border-t border-[#20232E]">
            <span className="flex items-center gap-1.5">
              <Building className="w-3.5 h-3.5 text-[#FF8C00]" />
              <span>Client: <strong className="text-gray-200">{project.client}</strong></span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#FF8C00]" />
              <span>{project.location}</span>
            </span>
            {project.year && (
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF8C00]" />
                <span>{project.year}</span>
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Tag className="w-3.5 h-3.5 text-[#FF8C00]" />
              <span>{project.categoryLabel}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
