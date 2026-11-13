import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Building, Tag } from 'lucide-react';

export default function LightboxModal({ project, onClose, onOpenQuote }) {
  if (!project) return null;

  const allImages = [project.image, ...(project.additionalImages || [])];
  const [currentIdx, setCurrentIdx] = useState(0);

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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#171920] border border-[#2D313E] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-4 bg-[#121318] border-b border-[#252834]">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-[#FF8C00] text-black text-xs font-bold uppercase tracking-wider">
              {project.badge || project.categoryLabel}
            </span>
            <span className="text-xs text-gray-400 hidden sm:inline">
              Photo {currentIdx + 1} of {allImages.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#252834] transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Main Image Display with Navigation Arrows */}
        <div className="relative flex-1 min-h-[320px] sm:min-h-[420px] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={allImages[currentIdx]}
            alt={`${project.title} - Image ${currentIdx + 1}`}
            className="max-h-[60vh] w-auto max-w-full object-contain mx-auto select-none"
          />

          {allImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#FF8C00] text-white hover:text-black transition-colors"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#FF8C00] text-white hover:text-black transition-colors"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Thumbnail dots */}
          {allImages.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/60 px-3 py-1.5 rounded-full">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIdx(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${currentIdx === i ? 'bg-[#FF8C00] scale-125' : 'bg-gray-500'
                    }`}
                  aria-label={`View photo ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Project Details Footer */}
        <div className="p-5 bg-[#161820] border-t border-[#252834] space-y-3">
          <div>
            <h3 className="text-lg sm:text-xl font-black text-white font-['Montserrat']">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-1">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2 border-t border-[#232632]">
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

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => {
                onClose();
                onOpenQuote(`Project Inquiry: ${project.title}`);
              }}
              className="px-4 py-2 rounded-lg text-xs font-bold bg-[#FF8C00] hover:bg-[#ffa024] text-black"
            >
              Inquire Similar Machinery Work
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

