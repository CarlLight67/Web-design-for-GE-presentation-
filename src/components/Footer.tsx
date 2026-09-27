import React from 'react';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

interface FooterProps {
  onOpenIntro?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenIntro }) => {
  return (
    <footer className="bg-[#090f15] text-[#e8f0f7] border-t border-[var(--line)]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#e8f0f7]/15">
          {/* Column 1: Brand, Group 1 & Project Attribution */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/"
                className="inline-block text-xl sm:text-2xl font-editorial font-bold tracking-wider text-[#e8f0f7] hover:text-[var(--accent)] transition-colors"
              >
                ARCHI—PH
              </Link>
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent-bright)]">
                · GROUP 1
              </span>
            </div>

            <p className="text-sm font-medium text-[#b5c9be]">
              Philippine Architecture &amp; Heritage Explorer
            </p>

            <p className="text-xs sm:text-sm text-[#94a8be] leading-relaxed max-w-md">
              A curated collection of selected Philippine architecture. Designed as an educational digital archive, research index, and visual monograph dedicated exclusively to the built heritage of the Philippines.
            </p>

            {/* Academic Project Box in Footer */}
            <div className="pt-2 space-y-2">
              <div className="p-4 rounded-xl border border-[#e8f0f7]/20 bg-[#111c26] space-y-1.5 max-w-md">
                <p className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent-bright)] font-semibold">
                  GROUP 1 · GE 9 ART APPRECIATION
                </p>
                <p className="font-editorial text-sm font-bold text-[#ffffff] tracking-wide">
                  PROJECT OF CARL DICTAAN - BSIT-1C
                </p>
                <p className="text-xs text-[#94a8be]">
                  Instructor: AVELINA NOBLE
                </p>
              </div>

              {onOpenIntro && (
                <button
                  type="button"
                  onClick={onOpenIntro}
                  className="btn-arch-secondary px-4 py-2 min-h-[40px] text-xs font-mono-tech uppercase tracking-wider mt-2 inline-flex items-center gap-2"
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Open Group 1 Intro Popup</span>
                </button>
              )}
            </div>
          </div>

          {/* Column 2: Primary Archive Navigation */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6">
            <div>
              <h2 className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent)] mb-4">
                Archive Index
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/explore" className="text-[#d2e0d8] hover:text-[var(--accent-bright)] hover:translate-x-1 inline-block transition-all duration-200">
                    Explore
                  </Link>
                </li>
                <li>
                  <Link to="/architects" className="text-[#d2e0d8] hover:text-[var(--accent-bright)] hover:translate-x-1 inline-block transition-all duration-200">
                    Architects
                  </Link>
                </li>
                <li>
                  <Link to="/styles" className="text-[#d2e0d8] hover:text-[var(--accent-bright)] hover:translate-x-1 inline-block transition-all duration-200">
                    Styles
                  </Link>
                </li>
                <li>
                  <Link to="/map" className="text-[#d2e0d8] hover:text-[var(--accent-bright)] hover:translate-x-1 inline-block transition-all duration-200">
                    Map
                  </Link>
                </li>
                <li>
                  <Link to="/timeline" className="text-[#d2e0d8] hover:text-[var(--accent-bright)] hover:translate-x-1 inline-block transition-all duration-200">
                    Timeline
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-[#d2e0d8] hover:text-[var(--accent-bright)] hover:translate-x-1 inline-block transition-all duration-200">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent)] mb-4">
                Documentation
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/sources" className="text-[#d2e0d8] hover:text-[var(--accent-bright)] hover:translate-x-1 inline-block transition-all duration-200">
                    Sources
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[#d2e0d8] hover:text-[var(--accent-bright)] hover:translate-x-1 inline-block transition-all duration-200">
                    About &amp; Group 1
                  </Link>
                </li>
                <li>
                  <Link to="/explore?region=NCR" className="text-[#d2e0d8] hover:text-[var(--accent-bright)] hover:translate-x-1 inline-block transition-all duration-200">
                    Metro Manila (NCR)
                  </Link>
                </li>
                <li>
                  <Link to="/explore?region=Ilocos%20Region" className="text-[#d2e0d8] hover:text-[var(--accent-bright)] hover:translate-x-1 inline-block transition-all duration-200">
                    Ilocos Heritage
                  </Link>
                </li>
                <li>
                  <Link to="/explore?region=Western%20Visayas" className="text-[#d2e0d8] hover:text-[var(--accent-bright)] hover:translate-x-1 inline-block transition-all duration-200">
                    Visayas Archive
                  </Link>
                </li>
                <li>
                  <Link to="/explore?region=BARMM" className="text-[#d2e0d8] hover:text-[var(--accent-bright)] hover:translate-x-1 inline-block transition-all duration-200">
                    Mindanao Vernacular
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Group 1 Roster & Verification Note */}
          <div className="md:col-span-3 space-y-4">
            <div>
              <h2 className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent)] mb-2.5">
                GROUP 1 · BSIT-1C
              </h2>
              <p className="text-xs text-[#e8f0f7] font-semibold">
                Leader: Dictaan Carl Vincent
              </p>
              <ul className="mt-1.5 space-y-1 text-xs text-[#94a8be]">
                <li>· Eslao Jefferson Heinrich</li>
                <li>· Erespe Christian</li>
                <li>· Lapaz Christoper</li>
                <li>· Jacob Aljeven</li>
              </ul>
            </div>

            <div className="pt-2 border-t border-[#e8f0f7]/15 space-y-2">
              <h3 className="font-mono-tech text-[11px] uppercase tracking-widest text-[var(--accent)]">
                Research &amp; Verification
              </h3>
              <p className="text-xs text-[#94a8be] leading-relaxed">
                Records reference official registries from NHCP, NCCA, National Museum, and UNESCO World Heritage Centre.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 text-xs text-[#94a8be]">
          <p>
            (C) 2026 ARCHI—PH · <strong className="text-[#e8f0f7]">GROUP 1</strong> — Philippine Architecture &amp; Heritage Explorer.
          </p>
          <p className="font-mono-tech text-[var(--accent-bright)] font-semibold">
            PROJECT OF CARL DICTAAN - BSIT-1C · GROUP 1
          </p>
        </div>
      </div>
    </footer>
  );
};
