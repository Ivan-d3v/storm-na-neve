import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { HistoricalEvent } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineProps {
  events: HistoricalEvent[];
  activeId: string;
  onSelect: (id: string) => void;
  isOverlay?: boolean;
}

const Timeline: React.FC<TimelineProps> = ({ events, activeId, onSelect, isOverlay = false }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full group">
      {/* Scroll Buttons - Hidden on Mobile */}
      <button 
        onClick={() => scroll('left')}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full border border-stone-200 text-slate-400 hover:text-red-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={16} />
      </button>
      
      <div 
        ref={scrollRef}
        className="flex gap-2 md:gap-3 overflow-x-auto scrollbar-hide px-4 md:px-10 py-2 no-scrollbar items-center mask-fade"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {events.map((event) => {
          const isActive = activeId === event.id;
          return (
            <button
              key={event.id}
              onClick={() => onSelect(event.id)}
              className={`flex-shrink-0 relative transition-all duration-500 text-left ${
                isOverlay ? 'w-40 md:w-48' : 'w-56 md:w-64'
              } px-4 py-3 rounded-xl border ${
                isActive 
                  ? 'bg-red-700 border-red-800 shadow-lg shadow-red-900/20 translate-y-[-2px]' 
                  : 'bg-white border-stone-100 hover:border-stone-300'
              }`}
            >
              <span className={`text-[8px] md:text-[9px] font-bold uppercase tracking-widest mb-1 block transition-colors ${
                isActive ? 'text-red-100' : 'text-slate-400'
              }`}>
                {event.date}
              </span>
              <h4 className={`text-[10px] md:text-xs font-bold truncate transition-colors ${
                isActive ? 'text-white' : 'text-slate-600'
              }`}>
                {event.title}
              </h4>
              
              {isActive && (
                <motion.div 
                  layoutId="active-indicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-red-400 rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      <button 
        onClick={() => scroll('right')}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full border border-stone-200 text-slate-400 hover:text-red-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Timeline;
