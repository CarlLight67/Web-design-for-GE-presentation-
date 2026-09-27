import React, { useState, useMemo } from 'react';
import { Building } from '../types/architecture';
import {
  generateArchitecturalBlueprintSvg,
  getVerifiedPhotoCredit,
} from '../utils/architecturalPlate';

interface ArchImageProps {
  src: string;
  alt: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
  blueprintType?: Building['blueprintType'];
  archiveNumber?: string;
  className?: string;
  aspectRatioClass?: string;
  eager?: boolean;
  showBlueprintToggle?: boolean;
}

export const ArchImage: React.FC<ArchImageProps> = ({
  src,
  alt,
  fallbackTitle,
  fallbackSubtitle = 'ARCHI—PH DOCUMENTED STRUCTURE',
  blueprintType = 'neoclassical-portico',
  archiveNumber = 'ARCH-PH',
  className = '',
  aspectRatioClass = '',
  eager = false,
}) => {
  const [hasError, setHasError] = useState(false);

  const verifiedMeta = useMemo(() => getVerifiedPhotoCredit(src), [src]);

  const fallbackDataUri = useMemo(
    () =>
      generateArchitecturalBlueprintSvg(
        blueprintType,
        fallbackTitle,
        fallbackSubtitle,
        archiveNumber
      ),
    [blueprintType, fallbackTitle, fallbackSubtitle, archiveNumber]
  );

  const activeSrc = !src || hasError ? fallbackDataUri : src;

  return (
    <div
      className={`relative overflow-hidden bg-[var(--paper-subtle)] group/archimg ${aspectRatioClass}`}
    >
      <img
        src={activeSrc}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onError={() => {
          if (!hasError) {
            setHasError(true);
          }
        }}
        className={`w-full h-full object-cover transition-transform duration-500 ${className}`}
      />
      {verifiedMeta && !hasError && (
        <div className="pointer-events-none absolute bottom-2 right-2 z-10 max-w-[92%] truncate rounded-md bg-black/80 px-2.5 py-1 font-mono-tech text-[11px] text-white border border-white/25 opacity-90 group-hover/archimg:opacity-100 transition-opacity">
          Photo: {verifiedMeta.photographerAuthor} ({verifiedMeta.license})
        </div>
      )}
    </div>
  );
};
