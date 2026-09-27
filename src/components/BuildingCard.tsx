import React from 'react';
import { Link } from 'react-router-dom';
import { Building } from '../types/architecture';
import { ArchImage } from './ArchImage';

interface BuildingCardProps {
  building: Building;
  featuredLarge?: boolean;
}

export const BuildingCard: React.FC<BuildingCardProps> = ({
  building,
  featuredLarge = false,
}) => {
  const primaryImage = building.images[0];

  return (
    <article className="card-arch-interactive rounded-2xl group flex flex-col border-2 border-[var(--line)] bg-[var(--surface-card)]">
      <Link
        to={`/buildings/${building.slug}`}
        className={`block relative overflow-hidden border-b border-[var(--line)] ${
          featuredLarge ? 'aspect-[16/10]' : 'aspect-[4/3]'
        }`}
      >
        <ArchImage
          src={primaryImage?.url || ''}
          alt={primaryImage?.alt || `Exterior view of ${building.name}`}
          blueprintType={building.blueprintType}
          fallbackTitle={building.name}
          fallbackSubtitle={`${building.location.city}, ${building.location.province} · ${building.yearBuilt ?? 'Unknown'}`}
          archiveNumber={building.archiveNumber}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 rounded-lg bg-[var(--surface-card)]/95 text-[var(--ink)] px-2.5 py-1 border border-[var(--border-strong)]/40 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)] transition-colors duration-200">
          <span className="font-mono-tech text-[11px] tracking-wider">
            {building.archiveNumber}
          </span>
        </div>
      </Link>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-2.5">
          {/* Unboxed static metadata line */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono-tech text-[var(--muted)]">
            <span>
              {building.location.city}, {building.location.province}
            </span>
            <span aria-hidden="true">·</span>
            <span>{building.yearBuilt ?? 'Unknown'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--accent)] font-semibold">{building.architecturalStyle}</span>
          </div>

          <h3
            className={`font-editorial font-semibold text-[var(--ink)] leading-snug group-hover:text-[var(--accent)] transition-colors duration-200 ${
              featuredLarge ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'
            }`}
          >
            <Link to={`/buildings/${building.slug}`}>{building.name}</Link>
          </h3>

          <p className="text-xs text-[var(--muted)]">
            Architect:{' '}
            <Link
              to={`/architects/${building.architect.id}`}
              className="text-[var(--ink)] font-medium hover:text-[var(--accent)] underline decoration-[var(--line)] hover:decoration-[var(--accent)] underline-offset-4 transition-colors"
            >
              {building.architect.name}
            </Link>
          </p>

          <p className="text-sm text-[var(--muted)] leading-relaxed line-clamp-3 pt-1">
            {building.description}
          </p>
        </div>

        <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs">
          <span className="font-mono-tech text-[var(--muted)] uppercase tracking-wider">
            {building.location.region}
          </span>
          <Link
            to={`/buildings/${building.slug}`}
            className="btn-arch-secondary px-3.5 py-1.5 font-mono-tech text-[11px] uppercase tracking-wider whitespace-nowrap min-h-[36px]"
          >
            <span>View details</span>
            <span className="btn-arrow" aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
