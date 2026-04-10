import React from 'react';
import HistoricalFigures from '../components/HistoricalFigures';

const FiguresPage: React.FC = () => {
  return (
    <div className="bg-stone-50 py-16">
      <div className="text-center mb-16 px-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-700 mb-2 block">Архитекторы революции</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 serif mb-4">Личности и судьбы</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Познакомьтесь с ключевыми фигурами 1917 года. Их идеи, поступки и ошибки определили облик будущего столетия.</p>
      </div>
      <HistoricalFigures />
    </div>
  );
};

export default FiguresPage;
