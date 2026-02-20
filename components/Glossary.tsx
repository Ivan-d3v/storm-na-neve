
import React from 'react';

const TERMS = [
  { term: 'Двоевластие', def: 'Система власти, сложившаяся после Февральской революции, при которой одновременно существовали Временное правительство и Советы рабочих и солдатских депутатов.' },
  { term: 'Петросовет', def: 'Представительный орган власти в Петрограде, созданный в первые дни революции. Обладал огромным влиянием на армию и рабочих.' },
  { term: 'Красная гвардия', def: 'Вооруженные отряды рабочих, создававшиеся для защиты революции и ставшие основной силой Октябрьского переворота.' },
  { term: 'Апрельские тезисы', def: 'Программа действий большевиков, предложенная Лениным, включавшая лозунг «Вся власть Советам!».' },
  { term: 'Манифест 17 октября', def: 'Документ 1905 года, даровавший гражданские свободы, на который ссылались в попытках спасти монархию в 1917-м.' },
  { term: 'Учредительное собрание', def: 'Выборный орган, который должен был определить будущее государственное устройство России после падения царизма.' }
];

const Glossary: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row gap-16">
        <div className="w-full md:w-1/3">
          <span className="text-red-600 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Терминология</span>
          <h2 className="text-4xl md:text-5xl font-bold serif mb-6">Словарь эпохи</h2>
          <p className="text-stone-400 text-lg font-light leading-relaxed">
            Понимать 1917 год — значит понимать язык, на котором говорил город. Эти слова гремели на митингах, печатались в листовках и меняли судьбы миллионов.
          </p>
        </div>
        
        <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {TERMS.map((item, idx) => (
            <div key={idx} className="border-l border-white/10 pl-6 group">
              <h3 className="text-xl font-bold serif text-red-500 mb-3 group-hover:text-red-400 transition-colors">{item.term}</h3>
              <p className="text-stone-400 text-sm leading-relaxed">{item.def}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Glossary;
