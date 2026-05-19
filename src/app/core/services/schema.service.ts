import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import {
  GeoBreadcrumbItem,
  GeoCaseStudySchema,
  GeoFaqSchema,
  GeoOrganizationSchema,
  GeoPersonSchema,
  GeoSchemaData,
  GeoServiceSchema,
} from '../models/site-content';

const BASE_URL = 'https://insidegrowth.ro';

@Injectable({ providedIn: 'root' })
export class SchemaService {
  private readonly document = inject(DOCUMENT);
  private readonly injectedIds = new Set<string>();

  private inject(id: string, data: object): void {
    let el = this.document.getElementById(id) as HTMLScriptElement | null;
    if (!el) {
      el = this.document.createElement('script');
      el.type = 'application/ld+json';
      el.id = id;
      this.document.head.appendChild(el);
    }
    el.text = JSON.stringify(data);
    this.injectedIds.add(id);
  }

  private clearPageSchemas(): void {
    this.injectedIds.forEach(id => {
      const el = this.document.getElementById(id);
      el?.parentNode?.removeChild(el);
    });
    this.injectedIds.clear();
  }

  injectPageSchemas(geo: GeoSchemaData, page: string): void {
    this.clearPageSchemas();

    this.injectBreadcrumbs(geo, page);

    switch (page) {
      case 'home':
        this.inject('schema-organization', buildOrganization(geo.organization, geo.inLanguage));
        this.inject('schema-localbusiness', buildLocalBusiness(geo.organization, geo.inLanguage));
        this.inject('schema-website', buildWebSite(geo.aiContext));
        if (geo.aggregateRating) {
          this.inject('schema-aggregate-rating', buildAggregateRating(geo));
        }
        break;
      case 'about':
        this.inject('schema-organization-about', buildOrganization(geo.organization, geo.inLanguage));
        this.inject('schema-persons', buildPersons(geo.team, geo.organization.url));
        break;
      case 'services':
        this.inject('schema-services', buildServices(geo.servicesSchema, geo.organization, geo.inLanguage));
        this.inject('schema-faq-services', buildServiceFaqs(geo.servicesSchema, geo.inLanguage));
        break;
      case 'pricing':
        this.inject('schema-faq-pricing', buildFaq(geo.pricingFaqs, geo.inLanguage));
        break;
      case 'contact':
        this.inject('schema-localbusiness-contact', buildLocalBusiness(geo.organization, geo.inLanguage));
        this.inject('schema-faq-contact', buildFaq(geo.contactFaqs, geo.inLanguage));
        break;
      case 'growthResults':
        this.inject('schema-articles', buildArticles(geo.caseStudies, geo.organization, geo.inLanguage));
        if (geo.aggregateRating) {
          this.inject('schema-aggregate-rating', buildAggregateRating(geo));
        }
        break;
    }
  }

  private injectBreadcrumbs(geo: GeoSchemaData, page: string): void {
    type BreadcrumbKey = keyof typeof geo.breadcrumbs;
    const key = page as BreadcrumbKey;
    const items = geo.breadcrumbs[key];
    if (items?.length) {
      this.inject('schema-breadcrumb', buildBreadcrumb(items));
    }
  }
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function slugify(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// ─── Service relationship graph (for isRelatedTo cross-linking) ───────────────

const SERVICE_RELATIONS: Record<string, string[]> = {
  'google-ads-management':    ['meta-ads-management', 'seo-organic-growth', 'tracking-analytics'],
  'meta-ads-management':      ['google-ads-management', 'creative-production', 'tracking-analytics'],
  'seo-organic-growth':       ['google-ads-management', 'website-development', 'tracking-analytics'],
  'website-development':      ['seo-organic-growth', 'tracking-analytics'],
  'creative-production':      ['meta-ads-management', 'google-ads-management'],
  'tracking-analytics':       ['google-ads-management', 'meta-ads-management', 'seo-organic-growth'],
};

// ─── Schema builders ──────────────────────────────────────────────────────────

function buildOrganization(org: GeoOrganizationSchema, lang: string[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: org.name,
    legalName: 'SELLMOTION S.R.L.',
    url: org.url,
    logo: {
      '@type': 'ImageObject',
      url: org.logo,
      width: 512,
      height: 512,
    },
    description: org.description,
    email: org.email,
    telephone: org.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: org.address.streetAddress,
      addressLocality: org.address.addressLocality,
      addressRegion: org.address.addressRegion,
      postalCode: org.address.postalCode,
      addressCountry: org.address.addressCountry,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: org.phone,
      contactType: 'customer service',
      email: org.email,
      availableLanguage: ['Romanian', 'English', 'Hungarian'],
    },
    sameAs: org.sameAs,
    areaServed: org.areaServed,
    foundingDate: org.foundingDate,
    numberOfEmployees: { '@type': 'QuantitativeValue', value: org.numberOfEmployees },
    knowsAbout: [
      'Google Ads', 'Meta Ads', 'SEO', 'Performance Marketing',
      'E-commerce Growth', 'Lead Generation', 'Website Development',
      'Tracking & Analytics', 'Conversion Rate Optimization', 'Digital Marketing Strategy',
    ],
    inLanguage: lang,
  };
}

function buildLocalBusiness(org: GeoOrganizationSchema, lang: string[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${BASE_URL}/#localbusiness`,
    name: org.name,
    legalName: 'SELLMOTION S.R.L.',
    url: org.url,
    image: org.logo,
    telephone: org.phone,
    email: org.email,
    description: org.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: org.address.streetAddress,
      addressLocality: org.address.addressLocality,
      addressRegion: org.address.addressRegion,
      postalCode: org.address.postalCode,
      addressCountry: org.address.addressCountry,
    },
    hasMap: 'https://www.google.com/maps/place/Targu+Mures,+Romania',
    areaServed: org.areaServed.map(area => ({ '@type': 'Country', name: area })),
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Invoice',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: org.sameAs,
    inLanguage: lang,
    parentOrganization: { '@id': `${BASE_URL}/#organization` },
  };
}

