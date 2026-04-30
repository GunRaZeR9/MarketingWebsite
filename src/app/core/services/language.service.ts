import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';

import { SITE_CONTENT_EN } from '../data/site-content-en';
import { SITE_CONTENT_RO } from '../data/site-content-ro';
import { SITE_CONTENT_HU } from '../data/site-content-hu';
import { LanguageCode, SiteContent } from '../models/site-content';

const DEFAULT_LANGUAGE: LanguageCode = 'en';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly currentLanguageSignal = signal<LanguageCode>(DEFAULT_LANGUAGE);

  // Language lookup map
  private readonly languageMap: Record<LanguageCode, SiteContent> = {
    'en': SITE_CONTENT_EN,
    'ro': SITE_CONTENT_RO,
    'hu': SITE_CONTENT_HU
  };

  readonly language = this.currentLanguageSignal.asReadonly();
  // Ensure content() always returns a SiteContent by falling back to the default language
  readonly content = computed(() => {
    return this.languageMap[this.currentLanguageSignal()] || this.languageMap[DEFAULT_LANGUAGE];
  });
  readonly availableLanguages = [
    { code: 'en' as const, label: 'EN' },
    { code: 'ro' as const, label: 'RO' }
    // Note: 'hu' is prepared in code but intentionally not exposed in dropdown for now
  ];

  constructor() {
    this.currentLanguageSignal.set(DEFAULT_LANGUAGE);
    this.applyDocumentLanguage(DEFAULT_LANGUAGE);
  }

  setLanguage(language: LanguageCode): void {
    this.currentLanguageSignal.set(language);
    this.applyDocumentLanguage(language);
  }

  private applyDocumentLanguage(language: LanguageCode): void {
    this.document.documentElement.lang = language;
  }
}
