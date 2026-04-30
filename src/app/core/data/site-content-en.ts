import { LegalPageContent, SiteContent } from '../models/site-content';

const ENGLISH_COOKIE_POLICY: LegalPageContent = {
  title: 'Cookie Policy',
  lastUpdated: 'April 2026',
  sections: [
    {
      heading: '1. What are cookies?',
      paragraphs: [
        'An "internet cookie" (also known as a "browser cookie", "HTTP cookie" or simply "cookie") is a small file containing letters and numbers that is stored on your computer, mobile device or other equipment through which you access the internet.',
        'Cookies are installed through a request sent by a web server to a browser (e.g. Internet Explorer, Firefox, Chrome).',
        'Once installed, cookies have a determined lifespan, remaining "passive" in the sense that they do not contain software programs, viruses or spyware and will not access information on the hard drive of the user\'s device on which they have been installed.',
        'A cookie is made up of two parts: the cookie name and the cookie content/value.',
        'From a technical perspective, only the web server that sent the cookie can access it again when a user returns to the web page associated with that web server.'
      ]
    },
    {
      heading: '2. What purposes are cookies used for on this website?',
      paragraphs: [
        'Cookies are used to provide users of this website with a better browsing experience and services adapted to the needs and interests of each user, as follows:',
        'Improving the use of this website, including by identifying any errors that occur during visits/use of it by users;',
        'Providing anonymous statistics about how this website is used by the owner of this website;',
        'Anticipating potential goods that may be made available to users in the future through this website, depending on the services/products accessed.',
        'Based on feedback sent through cookies regarding how this website is used, we can take measures to make this website more efficient and accessible to users.'
      ]
    },
    {
      heading: '3. What is the lifespan of cookies?',
      paragraphs: [
        'The lifespan of cookies can vary depending on the purpose for which it is placed. There are the following categories of cookies that determine their lifespan:',
        'Session cookies - a cookie that is automatically deleted when the user closes their browser.',
        'Persistent/fixed cookies - a cookie that remains stored on the user\'s device until it reaches a certain expiration date (a few minutes, days or years in the future) or until it is deleted by the user at any time through browser settings.'
      ]
    },
    {
      heading: '4. What are third-party cookies?',
      paragraphs: [
        'Certain sections of content on this website may be provided by third parties, i.e. not by the website owner, in which case these cookies are called third-party cookies.',
        'These cookies may come from the following third parties:',
        'Google Analytics',
        'Facebook Pixel'
      ]
    },
    {
      heading: '5. What cookies are used on this website?',
      paragraphs: [
        'When using/visiting this website, the following cookies may be placed:',
        'a. Website performance cookies',
        'b. User analysis cookies',
        'c. Geotargeting cookies',
        'd. Registration cookies',
        'e. Advertising cookies',
        'f. Advertising provider cookies',
        'a. Performance cookies - Through this type of cookie, user preferences on this website are stored, so that resetting preferences in case of subsequent visits to the website is no longer necessary.',
        'b. User analysis cookies - These cookies inform us whether a particular user of this website has visited/used this website before. These cookies are used for statistical purposes only.',
        'c. Geotargeting cookies - These cookies are used by software that determines the country of origin of the website user. The same ads will be received regardless of the language selected.',
        'd. Registration cookies - When you register on this site, cookies are generated that remember this fact. Servers use these cookies to show us the account you are registered with.',
        'Also, the use of these cookies allows us to associate any comment posted on the website with the username of the account used. If the "keep me logged in" option was not selected, these cookies will be automatically deleted when the browsing session ends.',
        'e. Advertising cookies - These cookies allow us to find out that a user has viewed an online advertisement, the type of it and the time elapsed since viewing that advertising message.',
        'As such, these cookies are used for online advertising targeting. They are anonymous, storing information about the content viewed, not about users.'
      ]
    },
    {
      heading: '6. What type of information is stored and accessed through cookies?',
      paragraphs: [
        'Cookies store information in a small text file that allows browser recognition. This website recognizes the browser until the cookies expire or are deleted.'
      ]
    },
    {
      heading: '7. How can cookies be disabled?',
      paragraphs: [
        'Disabling and refusing to accept cookies can make this website difficult to visit, resulting in limitations on its use.',
        'Users can configure their browser to reject cookie files or to accept cookies from a specific website only. However, refusing or disabling cookies does not mean you will not receive online advertising - only that it will not be adapted to your preferences and interests, highlighted by your browsing behavior.',
        'All modern browsers offer the ability to change cookie settings. These settings can typically be accessed in the "options" section or in your browser\'s "preferences" menu.',
        'To understand these settings, the following links may be helpful:',
        'Cookie Settings for Google Chrome',
        'Cookie Settings for Mozilla Firefox',
        'Cookie Settings for Apple Safari',
        'Cookie Settings for Microsoft Internet Explorer',
        'For any additional questions about how cookies are used on this website, please contact us at:'
      ]
    },
    {
      heading: 'Types of Cookies Used',
      paragraphs: [
        '1. Necessary for website operation - This website uses cookies to save user sessions and for activities strictly necessary for its operation, such as shopping carts or recently viewed products.',
        '2. Analytics - This type of service allows monitoring and analysis of website traffic. It can be used to track user behavior.',
        'Google Analytics (Google Inc.) - A web analytics service provided by Google. It monitors website use to create reports and helps us improve user experience on our pages.',
        '3. Marketing and behavior analysis - This type of service allows the website and its partners to display advertisements based on how the user uses the website.',
        'Facebook (Facebook Inc.) - A behavioral remarketing service that analyzes visitors to this website and allows personalized advertising to be displayed.',
        'Processing Location: USA',
        '4. Displaying content from other platforms - This type of service allows loading external content and interaction with it directly on the website. These services may collect traffic information even if the user does not use them.',
        'YouTube Video Widget - A behavioral remarketing service that analyzes visitors to this website and allows personalized advertising to be displayed.',
        'Processing Location: USA',
        'Vimeo Video Player - A video viewing service provided by InterActiveCorp that allows us to add video content to web pages.',
        'Processing Location: USA'
      ]
    }
  ]
};

