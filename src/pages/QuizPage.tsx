import React from 'react';
import QuizBanner from '../components/QuizBanner';

const QuizPage: React.FC = () => {
  return (
    <div className="bg-stone-900 min-h-screen py-20 flex flex-col items-center justify-center">
      <div className="text-center mb-16 px-8 max-w-3xl">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-500 mb-2 block">Интерактивный тест</span>
        <h2 className="text-4xl md:text-5xl font-bold text-white serif mb-4">Кто вы в 1917 году?</h2>
        <p className="text-stone-400 max-w-2xl mx-auto leading-relaxed">
          Петроград кипит. На улицах митинги, в очередях — споры, в Смольном — заговоры. 
          Какую сторону выберете вы в этом водовороте истории?
        </p>
      </div>
      
      <div className="w-full max-w-4xl px-4">
        <QuizBanner />
      </div>
      
      <div className="mt-16 text-stone-500 text-[10px] font-bold uppercase tracking-widest text-center">
        Результат теста зависит от ваших ответов на 5 ключевых вопросов эпохи
      </div>
    </div>
  );
};

export default QuizPage;
