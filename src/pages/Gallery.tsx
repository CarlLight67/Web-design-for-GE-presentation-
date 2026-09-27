import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { buildingService } from '../services/buildingService';
import { Building, BuildingImage } from '../types/architecture';
import { ArchImage } from '../components/ArchImage';
import { SeoHead } from '../components/SeoHead';

interface GalleryItem extends BuildingImage {
  buildingId: string;
  buildingName: string;
  archiveNumber: string;
  locationLabel: string;
  yearBuilt: number | string | null;
  style: string;
  architectName: string;
  blueprintType: Building['blueprintType'];
}

const CATEGORIES = ['All', 'Buildings', 'Heritage', 'Modern', 'Traditional', 'Details'] as const;

export const Gallery: React.FC = () => {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    buildingService.getBuildings().then(setBuildings);
  }, []);

  const items: GalleryItem[] = useMemo(() => {
    const list: GalleryItem[] = [];
    buildings.forEach((b) => {
      b.images.forEach((img) => {
        list.push({
          ...img,
          buildingId: b.id,
          buildingName: b.name,
          archiveNumber: b.archiveNumber,
          locationLabel: `${b.location.city}, ${b.location.province}`,
          yearBuilt: b.yearBuilt,
          style: b.architecturalStyle,
          architectName: b.architect.name,
          blueprintType: b.blueprintType,
        });
      });
    });
    if (selectedCategory === 'All' || selectedCategory === 'Buildings') return list;
    return list.filter((item) => item.category === selectedCategory);
  }, [buildings, selectedCategory]);

  const activeItem = lightboxIdx !== null ? items[lightboxIdx] : null;

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111]">
      <SeoHead
        title="Visual Archive & Gallery — ARCHI—PH"
        description="Browse 100% real, verified documentary photographs of Philippine architecture across Indigenous, Spanish Colonial, American Civic, Postwar Modernist, and Contemporary periods."
      />

      <section className="border-b border-[#d8d3ca] bg-[#ebe6dd] py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <div className="space-y-2">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
              VERIFIED DOCUMENTARY PHOTOGRAPHS · NON-AI ARCHIVE
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#111111]">
              VISUAL ARCHIVE GALLERY
            </h1>
            <p className="text-sm sm:text-base text-[#5c5954] max-w-2xl">
              Inspect 100% authentic, non-AI documentary photographs of Philippine landmarks with verified architect and photographer attributions from Wikimedia Commons and NCCA.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setSelectedCategory(cat);
                  setLightboxIdx(null);
                }}
                className={`px-4 py-2 text-xs font-mono-tech uppercase tracking-wider min-h-[42px] ${
                  selectedCategory === cat
                    ? 'btn-arch-chip btn-arch-chip-active'
                    : 'btn-arch-chip'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="mb-6 font-mono-tech text-xs text-[#5c5954]">
            DISPLAYING <strong className="text-[#111111]">{items.length}</strong> VERIFIED DOCUMENTARY PHOTOGRAPHS
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, idx) => (
              <article
                key={`${item.buildingId}-${idx}`}
                className="card-arch-interactive rounded-2xl group flex flex-col border-2 border-[#111111] bg-[var(--surface-card)] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIdx(idx)}
                  className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#d8d3ca] text-left"
                >
                  <ArchImage
                    src={item.url}
                    alt={item.alt}
                    blueprintType={item.blueprintType}
                    fallbackTitle={item.buildingName}
                    fallbackSubtitle={`${item.locationLabel} · ${item.style}`}
                    archiveNumber={item.archiveNumber}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 rounded-lg bg-[var(--surface-card)]/95 text-[#111111] px-2.5 py-1 border border-[#111111]/30 font-mono-tech text-[10px] uppercase">
                    {item.category || 'Documentary Photo'}
                  </div>
                </button>

                <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="font-mono-tech text-[11px] uppercase text-[#8a5947]">
                      {item.archiveNumber} · {item.locationLabel} ({item.yearBuilt ?? 'n.d.'})
                    </div>
                    <h2 className="text-lg font-editorial font-semibold text-[#111111]">
                      <Link
                        to={`/buildings/${item.buildingId}`}
                        className="hover:text-[#8a5947] transition-colors"
                      >
                        {item.buildingName}
                      </Link>
                    </h2>
                    <p className="text-xs font-medium text-[#111111]">
                      Architect / Builder: {item.architectName}
                    </p>
                    <p className="text-xs text-[#5c5954] line-clamp-2">{item.caption}</p>
                    <p className="font-mono-tech text-[11px] text-[#8a5947] pt-0.5">
                      {item.credit}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#d8d3ca] flex items-center justify-between gap-2">
                    <button
                      type="button"
                      onClick={() => setLightboxIdx(idx)}
                      className="btn-arch-secondary px-3 py-1.5 font-mono-tech text-[11px] uppercase"
                    >
                      Lightbox View
                    </button>
                    <Link
                      to={`/buildings/${item.buildingId}`}
                      className="link-arch-action font-mono-tech text-xs uppercase inline-flex items-center gap-1"
                    >
                      <span>Record</span>
                      <span className="btn-arrow">-&gt;</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {activeItem && lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#111111]/95 flex flex-col justify-between p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery Lightbox"
        >
          <div className="flex items-center justify-between text-[#f4f1eb]">
            <div className="font-mono-tech text-xs uppercase tracking-wider">
              {activeItem.archiveNumber} · {activeItem.buildingName} ({lightboxIdx + 1} /{' '}
              {items.length})
            </div>
            <button
              type="button"
              onClick={() => setLightboxIdx(null)}
              aria-label="Close lightbox"
              className="btn-arch-secondary !bg-[#1c1b18] !text-[#f4f1eb] !border-[#f4f1eb]/40 px-3.5 py-2 font-mono-tech text-xs uppercase inline-flex items-center gap-1.5"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center my-4">
            <div className="max-w-5xl w-full max-h-[70vh] aspect-[16/10] rounded-2xl overflow-hidden border border-[#f4f1eb]/25 bg-[#1c1b18]">
              <ArchImage
                src={activeItem.url}
                alt={activeItem.alt}
                blueprintType={activeItem.blueprintType}
                fallbackTitle={activeItem.buildingName}
                archiveNumber={activeItem.archiveNumber}
                eager
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-4 text-[#f4f1eb] border-t border-[#f4f1eb]/20 pt-4">
            <div className="space-y-1 text-xs">
              <div className="font-medium text-sm">{activeItem.caption}</div>
              <div className="font-mono-tech text-[#f4f1eb]/80 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>Architect: {activeItem.architectName}</span>
                <span>·</span>
                <span>Style: {activeItem.style}</span>
                <span>·</span>
                <span>{activeItem.credit}</span>
                {activeItem.sourceUrl && (
                  <a
                    href={activeItem.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[#34d399] hover:text-white inline-flex items-center gap-1"
                  >
                    <span>Verify Wikimedia Commons File</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() =>
                  setLightboxIdx((lightboxIdx - 1 + items.length) % items.length)
                }
                className="btn-arch-secondary !bg-[#1c1b18] !text-[#f4f1eb] !border-[#f4f1eb]/40 px-3 py-2 font-mono-tech text-xs uppercase inline-flex items-center gap-1"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>
              <button
                type="button"
                onClick={() => setLightboxIdx((lightboxIdx + 1) % items.length)}
                className="btn-arch-secondary !bg-[#1c1b18] !text-[#f4f1eb] !border-[#f4f1eb]/40 px-3 py-2 font-mono-tech text-xs uppercase inline-flex items-center gap-1"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
