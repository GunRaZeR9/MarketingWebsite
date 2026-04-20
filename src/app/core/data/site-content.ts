import { LanguageCode, SiteContent } from '../models/site-content';

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export const SITE_CONTENT_BY_LANGUAGE: Record<LanguageCode, SiteContent> = {
  en: {
    language: 'en',
    brandName: 'InsideGrowth',
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
      footerNavigateLabel: 'Navigate',
      footerAllRightsReserved: 'All rights reserved',
      footerPrivacyPolicy: 'Privacy Policy',
      footerCookiePolicy: 'Cookie Policy',
      footerTermsConditions: 'Terms & Conditions',
      footerCopyrightPrefix: 'Copyright',
      homeWhoWeAre: 'Who We Are',
      homeStrategiesTitle: 'Strategies That Deliver Real Results',
      homeAboutUs: 'About Us',
      homeReadyTitle: 'Ready to Break Through the Noise?',
      homeStartGrowing: 'Start Growing',
      homeViewPricing: 'View Pricing',
      statsCampaignsRun: 'Campaigns Run',
      statsAverageRoi: 'Average ROI',
      statsTopPlatforms: 'Top Platforms',
      statsDataDriven: 'Data-Driven',
      aboutMissionEyebrow: 'Our Mission',
      aboutPlatformsEyebrow: 'Platforms',
      aboutWhyChooseUs: 'Why Choose Us',
      servicesApproachEyebrow: 'Our Approach',
      cookieConsentMessage: 'We use cookies to improve your experience. By continuing, you agree to our Cookie Policy.',
      cookieConsentAccept: 'Accept',
      cookieConsentDecline: 'Decline',
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
          'InsideGrowth – data-driven marketing agency helping brands scale with Meta and Google campaigns. insideads.ro',
        keywords: ['InsideGrowth', 'marketing agency', 'google ads', 'meta ads', 'growth marketing', 'performance marketing']
      },
      about: {
        title: 'About',
        description: 'Meet the InsideGrowth team of former Google and Meta professionals focused on measurable growth.',
        keywords: ['InsideGrowth about', 'google meta experts', 'performance team', 'insideads.ro']
      },
      services: {
        title: 'Services',
        description: 'Explore InsideGrowth digital marketing and analytics services across Google Ads and Meta Ads.',
        keywords: ['InsideGrowth services', 'digital marketing', 'marketing analytics', 'ga4 tracking', 'meta pixel']
      },
      pricing: {
        title: 'Pricing',
        description: 'Compare InsideGrowth standard and premium monthly growth plans for performance marketing.',
        keywords: ['InsideGrowth pricing', 'marketing plans', 'google ads management pricing']
      },
      contact: {
        title: 'Contact',
        description: 'Contact InsideGrowth – send your growth goals and receive a tailored performance marketing plan.',
        keywords: ['contact InsideGrowth', 'request growth plan', 'insideads.ro contact']
      },
      privacyPolicy: {
        title: 'Privacy Policy',
        description: 'Read the InsideGrowth privacy policy. Learn how we collect, use, and protect your personal data.',
        keywords: ['InsideGrowth privacy policy', 'data protection', 'GDPR', 'insideads.ro']
      },
      cookiePolicy: {
        title: 'Cookie Policy',
        description: 'Learn how InsideGrowth uses cookies to improve your website experience.',
        keywords: ['InsideGrowth cookie policy', 'cookies', 'analytics cookies', 'insideads.ro']
      },
      termsConditions: {
        title: 'Terms & Conditions',
        description: 'Read the InsideGrowth terms and conditions governing the use of our services and website.',
        keywords: ['InsideGrowth terms', 'terms and conditions', 'service agreement', 'insideads.ro']
      }
    },
    legal: {
      privacyPolicy: {
        title: 'Privacy Policy',
        lastUpdated: 'April 2026',
        sections: [
          {
            heading: 'Who We Are',
            paragraphs: [
              'InsideGrowth is a performance marketing agency based in Romania, operating at insideads.ro. We are committed to protecting your personal data in accordance with the General Data Protection Regulation (GDPR) and applicable Romanian law.',
              'This Privacy Policy explains what personal data we collect, how we use it, and your rights in relation to it.'
            ]
          },
          {
            heading: 'What Data We Collect',
            paragraphs: [
              'We may collect the following categories of personal data: name and contact details (email, phone number), company name, information you provide through our contact form (growth goals, monthly budget), technical data (IP address, browser type, device information), and usage data collected through analytics tools.'
            ]
          },
          {
            heading: 'How We Use Your Data',
            paragraphs: [
              'We use your personal data to respond to your inquiries and provide requested services, prepare customized marketing proposals, improve our website and services, comply with legal obligations, and send relevant marketing communications where you have given consent.'
            ]
          },
          {
            heading: 'Third-Party Services',
            paragraphs: [
              'We use Google Analytics and Meta Pixel for website analytics. These services may set their own cookies and process data in accordance with their own privacy policies.',
              'Your data may be processed by Google LLC (Google Ads, Google Analytics) and Meta Platforms Inc. (Meta Ads, Meta Pixel). We encourage you to review their respective privacy policies.'
            ]
          },
          {
            heading: 'Data Retention',
            paragraphs: [
              'We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy or as required by law. Contact form data is retained for a maximum of 2 years after the last interaction.'
            ]
          },
          {
            heading: 'Your Rights',
            paragraphs: [
              'Under the GDPR, you have the right to: access your personal data, correct inaccurate data, request deletion of your data ("right to be forgotten"), restrict or object to processing, receive your data in a portable format, and withdraw consent at any time.',
              'To exercise any of these rights, please contact us using the details below.'
            ]
          },
          {
            heading: 'Contact',
            paragraphs: [
              'For any privacy-related inquiries or to exercise your rights, please contact us at: puscas.forbusiness@gmail.com',
              'InsideGrowth — insideads.ro'
            ]
          }
        ]
      },
      cookiePolicy: {
        title: 'Cookie Policy',
        lastUpdated: 'April 2026',
        sections: [
          {
            heading: 'What Are Cookies',
            paragraphs: [
              'Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, improve performance, and deliver relevant content.'
            ]
          },
          {
            heading: 'Types of Cookies We Use',
            paragraphs: [
              'Essential Cookies: These are required for the basic functionality of our website. They cannot be disabled without affecting how the site works.',
              'Analytics Cookies: We use Google Analytics to understand how visitors interact with our website. This data helps us improve our content and user experience.',
              'Marketing Cookies: We use Meta Pixel to measure the effectiveness of our advertising campaigns and deliver relevant ads to users who have visited our site.'
            ]
          },
          {
            heading: 'Third-Party Cookies',
            paragraphs: [
              'Our website may include cookies set by third-party services including Google Analytics, Google Ads, and Meta (Facebook). These providers maintain their own privacy and cookie policies which we encourage you to review.'
            ]
          },
          {
            heading: 'Managing Cookies',
            paragraphs: [
              'You can control and manage cookies through your browser settings. Most browsers allow you to view, delete, and block cookies from specific websites or all websites.',
              'Please note that disabling certain cookies may affect the functionality and user experience of our website. Declining non-essential cookies will not prevent you from using our core services.'
            ]
          },
          {
            heading: 'Updates to This Policy',
            paragraphs: [
              'We may update this Cookie Policy from time to time to reflect changes in our practices or applicable law. We will notify you of significant changes by updating the date at the top of this page.',
              'For questions about our use of cookies, contact us at: puscas.forbusiness@gmail.com'
            ]
          }
        ]
      },
      termsConditions: {
        title: 'Terms & Conditions',
        lastUpdated: 'April 2026',
        sections: [
          {
            heading: 'Agreement to Terms',
            paragraphs: [
              'By accessing and using insideads.ro, you accept and agree to be bound by these Terms & Conditions and our Privacy Policy. If you do not agree to these terms, please do not use our website or services.'
            ]
          },
          {
            heading: 'Services',
            paragraphs: [
              'InsideGrowth provides performance marketing services including Google Ads management, Meta Ads management, marketing analytics, SEO management, and related digital marketing services.',
              'Service details, scope, deliverables, and timelines are outlined in individual service agreements signed between InsideGrowth and each client.'
            ]
          },
          {
            heading: 'Payment Terms',
            paragraphs: [
              'Payment terms are defined in individual service contracts. Standard payment is monthly in advance before service delivery begins.',
              'Late payments may result in service suspension until the outstanding balance is resolved. All prices are quoted in EUR and exclude applicable VAT and taxes.'
            ]
          },
          {
            heading: 'Intellectual Property',
            paragraphs: [
              'All content on insideads.ro, including text, graphics, logos, images, and software, is the property of InsideGrowth and is protected by applicable intellectual property laws.',
              'You may not reproduce, distribute, modify, or create derivative works from any content on this website without our express written permission.'
            ]
          },
          {
            heading: 'Limitation of Liability',
            paragraphs: [
              'InsideGrowth shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services or website, including loss of revenue, loss of data, or business interruption.',
              'Our total liability for any claim arising from the use of our services shall not exceed the amount paid for those services in the preceding calendar month.'
            ]
          },
          {
            heading: 'Governing Law',
            paragraphs: [
              'These Terms & Conditions are governed by the laws of Romania. Any disputes arising from the use of our website or services shall be subject to the exclusive jurisdiction of the courts of Romania.'
            ]
          },
          {
            heading: 'Contact',
            paragraphs: [
              'For questions regarding these Terms & Conditions, please contact us at: puscas.forbusiness@gmail.com',
              'InsideGrowth — insideads.ro'
            ]
          }
        ]
      }
    }
  },
  ro: {
    language: 'ro',
    brandName: 'InsideGrowth',
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
      footerNavigateLabel: 'Navigare',
      footerAllRightsReserved: 'Toate drepturile rezervate',
      footerPrivacyPolicy: 'Politica de Confidentialitate',
      footerCookiePolicy: 'Politica de Cookie-uri',
      footerTermsConditions: 'Termeni si Conditii',
      footerCopyrightPrefix: 'Drepturi rezervate',
      homeWhoWeAre: 'Cine Suntem',
      homeStrategiesTitle: 'Strategii care Aduc Rezultate Reale',
      homeAboutUs: 'Despre Noi',
      homeReadyTitle: 'Gata sa Depasesti Concurenta?',
      homeStartGrowing: 'Incepe sa Cresti',
      homeViewPricing: 'Vezi Preturile',
      statsCampaignsRun: 'Campanii Rulate',
      statsAverageRoi: 'ROI Mediu',
      statsTopPlatforms: 'Platforme de Top',
      statsDataDriven: 'Bazat pe Date',
      aboutMissionEyebrow: 'Misiunea Noastra',
      aboutPlatformsEyebrow: 'Platforme',
      aboutWhyChooseUs: 'De Ce Noi',
      servicesApproachEyebrow: 'Abordarea Noastra',
      cookieConsentMessage: 'Folosim cookie-uri pentru a imbunatati experienta ta. Continuand, accepti Politica noastra de Cookie-uri.',
      cookieConsentAccept: 'Accept',
      cookieConsentDecline: 'Refuz',
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
          'InsideGrowth – agentie de marketing bazata pe date, care ajuta brandurile sa creasca prin campanii Meta si Google. insideads.ro',
        keywords: ['InsideGrowth', 'agentie marketing', 'google ads', 'meta ads', 'marketing performanta', 'crestere business']
      },
      about: {
        title: 'Despre',
        description: 'Cunoaste echipa InsideGrowth de fosti specialisti Google si Meta axata pe crestere masurabila.',
        keywords: ['InsideGrowth despre', 'experti google meta', 'echipa performanta', 'insideads.ro']
      },
      services: {
        title: 'Servicii',
        description: 'Descopera serviciile InsideGrowth de marketing digital si analytics pe Google Ads si Meta Ads.',
        keywords: ['InsideGrowth servicii', 'marketing digital', 'analytics marketing', 'ga4', 'meta pixel']
      },
      pricing: {
        title: 'Preturi',
        description: 'Compara planurile lunare Standard si Premium InsideGrowth pentru marketing de performanta.',
        keywords: ['InsideGrowth preturi', 'planuri marketing lunar', 'management google ads pret']
      },
      contact: {
        title: 'Contact',
        description: 'Contacteaza InsideGrowth – trimite obiectivele tale si primesti un plan personalizat de marketing.',
        keywords: ['contact InsideGrowth', 'solicita plan crestere', 'insideads.ro contact']
      },
      privacyPolicy: {
        title: 'Politica de Confidentialitate',
        description: 'Citeste politica de confidentialitate InsideGrowth. Afla cum colectam si protejam datele tale personale.',
        keywords: ['InsideGrowth confidentialitate', 'protectia datelor', 'GDPR', 'insideads.ro']
      },
      cookiePolicy: {
        title: 'Politica de Cookie-uri',
        description: 'Afla cum utilizeaza InsideGrowth cookie-urile pentru a imbunatati experienta pe site.',
        keywords: ['InsideGrowth cookie-uri', 'politica cookie', 'analytics', 'insideads.ro']
      },
      termsConditions: {
        title: 'Termeni si Conditii',
        description: 'Citeste termenii si conditiile InsideGrowth care guverneaza utilizarea serviciilor si site-ului nostru.',
        keywords: ['InsideGrowth termeni', 'termeni si conditii', 'acord servicii', 'insideads.ro']
      }
    },
    legal: {
      privacyPolicy: {
        title: 'Politica de Confidentialitate',
        lastUpdated: 'Aprilie 2026',
        sections: [
          {
            heading: 'Cine Suntem',
            paragraphs: [
              'InsideGrowth este o agentie de marketing de performanta cu sediul in Romania, operand la insideads.ro. Ne angajam sa protejam datele tale personale in conformitate cu Regulamentul General privind Protectia Datelor (GDPR) si legislatia romana aplicabila.',
              'Aceasta Politica de Confidentialitate explica ce date personale colectam, cum le utilizam si drepturile tale in legatura cu acestea.'
            ]
          },
          {
            heading: 'Ce Date Colectam',
            paragraphs: [
              'Putem colecta urmatoarele categorii de date personale: nume si date de contact (email, telefon), numele companiei, informatii furnizate prin formularul de contact (obiective de crestere, buget lunar), date tehnice (adresa IP, tip browser, informatii despre dispozitiv) si date de utilizare colectate prin instrumente de analytics.'
            ]
          },
          {
            heading: 'Cum Utilizam Datele Tale',
            paragraphs: [
              'Utilizam datele tale personale pentru a raspunde la solicitarile tale si a furniza serviciile cerute, a pregati propuneri de marketing personalizate, a imbunatati site-ul si serviciile noastre, a respecta obligatiile legale si a trimite comunicari de marketing relevante acolo unde ne-ai acordat consimtamantul.'
            ]
          },
          {
            heading: 'Servicii Terte',
            paragraphs: [
              'Utilizam Google Analytics si Meta Pixel pentru analytics. Aceste servicii pot seta propriile cookie-uri si prelucra datele conform propriilor politici de confidentialitate.',
              'Datele tale pot fi prelucrate de Google LLC (Google Ads, Google Analytics) si Meta Platforms Inc. (Meta Ads, Meta Pixel). Te incurajam sa consulti politicile lor de confidentialitate.'
            ]
          },
          {
            heading: 'Retentia Datelor',
            paragraphs: [
              'Pastram datele tale personale atat timp cat este necesar pentru indeplinirea scopurilor descrise in aceasta politica sau conform legii. Datele din formularul de contact sunt pastrate maxim 2 ani de la ultima interactiune.'
            ]
          },
          {
            heading: 'Drepturile Tale',
            paragraphs: [
              'Conform GDPR, ai dreptul la: accesul la datele personale, rectificarea datelor inexacte, stergerea datelor ("dreptul de a fi uitat"), restrictionarea sau opozitia la prelucrare, portabilitatea datelor si retragerea consimtamantului in orice moment.',
              'Pentru a exercita oricare dintre aceste drepturi, te rugam sa ne contactezi la adresa de mai jos.'
            ]
          },
          {
            heading: 'Contact',
            paragraphs: [
              'Pentru orice intrebare legata de confidentialitate sau pentru a-ti exercita drepturile, ne poti contacta la: puscas.forbusiness@gmail.com',
              'InsideGrowth — insideads.ro'
            ]
          }
        ]
      },
      cookiePolicy: {
        title: 'Politica de Cookie-uri',
        lastUpdated: 'Aprilie 2026',
        sections: [
          {
            heading: 'Ce sunt Cookie-urile',
            paragraphs: [
              'Cookie-urile sunt fisiere text de mici dimensiuni stocate pe dispozitivul tau atunci cand vizitezi un site web. Ele ajuta site-urile sa isi aminteasca preferintele tale, sa imbunatateasca performanta si sa ofere continut relevant.'
            ]
          },
          {
            heading: 'Tipurile de Cookie-uri Utilizate',
            paragraphs: [
              'Cookie-uri esentiale: Necesare pentru functionarea de baza a site-ului. Nu pot fi dezactivate fara a afecta functionarea acestuia.',
              'Cookie-uri analitice: Utilizam Google Analytics pentru a intelege cum interactioneaza vizitatorii cu site-ul nostru. Aceste date ne ajuta sa imbunatatim continutul si experienta utilizatorului.',
              'Cookie-uri de marketing: Utilizam Meta Pixel pentru a masura eficienta campaniilor noastre publicitare si a afisa reclame relevante utilizatorilor care ne-au vizitat site-ul.'
            ]
          },
          {
            heading: 'Cookie-uri de la Terti',
            paragraphs: [
              'Site-ul nostru poate include cookie-uri setate de servicii terte, inclusiv Google Analytics, Google Ads si Meta (Facebook). Acesti furnizori au propriile politici de confidentialitate si cookie-uri pe care te incurajam sa le consulti.'
            ]
          },
          {
            heading: 'Gestionarea Cookie-urilor',
            paragraphs: [
              'Poti controla si gestiona cookie-urile prin setarile browserului tau. Majoritatea browserelor permit vizualizarea, stergerea si blocarea cookie-urilor de pe site-uri specifice sau de pe toate site-urile.',
              'Retine ca dezactivarea anumitor cookie-uri poate afecta functionalitatea si experienta de utilizare a site-ului nostru. Refuzul cookie-urilor non-esentiale nu te va impiedica sa utilizezi serviciile noastre de baza.'
            ]
          },
          {
            heading: 'Actualizari ale Politicii',
            paragraphs: [
              'Putem actualiza aceasta Politica de Cookie-uri periodic pentru a reflecta modificarile in practicile noastre sau in legislatia aplicabila. Te vom notifica cu privire la schimbarile semnificative prin actualizarea datei din partea de sus a acestei pagini.',
              'Pentru intrebari despre utilizarea cookie-urilor, ne poti contacta la: puscas.forbusiness@gmail.com'
            ]
          }
        ]
      },
      termsConditions: {
        title: 'Termeni si Conditii',
        lastUpdated: 'Aprilie 2026',
        sections: [
          {
            heading: 'Acceptarea Termenilor',
            paragraphs: [
              'Prin accesarea si utilizarea insideads.ro, accepti si esti de acord sa respecti acesti Termeni si Conditii si Politica noastra de Confidentialitate. Daca nu esti de acord cu acesti termeni, te rugam sa nu utilizezi site-ul sau serviciile noastre.'
            ]
          },
          {
            heading: 'Servicii',
            paragraphs: [
              'InsideGrowth furnizeaza servicii de marketing de performanta, inclusiv gestionarea Google Ads, Meta Ads, analytics de marketing, management SEO si servicii conexe de marketing digital.',
              'Detaliile serviciilor, domeniul de aplicare, livrarile si termenele sunt prezentate in contractele individuale de servicii incheiate intre InsideGrowth si fiecare client.'
            ]
          },
          {
            heading: 'Termeni de Plata',
            paragraphs: [
              'Termenii de plata sunt definiti in contractele individuale de servicii. Plata standard este lunara, in avans, inainte de inceperea furnizarii serviciilor.',
              'Platile intarziate pot duce la suspendarea serviciilor pana la achitarea soldului restant. Toate preturile sunt in EUR si nu includ TVA si taxele aplicabile.'
            ]
          },
          {
            heading: 'Proprietate Intelectuala',
            paragraphs: [
              'Tot continutul de pe insideads.ro, inclusiv text, grafice, logo-uri, imagini si software, este proprietatea InsideGrowth si este protejat de legile aplicabile privind proprietatea intelectuala.',
              'Nu poti reproduce, distribui, modifica sau crea lucrari derivate din niciun continut al acestui site fara permisiunea noastra expresa in scris.'
            ]
          },
          {
            heading: 'Limitarea Raspunderii',
            paragraphs: [
              'InsideGrowth nu va fi raspunzatoare pentru daune indirecte, incidentale, speciale sau consecvente aparute din utilizarea serviciilor sau site-ului nostru, inclusiv pierderea de venituri, pierderea datelor sau intreruperea activitatii.',
              'Raspunderea noastra totala pentru orice reclamatie aparuta din utilizarea serviciilor noastre nu va depasi suma platita pentru acele servicii in luna calendaristica anterioara.'
            ]
          },
          {
            heading: 'Legea Aplicabila',
            paragraphs: [
              'Acesti Termeni si Conditii sunt guvernati de legea romana. Orice litigii aparute din utilizarea site-ului sau serviciilor noastre vor fi supuse jurisdictiei exclusive a instantelor din Romania.'
            ]
          },
          {
            heading: 'Contact',
            paragraphs: [
              'Pentru intrebari privind acesti Termeni si Conditii, ne poti contacta la: puscas.forbusiness@gmail.com',
              'InsideGrowth — insideads.ro'
            ]
          }
        ]
      }
    }
  },
  hu: {
    language: 'hu',
    brandName: 'InsideGrowth',
    heroTitle: 'Globalis Novekedes Adatalapu Marketinggal',
    heroSubtitle:
      'Teljesitmenymarketing ugynokseg volt Google es Meta szakemberekkel, akik a kattintasokat valodi novekedesse alakitjak.',
    introTitle: 'Bemutatkozas',
    introBody: [
      'Strategiai gondolkodast, kreativ storytellinget es platformszintu szakertelmet egyesitunk, hogy merheto kampanyokkal skalazzuk a markakat.',
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
          'A koltsegkeretet a legnagyobb konverzios potencialu regiokra es varosokra fokuszaljuk a hatekony nemzetkozi novekedesert.'
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
        description: 'Volt Google es Meta szakemberek, akik melyen ertik az algoritmusokat es az aukcios mechanizmusokat.'
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
        description: 'Ideal celzott csatornaaktiválashoz es havi riportokhoz.',
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
      footerNavigateLabel: 'Navigacio',
      footerAllRightsReserved: 'Minden jog fenntartva',
      footerPrivacyPolicy: 'Adatvedelmi Iranyelvek',
      footerCookiePolicy: 'Cookie Iranyelvek',
      footerTermsConditions: 'Altalanos Feltetelek',
      footerCopyrightPrefix: 'Szerzoi jog',
      homeWhoWeAre: 'Kik Vagyunk',
      homeStrategiesTitle: 'Strategiak, amelyek Valodi Eredmenyt Hoznak',
      homeAboutUs: 'Rolunk',
      homeReadyTitle: 'Keszen Allsz Kitörni a Tömegbol?',
      homeStartGrowing: 'Kezdd el a Növekedest',
      homeViewPricing: 'Arak Megtekintese',
      statsCampaignsRun: 'Futtatott Kampanyok',
      statsAverageRoi: 'Atlagos ROI',
      statsTopPlatforms: 'Top Platformok',
      statsDataDriven: 'Adatvezerelt',
      aboutMissionEyebrow: 'Kuldetesunk',
      aboutPlatformsEyebrow: 'Platformok',
      aboutWhyChooseUs: 'Miert Minket Valassz',
      servicesApproachEyebrow: 'Megkozelitesunk',
      cookieConsentMessage: 'Cookie-kat hasznalunk a jobb felhasznaloi elmeny erdekeben. Folytatva elfogadod Cookie Iranyelveinket.',
      cookieConsentAccept: 'Elfogadom',
      cookieConsentDecline: 'Elutasitom',
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
        description: 'InsideGrowth – adatalapu marketingugynokseg, amely markakat skalaz Meta es Google kampanyokkal. insideads.ro',
        keywords: ['InsideGrowth', 'marketingugynokseg', 'google ads', 'meta ads', 'teljesitmenymarketing', 'uzleti novekedes']
      },
      about: {
        title: 'Rolunk',
        description: 'Ismerd meg az InsideGrowth csapatot, volt Google es Meta szakemberekkel a merheto novekedest.',
        keywords: ['InsideGrowth rolunk', 'google meta szakertok', 'teljesitmeny csapat', 'insideads.ro']
      },
      services: {
        title: 'Szolgaltatasok',
        description: 'Fedezd fel az InsideGrowth digitalis marketing es analitikai szolgaltatasait Google Ads es Meta Ads platformokon.',
        keywords: ['InsideGrowth szolgaltatasok', 'digitalis marketing', 'marketing analitika', 'ga4', 'meta pixel']
      },
      pricing: {
        title: 'Arak',
        description: 'Hasonlitsd ossze az InsideGrowth Standard es Premium havi teljesitmenymarketing csomagokat.',
        keywords: ['InsideGrowth arak', 'havi marketing csomag', 'google ads menedzsment ar']
      },
      contact: {
        title: 'Kapcsolat',
        description: 'Lepj kapcsolatba az InsideGrowth-szel – kuldd el celjaidat es szemelyre szabott tervet keszitunk.',
        keywords: ['InsideGrowth kapcsolat', 'novekedesi terv kerese', 'insideads.ro kapcsolat']
      },
      privacyPolicy: {
        title: 'Adatvedelmi Iranyelvek',
        description: 'Olvasd el az InsideGrowth adatvedelmi iranyelveit. Tudj meg tobbet szemelyes adataid vedehnzerol.',
        keywords: ['InsideGrowth adatvedelmi', 'adatvedelem', 'GDPR', 'insideads.ro']
      },
      cookiePolicy: {
        title: 'Cookie Iranyelvek',
        description: 'Tudd meg, hogyan hasznalja az InsideGrowth a cookie-kat a jobb felhasznaloi elmeny erdekeben.',
        keywords: ['InsideGrowth cookie', 'cookie iranyelvek', 'analitika', 'insideads.ro']
      },
      termsConditions: {
        title: 'Altalanos Feltetelek',
        description: 'Olvasd el az InsideGrowth altalanos felteteleit, amelyek szabalyozzak szolgaltatasaink es weboldalunk hasznalatat.',
        keywords: ['InsideGrowth feltetelek', 'altalanos feltetelek', 'szolgaltatasi szerzodes', 'insideads.ro']
      }
    },
    legal: {
      privacyPolicy: {
        title: 'Adatvedelmi Iranyelvek',
        lastUpdated: '2026 aprilis',
        sections: [
          {
            heading: 'Kik Vagyunk',
            paragraphs: [
              'Az InsideGrowth egy Romaniaban szekhellyel rendelkezo teljesitmenymarketing-ugynokseg, amely az insideads.ro weboldalon mukodik. Elkotelezettek vagyunk szemelyes adataid vedelme irant az Altalanos Adatvedelmi Rendelet (GDPR) es az alkalmazando roman jog alapjan.',
              'Ez az Adatvedelmi Irányelv elmagyarazza, milyen szemelyes adatokat gyujtunk, hogyan hasznaljuk azokat, es milyen jogok illetnek meg ezzel kapcsolatban.'
            ]
          },
          {
            heading: 'Milyen Adatokat Gyujtunk',
            paragraphs: [
              'Az alabbi kategorijaju szemelyes adatokat gyujthetjuk: nev es elerhetosegi adatok (email, telefonszam), cegnev, a kapcsolatfelveteli urlapon megadott informaciok (novekedesi celok, havi koltsegkeret), technikai adatok (IP-cim, bongeszotipus, eszkozinformaciok) es analitikai eszkozokkel gyujtott hasznalati adatok.'
            ]
          },
          {
            heading: 'Hogyan Hasznaljuk Adatait',
            paragraphs: [
              'Szemelyes adataidat az alabbi celokra hasznaljuk: megkereseseire valaszolni es kert szolgaltatasokat nyujtani, testre szabott marketing javaslatok keszitese, weboldalunk es szolgaltatasaink fejlesztese, jogi kotelezzettsegek teljesitese, es relevans marketing kommunikacio kuldese ahol ehhez hozzajarulasodat adtad.'
            ]
          },
          {
            heading: 'Harmadik Feles Szolgaltatasok',
            paragraphs: [
              'A Google Analytics es a Meta Pixel segitsegevel vegzunk webhelyelemzest. Ezek a szolgaltatasok sajat cookie-kat allithatnak be es sajat adatvedelmi iranyelveik szerint dolgozhatjak fel az adatokat.',
              'Adataidat a Google LLC (Google Ads, Google Analytics) es a Meta Platforms Inc. (Meta Ads, Meta Pixel) dolgozhatja fel. Batoritjuk, hogy tekintse at azok adatvedelmi iranyelveit.'
            ]
          },
          {
            heading: 'Adatmegorzesi Idoszak',
            paragraphs: [
              'Szemelyes adataidat addig orizzuk meg, ameddig az ebben az iranyelvben leirtak teljesitesehez szukseges, vagy ahogy azt a jogszabaly elirja. A kapcsolatfelveteli urlap adatait az utolso interakciiotol szamitott legfeljebb 2 evig taroljuk.'
            ]
          },
          {
            heading: 'Az On Jogai',
            paragraphs: [
              'A GDPR alapjan jogosult: szemelyes adataihoz hozzaferni, a pontatlan adatok helyesbitesehez, az adatok torleset kerni ("elfelejteshez valo jog"), a feldolgozas korlatozasat vagy ellene tiltakozni, adatait hordozhato formatumban megkapni, es hozzajarulasat barmikor visszavonni.',
              'E jogok barmelyikenek gyakorlasahoz kerjen minket az alant megadott elerhtetosegeken.'
            ]
          },
          {
            heading: 'Kapcsolat',
            paragraphs: [
              'Adatvedelemmel kapcsolatos kerdesek vagy jogai gyakorlasahoz keresson minket: puscas.forbusiness@gmail.com',
              'InsideGrowth — insideads.ro'
            ]
          }
        ]
      },
      cookiePolicy: {
        title: 'Cookie Iranyelvek',
        lastUpdated: '2026 aprilis',
        sections: [
          {
            heading: 'Mik azok a Cookie-k',
            paragraphs: [
              'A cookie-k kis szovegfajlok, amelyek az eszkozoden tarolodnak, amikor meglogatasz egy webhelyet. Segitenek a webhelyeknek megjegyezni beallitasaidat, javitani a teljesitmenyt es relevans tartalmat nyujtani.'
            ]
          },
          {
            heading: 'Altalunk Hasznalt Cookie-Tipusok',
            paragraphs: [
              'Esszencialis cookie-k: A webhely alapveto mukodesehez szuksegesek. Nem tilthatoak le a mukodes befolyasolasa nelkul.',
              'Analitikai cookie-k: A Google Analytics segitsegevel megertjuk, hogyan lepnek kapcsolatba a latogatoi a webhelyunkkel. Ezek az adatok segitenek javitani tartalmainkat es a felhasznaloi elmenyt.',
              'Marketing cookie-k: A Meta Pixel segitsegevel meruk reklamkampanyaink hatekonysagat es relevans hirdeteseket jelenitunk meg a webhelyet latogatoknak.'
            ]
          },
          {
            heading: 'Harmadik Feles Cookie-k',
            paragraphs: [
              'Weboldalunk tartalmazhat harmadik feles szolgaltatok altal beallitott cookie-kat, beleertve a Google Analytics, Google Ads es a Meta (Facebook) cookie-jait. Ezek a szolgaltatok sajat adatvedelmi es cookie iranyelvekkel rendelkeznek, amelyek atkinteset batoritjuk.'
            ]
          },
          {
            heading: 'Cookie-k Kezelese',
            paragraphs: [
              'A cookie-kat a bongeszoje beallitasain keresztul ellenorizheti es kezelheti. A legtobb bongeszoen megtekintheti, torolheti es blokkolhatja az adott webhelyektol vagy az osszes webhelytol szarmazo cookie-kat.',
              'Vegye figyelembe, hogy bizonyos cookie-k letiltasa befolyasolhatja a webhely mukodeset es a felhasznaloi elmenyt. A nem esszencialis cookie-k elutasitasa nem akadalyozza meg az alapszolgaltatasaink hasznalatat.'
            ]
          },
          {
            heading: 'Az Iranyelvek Frissitesei',
            paragraphs: [
              'Ezeket a Cookie Iranyelveket idorol idore frissithetjuk, hogy tukrozzuk a gyakorlatainkban vagy az alkalmazando jogban bekovetkezo valtozasokat. A jelentos valtozasokrol az oldal tetejen levo datum frissitesevel ertesitjuk.',
              'A cookie-k hasznalataval kapcsolatos kerdesekert keresson minket: puscas.forbusiness@gmail.com'
            ]
          }
        ]
      },
      termsConditions: {
        title: 'Altalanos Feltetelek',
        lastUpdated: '2026 aprilis',
        sections: [
          {
            heading: 'A Feltetelek Elfogadasa',
            paragraphs: [
              'Az insideads.ro weboldalhoz valo hozzaferessel es hasznalataval elfogadja es beleegyezik az Altalanos Feltételek es Adatvedelmi Iranyelvek betartasaba. Ha nem ert egyet ezekkel a feltételekkel, kerem, ne hasznalja weboldalunkat vagy szolgaltatasainkat.'
            ]
          },
          {
            heading: 'Szolgaltatasok',
            paragraphs: [
              'Az InsideGrowth teljesitmenymarketing-szolgaltatasokat nyujt, beleertve a Google Ads-kezelest, a Meta Ads-kezelest, a marketing-analitikát, az SEO-menedzsmentet es a kapcsolodo digitalis marketing-szolgaltatasokat.',
              'A szolgaltatasok reszleteit, hatalyat, teljesitmenyeit es hatariideit az InsideGrowth es az egyes ugyfelek kozott kotott egyedi szolgaltatasi szerzodések tartalmazzak.'
            ]
          },
          {
            heading: 'Fizetesi Feltetelek',
            paragraphs: [
              'A fizetesi felteteleket az egyedi szolgaltatasi szerzodések tartalmazzak. A standard fizetes havonta elore, a szolgaltatas megkezdese elott torteenik.',
              'A keso fizetes a szolgaltatas felfuggesztesehez vezethet, amig a fennallo egyenleg rendezetlenne valik. Minden ar EUR-ban van megadva, es nem tartalmazza az alkalmazando afa-t es adokat.'
            ]
          },
          {
            heading: 'Szellemi Tulajdon',
            paragraphs: [
              'Az insideads.ro osszes tartalma, beleertve a szoveget, a grafikat, a logokat, a kepeket es a szoftvert, az InsideGrowth tulajdona, es a vonatkozo szellemi tulajdon torvenyek vedenek.',
              'Nem sokszorosíthatja, terjesztheti, modosithatja vagy hozhat letre szarmazekos muveket a weboldal barmilyen tartalmából kifejezett irasbeli engedelyunk nelkul.'
            ]
          },
          {
            heading: 'Felelosseg Korlatozasa',
            paragraphs: [
              'Az InsideGrowth nem felel semmilyen kozvetett, jarulekos, kulonleges vagy kovetkezmenyes karert, amely weboldalunk vagy szolgaltatasaink hasznalatabol ered, beleertve a bevetelkiesest, adatvesztest vagy uzletmenet-megszakadasat.',
              'A szolgaltatasaink hasznalatabol ered barmilyen igennyel kapcsolatos teljes felelossegunk nem haladhatja meg az elozo naptari honapban ezekert a szolgaltatasokert kifizetett osszeget.'
            ]
          },
          {
            heading: 'Iranyadó Jog',
            paragraphs: [
              'Ezeket az Altalanos Felteteleket roman jog szabalyozza. A weboldal vagy szolgaltatasaink hasznalatabol ered bármilyen vita a roman birosagok kizarolagos joghatosaga ala tartozik.'
            ]
          },
          {
            heading: 'Kapcsolat',
            paragraphs: [
              'Az Altalanos Feltetelekkel kapcsolatos kerdesekert keresson minket: puscas.forbusiness@gmail.com',
              'InsideGrowth — insideads.ro'
            ]
          }
        ]
      }
    }
  }
};
