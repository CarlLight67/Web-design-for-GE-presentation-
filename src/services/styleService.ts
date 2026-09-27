import { STYLES_DATA } from '../data/styles';
import { PERIODS_DATA, INSTITUTIONAL_SOURCES, PHILIPPINE_REGIONS_LIST } from '../data/periods';
import { ArchitecturalStyle, HistoricalPeriod, SourceReference } from '../types/architecture';

/**
 * API-Ready / Supabase-Ready Style, Period, and Source Service
 */
export const styleService = {
  async getStyles(): Promise<ArchitecturalStyle[]> {
    return [...STYLES_DATA];
  },

  async getStyleById(idOrSlug: string): Promise<ArchitecturalStyle | null> {
    const found = STYLES_DATA.find(
      (s) => s.id === idOrSlug || s.slug === idOrSlug
    );
    return found ? { ...found } : null;
  },

  async getPeriods(): Promise<HistoricalPeriod[]> {
    return [...PERIODS_DATA];
  },

  async getSources(): Promise<SourceReference[]> {
    return [...INSTITUTIONAL_SOURCES];
  },

  getAllPhilippineRegions(): readonly string[] {
    return PHILIPPINE_REGIONS_LIST;
  },
};