export const SITE_CONTENT_EN: SiteContent = {
  language: 'en',
  brandName: 'InsideGrowth',
  heroTitle: 'More Than an Agency — A Growth Partner',
  heroSubtitle:
    'We are a digital marketing agency helping businesses grow through performance-driven strategies — backed by a team of certified specialists with 20+ years of combined experience.',
  introTitle: 'Growth, Built Together',
  introSubtitle: 'Trusted to manage €50K+ in monthly ad spend',
  introBody: [
    'A team of ex-Google and Meta specialists with 20+ years of combined experience.',
    'We don\'t just run campaigns — we build growth systems.When your business scales profitably, we scale with you. That\'s how we measure success.'
  ],
  aboutIntroTitle: 'How We Think About Growth',
  aboutIntroBody: [
    'We don\'t treat marketing as separate services.',
    'We build systems where every part — traffic, conversion, and retention — works together to drive real business growth.',
    'Most agencies focus on campaigns.We focus on results.'
  ],
  aboutPlatformItems: [
    'Clear strategy, not guesswork',
    'Focus on revenue, not just traffic',
    'Scalable systems, not one-time wins'
  ],
  aboutTeamEyebrow: 'Our Team',
  aboutTeamTitle: 'Meet the Team Behind InsideGrowth',
  aboutTeamSubtitle: 'A team of specialists, each focused on a key part of your business growth.',
  aboutTeamTagline: 'We work as one team — focused on one goal: your growth.',
  aboutTeamMembers: [
    {
      name: 'Razvan Puscas',
      role: 'Founder & Growth Strategist',
      bio: 'Leads strategy, paid media, and SEO — ensuring all parts of the system work together to drive real business growth.',
      photo: 'images/placeholders/studio-grid.svg'
    },
    {
      name: 'Andrei Puscas',
      role: 'Paid Media Specialist',
      bio: 'Manages and optimizes campaigns across Google and Meta, focusing on performance, scaling, and profitability.',
      photo: 'images/placeholders/studio-grid.svg'
    },
    {
      name: 'Paul Tatar',
      role: 'Web & Funnel Specialist',
      bio: 'Builds high-converting websites and landing pages designed to turn traffic into customers.',
      photo: 'images/placeholders/studio-grid.svg'
    },
    {
      name: 'Mihai Borsan',
      role: 'Creative Specialist',
      bio: 'Creates photo and video content designed to capture attention and increase conversions.',
      photo: 'images/placeholders/studio-grid.svg'
    },
    {
      name: 'Nico Puscas',
      role: 'Client Growth & Sales',
      bio: 'Works directly with clients to understand their goals and ensure the right strategy is implemented.',
      photo: 'images/placeholders/studio-grid.svg'
    }
  ],
  problemTitle: 'The Gap Between Traffic and Revenue',
  problemPoints: [
    'Running ads without a clear strategy.',
    'No alignment between traffic, website, and conversions.',
    'We bring everything together into a system that drives real results.'
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
  servicesTitle: 'Services Built to Scale Your Business',
  services: [
    {
      title: 'Audit & Growth Analysis',
      description:
        'We analyze your entire marketing ecosystem — from website performance and tracking setup to ad campaigns and SEO — to identify what\'s working, what\'s holding you back, and where the biggest growth opportunities are.',
      features: [
        'Website speed & performance',
        'Tracking setup (GTM, GA4, pixels)',
        'Google & Meta Ads audit',
        'SEO structure & technical review',
        'Conversion flow & user journey'
      ],
      imagePosition: 'left',
      image: 'images/services/Audit%26GrowthAnalysis.png'
    },
    {
      title: 'Paid Media That Converts',
      description:
        'We manage and scale high-performance campaigns across Google, Meta, and TikTok — focused on attracting qualified traffic that turns into real customers and revenue.',
      features: [
        'Google Ads (Search, Shopping, Performance Max)',
        'Meta Ads (Facebook & Instagram)',
        'TikTok Ads',
        'Campaign optimization & scaling'
      ],
      imagePosition: 'right',
      image: 'images/services/PaidMediaThatConverts.png'
    },
    {
      title: 'SEO & Organic Growth',
      description:
        'We optimize your website to rank higher, attract consistent traffic, and build long-term visibility that supports your paid campaigns.',
      features: [
        'Technical SEO',
        'On-page optimization',
        'Keyword & structure strategy',
        'Content optimization'
      ],
      imagePosition: 'left',
      image: 'images/services/Seo%26OrganicGrowth.png'
    },
    {
      title: 'Websites Built to Convert',
      description:
        'We design and develop custom websites and e-commerce platforms focused on speed, user experience, and conversion — turning visitors into paying customers.',
      features: [
        'Custom presentation websites',
        'E-commerce development',
        'Conversion-focused design',
        'Mobile & speed optimization'
      ],
      imagePosition: 'right',
      image: 'images/services/WebsiteBuiltToConvert.png'
    },
    {
      title: 'Creative Production',
      description:
        'We create high-quality photo and video content designed to capture attention and drive performance across your marketing channels.',
      features: [
        'Product photography',
        'Brand & location shoots',
        'Video production & editing',
        'Ad creatives'
      ],
      imagePosition: 'left',
      image: 'images/services/CreativeProduction.png'
    },
    {
      title: 'Tracking & Performance Systems',
      description:
        'We build the infrastructure behind your marketing — ensuring every action is tracked, measured, and optimized based on real data.',
      features: [
        'Google Tag Manager setup',
        'GA4 & event tracking',
        'Conversion tracking',
        'Data accuracy & reporting'
      ],
      imagePosition: 'right',
      image: 'images/services/Trackig%26PerformanceSystems.png'
    }
  ],
  advantagesTitle: 'What Makes Us Different',
  advantages: [
    {
      title: 'Specialists not Generalists',
      description:
        'Each part of your growth is handled by a dedicated expert — from ads and SEO to websites and creative.'
    },
    {
      title: 'Built Around Results',
      description:
        'We don\'t focus on clicks or impressions — everything we do is designed to generate real customers and revenue.'
    },
    {
      title: 'Systems, Not Just Campaigns',
      description:
        'We build complete growth systems where traffic, conversion, and performance work together.'
    },
    {
      title: 'Data Over Guesswork',
      description:
        'Every decision is based on testing, data, and performance — not assumptions.'
    }
  ],
  pricingTitle: 'Transparent Pricing. Built for Real Growth',
  pricingSubtitle:
    'We structure pricing based on your business, growth potential, and the level of involvement required to scale profitably.',
  pricingComparisonTitle: 'Product Comparison',
  pricingVatNote: 'All prices are exclusive of VAT and may vary depending on the scope of the project.',
  pricingSpotlightsTitle: 'Built for the work that actually moves revenue',
  pricingFaqTitle: 'Frequently Asked Questions',
  pricingCustomTitle: 'Custom Growth Systems',
  pricingCustomSubtitle: 'Tailored pricing based on your needs',
  pricingLimitedClientsTitle: 'We Work With a Limited Number of Clients',
  pricingLimitedClientsBody:
    'We focus on partnerships, not volume. We only take on projects where we know we can deliver measurable growth and build long-term success.',
  pricingBuildRightSystemTitle: 'Let\'s Build the Right System for Your Business',
  pricingBuildRightSystemBody:
    'We\'ll analyze your business and recommend the best approach — including pricing tailored to your needs.',
  pricingNoCommitment: 'No commitment. Just clarity.',
  pricingPlans: [
    {
      name: 'Growth Foundation',
      price: 'From €500 / month',
      description: 'For businesses starting with structured campaigns and consistent optimization.',
      ctaLabel: 'Get Started',
      recommendedBudget: 'under-1000',
      features: [
        'Google Ads Management',
        'Campaign setup & optimization',
        'SEO foundation',
        'Basic tracking setup',
        'Monthly reporting'
      ]
    },
    {
      name: 'Growth & Scaling',
      price: 'From €800 / month',
      description: 'For businesses ready to scale with a full-funnel approach and deeper optimization.',
      ctaLabel: 'Let\'s Talk',
      featured: true,
      recommendedBudget: '1000-3000',
      features: [
        'Everything in Foundation',
        'Meta Ads Management',
        'Ongoing SEO optimization',
        'Funnel optimization',
        'Conversion rate improvements',
        'Creative testing & iteration',
        'Advanced tracking & data insights'
      ]
    },
    {
      name: 'Performance Partner',
      price: '€1,300+ / month',
      description: 'For brands looking for aggressive growth with full strategic involvement.',
      ctaLabel: 'Apply to Work With Us',
      recommendedBudget: '3000-10000',
      features: [
        'Everything in Scaling',
        'TikTok Ads Management',
        'Full growth strategy & planning',
        'Daily performance analysis and decisions',
        'Budget scaling & allocation strategy',
        'Creative direction (what to shoot, test, scale)',
        'Direct collaboration & priority execution',
        'Continuous scaling across channels'
      ]
    }
  ],
  pricingSpotlights: [
    {
      eyebrow: '1',
      title: 'Custom websites from project scope',
      description: 'Presentation sites and conversion-led pages built around your business model and growth stage.'
    },
    {
      eyebrow: '2',
      title: 'Photo and video production from project scope',
      description: 'Creative assets that support paid media, brand building, and conversion-focused campaigns.'
    },
    {
      eyebrow: '3',
      title: 'Custom growth systems',
      description: 'Strategy, tracking, creative, SEO, and media working together as one performance system.'
    }
  ],
  pricingFeatures: [
    { label: 'Google Ads', foundation: true, scaling: true, partner: true },
    { label: 'Meta Ads', foundation: false, scaling: true, partner: true },
    { label: 'TikTok Ads', foundation: false, scaling: false, partner: true },
    { label: 'Paid Ads Management', foundation: true, scaling: true, partner: true },
    { label: 'Reporting', foundation: true, scaling: true, partner: true },
    { label: 'SEO Foundation', foundation: true, scaling: true, partner: true },
    { label: 'Ongoing SEO Optimization', foundation: false, scaling: true, partner: true },
    { label: 'Tracking Setup', foundation: true, scaling: true, partner: true },
    { label: 'Advanced Tracking & Attribution', foundation: false, scaling: true, partner: true },
    { label: 'Funnel Optimization', foundation: false, scaling: true, partner: true },
    { label: 'Conversion Rate Optimization', foundation: false, scaling: true, partner: true },
    { label: 'Creative Testing', foundation: false, scaling: true, partner: true },
    { label: 'Growth Strategy & Planning', foundation: false, scaling: false, partner: true },
    { label: 'Budget Scaling Strategy', foundation: false, scaling: false, partner: true },
    { label: 'Creative Direction', foundation: false, scaling: false, partner: true },
    { label: 'Daily Optimisation & Decisions', foundation: false, scaling: false, partner: true },
    { label: 'Priority Support', foundation: false, scaling: false, partner: true },
    { label: 'Website / Content', foundation: false, scaling: false, partner: 'Custom' }
  ],
  pricingFaqs: [
    {
      question: 'How many clients do you work with?',
      answer:
        'We keep a limited client load so every account gets real attention. On average, we manage around 10 to 15 accounts per specialist.'
    },
    {
      question: 'Can you guarantee results?',
      answer:
        'No marketing partner can guarantee results, but we can guarantee deep involvement, clear reporting, and a process built to improve performance consistently.'
    },
    {
      question: 'What is included in the plans?',
      answer:
        'All plans include strategy, SEO, paid media, audit, tracking, and reporting. The difference is the depth of optimization, channel mix, and level of collaboration.'
    },
    {
      question: 'Do you work with custom websites and content production?',
      answer:
        'Yes. We can support presentation websites, e-commerce projects, photography, and video production as part of a custom growth system.'
    }
  ],
  contactTitle: 'Let\'s Talk About Your Growth',
  contactSubtitle:
    'Tell us about your business and goals — we\'ll come back with a clear strategy and next steps tailored to your growth.',
  primaryCta: 'Let\'s Grow Together',
  growthServices: [
    {
      title: 'Paid Media That Converts',
      description:
        'We manage high-performance campaigns across Google, Meta, and TikTok — focused on bringing qualified traffic that turns into real customers and revenue.'
    },
    {
      title: 'Creative That Drives Performance',
      description:
        'We produce high-converting ad creatives, photos, and videos designed to capture attention and increase conversions — not just look good.'
    },
    {
      title: 'From Click to Customer',
      description:
        'We build structured marketing funnels that guide users from first interaction to final purchase, maximizing every step of the customer journey.'
    },
    {
      title: 'Websites Built to Convert',
      description:
        'We design and optimize websites and landing pages focused on speed, user experience, and conversion — turning visitors into paying customers.'
    },
    {
      title: 'SEO & Organic Growth',
      description:
        'We optimize your website to rank higher, attract consistent traffic, and build long-term visibility beyond paid ads.'
    },
    {
      title: 'Tracking & Data Accuracy',
      description:
        'We set up and optimize tracking systems to ensure every decision is based on accurate data — from conversions to customer behavior.'
    }
  ],
  howWeWork: [
    {
      step: '01',
      title: 'Audit & Analysis',
      description:
        'We analyze your business, website, current campaigns, tracking, and performance to identify what\'s working, what\'s missing, and where growth is being blocked.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description:
        'We build a custom growth plan based on your goals, budget, market, and customer journey — so every channel has a clear purpose.'
    },
    {
      step: '03',
      title: 'Launch & Implementation',
      description:
        'We set up and launch the right campaigns, creatives, landing pages, tracking, and optimizations across the channels that matter most.'
    },
    {
      step: '04',
      title: 'Optimize & Scale',
      description:
        'We continuously test, improve, and scale what works — focusing on better performance, higher conversions, and profitable growth.'
    }
  ],
  contact: {
    person: 'InsideGrowth',
    role: 'Digital Marketing Agency',
    email: 'contact@insidegrowth.ro',
    phone: '+40799900187'
  },
  ui: {
    nav: {
      home: 'Home',
      about: 'About',
      growthResults: 'Growth Results',
      services: 'Services',
      pricing: 'Pricing',
      contact: 'Contact'
    },
    languageLabel: 'Language',
    homeExploreServices: 'Explore Services',
    headerCta: 'Let\'s grow together',
    footerTagline: 'Former Google and Meta specialists helping brands scale globally.',
    footerContactLabel: 'Contact',
    footerNavigateLabel: 'Navigate',
    footerAllRightsReserved: 'All rights reserved',
    footerPrivacyPolicy: 'Privacy Policy',
    footerCookiePolicy: 'Cookie Policy',
    footerTermsConditions: 'Terms & Conditions',
    footerCopyrightPrefix: 'Copyright',
    homeWhoWeAre: 'INSIDEGROWTH',
    homeStrategiesTitle: 'Strategies That Deliver Real Results',
    homeAboutUs: 'Let\'s Grow Together',
    homeReadyTitle: 'Growth Doesn\'t Happen by Guesswork',
    homeStartGrowing: 'Let\'s Grow Together',
    homeViewPricing: 'View Pricing',
    homeResultsEyebrow: 'Results',
    homeResultsTitle: 'See what the process can deliver',
    homeResultsBody: 'We turn strategy into measurable outcomes across spend, efficiency, and growth. This section will expand into a dedicated results page next.',
    homeResultsLink: 'Learn More',
    statsCampaignsRun: 'Campaign Optimizations',
    statsAverageRoi: 'Monthly Ad Spend',
    statsTopPlatforms: 'Google & Meta Core Platforms',
    statsDataDriven: 'Performance Focused',
    aboutMissionEyebrow: 'Our Mission',
    aboutPlatformsEyebrow: 'What This Means for You',
    aboutWhyChooseUs: 'Why Choose Us',
    aboutTeamEyebrow: 'Our Team',
    aboutTeamTitle: 'Meet the Team Behind InsideGrowth',
    aboutTeamSubtitle: 'A team of specialists, each focused on a key part of your business growth.',
    aboutTeamTagline: 'We work as one team — focused on one goal: your growth.',
    servicesApproachEyebrow: 'Our Approach',
    cookieConsentMessage: 'We use cookies to improve your experience. By continuing, you agree to our Cookie Policy.',
    cookieConsentAccept: 'Accept',
    cookieConsentDecline: 'Decline',
    aboutEyebrow: 'About',
    aboutTitle: 'A Team Built to Scale Your Business',
    aboutLead:
      'We combine expertise across Google Ads, Meta, SEO, and creative to build systems that generate real, measurable growth.',
    servicesEyebrow: 'Services',
    servicesLead:
      'We don\'t offer isolated services — we build complete systems designed to generate traffic, convert customers, and scale your business profitably.',
    pricingEyebrow: 'Pricing',
    pricingFeatureComparison: 'Feature Comparison',
    pricingTableAriaLabel: 'Pricing feature comparison',
    pricingFeatureHeader: 'Feature',
    pricingStandardHeader: 'Foundation',
    pricingPremiumHeader: 'Scaling',
    pricingIncluded: 'Included',
    pricingOptional: 'Optional',
    contactEyebrow: 'Contact',
    contactShareGoals: 'Tell us about your business and goals',
    contactForm: {
      planLabel: 'Business plan',
      planPlaceholder: 'Select your plan',
      planValidation: 'Please select a plan.',
      budgetLabel: 'Media paid budget',
      budgetPlaceholder: 'Select budget range',
      budgetValidation: 'Budget range is required.',
      businessLabel: 'Business name',
      businessPlaceholder: 'Your business name',
      businessValidation: 'Business name is required.',
      fullNameLabel: 'Full name',
      fullNamePlaceholder: 'Your name',
      fullNameValidation: 'Name is required.',
      emailLabel: 'Business email',
      emailPlaceholder: 'you@company.com',
      emailValidation: 'Enter a valid email.',
      websiteLabel: 'Website',
      websitePlaceholder: 'yourwebsite.com',
      websiteValidation: 'Website is required.',
      phoneLabel: 'Phone number',
      phonePlaceholder: 'Your phone number',
      phoneValidation: 'Please enter a valid phone number.',
      budgetOptions: [
        { value: 'under-1000', label: '€500 – €1,000' },
        { value: '1000-3000', label: '€1,000 – €3,000' },
        { value: '3000-10000', label: '€3,000 – €10,000' },
        { value: '10000-plus', label: '€10,000+' }
      ],
      goalsLabel: 'Growth plans',
      goalsPlaceholder: 'Tell us about your business, goals, and anything else we should know',
      goalsValidation: 'Please provide at least 50 characters.',
      submitLabel: 'Send inquiry'
    },
    contactNextStepsTitle: 'What Happens Next',
    contactNextSteps: [
      'We review your business',
      'We identify growth opportunities',
      'We come back with a clear plan'
    ],
    contactResponseTimeTitle: 'Response Time',
    contactResponseTimeBody: 'We typically respond within 24 hours',
    contactDirectContactTitle: 'Direct Contact',
    contactLimitedClientsNote: 'We work with a limited number of clients to ensure quality and performance.',
    contactFaqTitle: 'FAQ',
    contactFaqs: [
      {
        question: 'Do you guarantee results?',
        answer:
          'We don\'t guarantee specific numbers — because real growth depends on multiple factors like your market, offer, and budget. What we do guarantee is a clear strategy, consistent optimization, and a focus on scaling what works over time.'
      },
      {
        question: 'How many clients do you work with?',
        answer:
          'We work with a limited number of clients to ensure every project gets the attention and focus it needs. Our goal is quality and performance — not volume.'
      },
      {
        question: 'How does pricing work?',
        answer:
          'We tailor pricing based on your business, goals, and the level of support required to scale effectively. The plans shown are starting points — final pricing is built around your specific needs.'
      },
      {
        question: 'How long does it take to see results?',
        answer:
          'Most campaigns start improving within the first 1–3 months. However, sustainable growth is built over time through testing, optimization, and scaling.'
      },
      {
        question: 'Do you guarantee results?',
        answer:
          'We don\'t guarantee specific numbers — no serious agency does. What we do guarantee is a structured approach focused on continuous improvement and measurable growth.'
      },
      {
        question: 'Do I need a large budget to start?',
        answer:
          'Not necessarily. We work with different budget levels, but meaningful scaling requires proper investment in both ads and optimization.'
      },
      {
        question: 'What platforms do you work with?',
        answer:
          'We manage campaigns across Google, Meta (Facebook & Instagram), and TikTok — depending on what fits your business best.'
      },
      {
        question: 'Do you work with all types of businesses?',
        answer:
          'We work with most business types, but we don\'t partner with everyone. We focus on businesses that are serious about growth and open to building a long-term collaboration based on trust and performance.'
      },
      {
        question: 'What happens after I submit the form?',
        answer:
          'We review your business, current setup, and goals. Then we come back with a clear strategy and recommended next steps tailored to your situation.'
      },
      {
        question: 'Do you only run ads, or do you handle everything?',
        answer:
          'We go beyond ads. We focus on the full system — including SEO, website optimization, tracking, and creative — to ensure everything works together.'
      },
      {
        question: 'Can you work with my existing website and setup?',
        answer:
          'Yes. We can optimize your current setup or rebuild parts of it if needed to improve performance.'
      },
      {
        question: 'What makes you different from other agencies?',
        answer:
          'We don\'t focus on volume or short-term wins. We build systems designed for long-term growth and only work with businesses where we can create real impact.'
      },
      {
        question: 'Do you offer one-time services?',
        answer:
          'In most cases, no. We focus on ongoing partnerships, because consistent optimization is what drives real results.'
      },
      {
        question: 'Will I be involved in the process?',
        answer:
          'Yes. We believe strong collaboration leads to better results, especially when it comes to product insights, offers, and direction.'
      },
      {
        question: 'Do you create content as well?',
        answer:
          'Yes. We offer photo and video production for ads and branding, depending on your needs and the level of collaboration.'
      }
    ],
    leadSavedMessage:
      "Thank you. We've received your details and will prepare a tailored growth proposal.",
    leadSendingMessage: 'Sending your message…',
    leadErrorMessage: 'Something went wrong. Please try again or email us directly.',
    homeGrowthEyebrow: 'Growth Systems',
    homeHowWeScaleTitle: 'How We Scale Your Business',
    homeHowWeScaleSubtitle: 'Growth Systems, Not Just Services',
    homeHowWeWorkEyebrow: 'Our Process',
    homeHowWeWorkTitle: 'How We Work',
    homeHowWeWorkSubtitle:
      'A clear process designed to turn marketing into a predictable growth system — from audit to scalable performance.',
    homeCredentialsTitle: 'Data, Audit & Scaling Strategy',
    homeCredentialsBody:
      'We analyze your data, audit your performance, and continuously optimize campaigns to scale what works and eliminate what doesn\'t.',
    homeCredentialsBadge: 'Google & Meta Certified Team · 20+ Years Combined Experience',
    homeMiniCta: 'Ready to scale your business?',
    homeModalCta: 'Get Started'
  },
  portfolio: [
    {
      eyebrow: 'Results',
      title: 'Real Results. Real Growth.',
      subtitle: 'We focus on building systems that generate consistent performance — not isolated wins.',
      description:
        'As a data-driven marketing agency, we focus on building systems that generate consistent performance and scalable growth — not isolated wins. Real Growth Comes from the Right System. Every result you see below is built through a combination of strategy, execution, and collaboration. We don\'t chase short-term wins — we focus on building systems that generate consistent, scalable growth over time.',
      imagePosition: 'right',
      image: 'images/results/Results1.png'
    },
    {
      title: 'E-commerce Growth System',
      metrics: ['48.6x ROAS (Campaign Performance)', '€112K+ Revenue Generated'],
      description:
        'The business had strong potential but wasn\'t fully optimized across SEO and paid campaigns. We rebuilt the SEO structure across all pages and products, continuously optimizing keywords and ensuring proper indexing to maintain top search visibility. At the same time, we refined and scaled ad campaigns — focusing on performance, product selection, and full funnel optimization. Results were built progressively over a 3-month period, leading to consistent and scalable growth.',
      imagePosition: 'left',
      image: 'images/results/Results1.png',
    },
    {
      title: 'Lead Generation & Local Growth',
      metrics: ['1M+ Impressions', '144+ Conversions'],
      description:
        'The goal was not just traffic — but generating qualified leads for a physical business offering services. We rebuilt the SEO foundation, created structured ad groups, and continuously tested different creatives and targeting strategies. The focus was on promoting a core service first, with secondary emphasis on sales. Through constant optimization, we achieved a steady flow of leads and improved campaign efficiency over time.',
      imagePosition: 'right',
      image: 'images/results/Results2.png',
    },
    {
      title: 'Full Growth Support for Local Business',
      metrics: ['7.85x ROAS', 'From near-zero to consistent growth'],
      description:
        'This project started with a local business with minimal online presence. We built everything from the ground up — website, SEO structure, product visuals, and marketing campaigns. By combining multiple elements into one system, we helped the business grow steadily and establish a strong online presence.',
      imagePosition: 'left',
      image: 'images/results/Results3.png',
    },
    {
      title: 'We Don\'t Work With Everyone',
      subtitle: 'Ready to See What We Can Improve in Your Business?',
      description:
        'We believe performance comes from strong partnerships. That\'s why we work with a limited number of clients — businesses where we know we can create real impact and grow together. Every project is built on trust, communication, and long-term collaboration. Results vary depending on industry, budget, and market conditions. Our focus is always the same: build systems that scale what works. We\'ll analyze your current setup and show you exactly where growth opportunities exist. No commitment. Just actionable insights.',
      imagePosition: 'right'
    },
  ],
  seo: {
    home: {
      title: 'Digital Marketing Agency | Google Ads, Meta Ads & SEO',
      description: 'We are a digital marketing agency helping businesses grow through Google Ads, Meta Ads, and SEO strategies focused on real results and scalable growth.',
      keywords: ['digital marketing agency', 'google ads', 'meta ads', 'SEO', 'InsideGrowth', 'performance marketing']
    },
    about: {
      title: 'About Our Marketing Agency | Growth-Focused Team',
      description: 'Learn more about our digital marketing agency and how we combine Google Ads, SEO, and performance strategies to help businesses scale.',
      keywords: ['about InsideGrowth', 'marketing agency team', 'google ads experts', 'SEO agency']
    },
    services: {
      title: 'Marketing Services | Google Ads, SEO & Website Growth',
      description: 'Explore our marketing services including Google Ads management, Meta Ads campaigns, SEO optimization, and website development.',
      keywords: ['marketing services', 'google ads management', 'meta ads', 'SEO optimization', 'website development']
    },
    growthResults: {
      title: 'Growth Results | Marketing Agency Case Studies',
      description: 'See real results from Google Ads, Meta Ads, and SEO campaigns focused on consistent growth and performance.',
      keywords: ['growth results', 'case studies', 'google ads results', 'SEO results', 'marketing performance']
    },
    pricing: {
      title: 'Marketing Agency Pricing | Google Ads & SEO Services',
      description: 'Transparent pricing for marketing services including Google Ads, SEO, and full growth systems tailored to your business.',
      keywords: ['marketing agency pricing', 'google ads pricing', 'SEO pricing', 'growth systems pricing']
    },
    contact: {
      title: 'Contact Our Marketing Agency | Start Your Growth Plan',
      description: 'Get in touch with our digital marketing agency to discuss your business, strategy, and growth opportunities.',
      keywords: ['contact InsideGrowth', 'start growth plan', 'marketing agency contact', 'insidegrowth.ro']
    },
    privacyPolicy: {
      title: 'Privacy Policy',
      description: 'Read the InsideGrowth privacy policy. Learn how we collect, use, and protect your personal data.',
      keywords: ['InsideGrowth privacy policy', 'data protection', 'GDPR', 'insidegrowth.ro']
    },
    cookiePolicy: {
      title: 'Cookie Policy',
      description: 'Learn how InsideGrowth uses cookies to improve your website experience.',
      keywords: ['InsideGrowth cookie policy', 'cookies', 'analytics cookies', 'insidegrowth.ro']
    },
    termsConditions: {
      title: 'Terms & Conditions',
      description: 'Read the InsideGrowth terms and conditions governing the use of our services and website.',
      keywords: ['InsideGrowth terms', 'terms and conditions', 'service agreement', 'insidegrowth.ro']
    }
  },
  legal: {
    privacyPolicy: {
      title: 'Privacy Policy',
      lastUpdated: '30 April 2026',
      sections: [
        {
          heading: 'Chapter I. General Overview',
          paragraphs: [
            'The website insidegrowth.ro is owned and operated by SELLMOTION S.R.L. ("Insidegroth", "we"). SELLMOTION S.R.L. is based in Targu Mures, is registered with the Trade Register under no. J2025039552007 and has tax identification number RO51902547.',
            'By "insidegrowth.ro" we mean any web page (website, landing page, subdomain) owned, administered or operated by SELLMOTION S.R.L.',
            'This Privacy Policy describes how we collect and process personal data when you use the website, complete forms, download materials, subscribe to the newsletter or interact with us through the contact channels displayed.',
            'By using the website, you confirm that you have read and understood this Privacy Policy. If you do not agree with the provisions below, please do not use the forms and do not provide personal data through the website.'
          ]
        },
        {
          heading: 'Chapter II. Terms and Definitions',
          paragraphs: [
            'Online Platform / Site: Refers to insidegrowth.ro and the associated pages administered by SELLMOTION S.R.L.',
            'Controller: SELLMOTION S.R.L., Targu Mures, J2025039552007, RO51902547',
            'User: An individual or legal entity using the website',
            'Personal Data: Any information that can directly or indirectly identify a person, such as name, email, phone number and the content of messages sent',
            'Submission: Transmission of data by the User through the website, for example by completing a contact form, subscribing to a newsletter or downloading a resource',
            'Processor: A contractual partner that processes data on behalf of the Controller, under an agreement'
          ]
        },
        {
          heading: 'Chapter III. Contact Details',
          paragraphs: [
            'For questions or requests regarding personal data, you can contact us as follows:',
            'Email: office@insidegrowth.ro',
            'Phone: +40 799 900 187',
            'We do not have a designated Data Protection Officer (DPO). We handle personal-data requests through the email address above.'
          ]
        },
        {
          heading: 'Chapter IV. What Data We Collect',
          paragraphs: [
            'We may collect the following categories of data depending on how you use the website: full name, email address, phone number, message and information included in free-text fields, answers to questions in forms, questionnaires or quizzes, data provided for newsletter subscription, and data provided to access or download materials (lead magnets).',
            'We do not carry out automated profiling and we do not make decisions solely by automated means that produce legal or similarly significant effects on Users.'
          ]
        },
        {
          heading: 'Chapter V. Purposes of Processing and Legal Bases',
          paragraphs: [
            'We process personal data for the following purposes: responding to requests and discussions initiated through forms or direct contact, making offers and pre-contractual steps, sending communications by newsletter, providing requested materials via download, measuring website performance and improving the user experience, and measuring conversions and optimizing marketing campaigns.',
            'The legal bases for these purposes are: performance of pre-contractual steps for offer requests and discussions initiated through forms; consent for sending marketing communications (newsletter), downloading materials (lead magnets) and activating tracking tools (pixels/cookies); and legitimate interest for measuring website performance, optimizing campaigns and securing the platform.'
          ]
        },
        {
          heading: 'Chapter VI. Tools Used and Technical Data',
          paragraphs: [
            'The website may use measurement and marketing tools implemented through Google Tag Manager. Depending on the consent given in the cookie banner, we may activate Google Analytics for traffic and performance analysis, Google Ads for conversion measurement and campaign optimization, and Meta Ads through Meta Business Manager for conversion measurement and campaign optimization.',
            'In practice, analytics services may process the IP address transiently for technical functions such as security and location estimation. We do not use this data for identification and we do not track the IP address as an identifying element in our reports.'
          ]
        },
        {
          heading: 'Chapter VII. Recipients, Processors and Transfers',
          paragraphs: [
            'Data may be processed by the hosting provider Hostico, Google Workspace, Google Tag Manager, Google Analytics, Google Ads, Meta Business Manager, as well as collaborators and contractual partners, including freelancers, when this is necessary for service delivery.',
            'Where certain providers are located outside the European Economic Area, transfers may take place under GDPR-permitted conditions, including Standard Contractual Clauses and additional measures where applicable. We do not sell personal data and we do not transfer it to third parties for commercial purposes independent of our services.',
            'When using analytics and advertising services, certain data may be transferred to or accessed by the parent entities of Google and Meta located in the United States. These transfers take place under the EU-U.S. Data Privacy Framework (for certified organizations) or under the Standard Contractual Clauses (SCCs) approved by the European Commission, ensuring a level of protection equivalent to that in the European Union.'
          ]
        },
        {
          heading: 'Chapter VIII. Retention Period',
          paragraphs: [
            'We retain data collected through contact forms for up to 1 year in the case of requests that do not result in a contract. Data provided for newsletter subscription or downloading materials (lead magnets) is retained for 3 years from the last interaction, or until consent is withdrawn.',
            'Consent can be withdrawn at any time using the unsubscribe option included in communications or by sending a request to office@insidegrowth.ro.'
          ]
        },
        {
          heading: 'Chapter IX. Data Subject Rights',
          paragraphs: [
            'Under the GDPR, you have the following rights: the right of access, the right to rectification, the right to erasure, the right to restriction of processing, the right to object, the right to data portability, the right to withdraw consent where processing is based on consent, and the right to lodge a complaint with the competent authority.',
            'To exercise your rights, you can write to hello@agensio.ro. We may request additional information to confirm identity when necessary.'
          ]
        },
        {
          heading: 'Chapter X. Minors',
          paragraphs: [
            'The website and the services presented are not intended for minors. We do not intentionally collect data from persons under 18 years of age. If you suspect that we have received such data, please contact us for deletion.'
          ]
        },
        {
          heading: 'Chapter XI. Cookies and Consent',
          paragraphs: [
            'The website uses cookies and similar technologies. Consent management is handled through the Cookie Consent by Moove plugin. Optional cookies, such as analytics and marketing cookies, are activated based on the choices expressed by the User.',
            'For details about categories and how they are managed, please consult the Cookie Policy available on the website.'
          ]
        },
        {
          heading: 'Chapter XII. Data Security',
          paragraphs: [
            'We apply technical and organizational measures to protect data, including access control, role separation, server-level protection and the use of secure communication channels.',
            'Submitting information through forms involves the voluntary provision of data by the User. We recommend that you do not submit sensitive information that is not necessary for assessing the request.'
          ]
        },
        {
          heading: 'Chapter XIII. Third-Party Links',
          paragraphs: [
            'The website may contain links to websites operated by third parties. We do not control their content or policies, and their use is at your own risk. We recommend reviewing the privacy policies of those websites.'
          ]
        },
        {
          heading: 'Chapter XIV. Policy Updates',
          paragraphs: [
            'We may update this Privacy Policy when changes occur in our activity, in the tools we use, or in legal requirements. The updated version will be published on this page.'
          ]
        },
        {
          heading: 'Chapter XV. Contact Information',
          paragraphs: [
            'Questions, suggestions and requests regarding this policy can be sent to office@insidegrowth.ro or to phone number +40 799 900 187.'
          ]
        },
        {
          heading: 'Chapter XVI. Final Provisions',
          paragraphs: [
            'If any of the above clauses is found to be null or invalid, this will not affect the validity of the remaining clauses.',
            'Updated version as of 30.04.2026'
          ]
        }
      ]
    },
    cookiePolicy: ENGLISH_COOKIE_POLICY,
    termsConditions: {
      title: 'Terms & Conditions',
      lastUpdated: '30 April 2026',
      sections: [
        {
          heading: 'Chapter I. General Overview',
          paragraphs: [
            'The website insidegrowth.ro is owned and operated by SELLMOTION S.R.L. ("Insidegroth", "we"). SELLMOTION S.R.L. is based in Targu Mures, is registered with the Trade Register under no. J2025039552007 and has tax identification number RO51902547.',
            'By "insidegrowth.ro" we mean any web page (website, landing page, subdomain) owned, administered or operated by SELLMOTION S.R.L. During browsing on the Site, terms such as "we" or "our" refer to the aforementioned company.',
            'Insidegrowth.ro includes online information for users who accept the terms and conditions below, as well as any additional policies available on the site.',
            'By visiting and using our online platform, you undertake to comply with these Terms and Conditions and the associated policies mentioned on the site. These Terms and Conditions apply to all users, including visitors who browse, submit requests or download materials.',
            'Please read these Terms and Conditions before using the website. By accessing or using any part of the website, you confirm that you accept the provisions. If you do not accept the terms, please stop using the website and do not use the available forms or materials.',
            'Any new feature or section added to the website will be subject to these Terms and Conditions. We reserve the right to update, modify or replace any part of these Terms and Conditions by publishing the updated version on this page. It is your responsibility to check this page periodically. Continued use of the website after the changes are published constitutes acceptance of those changes.'
          ]
        },
        {
          heading: 'Chapter II. Terms and Definitions',
          paragraphs: [
            'Online Platform / Site: Refers to Insidegrowth.ro and the associated pages administered by SELLMOTION S.R.L.',
            'Owner: SELLMOTION S.R.L., based in Targu Mures, registered with the Trade Register under no. J2025039552007, tax ID RO51902547',
            'User: A natural or legal person while using the website',
            'Submission: Transmission of data by the User through the website, for example by completing a contact form, subscribing to a newsletter or downloading a resource',
            'Link: A link to an internal or external page accessed by click',
            'Services: The online marketing and web development services presented on the website, including Google and Meta campaigns, consulting and related services'
          ]
        },
        {
          heading: 'Chapter III. Intellectual Property Rights',
          paragraphs: [
            'The content of the website insidegrowth.ro, including texts, images, graphic elements, downloadable materials, scripts, page structures, code and visual identity elements, constitutes the property of insidegrowth.ro or is used lawfully with the right of use. Use of any elements without written consent is prohibited and may give rise to liability under applicable law.',
            'We may grant the User the right to use certain materials through a separate agreement or through conditions explicitly stated at the time the material is provided. This right is limited to the purpose, period and person indicated and does not confer rights over other elements of the website.',
            'The use on the website of any trademarks or logos belonging to third parties is for informational purposes and does not imply affiliation, sponsorship or endorsement in the absence of an express statement.',
            'If you notice a possible copyright infringement in the website content, please contact us at office@insidegrowth.ro.'
          ]
        },
        {
          heading: 'Chapter IV. General Conditions of Use',
          paragraphs: [
            'By using the website you confirm that you are at least 18 years old and have the legal capacity to enter into legal acts. The website is not intended for minors and we do not intentionally collect data from persons under 18.',
            'The website content is informational in nature. No part of the content constitutes a firm and binding offer to contract services. Any collaboration is established by accepting an offer, a contract or a written agreement, as applicable.',
            'We make reasonable efforts to keep the information up to date, but typographical errors, inaccuracies or omissions may occur. We may correct the content and update the information at any time.',
            'It is forbidden to use the website to transmit malicious code, attempt unauthorized access, spam, unauthorized data collection or any action that may affect the operation of the website or cause damage.',
            'We may limit or stop access to the website, in whole or in part, in the event of a breach of these Terms and Conditions or when we reasonably believe it is necessary for the security of the platform.'
          ]
        },
        {
          heading: 'Chapter V. Services, Estimates and Results',
          paragraphs: [
            'The services presented on the website may include online marketing, Google and Meta campaigns, analytics and tracking, strategy, optimizations and web development services. The exact details of deliverables, deadlines and commercial terms are established through contractual documents.',
            'Any estimates, projections or examples of results are indicative and depend on factors such as budget, industry, season, competition, the quality of the promoted product or service, technical conditions and audience behavior. We do not guarantee specific financial results in the absence of an express contractual clause.',
            'The User understands that online marketing services involve technical and market variables that cannot be fully controlled by the Controller. The estimates and projections provided are informational and are based on historical data or momentary analysis, and do not constitute an obligation of result. The Controller shall not be held responsible for any direct or indirect loss resulting from fluctuations in the algorithms of third-party platforms (such as Google, Meta, TikTok) or from changes in their advertising policies. Any advertising budgets are the sole responsibility of the User.'
          ]
        },
        {
          heading: 'Chapter VI. Personal Data Processing',
          paragraphs: [
            'We respect the confidentiality of website users. The website can be visited without providing personal data. Data are processed when the User submits information through forms, subscribes to the newsletter, downloads materials or contacts us through the available channels.',
            'For details regarding categories of data, purposes and rights, please consult the Privacy Policy available on the website.'
          ]
        },
        {
          heading: 'Chapter VII. Use of Cookies',
          paragraphs: [
            'Insidegrowth.ro uses cookies and similar technologies. For details on categories, consent and management, please consult the Cookie Policy available on the website.'
          ]
        },
        {
          heading: 'Chapter VIII. Data and Platform Security',
          paragraphs: [
            'We apply technical and organizational measures to secure the website and protect data. However, no online platform can guarantee absolute security. The User assumes responsibility for the data they choose to transmit and for the security of their own device. In the event of a security breach affecting personal data, we will notify the affected users in accordance with the applicable legal provisions.'
          ]
        },
        {
          heading: 'Chapter IX. Third-Party Links',
          paragraphs: [
            'The website may include links to sites operated by third parties. These links are for informational purposes. We do not control the content or policies of those sites and do not assume responsibility for their use. We recommend consulting the terms and policies of those websites.'
          ]
        },
        {
          heading: 'Chapter X. Errors, Inaccuracies and Omissions',
          paragraphs: [
            'Occasionally, website content may include typographical errors, inaccuracies or omissions. We reserve the right to correct these situations and update the content without prior notice where necessary.'
          ]
        },
        {
          heading: 'Chapter XI. Prohibited Uses',
          paragraphs: [
            'The website may not be used for: any illegal action or action that infringes third-party rights; infringement of intellectual property rights; harassment, intimidation, defamation or discrimination; transmitting false or misleading information or impersonating another person; transmitting viruses, malware or destructive code; unauthorized collection or monitoring of other users\' data; unauthorized access attempts, vulnerability testing or attacks on security systems; automated or abusive use of the website that exceeds normal and reasonable browsing.',
            'We reserve the right to restrict access, including by blocking IP addresses, when we identify behavior that may affect the operation of the website or its security.'
          ]
        },
        {
          heading: 'Chapter XII. Disclaimer of Warranties; Limitation of Liability',
          paragraphs: [
            'The website and its content are provided for informational purposes. We do not guarantee that the website will operate without interruptions or errors and we are not liable for indirect damages resulting from the use or inability to use the website, to the extent permitted by law.',
            'We are not responsible for the effects generated by decisions made solely on the basis of the information published on the website, in the absence of a contract or written confirmation regarding applicability in the specific case.'
          ]
        },
        {
          heading: 'Chapter XIII. Termination of Use',
          paragraphs: [
            'You may stop using the website at any time by ceasing to access our pages. If we believe that you have breached these Terms and Conditions or if there are reasonable suspicions of a breach, we may suspend or stop access to the website without prior notice.'
          ]
        },
        {
          heading: 'Chapter XIV. Dispute Resolution. Governing Law',
          paragraphs: [
            'Any attempt at unauthorized access or fraud will be reported to the competent authorities. Any conflict between SELLMOTION S.R.L. and the User will be attempted to be resolved amicably. Please send us any complaint at office@insidegrowth.ro so we can try to resolve it quickly.',
            'If amicable settlement is not possible, Romanian law applies and the competent courts are those in Romania.'
          ]
        },
        {
          heading: 'Chapter XV. Contact Information',
          paragraphs: [
            'Questions, suggestions and complaints related to these Terms and Conditions or associated policies may be sent to office@insidegrowth.ro or to phone number +40 799 900 187.'
          ]
        },
        {
          heading: 'Chapter XVI. Final Provisions',
          paragraphs: [
            'If any of the above clauses is found to be null or invalid, this will not affect the validity of the remaining clauses.',
            'Updated version as of 30.04.2026'
          ]
        }
      ]
    }
  }
};
