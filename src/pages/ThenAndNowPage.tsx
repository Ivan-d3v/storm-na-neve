import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, ArrowLeftRight } from 'lucide-react';

interface LocationData {
  id: string;
  name: string;
  description: string;
  image1917: string;
  imageNow: string;
}

const locations: LocationData[] = [
  {
    id: 'winter-palace',
    name: 'Зимний дворец (Дворцовая площадь)',
    description: 'В 1917 году дворец был резиденцией Временного правительства, а площадь перед ним стала ареной массовых митингов и финального штурма. Сегодня это Государственный Эрмитаж, один из крупнейших музеев мира.',
    image1917: 'https://picsum.photos/seed/winter-palace-1917/1200/800',
    imageNow: 'https://picsum.photos/seed/winter-palace-now/1200/800'
  },
  {
    id: 'smolny',
    name: 'Смольный институт',
    description: 'Бывший институт благородных девиц стал штабом большевиков и Петроградского совета в октябре 1917 года. Именно отсюда руководили восстанием. Сейчас здесь располагается резиденция губернатора Санкт-Петербурга.',
    image1917: 'https://picsum.photos/seed/smolny-1917/1200/800',
    imageNow: 'https://picsum.photos/seed/smolny-now/1200/800'
  },
  {
    id: 'nevsky',
    name: 'Невский проспект',
    description: 'Главная артерия города, где в феврале 1917 года проходили многотысячные демонстрации, переросшие в революцию. В наши дни это оживленная туристическая и торговая улица.',
    image1917: 'https://picsum.photos/seed/nevsky-1917/1200/800',
    imageNow: 'https://picsum.photos/seed/nevsky-now/1200/800'
  }
];

const ImageSlider: React.FC<{ location: LocationData }> = ({ location }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-xl shadow-black/5 mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-red-50 rounded-2xl">
          <MapPin className="text-red-700" size={24} />
        </div>
        <div>
          <h2 className="text-2xl font-bold serif text-slate-900">{location.name}</h2>
        </div>
      </div>
      <p className="text-slate-600 serif leading-relaxed mb-8 max-w-3xl">
        {location.description}
      </p>

      <div 
        ref={containerRef}
        className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden cursor-ew-resize select-none"
        onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
        onTouchMove={handleTouchMove}
      >
        {/* Modern Image (Background) */}
        <img 
          src={location.imageNow} 
          alt={`${location.name} сейчас`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          draggable={false}
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest z-10">
          Наши дни
        </div>

        {/* 1917 Image (Foreground, clipped) */}
        <div 
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={location.image1917} 
            alt={`${location.name} в 1917 году`}
            className="absolute inset-0 w-full h-full object-cover grayscale sepia-[0.3] contrast-125"
            style={{ width: '100vw', maxWidth: containerRef.current?.clientWidth || '100%' }}
            draggable={false}
          />
          <div className="absolute top-4 left-4 bg-red-700 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest z-10">
            1917 год
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center border-2 border-red-700">
            <ArrowLeftRight size={20} className="text-red-700" />
          </div>
        </div>
      </div>
      <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mt-4">
        Потяните ползунок, чтобы сравнить эпохи
      </p>
    </div>
  );
};

const ThenAndNowPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfdfc] pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Сквозь время</span>
          <h1 className="text-5xl md:text-6xl font-bold serif text-slate-900 mb-6 tracking-tight">Тогда и сейчас</h1>
          <div className="w-24 h-1 bg-red-700 mx-auto mb-8"></div>
          <p className="text-lg text-slate-600 serif max-w-2xl mx-auto leading-relaxed">
            Интерактивное сравнение исторических локаций Петрограда 1917 года с их современным обликом в Санкт-Петербурге.
          </p>
        </motion.div>

        <div className="space-y-8">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <ImageSlider location={loc} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThenAndNowPage;
