import React, { useState, createContext, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Maximize, Minimize, Home, Map, Users, Palette, MoreHorizontal, HelpCircle, BarChart3, BookOpen, Library, FileText, Mic, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SearchModal from './SearchModal';

interface FocusModeContextType {
  isFocusMode: boolean;
  toggleFocusMode: () => void;
}

export const FocusModeContext = createContext<FocusModeContextType>({
  isFocusMode: false,
  toggleFocusMode: () => {},
});

export const useFocusMode = () => useContext(FocusModeContext);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMoreMenuOpen, setIsMoreMenuOpen] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const toggleFocusMode = () => setIsFocusMode(!isFocusMode);

  const primaryLinks = [
    { name: 'Главная', href: '/', icon: <Home size={20} /> },
    { name: 'Карта', href: '/map', icon: <Map size={20} /> },
    { name: 'Личности', href: '/figures', icon: <Users size={20} /> },
    { name: 'Культура', href: '/culture', icon: <Palette size={20} /> },
  ];

  const secondaryLinks = [
    { name: 'Документы', href: '/documents', icon: <FileText size={18} /> },
    { name: 'Голоса', href: '/voices', icon: <Mic size={18} /> },
    { name: 'Сквозь время', href: '/places', icon: <MapPin size={18} /> },
    { name: 'Мифы', href: '/myths', icon: <HelpCircle size={18} /> },
    { name: 'Данные', href: '/data', icon: <BarChart3 size={18} /> },
    { name: 'Словарь', href: '/glossary', icon: <BookOpen size={18} /> },
    { name: 'Источники', href: '/sources', icon: <Library size={18} /> },
  ];

  const allLinks = [...primaryLinks, ...secondaryLinks];

  const isActive = (path: string) => location.pathname === path;

  return (
    <FocusModeContext.Provider value={{ isFocusMode, toggleFocusMode }}>
      <div className="min-h-screen flex flex-col bg-[#fdfdfc] selection:bg-red-100 selection:text-red-900 overflow-x-hidden pb-20 md:pb-0">
        {/* Mobile Top Bar (Simplified) */}
        {!isFocusMode && (
          <div className="md:hidden sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-stone-200 py-3 px-4 flex flex-col gap-3 shadow-sm">
            <div className="flex justify-center items-center">
              <Link to="/" className="text-sm font-bold serif uppercase tracking-[0.3em] text-slate-900">Шторм на Неве</Link>
            </div>
            <button onClick={() => setIsSearchOpen(true)} className="flex items-center justify-center gap-2 w-full py-2.5 bg-stone-100 hover:bg-stone-200 rounded-xl text-slate-500 hover:text-slate-900 transition-colors border border-stone-200/80 shadow-inner">
              <Search size={16} />
              <span className="text-[10px] font-bold uppercase tracking-widest">Поиск по материалам</span>
            </button>
          </div>
        )}

        {/* Mobile Bottom Navigation */}
        {!isFocusMode && (
          <nav className="md:hidden fixed bottom-6 left-4 right-4 z-[60] flex items-center justify-around bg-white/90 backdrop-blur-xl border border-stone-200 rounded-2xl p-2 shadow-2xl shadow-black/10">
            {primaryLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                  isActive(link.href) ? 'text-red-700 bg-red-50' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {link.icon}
                <span className="text-[9px] font-bold uppercase tracking-widest">{link.name}</span>
              </Link>
            ))}
            <button 
              onClick={() => setIsMoreMenuOpen(!isMoreMenuOpen)}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-all ${
                isMoreMenuOpen ? 'text-red-700 bg-red-50' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <MoreHorizontal size={20} />
              <span className="text-[9px] font-bold uppercase tracking-widest">Ещё</span>
            </button>
          </nav>
        )}

        {/* Mobile "More" Menu Overlay */}
        <AnimatePresence>
          {isMoreMenuOpen && !isFocusMode && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMoreMenuOpen(false)}
                className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[55]"
              />
              <motion.div
                initial={{ y: 20, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                className="md:hidden fixed bottom-24 right-4 w-48 bg-white border border-stone-200 rounded-2xl shadow-2xl z-[60] overflow-hidden"
              >
                <div className="p-2 space-y-1">
                  {secondaryLinks.map((link) => (
                    <Link 
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsMoreMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                        isActive(link.href) ? 'bg-red-50 text-red-700' : 'text-slate-600 hover:bg-stone-50'
                      }`}
                    >
                      {link.icon}
                      <span className="text-xs font-bold uppercase tracking-widest">{link.name}</span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop Navigation (Refined Tabs) */}
        {!isFocusMode && (
          <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-stone-200 hidden md:block shadow-sm">
            <div className="py-4 px-8 flex justify-between items-center">
              <Link to="/" className="text-lg font-bold serif uppercase tracking-[0.3em] text-slate-900 group w-1/3">
                Шторм <span className="text-red-700 group-hover:text-red-800 transition-colors">на Неве</span>
              </Link>
              
              <div className="flex-1 flex justify-center">
                 <button onClick={() => setIsSearchOpen(true)} className="flex items-center justify-center gap-3 px-6 py-2.5 bg-stone-100 hover:bg-stone-200 text-slate-500 hover:text-slate-900 rounded-xl transition-colors border border-stone-200/80 w-full max-w-md shadow-inner">
                   <Search size={18} />
                   <span className="text-xs font-bold uppercase tracking-widest">Поиск по материалам...</span>
                 </button>
              </div>

              <div className="w-1/3"></div>
            </div>
            <div className="px-8 pb-3 flex justify-center">
              <nav className="flex bg-stone-100/50 p-1 rounded-xl border border-stone-200/50 flex-wrap justify-center">
                {allLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.href} 
                    className={`relative px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all rounded-lg ${
                      isActive(link.href) 
                        ? 'text-red-700' 
                        : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {isActive(link.href) && (
                      <motion.div 
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white shadow-sm border border-stone-200 rounded-lg z-0"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Search Modal */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        <main className={`flex-grow ${isFocusMode ? 'h-screen overflow-hidden' : ''}`}>
          {children}
        </main>

        {/* Footer */}
        {!isFocusMode && (
          <footer className="py-16 bg-stone-950 text-stone-400 border-t border-stone-900 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            <div className="max-w-7xl mx-auto px-8 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold serif text-white mb-4 uppercase tracking-widest">Шторм на Неве</h3>
                  <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                    Интерактивный исторический проект, посвященный событиям 1917 года в Петрограде.
                  </p>
                </div>
                <div className="flex flex-col items-center md:items-start gap-3 text-xs font-bold uppercase tracking-widest">
                  <h4 className="text-white/30 mb-2">Навигация</h4>
                  <Link to="/" className="hover:text-white transition-colors">Главная</Link>
                  <Link to="/map" className="hover:text-white transition-colors">Карта событий</Link>
                  <Link to="/figures" className="hover:text-white transition-colors">Исторические лица</Link>
                </div>
                <div className="flex flex-col items-center md:items-start gap-3 text-xs font-bold uppercase tracking-widest">
                  <h4 className="text-white/30 mb-2">Материалы</h4>
                  <Link to="/documents" className="hover:text-white transition-colors">Документы</Link>
                  <Link to="/glossary" className="hover:text-white transition-colors">Словарь</Link>
                  <Link to="/sources" className="hover:text-white transition-colors">Источники</Link>
                </div>
              </div>
              <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/30">
                <p>© 2026 Шторм на Неве</p>
                <p>Просветительский проект</p>
              </div>
            </div>
          </footer>
        )}
      </div>
    </FocusModeContext.Provider>
  );
};

export default Layout;
