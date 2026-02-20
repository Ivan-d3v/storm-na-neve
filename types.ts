
export interface HistoricalEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  longDescription: string;
  locations: LocationMarker[];
  type: 'february' | 'dual-power' | 'october';
}

export interface LocationMarker {
  id: string;
  name: string;
  lat: number;
  lng: number;
  description: string;
  icon: 'palace' | 'fortress' | 'factory' | 'bridge' | 'station' | 'ship';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
