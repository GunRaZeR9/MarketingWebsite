import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';

import { DEFAULT_LANGUAGE, SITE_CONTENT_BY_LANGUAGE } from '../data/site-content';
import { LanguageCode } from '../models/site-content';

const STORAGE_KEY = 'siteLanguage';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly currentLanguageSignal = signal<LanguageCode>(DEFAULT_LANGUAGE);

  readonly language = this.currentLanguageSignal.asReadonly();
  readonly content = computed(() => SITE_CONTENT_BY_LANGUAGE[this.currentLanguageSignal()]);
  readonly availableLanguages = [
    { code: 'en' as const, label: 'EN' },
    { code: 'ro' as const, label: 'RO' },
    { code: 'hu' as const, label: 'HU' }
  ];

  constructor() {
    const storedLanguage = localStorage.getItem(STORAGE_KEY);

    if (storedLanguage === 'ro' || storedLanguage === 'hu' || storedLanguage === 'en') {
      this.currentLanguageSignal.set(storedLanguage);
    }

    this.applyDocumentLanguage(this.currentLanguageSignal());
  }

  setLanguage(language: LanguageCode): void {
    this.currentLanguageSignal.set(language);
    localStorage.setItem(STORAGE_KEY, language);
    this.applyDocumentLanguage(language);
  }

  private applyDocumentLanguage(language: LanguageCode): void {
    this.document.documentElement.lang = language;
  }
}
