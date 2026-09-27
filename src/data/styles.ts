import { ArchitecturalStyle } from '../types/architecture';
import { VERIFIED_ARCHIVE_PHOTOS, GENERATED_ARCHIVE_IMAGES } from '../utils/architecturalPlate';

export const STYLES_DATA: ArchitecturalStyle[] = [
  {
    id: 'traditional-filipino',
    slug: 'traditional-filipino',
    code: 'STYLE-01',
    name: 'Traditional Filipino Architecture',
    periodSpan: 'Precolonial Era - Present (Living Tradition)',
    description:
      'Indigenous Austronesian vernacular typologies—including the lowland Bahay Kubo, Cordillera Ifugao Bale, Maranao Torogan, and Ivatan Rakuh—engineered for tropical monsoons, floods, and seismic activity.',
    characteristics: [
      'Elevated living floors raised on hardwood posts (tukod) or stone rollers for ventilation and flood protection',
      'Steeply pitched thatch roofs (cogon or nipa) with wide overhanging eaves to shed torrential monsoon rains',
      'Breathable woven bamboo (sawali), timber planks, or thick lime-coral walls (in Batanes)',
      'Flexible mortise-and-tenon joinery and rattan lashings capable of absorbing earthquake tremors',
    ],
    historicalContext:
      'Rooted in shared Austronesian maritime and highland building traditions prior to 1565, vernacular Philippine architecture evolved distinct regional forms adapted to local microclimates—from the highland cold of the Cordilleras and the typhoon belt of the Luzon Strait to the riverine and lake basins of Mindanao.',
    examples: [
      {
        buildingId: 'ifugao-bale-batad',
        name: 'Ifugao Bale (Batad Native House)',
        location: 'Banaue, Ifugao',
        year: 'Precolonial / Living Tradition',
      },
      {
        buildingId: 'kawayan-torogan-lanao',
        name: 'Kawayan Torogan (Maranao Royal House)',
        location: 'Marantao, Lanao del Sur',
        year: '19th Century / Traditional Lineage',
      },
      {
        buildingId: 'ivatan-rakuh-dakay-house',
        name: 'House of Dakay (Ivatan Stone House)',
        location: 'Ivana, Batanes',
        year: '1887',
      },
    ],
    relatedArchitects: [
      {
        architectId: 'indigenous-colonial-artisans',
        name: 'Indigenous Master Builders (Munhabat, Panday & Community Craftsmen)',
      },
      {
        architectId: 'francisco-bobby-manosa',
        name: 'Francisco "Bobby" T. Mañosa (Modern Interpreter)',
      },
    ],
    blueprintType: 'vernacular-stilt',
    heroImage: VERIFIED_ARCHIVE_PHOTOS.ifugaoBaleBatad,
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
    slug: 'spanish-colonial',
    code: 'STYLE-02',
    name: 'Spanish Colonial & Earthquake Baroque',
    periodSpan: '1565-1898',
    description:
      'Ecclesiastical, military, and civic stone masonry architecture adapted by Filipino, Chinese-Filipino, and Spanish builders to survive the frequent earthquakes of the Philippine archipelago.',
    characteristics: [
      'Massive lateral stepped or scrolled buttresses (contrafuertes) bracing low-slung coral or adobe stone naves',
      'Detached or stoutly proportioned bell towers functioning as lookouts and seismic counterweights',
      'Tropical folk-Baroque facades carved with local botanical reliefs, saints, and Chinese-Filipino motifs',
      'Use of quarried volcanic tuff (adobe), marine coral stone, kiln brick, and lime mortar (argamasa)',
    ],
    historicalContext:
      'Introduced under the Spanish leyes de indias town planning grid centered on the Plaza Mayor, European Baroque and Renaissance church patterns were fundamentally re-engineered in the Philippines after destructive 17th- and 18th-century earthquakes, giving birth to the globally recognized "Earthquake Baroque" typology.',
    examples: [
      {
        buildingId: 'san-agustin-church',
        name: 'San Agustin Church (Intramuros)',
        location: 'Manila, NCR',
        year: '1607',
      },
      {
        buildingId: 'paoay-church',
        name: 'San Agustin Church of Paoay',
        location: 'Paoay, Ilocos Norte',
        year: '1710',
      },
      {
        buildingId: 'miagao-church',
        name: 'Santo Tomas de Villanueva Parish Church (Miagao)',
        location: 'Miagao, Iloilo',
        year: '1797',
      },
      {
        buildingId: 'daraga-church-albay',
        name: 'Nuestra Señora de la Porteria (Daraga Church)',
        location: 'Daraga, Albay',
        year: '1773',
      },
    ],
    relatedArchitects: [
      {
        architectId: 'indigenous-colonial-artisans',
        name: 'Indigenous & Chinese-Filipino Maestro de Obras',
      },
    ],
    blueprintType: 'baroque-church',
    heroImage: VERIFIED_ARCHIVE_PHOTOS.paoayChurch,
    sources: [
      {
        title: 'UNESCO World Heritage Centre — Baroque Churches of the Philippines',
        url: 'https://whc.unesco.org/en/list/677/',
        type: 'information',
        category: 'Heritage',
      },
    ],
  },
  {
    id: 'bahay-na-bato',
    slug: 'bahay-na-bato',
    code: 'STYLE-03',
    name: 'Bahay na Bato (Colonial Domestic Hybrid)',
    periodSpan: '18th - Early 20th Century',
    description:
      'The noble urban and town residence of the 19th-century Philippines, synthesizing the elevated spatial logic of the indigenous Bahay Kubo with a stone ground-floor enclosure and Hispanic-Chinese craftsmanship.',
    characteristics: [
      'Two-story hybrid structure: stone/brick ground floor (zaguan) supporting a hardwood upper living level (or full brick in Vigan)',
      'Continuous bands of sliding capiz-shell (Placuna placenta) window panels filtering harsh tropical glare',
      'Operable floor-to-sill ventanilla balusters and cantilevered volada galleries for maximum passive airflow',
      'Carved wooden calado fretwork transoms above interior partitions allowing breeze circulation even when doors are shut',
    ],
    historicalContext:
      'Emerging after the 1645 and 1863 Manila earthquakes proved brittle multi-story stone palaces hazardous, the Bahay na Bato relied on flexible molave timber posts embedded within or resting upon masonry ground walls, flourishing across Vigan, Taal, Silay, Iloilo, and Manila.',
    examples: [
      {
        buildingId: 'syquia-mansion-vigan',
        name: 'Syquia Mansion & Calle Crisologo Ensemble',
        location: 'Vigan, Ilocos Sur',
        year: '1830',
      },
    ],
    relatedArchitects: [
      {
        architectId: 'indigenous-colonial-artisans',
        name: 'Filipino & Chinese-Filipino Maestro de Obras',
      },
    ],
    blueprintType: 'bahay-na-bato',
    heroImage: GENERATED_ARCHIVE_IMAGES.viganBahayNaBato,
    sources: [
      {
        title: 'UNESCO World Heritage Centre — Historic City of Vigan',
        url: 'https://whc.unesco.org/en/list/502/',
        type: 'information',
        category: 'Heritage',
      },
    ],
  },
  {
    id: 'neoclassical',
    slug: 'neoclassical',
    code: 'STYLE-04',
    name: 'American Colonial & Neoclassical',
    periodSpan: '1898-1935',
    description:
      'Monumental Beaux-Arts and Neoclassical civic, legislative, and educational architecture introduced through the 1905 Burnham Plan and executed in reinforced concrete by the first generation of licensed Filipino architects.',
    characteristics: [
      'Symmetrical tripartite facades anchored by grand Ionic or Corinthian colonnaded porticos',
      'Use of modern steel-reinforced concrete cast to replicate classical stone ashlar and entablatures',
      'Integration of high ceilings, recessed loggias, and wide window bays for tropical ventilation',
      'Siting along grand axial boulevards, civic plazas, and provincial capitol complexes',
    ],
    historicalContext:
      'Following Daniel H. Burnham\'s 1905 City Beautiful plans for Manila and Baguio and the work of Consulting Architect William E. Parsons, returning Filipino pensionado architects—led by Juan M. Arellano, Tomás B. Mapúa, and Antonio Toledo—designed the nation\'s capitols, post offices, and universities.',
    examples: [
      {
        buildingId: 'manila-central-post-office',
        name: 'Manila Central Post Office Building',
        location: 'Manila, NCR',
        year: '1926',
      },
    ],
    relatedArchitects: [
      {
        architectId: 'juan-m-arellano',
        name: 'Juan M. Arellano',
      },
      {
        architectId: 'tomas-b-mapua',
        name: 'Tomás B. Mapúa',
      },
    ],
    blueprintType: 'neoclassical-portico',
    heroImage: VERIFIED_ARCHIVE_PHOTOS.manilaCentralPostOffice,
    sources: [
      {
        title: 'National Historical Commission of the Philippines — Civic Heritage Archives',
        url: 'https://nhcp.gov.ph/',
        type: 'information',
        category: 'Government',
      },
    ],
  },
  {
    id: 'art-deco',
    slug: 'art-deco',
    code: 'STYLE-05',
    name: 'Philippine Art Deco',
    periodSpan: '1928-1941',
    description:
      'A dynamic Commonwealth-era architectural movement blending Zigzag Moderne and Streamline Moderne geometry with indigenous Philippine botanical motifs, tropical sun-fins, and polychrome reliefs.',
    characteristics: [
      'Stepped vertical pylons paired with streamlined horizontal concrete eyebrows and rounded corners',
      'Bas-relief ornamentation depicting native flora (banana, mango, bamboo, sampaguita) and agricultural scenes',
      'Vertical concrete brise-soleil fins and porthole or steel casement windows',
      'Vibrant terrazzo floors, wrought-iron grilles, and stained-glass focal panels',
    ],
    historicalContext:
      'During the 1930s Commonwealth boom, a second wave of Filipino architects—including Pablo S. Antonio, Juan F. Nakpil, Juan M. Arellano, and Fernando Ocampo—broke away from Neoclassical revivalism to create cinema palaces, university campuses, and sanatoriums in a distinctly tropical Art Deco idiom.',
    examples: [
      {
        buildingId: 'nicanor-reyes-hall-feu',
        name: 'Nicanor Reyes Hall (Far Eastern University)',
        location: 'Manila, NCR',
        year: '1939',
      },
      {
        buildingId: 'manila-metropolitan-theater',
        name: 'Manila Metropolitan Theater (The Met)',
        location: 'Manila, NCR',
        year: '1931',
      },
      {
        buildingId: 'quezon-institute',
        name: 'Quezon Institute Main Building',
        location: 'Quezon City, NCR',
        year: '1938',
      },
    ],
    relatedArchitects: [
      {
        architectId: 'pablo-s-antonio',
        name: 'Pablo S. Antonio',
      },
      {
        architectId: 'juan-f-nakpil',
        name: 'Juan F. Nakpil',
      },
      {
        architectId: 'juan-m-arellano',
        name: 'Juan M. Arellano',
      },
    ],
    blueprintType: 'art-deco-fins',
    heroImage: VERIFIED_ARCHIVE_PHOTOS.manilaMetropolitanTheater,
    sources: [
      {
        title: 'National Commission for Culture and the Arts — Philippine Art Deco Heritage',
        url: 'https://ncca.gov.ph/',
        type: 'information',
        category: 'Government',
      },
    ],
  },
  {
    id: 'modernism',
    slug: 'modernism',
    code: 'STYLE-06',
    name: 'Post-War Tropical Modernism',
    periodSpan: '1946-1975',
    description:
      'The post-independence architectural resurgence that adapted International Style functionalism, thin-shell parabolic concrete roofs, and sculptural sun-breakers (brise-soleil) to the Philippine climate.',
    characteristics: [
      'Extensive use of vertical and egg-crate concrete sun-breakers (brise-soleil) and pierced concrete blocks',
      'Expressive thin-shell reinforced concrete domes, hyperbolic paraboloids, and folded plates',
      'Integration of modernist painting, sculpture, and landscape design with open-air ground lobbies',
      'Rejection of applied historical ornament in favor of structural honesty and climatic shading',
    ],
    historicalContext:
      'Following the devastation of Manila in 1945 and the declaration of Philippine independence in 1946, architects such as Cesar Concio, Juan Nakpil, Jose María Zaragoza, Carlos Arguelles, and Leandro Locsin rebuilt the nation\'s universities, churches, and corporate districts in a bold tropical modernist language.',
    examples: [
      {
        buildingId: 'parish-of-the-holy-sacrifice',
        name: 'Parish of the Holy Sacrifice (UP Diliman)',
        location: 'Quezon City, NCR',
        year: '1955',
      },
      {
        buildingId: 'meralco-building-ortigas',
        name: 'Meralco Building (Lopez Building)',
        location: 'Pasig, NCR',
        year: '1968',
      },
      {
        buildingId: 'up-melchor-hall',
        name: 'Melchor Hall (UP College of Engineering)',
        location: 'Quezon City, NCR',
        year: '1950',
      },
      {
        buildingId: 'up-quezon-hall',
        name: 'Quezon Hall (UP Diliman)',
        location: 'Quezon City, NCR',
        year: '1950',
      },
    ],
    relatedArchitects: [
      {
        architectId: 'leandro-v-locsin',
        name: 'Leandro V. Locsin',
      },
      {
        architectId: 'jose-maria-zaragoza',
        name: 'Jose María V. Zaragoza',
      },
      {
        architectId: 'cesar-h-concio',
        name: 'Cesar H. Concio',
      },
      {
        architectId: 'carlos-d-arguelles',
        name: 'Carlos D. Arguelles',
      },
    ],
    blueprintType: 'thin-shell-dome',
    heroImage: VERIFIED_ARCHIVE_PHOTOS.parishOfTheHolySacrifice,
    sources: [
      {
        title: 'National Commission for Culture and the Arts — Post-War Philippine Architecture',
        url: 'https://ncca.gov.ph/',
        type: 'information',
        category: 'Government',
      },
    ],
  },
  {
    id: 'brutalism',
    slug: 'brutalism',
    code: 'STYLE-07',
    name: 'Philippine Brutalism',
    periodSpan: '1965-1985',
    description:
      'Monumental civic and cultural architecture characterized by raw board-formed or bush-hammered concrete, heroic cantilevers, and floating monolithic volumes inspired by indigenous Filipino silhouettes.',
    characteristics: [
      'Massive cantilevered concrete and travertine volumes hovering above recessed glazed bases',
      'Textured raw concrete surfaces (beton brut), bush-hammered aggregates, and crushed sea-shell stucco',
      'Sweeping ceremonial ramps, reflecting pools, and dramatic shadow-casting overhangs',
      'Vast column-free interior halls engineered with post-tensioned box girders and waffle slabs',
    ],
    historicalContext:
      'Centered around the Cultural Center of the Philippines Complex on reclaimed land along Manila Bay and major financial institutions in Makati and Quezon City, Philippine Brutalism—spearheaded by Leandro V. Locsin and Jorge Ramos—fused monumental raw concrete with the elevated silhouette of the vernacular nipa hut.',
    examples: [
      {
        buildingId: 'ccp-main-building',
        name: 'Cultural Center of the Philippines Main Building',
        location: 'Pasay, NCR',
        year: '1969',
      },
      {
        buildingId: 'picc-pasay',
        name: 'Philippine International Convention Center (PICC)',
        location: 'Pasay, NCR',
        year: '1976',
      },
    ],
    relatedArchitects: [
      {
        architectId: 'leandro-v-locsin',
        name: 'Leandro V. Locsin',
      },
    ],
    blueprintType: 'brutalist-cantilever',
    heroImage: GENERATED_ARCHIVE_IMAGES.ccp,
    sources: [
      {
        title: 'Cultural Center of the Philippines Architectural Heritage Archive',
        url: 'https://culturalcenter.gov.ph/',
        type: 'information',
        category: 'Cultural Institutions',
      },
    ],
  },
  {
    id: 'neo-vernacular',
    slug: 'neo-vernacular',
    code: 'STYLE-08',
    name: 'Neo-Vernacular Architecture',
    periodSpan: '1975-Present',
    description:
      'A cultural movement spearheaded by Francisco "Bobby" Mañosa that consciously synthesizes traditional Filipino spatial forms, steep roofs, and indigenous materials with contemporary engineering.',
    characteristics: [
      'Contemporary reinterpretation of the bahay kubo, salakot roof geometry, and Cordillera rice terraces',
      'Innovative structural and finish applications of coconut timber, engineered bamboo, rattan, and capiz shell',
      'Deeply shaded verandas, outward-sloping tukod walls, and passive stack-effect roof vents',
      'Seamless indoor-outdoor transitions integrated with native tropical landscape gardens',
    ],
    historicalContext:
      'Emerging in the late 1970s and 1980s as a critical response to Western internationalism, the Neo-Vernacular movement asserted that modern Filipino architecture should visibly and materially express national identity and regional craftsmanship.',
    examples: [
      {
        buildingId: 'coconut-palace',
        name: 'Coconut Palace (Tahanang Pilipino)',
        location: 'Pasay, NCR',
        year: '1981',
      },
      {
        buildingId: 'san-miguel-corporation-head-office',
        name: 'San Miguel Corporation Head Office Complex',
        location: 'Mandaluyong, NCR',
        year: '1984',
      },
    ],
    relatedArchitects: [
      {
        architectId: 'francisco-bobby-manosa',
        name: 'Francisco "Bobby" T. Mañosa',
      },
      {
        architectId: 'ildefonso-p-santos',
        name: 'Ildefonso P. Santos Jr.',
      },
    ],
    blueprintType: 'neovernacular-pavilion',
    heroImage: GENERATED_ARCHIVE_IMAGES.coconutPalace,
    sources: [
      {
        title: 'National Commission for Culture and the Arts — Francisco T. Mañosa Profile',
        url: 'https://ncca.gov.ph/about-culture-and-arts/culture-profile/national-artists-of-the-philippines/francisco-manosa/',
        type: 'information',
        category: 'Government',
      },
    ],
  },
  {
    id: 'sustainable-contemporary',
    slug: 'sustainable-contemporary',
    code: 'STYLE-09',
    name: 'Contemporary & Sustainable Architecture',
    periodSpan: '2000-Present',
    description:
      '21st-century Philippine architecture addressing climate resilience, typhoon engineering, long-span engineered timber, green building certification, and adaptive heritage reuse.',
    characteristics: [
      'Long-span glue-laminated timber (glulam), high-performance low-E solar glazing, and rainwater harvesting',
      'Typhoon-resilient aerodynamics and seismic base isolation for infrastructure and high-density towers',
      'Collaboration between contemporary architects and regional Filipino industrial/craft designers',
      'Adaptive reuse of colonial and post-war heritage structures for new cultural and civic programs',
    ],
    historicalContext:
      'Facing rapid urbanization and intensifying climate impacts across the archipelago, contemporary Philippine architects combine digital structural modeling and green building standards (BERDE / LEED) with tactile regional materials and passive tropical design.',
    examples: [
      {
        buildingId: 'mactan-cebu-airport-t2',
        name: 'Mactan-Cebu International Airport Terminal 2',
        location: 'Lapu-Lapu City, Cebu',
        year: '2018',
      },
      {
        buildingId: 'san-miguel-corporation-head-office',
        name: 'San Miguel Corporation Head Office Complex (Precursor)',
        location: 'Mandaluyong, NCR',
        year: '1984',
      },
    ],
    relatedArchitects: [
      {
        architectId: 'francisco-bobby-manosa',
        name: 'Francisco "Bobby" T. Mañosa',
      },
    ],
    blueprintType: 'contemporary-timber-arch',
    heroImage: VERIFIED_ARCHIVE_PHOTOS.mactanCebuAirportT2,
    sources: [
      {
        title: 'United Architects of the Philippines (UAP) Contemporary Practice Resources',
        url: 'https://united-architects.org/',
        type: 'information',
        category: 'Architecture',
      },
    ],
  },
];
