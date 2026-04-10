import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, BookOpen } from 'lucide-react';

const BOOKS = [
  {
    title: 'Ленин',
    author: 'Данилкин Л. А.',
    cover: 'https://storage.gvardiya.ru/files/bookcovers/28/a2/18/16923259607985_m.png',
    link: 'https://gvardiya.ru/books/zhizn-zamechatelnyh-lyudey/lenin-1692'
  },
  {
    title: 'Николай II',
    author: 'Фирсов С. Л.',
    cover: 'https://storage.gvardiya.ru/files/bookcovers/ac/26/fd/9463129090911_l.jpg',
    link: 'https://gvardiya.ru/books/zhizn-zamechatelnyh-lyudey/nikolay-nbsp-ii'
  },
  {
    title: 'Керенский',
    author: 'Федюк В. П.',
    cover: 'https://storage.gvardiya.ru/files/bookcovers/3d/24/e3/290374061977_m.png',
    link: 'https://gvardiya.ru/books/zhizn-zamechatelnyh-lyudey/kerenskiy'
  },
  {
    title: 'Лев Троцкий',
    author: 'Чернявский Г. И.',
    cover: 'https://storage.gvardiya.ru/files/bookcovers/f3/79/a5/460682585655_l.jpg',
    link: 'https://gvardiya.ru/books/zhizn-zamechatelnyh-lyudey/lev-trockiy'
  },
  {
    title: 'Дзержинский',
    author: 'Кредов С. А.',
    cover: 'https://storage.gvardiya.ru/files/bookcovers/9d/3c/9e/17871630641392_m.png',
    link: 'https://gvardiya.ru/books/zhizn-zamechatelnyh-lyudey/dzerzhinskiy-1787'
  }
];

const JZLBooks: React.FC = () => {
  return (
    <section className="py-24 px-8 bg-stone-50 border-y border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold serif text-slate-900 mb-2">Библиотека ЖЗЛ</h2>
            <p className="text-slate-500 max-w-xl">
              Подборка фундаментальных биографий ключевых фигур 1917 года из знаменитой книжной серии.
            </p>
          </div>
          <a 
            href="https://gvardiya.ru/books/zhizn-zamechatelnyh-lyudey" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white border border-stone-200 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-600 hover:text-red-700 hover:border-red-200 transition-all shadow-sm flex items-center gap-2"
          >
            Все книги серии <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {BOOKS.map((book, idx) => (
            <motion.a
              key={book.title}
              href={book.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[2/3] mb-4 overflow-hidden rounded-xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={book.cover} 
                  alt={book.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="px-4 py-2 bg-white text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Подробнее
                  </span>
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-red-700 transition-colors serif">{book.title}</h3>
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{book.author}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JZLBooks;
