import { BUILDINGS_DATA } from '../data/buildings';
import { Building, BuildingFilterParams } from '../types/architecture';

/**
 * API-Ready / Supabase-Ready Building Service
 * Currently resolves from the verified local dataset.
 * Can be swapped seamlessly with a Supabase client (`supabase.from('buildings').select('*')`)
 * or REST endpoint without altering any UI components.
 */
export const buildingService = {
  async getBuildings(): Promise<Building[]> {
    return [...BUILDINGS_DATA];
  },

  async getFeaturedBuildings(): Promise<Building[]> {
    return BUILDINGS_DATA.filter((b) => b.featured);
  },

  async getBuildingById(idOrSlug: string): Promise<Building | null> {
    const found = BUILDINGS_DATA.find(
      (b) => b.id === idOrSlug || b.slug === idOrSlug
    );
    return found ? { ...found } : null;
  },

  async searchBuildings(query: string): Promise<Building[]> {
    const q = query.trim().toLowerCase();
    if (!q) return [...BUILDINGS_DATA];

    return BUILDINGS_DATA.filter((b) => {
      const searchableFields = [
        b.name,
        b.alternateName || '',
        b.architect.name,
        b.location.city,
        b.location.province,
        b.location.region,
        b.architecturalStyle,
        b.historicalPeriod,
        b.category,
        ...b.categories,
        b.heritageStatus,
        b.description,
        b.archiveNumber,
      ];
      return searchableFields.some((field) => field.toLowerCase().includes(q));
    });
  },

  async filterBuildings(filters: BuildingFilterParams): Promise<Building[]> {
    let results = [...BUILDINGS_DATA];

    if (filters.query && filters.query.trim() !== '') {
      const q = filters.query.trim().toLowerCase();
      results = results.filter((b) => {
        const searchable = [
          b.name,
          b.alternateName || '',
          b.architect.name,
          b.location.city,
          b.location.province,
          b.location.region,
          b.architecturalStyle,
          b.historicalPeriod,
          b.category,
          ...b.categories,
          b.description,
          b.heritageStatus,
          b.archiveNumber,
        ];
        return searchable.some((field) => field.toLowerCase().includes(q));
      });
    }

    if (filters.region && filters.region !== 'All') {
      results = results.filter((b) => b.location.region === filters.region);
    }

    if (filters.province && filters.province !== 'All') {
      results = results.filter((b) => b.location.province === filters.province);
    }

    if (filters.city && filters.city !== 'All') {
      results = results.filter((b) => b.location.city === filters.city);
    }

    if (filters.architectId && filters.architectId !== 'All') {
      results = results.filter((b) => b.architect.id === filters.architectId);
    }

    if (filters.styleId && filters.styleId !== 'All') {
      results = results.filter(
        (b) =>
          b.styleId === filters.styleId ||
          b.architecturalStyle.toLowerCase() === filters.styleId?.toLowerCase()
      );
    }

    if (filters.periodId && filters.periodId !== 'All') {
      results = results.filter(
        (b) =>
          b.periodId === filters.periodId ||
          b.historicalPeriod.toLowerCase() === filters.periodId?.toLowerCase()
      );
    }

    if (filters.category && filters.category !== 'All') {
      results = results.filter(
        (b) =>
          b.category === filters.category ||
          b.categories.includes(filters.category as any)
      );
    }

    if (filters.heritageStatus && filters.heritageStatus !== 'All') {
      const h = filters.heritageStatus.toLowerCase();
      results = results.filter((b) =>
        b.heritageStatus.toLowerCase().includes(h)
      );
    }

    if (filters.yearRange && filters.yearRange !== 'All') {
      results = results.filter((b) => {
        const numYear = typeof b.yearBuilt === 'number' ? b.yearBuilt : null;
        if (filters.yearRange === 'pre-1800') {
          return numYear !== null ? numYear < 1800 : true;
        }
        if (filters.yearRange === '1800-1900') {
          return numYear !== null && numYear >= 1800 && numYear <= 1900;
        }
        if (filters.yearRange === '1901-1945') {
          return numYear !== null && numYear >= 1901 && numYear <= 1945;
        }
        if (filters.yearRange === '1946-1986') {
          return numYear !== null && numYear >= 1946 && numYear <= 1986;
        }
        if (filters.yearRange === '1987-present') {
          return numYear !== null && numYear >= 1987;
        }
        return true;
      });
    }

    if (filters.sortBy) {
      results.sort((a, b) => {
        if (filters.sortBy === 'name-asc') {
          return a.name.localeCompare(b.name);
        }
        if (filters.sortBy === 'region') {
          return a.location.region.localeCompare(b.location.region);
        }
        const yearA = typeof a.yearBuilt === 'number' ? a.yearBuilt : 1500;
        const yearB = typeof b.yearBuilt === 'number' ? b.yearBuilt : 1500;
        if (filters.sortBy === 'year-asc') {
          return yearA - yearB;
        }
        if (filters.sortBy === 'year-desc') {
          return yearB - yearA;
        }
        return 0;
      });
    }

    return results;
  },

  async getBuildingsByRegion(region: string): Promise<Building[]> {
    if (!region || region === 'All') return [...BUILDINGS_DATA];
    return BUILDINGS_DATA.filter((b) => b.location.region === region);
  },

  async getBuildingsByArchitect(architectId: string): Promise<Building[]> {
    return BUILDINGS_DATA.filter((b) => b.architect.id === architectId);
  },

  async getBuildingsByStyle(styleId: string): Promise<Building[]> {
    return BUILDINGS_DATA.filter(
      (b) =>
        b.styleId === styleId ||
        b.architecturalStyle.toLowerCase() === styleId.toLowerCase()
    );
  },

  async getRelatedBuildings(building: Building, limit = 3): Promise<Building[]> {
    return BUILDINGS_DATA.filter((b) => b.id !== building.id)
      .map((candidate) => {
        let score = 0;
        if (candidate.styleId === building.styleId) score += 4;
        if (candidate.architect.id === building.architect.id) score += 4;
        if (candidate.periodId === building.periodId) score += 2;
        if (candidate.location.region === building.location.region) score += 1;
        return { candidate, score };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map((item) => item.candidate);
  },

  getUniqueFilterOptions() {
    const regions = Array.from(
      new Set(BUILDINGS_DATA.map((b) => b.location.region))
    ).sort();
    const provinces = Array.from(
      new Set(BUILDINGS_DATA.map((b) => b.location.province))
    ).sort();
    const cities = Array.from(
      new Set(BUILDINGS_DATA.map((b) => b.location.city))
    ).sort();
    const categories = Array.from(
      new Set(BUILDINGS_DATA.flatMap((b) => b.categories))
    ).sort();

    return {
      regions,
      provinces,
      cities,
      categories,
    };
  },
};
