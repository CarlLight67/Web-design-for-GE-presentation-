import React from 'react';
import { Link } from 'react-router-dom';
import { Architect } from '../types/architecture';
import { ArchImage } from './ArchImage';

interface ArchitectCardProps {
  architect: Architect;
}

export const ArchitectCard: React.FC<ArchitectCardProps> = ({ architect }) => {
  const lifespan =
    architect.birthYear && architect.deathYear
      ? `${architect.birthYear}-${architect.deathYear}`
      : architect.activePeriod || 'Active Period Recorded';

  return (
    <article className="card-arch-interactive rounded-2xl group flex flex-col border-2 border-[var(--line)] bg-[var(--surface-card)]">
      <Link
        to={`/architects/${architect.slug}`}
        className="block relative aspect-[16/10] overflow-hidden border-b border-[var(--line)]"
      >
        <ArchImage
          src={architect.images[0]?.url || ''}
          alt={architect.images[0]?.alt || `Architectural works of ${architect.name}`}
          blueprintType="brutalist-cantilever"
          fallbackTitle={architect.name}
          fallbackSubtitle={architect.recognition}
          archiveNumber={architect.archiveCode}
          className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 rounded-lg bg-[var(--surface-card)]/95 text-[var(--ink)] px-2.5 py-1 border border-[var(--border-strong)]/40 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)] transition-colors duration-200">
          <span className="font-mono-tech text-[11px] tracking-wider">
            {architect.archiveCode}
          </span>
        </div>
      </Link>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-5">
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono-tech text-[var(--muted)]">
            <span>{lifespan}</span>
            <span aria-hidden="true">·</span>
            <span>{architect.nationality}</span>
            {architect.nationalArtistYear && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[var(--accent)] font-semibold">
                  National Artist ({architect.nationalArtistYear})
                </span>
              </>
            )}
          </div>

          <h3 className="text-xl font-editorial font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors duration-200">
            <Link to={`/architects/${architect.slug}`}>{architect.name}</Link>
          </h3>

          <p className="text-xs font-medium text-[var(--muted)]">
            {architect.recognition}
          </p>

          <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-3">
            {architect.architecturalApproach}
          </p>

          {architect.images[0]?.credit && (
            <p className="font-mono-tech text-[11px] text-[var(--accent)] pt-0.5">
              {architect.images[0].credit}
            </p>
          )}

          <div className="pt-2">
            <p className="font-mono-tech text-[11px] uppercase tracking-wider text-[var(--muted)] mb-1.5">
              Selected Documented Works
            </p>
            <ul className="space-y-1 text-xs text-[var(--ink)]">
              {architect.majorWorks.slice(0, 3).map((work, idx) => (
                <li key={idx} className="flex items-baseline justify-between gap-2">
                  <span className="truncate">{work.title}</span>
                  <span className="font-mono-tech text-[var(--muted)] shrink-0">
                    {work.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs">
          <span className="font-mono-tech text-[var(--muted)]">
            {architect.majorWorks.length} RECORDED WORKS
          </span>
          <Link
            to={`/architects/${architect.slug}`}
            className="btn-arch-secondary px-3.5 py-1.5 font-mono-tech text-[11px] uppercase tracking-wider whitespace-nowrap min-h-[36px]"
          >
            <span>View profile</span>
            <span className="btn-arrow" aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
