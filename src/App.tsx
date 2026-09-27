import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WelcomeModal } from './components/WelcomeModal';
import { Home } from './pages/Home';
import { Explore } from './pages/Explore';
import { BuildingDetail } from './pages/BuildingDetail';
import { Architects } from './pages/Architects';
import { ArchitectDetail } from './pages/ArchitectDetail';
import { Styles } from './pages/Styles';
import { StyleDetail } from './pages/StyleDetail';
import { MapPage } from './pages/MapPage';
import { Timeline } from './pages/Timeline';
import { Gallery } from './pages/Gallery';
import { About } from './pages/About';
import { Sources } from './pages/Sources';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [introModalOpen, setIntroModalOpen] = useState(true);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTopOnRouteChange />
        <WelcomeModal
          isOpen={introModalOpen}
          onClose={() => setIntroModalOpen(false)}
        />
        <div className="min-h-screen flex flex-col bg-[var(--paper)] text-[var(--ink)] transition-colors duration-300">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/buildings/:id" element={<BuildingDetail />} />
              <Route path="/architects" element={<Architects />} />
              <Route path="/architects/:id" element={<ArchitectDetail />} />
              <Route path="/styles" element={<Styles />} />
              <Route path="/styles/:id" element={<StyleDetail />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/sources" element={<Sources />} />
              <Route path="*" element={<Explore />} />
            </Routes>
          </main>
          <Footer onOpenIntro={() => setIntroModalOpen(true)} />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}
