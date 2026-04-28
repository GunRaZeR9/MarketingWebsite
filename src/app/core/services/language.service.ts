import { DOCUMENT } from '@angular/common';
import { computed, inject, Injectable, signal } from '@angular/core';

import { DEFAULT_LANGUAGE, SITE_CONTENT_BY_LANGUAGE } from '../data/site-content';
import { LanguageCode } from '../models/site-content';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);
  private readonly currentLanguageSignal = signal<LanguageCode>(DEFAULT_LANGUAGE);

  readonly language = this.currentLanguageSignal.asReadonly();
  readonly content = computed(() => SITE_CONTENT_BY_LANGUAGE[this.currentLanguageSignal()]);
  readonly availableLanguages = [{ code: 'en' as const, label: 'EN' }];

  constructor() {
    this.currentLanguageSignal.set(DEFAULT_LANGUAGE);
    this.applyDocumentLanguage(DEFAULT_LANGUAGE);
  }

  setLanguage(language: LanguageCode): void {
    if (language !== DEFAULT_LANGUAGE) {
      return;
    }

    this.currentLanguageSignal.set(DEFAULT_LANGUAGE);
    this.applyDocumentLanguage(DEFAULT_LANGUAGE);
  }

  private applyDocumentLanguage(language: LanguageCode): void {
    this.document.documentElement.lang = language;
  }
}
