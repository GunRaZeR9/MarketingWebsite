import { LanguageCode, SiteContent } from '../models/site-content';

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export const SITE_CONTENT_BY_LANGUAGE: Record<LanguageCode, SiteContent> = {
  en: {
    language: 'en',
    brandName: 'oOumm Growth Marketing',
    heroTitle: 'Igniting Global Growth With Data-Driven Marketing',
    heroSubtitle:
      'A performance marketing agency built by former Google and Meta specialists to turn clicks into meaningful growth.',
    introTitle: 'Introduction',
    introBody: [
      'We combine strategic insight, creative storytelling, and platform expertise to help brands scale through measurable campaigns.',
      'From awareness to conversion and international expansion, our mission is to transform paid media into predictable business growth.'
    ],
    problemTitle: 'Problem Statement',
    problemPoints: [
      'Limited reach to high-value new customers and weak paid visibility among affluent, design-focused audiences.',
      'Luxury positioning requires precision targeting and conversion clarity, but no paid advertising framework is currently deployed.'
    ],
    solutionsTitle: 'Our Solutions',
    solutions: [
      {
        title: 'Launch Targeted PPC on Meta and Google',
        description:
          'Activate data-driven campaigns for high-intent and luxury-interest audiences to appear where premium buyers are already searching and browsing.'
      },
      {
        title: 'Build a Full-Funnel Paid Media System',
        description:
          'Guide prospects from first discovery to purchase with awareness, consideration, and conversion layers across Meta and Google.'
      },
      {
        title: 'Expand Into New Markets With Geo-Targeting',
        description:
          'Focus budget on high-value regions and cities where luxury demand is strongest to drive efficient international growth.'
      }
    ],
    servicesTitle: 'Discover Our Services',
    services: [
      {
        title: 'Digital Marketing',
        description:
          'Campaign planning and execution across Google Ads and Meta Ads to generate qualified traffic, stronger engagement, and sustainable ROI.'
      },
      {
        title: 'Marketing Analytics',
        description:
          'Advanced tracking and reporting with GA4, Meta Pixel, and API integrations to support smarter budget allocation and continuous optimization.'
      }
    ],
    advantagesTitle: 'Key Competitive Advantages',
    advantages: [
      {
        title: 'Expert Team',
        description:
          'Specialized professionals with practical, hands-on experience across high-performance paid media programs.'
      },
      {
        title: 'Platform Expertise From the Inside',
        description:
          'Former Google and Meta professionals with direct knowledge of ad systems, auction mechanics, and optimization levers.'
      },
      {
        title: 'Customer Focus',
        description:
          'Relationship-first collaboration built around client goals and long-term performance partnerships.'
      },
      {
        title: 'Data-Driven Execution',
        description:
          'Every decision is backed by measurement, experimentation, and iterative optimization for scalable growth.'
      }
    ],
    pricingTitle: 'Revenue Model',
    pricingSubtitle: 'Choose a plan designed for your stage of growth.',
    pricingPlans: [
      {
        name: 'Standard Plan',
        price: '500 EUR / month',
        description: 'Best for focused channel activation with monthly reporting.',
        ctaLabel: 'Choose Standard'
      },
      {
        name: 'Premium Plan',
        price: '800 EUR / month',
        description: 'Built for brands scaling aggressively across channels.',
        ctaLabel: 'Choose Premium',
        featured: true
      }
    ],
    pricingFeatures: [
      { label: 'Google and Meta Marketing', standard: true, premium: true },
      { label: 'Performance Reporting', standard: true, premium: true },
      { label: 'Support Level', standard: true, premium: true },
      { label: 'Tracking Integration', standard: false, premium: true },
      { label: 'Feed Optimization', standard: false, premium: true },
      { label: 'SEO Management', standard: false, premium: true },
      { label: 'Pinterest Ads', standard: false, premium: true },
      { label: 'TikTok Ads', standard: false, premium: true }
    ],
    contactTitle: 'Ready to Scale Your Marketing?',
    contactSubtitle:
      'Share your goals and we will propose a performance plan tailored to your audience, budget, and growth targets.',
    primaryCta: 'Get a Growth Plan',
    contact: {
      person: 'Andrei Puscas',
      role: 'Marketing Specialist',
      email: 'puscas.forbusiness@gmail.com'
    },
    ui: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services',
        pricing: 'Pricing',
        contact: 'Contact'
      },
      languageLabel: 'Language',
      homeExploreServices: 'Explore Services',
      headerCta: 'Get a Growth Plan',
      footerTagline: 'Former Google and Meta specialists helping brands scale globally.',
      footerContactLabel: 'Contact',
      footerCopyrightPrefix: 'Copyright',
      aboutEyebrow: 'About',
      aboutTitle: 'Specialists Built for Performance Marketing',
      aboutLead:
        'Our team combines in-platform expertise with practical campaign leadership to build full-funnel systems that produce measurable results.',
      servicesEyebrow: 'Services',
      servicesLead:
        'We design channel strategy, creative execution, and analytics infrastructure so every campaign is measurable, accountable, and scalable.',
      pricingEyebrow: 'Pricing',
      pricingFeatureComparison: 'Feature Comparison',
      pricingTableAriaLabel: 'Pricing feature comparison',
      pricingFeatureHeader: 'Feature',
      pricingStandardHeader: 'Standard',
      pricingPremiumHeader: 'Premium',
      pricingIncluded: 'Included',
      pricingOptional: 'Optional',
      contactEyebrow: 'Contact',
      contactShareGoals: 'Share Your Growth Goals',
      contactForm: {
        fullNameLabel: 'Full name',
        fullNamePlaceholder: 'Your name',
        fullNameValidation: 'Name is required.',
        emailLabel: 'Business email',
        emailPlaceholder: 'you@company.com',
        emailValidation: 'Enter a valid email.',
        companyLabel: 'Company',
        companyPlaceholder: 'Company name',
        companyValidation: 'Company is required.',
        budgetLabel: 'Monthly media budget',
        budgetPlaceholder: 'Select budget range',
        budgetValidation: 'Budget range is required.',
        budgetOptions: [
          { value: 'under-1000', label: 'Under 1,000 EUR' },
          { value: '1000-3000', label: '1,000 - 3,000 EUR' },
          { value: '3000-10000', label: '3,000 - 10,000 EUR' },
          { value: '10000-plus', label: '10,000+ EUR' }
        ],
        goalsLabel: 'Growth goals',
        goalsPlaceholder: 'Tell us what results you want to achieve',
        goalsValidation: 'Please provide at least 20 characters.',
        submitLabel: 'Submit Lead'
      },
      leadSavedMessage:
        'Lead saved successfully. We will use your details to prepare a tailored growth proposal.'
    },
    seo: {
      home: {
        title: 'Home',
        description:
          'Data-driven marketing agency helping luxury and growth-oriented brands scale with Meta and Google campaigns.',
        keywords: ['marketing agency', 'google ads', 'meta ads', 'growth marketing', 'performance marketing']
      },
      about: {
        title: 'About',
        description: 'Meet the team of former Google and Meta professionals focused on measurable growth for premium brands.',
        keywords: ['about marketing agency', 'google meta experts', 'performance team', 'luxury brand growth']
      },
      services: {
        title: 'Services',
        description: 'Explore our digital marketing and analytics services across Google Ads and Meta Ads.',
        keywords: ['digital marketing services', 'marketing analytics', 'ga4 tracking', 'meta pixel']
      },
      pricing: {
        title: 'Pricing',
        description: 'Compare standard and premium monthly growth plans for performance marketing.',
        keywords: ['marketing pricing', 'monthly marketing plans', 'google ads management pricing']
      },
      contact: {
        title: 'Contact',
        description: 'Send your growth goals and receive a tailored performance marketing plan.',
        keywords: ['contact marketing agency', 'request growth plan', 'lead form']
      }
    }
  },
  ro: {
    language: 'ro',
    brandName: 'oOumm Growth Marketing',
    heroTitle: 'Acceleram Cresterea Globala Prin Marketing Bazat pe Date',
    heroSubtitle:
      'Agentie de marketing de performanta, construita de fosti specialisti Google si Meta, care transforma click-urile in crestere reala.',
    introTitle: 'Introducere',
    introBody: [
      'Combinam strategie, storytelling creativ si expertiza de platforma pentru a scala brandurile prin campanii masurabile.',
      'De la awareness la conversie si extindere internationala, misiunea noastra este sa transformam media platita in crestere predictibila.'
    ],
    problemTitle: 'Problema',
    problemPoints: [
      'Acoperire limitata catre clienti noi cu valoare mare si vizibilitate redusa in randul audientelor premium, orientate spre design.',
      'Pozitionarea premium necesita targetare precisa si claritate pe conversii, dar nu exista inca un framework complet de advertising platit.'
    ],
    solutionsTitle: 'Solutiile Noastre',
    solutions: [
      {
        title: 'Lansare PPC Targetat pe Meta si Google',
        description:
          'Activam campanii bazate pe date pentru audiente cu intentie ridicata si interes in zona luxury, exact acolo unde clientii premium cauta.'
      },
      {
        title: 'Sistem Full-Funnel de Paid Media',
        description:
          'Ghidam prospectii de la prima interactiune pana la achizitie, prin campanii de awareness, considerare si conversie.'
      },
      {
        title: 'Extindere in Piete Noi cu Geo-Targetare',
        description:
          'Directionam bugetul catre regiuni si orase cu potential ridicat de conversie pentru crestere internationala eficienta.'
      }
    ],
    servicesTitle: 'Descopera Serviciile Noastre',
    services: [
      {
        title: 'Marketing Digital',
        description:
          'Planificare si executie de campanii pe Google Ads si Meta Ads pentru trafic calificat, engagement puternic si ROI sustenabil.'
      },
      {
        title: 'Analytics de Marketing',
        description:
          'Tracking avansat si raportare cu GA4, Meta Pixel si integrari API pentru optimizare continua si alocare inteligenta a bugetului.'
      }
    ],
    advantagesTitle: 'Avantaje Competitive Cheie',
    advantages: [
      {
        title: 'Echipa de Experti',
        description: 'Specialisti cu experienta practica in programe complexe de paid media orientate pe performanta.'
      },
      {
        title: 'Expertiza Din Interiorul Platformelor',
        description: 'Fosti profesionisti Google si Meta, cu intelegere profunda a algoritmilor si mecanicilor de licitatie.'
      },
      {
        title: 'Focus pe Client',
        description: 'Colaborare construita pe obiective de business, incredere si parteneriate pe termen lung.'
      },
      {
        title: 'Executie Bazata pe Date',
        description: 'Fiecare decizie este sustinuta de masurare, testare si optimizare iterativa pentru crestere scalabila.'
      }
    ],
    pricingTitle: 'Model de Tarifare',
    pricingSubtitle: 'Alege planul potrivit pentru etapa ta de crestere.',
    pricingPlans: [
      {
        name: 'Plan Standard',
        price: '500 EUR / luna',
        description: 'Ideal pentru activare concentrata de canale si raportare lunara.',
        ctaLabel: 'Alege Standard'
      },
      {
        name: 'Plan Premium',
        price: '800 EUR / luna',
        description: 'Pentru branduri care scaleaza accelerat pe mai multe canale.',
        ctaLabel: 'Alege Premium',
        featured: true
      }
    ],
    pricingFeatures: [
      { label: 'Marketing pe Google si Meta', standard: true, premium: true },
      { label: 'Raportare performanta', standard: true, premium: true },
      { label: 'Nivel suport', standard: true, premium: true },
      { label: 'Integrare tracking', standard: false, premium: true },
      { label: 'Optimizare feed', standard: false, premium: true },
      { label: 'Management SEO', standard: false, premium: true },
      { label: 'Reclame Pinterest', standard: false, premium: true },
      { label: 'Reclame TikTok', standard: false, premium: true }
    ],
    contactTitle: 'Pregatit sa Iti Scalezi Marketingul?',
    contactSubtitle:
      'Spune-ne obiectivele tale si iti propunem un plan de performanta adaptat audientei, bugetului si tintelor de crestere.',
    primaryCta: 'Solicita Plan de Crestere',
    contact: {
      person: 'Andrei Puscas',
      role: 'Specialist Marketing',
      email: 'puscas.forbusiness@gmail.com'
    },
    ui: {
      nav: {
        home: 'Acasa',
        about: 'Despre',
        services: 'Servicii',
        pricing: 'Preturi',
        contact: 'Contact'
      },
      languageLabel: 'Limba',
      homeExploreServices: 'Vezi Serviciile',
      headerCta: 'Solicita Plan de Crestere',
      footerTagline: 'Fosti specialisti Google si Meta care ajuta brandurile sa creasca la nivel global.',
      footerContactLabel: 'Contact',
      footerCopyrightPrefix: 'Drepturi rezervate',
      aboutEyebrow: 'Despre',
      aboutTitle: 'Specialisti Dedicati Marketingului de Performanta',
      aboutLead:
        'Echipa noastra combina expertiza directa in platforme cu executie practica pentru a construi sisteme full-funnel cu rezultate masurabile.',
      servicesEyebrow: 'Servicii',
      servicesLead:
        'Construim strategie de canal, executie creativa si infrastructura analytics, astfel incat fiecare campanie sa fie masurabila si scalabila.',
      pricingEyebrow: 'Preturi',
      pricingFeatureComparison: 'Comparatie Functionalitati',
      pricingTableAriaLabel: 'Comparatie functionalitati preturi',
      pricingFeatureHeader: 'Functionalitate',
      pricingStandardHeader: 'Standard',
      pricingPremiumHeader: 'Premium',
      pricingIncluded: 'Inclus',
      pricingOptional: 'Optional',
      contactEyebrow: 'Contact',
      contactShareGoals: 'Spune-ne Obiectivele Tale de Crestere',
      contactForm: {
        fullNameLabel: 'Nume complet',
        fullNamePlaceholder: 'Numele tau',
        fullNameValidation: 'Numele este obligatoriu.',
        emailLabel: 'Email business',
        emailPlaceholder: 'tu@companie.ro',
        emailValidation: 'Introdu un email valid.',
        companyLabel: 'Companie',
        companyPlaceholder: 'Numele companiei',
        companyValidation: 'Compania este obligatorie.',
        budgetLabel: 'Buget media lunar',
        budgetPlaceholder: 'Selecteaza intervalul de buget',
        budgetValidation: 'Intervalul de buget este obligatoriu.',
        budgetOptions: [
          { value: 'under-1000', label: 'Sub 1.000 EUR' },
          { value: '1000-3000', label: '1.000 - 3.000 EUR' },
          { value: '3000-10000', label: '3.000 - 10.000 EUR' },
          { value: '10000-plus', label: '10.000+ EUR' }
        ],
        goalsLabel: 'Obiective de crestere',
        goalsPlaceholder: 'Spune-ne ce rezultate vrei sa obtii',
        goalsValidation: 'Te rugam sa introduci minimum 20 de caractere.',
        submitLabel: 'Trimite Lead'
      },
      leadSavedMessage: 'Lead-ul a fost salvat. Vom pregati o propunere personalizata de crestere.'
    },
    seo: {
      home: {
        title: 'Acasa',
        description:
          'Agentie de marketing bazata pe date, care ajuta brandurile premium sa creasca prin campanii Meta si Google.',
        keywords: ['agentie marketing', 'google ads', 'meta ads', 'marketing performanta', 'crestere business']
      },
      about: {
        title: 'Despre',
        description: 'Cunoaste echipa de fosti specialisti Google si Meta axata pe crestere masurabila pentru branduri premium.',
        keywords: ['despre agentie marketing', 'experti google meta', 'echipa performanta']
      },
      services: {
        title: 'Servicii',
        description: 'Descopera serviciile noastre de marketing digital si analytics pe Google Ads si Meta Ads.',
        keywords: ['servicii marketing digital', 'analytics marketing', 'ga4', 'meta pixel']
      },
      pricing: {
        title: 'Preturi',
        description: 'Compara planurile lunare Standard si Premium pentru marketing de performanta.',
        keywords: ['preturi marketing', 'planuri marketing lunar', 'management google ads pret']
      },
      contact: {
        title: 'Contact',
        description: 'Trimite obiectivele tale si primesti un plan personalizat de marketing de performanta.',
        keywords: ['contact agentie marketing', 'solicita plan crestere', 'formular lead']
      }
    }
  },
  hu: {
    language: 'hu',
    brandName: 'oOumm Growth Marketing',
    heroTitle: 'Globalis Novekedes Adatalapu Marketinggal',
    heroSubtitle:
      'Teljesitmenymarketing ugynokseg volt Google es Meta szakemberekkel, akik a kattintasokat valodi novekedesse alakitjak.',
    introTitle: 'Bemutatkozas',
    introBody: [
      'Strategiai gondolkodast, kreativ storytellinget es platformszintu szakertelmet egyesitunk, hogy merheto kampanyokkal skálazzuk a markakat.',
      'Az ismertseg novelestol a konverzioig es a nemzetkozi terjeszkedesig kuldetesunk a fizetett media kiszamithato uzleti novekedesse alakitasa.'
    ],
    problemTitle: 'Problemafelvetes',
    problemPoints: [
      'Korlatozott eleres a magas erteku uj ugyfelek fele, es alacsony fizetett lathatosag a premium, designorientalt kozonsegben.',
      'A premium pozicionalashoz preciz celzas es konverzios atlathatosag kell, de jelenleg nincs teljes fizetett hirdetesi keretrendszer.'
    ],
    solutionsTitle: 'Megoldasaink',
    solutions: [
      {
        title: 'Celzott PPC Inditas Meta es Google Platformokon',
        description:
          'Adatalapu kampanyokat inditunk magas szandeku, luxury erdeklodesu kozonsegeknek ott, ahol a premium vasarlok mar keresnek.'
      },
      {
        title: 'Teljes Funnel Fizetett Media Rendszer',
        description:
          'A felhasznalot az elso talalkozastol a vasarlasig vezetjuk awareness, consideration es conversion retegekkel.'
      },
      {
        title: 'Uj Piacokba Lepes Geo-Targetalassal',
        description:
          'A koltsegkeretet a legnagyobb konverzios potencialu regio kra es varosokra fokuszaljuk a hatekony nemzetkozi novekedesert.'
      }
    ],
    servicesTitle: 'Szolgaltatasaink',
    services: [
      {
        title: 'Digitalis Marketing',
        description:
          'Kampanytervezes es menedzsment Google Ads es Meta Ads feluleteken minosegi forgalomert, eros elkovetodesert es fenntarthato ROI-ert.'
      },
      {
        title: 'Marketing Analitika',
        description:
          'Fejlett meres es riportalas GA4, Meta Pixel es API integraciokkal az intelligens koltsegelosztas es folyamatos optimalizalas erdekeben.'
      }
    ],
    advantagesTitle: 'Fo Versenyelonyok',
    advantages: [
      {
        title: 'Szakerto Csapat',
        description: 'Tapasztalt specialistak gyakorlati tudassal komplex teljesitmenymarketing programokban.'
      },
      {
        title: 'Platformismeret Belulrol',
        description: 'Volt Google es Meta szakemberek, mely algoritmusokat es aukcios mechanizmusokat melyen ertik.'
      },
      {
        title: 'Ugyfelkozpontu Megkozelites',
        description: 'Hosszu tavu egyuttmukodesek bizalomra es uzleti celokra epitve.'
      },
      {
        title: 'Adatalapu Vegrehajtas',
        description: 'Minden dontes meresen, kiserletezesen es iterativ optimalizalason alapul.'
      }
    ],
    pricingTitle: 'Dijcsomagok',
    pricingSubtitle: 'Valaszd ki a novekedesi szintedhez illo csomagot.',
    pricingPlans: [
      {
        name: 'Standard Csomag',
        price: '500 EUR / ho',
        description: 'Ideal célzott csatornaaktiválashoz es havi riportokhoz.',
        ctaLabel: 'Standard Valasztasa'
      },
      {
        name: 'Premium Csomag',
        price: '800 EUR / ho',
        description: 'Tobb csatornas, gyors skalazashoz tervezve.',
        ctaLabel: 'Premium Valasztasa',
        featured: true
      }
    ],
    pricingFeatures: [
      { label: 'Google es Meta Marketing', standard: true, premium: true },
      { label: 'Teljesitmenyriport', standard: true, premium: true },
      { label: 'Tamogatasi szint', standard: true, premium: true },
      { label: 'Tracking integracio', standard: false, premium: true },
      { label: 'Feed optimalizalas', standard: false, premium: true },
      { label: 'SEO menedzsment', standard: false, premium: true },
      { label: 'Pinterest hirdetesek', standard: false, premium: true },
      { label: 'TikTok hirdetesek', standard: false, premium: true }
    ],
    contactTitle: 'Keszen Allsz Marketinged Skalazasara?',
    contactSubtitle:
      'Oszd meg celjaidat, es szemelyre szabott teljesitmenytervet keszitunk kozonsegedhez, koltsegkeretedhez es novekedesi celjaidhoz.',
    primaryCta: 'Novekedesi Terv Keresese',
    contact: {
      person: 'Andrei Puscas',
      role: 'Marketing Specialista',
      email: 'puscas.forbusiness@gmail.com'
    },
    ui: {
      nav: {
        home: 'Kezdolap',
        about: 'Rolunk',
        services: 'Szolgaltatasok',
        pricing: 'Arak',
        contact: 'Kapcsolat'
      },
      languageLabel: 'Nyelv',
      homeExploreServices: 'Szolgaltatasok Megtekintese',
      headerCta: 'Novekedesi Terv Keresese',
      footerTagline: 'Volt Google es Meta szakemberek, akik segitik a markak globalis novekedeset.',
      footerContactLabel: 'Kapcsolat',
      footerCopyrightPrefix: 'Szerzoi jog',
      aboutEyebrow: 'Rolunk',
      aboutTitle: 'Specialistak a Teljesitmenymarketing Szolgalataban',
      aboutLead:
        'Csapatunk platformszintu szakertelmet es gyakorlati kampanyvezetest egyesit, hogy merheto eredmenyu full-funnel rendszereket epitsen.',
      servicesEyebrow: 'Szolgaltatasok',
      servicesLead:
        'Csatornastratégiat, kreativ vegrehajtast es analitikai infrastrukturat epitunk, hogy minden kampany merheto es skalazhato legyen.',
      pricingEyebrow: 'Arak',
      pricingFeatureComparison: 'Funkcio Osszehasonlitas',
      pricingTableAriaLabel: 'Arcsomag funkcio osszehasonlitas',
      pricingFeatureHeader: 'Funkcio',
      pricingStandardHeader: 'Standard',
      pricingPremiumHeader: 'Premium',
      pricingIncluded: 'Tartalmazza',
      pricingOptional: 'Opcionalis',
      contactEyebrow: 'Kapcsolat',
      contactShareGoals: 'Oszd Meg Novekedesi Celjaidat',
      contactForm: {
        fullNameLabel: 'Teljes nev',
        fullNamePlaceholder: 'Neved',
        fullNameValidation: 'A nev megadasa kotelezo.',
        emailLabel: 'Uzleti email',
        emailPlaceholder: 'te@ceg.hu',
        emailValidation: 'Adj meg ervenyes email cimet.',
        companyLabel: 'Ceg',
        companyPlaceholder: 'Ceg neve',
        companyValidation: 'A ceg megadasa kotelezo.',
        budgetLabel: 'Havi media koltsegkeret',
        budgetPlaceholder: 'Valassz koltsegkeretet',
        budgetValidation: 'A koltsegkeret megadasa kotelezo.',
        budgetOptions: [
          { value: 'under-1000', label: '1000 EUR alatt' },
          { value: '1000-3000', label: '1000 - 3000 EUR' },
          { value: '3000-10000', label: '3000 - 10 000 EUR' },
          { value: '10000-plus', label: '10 000+ EUR' }
        ],
        goalsLabel: 'Novekedesi celok',
        goalsPlaceholder: 'Ird le, milyen eredmenyeket szeretnel elerni',
        goalsValidation: 'Legalabb 20 karakter megadasa szukseges.',
        submitLabel: 'Lead Bekuldese'
      },
      leadSavedMessage: 'A lead sikeresen elmentve. Hamarosan szemelyre szabott novekedesi tervet keszitunk.'
    },
    seo: {
      home: {
        title: 'Kezdolap',
        description: 'Adatalapu marketingugynokseg, amely premium markakat skalaz Meta es Google kampanyokkal.',
        keywords: ['marketingugynokseg', 'google ads', 'meta ads', 'teljesitmenymarketing', 'uzleti novekedes']
      },
      about: {
        title: 'Rolunk',
        description: 'Ismerd meg a volt Google es Meta szakemberekbol allo csapatot, akik merheto novekedest hoznak premium markaknak.',
        keywords: ['marketingugynokseg rolunk', 'google meta szakertok', 'teljesitmeny csapat']
      },
      services: {
        title: 'Szolgaltatasok',
        description: 'Digitalis marketing es analitikai szolgaltatasok Google Ads es Meta Ads platformokon.',
        keywords: ['digitalis marketing szolgaltatasok', 'marketing analitika', 'ga4', 'meta pixel']
      },
      pricing: {
        title: 'Arak',
        description: 'Hasonlitsd ossze a Standard es Premium havi teljesitmenymarketing csomagokat.',
        keywords: ['marketing arak', 'havi marketing csomag', 'google ads menedzsment ar']
      },
      contact: {
        title: 'Kapcsolat',
        description: 'Kuldd el celjaidat, es szemelyre szabott teljesitmenymarketing tervet keszitunk.',
        keywords: ['marketingugynokseg kapcsolat', 'novekedesi terv kerese', 'lead urlap']
      }
    }
  }
};
