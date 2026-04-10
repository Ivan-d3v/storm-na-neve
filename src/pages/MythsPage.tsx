import React from 'react';
import RevolutionMyths from '../components/RevolutionMyths';

const MythsPage: React.FC = () => {
  return (
    <div className="bg-stone-100 py-16">
      <div className="text-center mb-16 px-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-700 mb-2 block">Правда и вымысел</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 serif mb-4">Мифы и реальность</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Разбираем популярные заблуждения об Октябрьской революции. Что было на самом деле, а что — плод позднейшей пропаганды.</p>
      </div>
      <RevolutionMyths />
    </div>
  );
};

export default MythsPage;
