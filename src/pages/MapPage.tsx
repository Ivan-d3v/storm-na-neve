import React, { useState, useMemo } from 'react';
import { HISTORICAL_EVENTS } from '../constants';
import RealMap from '../components/RealMap';
import EventPanel from '../components/EventPanel';
import Timeline from '../components/Timeline';
import { Info, X, Maximize, Minimize } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useFocusMode } from '../components/Layout';

const MapPage: React.FC = () => {
  const [activeEventId, setActiveEventId] = useState(HISTORICAL_EVENTS[0].id);
  const [isMobileInfoOpen, setIsMobileInfoOpen] = useState(false);
  const { isFocusMode, toggleFocusMode } = useFocusMode();

  const currentEvent = useMemo(() => 
    HISTORICAL_EVENTS.find(e => e.id === activeEventId) || HISTORICAL_EVENTS[0], 
  [activeEventId]);

  return (
    <div className={`bg-white ${isFocusMode ? 'h-screen w-screen overflow-hidden' : ''}`}>
      <section className={`relative flex flex-col items-center ${isFocusMode ? 'h-full w-full' : 'px-4 md:px-8 py-12 md:py-16'}`}>
        {!isFocusMode && (
          <div className="text-center mb-12">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-700 mb-2 block">Интерактивная хроника</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 serif mb-4">Карта великих потрясений</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Исследуйте ключевые точки города, где решалась судьба империи. Переключайте даты на временной шкале, чтобы увидеть движение истории.</p>
          </div>
        )}

        <div className={`w-full relative overflow-hidden bg-stone-100 ${isFocusMode ? 'h-full rounded-none' : 'max-w-7xl h-[650px] md:h-[750px] rounded-3xl border border-stone-200 shadow-2xl'}`}>
          <div className="absolute inset-0 z-0">
            <RealMap markers={currentEvent.locations} />
          </div>

          {/* Focus Mode Toggle */}
          <button
            onClick={toggleFocusMode}
            className="absolute top-4 left-4 z-30 p-3 bg-white/90 backdrop-blur-md rounded-full border border-stone-200 shadow-lg text-slate-600 hover:text-red-700 hover:bg-red-50 transition-colors"
            title={isFocusMode ? "Выйти из режима фокусировки" : "Режим фокусировки"}
          >
            {isFocusMode ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>

          {/* Mobile Info Toggle */}
          <button 
            onClick={() => setIsMobileInfoOpen(true)}
            className="lg:hidden absolute top-4 right-4 z-30 p-3 bg-white/90 backdrop-blur-md rounded-full border border-stone-200 shadow-lg text-red-700 hover:bg-red-50 transition-colors"
          >
            <Info size={24} />
          </button>

          {/* Right Floating Panel: Event Information (Desktop) */}
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
                onSelect={(id) => {
                  setActiveEventId(id);
                }} 
                isOverlay
              />
            </div>
          </div>

          {/* Mobile Bottom Sheet / Drawer */}
          <AnimatePresence>
            {isMobileInfoOpen && (
              <motion.div
                key="mobile-info-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileInfoOpen(false)}
                className="lg:hidden absolute inset-0 bg-black/40 backdrop-blur-sm z-40"
              />
            )}
            {isMobileInfoOpen && (
              <motion.div 
                key="mobile-info-drawer"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="lg:hidden absolute bottom-0 left-0 right-0 z-50 bg-white rounded-t-[2.5rem] shadow-2xl border-t border-stone-200 max-h-[85vh] overflow-y-auto"
              >
                <div className="sticky top-0 bg-white/80 backdrop-blur-md px-8 py-4 flex justify-between items-center border-b border-stone-100 z-10">
                  <div className="w-12 h-1.5 bg-stone-200 rounded-full absolute left-1/2 -translate-x-1/2 top-2" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Детали события</span>
                  <button 
                    onClick={() => setIsMobileInfoOpen(false)}
                    className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                  >
                    <X size={20} className="text-slate-400" />
                  </button>
                </div>
                <div className="p-8">
                  <EventPanel event={currentEvent} isCompact />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default MapPage;
