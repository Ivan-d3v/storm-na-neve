import { HistoricalEvent } from './types';

export const HISTORICAL_EVENTS: HistoricalEvent[] = [
  {
    id: 'putilov-strike',
    date: '18 февраля (3 марта)',
    title: 'Забастовка на Путиловском',
    description: 'Начало массовых волнений рабочих крупнейшего завода Петрограда.',
    longDescription: 'Забастовка 30 тысяч рабочих Путиловского завода стала катализатором Февральской революции. Из-за перебоев с хлебом и усталости от войны протесты быстро переросли в политические требования «Долой самодержавие!».',
    imageUrl: 'https://picsum.photos/seed/putilov-factory/800/450',
    type: 'february',
    locations: [
      { id: 'putilov', name: 'Путиловский завод', lat: 59.8787, lng: 30.2644, description: 'Центр рабочего движения юга столицы.', icon: 'factory' }
    ]
  },
  {
    id: 'feb-riots',
    date: '23 февраля (8 марта)',
    title: 'Международный женский день',
    description: 'Масштабные демонстрации женщин и рабочих на Невском проспекте.',
    longDescription: 'Хлебные бунты переросли в полноценное восстание. Женщины-работницы вышли на улицы, требуя хлеба и возвращения мужей с фронта. К ним присоединились рабочие Выборгской стороны.',
    imageUrl: 'https://picsum.photos/seed/womens-day/800/450',
    type: 'february',
    locations: [
      { id: 'nevsky', name: 'Невский проспект', lat: 59.9343, lng: 30.3351, description: 'Главная артерия города, забитая протестующими.', icon: 'bridge' },
      { id: 'viburgh', name: 'Выборгская сторона', lat: 59.9708, lng: 30.3475, description: 'Район самых радикальных рабочих отрядов.', icon: 'factory' }
    ]
  },
  {
    id: 'tauride-soviet',
    date: '27 февраля (12 марта)',
    title: 'Восстание Петроградского гарнизона',
    description: 'Солдаты переходят на сторону народа. Создание Совета и Комитета Думы.',
    longDescription: 'Волынский полк поднимает мятеж. Солдаты захватывают арсенал и направляются к Таврическому дворцу. В одном здании формируются два центра власти.',
    imageUrl: 'https://picsum.photos/seed/tauride-palace/800/450',
    type: 'february',
    locations: [
      { id: 'tauride', name: 'Таврический дворец', lat: 59.9478, lng: 30.3758, description: 'Место рождения новой власти.', icon: 'palace' },
      { id: 'arsenal', name: 'Литейный арсенал', lat: 59.9482, lng: 30.3491, description: 'Захвачен восставшими солдатами.', icon: 'fortress' }
    ]
  },
  {
    id: 'provisional-gov',
    date: '2 марта (15 марта)',
    title: 'Временное правительство',
    description: 'Переход власти к Временному комитету Госдумы.',
    longDescription: 'Пока Николай II подписывал отречение в Пскове, в Петрограде власть официально перешла к Временному правительству. Зимний дворец перестал быть резиденцией монарха и позже стал местом заседаний правительства.',
    imageUrl: 'https://picsum.photos/seed/winter-palace-1917/800/450',
    type: 'february',
    locations: [
      { id: 'winter-palace', name: 'Зимний дворец', lat: 59.9406, lng: 30.3134, description: 'Бывшая резиденция императора.', icon: 'palace' }
    ]
  },
  {
    id: 'lenin-return',
    date: '3 апреля (16 апреля)',
    title: 'Возвращение Ленина',
    description: 'Прибытие «пломбированного вагона» на Финляндский вокзал.',
    longDescription: 'Владимир Ленин возвращается из эмиграции и выступает с речью перед рабочими и солдатами, призывая к переходу к следующему этапу революции.',
    imageUrl: 'https://picsum.photos/seed/lenin-finland/800/450',
    type: 'dual-power',
    locations: [
      { id: 'finland-station', name: 'Финляндский вокзал', lat: 59.9557, lng: 30.3563, description: 'Место знаменитого выступления на броневике.', icon: 'station' }
    ]
  },
  {
    id: 'april-theses',
    date: '4 апреля (17 апреля)',
    title: 'Апрельские тезисы',
    description: 'Программа действий большевиков.',
    longDescription: 'Ленин представил «Апрельские тезисы» в особняке Кшесинской. В них обосновывался отказ от поддержки Временного правительства, выдвигался лозунг «Вся власть Советам!» и предлагалась национализация земель и банков.',
    imageUrl: 'https://picsum.photos/seed/kshesinskaya-mansion/800/450',
    type: 'dual-power',
    locations: [
      { id: 'kshesinskaya-theses', name: 'Особняк Кшесинской', lat: 59.9551, lng: 30.3255, description: 'Место провозглашения нового курса партии.', icon: 'palace' }
    ]
  },
  {
    id: 'april-crisis',
    date: '20–21 апреля (3-4 мая)',
    title: 'Апрельский кризис',
    description: 'Первый кризис Временного правительства.',
    longDescription: 'Вызван нотой министра Милюкова о готовности России продолжать войну до победного конца. Стихийные демонстрации у Мариинского дворца привели к отставке ключевых министров и созданию первого коалиционного правительства.',
    imageUrl: 'https://picsum.photos/seed/mariinsky-palace-1917/800/450',
    type: 'dual-power',
    locations: [
      { id: 'mariinsky-palace', name: 'Мариинский дворец', lat: 59.9317, lng: 30.3086, description: 'Место массовых протестов против войны.', icon: 'palace' }
    ]
  },
  {
    id: 'july-days',
    date: '3-4 июля (16-17 июля)',
    title: 'Июльские дни',
    description: 'Стихийное восстание и его разгон.',
    longDescription: 'Кризис власти приводит к вооруженным столкновениям. Большевики пытаются взять власть, но правительство подавляет выступление. Ленин вынужден скрыться.',
    imageUrl: 'https://picsum.photos/seed/july-days-1917/800/450',
    type: 'dual-power',
    locations: [
      { id: 'kshesinskaya', name: 'Особняк Кшесинской', lat: 59.9551, lng: 30.3255, description: 'Штаб-квартира большевиков.', icon: 'palace' }
    ]
  },
  {
    id: 'kornilov-revolt',
    date: '25–30 августа (7-12 сентября)',
    title: 'Корниловский мятеж',
    description: 'Попытка установления военной диктатуры.',
    longDescription: 'Попытка генерала Корнилова установить военную диктатуру для наведения порядка. Провал похода войск на Петроград из-за саботажа железнодорожников и агитации привел к резкой радикализации масс.',
    imageUrl: 'https://picsum.photos/seed/kornilov-1917/800/450',
    type: 'dual-power',
    locations: [
      { id: 'winter-palace-kornilov', name: 'Зимний дворец', lat: 59.9406, lng: 30.3134, description: 'Место заседаний правительства Керенского.', icon: 'palace' }
    ]
  },
  {
    id: 'october-begin',
    date: '24 октября (6 ноября)',
    title: 'Начало Октября',
    description: 'Захват ключевых точек города отрядами ВРК.',
    longDescription: 'Военно-революционный комитет (ВРК) начинает планомерный захват мостов, почты, телеграфа и вокзалов из Смольного.',
    imageUrl: 'https://picsum.photos/seed/smolny-1917/800/450',
    type: 'october',
    locations: [
      { id: 'smolny', name: 'Смольный институт', lat: 59.9472, lng: 30.3953, description: 'Штаб Октябрьского восстания.', icon: 'palace' },
      { id: 'palace-bridge', name: 'Дворцовый мост', lat: 59.9413, lng: 30.3083, description: 'Стратегический объект, взятый под контроль.', icon: 'bridge' }
    ]
  },
  {
    id: 'storm-winter',
    date: '25 октября (7 ноября)',
    title: 'Штурм Зимнего дворца',
    description: 'Залп «Авроры» и арест Временного правительства.',
    longDescription: 'Вечером с крейсера «Аврора» дается холостой выстрел. Глубокой ночью красногвардейцы и матросы входят в Зимний дворец и арестовывают министров.',
    imageUrl: 'https://picsum.photos/seed/aurora-1917/800/450',
    type: 'october',
    locations: [
      { id: 'aurora', name: 'Крейсер Аврора', lat: 59.9554, lng: 30.3378, description: 'Корабль, давший сигнал к восстанию.', icon: 'ship' },
      { id: 'winter-palace-2', name: 'Зимний дворец', lat: 59.9406, lng: 30.3134, description: 'Последний оплот старой власти.', icon: 'palace' },
      { id: 'peter-paul', name: 'Петропавловская крепость', lat: 59.9501, lng: 30.3175, description: 'Опорный пункт восставших.', icon: 'fortress' }
    ]
  },
  {
    id: 'second-congress',
    date: '25 октября (7 ноября)',
    title: 'II Съезд Советов',
    description: 'Провозглашение Советской власти.',
    longDescription: 'Открылся в Смольном поздно вечером на фоне штурма Зимнего. Делегаты утвердили переход власти к Советам, приняли Декреты о мире и о земле, сформировали Совет народных комиссаров.',
    imageUrl: 'https://picsum.photos/seed/congress-1917/800/450',
    type: 'october',
    locations: [
      { id: 'smolny-congress', name: 'Смольный институт', lat: 59.9472, lng: 30.3953, description: 'Место принятия исторических декретов.', icon: 'palace' }
    ]
  }
];