function buildWebSite(description: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'InsideGrowth',
    alternateName: 'InsideGrowth.ro',
    description,
    inLanguage: ['ro-RO', 'en-US'],
    publisher: { '@id': `${BASE_URL}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/?s={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

function buildBreadcrumb(items: GeoBreadcrumbItem[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function buildPersons(team: GeoPersonSchema[], orgUrl: string): object {
  return {
    '@context': 'https://schema.org',
    '@graph': team.map(member => ({
      '@type': 'Person',
      name: member.name,
      jobTitle: member.jobTitle,
      description: member.description,
      worksFor: { '@type': 'Organization', url: orgUrl },
    })),
  };
}

function buildServices(
  services: GeoServiceSchema[],
  org: GeoOrganizationSchema,
  lang: string[],
): object {
  return {
    '@context': 'https://schema.org',
    '@graph': services.map(svc => {
      const slug = slugify(svc.name);
      const serviceId = `${BASE_URL}/#${slug}-service`;
      const related = (SERVICE_RELATIONS[slug] ?? []).map(rel => ({
        '@id': `${BASE_URL}/#${rel}-service`,
      }));

      const node: Record<string, unknown> = {
        '@type': 'Service',
        '@id': serviceId,
        name: svc.name,
        description: svc.description,
        serviceType: svc.serviceType,
        url: svc.url ?? `${BASE_URL}/services`,
        provider: {
          '@type': 'Organization',
          '@id': `${BASE_URL}/#organization`,
          name: org.name,
          url: org.url,
        },
        areaServed: { '@type': 'Country', name: svc.areaServed },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'EUR',
          availability: 'https://schema.org/InStock',
          url: svc.url ?? `${BASE_URL}/services`,
          seller: { '@id': `${BASE_URL}/#organization` },
        },
        inLanguage: lang,
      };

      if (related.length > 0) {
        node['isRelatedTo'] = related;
      }

      if (svc.faqs && svc.faqs.length > 0) {
        node['hasPart'] = {
          '@type': 'FAQPage',
          mainEntity: svc.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        };
      }

      return node;
    }),
  };
}

function buildServiceFaqs(services: GeoServiceSchema[], lang: string[]): object {
  const allFaqs: GeoFaqSchema[] = services.flatMap(svc => svc.faqs ?? []);
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: allFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function buildFaq(faqs: GeoFaqSchema[], lang: string[]): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

function buildArticles(
  studies: GeoCaseStudySchema[],
  org: GeoOrganizationSchema,
  lang: string[],
): object {
  return {
    '@context': 'https://schema.org',
    '@graph': studies.map(study => ({
      '@type': 'Article',
      headline: study.title,
      description: study.description,
      keywords: study.keywords.join(', '),
      publisher: {
        '@type': 'Organization',
        name: org.name,
        url: org.url,
        logo: { '@type': 'ImageObject', url: org.logo },
      },
      author: { '@type': 'Organization', name: org.name, url: org.url },
      inLanguage: lang,
      datePublished: org.foundingDate,
    })),
  };
}

function buildAggregateRating(geo: GeoSchemaData): object {
  const rating = geo.aggregateRating!;
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#localbusiness`,
    name: geo.organization.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.ratingValue,
      reviewCount: rating.reviewCount,
      bestRating: rating.bestRating,
      worstRating: rating.worstRating,
    },
  };
}
