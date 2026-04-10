import React from 'react';
import { motion } from 'motion/react';
import { FileText, ScrollText, Landmark, Scale } from 'lucide-react';

const DocumentsPage: React.FC = () => {
  const documents = [
    {
      id: 'manifesto-abdication',
      title: 'Манифест об отречении Николая II',
      date: '2 (15) марта 1917 года',
      icon: <Landmark size={24} className="text-red-700" />,
      excerpt: '«...Признали Мы за благо отречься от Престола Государства Российского и сложить с Себя Верховную Власть.»',
      description: 'Исторический документ, подписанный императором Николаем II в Пскове под давлением генералитета и политиков. Отречение произошло в пользу младшего брата, великого князя Михаила Александровича, который на следующий день также отказался от престола до решения Учредительного собрания. Это событие де-факто завершило 300-летнее правление династии Романовых и превратило Россию в республику.',
      significance: 'Конец монархии в России.'
    },
    {
      id: 'order-no-1',
      title: 'Приказ № 1 Петроградского совета',
      date: '1 (14) марта 1917 года',
      icon: <ScrollText size={24} className="text-red-700" />,
      excerpt: '«Во всех политических выступлениях воинские части подчиняются Совету рабочих и солдатских депутатов и своим комитетам.»',
      description: 'Документ, изданный Петросоветом до официального формирования Временного правительства. Приказ демократизировал армию: отменял титулование офицеров, вводил выборные солдатские комитеты и передавал им контроль над оружием. Это привело к резкому падению дисциплины и разложению армии в условиях продолжающейся Первой мировой войны.',
      significance: 'Демократизация и последующий развал императорской армии.'
    },
    {
      id: 'decree-peace',
      title: 'Декрет о мире',
      date: '26 октября (8 ноября) 1917 года',
      icon: <Scale size={24} className="text-red-700" />,
      excerpt: '«Рабочее и Крестьянское правительство... предлагает всем воюющим народам и их правительствам начать немедленно переговоры о справедливом демократическом мире.»',
      description: 'Первый декрет Советской власти, написанный В.И. Лениным и принятый на II Всероссийском съезде Советов. Документ призывал к немедленному миру «без аннексий и контрибуций» и отменял тайную дипломатию. Декрет стал мощным пропагандистским инструментом большевиков, обеспечившим им поддержку уставшей от войны армии.',
      significance: 'Выход России из Первой мировой войны (позже закрепленный Брестским миром).'
    },
    {
      id: 'decree-land',
      title: 'Декрет о земле',
      date: '26 октября (8 ноября) 1917 года',
      icon: <FileText size={24} className="text-red-700" />,
      excerpt: '«Помещичья собственность на землю отменяется немедленно без всякого выкупа.»',
      description: 'Второй важнейший декрет новой власти. В его основу легли 242 крестьянских наказа. Декрет ликвидировал частную собственность на землю, передавая её в всенародное достояние (национализация) для последующего уравнительного распределения между крестьянами. Это решение привлекло на сторону большевиков многомиллионное крестьянство.',
      significance: 'Ликвидация помещичьего землевладения и решение аграрного вопроса.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fdfdfc] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Архив</span>
          <h1 className="text-5xl md:text-6xl font-bold serif text-slate-900 mb-6 tracking-tight">Документы эпохи</h1>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 serif max-w-2xl mx-auto leading-relaxed">
            Тексты, которые изменили ход истории. Декреты, приказы и манифесты, определившие судьбу миллионов людей и разрушившие многовековую империю.
          </p>
        </motion.div>

        <div className="space-y-12">
          {documents.map((doc, index) => (
            <motion.div 
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-xl shadow-black/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-stone-50 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:bg-red-50/50 transition-colors duration-500 z-0"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-stone-100 rounded-2xl group-hover:bg-red-100 transition-colors">
                    {doc.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold serif text-slate-900">{doc.title}</h2>
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{doc.date}</span>
                  </div>
                </div>

                <blockquote className="border-l-4 border-red-700 pl-6 py-2 mb-8">
                  <p className="text-xl serif italic text-slate-700 leading-relaxed">
                    {doc.excerpt}
                  </p>
                </blockquote>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">Исторический контекст</h3>
                    <p className="text-sm text-slate-600 serif leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                  <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 h-fit">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-red-700 mb-2">Значение</h3>
                    <p className="text-sm font-medium text-slate-800">
                      {doc.significance}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocumentsPage;
