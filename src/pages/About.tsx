import React from 'react';
import { Link } from 'react-router-dom';
import { SeoHead } from '../components/SeoHead';

const GROUP_LEADER = {
  code: 'LEADER · GROUP 1',
  name: 'Dictaan Carl Vincent',
  role: 'Group Leader · BSIT-1C',
};

const GROUP_MEMBERS = [
  { code: 'MEMBER 01 · GROUP 1', name: 'Eslao Jefferson Heinrich', role: 'Group 1 Member · BSIT-1C' },
  { code: 'MEMBER 02 · GROUP 1', name: 'Erespe Christian', role: 'Group 1 Member · BSIT-1C' },
  { code: 'MEMBER 03 · GROUP 1', name: 'Lapaz Christoper', role: 'Group 1 Member · BSIT-1C' },
  { code: 'MEMBER 04 · GROUP 1', name: 'Jacob Aljeven', role: 'Group 1 Member · BSIT-1C' },
];

export const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f4f1eb] text-[#111111]">
      <SeoHead
        title="About ARCHI—PH — Group 1 (BSIT-1C) · GE 9 Art Appreciation"
        description="Learn about ARCHI—PH and Group 1 (BSIT-1C) led by Dictaan Carl Vincent for GE 9 Art Appreciation under Instructor Avelina Noble."
      />

      {/* Header */}
      <section className="border-b border-[#d8d3ca] bg-[#ebe6dd] py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-4">
          <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
            BSIT-1C &nbsp;|&nbsp; GROUP 1 · GE 9 ART APPRECIATION · ARCHI—PH
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-[#111111]">
            ABOUT ARCHI—PH
          </h1>
          <p className="text-base sm:text-lg text-[#5c5954] max-w-3xl leading-relaxed">
            A curated collection of selected Philippine architecture—combining the editorial depth of an architectural monograph with an interactive research database and cartographic archive.
          </p>
        </div>
      </section>

      {/* Group 1 Academic Presentation & Team Roster Section */}
      <section className="py-14 lg:py-20 bg-[#ebe6dd]/60 border-b border-[#d8d3ca]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-10">
          <div className="border-b border-[#111111] pb-6 flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                BSIT-1C &nbsp;|&nbsp; GROUP 1 · ACADEMIC PRESENTATION
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-editorial font-bold text-[#111111]">
                GROUP 1 — LEADER &amp; MEMBERS
              </h2>
            </div>
            <p className="font-mono-tech text-xs text-[#5c5954]">
              GE 9 ART APPRECIATION · INSTRUCTOR: AVELINA NOBLE
            </p>
          </div>

          {/* Subject & Instructor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card-arch-interactive rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-6 space-y-2">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                SUBJECT
              </p>
              <h3 className="text-xl font-editorial font-bold text-[#111111]">
                GE 9 ART APPRECIATION
              </h3>
              <p className="text-xs text-[#5c5954]">
                Philippine Built Heritage &amp; Architectural Art Appreciation
              </p>
            </div>

            <div className="card-arch-interactive rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-6 space-y-2">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                INSTRUCTOR
              </p>
              <h3 className="text-xl font-editorial font-bold text-[#111111]">
                AVELINA NOBLE
              </h3>
              <p className="text-xs text-[#5c5954]">
                Course Professor · GE 9 Art Appreciation
              </p>
            </div>

            <div className="card-arch-interactive rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-6 space-y-2">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                SECTION &amp; GROUP
              </p>
              <h3 className="text-xl font-editorial font-bold text-[#111111]">
                BSIT-1C &nbsp;|&nbsp; GROUP 1
              </h3>
              <p className="text-xs text-[#5c5954]">
                Bachelor of Science in Information Technology
              </p>
            </div>
          </div>

          {/* Leader Spotlight */}
          <div className="space-y-4">
            <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
              GROUP LEADER
            </h3>
            <div className="card-arch-interactive rounded-2xl border-2 border-[var(--accent)] bg-[var(--surface-card)] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-2">
                <div className="font-mono-tech text-xs text-[#8a5947]">
                  {GROUP_LEADER.code}
                </div>
                <h4 className="text-2xl sm:text-3xl font-editorial font-bold text-[#111111]">
                  {GROUP_LEADER.name}
                </h4>
                <p className="text-sm text-[#5c5954]">{GROUP_LEADER.role}</p>
              </div>
              <div className="font-mono-tech text-xs uppercase tracking-wider text-[var(--accent)] font-semibold">
                Leader · BSIT-1C | GROUP 1
              </div>
            </div>
          </div>

          {/* Group Members Grid */}
          <div className="space-y-4">
            <h3 className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
              GROUP 1 MEMBERS
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GROUP_MEMBERS.map((member) => (
                <div
                  key={member.name}
                  className="card-arch-interactive rounded-2xl border-2 border-[#111111] bg-[var(--surface-card)] p-6 space-y-3"
                >
                  <div className="font-mono-tech text-xs text-[#8a5947]">
                    {member.code}
                  </div>
                  <h4 className="text-lg sm:text-xl font-editorial font-semibold text-[#111111]">
                    {member.name}
                  </h4>
                  <p className="text-xs text-[#5c5954]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core Questions */}
      <section className="py-14 lg:py-20 border-b border-[#d8d3ca]">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#d8d3ca]">
            <div className="lg:col-span-4">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                01 / DEFINITION
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold mt-1">
                What is ARCHI—PH?
              </h2>
            </div>
            <div className="lg:col-span-8 text-base text-[#5c5954] leading-relaxed space-y-4 max-w-prose">
              <p className="text-[#111111] font-medium">
                ARCHI—PH (Philippine Architecture &amp; Heritage Explorer) is an educational digital archive, visual publication, and interactive research platform focused exclusively on the architecture and built heritage of the Philippines.
              </p>
              <p>
                Rather than presenting buildings as isolated photographs, ARCHI—PH connects every documented structure to its historical period, climatic and seismic context, tectonic characteristics, Filipino architect or master builder, and geographic coordinates.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#d8d3ca]">
            <div className="lg:col-span-4">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                02 / PURPOSE
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold mt-1">
                Why was it created?
              </h2>
            </div>
            <div className="lg:col-span-8 text-base text-[#5c5954] leading-relaxed space-y-4 max-w-prose">
              <p>
                Information on Philippine architecture is often fragmented across physical textbooks, government registries, and scattered online articles. ARCHI—PH was created to provide students, researchers, educators, and the public with a cohesive, accessible, and design-forward platform to study how Filipino architecture evolved from precolonial Austronesian stilt houses to Earthquake Baroque churches, Art Deco campuses, post-war Brutalist complexes, and sustainable contemporary landmarks.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#d8d3ca]">
            <div className="lg:col-span-4">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                03 / SCOPE OF THE COLLECTION
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold mt-1">
                What does the archive contain?
              </h2>
            </div>
            <div className="lg:col-span-8 text-base text-[#5c5954] leading-relaxed space-y-4 max-w-prose">
              <p>
                ARCHI—PH presents <strong>a curated collection of selected Philippine architecture</strong> across Luzon, Visayas, and Mindanao. It does not claim to be an exhaustive national registry of every structure in the country; instead, it offers verified, deeply documented records covering:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-[#111111]">
                <li className="p-3.5 rounded-xl border-2 border-[#d8d3ca] bg-[var(--surface-card)]">
                  · 20+ Verified Philippine Buildings with full tectonic analysis
                </li>
                <li className="p-3.5 rounded-xl border-2 border-[#d8d3ca] bg-[var(--surface-card)]">
                  · 11 Filipino Architect &amp; Master Builder Monographs
                </li>
                <li className="p-3.5 rounded-xl border-2 border-[#d8d3ca] bg-[var(--surface-card)]">
                  · 9 Contextual Philippine Architectural Movements
                </li>
                <li className="p-3.5 rounded-xl border-2 border-[#d8d3ca] bg-[var(--surface-card)]">
                  · 6 Chronological Historical Eras &amp; Interactive Leaflet Map
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#d8d3ca]">
            <div className="lg:col-span-4">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                04 / METHODOLOGY
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold mt-1">
                How is information verified?
              </h2>
            </div>
            <div className="lg:col-span-8 text-base text-[#5c5954] leading-relaxed space-y-4 max-w-prose">
              <p>
                Every record in ARCHI—PH adheres to a strict non-fabrication policy. Building names, architect attributions, construction dates, regional locations, and heritage declarations are cross-checked against official institutional registries—including the National Historical Commission of the Philippines (NHCP), the National Commission for Culture and the Arts (NCCA), the National Museum of the Philippines, and the UNESCO World Heritage Centre.
              </p>
              <p>
                Where historical records are unrecorded or scholarly boundaries vary (such as precolonial vernacular lineages or collective colonial-era maestro de obras), the archive explicitly notes the context or marks uncertain fields as <code className="font-mono-tech text-xs rounded-md bg-[#ebe6dd] px-1.5 py-0.5 text-[#111111]">Unknown</code> rather than inventing data.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
              <p className="font-mono-tech text-xs uppercase tracking-widest text-[#8a5947]">
                05 / SYSTEM ARCHITECTURE
              </p>
              <h2 className="text-2xl sm:text-3xl font-editorial font-semibold mt-1">
                What technologies are used?
              </h2>
            </div>
            <div className="lg:col-span-8 text-base text-[#5c5954] leading-relaxed space-y-4 max-w-prose">
              <p>
                ARCHI—PH is built with a modular, self-contained architecture separating user interface components from local archival datasets—requiring no external database or user login:
              </p>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                <div className="p-4 rounded-xl border-2 border-[#d8d3ca] bg-[var(--surface-card)]">
                  <dt className="font-mono-tech uppercase text-[#8a5947]">
                    Frontend &amp; Routing
                  </dt>
                  <dd className="text-sm font-medium text-[#111111] mt-1">
                    React 19, TypeScript, Vite, React Router
                  </dd>
                </div>
                <div className="p-4 rounded-xl border-2 border-[#d8d3ca] bg-[var(--surface-card)]">
                  <dt className="font-mono-tech uppercase text-[#8a5947]">
                    Design &amp; Typography
                  </dt>
                  <dd className="text-sm font-medium text-[#111111] mt-1">
                    Tailwind CSS, Light/Dark Theme Engine, Minecraft Pixel Font System
                  </dd>
                </div>
                <div className="p-4 rounded-xl border-2 border-[#d8d3ca] bg-[var(--surface-card)]">
                  <dt className="font-mono-tech uppercase text-[#8a5947]">
                    Cartography
                  </dt>
                  <dd className="text-sm font-medium text-[#111111] mt-1">
                    Leaflet JS &amp; OpenStreetMap Contributors
                  </dd>
                </div>
                <div className="p-4 rounded-xl border-2 border-[#d8d3ca] bg-[var(--surface-card)]">
                  <dt className="font-mono-tech uppercase text-[#8a5947]">
                    Data &amp; Deployment
                  </dt>
                  <dd className="text-sm font-medium text-[#111111] mt-1">
                    Self-Contained TypeScript Archive Data (`src/data/`) · Static Deployment Ready
                  </dd>
                </div>
              </dl>

              <div className="pt-6 flex flex-wrap gap-4">
                <Link
                  to="/sources"
                  className="btn-arch-primary px-5 py-3 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>View Official Sources</span>
                  <span className="btn-arrow">-&gt;</span>
                </Link>
                <Link
                  to="/explore"
                  className="btn-arch-secondary px-5 py-3 min-h-[44px] text-xs font-mono-tech uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Explore the Archive</span>
                  <span className="btn-arrow">-&gt;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
