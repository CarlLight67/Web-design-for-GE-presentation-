import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ShieldCheck } from 'lucide-react';
import { buildingService } from '../services/buildingService';
import { architectService } from '../services/architectService';
import { Building, Architect, SourceReference } from '../types/architecture';
import { INSTITUTIONAL_SOURCES } from '../data/periods';
import { VERIFIED_PHOTO_CREDITS } from '../utils/architecturalPlate';
import { SeoHead } from '../components/SeoHead';

export const Sources: React.FC = () => {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [architects, setArchitects] = useState<Architect[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    Promise.all([
      buildingService.getBuildings(),
      architectService.getArchitects(),
    ]).then(([bldgs, archs]) => {
      setBuildings(bldgs);
      setArchitects(archs);
    });
  }, []);

  const categories = [
    'All',
    'Government',
    'Heritage',
    'Cultural Institutions',
    'Architecture',
    'Maps',
    'Images',
  ];

  const filteredInstitutional: SourceReference[] = useMemo(() => {
    if (selectedCategory === 'All') return INSTITUTIONAL_SOURCES;
    return INSTITUTIONAL_SOURCES.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111]">
      <SeoHead
        title="Sources & References — ARCHI—PH"
        description="Verified institutional, academic, government, and archival references for all buildings, architects, styles, and real documentary photographs in ARCHI—PH."
      />

      <section className="border-b border-[#d8d3ca] bg-[#ebe6dd] py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-4">
          <div className="inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
            <ShieldCheck className="w-4 h-4" />
            <span>VERIFIED BIBLIOGRAPHIC, AUTHOR &amp; PHOTOGRAPHIC REGISTRY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#111111]">
            SOURCES &amp; REFERENCES
          </h1>
          <p className="text-sm sm:text-base text-[#5c5954] max-w-3xl leading-relaxed">
            Every architectural record, architect biography, and documentary photograph in ARCHI—PH is cross-referenced against official Philippine cultural agencies, international heritage bodies, and verified Wikimedia Commons / NCCA photograph licenses. Zero AI-generated or synthetic images are used.
          </p>
        </div>
      </section>

      {/* Primary Institutional & Reference Repositories */}
      <section className="py-12 lg:py-16 border-b border-[#d8d3ca]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#111111] pb-5">
            <div>
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947] mb-1">
                01. PRIMARY INSTITUTIONAL AUTHORITIES
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
                Official Cultural &amp; Architectural Repositories
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider min-h-[38px] ${
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredInstitutional.map((src, idx) => (
              <div
                key={idx}
                className="rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-5 flex items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="font-mono-tech text-[10px] uppercase tracking-wider text-[#8a5947]">
                    {src.category} {src.institution ? `· ${src.institution}` : ''}
                  </div>
                  <div className="font-semibold text-base text-[#111111]">
                    {src.title}
                  </div>
                  <div className="font-mono-tech text-xs text-[#5c5954] break-all">
                    {src.url}
                  </div>
                </div>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-arch-secondary px-3.5 py-2 inline-flex items-center gap-1.5 font-mono-tech text-xs uppercase shrink-0 min-h-[40px]"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Photograph & Author Audit Registry */}
      <section className="py-12 lg:py-16 border-b border-[#d8d3ca] bg-[#ebe6dd]/50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <div className="border-b border-[#111111] pb-5">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947] mb-1">
              02. VERIFIED PHOTOGRAPH &amp; AUTHOR AUDIT REGISTRY ({VERIFIED_PHOTO_CREDITS.length} REAL PHOTOGRAPHS)
            </p>
            <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
              100% Authentic Documentary Photographs &amp; Verified Authors
            </h2>
            <p className="text-xs sm:text-sm text-[#5c5954] mt-1">
              Complete provenance table listing every photograph in the archive, its Building Architect / Subject Author, its Photograph Author (Photographer), License, and direct Wikimedia Commons file link.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VERIFIED_PHOTO_CREDITS.map((item, idx) => (
              <div
                key={item.localPath}
                className="rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-5 flex flex-col justify-between gap-3"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2 font-mono-tech text-[11px] uppercase text-[#8a5947]">
                    <span>PHOTO PLATE #{String(idx + 1).padStart(2, '0')}</span>
                    <span>{item.license}</span>
                  </div>
                  <h3 className="font-editorial font-semibold text-base text-[#111111]">
                    {item.subject}
                  </h3>
                  <p className="text-xs text-[#111111]">
                    <strong>Architect / Subject Author:</strong> {item.architectOrSubjectAuthor}
                  </p>
                  <p className="text-xs text-[#5c5954]">
                    <strong>Photographer / Image Author:</strong> {item.photographerAuthor}
                  </p>
                  <p className="font-mono-tech text-[11px] text-[#5c5954] break-all">
                    {item.commonsFile}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#d8d3ca] flex items-center justify-between gap-2">
                  <span className="font-mono-tech text-[10px] uppercase text-[#8a5947]">
                    Verified Real Photograph (No AI)
                  </span>
                  <a
                    href={item.commonsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-arch-secondary px-3 py-1.5 inline-flex items-center gap-1.5 font-mono-tech text-[11px] uppercase"
                  >
                    <span>Verify on Wikimedia Commons</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building-by-Building Citations */}
      <section className="py-12 lg:py-16 border-b border-[#d8d3ca]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <div className="border-b border-[#111111] pb-5">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947] mb-1">
              03. BUILDING MONOGRAPH CITATIONS
            </p>
            <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
              Sources by Documented Building ({buildings.length})
            </h2>
          </div>

          <div className="divide-y divide-[#d8d3ca] rounded-2xl overflow-hidden border-2 border-[#111111] bg-[var(--surface-card)]">
            {buildings.map((b) => (
              <div
                key={b.id}
                className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="font-mono-tech text-xs text-[#8a5947]">
                    {b.archiveNumber} · {b.location.city}, {b.location.province} ({b.yearBuilt ?? 'n.d.'})
                  </div>
                  <Link
                    to={`/buildings/${b.id}`}
                    className="text-lg font-editorial font-semibold text-[#111111] hover:text-[#8a5947]"
                  >
                    {b.name}
                  </Link>
                  <div className="text-xs text-[#5c5954]">
                    Architect / Builder: <strong>{b.architect.name}</strong> · Heritage Status: {b.heritageStatus}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {b.sources.map((src, i) => (
                    <a
                      key={i}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-arch-secondary px-3 py-1.5 inline-flex items-center gap-1.5 font-mono-tech text-[11px] uppercase"
                    >
                      <span>{src.title}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architect Citations */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <div className="border-b border-[#111111] pb-5">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947] mb-1">
              04. ARCHITECT BIOGRAPHICAL CITATIONS
            </p>
            <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
              Sources by Filipino Architect ({architects.length})
            </h2>
          </div>

          <div className="divide-y divide-[#d8d3ca] rounded-2xl overflow-hidden border-2 border-[#111111] bg-[var(--surface-card)]">
            {architects.map((a) => (
              <div
                key={a.id}
                className="p-5 sm:p-6 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="font-mono-tech text-xs text-[#8a5947]">
                    {a.archiveCode} · {a.recognition}
                  </div>
                  <Link
                    to={`/architects/${a.slug}`}
                    className="text-lg font-editorial font-semibold text-[#111111] hover:text-[#8a5947]"
                  >
                    {a.name}
                  </Link>
                  {a.images[0]?.credit && (
                    <div className="font-mono-tech text-[11px] text-[#5c5954]">
                      Portrait / Photo Credit: {a.images[0].credit}
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {a.sources.map((src, i) => (
                    <a
                      key={i}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-arch-secondary px-3 py-1.5 inline-flex items-center gap-1.5 font-mono-tech text-[11px] uppercase"
                    >
                      <span>{src.title}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
