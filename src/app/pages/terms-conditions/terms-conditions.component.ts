import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-terms-conditions',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './terms-conditions.component.html',
  styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;

  constructor(private readonly seo: SeoService) {
    effect(() => {
      const seoConfig = this.content().seo.termsConditions;
      this.seo.update({
        title: seoConfig.title,
        description: seoConfig.description,
        keywords: seoConfig.keywords
      });
    });
  }
}
