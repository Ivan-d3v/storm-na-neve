import React from 'react';
import { motion } from 'motion/react';
import { Users, Shield, Swords, Anchor, Crosshair } from 'lucide-react';

const ForcesInfographic: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="text-center mb-16">
        <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-xs mb-2 block">Инфографика</span>
        <h2 className="text-3xl md:text-5xl font-bold serif text-slate-900 mb-4">Силы сторон в Октябре 1917</h2>
        <p className="text-slate-500 max-w-2xl mx-auto serif">
          Соотношение сил накануне вооруженного восстания в Петрограде. Цифры отражают примерное количество вооруженных сторонников, готовых к активным действиям.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
        {/* Bolsheviks Side */}
        <div className="relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-700 shrink-0">
              <Users size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold serif text-slate-900">Военно-революционный комитет</h3>
              <p className="text-sm font-bold text-red-700 uppercase tracking-widest">Большевики и левые эсеры</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Stat 1 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-slate-400" />
                  <span className="font-bold text-slate-700">Петроградский гарнизон</span>
                </div>
                <span className="text-2xl font-bold font-mono text-slate-900">~216 000</span>
              </div>
              <div className="h-4 bg-stone-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-red-700"
                />
              </div>
              <p className="text-xs text-slate-500 mt-2 serif">Общая численность солдат в столице и пригородах к октябрю 1917 г. Подавляющее большинство поддерживало Петросовет.</p>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2">
                  <Anchor size={16} className="text-slate-400" />
                  <span className="font-bold text-slate-700">Балтийский флот</span>
                </div>
                <span className="text-2xl font-bold font-mono text-slate-900">~80 000</span>
              </div>
              <div className="h-4 bg-stone-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '55%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-red-600"
                />
              </div>
              <p className="text-xs text-slate-500 mt-2 serif">Матросы Кронштадта, Гельсингфорса и Ревеля — наиболее радикальная и боеспособная сила.</p>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2">
                  <Swords size={16} className="text-slate-400" />
                  <span className="font-bold text-slate-700">Красная гвардия</span>
                </div>
                <span className="text-2xl font-bold font-mono text-slate-900">~30 000</span>
              </div>
              <div className="h-4 bg-stone-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '20%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                  className="h-full bg-red-500"
                />
              </div>
              <p className="text-xs text-slate-500 mt-2 serif">Вооруженные отряды рабочих петроградских заводов.</p>
            </div>
          </div>
        </div>

        {/* Provisional Government Side */}
        <div className="relative">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 shrink-0">
              <Crosshair size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold serif text-slate-900">Временное правительство</h3>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">Защитники Зимнего дворца</p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Stat 1 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-slate-400" />
                  <span className="font-bold text-slate-700">Активные защитники</span>
                </div>
                <span className="text-2xl font-bold font-mono text-slate-900">~8 000</span>
              </div>
              <div className="h-4 bg-stone-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '5%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-slate-700"
                />
              </div>
              <p className="text-xs text-slate-500 mt-2 serif">Общее число активных сторонников Временного правительства в гарнизоне (юнкера, часть казаков и офицеров).</p>
            </div>

            {/* Stat 2 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2">
                  <Swords size={16} className="text-slate-400" />
                  <span className="font-bold text-slate-700">Казаки</span>
                </div>
                <span className="text-2xl font-bold font-mono text-slate-900">~3 300</span>
              </div>
              <div className="h-4 bg-stone-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '2%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                  className="h-full bg-slate-600"
                />
              </div>
              <p className="text-xs text-slate-500 mt-2 serif">Общая численность казачьих частей. В решающий момент многие заявили о нейтралитете и отказались выступать.</p>
            </div>

            {/* Stat 3 */}
            <div>
              <div className="flex justify-between items-end mb-2">
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-slate-400" />
                  <span className="font-bold text-slate-700">Женский батальон смерти</span>
                </div>
                <span className="text-2xl font-bold font-mono text-slate-900">~200</span>
              </div>
              <div className="h-4 bg-stone-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '1%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                  className="h-full bg-slate-500"
                />
              </div>
              <p className="text-xs text-slate-500 mt-2 serif">Ударницы 1-го Петроградского женского батальона под командованием Марии Бочкаревой.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion Banner */}
      <div className="mt-16 bg-stone-100 rounded-3xl p-8 border border-stone-200 flex flex-col md:flex-row items-center gap-8">
        <p className="text-slate-600 serif text-lg md:text-xl leading-relaxed flex-1">
          К 25 октября Временное правительство оказалось практически в полной изоляции. Огромный численный перевес Военно-революционного комитета позволил большевикам взять под контроль ключевые точки Петрограда почти без кровопролития.
        </p>
      </div>
    </div>
  );
};

export default ForcesInfographic;
