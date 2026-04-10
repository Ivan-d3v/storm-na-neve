import React from 'react';
import StatsSection from '../components/StatsSection';
import ForcesInfographic from '../components/ForcesInfographic';
import CrisisCharts from '../components/CrisisCharts';
import { useFocusMode } from '../components/Layout';
import { Maximize, Minimize } from 'lucide-react';

const DataPage: React.FC = () => {
  const { isFocusMode, toggleFocusMode } = useFocusMode();

  return (
    <div className={`bg-white ${isFocusMode ? 'h-screen w-screen overflow-hidden' : 'py-16'}`}>
      {!isFocusMode && (
        <div className="text-center mb-16 px-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-700 mb-2 block">Цифры и факты</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 serif mb-4">Статистика и силы сторон</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Демографические данные, экономические показатели и детальное сравнение вооруженных сил накануне восстания.</p>
        </div>
      )}
      
      <div className={`${isFocusMode ? 'h-full w-full' : 'max-w-7xl mx-auto space-y-24'}`}>
        {!isFocusMode && (
          <>
            <StatsSection />
            <CrisisCharts />
          </>
        )}
        
        <div className={`relative ${isFocusMode ? 'h-full w-full bg-white' : ''}`}>
          {/* Focus Mode Toggle */}
          <button
            onClick={toggleFocusMode}
            className={`absolute z-30 p-3 bg-white/90 backdrop-blur-md rounded-full border border-stone-200 shadow-lg text-slate-600 hover:text-red-700 hover:bg-red-50 transition-colors ${isFocusMode ? 'top-4 left-4' : 'top-4 right-4'}`}
            title={isFocusMode ? "Выйти из режима фокусировки" : "Режим фокусировки"}
          >
            {isFocusMode ? <Minimize size={20} /> : <Maximize size={20} />}
          </button>
          
          <div className={isFocusMode ? 'h-full w-full overflow-auto p-8' : ''}>
            <ForcesInfographic />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataPage;
