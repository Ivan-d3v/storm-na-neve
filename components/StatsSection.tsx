
import React from 'react';

const STATS = [
  { label: 'Население Петрограда', value: '2.4 млн', desc: 'Четвертый по величине город Европы на тот момент.' },
  { label: 'Рабочие заводов', value: '400 тыс.', desc: 'Самый радикальный и организованный слой населения.' },
  { label: 'Паек хлеба в феврале', value: '450 г', desc: 'Норма для рабочих, стремительно сокращавшаяся к концу года.' },
  { label: 'Участники стачек', value: '90%', desc: 'Доля промышленных предприятий, охваченных забастовками в февралю.' },
];

const StatsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="bg-stone-100 rounded-[3rem] p-12 md:p-20 overflow-hidden relative border border-stone-200 shadow-inner">
        {/* Background Graphic */}
        <div className="absolute -right-20 -top-20 opacity-[0.03] select-none pointer-events-none transform rotate-12">
          <span className="text-[300px] font-bold serif">1917</span>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-16">
            <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-xs mb-2 block">Город в цифрах</span>
            <h2 className="text-4xl font-bold serif text-slate-900 mb-4">Петроград: цифры эпохи</h2>
            <div className="h-1 w-20 bg-red-700 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <div className="text-5xl font-bold text-slate-900 serif mb-4 tracking-tighter">{stat.value}</div>
                <h4 className="text-xs font-bold uppercase tracking-widest text-red-800 mb-3">{stat.label}</h4>
                <p className="text-slate-500 text-sm leading-relaxed italic">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
