export interface SourceReference {
  title: string;
  url: string;
  type?: 'information' | 'image' | 'map';
  category?: 'Government' | 'Heritage' | 'Architecture' | 'Cultural Institutions' | 'Maps' | 'Images' | 'Academic / Reference';
  institution?: string;
}

export type BuildingCategory =
  | 'Civic'
  | 'Cultural'
  | 'Religious'
  | 'Residential'
  | 'Commercial'
  | 'Educational'
  | 'Government'
  | 'Transportation'
  | 'Heritage'
  | 'Institutional';

export type PhilippineRegion =
  | 'NCR'
  | 'Ilocos Region'
  | 'Cagayan Valley'
  | 'Central Luzon'
  | 'CALABARZON'
  | 'MIMAROPA'
  | 'Bicol Region'
  | 'Western Visayas'
  | 'Central Visayas'
  | 'Eastern Visayas'
  | 'Zamboanga Peninsula'
  | 'Northern Mindanao'
  | 'Davao Region'
  | 'SOCCSKSARGEN'
  | 'Caraga'
  | 'BARMM'
  | 'Cordillera Administrative Region';

export interface ArchitecturalCharacteristics {
  form: string;
  materials: string;
  structure: string;
  facade: string;
  spatialOrganization: string;
  context: string;
}

export interface BuildingImage {
  url: string;
  alt: string;
  caption: string;
  credit: string;
  sourceUrl?: string;
  category?: 'Buildings' | 'Details' | 'Heritage' | 'Modern' | 'Traditional' | 'Sketches';
}

export interface Building {
  id: string;
  slug: string;
  archiveNumber: string;
  name: string;
  alternateName?: string;
  architect: {
    id: string;
    name: string;
  };
  location: {
    city: string;
    province: string;
    region: PhilippineRegion;
    latitude: number | null;
    longitude: number | null;
    coordinatesNote?: string;
  };
  yearBuilt: number | string | null;
  architecturalStyle: string;
  styleId: string;
  historicalPeriod: string;
  periodId: string;
  category: BuildingCategory;
  categories: BuildingCategory[];
  heritageStatus: string;
  description: string;
  historicalOverview: string;
  architecturalFeatures: string[];
  characteristics: ArchitecturalCharacteristics;
  blueprintType:
    | 'brutalist-cantilever'
    | 'baroque-church'
    | 'art-deco-fins'
    | 'bahay-na-bato'
    | 'neovernacular-pavilion'
    | 'neoclassical-portico'
    | 'thin-shell-dome'
    | 'vernacular-stilt'
    | 'modernist-louvers'
    | 'contemporary-timber-arch'
    | 'fortress-bastion'
    | 'gothic-steel';
  images: BuildingImage[];
  sources: SourceReference[];
  featured?: boolean;
}

export interface Architect {
  id: string;
  slug: string;
  archiveCode: string;
  name: string;
  birthYear: number | null;
  deathYear: number | null;
  activePeriod: string;
  nationality: 'Filipino';
  nationalArtistYear?: number | null;
  recognition: string;
  biography: string;
  architecturalApproach: string;
  majorWorks: {
    buildingId?: string;
    title: string;
    year: string;
    location: string;
  }[];
  timeline: {
    year: string;
    event: string;
  }[];
  images: {
    url: string;
    alt: string;
    caption: string;
    credit?: string;
    sourceUrl?: string;
  }[];
  sources: SourceReference[];
}

export interface ArchitecturalStyle {
  id: string;
  slug: string;
  code: string;
  name: string;
  periodSpan: string;
  description: string;
  characteristics: string[];
  historicalContext: string;
  examples: {
    buildingId: string;
    name: string;
    location: string;
    year: string;
  }[];
  relatedArchitects: {
    architectId: string;
    name: string;
  }[];
  blueprintType: Building['blueprintType'];
  heroImage: string;
  sources: SourceReference[];
}

export interface HistoricalPeriod {
  id: string;
  code: string;
  name: string;
  yearRange: string;
  shortSummary: string;
  historicalContext: string;
  architecturalCharacteristics: string[];
  importantExamples: {
    buildingId: string;
    name: string;
    year: string;
    location: string;
  }[];
  importantArchitects: {
    architectId: string;
    name: string;
  }[];
  visualReference: string;
  blueprintType: Building['blueprintType'];
  sources: SourceReference[];
}

export interface BuildingFilterParams {
  query?: string;
  region?: string;
  province?: string;
  city?: string;
  architectId?: string;
  styleId?: string;
  periodId?: string;
  category?: string;
  heritageStatus?: string;
  yearRange?: string;
  sortBy?: 'name-asc' | 'year-asc' | 'year-desc' | 'region';
}
