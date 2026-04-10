import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react';

type Role = 'bolshevik' | 'moderate' | 'officer' | 'anarchist' | 'citizen';

interface Answer {
  text: string;
  scores: Partial<Record<Role, number>>;
}

interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "Идет третий год тяжелой войны. Ваше отношение к происходящему на фронте?",
    answers: [
      { text: "Мир без аннексий и контрибуций! Штыки в землю, братаемся с немцами!", scores: { bolshevik: 2, anarchist: 1 } },
      { text: "Война до победного конца! За веру, царя (или республику) и отечество!", scores: { officer: 2 } },
      { text: "Нужно защищать революционное отечество, но искать пути к скорому миру.", scores: { moderate: 2 } },
      { text: "Лишь бы хлеб в лавках был и дрова на зиму, а там пусть сами разбираются.", scores: { citizen: 2 } }
    ]
  },
  {
    id: 2,
    text: "Как, по-вашему, следует решить земельный вопрос?",
    answers: [
      { text: "Земля — крестьянам! Немедленно забрать у помещиков без всякого выкупа!", scores: { bolshevik: 2, anarchist: 1 } },
      { text: "Ждать созыва Учредительного собрания, оно решит всё по закону.", scores: { moderate: 2, officer: 1 } },
      { text: "Священная частная собственность неприкосновенна. Бунтовщиков — пороть.", scores: { officer: 2 } },
      { text: "Забрать всё у всех и поделить поровну прямо сейчас! А лучше вообще отменить собственность.", scores: { anarchist: 2 } }
    ]
  },
  {
    id: 3,
    text: "Кому должна принадлежать власть в стране?",
    answers: [
      { text: "Вся власть Советам рабочих, солдатских и крестьянских депутатов!", scores: { bolshevik: 2 } },
      { text: "Законно избранному всенародным голосованием Учредительному собранию.", scores: { moderate: 2 } },
      { text: "Твердой руке. Нужен диктатор (например, Корнилов), который наведет порядок.", scores: { officer: 2 } },
      { text: "Никому! Власть развращает. Анархия — мать порядка!", scores: { anarchist: 2 } }
    ]
  },
  {
    id: 4,
    text: "На улицах Петрограда стреляют, толпы рабочих идут к центру. Ваши действия?",
    answers: [
      { text: "Беру винтовку, красный флаг и иду вместе со всеми брать Зимний!", scores: { bolshevik: 2, anarchist: 1 } },
      { text: "Надеваю форму, беру револьвер и иду защищать законное правительство.", scores: { officer: 2 } },
      { text: "Спешу в Думу или Совет, чтобы выступить с речью о необходимости компромисса.", scores: { moderate: 2 } },
      { text: "Запираю двери, зашториваю окна и молюсь, чтобы в квартиру не вломились.", scores: { citizen: 2 } }
    ]
  },
  {
    id: 5,
    text: "Ваше отношение к банкам, заводам и крупному капиталу?",
    answers: [
      { text: "Национализировать! Ввести жесткий рабочий контроль на производстве.", scores: { bolshevik: 2 } },
      { text: "Постепенные реформы, прогрессивный налог, защита прав профсоюзов.", scores: { moderate: 2 } },
      { text: "Это основа процветания государства. Фабрикантов нужно защищать от произвола толпы.", scores: { officer: 2 } },
      { text: "Экспроприация экспроприаторов! Грабь награбленное!", scores: { anarchist: 2, bolshevik: 1 } }
    ]
  }
];

const RESULTS: Record<Role, { title: string; desc: string; color: string; bg: string }> = {
  bolshevik: {
    title: "Радикальный революционер (Большевик)",
    desc: "Вы готовы разрушить старый мир до основания. Ваша цель — диктатура пролетариата, мировая революция и железная дисциплина. Вы не боитесь крови ради светлого будущего.",
    color: "text-red-700",
    bg: "bg-red-50 border-red-200"
  },
  moderate: {
    title: "Умеренный социалист (Меньшевик / Эсер)",
    desc: "Вы верите в демократию, законность и Учредительное собрание. Вы против крайностей, террора и диктатуры. Ваша трагедия в том, что в эпоху бурь голос разума часто не слышат.",
    color: "text-amber-700",
    bg: "bg-amber-50 border-amber-200"
  },
  officer: {
    title: "Защитник порядка (Белогвардеец / Юнкер)",
    desc: "Для вас главное — честь, долг и спасение России от анархии. Вы презираете толпу и готовы с оружием в руках защищать традиционные ценности, даже если шансов на победу мало.",
    color: "text-slate-800",
    bg: "bg-slate-100 border-slate-300"
  },
  anarchist: {
    title: "Анархист-максималист",
    desc: "Вы не признаете никакой власти — ни царской, ни советской. Ваша стихия — бунт, абсолютная свобода и прямое действие без оглядки на авторитеты и законы.",
    color: "text-stone-900",
    bg: "bg-stone-200 border-stone-400"
  },
  citizen: {
    title: "Мирный обыватель",
    desc: "Революции приходят и уходят, а жить нужно сейчас. Вы стараетесь держаться подальше от политики, стоять в очередях за хлебом и просто сберечь свою семью в это безумное время.",
    color: "text-emerald-700",
    bg: "bg-emerald-50 border-emerald-200"
  }
};

