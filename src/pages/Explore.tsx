import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, SlidersHorizontal, X, RotateCcw } from 'lucide-react';
import { buildingService } from '../services/buildingService';
import { architectService } from '../services/architectService';
import { styleService } from '../services/styleService';
import {
  Building,
  Architect,
  ArchitecturalStyle,
  HistoricalPeriod,
  BuildingFilterParams,
} from '../types/architecture';
import { BuildingCard } from '../components/BuildingCard';
import { SeoHead } from '../components/SeoHead';

export const Explore: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [buildings, setBuildings] = useState<Building[]>([]);
  const [architects, setArchitects] = useState<Architect[]>([]);
  const [styles, setStyles] = useState<ArchitecturalStyle[]>([]);
  const [periods, setPeriods] = useState<HistoricalPeriod[]>([]);
  const [loading, setLoading] = useState(true);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter states initialized from URL search params
  const [searchInput, setSearchInput] = useState(searchParams.get('q') || '');
  const [debouncedQuery, setDebouncedQuery] = useState(searchParams.get('q') || '');
  const [region, setRegion] = useState(searchParams.get('region') || 'All');
  const [province, setProvince] = useState(searchParams.get('province') || 'All');
  const [city, setCity] = useState(searchParams.get('city') || 'All');
  const [architectId, setArchitectId] = useState(searchParams.get('architect') || 'All');
  const [styleId, setStyleId] = useState(searchParams.get('style') || 'All');
  const [periodId, setPeriodId] = useState(searchParams.get('period') || 'All');
  const [category, setCategory] = useState(searchParams.get('category') || 'All');
  const [heritageStatus, setHeritageStatus] = useState(searchParams.get('heritage') || 'All');
  const [yearRange, setYearRange] = useState(searchParams.get('year') || 'All');
  const [sortBy, setSortBy] = useState<BuildingFilterParams['sortBy']>('name-asc');

  const filterOptions = useMemo(() => buildingService.getUniqueFilterOptions(), []);
  const allPhilippineRegions = styleService.getAllPhilippineRegions();

  // Sync URL query param changes (e.g., from Navbar quick search)
  useEffect(() => {
    const qParam = searchParams.get('q');
    const regParam = searchParams.get('region');
    const styleParam = searchParams.get('style');
    if (qParam !== null) {
      setSearchInput(qParam);
      setDebouncedQuery(qParam);
    }
    if (regParam !== null) {
      setRegion(regParam);
    }
    if (styleParam !== null) {
      setStyleId(styleParam);
    }
  }, [searchParams]);

  // Debounce search input (200ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchInput);
    }, 200);
    return () => clearTimeout(timer);
  }, [searchInput]);

  // Load reference options
  useEffect(() => {
    Promise.all([
      architectService.getArchitects(),
      styleService.getStyles(),
      styleService.getPeriods(),
    ]).then(([archs, stls, prds]) => {
      setArchitects(archs);
      setStyles(stls);
      setPeriods(prds);
    });
  }, []);

  // Run combinable filter service
  useEffect(() => {
    let active = true;
    setLoading(true);
    buildingService
      .filterBuildings({
        query: debouncedQuery,
        region,
        province,
        city,
        architectId,
        styleId,
        periodId,
        category,
        heritageStatus,
        yearRange,
        sortBy,
      })
      .then((res) => {
        if (!active) return;
        setBuildings(res);
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, [
    debouncedQuery,
    region,
    province,
    city,
    architectId,
    styleId,
    periodId,
    category,
    heritageStatus,
    yearRange,
    sortBy,
  ]);

  const handleClearFilters = () => {
    setSearchInput('');
    setDebouncedQuery('');
    setRegion('All');
    setProvince('All');
    setCity('All');
    setArchitectId('All');
    setStyleId('All');
    setPeriodId('All');
    setCategory('All');
    setHeritageStatus('All');
    setYearRange('All');
    setSortBy('name-asc');
    setSearchParams({});
  };

  const activeFilterCount = [
    debouncedQuery.trim() !== '',
    region !== 'All',
    province !== 'All',
    city !== 'All',
    architectId !== 'All',
    styleId !== 'All',
    periodId !== 'All',
    category !== 'All',
    heritageStatus !== 'All',
    yearRange !== 'All',
  ].filter(Boolean).length;

  const renderFilterControls = () => (
    <div className="space-y-5">
      {/* Region */}
      <div>
        <label
          htmlFor="filter-region"
          className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5c5954] mb-1.5"
        >
          Region
        </label>
        <select
          id="filter-region"
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            setProvince('All');
            setCity('All');
          }}
          className="w-full bg-[#f4f1eb] border border-[#111111] px-3 py-2.5 text-xs text-[#111111] min-h-[44px]"
        >
          <option value="All">All Philippine Regions</option>
          {allPhilippineRegions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      {/* Province */}
      <div>
        <label
          htmlFor="filter-province"
          className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5c5954] mb-1.5"
        >
          Province
        </label>
        <select
          id="filter-province"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="w-full bg-[#f4f1eb] border border-[#d8d3ca] focus:border-[#111111] px-3 py-2.5 text-xs text-[#111111] min-h-[44px]"
        >
          <option value="All">All Provinces</option>
          {filterOptions.provinces.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      {/* City / Municipality */}
      <div>
        <label
          htmlFor="filter-city"
          className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5c5954] mb-1.5"
        >
          City / Municipality
        </label>
        <select
          id="filter-city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full bg-[#f4f1eb] border border-[#d8d3ca] focus:border-[#111111] px-3 py-2.5 text-xs text-[#111111] min-h-[44px]"
        >
          <option value="All">All Cities &amp; Municipalities</option>
          {filterOptions.cities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      {/* Architect */}
      <div>
        <label
          htmlFor="filter-architect"
          className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5c5954] mb-1.5"
        >
          Architect
        </label>
        <select
          id="filter-architect"
          value={architectId}
          onChange={(e) => setArchitectId(e.target.value)}
          className="w-full bg-[#f4f1eb] border border-[#d8d3ca] focus:border-[#111111] px-3 py-2.5 text-xs text-[#111111] min-h-[44px]"
        >
          <option value="All">All Verified Architects</option>
          {architects.map((a) => (
            <option key={a.id} value={a.id}>
              {a.name}
            </option>
          ))}
        </select>
      </div>

      {/* Architectural Style */}
      <div>
        <label
          htmlFor="filter-style"
          className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5c5954] mb-1.5"
        >
          Architectural Style
        </label>
        <select
          id="filter-style"
          value={styleId}
          onChange={(e) => setStyleId(e.target.value)}
          className="w-full bg-[#f4f1eb] border border-[#d8d3ca] focus:border-[#111111] px-3 py-2.5 text-xs text-[#111111] min-h-[44px]"
        >
          <option value="All">All Architectural Styles</option>
          {styles.map((s) => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* Historical Period */}
      <div>
        <label
          htmlFor="filter-period"
          className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5c5954] mb-1.5"
        >
          Historical Period
        </label>
        <select
          id="filter-period"
          value={periodId}
          onChange={(e) => setPeriodId(e.target.value)}
          className="w-full bg-[#f4f1eb] border border-[#d8d3ca] focus:border-[#111111] px-3 py-2.5 text-xs text-[#111111] min-h-[44px]"
        >
          <option value="All">All Historical Periods</option>
          {periods.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </div>

      {/* Building Category */}
      <div>
        <label
          htmlFor="filter-category"
          className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5c5954] mb-1.5"
        >
          Building Category
        </label>
        <select
          id="filter-category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full bg-[#f4f1eb] border border-[#d8d3ca] focus:border-[#111111] px-3 py-2.5 text-xs text-[#111111] min-h-[44px]"
        >
          <option value="All">All Categories</option>
          <option value="Civic">Civic</option>
          <option value="Cultural">Cultural</option>
          <option value="Religious">Religious</option>
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
          <option value="Educational">Educational</option>
          <option value="Government">Government</option>
          <option value="Transportation">Transportation</option>
          <option value="Heritage">Heritage</option>
          <option value="Institutional">Institutional</option>
        </select>
      </div>

      {/* Heritage Status */}
      <div>
        <label
          htmlFor="filter-heritage"
          className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5c5954] mb-1.5"
        >
          Heritage Status
        </label>
        <select
          id="filter-heritage"
          value={heritageStatus}
          onChange={(e) => setHeritageStatus(e.target.value)}
          className="w-full bg-[#f4f1eb] border border-[#d8d3ca] focus:border-[#111111] px-3 py-2.5 text-xs text-[#111111] min-h-[44px]"
        >
          <option value="All">All Heritage Classifications</option>
          <option value="UNESCO World Heritage">UNESCO World Heritage</option>
          <option value="National Cultural Treasure">National Cultural Treasure</option>
          <option value="National Historical Landmark">National Historical Landmark</option>
          <option value="Important Cultural Property">Important Cultural Property</option>
        </select>
      </div>

      {/* Year Built Range */}
      <div>
        <label
          htmlFor="filter-year"
          className="block font-mono-tech text-[11px] uppercase tracking-wider text-[#5c5954] mb-1.5"
        >
          Year / Era Span
        </label>
        <select
          id="filter-year"
          value={yearRange}
          onChange={(e) => setYearRange(e.target.value)}
          className="w-full bg-[#f4f1eb] border border-[#d8d3ca] focus:border-[#111111] px-3 py-2.5 text-xs text-[#111111] min-h-[44px]"
        >
          <option value="All">All Construction Dates</option>
          <option value="pre-1800">Pre-1800 (Early Colonial &amp; Vernacular)</option>
          <option value="1800-1900">1800-1900 (19th Century)</option>
          <option value="1901-1945">1901-1945 (American &amp; Commonwealth)</option>
          <option value="1946-1986">1946-1986 (Post-War &amp; Modernism)</option>
          <option value="1987-present">1987-Present (Contemporary)</option>
        </select>
      </div>

      <div className="pt-2">
        <button
          type="button"
          onClick={handleClearFilters}
          className="btn-arch-secondary w-full px-4 py-3 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Clear filters</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111]">
      <SeoHead
        title="Explore Philippine Architecture — ARCHI—PH"
        description="Search and filter verified Philippine buildings by region, province, city, architect, architectural style, historical period, category, and heritage status."
      />

      {/* Page Header */}
      <section className="border-b border-[#d8d3ca] bg-[#ebe6dd] py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <div className="space-y-2">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
              SEARCHABLE ARCHITECTURE DATABASE · CURATED COLLECTION
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#111111]">
              EXPLORE PHILIPPINE ARCHITECTURE
            </h1>
            <p className="text-sm sm:text-base text-[#5c5954] max-w-2xl">
              A curated collection of selected Philippine architecture. Search across buildings, Filipino architects, regional locations, and historical styles.
            </p>
          </div>

          {/* Search & Sort Bar */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 pt-2">
            <div className="lg:col-span-8 relative">
              <label htmlFor="explore-search-input" className="sr-only">
                Search buildings, architects, places...
              </label>
              <Search className="w-4 h-4 text-[#8a5947] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="explore-search-input"
                type="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search buildings, architects, places..."
                className="w-full rounded-xl bg-[var(--surface-card)] border-2 border-[#111111] pl-11 pr-4 py-3 text-sm text-[#111111] placeholder:text-[#5c5954] focus:outline-none min-h-[48px]"
              />
            </div>

            <div className="lg:col-span-4 flex gap-2">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="btn-arch-primary lg:hidden flex-1 px-4 py-3 min-h-[48px] text-xs font-mono-tech uppercase tracking-wider"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Filters ({activeFilterCount})</span>
              </button>

              <div className="flex-1 flex items-center rounded-xl bg-[var(--surface-card)] border-2 border-[#111111] px-3 min-h-[48px]">
                <label
                  htmlFor="sort-select"
                  className="font-mono-tech text-[11px] uppercase text-[#5c5954] mr-2 shrink-0"
                >
                  Sort:
                </label>
                <select
                  id="sort-select"
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value as BuildingFilterParams['sortBy'])
                  }
                  className="w-full bg-transparent text-xs font-medium text-[#111111] focus:outline-none py-2 border-none shadow-none"
                >
                  <option value="name-asc">Name (A-Z)</option>
                  <option value="year-asc">Chronological (Oldest)</option>
                  <option value="year-desc">Chronological (Newest)</option>
                  <option value="region">Region (A-Z)</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-10 lg:py-14">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Sidebar Filter Panel */}
          <aside
            aria-label="Architecture Filters"
            className="hidden lg:block lg:col-span-3 rounded-2xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] p-6 sticky top-20"
          >
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#d8d3ca]">
              <h2 className="font-mono-tech text-xs uppercase tracking-widest text-[#111111]">
                Filter Archive ({activeFilterCount})
              </h2>
              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="text-xs font-mono-tech text-[#8a5947] hover:underline"
                >
                  Reset
                </button>
              )}
            </div>
            {renderFilterControls()}
          </aside>

          {/* Results Grid */}
          <div className="lg:col-span-9 space-y-6">
            {/* Results Count Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#d8d3ca]">
              <p className="font-mono-tech text-xs text-[#5c5954]">
                SHOWING <strong className="text-[#111111]">{buildings.length}</strong>{' '}
                VERIFIED PHILIPPINE ARCHITECTURE RECORD
                {buildings.length === 1 ? '' : 'S'}
              </p>

              {activeFilterCount > 0 && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="btn-arch-secondary px-3 py-1.5 text-xs font-mono-tech uppercase tracking-wider"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear active filters ({activeFilterCount})</span>
                </button>
              )}
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="h-96 rounded-2xl border border-[#d8d3ca] bg-[#ebe6dd] animate-pulse"
                  />
                ))}
              </div>
            ) : buildings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {buildings.map((building) => (
                  <BuildingCard key={building.id} building={building} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-10 sm:p-14 text-center space-y-4">
                <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                  NO RESULTS FOUND
                </p>
                <h2 className="text-2xl sm:text-3xl font-editorial font-semibold text-[#111111]">
                  No architecture matches your filters.
                </h2>
                <p className="text-sm text-[#5c5954] max-w-md mx-auto">
                  Try removing a filter or searching another term such as "Locsin", "Baroque", "Vigan", "Art Deco", or "NCR".
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleClearFilters}
                    className="btn-arch-primary px-6 py-3 min-h-[44px] text-xs font-mono-tech uppercase tracking-widest"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Clear filters</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Filter Drawer / Bottom Sheet */}
      {mobileFiltersOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Filter Architecture Records"
          className="fixed inset-0 z-50 lg:hidden bg-[#090f15]/75 backdrop-blur-sm flex justify-end"
        >
          <div className="w-full max-w-md bg-[#f4f1eb] h-full overflow-y-auto p-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#111111]">
                <h2 className="font-mono-tech text-xs uppercase tracking-widest text-[#111111]">
                  Filter Architecture Records
                </h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  aria-label="Close filter drawer"
                  className="btn-arch-secondary w-11 h-11 min-w-[44px] min-h-[44px]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              {renderFilterControls()}
            </div>

            <div className="pt-6 mt-6 border-t border-[#d8d3ca]">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                className="btn-arch-primary w-full py-3.5 min-h-[48px] text-xs font-mono-tech uppercase tracking-widest"
              >
                <span>Show {buildings.length} Result{buildings.length === 1 ? '' : 's'}</span>
                <span className="btn-arrow" aria-hidden="true">-&gt;</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
