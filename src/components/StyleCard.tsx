import React from 'react';
import { Link } from 'react-router-dom';
import { ArchitecturalStyle } from '../types/architecture';
import { ArchImage } from './ArchImage';

interface StyleCardProps {
  style: ArchitecturalStyle;
}

export const StyleCard: React.FC<StyleCardProps> = ({ style }) => {
  return (
    <article className="card-arch-interactive rounded-2xl group flex flex-col border-2 border-[var(--line)] bg-[var(--surface-card)]">
      <Link
        to={`/styles/${style.slug}`}
        className="block relative aspect-[16/9] overflow-hidden border-b border-[var(--line)]"
      >
        <ArchImage
          src={style.heroImage}
          alt={`Representative architectural elevation of ${style.name} in the Philippines`}
          blueprintType={style.blueprintType}
          fallbackTitle={style.name}
          fallbackSubtitle={style.periodSpan}
          archiveNumber={style.code}
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 rounded-lg bg-[var(--surface-card)]/95 text-[var(--ink)] px-2.5 py-1 border border-[var(--border-strong)]/40 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-[var(--accent)] transition-colors duration-200">
          <span className="font-mono-tech text-[11px] tracking-wider">
            {style.code}
          </span>
        </div>
      </Link>

      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-4">
        <div className="space-y-3">
          <div className="text-xs font-mono-tech text-[var(--accent)] font-semibold">
            {style.periodSpan}
          </div>

          <h3 className="text-xl font-editorial font-semibold text-[var(--ink)] group-hover:text-[var(--accent)] transition-colors duration-200">
            <Link to={`/styles/${style.slug}`}>{style.name}</Link>
          </h3>

          <p className="text-sm text-[var(--muted)] leading-relaxed">
            {style.description}
          </p>

          <div className="pt-2 space-y-1.5">
            <p className="font-mono-tech text-[11px] uppercase tracking-wider text-[var(--muted)]">
              Defining Characteristics
            </p>
            <ul className="space-y-1 text-xs text-[var(--ink)]">
              {style.characteristics.slice(0, 2).map((char, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[var(--accent)] font-mono-tech">—</span>
                  <span className="line-clamp-2">{char}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-[var(--line)] flex items-center justify-between text-xs">
          <span className="font-mono-tech text-[var(--muted)]">
            {style.examples.length} ARCHIVE EXAMPLES
          </span>
          <Link
            to={`/styles/${style.slug}`}
            className="btn-arch-secondary px-3.5 py-1.5 font-mono-tech text-[11px] uppercase tracking-wider whitespace-nowrap min-h-[36px]"
          >
            <span>Explore style</span>
            <span className="btn-arrow" aria-hidden="true">-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  );
};
