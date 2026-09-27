# ARCHI—PH — Philippine Architecture & Heritage Explorer

> **A curated collection of selected Philippine architecture.**  
> An editorial digital archive, interactive museum, research index, and cartographic platform dedicated exclusively to the architecture and architectural heritage of the Philippines.

---

## 1. Project Overview

**ARCHI—PH** is an educational and visual platform designed to help students, researchers, architects, and the public discover and understand Philippine architecture across Luzon, Visayas, and Mindanao.

The user journey follows:

**Discover → Explore → Filter → Learn → View Location → Discover Related Architecture**

Every factual record in ARCHI—PH is grounded in official cultural and heritage registries, including:
- National Historical Commission of the Philippines (NHCP)
- National Commission for Culture and the Arts (NCCA)
- National Museum of the Philippines
- UNESCO World Heritage Centre
- Cultural Center of the Philippines (CCP)

---

## 2. Features

- **Editorial Monograph Homepage (`/`)**: High-impact hero, asymmetrical featured monographs, contextual architectural styles matrix, Filipino architects spotlight, interactive regional selector (all 17 Philippine regions), map preview, and historical timeline overview.
- **Searchable & Combinable Architecture Database (`/explore`)**: Instant debounced search across building names, Filipino architects, cities, provinces, regions, styles, and descriptions, paired with 9 combinable filters (`Region`, `Province`, `City`, `Architect`, `Architectural Style`, `Historical Period`, `Building Category`, `Heritage Status`, `Year`) and a responsive mobile filter drawer.
- **Building Monograph Pages (`/buildings/:slug`)**: Detailed architectural analysis including accession metadata (`ARCHITECT`, `YEAR BUILT`, `STYLE`, `LOCATION`, `CATEGORY`, `HERITAGE STATUS`), tectonic characteristics (`Form`, `Materials`, `Structure`, `Facade`, `Spatial Organization`, `Context`), interactive Photograph / Orthographic Elevation Study toggle, location map, related buildings, and traceable source links.
- **Filipino Architects Directory & Profiles (`/architects`, `/architects/:slug`)**: Verified profiles of National Artists for Architecture (Leandro V. Locsin, Francisco “Bobby” Mañosa, Juan F. Nakpil, Pablo S. Antonio, José María V. Zaragoza, Ildefonso P. Santos Jr.), pioneering licensed architects (Juan M. Arellano, Tomás B. Mapúa, Carlos D. Arguelles, Cesar H. Concio), and indigenous/colonial-era *Maestro de Obras*.
- **Architectural Styles Taxonomy (`/styles`, `/styles/:slug`)**: Contextual studies of Traditional Filipino Architecture, Spanish Colonial & Earthquake Baroque, Bahay na Bato, Neoclassical, Philippine Art Deco, Post-War Tropical Modernism, Brutalism, Neo-Vernacular, and Contemporary Sustainable Architecture.
- **Interactive Cartographic Explorer (`/map`)**: Built with **Leaflet + OpenStreetMap**, featuring custom archive markers, interactive popups, regional filters, and synchronized map bounding.
- **Philippine Architecture Timeline (`/timeline`)**: Chronological exploration across Precolonial/Traditional, Spanish Colonial, American Colonial, Post-War, Modernism, and Contemporary eras.
- **Visual Gallery & Lightbox (`/gallery`)**: Filterable by `All`, `Buildings`, `Details`, `Heritage`, `Modern`, `Traditional`, and `Sketches` with keyboard-navigable (`Escape`, `ArrowLeft`, `ArrowRight`) fullscreen lightbox.
- **About & Sources Registry (`/about`, `/sources`)**: Institutional methodology, six team member placeholders (`Member 01` – `Member 06`), and structured separation of Information, Image, and Map sources.

---

## 3. Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router (`react-router-dom`)
- **Styling**: Tailwind CSS (`@tailwindcss/vite`) + Custom CSS Variables (`--paper`, `--ink`, `--muted`, `--line`, `--concrete`, `--accent`)
- **Typography**: `Cormorant Garamond` (Editorial Serif), `Plus Jakarta Sans` (Body Sans-Serif), `IBM Plex Mono` (Technical Metadata & Tabular Numerals)
- **Interactive Maps**: Leaflet + OpenStreetMap
- **Architecture**: Self-contained local TypeScript data archive (`src/data/`) and service layer (`buildingService`, `architectService`, `styleService`, `mapService`) requiring no external database or account login.

---

## 4. Installation, Development & Build

```bash
# Install dependencies
npm install

# Start the development server on port 3000
npm run dev

# Build for production (outputs to /dist)
npm run build

# Preview the production build locally
npm run preview
```

---

## 5. Static Deployment

ARCHI—PH is a 100% static-ready SPA that deploys directly to any static host (such as Cloudflare Pages, Vercel, or Netlify) without requiring a backend server or external database:

1. Connect your repository to your static host.
2. Configure the build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

---

## 6. How to Add New Records

- **How to add buildings**: Append a verified `Building` object to `src/data/buildings.ts`. Ensure `architect.id`, `styleId`, and `periodId` match existing records, and include at least one credible institutional source in `sources`. Use `null` or `'Unknown'` for any unverified fields.
- **How to add architects**: Append a verified `Architect` object to `src/data/architects.ts` with `birthYear`, `deathYear` (`null` if unknown), `biography`, `architecturalApproach`, `majorWorks`, and `sources`.
- **How to add styles**: Append an `ArchitecturalStyle` object to `src/data/styles.ts` with `characteristics`, `historicalContext`, `examples`, and `relatedArchitects`.
- **How to add sources**: Append a `SourceReference` object to `INSTITUTIONAL_SOURCES` in `src/data/periods.ts` specifying `type` (`'information' | 'image' | 'map'`) and `category`.
