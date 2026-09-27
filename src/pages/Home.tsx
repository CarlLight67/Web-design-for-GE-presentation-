import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { buildingService } from '../services/buildingService';
import { architectService } from '../services/architectService';
import { styleService } from '../services/styleService';
import { mapService } from '../services/mapService';
import {
  Building,
  Architect,
  ArchitecturalStyle,
  HistoricalPeriod,
} from '../types/architecture';
import { ArchImage } from '../components/ArchImage';
import { BuildingCard } from '../components/BuildingCard';
import { ArchitectCard } from '../components/ArchitectCard';
import { MapView } from '../components/MapView';
import { SeoHead } from '../components/SeoHead';
import { GENERATED_ARCHIVE_IMAGES } from '../utils/architecturalPlate';

export const Home: React.FC = () => {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [featured, setFeatured] = useState<Building[]>([]);
  const [architects, setArchitects] = useState<Architect[]>([]);
  const [styles, setStyles] = useState<ArchitecturalStyle[]>([]);
  const [periods, setPeriods] = useState<HistoricalPeriod[]>([]);
  const [selectedRegion, setSelectedRegion] = useState<string>('NCR');
  const [loading, setLoading] = useState(true);

  const regionCounts = mapService.getRegionCounts();
  const allRegions = styleService.getAllPhilippineRegions();

  useEffect(() => {
    let mounted = true;
    Promise.all([
      buildingService.getBuildings(),
      buildingService.getFeaturedBuildings(),
      architectService.getArchitects(),
      styleService.getStyles(),
      styleService.getPeriods(),
    ]).then(([allBldgs, featBldgs, allArchs, allStyles, allPeriods]) => {
      if (!mounted) return;
      setBuildings(allBldgs);
      setFeatured(featBldgs);
      setArchitects(allArchs);
      setStyles(allStyles);
      setPeriods(allPeriods);
      setLoading(false);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const leadBuilding = featured[0] || buildings[0];
  const secondaryFeatured = featured.slice(1, 5);
  const regionalBuildings = buildings.filter(
    (b) => b.location.region === selectedRegion
  );

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111]">
      <SeoHead
        title="ARCHI—PH — Philippine Architecture & Heritage Explorer"
        description="Discover the places, architects and ideas that shape the architectural story of the Philippines. A curated digital archive of Philippine architecture."
      />

      {/* HERO SECTION */}
      <section className="relative border-b border-[var(--line)] arch-grid-bg">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Editorial Copy Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3 font-mono-tech text-xs uppercase tracking-widest text-[var(--accent)]">
                <span>PHILIPPINE ARCHITECTURE ARCHIVE</span>
                <span aria-hidden="true">·</span>
                <span>CURATED MONOGRAPH</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-bold tracking-tight leading-tight text-[var(--ink)]">
                PHILIPPINE
                <br />
                ARCHITECTURE
              </h1>

              <p className="text-base sm:text-lg text-[var(--muted)] leading-relaxed max-w-xl">
                Discover the places, architects and ideas that shape the architectural story of the Philippines. A curated collection of selected Philippine architecture across vernacular, colonial, modernist, and contemporary eras.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  to="/explore"
                  className="btn-arch-primary px-6 py-3.5 min-h-[48px] text-xs font-mono-tech uppercase tracking-widest whitespace-nowrap"
                >
                  <span>Explore Architecture</span>
                  <span className="btn-arrow" aria-hidden="true">-&gt;</span>
                </Link>
                <Link
                  to="/map"
                  className="btn-arch-secondary px-6 py-3.5 min-h-[48px] text-xs font-mono-tech uppercase tracking-widest whitespace-nowrap"
                >
                  <span>View Map</span>
                  <span className="btn-arrow" aria-hidden="true">-&gt;</span>
                </Link>
              </div>

              {/* Technical Datum Strip */}
              <div className="pt-6 border-t border-[var(--line)] grid grid-cols-3 gap-4 font-mono-tech text-xs text-[var(--muted)]">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--accent)]">
                    REFERENCE DATUM
                  </div>
                  <div className="text-[var(--ink)] mt-0.5">14.5995 deg N, 120.9842 deg E</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--accent)]">
                    EDITION INDEX
                  </div>
                  <div className="text-[var(--ink)] mt-0.5">ARCHIVE / 001</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--accent)]">
                    JURISDICTION
                  </div>
                  <div className="text-[var(--ink)] mt-0.5">PHILIPPINES</div>
                </div>
              </div>
            </div>

            {/* Hero Architectural Photograph Plate */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border-2 border-[var(--border-strong)] bg-[var(--surface-card)] p-3 sm:p-4 shadow-sm">
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[var(--line)]">
                  <ArchImage
                    src={GENERATED_ARCHIVE_IMAGES.ccp}
                    alt="Exterior view of the Cultural Center of the Philippines Main Building designed by Leandro V. Locsin"
                    blueprintType="brutalist-cantilever"
                    fallbackTitle="Tanghalang Pambansa (CCP Main Building)"
                    fallbackSubtitle="PASAY CITY, NCR · LEANDRO V. LOCSIN · 1969"
                    archiveNumber="ARCH-PH-001"
                    eager
                  />
                  <div className="absolute top-3 left-3 rounded-lg bg-[#090f15]/85 text-[#e8f0f7] px-3 py-1.5 font-mono-tech text-[11px] tracking-wider">
                    ARCHIVE / 001 · PHILIPPINES
                  </div>
                </div>

                <div className="pt-3 px-1 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="text-[var(--muted)] space-y-0.5">
                    <div>
                      Plate 01 — Cultural Center of the Philippines Main Building (Tanghalang Pambansa), Pasay City. Architect: Leandro V. Locsin (1969).
                    </div>
                    <div className="font-mono-tech text-[11px] text-[var(--ink)]">
                      Photo Author: Patrick Roque (patrickroque01) · CC BY-SA 4.0 (Wikimedia Commons)
                    </div>
                  </div>
                  <Link
                    to="/buildings/ccp-main-building"
                    className="btn-arch-secondary px-3.5 py-1.5 font-mono-tech text-[11px] uppercase tracking-wider shrink-0 min-h-[36px]"
                  >
                    <span>Inspect Record</span>
                    <span className="btn-arrow" aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — FEATURED ARCHITECTURE (Asymmetrical Editorial Layout) */}
      <section className="py-16 lg:py-24 border-b border-[var(--line)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[var(--border-strong)]">
            <div>
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
                CURATED SELECTION · VERIFIED MONOGRAPHS
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-semibold text-[var(--ink)]">
                01. Featured Architecture
              </h2>
            </div>
            <Link
              to="/explore"
              className="btn-arch-secondary px-4 py-2.5 font-mono-tech text-xs uppercase tracking-wider min-h-[44px]"
            >
              <span>Browse All {buildings.length} Documented Works</span>
              <span className="btn-arrow" aria-hidden="true">-&gt;</span>
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
              <div className="lg:col-span-7 h-96 rounded-2xl bg-[var(--paper-subtle)] animate-pulse" />
              <div className="lg:col-span-5 h-96 rounded-2xl bg-[var(--paper-subtle)] animate-pulse" />
            </div>
          ) : (
            <div className="pt-10 space-y-12">
              {/* Lead Asymmetrical Feature */}
              {leadBuilding && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-[var(--line)]">
                  <div className="lg:col-span-7">
                    <Link
                      to={`/buildings/${leadBuilding.slug}`}
                      className="block aspect-[16/10] rounded-2xl border-2 border-[var(--border-strong)] overflow-hidden"
                    >
                      <ArchImage
                        src={leadBuilding.images[0]?.url || ''}
                        alt={leadBuilding.images[0]?.alt || leadBuilding.name}
                        blueprintType={leadBuilding.blueprintType}
                        fallbackTitle={leadBuilding.name}
                        archiveNumber={leadBuilding.archiveNumber}
                      />
                    </Link>
                  </div>

                  <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="font-mono-tech text-xs text-[var(--accent)] uppercase tracking-wider">
                        LEAD ARCHIVE MONOGRAPH · {leadBuilding.archiveNumber}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-editorial font-semibold text-[var(--ink)] leading-tight">
                        <Link
                          to={`/buildings/${leadBuilding.slug}`}
                          className="hover:text-[var(--accent)] transition-colors"
                        >
                          {leadBuilding.name}
                        </Link>
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 font-mono-tech text-xs text-[var(--muted)]">
                        <span>
                          {leadBuilding.location.city}, {leadBuilding.location.province}
                        </span>
                        <span>·</span>
                        <span>{leadBuilding.architect.name}</span>
                        <span>·</span>
                        <span>{leadBuilding.yearBuilt}</span>
                        <span>·</span>
                        <span>{leadBuilding.architecturalStyle}</span>
                      </div>
                      <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed pt-2">
                        {leadBuilding.historicalOverview}
                      </p>
                    </div>

                    <dl className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--line)] text-xs">
                      <div>
                        <dt className="font-mono-tech text-[var(--muted)] uppercase">
                          Heritage Classification
                        </dt>
                        <dd className="text-[var(--ink)] font-medium mt-1">
                          {leadBuilding.heritageStatus}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-mono-tech text-[var(--muted)] uppercase">
                          Photograph Credit
                        </dt>
                        <dd className="text-[var(--ink)] font-medium mt-1">
                          {leadBuilding.images[0]?.credit}
                        </dd>
                      </div>
                    </dl>

                    <div className="pt-2">
                      <Link
                        to={`/buildings/${leadBuilding.slug}`}
                        className="btn-arch-primary px-5 py-3 min-h-[44px] text-xs font-mono-tech uppercase tracking-widest"
                      >
                        <span>View Full Monograph</span>
                        <span className="btn-arrow" aria-hidden="true">-&gt;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Secondary 4-Building Editorial Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {secondaryFeatured.map((b) => (
                  <BuildingCard key={b.id} building={b} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 02 — ARCHITECTURAL STYLES (Editorial Index + Characteristics Panel) */}
      <section className="py-16 lg:py-24 bg-[var(--paper-subtle)] border-b border-[var(--line)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[var(--border-strong)]">
            <div>
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
                TYPOLOGICAL TAXONOMY · CONTEXTUAL MOVEMENTS
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-semibold text-[var(--ink)]">
                02. Architectural Styles
              </h2>
            </div>
            <Link
              to="/styles"
              className="btn-arch-secondary px-4 py-2.5 font-mono-tech text-xs uppercase tracking-wider min-h-[44px]"
            >
              <span>Explore All {styles.length} Architectural Movements</span>
              <span className="btn-arrow" aria-hidden="true">-&gt;</span>
            </Link>
          </div>

          <p className="text-sm text-[var(--muted)] max-w-2xl pt-6 pb-8">
            Architectural movements in the Philippines frequently overlap and hybridize across regions. Rather than rigid boxes, these stylistic classifications trace how indigenous climate intelligence adapted colonial masonry, Art Deco, Brutalism, and sustainable contemporary engineering.
          </p>

          <div className="divide-y divide-[var(--line)] rounded-2xl overflow-hidden border-2 border-[var(--line)] bg-[var(--surface-card)]">
            {styles.slice(0, 6).map((style) => (
              <div
                key={style.id}
                className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center hover:bg-[var(--paper-subtle)]/70 transition-colors"
              >
                <div className="lg:col-span-2">
                  <Link
                    to={`/styles/${style.slug}`}
                    className="block aspect-[16/10] rounded-xl border border-[var(--border-strong)] overflow-hidden"
                  >
                    <ArchImage
                      src={style.heroImage}
                      alt={style.name}
                      blueprintType={style.blueprintType}
                      fallbackTitle={style.name}
                      archiveNumber={style.code}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>

                <div className="lg:col-span-3 space-y-1">
                  <div className="font-mono-tech text-xs text-[var(--accent)] font-semibold">
                    {style.code} · {style.periodSpan}
                  </div>
                  <h3 className="text-xl font-editorial font-semibold text-[var(--ink)]">
                    <Link
                      to={`/styles/${style.slug}`}
                      className="hover:text-[var(--accent)] transition-colors"
                    >
                      {style.name}
                    </Link>
                  </h3>
                </div>

                <div className="lg:col-span-4 text-sm text-[var(--muted)] leading-relaxed">
                  {style.description}
                </div>

                <div className="lg:col-span-3 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-3">
                  <div className="text-xs space-y-0.5 lg:text-right">
                    <div className="font-mono-tech text-[10px] uppercase tracking-wider text-[var(--muted)]">
                      Key Philippine Examples
                    </div>
                    {style.examples.slice(0, 2).map((ex) => (
                      <div key={ex.buildingId} className="text-[var(--ink)] font-medium truncate max-w-[220px]">
                        · {ex.name} ({ex.year})
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/styles/${style.slug}`}
                    className="btn-arch-secondary px-4 py-2 font-mono-tech text-xs uppercase whitespace-nowrap min-h-[40px]"
                  >
                    <span>Study Style</span>
                    <span className="btn-arrow" aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — FILIPINO ARCHITECTS */}
      <section className="py-16 lg:py-24 border-b border-[var(--line)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[var(--border-strong)]">
            <div>
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
                NATIONAL ARTISTS · PIONEERS · MAESTRO DE OBRAS
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-semibold text-[var(--ink)]">
                03. Filipino Architects
              </h2>
            </div>
            <Link
              to="/architects"
              className="btn-arch-secondary px-4 py-2.5 font-mono-tech text-xs uppercase tracking-wider min-h-[44px]"
            >
              <span>View All {architects.length} Architect Profiles</span>
              <span className="btn-arrow" aria-hidden="true">-&gt;</span>
            </Link>
          </div>

          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {architects.slice(0, 6).map((arch) => (
              <ArchitectCard key={arch.id} architect={arch} />
            ))}
          </div>
        </div>
      </section>

      {/* 04 — EXPLORE BY REGION */}
      <section className="py-16 lg:py-24 bg-[var(--paper-subtle)] border-b border-[var(--line)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[var(--border-strong)]">
            <div>
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
                ARCHIPELAGO GEOGRAPHY · LUZON · VISAYAS · MINDANAO
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-semibold text-[var(--ink)]">
                04. Explore by Region
              </h2>
            </div>
            <Link
              to={`/explore?region=${encodeURIComponent(selectedRegion)}`}
              className="btn-arch-secondary px-4 py-2.5 font-mono-tech text-xs uppercase tracking-wider min-h-[44px]"
            >
              <span>Filter Database by {selectedRegion}</span>
              <span className="btn-arrow" aria-hidden="true">-&gt;</span>
            </Link>
          </div>

          {/* Interactive Region Tabs */}
          <div className="pt-8 flex flex-wrap gap-2">
            {allRegions.map((reg) => {
              const count = regionCounts[reg] || 0;
              const isSelected = selectedRegion === reg;
              return (
                <button
                  key={reg}
                  type="button"
                  onClick={() => setSelectedRegion(reg)}
                  className={`${
                    isSelected ? 'btn-arch-chip-active' : 'btn-arch-chip'
                  } px-3.5 py-2 min-h-[44px] text-xs font-mono-tech whitespace-nowrap`}
                >
                  {reg} ({count})
                </button>
              );
            })}
          </div>

          <div className="pt-8">
            {regionalBuildings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regionalBuildings.slice(0, 3).map((b) => (
                  <BuildingCard key={b.id} building={b} />
                ))}
              </div>
            ) : (
              <div className="p-8 rounded-2xl border-2 border-[var(--line)] bg-[var(--surface-card)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-editorial font-semibold text-[var(--ink)]">
                    Curated Records Pending Verification for {selectedRegion}
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    ARCHI—PH only publishes records with verified institutional attribution. Select a highlighted region above or explore the full national index.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedRegion('NCR')}
                  className="btn-arch-primary px-4 py-2.5 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider shrink-0"
                >
                  <span>View NCR Records</span>
                  <span className="btn-arrow" aria-hidden="true">-&gt;</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 05 — INTERACTIVE MAP */}
      <section className="py-16 lg:py-24 border-b border-[var(--line)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-[var(--border-strong)]">
            <div>
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
                CARTOGRAPHIC INDEX · OPENSTREETMAP + LEAFLET
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-semibold text-[var(--ink)]">
                05. Interactive Architecture Map
              </h2>
            </div>
            <Link
              to="/map"
              className="btn-arch-secondary px-4 py-2.5 font-mono-tech text-xs uppercase tracking-wider min-h-[44px]"
            >
              <span>Open Fullscreen Cartographic Explorer</span>
              <span className="btn-arrow" aria-hidden="true">-&gt;</span>
            </Link>
          </div>

          <div className="pt-8">
            <MapView buildings={buildings} heightClassName="h-[440px] sm:h-[540px]" />
          </div>
        </div>
      </section>

      {/* 06 — ARCHITECTURE TIMELINE */}
      <section className="py-16 lg:py-24 bg-[var(--paper-subtle)] border-b border-[var(--line)]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-10 border-b border-[var(--border-strong)]">
            <div>
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent)] mb-2">
                CHRONOLOGICAL EVOLUTION · PRECOLONIAL TO CONTEMPORARY
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-semibold text-[var(--ink)]">
                06. Philippine Architecture Timeline
              </h2>
            </div>
            <Link
              to="/timeline"
              className="btn-arch-secondary px-4 py-2.5 font-mono-tech text-xs uppercase tracking-wider min-h-[44px]"
            >
              <span>Explore Full Historical Timeline</span>
              <span className="btn-arrow" aria-hidden="true">-&gt;</span>
            </Link>
          </div>

          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {periods.map((period) => (
              <div
                key={period.id}
                className="card-arch-interactive rounded-2xl border-2 border-[var(--line)] bg-[var(--surface-card)] p-6 flex flex-col justify-between gap-4"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between font-mono-tech text-xs text-[var(--accent)] font-semibold">
                    <span>{period.code}</span>
                    <span>{period.yearRange}</span>
                  </div>
                  <h3 className="text-xl font-editorial font-semibold text-[var(--ink)]">
                    {period.name}
                  </h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">
                    {period.shortSummary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs">
                  <span className="font-mono-tech text-[var(--muted)]">
                    {period.importantExamples.length} KEY MONUMENTS
                  </span>
                  <Link
                    to={`/timeline#${period.id}`}
                    className="btn-arch-secondary px-3.5 py-1.5 font-mono-tech text-[11px] uppercase min-h-[36px]"
                  >
                    <span>Read era</span>
                    <span className="btn-arrow" aria-hidden="true">-&gt;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 — ABOUT & SOURCES SUMMARY */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-7 rounded-2xl border-2 border-[var(--border-strong)] bg-[var(--surface-card)] p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent)]">
                  07. ABOUT THE DIGITAL ARCHIVE
                </p>
                <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[var(--ink)]">
                  Preserving &amp; Indexing Philippine Built Heritage
                </h2>
                <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed">
                  ARCHI—PH is an educational research platform and visual monograph dedicated exclusively to architecture in the Philippines. Every record in this curated collection includes verified structural characteristics, regional context, and traceable citations to official cultural agencies.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/about"
                  className="btn-arch-primary px-5 py-3 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider"
                >
                  <span>About ARCHI—PH</span>
                  <span className="btn-arrow" aria-hidden="true">-&gt;</span>
                </Link>
                <Link
                  to="/gallery"
                  className="btn-arch-secondary px-5 py-3 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider"
                >
                  <span>Open Visual Gallery</span>
                  <span className="btn-arrow" aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl border-2 border-[var(--line)] bg-[var(--paper-subtle)] p-8 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent)]">
                  08. VERIFICATION &amp; SOURCES
                </p>
                <h3 className="text-xl sm:text-2xl font-editorial font-semibold text-[var(--ink)]">
                  Institutional Attribution Standards
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Factual records reference declarations from the National Historical Commission of the Philippines (NHCP), the National Commission for Culture and the Arts (NCCA), the National Museum, and the UNESCO World Heritage Centre.
                </p>
              </div>
              <div>
                <Link
                  to="/sources"
                  className="btn-arch-secondary px-4 py-2.5 font-mono-tech text-xs uppercase tracking-wider min-h-[44px]"
                >
                  <span>Inspect Complete Sources Registry</span>
                  <span className="btn-arrow" aria-hidden="true">-&gt;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
