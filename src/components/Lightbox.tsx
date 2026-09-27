import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ArchImage } from './ArchImage';
import { Building } from '../types/architecture';

export interface LightboxItem {
  id: string;
  url: string;
  alt: string;
  caption: string;
  credit: string;
  category: string;
  buildingName: string;
  buildingSlug: string;
  architectName: string;
  location: string;
  year: string | number | null;
  blueprintType: Building['blueprintType'];
  archiveNumber: string;
}

interface LightboxProps {
  items: LightboxItem[];
  currentIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose, onPrev, onNext]);

  if (currentIndex === null || !items[currentIndex]) return null;

  const current = items[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Architectural plate viewer: ${current.buildingName}`}
      className="fixed inset-0 z-50 bg-[#090f15]/95 backdrop-blur-md text-[#e8f0f7] flex flex-col justify-between p-4 sm:p-6 lg:p-10 overflow-y-auto"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#e8f0f7]/15">
        <div className="flex items-center gap-3 text-xs font-mono-tech text-[#b5c9be]">
          <span>
            PLATE {String(currentIndex + 1).padStart(2, '0')} /{' '}
            {String(items.length).padStart(2, '0')}
          </span>
          <span aria-hidden="true">·</span>
          <span>{current.archiveNumber}</span>
          <span aria-hidden="true">·</span>
          <span className="uppercase">{current.category}</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close lightbox"
          className="inline-flex items-center gap-2 px-4 py-2 min-h-[44px] rounded-xl border-2 border-[#e8f0f7]/40 text-xs font-mono-tech uppercase tracking-wider hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white hover:-translate-y-0.5 transition-all duration-200"
        >
          <span>Close [ESC]</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Image & Controls */}
      <div className="my-auto py-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center max-w-[1440px] w-full mx-auto">
        <div className="lg:col-span-8 relative bg-[#111a24] rounded-2xl border-2 border-[#e8f0f7]/20 aspect-[16/10] flex items-center justify-center overflow-hidden">
          <ArchImage
            src={current.url}
            alt={current.alt}
            blueprintType={current.blueprintType}
            fallbackTitle={current.buildingName}
            fallbackSubtitle={`${current.location} · ${current.architectName}`}
            archiveNumber={current.archiveNumber}
            className="w-full h-full object-contain"
            eager
          />

          <button
            type="button"
            onClick={onPrev}
            aria-label="Previous plate"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#090f15]/90 border-2 border-[#e8f0f7]/40 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:scale-105 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next plate"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-[#090f15]/90 border-2 border-[#e8f0f7]/40 flex items-center justify-center hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:scale-105 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="lg:col-span-4 space-y-5 bg-[#111a24] rounded-2xl border-2 border-[#e8f0f7]/15 p-6">
          <div className="font-mono-tech text-xs text-[var(--accent-bright)] uppercase tracking-widest">
            {current.location} · {current.year ?? 'Recorded'}
          </div>
          <h2 className="text-xl sm:text-2xl font-editorial font-semibold text-[#e8f0f7]">
            {current.buildingName}
          </h2>
          <p className="text-sm text-[#d2e0d8] leading-relaxed">
            {current.caption}
          </p>
          <div className="pt-4 border-t border-[#e8f0f7]/15 space-y-1.5 text-xs text-[#94a8be]">
            <div>
              <strong className="text-[#e8f0f7]">Architect:</strong>{' '}
              {current.architectName}
            </div>
            <div>
              <strong className="text-[#e8f0f7]">Plate Credit:</strong>{' '}
              {current.credit}
            </div>
          </div>
          <div className="pt-3">
            <Link
              to={`/buildings/${current.buildingSlug}`}
              onClick={onClose}
              className="btn-arch-accent inline-flex items-center justify-between w-full px-4 py-3 min-h-[44px] text-xs font-medium uppercase tracking-wider"
            >
              <span>Inspect Building Monograph</span>
              <span className="btn-arrow">-&gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
