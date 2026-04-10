import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Map, Users, BookOpen, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const searchIndex = [
  // Events (Map)
  { id: 'putilov', title: 'Забастовка на Путиловском', type: 'Событие', path: '/map', icon: <Map size={16} /> },
  { id: 'feb-riots', title: 'Международный женский день', type: 'Событие', path: '/map', icon: <Map size={16} /> },
  { id: 'tauride', title: 'Восстание Петроградского гарнизона', type: 'Событие', path: '/map', icon: <Map size={16} /> },
  { id: 'storm-winter', title: 'Штурм Зимнего дворца', type: 'Событие', path: '/map', icon: <Map size={16} /> },
  
  // Figures
  { id: 'lenin', title: 'Владимир Ленин', type: 'Личность', path: '/figures', icon: <Users size={16} /> },
  { id: 'trotsky', title: 'Лев Троцкий', type: 'Личность', path: '/figures', icon: <Users size={16} /> },
  { id: 'kerensky', title: 'Александр Керенский', type: 'Личность', path: '/figures', icon: <Users size={16} /> },
  { id: 'nicholas', title: 'Николай II', type: 'Личность', path: '/figures', icon: <Users size={16} /> },
  
  // Glossary
  { id: 'bolsheviks', title: 'Большевики', type: 'Термин', path: '/glossary', icon: <BookOpen size={16} /> },
  { id: 'mensheviks', title: 'Меньшевики', type: 'Термин', path: '/glossary', icon: <BookOpen size={16} /> },
  { id: 'soviets', title: 'Советы', type: 'Термин', path: '/glossary', icon: <BookOpen size={16} /> },
  { id: 'dual-power', title: 'Двоевластие', type: 'Термин', path: '/glossary', icon: <BookOpen size={16} /> },
  { id: 'constituent', title: 'Учредительное собрание', type: 'Термин', path: '/glossary', icon: <BookOpen size={16} /> },
  
  // Documents
  { id: 'manifesto', title: 'Манифест об отречении', type: 'Документ', path: '/documents', icon: <FileText size={16} /> },
  { id: 'order1', title: 'Приказ № 1', type: 'Документ', path: '/documents', icon: <FileText size={16} /> },
  { id: 'peace', title: 'Декрет о мире', type: 'Документ', path: '/documents', icon: <FileText size={16} /> },
  { id: 'land', title: 'Декрет о земле', type: 'Документ', path: '/documents', icon: <FileText size={16} /> },
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const filteredResults = searchIndex.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white rounded-3xl shadow-2xl z-[101] overflow-hidden border border-stone-200"
          >
            <div className="flex items-center px-6 py-4 border-b border-stone-100">
              <Search className="text-slate-400 mr-4" size={24} />
              <input 
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Поиск по событиям, личностям, терминам..."
                className="flex-grow bg-transparent border-none outline-none text-lg text-slate-900 placeholder:text-slate-400 serif"
              />
              <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-900 transition-colors rounded-full hover:bg-stone-100">
                <X size={20} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 custom-scrollbar">
              {query.length > 0 ? (
                filteredResults.length > 0 ? (
                  <div className="space-y-2">
                    {filteredResults.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => handleSelect(item.path)}
                        className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-stone-50 transition-colors group text-left"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 bg-stone-100 text-slate-500 rounded-xl group-hover:bg-red-50 group-hover:text-red-700 transition-colors">
                            {item.icon}
                          </div>
                          <span className="font-bold serif text-slate-900 group-hover:text-red-700 transition-colors">{item.title}</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.type}</span>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 text-slate-500 serif">
                    По запросу «{query}» ничего не найдено.
                  </div>
                )
              ) : (
                <div className="text-center py-12 text-slate-400 text-sm uppercase tracking-widest font-bold">
                  Начните вводить текст для поиска
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
