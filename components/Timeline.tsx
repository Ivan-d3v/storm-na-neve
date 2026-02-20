
import React, { useRef } from 'react';
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
      <button 
        onClick={() => scroll('left')}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full border border-stone-200 text-slate-400 hover:text-red-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft size={16} />
      </button>
      
      <div 
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide px-10 py-2 no-scrollbar items-center mask-fade"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {events.map((event) => (
          <button
            key={event.id}
            onClick={() => onSelect(event.id)}
            className={`flex-shrink-0 ${isOverlay ? 'w-48' : 'w-64'} px-4 py-3 rounded-xl border transition-all duration-300 text-left ${
              activeId === event.id 
                ? 'bg-red-50 border-red-700/30 shadow-sm' 
                : 'bg-white border-stone-100 hover:border-stone-300'
            }`}
          >
            <span className={`text-[9px] font-bold uppercase tracking-widest mb-1 block ${activeId === event.id ? 'text-red-700' : 'text-slate-400'}`}>
              {event.date}
            </span>
            <h4 className={`text-xs font-bold truncate ${activeId === event.id ? 'text-slate-900' : 'text-slate-600'}`}>
              {event.title}
            </h4>
          </button>
        ))}
      </div>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-white rounded-full border border-stone-200 text-slate-400 hover:text-red-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default Timeline;
