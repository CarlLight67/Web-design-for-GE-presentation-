import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_ITEMS = [
  { code: '01', label: 'Explore', path: '/explore', subtitle: 'Searchable Database' },
  { code: '02', label: 'Architects', path: '/architects', subtitle: 'National Artists & Pioneers' },
  { code: '03', label: 'Styles', path: '/styles', subtitle: 'Typological Taxonomy' },
  { code: '04', label: 'Map', path: '/map', subtitle: 'Cartographic Index' },
  { code: '05', label: 'Timeline', path: '/timeline', subtitle: 'Chronological Evolution' },
  { code: '06', label: 'Gallery', path: '/gallery', subtitle: 'Documentary Plates' },
  { code: '07', label: 'About', path: '/about', subtitle: 'Group 1 & Methodology' },
  { code: '08', label: 'Sources', path: '/sources', subtitle: 'Verified Citations' },
];

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickSearchOpen, setQuickSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const headerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setQuickSearchOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    if (!mobileMenuOpen && !quickSearchOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setQuickSearchOpen(false);
      }
    };

    const handlePointerDown = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
        setQuickSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [mobileMenuOpen, quickSearchOpen]);

  const handleQuickSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/explore?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setQuickSearchOpen(false);
    } else {
      navigate('/explore');
      setQuickSearchOpen(false);
    }
  };

  const handleToggleQuickSearch = () => {
    setQuickSearchOpen((prev) => {
      const next = !prev;
      if (next) setMobileMenuOpen(false);
      return next;
    });
  };

  const handleToggleMenu = () => {
    setMobileMenuOpen((prev) => {
      const next = !prev;
      if (next) setQuickSearchOpen(false);
      return next;
    });
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[var(--paper)]/95 backdrop-blur-md border-b-2 border-[var(--border-strong)] transition-colors duration-300"
    >
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-[70px] flex items-center justify-between gap-2 sm:gap-3">
        {/* Zone 1: Single text element wordmark */}
        <Link
          to="/"
          onClick={() => {
            setMobileMenuOpen(false);
            setQuickSearchOpen(false);
          }}
          className="text-lg sm:text-xl font-editorial font-bold tracking-wider text-white hover:text-[var(--accent-bright)] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"
        >
          ARCHI—PH
        </Link>

        {/* Zone 2: Clean navigation links on desktop */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-0.5 xl:gap-1 2xl:gap-1.5 min-w-0"
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-2 xl:px-2.5 2xl:px-3 py-1.5 text-xs font-bold whitespace-nowrap rounded-xl border-2 transition-all duration-200 ${
                  isActive
                    ? 'border-black bg-[var(--accent)] text-white shadow-sm'
                    : 'border-transparent text-white hover:text-white hover:bg-[var(--accent)] hover:border-black hover:-translate-y-0.5'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Zone 3: Primary actions (Theme Toggle, Search & Archive Directory Menu Trigger) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="btn-arch-secondary px-3 py-1.5 min-h-[40px] text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap group"
          >
            {theme === 'dark' ? (
              <>
                <Sun className="w-4 h-4 text-[var(--accent-bright)] group-hover:text-white transition-colors shrink-0" />
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-[var(--accent-bright)] group-hover:text-white transition-colors shrink-0" />
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleToggleQuickSearch}
            aria-label="Search Philippine Architecture Archive"
            aria-expanded={quickSearchOpen}
            title="Search Archive"
            className={`${
              quickSearchOpen ? 'btn-arch-primary' : 'btn-arch-secondary'
            } px-3 py-1.5 min-h-[40px] text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap group`}
          >
            <Search className="w-4 h-4 text-[var(--accent-bright)] group-hover:text-white transition-colors shrink-0" />
            <span className="hidden sm:inline">Search</span>
          </button>

          <button
            type="button"
            onClick={handleToggleMenu}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="archive-navigation-drawer"
            title={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className={`${
              mobileMenuOpen ? 'btn-arch-primary' : 'btn-arch-secondary'
            } px-2.5 py-1.5 min-w-[42px] min-h-[40px] text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap group`}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-white transition-transform duration-200 shrink-0" />
            ) : (
              <Menu className="w-5 h-5 text-[var(--accent-bright)] group-hover:text-white transition-colors shrink-0" />
            )}
          </button>
        </div>
      </div>

      {/* Expandable Search Bar */}
      {quickSearchOpen && (
        <div className="border-t-2 border-[var(--border-strong)] bg-[var(--paper-subtle)] px-4 sm:px-6 lg:px-8 py-3.5 shadow-xl">
          <form
            onSubmit={handleQuickSearchSubmit}
            className="max-w-[1440px] mx-auto flex flex-col sm:flex-row gap-2.5"
          >
            <label htmlFor="navbar-quick-search" className="sr-only">
              Search buildings, architects, styles, or Philippine regions
            </label>
            <input
              id="navbar-quick-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Philippine buildings, Filipino architects, cities, or styles..."
              autoFocus
              className="flex-1 bg-[var(--surface-card)] border-2 border-[var(--border-strong)] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] min-h-[44px]"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="btn-arch-primary flex-1 sm:flex-initial px-5 py-2.5 text-xs font-mono-tech tracking-wider uppercase whitespace-nowrap min-h-[44px]"
              >
                <span>Search Archive</span>
                <span className="btn-arrow" aria-hidden="true">-&gt;</span>
              </button>
              <button
                type="button"
                onClick={() => setQuickSearchOpen(false)}
                className="btn-arch-secondary px-4 py-2.5 text-xs font-mono-tech uppercase tracking-wider whitespace-nowrap min-h-[44px]"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Universal Archive Navigation Drawer (Works on Desktop, Tablet & Mobile) */}
      {mobileMenuOpen && (
        <nav
          id="archive-navigation-drawer"
          aria-label="Archive Directory Navigation"
          className="border-t-2 border-[var(--border-strong)] bg-[var(--paper-subtle)] px-4 sm:px-6 lg:px-8 py-5 shadow-2xl"
        >
          <div className="max-w-[1440px] mx-auto space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--line)] pb-2.5">
              <span className="font-mono-tech text-xs uppercase tracking-widest text-[var(--accent-bright)] font-bold">
                ARCHI—PH · ARCHIVE DIRECTORY INDEX
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-arch-secondary px-3 py-1 text-xs font-mono-tech uppercase tracking-wider"
              >
                <span>Close</span>
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-4 py-3 min-h-[54px] rounded-xl border-2 transition-all duration-200 ${
                      isActive
                        ? 'bg-[var(--accent)] border-black text-white shadow-sm'
                        : 'bg-[var(--surface-card)] border-[var(--border-strong)] text-white hover:bg-[var(--accent)] hover:border-black hover:-translate-y-0.5'
                    }`
                  }
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-tech text-[11px] text-[var(--accent-bright)]">
                        {item.code}
                      </span>
                      <span className="text-sm font-bold">{item.label}</span>
                    </div>
                    <p className="text-xs text-[var(--muted)]">{item.subtitle}</p>
                  </div>
                  <span className="font-mono-tech text-xs shrink-0">-&gt;</span>
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
