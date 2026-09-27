import React, { useEffect, useState } from 'react';
import { Search } from 'lucide-react';
import { architectService } from '../services/architectService';
import { Architect } from '../types/architecture';
import { ArchitectCard } from '../components/ArchitectCard';
import { SeoHead } from '../components/SeoHead';

export const Architects: React.FC = () => {
  const [architects, setArchitects] = useState<Architect[]>([]);
  const [query, setQuery] = useState('');
  const [filterNationalArtist, setFilterNationalArtist] = useState<'all' | 'national-artist'>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    setLoading(true);
    architectService.searchArchitects(query).then((res) => {
      if (!active) return;
      const filtered =
        filterNationalArtist === 'national-artist'
          ? res.filter((a) => Boolean(a.nationalArtistYear))
          : res;
      setArchitects(filtered);
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [query, filterNationalArtist]);

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111]">
      <SeoHead
        title="Filipino Architects Directory — ARCHI—PH"
        description="Explore verified biographies, architectural approaches, and major works of Filipino architects, National Artists for Architecture, and traditional master builders."
      />

      <section className="border-b border-[#d8d3ca] bg-[#ebe6dd] py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-6">
          <div className="space-y-2">
            <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
              BIOGRAPHICAL &amp; MONOGRAPH INDEX · PHILIPPINES
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#111111]">
              FILIPINO ARCHITECTS
            </h1>
            <p className="text-sm sm:text-base text-[#5c5954] max-w-2xl">
              Explore the lives, philosophies, and documented works of the Filipino architects, National Artists, and indigenous master builders who shaped the Philippine built environment.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <div className="relative flex-1">
              <label htmlFor="architect-search" className="sr-only">
                Search Filipino architects or major works
              </label>
              <Search className="w-4 h-4 text-[#8a5947] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="architect-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by architect name, recognition, or major work..."
                className="w-full rounded-xl bg-[var(--surface-card)] border-2 border-[#111111] pl-11 pr-4 py-3 text-sm text-[#111111] placeholder:text-[#5c5954] focus:outline-none min-h-[48px]"
              />
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setFilterNationalArtist('all')}
                className={`px-4 py-2 text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap min-h-[48px] ${
                  filterNationalArtist === 'all'
                    ? 'btn-arch-chip btn-arch-chip-active'
                    : 'btn-arch-chip'
                }`}
              >
                All Architects
              </button>
              <button
                type="button"
                onClick={() => setFilterNationalArtist('national-artist')}
                className={`px-4 py-2 text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap min-h-[48px] ${
                  filterNationalArtist === 'national-artist'
                    ? 'btn-arch-chip btn-arch-chip-active'
                    : 'btn-arch-chip'
                }`}
              >
                Order of National Artists
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((n) => (
                <div key={n} className="h-96 rounded-2xl bg-[#ebe6dd] animate-pulse" />
              ))}
            </div>
          ) : architects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {architects.map((arch) => (
                <ArchitectCard key={arch.id} architect={arch} />
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-12 text-center space-y-4">
              <h2 className="text-2xl font-editorial font-semibold">
                No architect profiles match your search.
              </h2>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setFilterNationalArtist('all');
                }}
                className="btn-arch-primary px-5 py-2.5 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider"
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
