import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Compass, Layers } from 'lucide-react';
import { buildingService } from '../services/buildingService';
import { Building } from '../types/architecture';
import { ArchImage } from '../components/ArchImage';
import { BuildingCard } from '../components/BuildingCard';
import { MapView } from '../components/MapView';
import { Lightbox, LightboxItem } from '../components/Lightbox';
import { SeoHead } from '../components/SeoHead';

export const BuildingDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [building, setBuilding] = useState<Building | null>(null);
  const [related, setRelated] = useState<Building[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const loadBuildingData = () => {
    if (!id) return;
    setLoading(true);
    setError(null);
    buildingService
      .getBuildingById(id)
      .then(async (found) => {
        if (!found) {
          setError("We couldn't load this architecture record.");
          setBuilding(null);
        } else {
          setBuilding(found);
          const rel = await buildingService.getRelatedBuildings(found, 3);
          setRelated(rel);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("We couldn't load this architecture record.");
        setLoading(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    loadBuildingData();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-16 space-y-8">
        <div className="h-10 w-64 bg-[#ebe6dd] animate-pulse" />
        <div className="h-[460px] w-full bg-[#ebe6dd] animate-pulse" />
      </div>
    );
  }

  if (error || !building) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-20 text-center space-y-5">
        <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
          ARCHIVE RECORD UNAVAILABLE
        </p>
        <h1 className="text-3xl sm:text-4xl font-editorial font-bold text-[#111111]">
          {error || "We couldn't load this architecture record."}
        </h1>
        <div className="flex justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={loadBuildingData}
            className="btn-arch-primary px-5 py-3 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider"
          >
            Try again
          </button>
          <Link
            to="/explore"
            className="btn-arch-secondary px-5 py-3 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider inline-flex items-center"
          >
            Return to Explore
          </Link>
        </div>
      </div>
    );
  }

  const lightboxItems: LightboxItem[] = building.images.map((img, idx) => ({
    id: `${building.id}-img-${idx}`,
    url: img.url,
    alt: img.alt,
    caption: img.caption,
    credit: img.credit,
    category: img.category || 'Buildings',
    buildingName: building.name,
    buildingSlug: building.slug,
    architectName: building.architect.name,
    location: `${building.location.city}, ${building.location.province}`,
    year: building.yearBuilt,
    blueprintType: building.blueprintType,
    archiveNumber: building.archiveNumber,
  }));

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111]">
      <SeoHead
        title={`${building.name} — ARCHI—PH`}
        description={building.description}
      />

      {/* Breadcrumb & Header */}
      <section className="border-b border-[#d8d3ca] py-8 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/explore"
              className="btn-arch-secondary px-3.5 py-2 inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider min-h-[40px]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Architecture Database</span>
            </Link>
            <div className="font-mono-tech text-xs text-[#8a5947]">
              RECORD ID: {building.archiveNumber} · {building.location.region}
            </div>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold text-[#111111] leading-tight">
              {building.name}
            </h1>
            <p className="text-base sm:text-lg font-mono-tech text-[#5c5954]">
              {building.location.city}, {building.location.province} ·{' '}
              {building.location.region}, Philippines
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image & Accession Metadata Strip */}
      <section className="border-b border-[#d8d3ca] bg-[#ebe6dd] py-8 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
          <div className="rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-3 sm:p-4">
            <div className="aspect-[16/9] max-h-[640px] w-full rounded-xl overflow-hidden border border-[#d8d3ca]">
              <ArchImage
                src={building.images[0]?.url || ''}
                alt={building.images[0]?.alt || `Exterior view of ${building.name}`}
                blueprintType={building.blueprintType}
                fallbackTitle={building.name}
                fallbackSubtitle={`${building.location.city}, ${building.location.province} · ${building.architect.name}`}
                archiveNumber={building.archiveNumber}
                eager
              />
            </div>
            <div className="pt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#5c5954]">
              <div className="space-y-1">
                <p className="text-[#111111] font-medium">
                  {building.images[0]?.caption}
                </p>
                {building.images[0]?.credit && (
                  <p className="font-mono-tech text-[11px] text-[#8a5947] flex flex-wrap items-center gap-2">
                    <span>{building.images[0].credit}</span>
                    {building.images[0].sourceUrl && (
                      <a
                        href={building.images[0].sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-[#111111] inline-flex items-center gap-1"
                      >
                        <span>Verify Commons File</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setLightboxIndex(0)}
                className="btn-arch-primary px-3.5 py-1.5 font-mono-tech text-[11px] uppercase tracking-wider inline-flex items-center gap-1.5 shrink-0"
              >
                <span>Open Fullscreen Plate Viewer</span>
                <span className="btn-arrow">-&gt;</span>
              </button>
            </div>
          </div>

          {/* 6-Field Architectural Metadata Specification Grid */}
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 rounded-2xl overflow-hidden border-2 border-[#111111] bg-[var(--surface-card)] divide-y sm:divide-y-0 sm:divide-x divide-[#d8d3ca]">
            <div className="p-4 sm:p-5 space-y-1">
              <dt className="font-mono-tech text-[11px] uppercase tracking-widest text-[#5c5954]">
                ARCHITECT
              </dt>
              <dd className="text-sm font-semibold text-[#111111]">
                <Link
                  to={`/architects/${building.architect.id}`}
                  className="hover:text-[#8a5947] underline decoration-[#d8d3ca] underline-offset-4"
                >
                  {building.architect.name}
                </Link>
              </dd>
            </div>

            <div className="p-4 sm:p-5 space-y-1">
              <dt className="font-mono-tech text-[11px] uppercase tracking-widest text-[#5c5954]">
                YEAR BUILT
              </dt>
              <dd className="text-sm font-mono-tech font-semibold text-[#111111]">
                {building.yearBuilt ?? 'Unknown'}
              </dd>
            </div>

            <div className="p-4 sm:p-5 space-y-1">
              <dt className="font-mono-tech text-[11px] uppercase tracking-widest text-[#5c5954]">
                STYLE
              </dt>
              <dd className="text-sm font-semibold text-[#111111]">
                <Link
                  to={`/styles/${building.styleId}`}
                  className="hover:text-[#8a5947] underline decoration-[#d8d3ca] underline-offset-4"
                >
                  {building.architecturalStyle}
                </Link>
              </dd>
            </div>

            <div className="p-4 sm:p-5 space-y-1">
              <dt className="font-mono-tech text-[11px] uppercase tracking-widest text-[#5c5954]">
                LOCATION
              </dt>
              <dd className="text-sm font-semibold text-[#111111]">
                {building.location.city}, {building.location.province} (
                {building.location.region})
              </dd>
            </div>

            <div className="p-4 sm:p-5 space-y-1">
              <dt className="font-mono-tech text-[11px] uppercase tracking-widest text-[#5c5954]">
                CATEGORY
              </dt>
              <dd className="text-sm font-semibold text-[#111111]">
                {building.categories.join(' · ')}
              </dd>
            </div>

            <div className="p-4 sm:p-5 space-y-1">
              <dt className="font-mono-tech text-[11px] uppercase tracking-widest text-[#5c5954]">
                HERITAGE STATUS
              </dt>
              <dd className="text-xs font-medium text-[#8a5947] leading-snug">
                {building.heritageStatus || 'Not available'}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* About & Architectural Characteristics */}
      <section className="py-14 lg:py-20 border-b border-[#d8d3ca]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left 7 Cols: About + Architectural Characteristics */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                01. HISTORICAL &amp; ARCHITECTURAL OVERVIEW
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
                About the Building
              </h2>
              <p className="text-base text-[#111111] font-medium leading-relaxed max-w-prose">
                {building.description}
              </p>
              <p className="text-sm sm:text-base text-[#5c5954] leading-relaxed max-w-prose">
                {building.historicalOverview}
              </p>
            </div>

            {/* Architectural Characteristics (Form, Materials, Structure, Facade, Spatial Organization, Context) */}
            <div className="space-y-6 pt-8 border-t border-[#d8d3ca]">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#8a5947]" />
                <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                  02. TECTONIC &amp; SPATIAL ANALYSIS
                </p>
              </div>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
                Architectural Characteristics
              </h2>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="rounded-2xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] p-5 space-y-1.5">
                  <dt className="font-mono-tech text-xs uppercase tracking-wider text-[#8a5947]">
                    Form
                  </dt>
                  <dd className="text-sm text-[#111111] leading-relaxed">
                    {building.characteristics.form}
                  </dd>
                </div>

                <div className="rounded-2xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] p-5 space-y-1.5">
                  <dt className="font-mono-tech text-xs uppercase tracking-wider text-[#8a5947]">
                    Materials
                  </dt>
                  <dd className="text-sm text-[#111111] leading-relaxed">
                    {building.characteristics.materials}
                  </dd>
                </div>

                <div className="rounded-2xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] p-5 space-y-1.5">
                  <dt className="font-mono-tech text-xs uppercase tracking-wider text-[#8a5947]">
                    Structure
                  </dt>
                  <dd className="text-sm text-[#111111] leading-relaxed">
                    {building.characteristics.structure}
                  </dd>
                </div>

                <div className="rounded-2xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] p-5 space-y-1.5">
                  <dt className="font-mono-tech text-xs uppercase tracking-wider text-[#8a5947]">
                    Facade
                  </dt>
                  <dd className="text-sm text-[#111111] leading-relaxed">
                    {building.characteristics.facade}
                  </dd>
                </div>

                <div className="rounded-2xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] p-5 space-y-1.5">
                  <dt className="font-mono-tech text-xs uppercase tracking-wider text-[#8a5947]">
                    Spatial Organization
                  </dt>
                  <dd className="text-sm text-[#111111] leading-relaxed">
                    {building.characteristics.spatialOrganization}
                  </dd>
                </div>

                <div className="rounded-2xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] p-5 space-y-1.5">
                  <dt className="font-mono-tech text-xs uppercase tracking-wider text-[#8a5947]">
                    Context
                  </dt>
                  <dd className="text-sm text-[#111111] leading-relaxed">
                    {building.characteristics.context}
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right 5 Cols: Key Architectural Features + Sources */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-6 sm:p-8 space-y-5">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                KEY ARCHITECTURAL FEATURES
              </p>
              <h3 className="text-xl sm:text-2xl font-editorial font-semibold text-[#111111]">
                Distinguishing Elements
              </h3>
              <ul className="space-y-3 text-sm text-[#111111]">
                {building.architecturalFeatures.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 pb-3 border-b border-[#d8d3ca] last:border-none last:pb-0"
                  >
                    <span className="font-mono-tech text-xs text-[#8a5947] mt-0.5">
                      0{i + 1}
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verified Sources Block */}
            <div className="rounded-2xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] p-6 sm:p-8 space-y-4">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                VERIFIED ARCHIVAL CITATIONS
              </p>
              <h3 className="text-xl sm:text-2xl font-editorial font-semibold text-[#111111]">
                Sources &amp; References
              </h3>
              <ul className="space-y-3 text-xs">
                {building.sources.map((src, i) => (
                  <li
                    key={i}
                    className="p-3.5 rounded-xl border border-[#d8d3ca] bg-[#ebe6dd]/40 flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="font-medium text-[#111111]">{src.title}</div>
                      {src.category && (
                        <div className="font-mono-tech text-[10px] text-[#5c5954] uppercase mt-0.5">
                          {src.category}
                        </div>
                      )}
                    </div>
                    <a
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-arch-secondary px-3 py-1.5 inline-flex items-center gap-1.5 font-mono-tech text-[11px] uppercase shrink-0 min-h-[36px]"
                    >
                      <span>Reference</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Plates */}
      <section className="py-14 lg:py-20 bg-[#ebe6dd] border-b border-[#d8d3ca]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#111111] pb-6">
            <div>
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947] mb-1">
                03. VISUAL DOCUMENTATION &amp; ELEVATION PLATES
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
                Building Gallery
              </h2>
            </div>
            <p className="font-mono-tech text-xs text-[#5c5954]">
              CLICK ANY PLATE TO LAUNCH LIGHTBOX VIEWER
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {building.images.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="card-arch-interactive rounded-2xl group text-left border-2 border-[#111111] bg-[var(--surface-card)] p-3"
              >
                <div className="aspect-[16/10] rounded-xl overflow-hidden border border-[#d8d3ca]">
                  <ArchImage
                    src={img.url}
                    alt={img.alt}
                    blueprintType={building.blueprintType}
                    fallbackTitle={building.name}
                    archiveNumber={building.archiveNumber}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />
                </div>
                <div className="pt-3 flex items-center justify-between gap-2 text-xs">
                  <span className="text-[#5c5954] line-clamp-1">
                    {img.caption}
                  </span>
                  <span className="link-arch-action font-mono-tech text-[10px] uppercase shrink-0">
                    <span>Expand Plate</span>
                    <span className="btn-arrow">-&gt;</span>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Location Map */}
      <section className="py-14 lg:py-20 border-b border-[#d8d3ca]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#111111] pb-6">
            <div>
              <div className="flex items-center gap-2 text-[#8a5947] font-mono-tech text-xs uppercase tracking-widest mb-1">
                <Compass className="w-4 h-4" />
                <span>04. GEOGRAPHIC COORDINATES &amp; URBAN SITING</span>
              </div>
              <h2 className="text-3xl font-editorial font-semibold text-[#111111]">
                Location Map
              </h2>
            </div>
            <div className="font-mono-tech text-xs text-[#5c5954]">
              {building.location.latitude && building.location.longitude
                ? `${building.location.latitude.toFixed(4)} deg N, ${building.location.longitude.toFixed(4)} deg E`
                : 'GENERALIZED MUNICIPAL LOCATION'}
            </div>
          </div>

          <MapView
            buildings={[building]}
            selectedBuildingId={building.id}
            singleBuildingMode
            heightClassName="h-[420px]"
          />
        </div>
      </section>

      {/* Related Architecture */}
      {related.length > 0 && (
        <section className="py-14 lg:py-20 bg-[#ebe6dd]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#111111] pb-6">
              <div>
                <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947] mb-1">
                  05. COMPARATIVE PHILIPPINE ARCHITECTURE
                </p>
                <h2 className="text-3xl font-editorial font-semibold text-[#111111]">
                  Related Architecture
                </h2>
              </div>
              <Link
                to="/explore"
                className="btn-arch-secondary px-4 py-2.5 inline-flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider"
              >
                <span>Explore All Works</span>
                <span className="btn-arrow">-&gt;</span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((relBldg) => (
                <BuildingCard key={relBldg.id} building={relBldg} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Lightbox
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() =>
          setLightboxIndex((prev) =>
            prev !== null
              ? (prev - 1 + lightboxItems.length) % lightboxItems.length
              : null
          )
        }
        onNext={() =>
          setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % lightboxItems.length : null
          )
        }
      />
    </div>
  );
};
