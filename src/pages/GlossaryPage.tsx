import React from 'react';
import Glossary from '../components/Glossary';

const GlossaryPage: React.FC = () => {
  return (
    <div className="bg-stone-900 text-white py-16 min-h-screen">
      <div className="text-center mb-16 px-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 mb-2 block">Язык революции</span>
        <h2 className="text-4xl md:text-5xl font-bold serif mb-4">Словарь терминов</h2>
        <p className="text-stone-400 max-w-2xl mx-auto">От "Временного правительства" до "ЧК". Краткий путеводитель по политическому лексикону 1917 года.</p>
      </div>
      <Glossary />
    </div>
  );
};

export default GlossaryPage;
