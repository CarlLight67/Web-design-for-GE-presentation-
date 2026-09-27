import { HistoricalPeriod, SourceReference } from '../types/architecture';
import { VERIFIED_ARCHIVE_PHOTOS, GENERATED_ARCHIVE_IMAGES } from '../utils/architecturalPlate';

export const PERIODS_DATA: HistoricalPeriod[] = [
  {
    id: 'precolonial-traditional',
    code: 'ERA-01',
    name: 'Precolonial & Indigenous Vernacular Tradition',
    yearRange: 'Pre-1565 - Continuing Living Tradition',
    shortSummary:
      'Austronesian stilt dwellings, highland timber joinery, and communal royal houses engineered in harmony with Philippine topography and monsoons.',
    historicalContext:
      'Prior to European colonization, communities across the Philippine archipelago developed sophisticated vernacular building traditions tailored to coastal, riverine, highland, and typhoon-prone environments. Note that vernacular architecture did not end in 1565; these traditions persist as living architectural lineages practiced by indigenous cultural communities today.',
    architecturalCharacteristics: [
      'Elevated post-and-beam construction (tukod) protecting interiors from floods, humidity, and pests',
      'Nail-free mortise-and-tenon joinery and rattan lashing providing flexibility during earthquakes',
      'Steeply pitched thatch roofs (cogon, nipa) facilitating rapid rainwater runoff and stack-effect cooling',
      'Symbolic tectonic ornament such as the Maranao okir-carved panolong and Ifugao halipan rat-guards',
    ],
    importantExamples: [
      {
        buildingId: 'ifugao-bale-batad',
        name: 'Ifugao Bale (Batad Native House)',
        year: 'Precolonial / Living Tradition',
        location: 'Banaue, Ifugao',
      },
      {
        buildingId: 'kawayan-torogan-lanao',
        name: 'Kawayan Torogan (Maranao Royal House)',
        year: 'Traditional Lineage',
        location: 'Marantao, Lanao del Sur',
      },
    ],
    importantArchitects: [
      {
        architectId: 'indigenous-colonial-artisans',
        name: 'Indigenous Master Builders (Munhabat, Panday & Maranao Carvers)',
      },
    ],
    visualReference: VERIFIED_ARCHIVE_PHOTOS.ifugaoBaleBatad,
    blueprintType: 'vernacular-stilt',
    sources: [
      {
        title: 'National Commission for Culture and the Arts — Philippine Vernacular Architecture',
        url: 'https://ncca.gov.ph/',
        type: 'information',
        category: 'Government',
      },
    ],
  },
  {
    id: 'spanish-colonial',
    code: 'ERA-02',
    name: 'Spanish Colonial Period',
    yearRange: '1565-1898',
    shortSummary:
      'Introduction of quarried stone and brick masonry, giving rise to Earthquake Baroque churches, bastion fortresses, and the domestic Bahay na Bato.',
    historicalContext:
      'Spanning over three centuries, Spanish colonial urbanization reorganized settlements "bajo las campanas" (under the church bells) around a central Plaza Mayor. Confronted by devastating earthquakes and volcanic eruptions, missionary friars and Filipino/Chinese-Filipino maestro de obras transformed European masonry models into low-slung, heavily buttressed Earthquake Baroque churches and hybrid stone-and-wood Bahay na Bato residences.',
    architecturalCharacteristics: [
      'Quarried adobe (volcanic tuff), marine coral stone, and kiln-fired brick bound with lime mortar',
      'Monumental lateral volute buttresses and detached bell towers engineered for seismic survival',
      'Bahay na Bato domestic synthesis: stone ground-floor zaguan paired with timber-and-capiz upper stories',
      'Trace italienne bastion fortifications guarding strategic ports in Manila, Cebu, and Zamboanga',
    ],
    importantExamples: [
      {
        buildingId: 'san-agustin-church',
        name: 'San Agustin Church (Intramuros)',
        year: '1607',
        location: 'Manila, NCR',
      },
      {
        buildingId: 'paoay-church',
        name: 'San Agustin Church of Paoay',
        year: '1710',
        location: 'Paoay, Ilocos Norte',
      },
      {
        buildingId: 'miagao-church',
        name: 'Santo Tomas de Villanueva Church (Miagao)',
        year: '1797',
        location: 'Miagao, Iloilo',
      },
      {
        buildingId: 'syquia-mansion-vigan',
        name: 'Syquia Mansion & Calle Crisologo Ensemble',
        year: '1830',
        location: 'Vigan, Ilocos Sur',
      },
      {
        buildingId: 'san-sebastian-basilica',
        name: 'Minor Basilica of San Sebastian',
        year: '1891',
        location: 'Manila, NCR',
      },
    ],
    importantArchitects: [
      {
        architectId: 'indigenous-colonial-artisans',
        name: 'Filipino & Chinese-Filipino Maestro de Obras',
      },
    ],
    visualReference: GENERATED_ARCHIVE_IMAGES.sanAgustin,
    blueprintType: 'baroque-church',
    sources: [
      {
        title: 'UNESCO World Heritage Centre — Baroque Churches of the Philippines & Historic City of Vigan',
        url: 'https://whc.unesco.org/en/statesparties/ph',
        type: 'information',
        category: 'Heritage',
      },
    ],
  },
  {
    id: 'american-colonial',
    code: 'ERA-03',
    name: 'American Colonial & Commonwealth Period',
    yearRange: '1898-1946',
    shortSummary:
      'City Beautiful urban planning, Neoclassical civic monuments, reinforced concrete engineering, and the flowering of Philippine Art Deco.',
    historicalContext:
      'Following the 1905 Burnham Plan for Manila and Baguio, the Bureau of Public Works introduced steel-reinforced concrete to construct public schools (Gabaldon schoolhouses), hospitals, and provincial capitols. Returned Filipino pensionado scholars became the first licensed architects in the 1920s, leading both monumental Neoclassical civic works and the exuberant Art Deco movement of the 1930s Commonwealth era.',
    architecturalCharacteristics: [
      'Beaux-Arts axial site planning and Neoclassical colonnades cast in reinforced concrete',
      'Tropical adaptations including deep arcades, high ceilings, and continuous transom ventilation',
      '1930s Art Deco theaters and campuses featuring vertical brise-soleil fins and native flora reliefs',
      'Standardized modular Gabaldon schoolhouses raised on concrete piers with capiz swing-out windows',
    ],
    importantExamples: [
      {
        buildingId: 'manila-central-post-office',
        name: 'Manila Central Post Office Building',
        year: '1926',
        location: 'Manila, NCR',
      },
      {
        buildingId: 'manila-metropolitan-theater',
        name: 'Manila Metropolitan Theater',
        year: '1931',
        location: 'Manila, NCR',
      },
      {
        buildingId: 'quezon-institute',
        name: 'Quezon Institute Main Building',
        year: '1938',
        location: 'Quezon City, NCR',
      },
      {
        buildingId: 'nicanor-reyes-hall-feu',
        name: 'Nicanor Reyes Hall (Far Eastern University)',
        year: '1939',
        location: 'Manila, NCR',
      },
    ],
    importantArchitects: [
      {
        architectId: 'juan-m-arellano',
        name: 'Juan M. Arellano',
      },
      {
        architectId: 'tomas-b-mapua',
        name: 'Tomás B. Mapúa',
      },
      {
        architectId: 'pablo-s-antonio',
        name: 'Pablo S. Antonio',
      },
      {
        architectId: 'juan-f-nakpil',
        name: 'Juan F. Nakpil',
      },
    ],
    visualReference: VERIFIED_ARCHIVE_PHOTOS.manilaMetropolitanTheater,
    blueprintType: 'art-deco-fins',
    sources: [
      {
        title: 'National Historical Commission of the Philippines — Commonwealth Architecture Records',
        url: 'https://nhcp.gov.ph/',
        type: 'information',
        category: 'Government',
      },
    ],
  },
  {
    id: 'post-war',
    code: 'ERA-04',
    name: 'Post-War Reconstruction & Early Republic',
    yearRange: '1946-1964',
    shortSummary:
      'Rebuilding a newly independent nation through International Style functionalism, thin-shell concrete engineering, and tropical sun-breakers.',
    historicalContext:
      'Emerging from the widespread destruction of World War II and celebrating national independence in 1946, Filipino architects embraced modernism to rebuild Manila and establish the new capital district in Quezon City. The relocation of the University of the Philippines to Diliman became a testing ground for folded concrete plates, thin-shell domes, and horizontal brise-soleil.',
    architecturalCharacteristics: [
      'Pioneering thin-shell concrete domes and hyperbolic paraboloid roofs',
      'Extensive concrete egg-crate and louvered brise-soleil facades mitigating tropical solar heat',
      'Asymmetrical massing, open ground-floor pilotis, and cross-ventilated institutional corridors',
      'Close collaboration between modernist architects, structural engineers, and visual artists',
    ],
    importantExamples: [
      {
        buildingId: 'up-quezon-hall',
        name: 'Quezon Hall (UP Diliman)',
        year: '1950',
        location: 'Quezon City, NCR',
      },
      {
        buildingId: 'up-melchor-hall',
        name: 'Melchor Hall (UP College of Engineering)',
        year: '1950',
        location: 'Quezon City, NCR',
      },
      {
        buildingId: 'parish-of-the-holy-sacrifice',
        name: 'Parish of the Holy Sacrifice',
        year: '1955',
        location: 'Quezon City, NCR',
      },
    ],
    importantArchitects: [
      {
        architectId: 'cesar-h-concio',
        name: 'Cesar H. Concio',
      },
      {
        architectId: 'juan-f-nakpil',
        name: 'Juan F. Nakpil',
      },
      {
        architectId: 'leandro-v-locsin',
        name: 'Leandro V. Locsin',
      },
      {
        architectId: 'carlos-d-arguelles',
        name: 'Carlos D. Arguelles',
      },
    ],
    visualReference: VERIFIED_ARCHIVE_PHOTOS.parishOfTheHolySacrifice,
    blueprintType: 'thin-shell-dome',
    sources: [
      {
        title: 'University of the Philippines Diliman Campus Architecture Archive',
        url: 'https://upd.edu.ph/',
        type: 'information',
        category: 'Academic / Reference',
      },
    ],
  },
  {
    id: 'modernism',
    code: 'ERA-05',
    name: 'High Modernism, Brutalism & Neo-Vernacular Turn',
    yearRange: '1965-1986',
    shortSummary:
      'Monumental cantilevered Brutalist cultural complexes along Manila Bay alongside the rise of indigenous Neo-Vernacular architecture.',
    historicalContext:
      'From the late 1960s through the 1980s, large-scale state cultural and convention complexes as well as major corporate headquarters defined the metropolitan skyline. Leandro V. Locsin abstracted indigenous Filipino forms into heroic Brutalist concrete cantilevers at the CCP Complex, while Francisco "Bobby" Mañosa and Ildefonso P. Santos Jr. championed indigenous materials and terraced tropical landscapes.',
    architecturalCharacteristics: [
      'Heroic cantilevered concrete and travertine blocks floating over reflecting pools and ramps',
      'Textured bush-hammered concrete, crushed shell stucco, and long-span waffle slabs',
      'Neo-Vernacular exploration of coconut timber, capiz shells, and salakot/bahay kubo roofs',
      'Integration of modernist Philippine landscape architecture with corporate and civic plazas',
    ],
    importantExamples: [
      {
        buildingId: 'meralco-building-ortigas',
        name: 'Meralco Building (Lopez Building)',
        year: '1968',
        location: 'Pasig, NCR',
      },
      {
        buildingId: 'ccp-main-building',
        name: 'Cultural Center of the Philippines Main Building',
        year: '1969',
        location: 'Pasay, NCR',
      },
      {
        buildingId: 'picc-pasay',
        name: 'Philippine International Convention Center (PICC)',
        year: '1976',
        location: 'Pasay, NCR',
      },
      {
        buildingId: 'coconut-palace',
        name: 'Coconut Palace (Tahanang Pilipino)',
        year: '1981',
        location: 'Pasay, NCR',
      },
    ],
    importantArchitects: [
      {
        architectId: 'leandro-v-locsin',
        name: 'Leandro V. Locsin',
      },
      {
        architectId: 'francisco-bobby-manosa',
        name: 'Francisco "Bobby" T. Mañosa',
      },
      {
        architectId: 'jose-maria-zaragoza',
        name: 'Jose María V. Zaragoza',
      },
      {
        architectId: 'ildefonso-p-santos',
        name: 'Ildefonso P. Santos Jr.',
      },
    ],
    visualReference: GENERATED_ARCHIVE_IMAGES.ccp,
    blueprintType: 'brutalist-cantilever',
    sources: [
      {
        title: 'Cultural Center of the Philippines Official Archive',
        url: 'https://culturalcenter.gov.ph/',
        type: 'information',
        category: 'Cultural Institutions',
      },
    ],
  },
  {
    id: 'contemporary',
    code: 'ERA-06',
    name: 'Contemporary, Sustainable & Heritage Conservation Era',
    yearRange: '1986-Present',
    shortSummary:
      'Climate-resilient civic infrastructure, engineered timber, green corporate architecture, and legal protection under the National Cultural Heritage Act.',
    historicalContext:
      'In the contemporary era, Philippine architecture balances rapid regional growth across Luzon, Visayas, and Mindanao with climate resilience and cultural preservation. The enactment of Republic Act No. 10066 (National Cultural Heritage Act of 2009) strengthened the protection of historic structures, while new civic gateways like Mactan-Cebu International Airport Terminal 2 showcase engineered timber and contemporary Filipino craft on the global stage.',
    architecturalCharacteristics: [
      'Long-span glue-laminated timber (glulam) and typhoon-resilient structural systems',
      'Terraced green building envelopes, solar shading, and passive tropical daylighting',
      'Scientific restoration and adaptive reuse of colonial churches, theaters, and ancestral houses',
      'Decentralization of landmark civic architecture across Cebu, Iloilo, Davao, Clark, and regional hubs',
    ],
    importantExamples: [
      {
        buildingId: 'san-miguel-corporation-head-office',
        name: 'San Miguel Corporation Head Office Complex',
        year: '1984',
        location: 'Mandaluyong, NCR',
      },
      {
        buildingId: 'mactan-cebu-airport-t2',
        name: 'Mactan-Cebu International Airport Terminal 2',
        year: '2018',
        location: 'Lapu-Lapu City, Cebu',
      },
    ],
    importantArchitects: [
      {
        architectId: 'francisco-bobby-manosa',
        name: 'Francisco "Bobby" T. Mañosa',
      },
      {
        architectId: 'ildefonso-p-santos',
        name: 'Ildefonso P. Santos Jr.',
      },
    ],
    visualReference: VERIFIED_ARCHIVE_PHOTOS.mactanCebuAirportT2,
    blueprintType: 'contemporary-timber-arch',
    sources: [
      {
        title: 'National Commission for Culture and the Arts — RA 10066 Philippine Registry of Cultural Property (PRECUP)',
        url: 'https://ncca.gov.ph/philippine-registry-of-cultural-property-precup/',
        type: 'information',
        category: 'Government',
      },
    ],
  },
];

