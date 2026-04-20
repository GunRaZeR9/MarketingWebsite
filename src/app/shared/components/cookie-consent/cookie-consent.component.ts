import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../../core/services/language.service';

const COOKIE_CONSENT_KEY = 'cookieConsent';

@Component({
  selector: 'app-cookie-consent',
  imports: [RouterLink],
  templateUrl: './cookie-consent.component.html'
})
export class CookieConsentComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;
  readonly visible = signal(!localStorage.getItem(COOKIE_CONSENT_KEY));

  accept(): void {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    this.visible.set(false);
  }

  decline(): void {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    this.visible.set(false);
  }
}