const QuizBanner: React.FC = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [scores, setScores] = useState<Record<Role, number>>({
    bolshevik: 0,
    moderate: 0,
    officer: 0,
    anarchist: 0,
    citizen: 0
  });
  const [isFinished, setIsFinished] = useState(false);

  const handleStart = () => {
    setIsStarted(true);
    setCurrentQuestionIdx(0);
    setScores({ bolshevik: 0, moderate: 0, officer: 0, anarchist: 0, citizen: 0 });
    setIsFinished(false);
  };

  const handleAnswer = (answerScores: Partial<Record<Role, number>>) => {
    const newScores = { ...scores };
    (Object.keys(answerScores) as Role[]).forEach(role => {
      newScores[role] += answerScores[role] || 0;
    });
    setScores(newScores);

    if (currentQuestionIdx < QUESTIONS.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const getResult = (): Role => {
    let maxRole: Role = 'citizen';
    let maxScore = -1;
    (Object.keys(scores) as Role[]).forEach(role => {
      if (scores[role] > maxScore) {
        maxScore = scores[role];
        maxRole = role;
      }
    });
    return maxRole;
  };

  return (
    <div className="max-w-4xl mx-auto px-8 mt-12">
      <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-2xl relative min-h-[400px] flex flex-col">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }}></div>
        
        <AnimatePresence mode="wait">
          {!isStarted && !isFinished && (
            <motion.div 
              key="start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex-1 flex flex-col items-center justify-center text-center p-12 relative z-10"
            >
              <div className="w-16 h-16 bg-red-700/20 rounded-full flex items-center justify-center mb-6">
                <HelpCircle size={32} className="text-red-500" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold serif text-white mb-4">Кто вы в 1917 году?</h3>
              <p className="text-slate-400 max-w-lg mb-8 serif">
                Петроград кипит. На улицах митинги, в очередях ругают власть, а в Смольном готовят восстание. Ответьте на 5 вопросов и узнайте, на чьей стороне оказались бы вы в дни великой смуты.
              </p>
              <button 
                onClick={handleStart}
                className="bg-red-700 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 flex items-center gap-2 shadow-lg shadow-red-900/20"
              >
                Начать тест <ArrowRight size={18} />
              </button>
            </motion.div>
          )}

          {isStarted && !isFinished && (
            <motion.div 
              key={`question-${currentQuestionIdx}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="flex-1 flex flex-col p-8 md:p-12 relative z-10"
            >
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-red-500 font-bold uppercase tracking-widest text-xs">Вопрос {currentQuestionIdx + 1} из {QUESTIONS.length}</span>
                  <span className="text-slate-500 font-mono text-xs">{Math.round(((currentQuestionIdx) / QUESTIONS.length) * 100)}%</span>
                </div>
                <div className="w-full h-1 bg-stone-800 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-red-600"
                    initial={{ width: `${((currentQuestionIdx) / QUESTIONS.length) * 100}%` }}
                    animate={{ width: `${((currentQuestionIdx + 1) / QUESTIONS.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              
              <h4 className="text-2xl md:text-3xl font-bold serif text-white mb-8 leading-tight">
                {QUESTIONS[currentQuestionIdx].text}
              </h4>

              <div className="grid grid-cols-1 gap-4 mt-auto">
                {QUESTIONS[currentQuestionIdx].answers.map((answer, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(answer.scores)}
                    className="text-left p-4 md:p-5 rounded-xl border border-stone-700 bg-stone-800/50 hover:bg-stone-700 hover:border-stone-500 transition-all text-slate-300 hover:text-white serif text-sm md:text-base"
                  >
                    {answer.text}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {isFinished && (
            <motion.div 
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex-1 flex flex-col items-center justify-center text-center p-8 md:p-12 relative z-10 bg-white"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={32} className="text-green-600" />
              </div>
              <span className="text-slate-500 font-bold uppercase tracking-widest text-xs mb-2">Ваш результат</span>
              
              <div className={`p-6 md:p-8 rounded-2xl border mb-8 max-w-2xl ${RESULTS[getResult()].bg}`}>
                <h3 className={`text-2xl md:text-4xl font-bold serif mb-4 ${RESULTS[getResult()].color}`}>
                  {RESULTS[getResult()].title}
                </h3>
                <p className="text-slate-700 serif text-lg leading-relaxed">
                  {RESULTS[getResult()].desc}
                </p>
              </div>

              <button 
                onClick={handleStart}
                className="text-slate-500 hover:text-slate-900 font-bold uppercase tracking-widest text-xs flex items-center gap-2 transition-colors"
              >
                <RotateCcw size={14} /> Пройти заново
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizBanner;
