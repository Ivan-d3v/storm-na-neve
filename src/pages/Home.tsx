import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Map, Users, Palette, HelpCircle, BookOpen, BarChart3, GraduationCap, ChevronDown } from 'lucide-react';
import JZLBooks from '../components/JZLBooks';

const Home: React.FC = () => {
  const modules = [
    {
      id: 'map',
      title: 'Интерактивная карта',
      description: 'Хронология событий в пространстве города. Детальный разбор движения войск и ключевых точек восстания.',
      icon: <Map className="w-8 h-8" />,
      href: '/map',
      color: 'bg-red-50 text-red-700 border-red-100',
      tag: 'География'
    },
    {
      id: 'figures',
      title: 'Галерея личностей',
      description: 'Биографии и роли ключевых участников. Анализ мотивации и влияния лидеров на ход истории.',
      icon: <Users className="w-8 h-8" />,
      href: '/figures',
      color: 'bg-stone-100 text-stone-700 border-stone-200',
      tag: 'Биографии'
    },
    {
      id: 'culture',
      title: 'Культурный код',
      description: 'Искусство, литература и кино эпохи. Демонстрация того, как революция трансформировала сознание через творчество.',
      icon: <Palette className="w-8 h-8" />,
      href: '/culture',
      color: 'bg-amber-50 text-amber-700 border-amber-100',
      tag: 'Искусство'
    },
    {
      id: 'myths',
      title: 'Мифы и реальность',
      description: 'Критический анализ популярных заблуждений. Навыки фактчекинга и работа с историческими источниками.',
      icon: <HelpCircle className="w-8 h-8" />,
      href: '/myths',
      color: 'bg-blue-50 text-blue-700 border-blue-100',
      tag: 'Критика'
    },
    {
      id: 'data',
      title: 'Данные и инфографика',
      description: 'Статистика и баланс сил. Наглядные данные для понимания численного превосходства и экономических предпосылок.',
      icon: <BarChart3 className="w-8 h-8" />,
      href: '/data',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
      tag: 'Аналитика'
    },
    {
      id: 'glossary',
      title: 'Словарь терминов',
      description: 'Понятийный аппарат эпохи. Быстрый доступ к определениям сложных политических и социальных терминов.',
      icon: <BookOpen className="w-8 h-8" />,
      href: '/glossary',
      color: 'bg-purple-50 text-purple-700 border-purple-100',
      tag: 'Терминология'
    }
  ];

  return (
    <div className="bg-[#fdfdfc] min-h-screen">
      {/* Hero Header */}
      <header className="relative w-full h-[600px] flex flex-col items-center justify-center overflow-hidden border-b border-stone-300">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
          style={{ 
            backgroundImage: 'url("https://peterburg.guide/wp-content/uploads/2019/11/6255925593-1024x614.jpg")',
            filter: 'sepia(15%) contrast(105%) brightness(55%)'
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/50 via-transparent to-[#fdfdfc]"></div>

        {/* Header Content */}
        <div className="relative z-20 text-center px-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-px w-8 md:w-24 bg-white/40"></span>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] font-bold text-white/90">Историко-просветительский атлас</p>
              <span className="h-px w-8 md:w-24 bg-white/40"></span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-bold text-white tracking-tighter serif uppercase drop-shadow-2xl mb-6">
              Шторм на Неве
            </h1>
            
            <div className="flex flex-col items-center gap-8">
              <div className="inline-block px-6 py-2 border border-white/30 rounded-full backdrop-blur-md bg-white/5">
                <span className="text-sm md:text-base font-semibold text-white uppercase tracking-[0.3em] serif">
                  Петроград • 1917
                </span>
              </div>
              <Link 
                to="/map" 
                className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-xl"
              >
                Начать исследование
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce text-white/50">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* Intro Section */}
      <section className="py-20 px-8 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 bg-red-700 text-white rounded-lg">
              <GraduationCap size={20} />
            </div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-red-700">Цифровой атлас</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold serif text-slate-900 mb-6">Интерактивная среда изучения истории</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Исследуйте ключевые события, личности и культурный контекст 1917 года через интерактивные модули, 
            архивные данные и аналитические материалы. Каждый раздел оптимизирован для глубокого погружения в тему.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section id="modules" className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-bold serif text-slate-900 mb-2">Разделы атласа</h2>
            <p className="text-slate-500">Выберите тему для глубокого погружения в историю</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, idx) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Link 
                to={module.href}
                className="group block h-full p-8 bg-white border border-stone-200 rounded-3xl hover:border-red-300 hover:shadow-2xl hover:shadow-red-900/5 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`inline-flex p-4 rounded-2xl mb-6 border ${module.color} transition-transform group-hover:scale-110 duration-500`}>
                  {module.icon}
                </div>
                
                <div className="mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-1 block">{module.tag}</span>
                  <h3 className="text-xl font-bold serif text-slate-900 group-hover:text-red-700 transition-colors">{module.title}</h3>
                </div>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {module.description}
                </p>
                
                <div className="flex items-center text-[10px] font-bold uppercase tracking-widest text-red-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  Перейти к модулю →
                </div>

                {/* Decorative background element */}
                <div className="absolute -bottom-4 -right-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
                  {React.cloneElement(module.icon as React.ReactElement, { size: 120 })}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <JZLBooks />

      {/* Interactive Quiz Promo */}
      <section className="py-20 px-8 bg-stone-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
          <div className="flex-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 mb-4 block">Интерактивный тест</span>
            <h2 className="text-4xl md:text-5xl font-bold serif mb-6">Кто вы в 1917 году?</h2>
            <p className="text-stone-400 text-lg mb-8 leading-relaxed">
              Пройдите ролевой тест, чтобы понять мотивы участников событий 
              и определить свою позицию в вихре революции через призму личного выбора.
            </p>
            <Link 
              to="/quiz" 
              className="inline-block px-10 py-5 bg-red-700 hover:bg-red-800 text-white font-bold uppercase tracking-widest text-xs transition-all shadow-xl"
            >
              Начать тест
            </Link>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 border-4 border-red-700/30 rounded-full flex items-center justify-center animate-pulse">
              <div className="w-48 h-48 border-4 border-red-700/50 rounded-full flex items-center justify-center">
                <HelpCircle size={80} className="text-red-700" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Background text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold serif text-white/[0.02] pointer-events-none whitespace-nowrap">
          QUIZ TEST QUIZ
        </div>
      </section>
    </div>
  );
};

export default Home;
