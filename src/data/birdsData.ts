const birdsData = [
    [
        {
            id: 1,
            name: 'Воробей',
            species: 'Passer domesticus',
            description: 'Домо́вый воробе́й — наиболее распространённый вид из рода настоящих воробьёв семейства воробьиных. Одна из самых известных птиц[3], обитающая по соседству с жилищем человека (отсюда её видовое название «домовый») и хорошо узнаваемая как по внешнему виду, так и по характерному чириканью.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Passer domesticus`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Passer domesticus'
        },
        {
            id: 2,
            name: 'Голубь',
            species: 'Columba livia',
            description: 'Вокализация — характерное для семейства в целом воркование: раскатистое, глухое урчание, особенно ярко выраженное у самцов в брачный период, когда они подзывают самок или метят территорию. Несколько иная тональность голоса, более спокойная и напоминающая скорее мурлыканье кошки, звучит во время насиживания яиц.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Columba livia`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Columba livia'
        },
        {
            id: 3,
            name: 'Горихвостка',
            species: 'Phoenicurus phoenicurus',
            description: 'Песня горихвостки – примитивная и весьма грубая трель наподобие "чьеер-чер-чер-чер-черр" и т.п. Обычно в песне есть хриплые элементы, как у каменок. Крики беспокойства – "фить-тек-тек-тек" и другие сочетания из свистового "фить" и щелкающего "тек".',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Phoenicurus phoenicurus`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Phoenicurus phoenicurus'
        },
        {
            id: 4,
            name: 'Скворец',
            species: 'Sturnus vulgaris',
            description: 'Песня разнообразная, состоит из многих элементов, заимствованных от других птиц, и звуков иного, в том числе небиологического происхождения. Наиболее обычные собственные звуки – длинные мягкие «скворчащие»',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Sturnus vulgaris`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Sturnus vulgaris'
        },
        {
            id: 5,
            name: 'Стриж',
            species: 'Apus apus',
            description: 'У стрижей скорее не пение, а пронзительный визг наподобие "стррриииии" или "виииирррриии". Весьма крикливы.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Apus apus`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Apus apus'
        },
        {
            id: 6,
            name: 'Трясогузка',
            species: 'Motacilla alba',
            description: 'Позывка – звонкое "цивлИть", "цирли", "цити" и т.п., реже – односложное "цли", "пти". При тревоге – те же звуки или короткие слитные фразы из нескольких таких криков. Поют редко, только в начале гнездового периода или при сильном беспокойстве.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Motacilla alba`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Motacilla alba'
        }
    ],
    [
        {
            id: 1,
            name: 'Беркут',
            species: 'Aquila chrysaetus',
            description: 'Голос беркута – типичный для орлов клекот – можно услышать во время брачных игр, общения с птенцами и находящимся на гнезде партером или при защите территории.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Aquila chrysaetus`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Aquila chrysaetus'
        },
        {
            id: 2,
            name: 'Куропатка',
            species: 'Perdix',
            description: 'Для куропаток наиболее характерны скрипучие выкрики "чирр", "чир-рик", или "дзюрр-рик".',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Perdix`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Perdix'
        },
        {
            id: 3,
            name: 'Соловей',
            species: 'Luscinia luscinia',
            description: 'Справедливо считается лучшим певцом среди наших птиц. Песня громкая, яркая, запоминающаяся, состоит из четко различимых серий одинаковых звуков – "колен", которые неторопливо следуют одно за другим с небольшими разделительными паузами или слитно, песня звучит практически непрерывно в течение долгого времени.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Luscinia luscinia`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Luscinia luscinia'
        },
        {
            id: 4,
            name: 'Тетерев',
            species: 'Lyrurus tetrix',
            description: 'Если слушать бормотание одиночного тетерева, то можно различить в нем повторение одной и той же глуховатой фразы: "кАрру-кукАрру-куррррррр". Время от времени бормотание прерывается звонкими выкриками "ку-кАррр" и экспрессивными шипящими звуками, которые принято весьма точно изображать как "чуффышшш".',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Lyrurus tetrix`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Lyrurus tetrix'
        },
        {
            id: 5,
            name: 'Ушастая сова',
            species: 'Asio otus',
            description: 'Брачная песня самца состоит из глуховатых односложных криков, повторяемых несколько раз подряд: "хУу-хУу-хУу..." или "ду-ду-ду...". Это несколько похоже на кукование глухой кукушки, но звуки более глухие, редкие и не парные. В тундре можно спутать с токованием дутыша, но крики совы глуше, ниже тоном, ухающие.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Asio otus`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Asio otus'
        },
        {
            id: 6,
            name: 'Цапля',
            species: 'Asio otus',
            description: 'Цапли имеют грубый хриплый крик, похожий на низкое короткое карканье, с некоторыми модуляциями и оттенками. В колониях – подобные крики. Но вообще цапли довольно молчаливы.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Asio otus`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Asio otus'
        }
    ],
    [
        {
            id: 1,
            name: 'Гагара',
            species: 'Gavia',
            description: 'Гага́ры — род водоплавающих птиц, относящихся к монотипичному в настоящее время отряду гагарообразных. Голос очень громкий и разнообразный, состоит из пронзительных воплей и стонов. В период гнездования характерен громкий крик «га-га-га-ррра». У краснозобой гагары этот клич издают оба партнёра, у других же видов — только самец.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Gavia`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Gavia'
        },
        {
            id: 2,
            name: 'Зимородок',
            species: 'Alcedo atthis',
            description: 'Зимородок имеет наиболее обычный контактный и тревожный крик – свистовое "пиик", "псиив" или двусложные крики "чикии", не очень громкие, но далеко слышные, издаваемые обычно небольшими сериями, иногда учащающиеся до трели "чричричричрит".',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Alcedo atthis`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Alcedo atthis'
        },
        {
            id: 3,
            name: 'Лебедь',
            species: 'Cygnus',
            description: 'Лебедь издает разнообразные громкие и очень благозвучные трубные крики – гукание, кликание и пр. Особенно часто подают голос весной.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Cygnus`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Cygnus'
        },
        {
            id: 4,
            name: 'Морянка',
            species: 'Mareca strepera',
            description: 'Морянка — шумная птица, особенно весной и в начале лета. Крик самца — громкое гортанное «а’ауллы», настолько характерное для этого вида, что местные жители называют морянку «аулейка» либо «авлик».',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Mareca strepera`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Mareca strepera'
        },
        {
            id: 5,
            name: 'Турпан',
            species: 'Melanitta fusca',
            description: 'Голос турпана удается слышать чрезвычайно редко. Это негромкое, но резкое щелкающее "чк" и шипящее "чохххх", похожее на громкий выдох или на чуффыканье тетерева. Чаще слышно голос самки – низкое картавое "арарарара, арарарара...", издаваемое обычно в полете.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Melanitta fusca`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Melanitta fusca'
        },
        {
            id: 6,
            name: 'Серая утка',
            species: 'Anas platyrhynchos',
            description: 'Самка утки крякает очень похоже на крякву. Голос самца – звучное низкое "крррэ", или "крррэк".',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Anas platyrhynchos`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Anas platyrhynchos'
        }
    ],
    [
        {
            id: 1,
            name: 'Белый аист',
            species: 'Ciconia ciconia',
            description: 'Белый аист — самый известный из аистов. Это белая птица с чёрными концами крыльев, длинной шеей, длинным, тонким, красным клювом и длинными красноватыми ногами. Когда крылья у аиста сложены, создаётся впечатление, что вся задняя часть тела аиста чёрная. Отсюда его украинское название — черногуз. Самки по окрасу неотличимы от самцов, но несколько меньше.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Ciconia ciconia`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Ciconia ciconia'
        },
        {
            id: 2,
            name: 'Ипатка',
            species: 'Fratercula corniculata',
            description: 'Лапы у ипатки красно-оранжевого или красного цвета. На пальцах острые когти. Между пальцами — перепонки. Клюв короткий, толстый у основания. Самцы крупнее самок. Окраска у самцов и самок одинаковая. ',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Fratercula corniculata`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Fratercula corniculata'
        },
        {
            id: 3,
            name: 'Кайра',
            species: 'Uria',
            description: 'Кайры — род птиц из семейства чистиковых. В их песне присуствуют различные модификации грубых картавых криков: "аррра", "ааар", "уррр" и т.п., в общем похожих на крики толстоклювой кайры.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Uria`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Uria'
        },
        {
            id: 4,
            name: 'Конюга',
            species: 'Aethia',
            description: 'Конюги наиболее мелкие чистиковые. Длина их тела составляет от 19 до 25 см. Окраса буровато-серый. Спина темнее брюха. В период размножения на головах конюг появляются украшения — чёрные хохолки и длинные белые косицы из перьев, а клюв делается оранжевым или красным.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Aethia`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Aethia'
        },
        {
            id: 5,
            name: 'Полярная чайка',
            species: 'Larus glaucoides',
            description: 'Репертуар Чайки состоит в основном из разных вариантов трескучих неприятных криков: "кьяааррр", "кееррр", "киирра", "крре", "керере", и т.п. Вообще птицы очень крикливые, особенно на колониях.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Larus glaucoides`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Larus glaucoides'
        },
        {
            id: 6,
            name: 'Тупик',
            species: 'Fratercula arctica',
            description: 'Ту́пик, или атлантический ту́пик — вид морских птиц из семейства чистиковых отряда ржанкообразных. Обитают на побережьях Атлантического и Северного Ледовитого океанов. Гнездятся в норах на птичьих базарах.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Fratercula arctica`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Fratercula arctica'
        }
    ],
    [
        {
            id: 1,
            name: 'Бекас',
            species: 'Gallinago gallinago',
            description: 'Спугнутый бекас чаще всего издает при взлете смачное "чвек", или "жвяк". Токует в полете, состоящем из подъемов и крутых пикирований, при которых слышен похожий на блеяние звук, издаваемый растопыренными вибрирующими перьями хвоста.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Gallinago gallinago`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Gallinago gallinago'
        },
        {
            id: 2,
            name: 'Дрофа',
            species: 'Otis tarda',
            description: 'Звуки дрофы редки, они изрядно молчаливы. Все логично, гнездясь на достаточно открытых местностях выгоднее вести себя тише и иметь наиболее маскирующий окрас перьев. Звуки самца во время тока напоминают блеянье. Самки же голосом только подзывают птенцов.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Otis tarda`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Otis tarda'
        },
        {
            id: 3,
            name: 'Дубонос',
            species: 'Coccothraustes coccothraustes',
            description: 'Голос дубоноса – негромкое высокое "цик", "цик-цик-цик", "црии". Позывки могут учащаться и сливаться в сухую трель: "цкцкцкцкцк". Песня тихая и короткая, примитивный набор звуков наподобие "тик-вирии-рии-рии" или "чичи-тююр-виви" и т.п.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Coccothraustes coccothraustes`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Coccothraustes coccothraustes'
        },
        {
            id: 4,
            name: 'Жаворонок',
            species: 'Alauda arvensis',
            description: 'Репертуар жаворонка весьма разнообразен, основу его составляют трелевые звуки. Наиболее часто слышна короткая позывка "чрри" ("трри"), которая служит для поддержания контакта с другими особями в полете. ',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Alauda arvensis`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Alauda arvensis'
        },
        {
            id: 5,
            name: 'Перепел',
            species: 'Coturnix coturnix',
            description: 'Брачная песня перепела – далеко слышный резкий крик, повторяющийся много раз кряду и называемый "перепелиным боем". Его изображают как "подь-полоть" или "вить-вильвить". В промежутках между сериями этих криков слышно негромкое ворчливое "ва-вау".',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Coturnix coturnix`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Coturnix coturnix'
        },
        {
            id: 6,
            name: 'Чибис',
            species: 'Vanellus vanellus',
            description: 'При беспокойстве и преследовании хищников чибис издает громкий хриплый крик "хьИ-вы", или "хыввы", который обычно изображают как "чьи вы?". ',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Vanellus vanellus`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Vanellus vanellus'
        }
    ],
    [
        {
            id: 1,
            name: 'Канадский журавль',
            species: 'Grus canadensis',
            description: 'Красивое трубное звучное курлыканье, слышное за несколько километров. При так называемом антифональном дуэте на гнездовой территории пара издает громкие согласованные крики, они сливаются в единую череду курлыкающих сигналов.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Grus canadensis`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Grus canadensis'
        },
        {
            id: 2,
            name: 'Кулик',
            species: 'Calidris maritima',
            description: 'Самая обычная позывка в стаях и у одиночных птиц – негромкое "трик" и серии подобных звуков – "ти-ри-рик", "сив-сив-сив-сив", и пр. При беспокойстве и отведении от гнезда – тихое попискивание. В общем такие же звуки слышно и от птиц, водящих птенцов.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Calidris maritima`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Calidris maritima'
        },
        {
            id: 3,
            name: 'Плавунчик',
            species: 'Phalaropus lobatus',
            description: 'В самых разных ситуациях – короткое "чирк". При беспокойстве у выводков – то же, а также более продолжительное и мягкое "чшшшшк". При ухаживании и других внутривидовых контактах обычны шумные потоки "чиркающих" звуков разных модификаций.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Phalaropus lobatus`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Phalaropus lobatus'
        },
        {
            id: 4,
            name: 'Полярная сова',
            species: 'Bubo scandiacus',
            description: 'Весенняя песня самца состоит из односложных меланхоличных звуков, повторяющихся с интервалами 1,5–3 сек много раз кряду: "гуу, гуу...". Самка поет реже, ее голос более высокий и сипловатый: "хеев, хеев...". Бывает дуэтное пение. ',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Bubo scandiacus`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Bubo scandiacus'
        },
        {
            id: 5,
            name: 'Пуночка',
            species: 'Plectrophenax nivalis',
            description: 'Песня пуночки звонкая, несложная, состоит из нескольких трелей: "ври-вре-ври-вре-врю", "вритетютритерю", "виреври-ревирья", похожа на песню подорожника, но короче, громче и раскатистее.',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Plectrophenax nivalis`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Plectrophenax nivalis'
        },
        {
            id: 6,
            name: 'Тундровая утка',
            species: 'Clangula hyemalis',
            description: 'амка крякает очень похоже на крякву. Голос самца – звучное низкое "крррэ", или "крррэк".',
            image: `https://protected-island-67916.herokuapp.com/birds/image/Clangula hyemalis`,
            audio: 'https://protected-island-67916.herokuapp.com/birds/audio/Clangula hyemalis'
        }
    ]
];

export default birdsData;
