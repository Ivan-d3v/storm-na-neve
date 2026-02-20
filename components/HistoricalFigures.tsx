
import React from 'react';

const FIGURES = [
  {
    name: 'В. И. Ленин',
    role: 'Лидер большевиков',
    bio: 'Вернулся в Петроград в апреле 1917 года. Автор «Апрельских тезисов» и главный идеолог вооруженного восстания.',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg-fotki.yandex.ru%2Fget%2F225029%2F225044291.5e6%2F0_19b1eb_9d150607_XXXL.jpg&f=1&ipt=0f308ee2c7a3d0e194a9920b56c75c603b13cb582f12f7dbdb5f5a0cfcf0d552'
  },
  {
    name: 'А. Ф. Керенский',
    role: 'Глава Временного правительства',
    bio: 'Популярный оратор, пытавшийся примирить революцию и войну. Возглавлял правительство до октябрьского переворота.',
    img: 'https://diletant.media/upload/medialibrary/b8a/b8a5d4acdb8dea25c9ed1cb3b249eb04.jpg'
  },
  {
    name: 'Николай II',
    role: 'Последний император',
    bio: 'Отрекся от престола 2 марта 1917 года в вагоне поезда под Псковом, положив конец трехсотлетнему правлению Романовых.',
    img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F24smi.org%2Fpublic%2Fmedia%2Fresize%2F800x-%2F2022%2F8%2F30%2Fddi8z-tu8aawchk_rLD3e2t.jpg&f=1&ipt=0d7d563c2438ad4b00a432072071068644776690a91a576c4923ce0e866fdd1b'
  },
  {
    name: 'Л. Д. Троцкий',
    role: 'Председатель Петросовета',
    bio: 'Блестящий организатор, непосредственно руководивший технической стороной захвата власти в октябре.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Leon_Trotsky_%283x4_cropped%29.jpg/400px-Leon_Trotsky_%283x4_cropped%29.jpg'
  }
];

const HistoricalFigures: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div>
          <span className="text-red-700 font-bold uppercase tracking-[0.3em] text-xs mb-2 block">Действующие лица</span>
          <h2 className="text-4xl font-bold serif text-slate-900">Те, кто вершил историю</h2>
        </div>
        <p className="max-w-md text-slate-500 text-sm italic">
          В 1917 году Петроград стал ареной столкновения идей и воли людей, чьи имена навсегда вписаны в мировую историю.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {FIGURES.map((figure, idx) => (
          <div key={idx} className="group cursor-default">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-lg">
              <img src={figure.img} alt={figure.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <h3 className="text-xl font-bold serif text-slate-900 mb-1">{figure.name}</h3>
            <p className="text-red-700 font-bold uppercase tracking-widest text-[10px] mb-3">{figure.role}</p>
            <p className="text-slate-500 text-sm leading-relaxed">{figure.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoricalFigures;
