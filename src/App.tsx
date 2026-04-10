import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Layout from './components/Layout';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import FiguresPage from './pages/FiguresPage';
import CulturePage from './pages/CulturePage';
import MythsPage from './pages/MythsPage';
import GlossaryPage from './pages/GlossaryPage';
import SourcesPage from './pages/SourcesPage';
import DocumentsPage from './pages/DocumentsPage';
import VoicesPage from './pages/VoicesPage';
import ThenAndNowPage from './pages/ThenAndNowPage';
import DataPage from './pages/DataPage';
import QuizPage from './pages/QuizPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageTransition key={location.pathname}><Home /></PageTransition>} />
        <Route path="/map" element={<PageTransition key={location.pathname}><MapPage /></PageTransition>} />
        <Route path="/figures" element={<PageTransition key={location.pathname}><FiguresPage /></PageTransition>} />
        <Route path="/culture" element={<PageTransition key={location.pathname}><CulturePage /></PageTransition>} />
        <Route path="/myths" element={<PageTransition key={location.pathname}><MythsPage /></PageTransition>} />
        <Route path="/data" element={<PageTransition key={location.pathname}><DataPage /></PageTransition>} />
        <Route path="/quiz" element={<PageTransition key={location.pathname}><QuizPage /></PageTransition>} />
        <Route path="/glossary" element={<PageTransition key={location.pathname}><GlossaryPage /></PageTransition>} />
        <Route path="/sources" element={<PageTransition key={location.pathname}><SourcesPage /></PageTransition>} />
        <Route path="/documents" element={<PageTransition key={location.pathname}><DocumentsPage /></PageTransition>} />
        <Route path="/voices" element={<PageTransition key={location.pathname}><VoicesPage /></PageTransition>} />
        <Route path="/places" element={<PageTransition key={location.pathname}><ThenAndNowPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
      <style dangerouslySetInnerHTML={{ __html: `
        html { scroll-behavior: smooth; }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}} />
    </Router>
  );
};

export default App;
