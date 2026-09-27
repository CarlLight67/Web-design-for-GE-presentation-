import React, { useEffect, useState } from 'react';
import { styleService } from '../services/styleService';
import { ArchitecturalStyle } from '../types/architecture';
import { StyleCard } from '../components/StyleCard';
import { SeoHead } from '../components/SeoHead';

export const Styles: React.FC = () => {
  const [styles, setStyles] = useState<ArchitecturalStyle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    styleService.getStyles().then((res) => {
      setStyles(res);
      setLoading(false);
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111]">
      <SeoHead
        title="Philippine Architectural Styles — ARCHI—PH"
        description="Explore Philippine architectural styles including Traditional Filipino Vernacular, Spanish Colonial Earthquake Baroque, Bahay na Bato, Neoclassical, Art Deco, Modernism, Brutalism, and Neo-Vernacular."
      />

      <section className="border-b border-[#d8d3ca] bg-[#ebe6dd] py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-4">
          <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
            TYPOLOGICAL &amp; STYLISTIC CLASSIFICATION · PHILIPPINES
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold text-[#111111]">
            ARCHITECTURAL STYLES
          </h1>
          <p className="text-sm sm:text-base text-[#5c5954] max-w-3xl leading-relaxed">
            Philippine architectural movements reflect centuries of climate adaptation, seismic engineering, and cultural synthesis. Note that stylistic classifications are contextual lenses rather than rigid boundaries—many Philippine structures blend indigenous vernacular tectonics with colonial, modern, or contemporary traditions.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <div key={n} className="h-96 rounded-2xl bg-[#ebe6dd] animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {styles.map((style) => (
                <StyleCard key={style.id} style={style} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
