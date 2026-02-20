
import React from 'react';
import { LocationMarker } from '../types';
import { MapPin, Landmark, Factory, Shield, TrainFront } from 'lucide-react';

interface HistoricalMapProps {
  markers: LocationMarker[];
}

const IconMap = {
  palace: <Landmark className="w-5 h-5 text-amber-500" />,
  fortress: <Shield className="w-5 h-5 text-red-500" />,
  factory: <Factory className="w-5 h-5 text-gray-400" />,
  bridge: <MapPin className="w-5 h-5 text-blue-400" />,
  station: <TrainFront className="w-5 h-5 text-emerald-500" />
};

const HistoricalMap: React.FC<HistoricalMapProps> = ({ markers }) => {
  return (
    <div className="relative w-full aspect-[16/9] bg-[#1e293b] rounded-xl border border-slate-700 overflow-hidden shadow-2xl group">
      {/* Hand-drawn style Neva River */}
      <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path 
          d="M0,50 Q20,40 40,55 T80,45 T100,60" 
          fill="none" 
          stroke="#38bdf8" 
          strokeWidth="6" 
          className="animate-pulse"
        />
        <path 
          d="M45,52 Q50,45 60,35 T75,20 T90,5" 
          fill="none" 
          stroke="#38bdf8" 
          strokeWidth="4" 
        />
        <circle cx="58" cy="38" r="8" fill="none" stroke="#38bdf8" strokeWidth="2" />
      </svg>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-20"></div>

      {/* Map Labels for districts */}
      <div className="absolute top-1/4 left-1/4 text-slate-500 text-xs font-semibold uppercase tracking-widest pointer-events-none">Васильевский остров</div>
      <div className="absolute top-1/2 left-2/3 text-slate-500 text-xs font-semibold uppercase tracking-widest pointer-events-none">Центральный район</div>
      <div className="absolute bottom-1/4 left-1/3 text-slate-500 text-xs font-semibold uppercase tracking-widest pointer-events-none">Адмиралтейская часть</div>

      {/* Markers */}
      {markers.map((marker) => (
        <div 
          key={marker.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out"
          style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
        >
          <div className="flex flex-col items-center group/marker">
            <div className="bg-slate-900/80 p-2 rounded-full border border-slate-600 shadow-lg hover:scale-110 hover:border-amber-500 transition-all cursor-help relative">
                {IconMap[marker.icon]}
                
                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 opacity-0 group-hover/marker:opacity-100 pointer-events-none transition-opacity duration-300 z-50">
                   <div className="bg-slate-900 border border-slate-700 p-2 rounded shadow-xl">
                      <p className="text-xs font-bold text-amber-400 mb-1">{marker.name}</p>
                      <p className="text-[10px] text-slate-300 leading-tight">{marker.description}</p>
                   </div>
                </div>
            </div>
          </div>
        </div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-4 flex gap-4 text-[10px] bg-slate-900/50 backdrop-blur-sm p-2 rounded border border-slate-700">
         <div className="flex items-center gap-1"><Landmark className="w-3 h-3 text-amber-500"/> Дворцы</div>
         <div className="flex items-center gap-1"><Shield className="w-3 h-3 text-red-500"/> Крепости</div>
         <div className="flex items-center gap-1"><Factory className="w-3 h-3 text-gray-400"/> Заводы</div>
      </div>
    </div>
  );
};

export default HistoricalMap;
