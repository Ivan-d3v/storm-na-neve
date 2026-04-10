import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Book, Music, Film, Theater, Palette, Baby, ArrowUpRight, X } from 'lucide-react';

interface ModalContent {
  title: string;
  type: 'book' | 'film' | 'art' | 'music' | 'theater';
  content: React.ReactNode;
}

const RevolutionLegacy: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalContent | null>(null);

  const openModal = (content: ModalContent) => {
    setActiveModal(content);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-24 relative">
      {/* Intro Quote Section */}
      <div className="mb-32 border-l-4 border-red-700 pl-8 py-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl md:text-3xl serif italic text-slate-800 leading-relaxed mb-6">
            «Это очень яркий и трагический образ революции и последовавшей за ней Гражданской войны. 
            Цена, которую молодое советское государство заплатит за свое становление, будет очень высока, 
            революция принесет много страданий: непримиримый раскол в обществе, смерть, разрушения, потери. 
            На смену вере в бога придет новая вера — в светлое будущее».
          </p>
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-slate-300"></div>
            <div>
              <p className="font-bold text-slate-900 uppercase tracking-widest text-sm">Елена Гагарина</p>
              <p className="text-xs text-slate-500 uppercase tracking-widest">Генеральный директор Музеев Московского Кремля</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Cultural Recommendations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Book className="text-red-700" size={24} />
            <h3 className="text-2xl font-bold serif text-slate-900">Литература</h3>
          </div>
          
          <div className="space-y-12">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-red-700 mb-4">Отечественные авторы</h4>
              <ul className="space-y-6">
                <li className="group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block font-bold text-slate-900 group-hover:text-red-700 transition-colors">Александр Блок — «Двенадцать»</span>
                      <p className="text-sm text-slate-500 serif">Поэма, написанная в январе 1918 года, изображающая революцию как хаотический и страшный процесс.</p>
                    </div>
                    <button 
                      onClick={() => openModal({
                        title: 'Александр Блок — «Двенадцать»',
                        type: 'book',
                        content: (
                          <div className="space-y-4">
                            <p className="italic text-slate-600 text-lg">«Черный вечер.<br/>Белый снег.<br/>Ветер, ветер!<br/>На ногах не стоит человек.<br/>Ветер, ветер —<br/>На всем божьем свете!»</p>
                            <p className="text-sm text-slate-500 mt-4">Поэма написана в январе 1918 года, почти сразу после Октябрьского переворота. Блок одним из первых попытался осмыслить стихию революции, сравнивая её с неуправляемой снежной бурей.</p>
                            <a 
                              href="https://www.culture.ru/poems/290/dvenadcat" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-800 transition-colors mt-6"
                            >
                              Читать полностью <ArrowUpRight size={14} />
                            </a>
                          </div>
                        )
                      })}
                      className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-red-700 flex items-center gap-1 transition-colors pt-1"
                    >
                      Читать <ArrowUpRight size={12} />
                    </button>
                  </div>
                </li>
                <li className="group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block font-bold text-slate-900 group-hover:text-red-700 transition-colors">Михаил Шолохов — «Тихий Дон»</span>
                      <p className="text-sm text-slate-500 serif">Масштабная эпопея о роли казачества и трагедии Гражданской войны.</p>
                    </div>
                    <button 
                      onClick={() => openModal({
                        title: 'Михаил Шолохов — «Тихий Дон»',
                        type: 'book',
                        content: (
                          <div className="space-y-4">
                            <p className="italic text-slate-600 text-lg">«Трава зарастает, время затягивает раны, но память остается...»</p>
                            <p className="text-sm text-slate-500 mt-4">Монументальный роман-эпопея, за который автор получил Нобелевскую премию. Описывает жизнь донского казачества во время Первой мировой войны, революции 1917 года и Гражданской войны в России.</p>
                            <a 
                              href="https://sholohov.lit-info.ru/sholohov/proza/tihij-don/index.htm" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-800 transition-colors mt-6"
                            >
                              Читать полностью <ArrowUpRight size={14} />
                            </a>
                          </div>
                        )
                      })}
                      className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-red-700 flex items-center gap-1 transition-colors pt-1"
                    >
                      Читать <ArrowUpRight size={12} />
                    </button>
                  </div>
                </li>
                <li className="group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block font-bold text-slate-900 group-hover:text-red-700 transition-colors">Борис Пастернак — «Доктор Живаго»</span>
                      <p className="text-sm text-slate-500 serif">История интеллигенции, чьи судьбы были перемолоты жерновами революции.</p>
                    </div>
                    <button 
                      onClick={() => openModal({
                        title: 'Борис Пастернак — «Доктор Живаго»',
                        type: 'book',
                        content: (
                          <div className="space-y-4">
                            <p className="italic text-slate-600 text-lg">«Жизнь ведь тоже только миг, только растворенье нас самих во всех других как бы им в даренье.»</p>
                            <p className="text-sm text-slate-500 mt-4">Роман, публикация которого на родине была запрещена долгие годы. Это история русской интеллигенции, пытающейся сохранить человечность в нечеловеческих условиях революции и войны.</p>
                            <a 
                              href="https://boris-pasternak.su/proza/doktor-zhivago/" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-800 transition-colors mt-6"
                            >
                              Читать полностью <ArrowUpRight size={14} />
                            </a>
                          </div>
                        )
                      })}
                      className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-red-700 flex items-center gap-1 transition-colors pt-1"
                    >
                      Читать <ArrowUpRight size={12} />
                    </button>
                  </div>
                </li>
                <li className="group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block font-bold text-slate-900 group-hover:text-red-700 transition-colors">Михаил Булгаков — «Белая гвардия»</span>
                      <p className="text-sm text-slate-500 serif">Роман о судьбе семьи интеллигентов в Киеве во время Гражданской войны.</p>
                    </div>
                    <button 
                      onClick={() => openModal({
                        title: 'Михаил Булгаков — «Белая гвардия»',
                        type: 'book',
                        content: (
                          <div className="space-y-4">
                            <p className="italic text-slate-600 text-lg">«Никогда не сдергивайте абажур с лампы! Абажур священен. Никогда не убегайте крысьей побежкой на неизвестность от опасности.»</p>
                            <p className="text-sm text-slate-500 mt-4">Роман описывает события конца 1918 — начала 1919 года в Киеве. В центре сюжета — семья Турбиных, оказавшаяся в эпицентре политического и военного хаоса.</p>
                            <a 
                              href="https://militera.lib.ru/prose/russian/bulgakov1/01.html" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-800 transition-colors mt-6"
                            >
                              Читать полностью <ArrowUpRight size={14} />
                            </a>
                          </div>
                        )
                      })}
                      className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-red-700 flex items-center gap-1 transition-colors pt-1"
                    >
                      Читать <ArrowUpRight size={12} />
                    </button>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-red-700 mb-4">Зарубежные авторы</h4>
              <ul className="space-y-6">
                <li className="group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block font-bold text-slate-900 group-hover:text-red-700 transition-colors">Джон Рид — «Десять дней, которые потрясли мир»</span>
                      <p className="text-sm text-slate-500 serif">Классическая хроника событий от американского журналиста, свидетеля восстания.</p>
                    </div>
                    <button 
                      onClick={() => openModal({
                        title: 'Джон Рид — «Десять дней, которые потрясли мир»',
                        type: 'book',
                        content: (
                          <div className="space-y-4">
                            <p className="italic text-slate-600 text-lg">«Это не просто история, это сама жизнь, запечатленная в момент её наивысшего напряжения.»</p>
                            <p className="text-sm text-slate-500 mt-4">Книга американского журналиста и социалиста Джона Рида, который был непосредственным свидетелем Октябрьского вооруженного восстания в Петрограде. Ленин рекомендовал эту книгу для изучения.</p>
                            <a 
                              href="http://az.lib.ru/r/rid_d/text_1919_ten_days_that_shook_the_world.shtml" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-800 transition-colors mt-6"
                            >
                              Читать полностью <ArrowUpRight size={14} />
                            </a>
                          </div>
                        )
                      })}
                      className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-red-700 flex items-center gap-1 transition-colors pt-1"
                    >
                      Читать <ArrowUpRight size={12} />
                    </button>
                  </div>
                </li>
                <li className="group">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="block font-bold text-slate-900 group-hover:text-red-700 transition-colors">Герберт Уэллс — «Россия во мгле»</span>
                      <p className="text-sm text-slate-500 serif">Документальные очерки писателя-фантаста о визите в советскую Россию.</p>
                    </div>
                    <button 
                      onClick={() => openModal({
                        title: 'Герберт Уэллс — «Россия во мгле»',
                        type: 'book',
                        content: (
                          <div className="space-y-4">
                            <p className="italic text-slate-600 text-lg">«Кремлевский мечтатель...»</p>
                            <p className="text-sm text-slate-500 mt-4">Книга написана после визита Уэллса в Советскую Россию in 1920 году. В ней он описывает разруху, вызванную войной и революцией, и свою встречу с Лениным, планы которого по электрификации страны показались фантасту утопией.</p>
                            <a 
                              href="https://lib.ru/INOFANT/UELS/russia.txt" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-800 transition-colors mt-6"
                            >
                              Читать полностью <ArrowUpRight size={14} />
                            </a>
                          </div>
                        )
                      })}
                      className="text-[10px] font-bold uppercase tracking-widest text-slate-300 group-hover:text-red-700 flex items-center gap-1 transition-colors pt-1"
                    >
                      Читать <ArrowUpRight size={12} />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Film className="text-red-700" size={24} />
              <h3 className="text-2xl font-bold serif text-slate-900">Кино и Театр</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div 
                onClick={() => openModal({
                  title: '«Октябрь» (1928)',
                  type: 'film',
                  content: (
                    <div className="space-y-4">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/October_Ten_Days_That_Shook_the_World_poster.jpg/800px-October_Ten_Days_That_Shook_the_World_poster.jpg" alt="Постер фильма Октябрь" className="w-full h-48 object-cover rounded-xl mb-4" />
                      <p className="text-sm text-slate-500">Немой исторический художественный фильм Сергея Эйзенштейна. Снят к 10-летию Октябрьской революции. Многие сцены из фильма (например, штурм Зимнего дворца) впоследствии воспринимались зрителями как документальные кадры.</p>
                      <a 
                        href="https://vk.com/video-20286388_456240521" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-800 transition-colors mt-6"
                      >
                        Смотреть фильм <ArrowUpRight size={14} />
                      </a>
                    </div>
                  )
                })}
                className="p-6 bg-stone-50 rounded-2xl border border-stone-200 group cursor-pointer hover:bg-white hover:shadow-md transition-all"
              >
                <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">1928</p>
                <h5 className="font-bold text-slate-900 mb-2">«Октябрь»</h5>
                <p className="text-xs text-slate-500 serif mb-4">Режиссер Сергей Эйзенштейн. Немой шедевр, создавший канонический образ штурма Зимнего.</p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-red-700 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Смотреть <ArrowUpRight size={12} />
                </button>
              </div>
              <div 
                onClick={() => openModal({
                  title: '«Ленин в октябре» (1937)',
                  type: 'film',
                  content: (
                    <div className="space-y-4">
                      <p className="text-sm text-slate-500">Режиссер Михаил Ромм. Первый звуковой фильм о вожде революции, заложивший основы кинематографической «ленинианы». Роль Ленина исполнил Борис Щукин.</p>
                      <a 
                        href="https://vk.com/video-219836148_456239196" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-800 transition-colors mt-6"
                      >
                        Смотреть фильм <ArrowUpRight size={14} />
                      </a>
                    </div>
                  )
                })}
                className="p-6 bg-stone-50 rounded-2xl border border-stone-200 group cursor-pointer hover:bg-white hover:shadow-md transition-all"
              >
                <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">1937</p>
                <h5 className="font-bold text-slate-900 mb-2">«Ленин в октябре»</h5>
                <p className="text-xs text-slate-500 serif mb-4">Режиссер Михаил Ромм. Первый звуковой фильм о вожде революции.</p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-red-700 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Смотреть <ArrowUpRight size={12} />
                </button>
              </div>
              <div 
                onClick={() => openModal({
                  title: 'Эксперименты авангарда',
                  type: 'theater',
                  content: (
                    <div className="space-y-4">
                      <p className="text-sm text-slate-500">Театр после 1917 года стал площадкой для смелых экспериментов. Режиссеры, такие как Всеволод Мейерхольд, отказывались от классических декораций в пользу конструктивистских установок, а актеры использовали биомеханику для передачи эмоций.</p>
                    </div>
                  )
                })}
                className="p-6 bg-stone-50 rounded-2xl border border-stone-200 group cursor-pointer hover:bg-white hover:shadow-md transition-all"
              >
                <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">Театр</p>
                <h5 className="font-bold text-slate-900 mb-2">Эксперименты авангарда</h5>
                <p className="text-xs text-slate-500 serif mb-4">Постановки Мейерхольда и Таирова, стремившиеся отразить революционный дух в новых формах.</p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-red-700 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее <ArrowUpRight size={12} />
                </button>
              </div>
              <div 
                onClick={() => openModal({
                  title: '«Конец Санкт-Петербурга» (1927)',
                  type: 'film',
                  content: (
                    <div className="space-y-4">
                      <p className="text-sm text-slate-500">Фильм Всеволода Пудовкина. В отличие от эпического размаха Эйзенштейна, Пудовкин показывает революцию через судьбу простого крестьянского парня, приехавшего в город на заработки и ставшего участником исторических событий.</p>
                      <a 
                        href="https://vk.com/video-20286388_456240509" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-800 transition-colors mt-6"
                      >
                        Смотреть фильм <ArrowUpRight size={14} />
                      </a>
                    </div>
                  )
                })}
                className="p-6 bg-stone-50 rounded-2xl border border-stone-200 group cursor-pointer hover:bg-white hover:shadow-md transition-all"
              >
                <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">1927</p>
                <h5 className="font-bold text-slate-900 mb-2">«Конец Санкт-Петербурга»</h5>
                <p className="text-xs text-slate-500 serif mb-4">Режиссер Всеволод Пудовкин. Фильм, приуроченный к 10-летию Октября.</p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-red-700 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Смотреть <ArrowUpRight size={12} />
                </button>
              </div>
              <div 
                onClick={() => openModal({
                  title: '«Варшавянка»',
                  type: 'music',
                  content: (
                    <div className="space-y-4">
                      <p className="italic text-slate-600 text-lg">«Вихри враждебные веют над нами...»</p>
                      <p className="text-xs text-slate-400 mt-2">— Глеб Кржижановский (перевод)</p>
                      <p className="text-sm text-slate-500 mt-4">Польская революционная песня, переведенная на русский язык Глебом Кржижановским. Стала одним из самых популярных гимнов революционного движения в России.</p>
                      <a 
                        href="https://vk.com/video-60958526_456273611" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-red-800 transition-colors mt-6"
                      >
                        Слушать песню <ArrowUpRight size={14} />
                      </a>
                    </div>
                  )
                })}
                className="p-6 bg-stone-50 rounded-2xl border border-stone-200 group cursor-pointer hover:bg-white hover:shadow-md transition-all"
              >
                <p className="text-xs font-bold text-red-700 uppercase tracking-widest mb-2">Музыка</p>
                <h5 className="font-bold text-slate-900 mb-2">«Варшавянка»</h5>
                <p className="text-xs text-slate-500 serif mb-4">Революционная песня, ставшая одним из главных гимнов борьбы.</p>
                <button className="text-[10px] font-bold uppercase tracking-widest text-red-700 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Слушать <ArrowUpRight size={12} />
                </button>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Palette className="text-red-700" size={24} />
              <h3 className="text-2xl font-bold serif text-slate-900">Изобразительное искусство</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div 
                onClick={() => openModal({
                  title: 'Б. Кустодиев — «Большевик» (1920)',
                  type: 'art',
                  content: (
                    <div className="space-y-4">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bolshevik_-_Kustodiev.jpg/1280px-Bolshevik_-_Kustodiev.jpg" alt="Большевик" className="w-full max-h-96 object-contain bg-stone-100 rounded-xl" />
                      <p className="text-sm text-slate-500">Картина символизирует неудержимую, стихийную мощь революции. Гигантская фигура с красным знаменем шагает прямо по городу, сметая всё на своём пути.</p>
                    </div>
                  )
                })}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bolshevik_-_Kustodiev.jpg/1280px-Bolshevik_-_Kustodiev.jpg" 
                    alt="Большевик" 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">Б. Кустодиев — «Большевик» (1920)</h5>
                    <p className="text-xs text-slate-500 serif">Гигантская фигура со знаменем, шагающая над городом.</p>
                  </div>
                  <button className="p-2 text-slate-300 hover:text-red-700 transition-colors">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>

              <div 
                onClick={() => openModal({
                  title: 'К. Петров-Водкин — «1918 год в Петрограде»',
                  type: 'art',
                  content: (
                    <div className="space-y-4">
                      <img src="https://ru.opisanie-kartin.com/files/1918-god-v-petrograde-kuzma-petrov-vodkin_1.jpg" alt="Петроградская Мадонна" className="w-full max-h-96 object-contain bg-stone-100 rounded-xl" />
                      <p className="text-sm text-slate-500">Картину часто называют «Петроградской Мадонной». На фоне разрухи и тревоги революционного города художник изображает вечный символ материнства и надежды.</p>
                    </div>
                  )
                })}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden bg-stone-100">
                  <img 
                    src="https://ru.opisanie-kartin.com/files/1918-god-v-petrograde-kuzma-petrov-vodkin_1.jpg" 
                    alt="Петроградская Мадонна" 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">К. Петров-Водкин — «1918 год в Петрограде»</h5>
                    <p className="text-xs text-slate-500 serif">Знаменитая «Петроградская Мадонна» на фоне революционного города.</p>
                  </div>
                  <button className="p-2 text-slate-300 hover:text-red-700 transition-colors">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>

              <div 
                onClick={() => openModal({
                  title: 'Эль Лисицкий — «Клином красным бей белых» (1919)',
                  type: 'art',
                  content: (
                    <div className="space-y-4">
                      <img src="https://tatlin.ru/MyWeb-Image/table/files/field/file/content-field/content/equality-field/id/equality/1279/1/Tatlin%20color_illustr%205.jpg" alt="Клином красным" className="w-full max-h-96 object-contain bg-stone-100 rounded-xl" />
                      <p className="text-sm text-slate-500">Шедевр супрематизма. Плакат использует простые геометрические формы для передачи динамики и политического послания: красный клин (Красная армия) прорывает белый круг (Белое движение).</p>
                    </div>
                  )
                })}
                className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow sm:col-span-2 cursor-pointer"
              >
                <div className="aspect-video sm:aspect-[21/9] overflow-hidden bg-stone-100">
                  <img 
                    src="https://tatlin.ru/MyWeb-Image/table/files/field/file/content-field/content/equality-field/id/equality/1279/1/Tatlin%20color_illustr%205.jpg" 
                    alt="Клином красным" 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                <div className="p-4 flex justify-between items-center">
                  <div>
                    <h5 className="font-bold text-slate-900 text-sm mb-1">Эль Лисицкий — «Клином красным бей белых» (1919)</h5>
                    <p className="text-xs text-slate-500 serif">Шедевр супрематизма и один из самых узнаваемых агитационных плакатов эпохи Гражданской войны.</p>
                  </div>
                  <button className="p-2 text-slate-300 hover:text-red-700 transition-colors">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Revolutionary Names Section */}
      <div className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-700/10 blur-[100px] rounded-full -mr-48 -mt-48"></div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <Baby className="text-red-500" size={32} />
            <h3 className="text-3xl md:text-4xl font-bold serif">Рожденные революцией</h3>
          </div>
          
          <p className="text-slate-400 max-w-2xl mb-16 serif leading-relaxed">
            С приходом новой власти старые имена уходили в прошлое. Новая эпоха требовала новых идей, 
            что породило уникальный пласт имен-аббревиатур и имен-лозунгов. Некоторые из них звучали мелодично, 
            другие — вызывали культурный шок.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div>
              <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-6">Имена-лозунги</h4>
              <ul className="space-y-4">
                <li>
                  <span className="block font-bold text-lg">Даздраперма</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Да здравствует первое мая!</span>
                </li>
                <li>
                  <span className="block font-bold text-lg">Дазвсемир</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Да здравствует всемирная революция!</span>
                </li>
                <li>
                  <span className="block font-bold text-lg">Пячегод</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Пятилетку в четыре года!</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-6">В честь вождей</h4>
              <ul className="space-y-4">
                <li>
                  <span className="block font-bold text-lg">Вилен / Вилена</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">В. И. Ленин</span>
                </li>
                <li>
                  <span className="block font-bold text-lg">Мэлс</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Маркс, Энгельс, Ленин, Сталин</span>
                </li>
                <li>
                  <span className="block font-bold text-lg">Нинель</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Ленин (наоборот)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-red-500 font-bold uppercase tracking-widest text-xs mb-6">Идеологические</h4>
              <ul className="space-y-4">
                <li>
                  <span className="block font-bold text-lg">Ким</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Коммунистический интернационал молодежи</span>
                </li>
                <li>
                  <span className="block font-bold text-lg">Кравасил</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Красная армия всех сильней!</span>
                </li>
                <li>
                  <span className="block font-bold text-lg">Реввола</span>
                  <span className="text-xs text-slate-500 uppercase tracking-widest">Революционная волна</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Culture Items */}
      <AnimatePresence>
        {activeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl border border-stone-200 relative max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 text-slate-400 hover:text-red-700 hover:bg-red-50 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-3 mb-6">
                {activeModal.type === 'book' && <Book className="text-red-700" size={24} />}
                {activeModal.type === 'film' && <Film className="text-red-700" size={24} />}
                {activeModal.type === 'art' && <Palette className="text-red-700" size={24} />}
                {activeModal.type === 'music' && <Music className="text-red-700" size={24} />}
                {activeModal.type === 'theater' && <Theater className="text-red-700" size={24} />}
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {activeModal.type === 'book' ? 'Литература' : 
                   activeModal.type === 'film' ? 'Кинематограф' : 
                   activeModal.type === 'art' ? 'Изобразительное искусство' : 
                   activeModal.type === 'music' ? 'Музыка' : 'Театр'}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold serif text-slate-900 mb-8">{activeModal.title}</h3>
              
              <div className="prose prose-stone max-w-none">
                {activeModal.content}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RevolutionLegacy;
