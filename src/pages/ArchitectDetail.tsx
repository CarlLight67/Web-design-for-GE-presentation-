import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { architectService } from '../services/architectService';
import { buildingService } from '../services/buildingService';
import { Architect, Building } from '../types/architecture';
import { ArchImage } from '../components/ArchImage';
import { BuildingCard } from '../components/BuildingCard';
import { SeoHead } from '../components/SeoHead';

export const ArchitectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [architect, setArchitect] = useState<Architect | null>(null);
  const [relatedBuildings, setRelatedBuildings] = useState<Building[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!id) return;
    setLoading(true);
    Promise.all([
      architectService.getArchitectById(id),
      buildingService.getBuildingsByArchitect(id),
    ]).then(([arch, bldgs]) => {
      setArchitect(arch);
      setRelatedBuildings(bldgs);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 space-y-6">
        <div className="h-10 w-64 bg-[#ebe6dd] animate-pulse" />
        <div className="h-96 w-full bg-[#ebe6dd] animate-pulse" />
      </div>
    );
  }

  if (!architect) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 text-center space-y-4">
        <p className="font-mono-tech text-xs uppercase text-[#8a5947]">
          ARCHITECT RECORD UNAVAILABLE
        </p>
        <h1 className="text-3xl font-editorial font-bold">
          We couldn&apos;t load this architect profile.
        </h1>
        <Link
          to="/architects"
          className="btn-arch-primary inline-flex items-center px-5 py-3 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider"
        >
          Return to Architects Directory
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111]">
      <SeoHead
        title={`${architect.name} — ARCHI—PH`}
        description={architect.biography}
      />

      {/* Header */}
      <section className="border-b border-[#d8d3ca] bg-[#ebe6dd] py-10 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/architects"
              className="btn-arch-secondary px-3.5 py-2 inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider min-h-[40px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Filipino Architects</span>
            </Link>
            <span className="font-mono-tech text-xs text-[#8a5947]">
              {architect.archiveCode} · {architect.nationality.toUpperCase()}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-3">
              <div className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                {architect.recognition}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#111111] uppercase">
                {architect.name}
              </h1>
              <dl className="flex flex-wrap gap-x-8 gap-y-2 pt-3 font-mono-tech text-xs text-[#5c5954]">
                <div>
                  <span className="uppercase text-[#8a5947]">Birth Year:</span>{' '}
                  <strong className="text-[#111111]">
                    {architect.birthYear ?? 'Unknown / Collective'}
                  </strong>
                </div>
                <div>
                  <span className="uppercase text-[#8a5947]">Death Year:</span>{' '}
                  <strong className="text-[#111111]">
                    {architect.deathYear ?? 'Unknown / Continuing'}
                  </strong>
                </div>
                <div>
                  <span className="uppercase text-[#8a5947]">Active Period:</span>{' '}
                  <strong className="text-[#111111]">{architect.activePeriod}</strong>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-3">
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#d8d3ca]">
                  <ArchImage
                    src={architect.images[0]?.url || ''}
                    alt={architect.images[0]?.alt || architect.name}
                    fallbackTitle={architect.name}
                    fallbackSubtitle={architect.recognition}
                    archiveNumber={architect.archiveCode}
                    eager
                  />
                </div>
                <div className="pt-2.5 px-1 space-y-1">
                  <p className="text-xs text-[#111111] font-medium">
                    {architect.images[0]?.caption}
                  </p>
                  {architect.images[0]?.credit && (
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[11px] text-[#8a5947]">
                      <span>{architect.images[0].credit}</span>
                      {architect.images[0].sourceUrl && (
                        <a
                          href={architect.images[0].sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-[#111111] inline-flex items-center gap-1"
                        >
                          <span>Verify Commons File</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography, Architectural Approach, Major Works & Timeline */}
      <section className="py-14 lg:py-20 border-b border-[#d8d3ca]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left 7 Cols: Biography & Approach & Major Works */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                01. BIOGRAPHICAL RECORD
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
                Biography
              </h2>
              <p className="text-base text-[#111111] leading-relaxed max-w-prose">
                {architect.biography}
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-[#d8d3ca]">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                02. DESIGN PHILOSOPHY &amp; TECTONICS
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
                Architectural Approach
              </h2>
              <p className="text-base text-[#5c5954] leading-relaxed max-w-prose">
                {architect.architecturalApproach}
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-[#d8d3ca]">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                03. SELECTED PORTFOLIO
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
                Major Works
              </h2>
              <div className="divide-y divide-[#d8d3ca] rounded-2xl overflow-hidden border-2 border-[#d8d3ca] bg-[var(--surface-card)]">
                {architect.majorWorks.map((work, i) => (
                  <div
                    key={i}
                    className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div>
                      <div className="font-semibold text-[#111111]">
                        {work.buildingId ? (
                          <Link
                            to={`/buildings/${work.buildingId}`}
                            className="hover:text-[#8a5947] underline decoration-[#d8d3ca] underline-offset-4"
                          >
                            {work.title}
                          </Link>
                        ) : (
                          work.title
                        )}
                      </div>
                      <div className="text-xs text-[#5c5954] mt-0.5">
                        {work.location}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-mono-tech text-xs text-[#8a5947]">
                        {work.year}
                      </span>
                      {work.buildingId && (
                        <Link
                          to={`/buildings/${work.buildingId}`}
                          className="btn-arch-secondary px-3 py-1.5 inline-flex items-center gap-1 font-mono-tech text-xs uppercase"
                        >
                          <span>Inspect</span>
                          <span className="btn-arrow">-&gt;</span>
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Chronological Timeline & Sources */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-6 sm:p-8 space-y-5">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                04. CHRONOLOGY
              </p>
              <h2 className="text-xl sm:text-2xl font-editorial font-semibold text-[#111111]">
                Career Timeline
              </h2>
              <ol className="space-y-4 border-l-2 border-[#111111] pl-5">
                {architect.timeline.map((item, idx) => (
                  <li key={idx} className="relative space-y-1">
                    <span className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-sm bg-[#8a5947] border border-[#111111]" />
                    <div className="font-mono-tech text-xs font-semibold text-[#8a5947]">
                      {item.year}
                    </div>
                    <p className="text-sm text-[#111111]">{item.event}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-2xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] p-6 sm:p-8 space-y-4">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                05. VERIFIED CITATIONS
              </p>
              <h2 className="text-xl sm:text-2xl font-editorial font-semibold text-[#111111]">
                Sources
              </h2>
              <ul className="space-y-3 text-xs">
                {architect.sources.map((src, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl border border-[#d8d3ca] bg-[#ebe6dd]/40 flex items-center justify-between gap-3"
                  >
                    <span className="font-medium text-[#111111]">{src.title}</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-arch-secondary px-3 py-1.5 inline-flex items-center gap-1 font-mono-tech text-[11px] uppercase shrink-0"
                    >
                      <span>Source</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Buildings in Archive */}
      {relatedBuildings.length > 0 && (
        <section className="py-14 lg:py-20 bg-[#ebe6dd]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
            <div className="border-b border-[#111111] pb-6">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947] mb-1">
                06. ARCHIVE MONOGRAPHS BY THIS ARCHITECT
              </p>
              <h2 className="text-3xl font-editorial font-semibold text-[#111111]">
                Related Buildings in ARCHI—PH
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBuildings.map((b) => (
                <BuildingCard key={b.id} building={b} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
