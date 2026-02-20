
import React, { useState, useMemo } from 'react';
import { HISTORICAL_EVENTS } from './constants';
import Timeline from './components/Timeline';
import RealMap from './components/RealMap';
import EventPanel from './components/EventPanel';
import HistoricalFigures from './components/HistoricalFigures';
import StatsSection from './components/StatsSection';
import Glossary from './components/Glossary';
import { Search, Menu, ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState(HISTORICAL_EVENTS[0].id);

  const currentEvent = useMemo(() => 
    HISTORICAL_EVENTS.find(e => e.id === activeEventId) || HISTORICAL_EVENTS[0], 
  [activeEventId]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fdfdfc] selection:bg-red-100 selection:text-red-900 overflow-x-hidden">
      {/* Hero Header */}
      <header className="relative w-full h-[500px] flex flex-col items-center justify-center overflow-hidden border-b border-stone-300">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{ 
            backgroundImage: 'url("https://vseoplanete.ru/wp-content/uploads/2023/06/sportishmanevaitereoboi2.jpg")',
            filter: 'sepia(15%) contrast(105%) brightness(55%)'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-[#fdfdfc]"></div>

        {/* Header Content */}
        <div className="relative z-20 text-center px-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 md:w-24 bg-white/40"></span>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold text-white/90">Историко-просветительский атлас</p>
              <span className="h-px w-8 md:w-24 bg-white/40"></span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter serif uppercase drop-shadow-2xl mb-6">
              Шторм на Неве
            </h1>
            
            <div className="flex flex-col items-center gap-4">
              <div className="inline-block px-6 py-2 border border-white/30 rounded-full backdrop-blur-md bg-white/5">
                <span className="text-sm md:text-base font-semibold text-white uppercase tracking-[0.3em]">
                  Петроград • 1917
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* Navigation Overlay */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-stone-200 py-4 px-8 hidden md:flex justify-between items-center shadow-sm">
        <h2 className="text-lg font-bold serif uppercase tracking-widest text-slate-900">Шторм на Неве</h2>
        <nav className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <a href="#map" className="hover:text-red-700 transition-colors">Карта событий</a>
          <a href="#figures" className="hover:text-red-700 transition-colors">Личности</a>
          <a href="#stats" className="hover:text-red-700 transition-colors">Статистика</a>
          <a href="#glossary" className="hover:text-red-700 transition-colors">Словарь</a>
        </nav>
        <div className="flex gap-4">
           <Search size={18} className="text-slate-400 cursor-pointer hover:text-slate-900" />
           <Menu size={18} className="text-slate-400 cursor-pointer hover:text-slate-900" />
        </div>
      </div>

      {/* Section 1: Interactive Map */}
      <section id="map" className="relative px-4 md:px-8 py-12 md:py-20 flex flex-col items-center bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 serif mb-4">Хроника великих потрясений</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Исследуйте ключевые точки города, где решалась судьба империи. Переключайте даты на временной шкале, чтобы увидеть движение истории.</p>
        </div>

        <div className="w-full max-w-7xl h-[650px] relative rounded-3xl overflow-hidden border border-stone-200 shadow-2xl bg-stone-100">
          <div className="absolute inset-0 z-0">
            <RealMap markers={currentEvent.locations} />
          </div>

          {/* Right Floating Panel: Event Information */}
          <div className="absolute top-6 right-6 bottom-32 w-full max-w-sm md:max-w-md z-20 pointer-events-none hidden lg:block">
            <div className="h-full bg-white/95 backdrop-blur-lg p-10 rounded-3xl border border-stone-200 shadow-2xl pointer-events-auto overflow-y-auto custom-scrollbar transition-all duration-500">
              <EventPanel event={currentEvent} />
            </div>
          </div>

          {/* Bottom Floating Panel: Timeline */}
          <div className="absolute bottom-6 left-6 right-6 lg:right-[calc(112px+24rem)] z-30 lg:max-w-[calc(100%-28rem-48px)]">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-stone-200 shadow-xl p-2">
              <Timeline 
                events={HISTORICAL_EVENTS} 
                activeId={activeEventId} 
                onSelect={setActiveEventId} 
                isOverlay
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Historical Figures */}
      <section id="figures" className="py-20 bg-stone-50 border-y border-stone-200">
        <HistoricalFigures />
      </section>

      {/* Section 3: Statistics */}
      <section id="stats" className="py-20 bg-white">
        <StatsSection />
      </section>

      {/* Section 4: Glossary */}
      <section id="glossary" className="py-20 bg-stone-900 text-white">
        <Glossary />
      </section>

      {/* Footer */}
      <footer className="py-12 bg-stone-950 text-white/40 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold serif text-white mb-2 uppercase tracking-widest">Шторм на Неве</h3>
            <p className="text-xs">2026</p>
          </div>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">О проекте</a>
            <a href="#" className="hover:text-white transition-colors">Источники</a>
            <a href="#" className="hover:text-white transition-colors">Контакты</a>
          </div>
        </div>
      </footer>

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
    </div>
  );
};

export default App;
