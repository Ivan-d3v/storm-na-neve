import React from 'react';
import { motion } from 'motion/react';
import { Book, Globe, ExternalLink, Bookmark } from 'lucide-react';

const SourcesPage: React.FC = () => {
  const books = [
    {
      title: '«Товарищ Керенский»: антимонархическая революция и формирование культа «вождя народа» (март – июнь 1917 года)',
      author: 'Борис Колоницкий',
      description: 'Новаторское исследование, показывающее, что культ вождя народа зародился не в советское время, а весной и летом 1917 года. Александр Керенский стал первым носителем этого культа, соединив в своем образе революционные и патриотические традиции.',
      year: '2017'
    },
    {
      title: '#1917: Семнадцать очерков по истории Российской революции',
      author: 'Борис Колоницкий',
      description: 'Сборник очерков, исследующий неочевидные аспекты революции: влияние слухов, конспирологии, шпиономании, а также формирование культа политических вождей и десакрализацию монархии.',
      year: '2017'
    },
    {
      title: '«Петроградский гарнизон в борьбе за победу Октября»',
      author: 'Геннадий Соболев',
      description: 'Детальное исследование роли солдатских масс столицы в 1917 году. Книга содержит точные статистические данные о численности и составе гарнизона, а также описывает процесс перехода армии на сторону большевиков.',
      year: '1985'
    }
  ];

  const websites: any[] = [];

  return (
    <div className="min-h-screen bg-[#fdfdfc] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Библиография</span>
          <h1 className="text-5xl md:text-6xl font-bold serif text-slate-900 mb-6 tracking-tight">Источники</h1>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 serif max-w-2xl mx-auto leading-relaxed">
            Список рекомендуемой литературы и проверенных цифровых ресурсов для глубокого изучения истории Великой российской революции.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16">
          {/* Books Section */}
          <section>
            <div className="flex items-center gap-4 mb-10 border-b border-stone-200 pb-4">
              <Book className="text-red-700" size={24} />
              <h2 className="text-2xl font-bold serif text-slate-900 uppercase tracking-widest">Книги</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {books.map((book, index) => (
                <motion.div 
                  key={book.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group p-6 bg-white border border-stone-200 rounded-2xl hover:shadow-xl hover:shadow-black/5 transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Bookmark className="text-stone-300 group-hover:text-red-700 transition-colors" size={20} />
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{book.year}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-red-700 transition-colors">{book.title}</h3>
                  <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-4">{book.author}</p>
                  <p className="text-sm text-slate-500 serif leading-relaxed">{book.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Websites Section */}
          {websites.length > 0 && (
            <section>
              <div className="flex items-center gap-4 mb-10 border-b border-stone-200 pb-4">
                <Globe className="text-red-700" size={24} />
                <h2 className="text-2xl font-bold serif text-slate-900 uppercase tracking-widest">Веб-ресурсы</h2>
              </div>
              <div className="space-y-4">
                {websites.map((site, index) => (
                  <motion.a 
                    key={site.name}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white border border-stone-200 rounded-2xl hover:border-red-200 hover:bg-red-50/30 transition-all group"
                  >
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-red-700 transition-colors mb-1">{site.name}</h3>
                      <p className="text-sm text-slate-500 serif">{site.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-red-700 font-bold uppercase tracking-widest text-[10px]">
                      Перейти <ExternalLink size={14} />
                    </div>
                  </motion.a>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default SourcesPage;
