import React from 'react';
import RevolutionLegacy from '../components/RevolutionLegacy';

const CulturePage: React.FC = () => {
  return (
    <div className="bg-white py-16">
      <div className="text-center mb-16 px-8">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-700 mb-2 block">Эстетика перемен</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 serif mb-4">Культурное наследие</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">От авангарда до агитплаката. Как революция отразилась в искусстве, литературе и кинематографе своего времени.</p>
      </div>
      <RevolutionLegacy />
    </div>
  );
};

export default CulturePage;
