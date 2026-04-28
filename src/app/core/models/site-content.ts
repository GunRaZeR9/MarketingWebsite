export interface ServiceItem {
  title: string;
  description: string;
  features?: string[];
  imagePosition?: 'left' | 'right';
  image?: string;
}

export interface HowWeWorkStep {
  step: string;
  title: string;
  description: string;
}

export type LanguageCode = 'en' | 'ro' | 'hu';

export interface AdvantageItem {
  title: string;
  description: string;
}

export interface PricingFeature {
  label: string;
  standard: boolean;
  premium: boolean;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  ctaLabel: string;
  featured?: boolean;
}

export interface ContactInfo {
  person: string;
  role: string;
  email: string;
}

export interface BudgetOption {
  value: string;
  label: string;
}

export interface ContactFormText {
  fullNameLabel: string;
  fullNamePlaceholder: string;
  fullNameValidation: string;
  emailLabel: string;
  emailPlaceholder: string;
  emailValidation: string;
  companyLabel: string;
  companyPlaceholder: string;
  companyValidation: string;
  budgetLabel: string;
  budgetPlaceholder: string;
  budgetValidation: string;
  budgetOptions: BudgetOption[];
  goalsLabel: string;
  goalsPlaceholder: string;
  goalsValidation: string;
  submitLabel: string;
}

export interface SiteUiText {
  nav: {
    home: string;
    about: string;
    services: string;
    pricing: string;
    contact: string;
  };
  languageLabel: string;
  homeExploreServices: string;
  headerCta: string;
  footerTagline: string;
  footerContactLabel: string;
  footerNavigateLabel: string;
  footerAllRightsReserved: string;
  footerPrivacyPolicy: string;
  footerCookiePolicy: string;
  footerTermsConditions: string;
  footerCopyrightPrefix: string;
  homeWhoWeAre: string;
  homeStrategiesTitle: string;
  homeAboutUs: string;
  homeReadyTitle: string;
  homeStartGrowing: string;
  homeViewPricing: string;
  statsCampaignsRun: string;
  statsAverageRoi: string;
  statsTopPlatforms: string;
  statsDataDriven: string;
  aboutMissionEyebrow: string;
  aboutPlatformsEyebrow: string;
  aboutWhyChooseUs: string;
  servicesApproachEyebrow: string;
  cookieConsentMessage: string;
  cookieConsentAccept: string;
  cookieConsentDecline: string;
  aboutEyebrow: string;
  aboutTitle: string;
  aboutLead: string;
  servicesEyebrow: string;
  servicesLead: string;
  pricingEyebrow: string;
  pricingFeatureComparison: string;
  pricingTableAriaLabel: string;
  pricingFeatureHeader: string;
  pricingStandardHeader: string;
  pricingPremiumHeader: string;
  pricingIncluded: string;
  pricingOptional: string;
  contactEyebrow: string;
  contactShareGoals: string;
  contactForm: ContactFormText;
  leadSavedMessage: string;
  homeGrowthEyebrow: string;
  homeHowWeScaleTitle: string;
  homeHowWeScaleSubtitle: string;
  homeHowWeWorkEyebrow: string;
  homeHowWeWorkTitle: string;
  homeHowWeWorkSubtitle: string;
  homeCredentialsTitle: string;
  homeCredentialsBody: string;
  homeCredentialsBadge: string;
  homeMiniCta: string;
  homeModalCta: string;
}

export interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface SiteSeo {
  home: PageSeo;
  about: PageSeo;
  services: PageSeo;
  pricing: PageSeo;
  contact: PageSeo;
  privacyPolicy: PageSeo;
  cookiePolicy: PageSeo;
  termsConditions: PageSeo;
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPageContent {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface SiteLegalContent {
  privacyPolicy: LegalPageContent;
  cookiePolicy: LegalPageContent;
  termsConditions: LegalPageContent;
}

export interface SiteContent {
  language: LanguageCode;
  brandName: string;
  heroTitle: string;
  heroSubtitle: string;
  introTitle: string;
  introSubtitle: string;
  introBody: string[];
  aboutIntroTitle: string;
  aboutIntroBody: string[];
  aboutPlatformItems?: string[];
  problemTitle: string;
  problemPoints: string[];
  solutionsTitle: string;
  solutions: ServiceItem[];
  servicesTitle: string;
  services: ServiceItem[];
  advantagesTitle: string;
  advantages: AdvantageItem[];
  pricingTitle: string;
  pricingSubtitle: string;
  pricingPlans: PricingPlan[];
  pricingFeatures: PricingFeature[];
  contactTitle: string;
  contactSubtitle: string;
  primaryCta: string;
  growthServices: ServiceItem[];
  howWeWork: HowWeWorkStep[];
  contact: ContactInfo;
  ui: SiteUiText;
  seo: SiteSeo;
  legal: SiteLegalContent;
}
