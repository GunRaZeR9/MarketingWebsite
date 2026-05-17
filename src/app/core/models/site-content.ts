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

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export interface PricingFeature {
  label: string;
  foundation: boolean;
  scaling: boolean;
  partner: boolean | string;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  ctaLabel: string;
  recommendedBudget: string;
  featured?: boolean;
  features: string[];
}

export interface PricingSpotlight {
  title: string;
  description: string;
  eyebrow?: string;
}

export interface PricingFaqItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  person: string;
  role: string;
  email: string;
  phone: string;
}

export interface ContactFaqItem {
  question: string;
  answer: string;
}

export interface BudgetOption {
  value: string;
  label: string;
}

export interface ContactFormText {
  planLabel: string;
  planPlaceholder: string;
  planValidation: string;
  budgetLabel: string;
  budgetPlaceholder: string;
  budgetValidation: string;
  businessLabel: string;
  businessPlaceholder: string;
  businessValidation: string;
  fullNameLabel: string;
  fullNamePlaceholder: string;
  fullNameValidation: string;
  emailLabel: string;
  emailPlaceholder: string;
  emailValidation: string;
  websiteLabel: string;
  websitePlaceholder: string;
  websiteValidation: string;
  phoneLabel: string;
  phonePlaceholder: string;
  phoneValidation: string;
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
    growthResults: string;
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
  homeResultsEyebrow: string;
  homeResultsTitle: string;
  homeResultsBody: string;
  homeResultsLink: string;
  statsCampaignsRun: string;
  statsAverageRoi: string;
  statsTopPlatforms: string;
  statsDataDriven: string;
  aboutMissionEyebrow: string;
  aboutPlatformsEyebrow: string;
  aboutWhyChooseUs: string;
  aboutTeamEyebrow: string;
  aboutTeamTitle: string;
  aboutTeamSubtitle: string;
  aboutTeamTagline: string;
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
  contactNextStepsTitle: string;
  contactNextSteps: string[];
  contactResponseTimeTitle: string;
  contactResponseTimeBody: string;
  contactDirectContactTitle: string;
  contactLimitedClientsNote: string;
  contactFaqTitle: string;
  contactFaqs: ContactFaqItem[];
  leadSavedMessage: string;
  leadSendingMessage: string;
  leadErrorMessage: string;
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

// ─── GEO / AI-SEO Schema Interfaces ─────────────────────────────────────────
// These are background-only: never displayed in the UI.
// Injected as invisible <script type="application/ld+json"> tags per page.

export interface GeoAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface GeoOrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
  email: string;
  phone: string;
  address: GeoAddress;
  sameAs: string[];
  areaServed: string[];
  foundingDate: string;
  numberOfEmployees: number;
}

export interface GeoServiceSchema {
  name: string;
  description: string;
  serviceType: string;
  areaServed: string;
}

export interface GeoFaqSchema {
  question: string;
  answer: string;
}

export interface GeoBreadcrumbItem {
  name: string;
  url: string;
}

export interface GeoPersonSchema {
  name: string;
  jobTitle: string;
  description: string;
}

export interface GeoCaseStudySchema {
  title: string;
  description: string;
  keywords: string[];
}

export interface GeoBreadcrumbs {
  home: GeoBreadcrumbItem[];
  about: GeoBreadcrumbItem[];
  services: GeoBreadcrumbItem[];
  pricing: GeoBreadcrumbItem[];
  contact: GeoBreadcrumbItem[];
  growthResults: GeoBreadcrumbItem[];
  privacyPolicy: GeoBreadcrumbItem[];
  cookiePolicy: GeoBreadcrumbItem[];
  termsConditions: GeoBreadcrumbItem[];
}

export interface GeoSchemaData {
  organization: GeoOrganizationSchema;
  servicesSchema: GeoServiceSchema[];
  pricingFaqs: GeoFaqSchema[];
  contactFaqs: GeoFaqSchema[];
  team: GeoPersonSchema[];
  caseStudies: GeoCaseStudySchema[];
  breadcrumbs: GeoBreadcrumbs;
  aiContext: string;
  inLanguage: string;
}

// ─── Standard SEO interfaces ──────────────────────────────────────────────────

export interface PageSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface SiteSeo {
  home: PageSeo;
  about: PageSeo;
  services: PageSeo;
  growthResults: PageSeo;
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
  aboutTeamEyebrow: string;
  aboutTeamTitle: string;
  aboutTeamSubtitle: string;
  aboutTeamTagline: string;
  aboutTeamMembers?: TeamMember[];
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
  pricingComparisonTitle: string;
  pricingVatNote: string;
  pricingSpotlightsTitle: string;
  pricingFaqTitle: string;
  pricingCustomTitle: string;
  pricingCustomSubtitle: string;
  pricingLimitedClientsTitle: string;
  pricingLimitedClientsBody: string;
  pricingBuildRightSystemTitle: string;
  pricingBuildRightSystemBody: string;
  pricingNoCommitment: string;
  pricingPlans: PricingPlan[];
  pricingSpotlights: PricingSpotlight[];
  pricingFeatures: PricingFeature[];
  pricingFaqs: PricingFaqItem[];
  contactTitle: string;
  contactSubtitle: string;
  primaryCta: string;
  growthServices: ServiceItem[];
  howWeWork: HowWeWorkStep[];
  contact: ContactInfo;
  ui: SiteUiText;
  seo: SiteSeo;
  geo: GeoSchemaData;
  legal: SiteLegalContent;
  portfolio: CaseStudy[];
}

export interface CaseStudy {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  metrics?: string[];
  description: string;
  results?: string;
  image?: string;
  imagePosition?: 'left' | 'right';
  features?: string[];
}
