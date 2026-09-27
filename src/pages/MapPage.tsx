import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, RotateCcw } from 'lucide-react';
import { mapService } from '../services/mapService';
import { styleService } from '../services/styleService';
import { Building, ArchitecturalStyle } from '../types/architecture';
import { MapView } from '../components/MapView';
import { SeoHead } from '../components/SeoHead';

export const MapPage: React.FC = () => {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [styles, setStyles] = useState<ArchitecturalStyle[]>([]);
  const [query, setQuery] = useState('');
  const [region, setRegion] = useState('All');
  const [styleId, setStyleId] = useState('All');
  const [category, setCategory] = useState('All');
  const [selectedBuildingId, setSelectedBuildingId] = useState<string | null>(null);

  const allRegions = styleService.getAllPhilippineRegions();

  useEffect(() => {
    styleService.getStyles().then(setStyles);
  }, []);

  useEffect(() => {
    mapService
      .getMappableBuildings({
        query,
        region,
        styleId,
        category,
      })
      .then((res) => {
        setBuildings(res);
        if (selectedBuildingId && !res.some((b) => b.id === selectedBuildingId)) {
          setSelectedBuildingId(null);
        }
      });
  }, [query, region, styleId, category]);

  const handleReset = () => {
    setQuery('');
    setRegion('All');
    setStyleId('All');
    setCategory('All');
    setSelectedBuildingId(null);
  };

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111]">
      <SeoHead
        title="Interactive Philippine Architecture Map — ARCHI—PH"
        description="Explore verified Philippine buildings, UNESCO World Heritage churches, and modernist landmarks on an interactive OpenStreetMap + Leaflet cartographic index."
      />

      {/* Header & Filter Bar */}
      <section className="border-b border-[#d8d3ca] bg-[#ebe6dd] py-10 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                CARTOGRAPHIC ARCHIVE · LEAFLET + OPENSTREETMAP
              </p>
              <h1 className="text-3xl sm:text-4xl font-editorial font-bold text-[#111111]">
                PHILIPPINE ARCHITECTURE MAP
              </h1>
            </div>
            <p className="text-xs font-mono-tech text-[#5c5954]">
              CLICK ANY MARKER OR INDEX CARD TO INSPECT LOCATION &amp; RECORD
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 pt-2">
            <div className="sm:col-span-2 lg:col-span-4 relative">
              <label htmlFor="map-search" className="sr-only">
                Search map by building, architect, or city
              </label>
              <Search className="w-4 h-4 text-[#8a5947] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="map-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search building, city, architect..."
                className="w-full rounded-xl bg-[var(--surface-card)] border-2 border-[#111111] pl-10 pr-3 py-2.5 text-xs text-[#111111] min-h-[44px]"
              />
            </div>

            <div className="lg:col-span-3">
              <label htmlFor="map-region" className="sr-only">
                Filter by Philippine Region
              </label>
              <select
                id="map-region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full rounded-xl bg-[var(--surface-card)] border-2 border-[#111111] px-3 py-2.5 text-xs text-[#111111] min-h-[44px]"
              >
                <option value="All">All Philippine Regions</option>
                {allRegions.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-3">
              <label htmlFor="map-style" className="sr-only">
                Filter by Architectural Style
              </label>
              <select
                id="map-style"
                value={styleId}
                onChange={(e) => setStyleId(e.target.value)}
                className="w-full rounded-xl bg-[var(--surface-card)] border-2 border-[#111111] px-3 py-2.5 text-xs text-[#111111] min-h-[44px]"
              >
                <option value="All">All Architectural Styles</option>
                {styles.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="lg:col-span-2 flex gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="btn-arch-secondary w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Split Map & Directory Layout */}
      <section className="py-8 lg:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Interactive Map (8 Cols) */}
          <div className="lg:col-span-8">
            <MapView
              buildings={buildings}
              selectedBuildingId={selectedBuildingId}
              onSelectBuilding={(b) => setSelectedBuildingId(b.id)}
              heightClassName="h-[460px] sm:h-[620px]"
            />
          </div>

          {/* Synchronized Coordinate List (4 Cols) */}
          <div className="lg:col-span-4 rounded-2xl overflow-hidden border-2 border-[#111111] bg-[var(--surface-card)] flex flex-col max-h-[620px]">
            <div className="p-4 border-b border-[#111111] bg-[#ebe6dd] flex items-center justify-between">
              <span className="font-mono-tech text-xs uppercase tracking-wider text-[#111111]">
                Mapped Records ({buildings.length})
              </span>
              {selectedBuildingId && (
                <button
                  type="button"
                  onClick={() => setSelectedBuildingId(null)}
                  className="btn-arch-primary px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-wider"
                >
                  Zoom Out All
                </button>
              )}
            </div>

            <div className="overflow-y-auto divide-y divide-[#d8d3ca]">
              {buildings.length > 0 ? (
                buildings.map((b) => {
                  const isSelected = selectedBuildingId === b.id;
                  return (
                    <div
                      key={b.id}
                      className={`p-4 transition-colors ${
                        isSelected ? 'bg-[#ebe6dd] border-l-4 border-l-[#8a5947]' : 'bg-[var(--surface-card)] hover:bg-[#ebe6dd]/70'
                      }`}
                    >
                      <div className="flex items-center justify-between font-mono-tech text-[11px] text-[#8a5947]">
                        <span>{b.archiveNumber}</span>
                        <span>{b.location.region}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setSelectedBuildingId(b.id)}
                        className="mt-1 text-left font-editorial font-semibold text-base text-[#111111] hover:text-[#8a5947] transition-colors block w-full"
                      >
                        {b.name}
                      </button>
                      <div className="text-xs text-[#5c5954] mt-1">
                        {b.location.city}, {b.location.province} · {b.architect.name}
                      </div>
                      <div className="mt-2.5 pt-2.5 border-t border-[#d8d3ca]/70 flex items-center justify-between gap-2 text-xs">
                        <button
                          type="button"
                          onClick={() => setSelectedBuildingId(b.id)}
                          className="btn-arch-chip px-2.5 py-1 font-mono-tech text-[10px] uppercase tracking-wider"
                        >
                          Center on Map
                        </button>
                        <Link
                          to={`/buildings/${b.slug}`}
                          className="btn-arch-primary px-2.5 py-1 inline-flex items-center gap-1 font-mono-tech text-[10px] uppercase tracking-wider"
                        >
                          <span>View Building</span>
                          <span className="btn-arrow">-&gt;</span>
                        </Link>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="p-8 text-center space-y-3">
                  <p className="text-sm text-[#5c5954]">
                    No mapped buildings match your current filters.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-arch-primary px-4 py-2 min-h-[40px] text-xs font-mono-tech uppercase"
                  >
                    Reset Map Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
