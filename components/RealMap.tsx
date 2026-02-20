
import React, { useEffect, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { LocationMarker } from '../types';

// Координаты границ Санкт-Петербурга для ограничения перемещения
const PETROGRAD_BOUNDS: L.LatLngBoundsExpression = [
  [59.70, 29.80], // Юго-запад
  [60.15, 30.70]  // Северо-восток
];

const DEFAULT_CENTER: [number, number] = [59.9406, 30.3134];

// Custom Map Controller to handle flyTo effects safely
const MapController = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  
  useEffect(() => {
    // Проверка на валидность координат перед анимацией
    if (center && typeof center[0] === 'number' && typeof center[1] === 'number' && !isNaN(center[0]) && !isNaN(center[1])) {
      map.flyTo(center, 14, {
        duration: 1.5,
        easeLinearity: 0.25
      });
    }
  }, [center, map]);
  
  return null;
};

interface RealMapProps {
  markers: LocationMarker[];
}

const RealMap: React.FC<RealMapProps> = ({ markers }) => {
  // Фильтруем маркеры, чтобы исключить любые с некорректными координатами
  const validMarkers = useMemo(() => 
    markers.filter(m => typeof m.lat === 'number' && typeof m.lng === 'number' && !isNaN(m.lat) && !isNaN(m.lng)),
    [markers]
  );

  // Стабилизируем значение центра с помощью useMemo
  const activeCenter = useMemo((): [number, number] => {
    if (validMarkers.length > 0) {
      return [validMarkers[0].lat, validMarkers[0].lng];
    }
    return DEFAULT_CENTER;
  }, [validMarkers]);

  const getCustomIcon = (type: string) => {
    let color = '#b45309'; // amber-700
    if (type === 'fortress') color = '#b91c1c'; // red-700
    if (type === 'factory') color = '#475569'; // slate-600
    if (type === 'ship') color = '#0369a1'; // sky-700
    
    return L.divIcon({
      className: 'custom-div-icon',
      html: `<div style="background-color: ${color}; width: 14px; height: 14px; border: 2.5px solid white; border-radius: 50%; box-shadow: 0 2px 5px rgba(0,0,0,0.2);"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });
  };

  return (
    <div className="w-full h-full relative z-0">
      <MapContainer 
        center={DEFAULT_CENTER} 
        zoom={13} 
        minZoom={11}
        maxBounds={PETROGRAD_BOUNDS}
        maxBoundsViscosity={1.0}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <MapController center={activeCenter} />
        
        {validMarkers.map((marker) => (
          <Marker 
            key={marker.id} 
            position={[marker.lat, marker.lng]}
            icon={getCustomIcon(marker.icon)}
          >
            <Popup className="historical-popup">
              <div className="p-2 min-w-[120px]">
                <h4 className="font-bold text-slate-900 text-sm border-b border-stone-100 pb-1 mb-1">{marker.name}</h4>
                <p className="text-[11px] text-slate-600 leading-tight">{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Map Overlay for subtle historical feel */}
      <div className="absolute inset-0 pointer-events-none bg-stone-900/5 mix-blend-multiply z-10"></div>
    </div>
  );
};

export default RealMap;
