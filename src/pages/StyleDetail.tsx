import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { styleService } from '../services/styleService';
import { buildingService } from '../services/buildingService';
import { ArchitecturalStyle, Building } from '../types/architecture';
import { ArchImage } from '../components/ArchImage';
import { BuildingCard } from '../components/BuildingCard';
import { SeoHead } from '../components/SeoHead';

export const StyleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [style, setStyle] = useState<ArchitecturalStyle | null>(null);
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!id) return;
    setLoading(true);
    Promise.all([
      styleService.getStyleById(id),
      buildingService.getBuildingsByStyle(id),
    ]).then(([foundStyle, bldgs]) => {
      setStyle(foundStyle);
      setBuildings(bldgs);
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

  if (!style) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 text-center space-y-4">
        <h1 className="text-3xl font-editorial font-bold">
          We couldn&apos;t load this architectural style record.
        </h1>
        <Link
          to="/styles"
          className="btn-arch-primary inline-flex items-center px-5 py-3 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider"
        >
          Return to Architectural Styles
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111]">
      <SeoHead
        title={`${style.name} — ARCHI—PH`}
        description={style.description}
      />

      <section className="border-b border-[#d8d3ca] bg-[#ebe6dd] py-10 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <div className="flex items-center justify-between">
            <Link
              to="/styles"
              className="btn-arch-secondary px-3.5 py-2 inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider min-h-[40px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>All Architectural Styles</span>
            </Link>
            <span className="font-mono-tech text-xs text-[#8a5947]">
              {style.code} · {style.periodSpan}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#111111]">
                {style.name}
              </h1>
              <p className="text-base sm:text-lg text-[#5c5954] leading-relaxed">
                {style.description}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-3">
                <div className="aspect-[16/9] rounded-xl overflow-hidden border border-[#d8d3ca]">
                  <ArchImage
                    src={style.heroImage}
                    alt={`Architectural illustration of ${style.name}`}
                    blueprintType={style.blueprintType}
                    fallbackTitle={style.name}
                    fallbackSubtitle={style.periodSpan}
                    archiveNumber={style.code}
                    eager
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 border-b border-[#d8d3ca]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                01. HISTORICAL CONTEXT IN THE PHILIPPINES
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
                Origins &amp; Evolution
              </h2>
              <p className="text-base text-[#111111] leading-relaxed max-w-prose">
                {style.historicalContext}
              </p>
            </div>

            <div className="space-y-4 pt-8 border-t border-[#d8d3ca]">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                02. TECTONIC &amp; FORMAL ATTRIBUTES
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
                Key Characteristics
              </h2>
              <ul className="space-y-3">
                {style.characteristics.map((char, idx) => (
                  <li
                    key={idx}
                    className="p-4 rounded-xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] flex items-start gap-3 text-sm"
                  >
                    <span className="font-mono-tech text-xs text-[#8a5947] mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{char}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-6 sm:p-8 space-y-4">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                03. PRACTITIONERS &amp; PIONEERS
              </p>
              <h2 className="text-xl sm:text-2xl font-editorial font-semibold text-[#111111]">
                Related Filipino Architects
              </h2>
              <ul className="divide-y divide-[#d8d3ca]">
                {style.relatedArchitects.map((arch) => (
                  <li key={arch.architectId} className="py-3 flex items-center justify-between">
                    <span className="font-medium text-sm text-[#111111]">
                      {arch.name}
                    </span>
                    <Link
                      to={`/architects/${arch.architectId}`}
                      className="btn-arch-secondary px-3 py-1.5 inline-flex items-center gap-1 font-mono-tech text-xs uppercase"
                    >
                      <span>Profile</span>
                      <span className="btn-arrow">-&gt;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] p-6 sm:p-8 space-y-4">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                04. REFERENCES
              </p>
              <h2 className="text-xl sm:text-2xl font-editorial font-semibold text-[#111111]">
                Sources
              </h2>
              <ul className="space-y-3 text-xs">
                {style.sources.map((src, i) => (
                  <li key={i} className="flex items-center justify-between gap-2">
                    <span>{src.title}</span>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-arch-secondary px-3 py-1.5 inline-flex items-center gap-1 font-mono-tech text-[11px] uppercase shrink-0"
                    >
                      <span>Link</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-[#ebe6dd]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
          <div className="border-b border-[#111111] pb-6">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947] mb-1">
              05. DOCUMENTED PHILIPPINE EXAMPLES
            </p>
            <h2 className="text-3xl font-editorial font-semibold text-[#111111]">
              {style.name} in the Archive ({buildings.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {buildings.map((b) => (
              <BuildingCard key={b.id} building={b} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
