import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function LightboxModal({ images, activeIndex, onClose, onChangeIndex }) {
  if (!images || activeIndex === null || activeIndex === undefined) return null;

  const currentImage = images[activeIndex];
  const total = images.length;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onChangeIndex((activeIndex - 1 + total) % total);
      }
      if (e.key === 'ArrowRight') {
        onChangeIndex((activeIndex + 1) % total);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, total, onClose, onChangeIndex]);

  const prevImage = (e) => {
    e.stopPropagation();
    onChangeIndex((activeIndex - 1 + total) % total);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    onChangeIndex((activeIndex + 1) % total);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/95 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl bg-[#14161D] border border-[#2B2F3D] rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[96vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#0F1116] border-b border-[#222530]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded bg-[#FF8C00] text-black text-xs font-black uppercase tracking-wider">
              {currentImage.categoryLabel}
            </span>
            <span className="text-sm font-semibold text-white truncate max-w-[200px] sm:max-w-md">
              {currentImage.title}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-medium text-gray-400">
              {activeIndex + 1} / {total}
            </span>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-[#252834] transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Stage */}
        <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] max-h-[72vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            key={currentImage.id || activeIndex}
            src={currentImage.image}
            alt={currentImage.title}
            className="max-h-[70vh] w-auto max-w-full object-contain mx-auto select-none transition-all duration-300"
          />

          {/* Navigation Arrows */}
          {total > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-[#FF8C00] text-white hover:text-black border border-white/10 hover:border-transparent transition-all shadow-lg cursor-pointer z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/75 hover:bg-[#FF8C00] text-white hover:text-black border border-white/10 hover:border-transparent transition-all shadow-lg cursor-pointer z-10"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </>
          )}
        </div>

        {/* Bottom Thumbnail Strip */}
        {total > 1 && (
          <div className="px-4 py-3 bg-[#0D0F14] border-t border-[#1F222C] flex items-center gap-2 overflow-x-auto scrollbar-thin">
            {images.map((item, i) => (
              <button
                key={item.id || i}
                onClick={(e) => {
                  e.stopPropagation();
                  onChangeIndex(i);
                }}
                className={`relative shrink-0 w-16 h-12 sm:w-20 sm:h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                  activeIndex === i
                    ? 'border-[#FF8C00] scale-105 shadow-md shadow-[#FF8C00]/25'
                    : 'border-transparent opacity-50 hover:opacity-100'
                }`}
                aria-label={`Go to image ${i + 1}`}
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
