import { ARCHITECTS_DATA } from '../data/architects';
import { Architect } from '../types/architecture';

/**
 * API-Ready / Supabase-Ready Architect Service
 */
export const architectService = {
  async getArchitects(): Promise<Architect[]> {
    return [...ARCHITECTS_DATA];
  },

  async getArchitectById(idOrSlug: string): Promise<Architect | null> {
    const found = ARCHITECTS_DATA.find(
      (a) => a.id === idOrSlug || a.slug === idOrSlug
    );
    return found ? { ...found } : null;
  },

  async searchArchitects(query: string): Promise<Architect[]> {
    const q = query.trim().toLowerCase();
    if (!q) return [...ARCHITECTS_DATA];

    return ARCHITECTS_DATA.filter(
      (a) =>
        a.name.toLowerCase().includes(q) ||
        a.recognition.toLowerCase().includes(q) ||
        a.biography.toLowerCase().includes(q) ||
        a.architecturalApproach.toLowerCase().includes(q) ||
        a.majorWorks.some(
          (w) =>
            w.title.toLowerCase().includes(q) ||
            w.location.toLowerCase().includes(q)
        )
    );
  },
};
