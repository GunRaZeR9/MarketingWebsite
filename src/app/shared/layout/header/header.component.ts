import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { LanguageService } from '../../../core/services/language.service';
import { LanguageCode } from '../../../core/models/site-content';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;
  readonly currentLanguage = this.languageService.language;
  readonly languages = this.languageService.availableLanguages;

  readonly navItems = [
    { key: 'home', route: '/home' },
    { key: 'about', route: '/about' },
    { key: 'services', route: '/services' },
    { key: 'pricing', route: '/pricing' },
    { key: 'contact', route: '/contact' }
  ] as const;

  setLanguage(language: string): void {
    if (language === 'en' || language === 'ro' || language === 'hu') {
      this.languageService.setLanguage(language as LanguageCode);
    }
  }
}