export const INSTITUTIONAL_SOURCES: SourceReference[] = [
  {
    title: 'National Historical Commission of the Philippines (NHCP)',
    url: 'https://nhcp.gov.ph/',
    type: 'information',
    category: 'Government',
    institution: 'Republic of the Philippines National Historical Agency',
  },
  {
    title: 'National Commission for Culture and the Arts (NCCA) — Order of National Artists & PRECUP',
    url: 'https://ncca.gov.ph/',
    type: 'information',
    category: 'Government',
    institution: 'Official Cultural Agency of the Republic of the Philippines',
  },
  {
    title: 'National Museum of the Philippines — Cultural Properties Division',
    url: 'https://www.nationalmuseum.gov.ph/',
    type: 'information',
    category: 'Government',
    institution: 'Primary Museum & National Cultural Treasure Registry',
  },
  {
    title: 'UNESCO World Heritage Centre — Philippines State Party Properties (Baroque Churches, Vigan, Cordilleras)',
    url: 'https://whc.unesco.org/en/statesparties/ph',
    type: 'information',
    category: 'Heritage',
    institution: 'United Nations Educational, Scientific and Cultural Organization',
  },
  {
    title: 'Philippine Registry of Cultural Property (PRECUP / Talapamana)',
    url: 'https://ncca.gov.ph/philippine-registry-of-cultural-property-precup/',
    type: 'information',
    category: 'Heritage',
    institution: 'Established under Republic Act No. 10066 (National Cultural Heritage Act of 2009)',
  },
  {
    title: 'United Architects of the Philippines (UAP) — Integrated and Accredited Professional Organization of Architects',
    url: 'https://united-architects.org/',
    type: 'information',
    category: 'Architecture',
    institution: 'Professional Architectural Organization of the Philippines',
  },
  {
    title: 'Cultural Center of the Philippines (CCP) — Encyclopedia of Philippine Art (Architecture Volume)',
    url: 'https://culturalcenter.gov.ph/',
    type: 'information',
    category: 'Cultural Institutions',
    institution: 'Tanghalang Pambansa / CCP Complex, Pasay City',
  },
  {
    title: 'University of the Philippines Diliman — College of Architecture & Campus Heritage Studies',
    url: 'https://upd.edu.ph/',
    type: 'information',
    category: 'Academic / Reference',
    institution: 'State University Reference & Architectural History Archive',
  },
  {
    title: 'Far Eastern University (FEU) Heritage Conservation & Campus Directory',
    url: 'https://www.feu.edu.ph/',
    type: 'information',
    category: 'Academic / Reference',
    institution: 'UNESCO Asia-Pacific Heritage Awardee Institution',
  },
  {
    title: 'OpenStreetMap Contributors & Leaflet JS Cartographic Engine',
    url: 'https://www.openstreetmap.org/copyright',
    type: 'map',
    category: 'Maps',
    institution: 'Open-Data Geographic & Cartographic Base Layer',
  },
  {
    title: 'Wikimedia Commons — Philippine Cultural Heritage & Architecture Media Repository',
    url: 'https://commons.wikimedia.org/',
    type: 'image',
    category: 'Images',
    institution: 'Verified Documentary Photographs of Philippine Landmarks & National Artists',
  },
  {
    title: 'ARCHI—PH Orthographic Elevation Studies & Documentary Archive Plates',
    url: 'https://ncca.gov.ph/',
    type: 'image',
    category: 'Images',
    institution: 'Curated Digital Elevation Studies & Documentary Plates based on Public Heritage Records',
  },
];

export const PHILIPPINE_REGIONS_LIST = [
  'NCR',
  'Ilocos Region',
  'Cagayan Valley',
  'Central Luzon',
  'CALABARZON',
  'MIMAROPA',
  'Bicol Region',
  'Western Visayas',
  'Central Visayas',
  'Eastern Visayas',
  'Zamboanga Peninsula',
  'Northern Mindanao',
  'Davao Region',
  'SOCCSKSARGEN',
  'Caraga',
  'BARMM',
  'Cordillera Administrative Region',
] as const;
