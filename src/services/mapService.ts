import { BUILDINGS_DATA } from '../data/buildings';
import { Building, BuildingFilterParams } from '../types/architecture';
import { buildingService } from './buildingService';

export interface MapBoundsCenter {
  lat: number;
  lng: number;
  zoom: number;
}

export const DEFAULT_PHILIPPINES_MAP_CENTER: MapBoundsCenter = {
  lat: 12.8797,
  lng: 121.774,
  zoom: 6,
};

/**
 * API-Ready Cartographic & Map Service for Philippine Architecture
 */
export const mapService = {
  async getMappableBuildings(filters?: BuildingFilterParams): Promise<Building[]> {
    const list = filters
      ? await buildingService.filterBuildings(filters)
      : [...BUILDINGS_DATA];

    return list.filter(
      (b) =>
        typeof b.location.latitude === 'number' &&
        typeof b.location.longitude === 'number'
    );
  },

  getRegionCounts(): Record<string, number> {
    const counts: Record<string, number> = {};
    for (const b of BUILDINGS_DATA) {
      counts[b.location.region] = (counts[b.location.region] || 0) + 1;
    }
    return counts;
  },
};
