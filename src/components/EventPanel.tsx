import React from 'react';
import { HistoricalEvent } from '../types';
import { Bookmark } from 'lucide-react';

interface EventPanelProps {
  event: HistoricalEvent;
  isCompact?: boolean;
}

const EventPanel: React.FC<EventPanelProps> = ({ event, isCompact = false }) => {
  return (
    <div className={`h-full flex flex-col ${isCompact ? 'space-y-4' : 'space-y-6'}`}>
      <div className={isCompact ? 'space-y-1' : 'space-y-3'}>
        <div className="flex items-center gap-2">
          <Bookmark size={isCompact ? 12 : 14} className="text-red-700" />
          <span className={`${isCompact ? 'text-[9px]' : 'text-[11px]'} font-bold text-red-700 uppercase tracking-[0.2em]`}>
            {event.date}
          </span>
        </div>
        <h2 className={`${isCompact ? 'text-2xl' : 'text-4xl'} font-bold text-slate-900 leading-tight serif`}>
          {event.title}
        </h2>
      </div>

      <div className="prose prose-slate max-w-none">
        <p className={`text-slate-700 leading-relaxed ${isCompact ? 'text-sm' : 'text-lg'} border-l-4 border-red-700/20 pl-4 md:pl-6 py-1 serif`}>
          {event.longDescription}
        </p>
      </div>
    </div>
  );
};

export default EventPanel;
