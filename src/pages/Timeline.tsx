import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styleService } from '../services/styleService';
import { HistoricalPeriod } from '../types/architecture';
import { ArchImage } from '../components/ArchImage';
import { SeoHead } from '../components/SeoHead';

export const Timeline: React.FC = () => {
  const [periods, setPeriods] = useState<HistoricalPeriod[]>([]);
  const [activePeriodId, setActivePeriodId] = useState<string>('precolonial-traditional');

  useEffect(() => {
    styleService.getPeriods().then((res) => {
      setPeriods(res);
      if (res.length > 0) {
        setActivePeriodId(res[0].id);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111]">
      <SeoHead
        title="Philippine Architecture Timeline — ARCHI—PH"
        description="Explore the chronological evolution of Philippine architecture across Precolonial Vernacular, Spanish Colonial, American Colonial, Post-War, Modernism, and Contemporary periods."
      />

      {/* Header */}
      <section className="border-b border-[#d8d3ca] bg-[#ebe6dd] py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-4">
          <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
            CHRONOLOGICAL MONOGRAPH · ARCHIPELAGO HISTORY
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#111111]">
            PHILIPPINE ARCHITECTURE TIMELINE
          </h1>
          <p className="text-sm sm:text-base text-[#5c5954] max-w-3xl leading-relaxed">
            Tracing the spatial, structural, and cultural transformations of Philippine architecture across six broad historical eras. Note that period boundaries are contextual rather than absolute—indigenous vernacular traditions continue to be practiced alongside contemporary engineering.
          </p>
        </div>
      </section>

      {/* Desktop Horizontal Era Rail */}
      <div className="sticky top-16 z-30 bg-[#f4f1eb]/95 backdrop-blur-sm border-b border-[#111111] overflow-x-auto">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-2 flex items-center gap-2">
          {periods.map((period) => {
            const isActive = activePeriodId === period.id;
            return (
              <a
                key={period.id}
                href={`#${period.id}`}
                onClick={() => setActivePeriodId(period.id)}
                className={`px-4 py-2.5 min-h-[48px] rounded-xl flex flex-col justify-center shrink-0 border transition-all duration-200 ${
                  isActive
                    ? 'bg-[var(--accent)] text-white border-[var(--accent)] shadow-sm'
                    : 'bg-[var(--surface-card)] text-[#5c5954] border-[#d8d3ca] hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)]'
                }`}
              >
                <span className="font-mono-tech text-[10px] uppercase tracking-wider opacity-85">
                  {period.code} · {period.yearRange.split(' ')[0]}
                </span>
                <span className="text-xs font-semibold whitespace-nowrap">
                  {period.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Chronological Era Sections */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="relative border-l-2 border-[#111111] pl-6 sm:pl-10 lg:pl-14 space-y-20">
            {periods.map((period, index) => (
              <article
                key={period.id}
                id={period.id}
                className="relative scroll-mt-36 space-y-8 pb-16 border-b border-[#d8d3ca] last:border-none"
              >
                {/* Timeline Node Marker */}
                <div className="absolute -left-[33px] sm:-left-[49px] lg:-left-[65px] top-1 w-4 h-4 rounded-md bg-[#8a5947] border-2 border-[#111111]" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left 7 Cols: Narrative & Characteristics */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <div className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                        CHAPTER 0{index + 1} · {period.yearRange}
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-bold text-[#111111]">
                        {period.name}
                      </h2>
                    </div>

                    <p className="text-base text-[#111111] font-medium leading-relaxed max-w-prose">
                      {period.shortSummary}
                    </p>

                    <div className="space-y-2">
                      <h3 className="font-mono-tech text-xs uppercase tracking-wider text-[#5c5954]">
                        Historical Context
                      </h3>
                      <p className="text-sm sm:text-base text-[#5c5954] leading-relaxed max-w-prose">
                        {period.historicalContext}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <h3 className="font-mono-tech text-xs uppercase tracking-wider text-[#5c5954]">
                        Architectural Characteristics
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {period.architecturalCharacteristics.map((char, idx) => (
                          <li
                            key={idx}
                            className="p-3.5 rounded-xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] text-xs text-[#111111] leading-relaxed"
                          >
                            <span className="font-mono-tech text-[#8a5947] mr-1.5">
                              0{idx + 1}.
                            </span>
                            {char}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right 5 Cols: Visual Plate, Important Examples, & Important Architects */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-3">
                      <div className="aspect-[16/10] rounded-xl overflow-hidden border border-[#d8d3ca]">
                        <ArchImage
                          src={period.visualReference}
                          alt={`Visual reference for ${period.name} in Philippine architecture`}
                          blueprintType={period.blueprintType}
                          fallbackTitle={period.name}
                          fallbackSubtitle={period.yearRange}
                          archiveNumber={period.code}
                        />
                      </div>
                    </div>

                    {/* Important Examples */}
                    <div className="rounded-2xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] p-5 space-y-3">
                      <h3 className="font-mono-tech text-xs uppercase tracking-wider text-[#8a5947]">
                        Important Philippine Examples
                      </h3>
                      <ul className="divide-y divide-[#d8d3ca] text-xs">
                        {period.importantExamples.map((ex) => (
                          <li
                            key={ex.buildingId}
                            className="py-2.5 flex items-center justify-between gap-2"
                          >
                            <div>
                              <Link
                                to={`/buildings/${ex.buildingId}`}
                                className="font-semibold text-[#111111] hover:text-[#8a5947] underline decoration-[#d8d3ca] underline-offset-4"
                              >
                                {ex.name}
                              </Link>
                              <div className="text-[#5c5954] mt-0.5">
                                {ex.location} · {ex.year}
                              </div>
                            </div>
                            <Link
                              to={`/buildings/${ex.buildingId}`}
                              className="btn-arch-secondary px-2.5 py-1 inline-flex items-center gap-1 font-mono-tech text-[11px] uppercase shrink-0"
                            >
                              <span>View</span>
                              <span className="btn-arrow">-&gt;</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Important Architects */}
                    <div className="rounded-2xl border-2 border-[#d8d3ca] bg-[var(--surface-card)] p-5 space-y-3">
                      <h3 className="font-mono-tech text-xs uppercase tracking-wider text-[#5c5954]">
                        Associated Architects &amp; Builders
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {period.importantArchitects.map((arch) => (
                          <Link
                            key={arch.architectId}
                            to={`/architects/${arch.architectId}`}
                            className="btn-arch-secondary px-3 py-1.5 inline-flex items-center gap-1.5 text-xs font-medium"
                          >
                            <span>{arch.name}</span>
                            <span className="btn-arrow">-&gt;</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
