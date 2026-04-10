import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, User, Briefcase, Shield, Wheat } from 'lucide-react';

const VoicesPage: React.FC = () => {
  const [activeVoice, setActiveVoice] = useState<string>('worker');

  const voices = [
    {
      id: 'worker',
      role: 'Рабочий Путиловского завода',
      icon: <Briefcase size={24} />,
      color: 'bg-stone-800 text-white',
      hoverColor: 'hover:bg-stone-700',
      activeColor: 'bg-stone-900',
      quote: '«Мы устали от очередей за хлебом. Жена стоит с ночи, а утром возвращается с пустыми руками. На заводе платят копейки, а цены растут каждый день. Нам не нужна эта война, нам нужно кормить детей. Когда мы вышли на улицу, мы поняли, что нас много. Мы больше не будем терпеть.»',
      context: 'Рабочие Петрограда стали главной движущей силой Февральской революции. Их требования быстро переросли из экономических (хлеб, 8-часовой рабочий день) в политические («Долой самодержавие!»).',
      date: 'Февраль 1917'
    },
    {
      id: 'soldier',
      role: 'Солдат Петроградского гарнизона',
      icon: <Shield size={24} />,
      color: 'bg-emerald-800 text-white',
      hoverColor: 'hover:bg-emerald-700',
      activeColor: 'bg-emerald-900',
      quote: '«Нам приказали стрелять в толпу. В женщин, которые просили хлеба. Как я могу стрелять в своих? Мой брат гниет в окопах под Ригой, а я должен убивать голодных в столице? Нет, мы повернули штыки. Офицеры разбежались. Теперь мы сами решаем свою судьбу через солдатские комитеты.»',
      context: 'Переход 160-тысячного Петроградского гарнизона на сторону восставших решил исход Февральской революции. Солдаты, состоявшие в основном из мобилизованных крестьян, не желали отправляться на фронт.',
      date: 'Март 1917'
    },
    {
      id: 'aristocrat',
      role: 'Аристократ, бывший министр',
      icon: <User size={24} />,
      color: 'bg-indigo-900 text-white',
      hoverColor: 'hover:bg-indigo-800',
      activeColor: 'bg-indigo-950',
      quote: '«Всё рухнуло в одночасье. Чернь на улицах, пьяные матросы в Зимнем дворце. Империя, которую мы строили триста лет, рассыпалась как карточный домик. Мы думали, что это бунт, который можно подавить казаками, но казаки отказались повиноваться. Россия летит в пропасть.»',
      context: 'Высшие слои общества оказались не готовы к стремительному краху монархии. Многие из них позже составили костяк Белого движения или были вынуждены эмигрировать.',
      date: 'Октябрь 1917'
    },
    {
      id: 'peasant',
      role: 'Крестьянин Тамбовской губернии',
      icon: <Wheat size={24} />,
      color: 'bg-amber-800 text-white',
      hoverColor: 'hover:bg-amber-700',
      activeColor: 'bg-amber-900',
      quote: '«Земля — божья, а значит, наша, тех, кто на ней работает. Помещики веками пили нашу кровь. Теперь царя нет, и мы сами возьмем землю. Временные всё обещают Учредительное собрание, а большевики сказали: берите сейчас. Вот мы и берем.»',
      context: 'Аграрный вопрос был ключевым в России. Неспособность Временного правительства решить его привела к массовым самовольным захватам помещичьих земель и росту популярности большевиков.',
      date: 'Лето-Осень 1917'
    }
  ];

  const activeData = voices.find(v => v.id === activeVoice) || voices[0];

  return (
    <div className="min-h-screen bg-[#fdfdfc] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Перспективы</span>
          <h1 className="text-5xl md:text-6xl font-bold serif text-slate-900 mb-6 tracking-tight">Голоса революции</h1>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 serif max-w-2xl mx-auto leading-relaxed">
            История глазами тех, кто её пережил. Собирательные образы представителей разных сословий, основанные на реальных дневниках и воспоминаниях 1917 года.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Navigation */}
          <div className="space-y-4">
            {voices.map((voice) => (
              <button
                key={voice.id}
                onClick={() => setActiveVoice(voice.id)}
                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center gap-4 ${
                  activeVoice === voice.id 
                    ? `${voice.activeColor} text-white shadow-xl scale-105` 
                    : 'bg-white border border-stone-200 text-slate-600 hover:border-slate-300 hover:bg-stone-50'
                }`}
              >
                <div className={`p-3 rounded-xl ${activeVoice === voice.id ? 'bg-white/20' : 'bg-stone-100 text-slate-400'}`}>
                  {voice.icon}
                </div>
                <div>
                  <h3 className={`font-bold serif ${activeVoice === voice.id ? 'text-white' : 'text-slate-900'}`}>{voice.role}</h3>
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${activeVoice === voice.id ? 'text-white/60' : 'text-slate-400'}`}>{voice.date}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeVoice}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white border border-stone-200 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black/5 relative overflow-hidden"
              >
                <Quote size={120} className="absolute -top-6 -left-6 text-stone-100 -rotate-12 z-0" />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-2xl ${activeData.color}`}>
                      {activeData.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold serif text-slate-900">{activeData.role}</h2>
                      <span className="text-xs font-bold uppercase tracking-widest text-red-700">{activeData.date}</span>
                    </div>
                  </div>

                  <blockquote className="mb-10">
                    <p className="text-2xl md:text-3xl serif italic text-slate-800 leading-relaxed">
                      {activeData.quote}
                    </p>
                  </blockquote>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Историческая справка</h3>
                    <p className="text-sm text-slate-600 serif leading-relaxed">
                      {activeData.context}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoicesPage;
