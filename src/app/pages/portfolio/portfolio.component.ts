import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-portfolio-page',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;

  constructor(private readonly seo: SeoService) {
    effect(() => {
      const seoConfig = this.content().seo.portfolio;
      if (seoConfig) {
        this.seo.update({
          title: seoConfig.title,
          description: seoConfig.description,
          keywords: seoConfig.keywords
        });
      }
    });
  }
}
