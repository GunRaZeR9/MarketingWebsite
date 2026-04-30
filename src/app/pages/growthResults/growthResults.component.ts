import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-growth-results-page',
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './growthResults.component.html',
  styleUrl: './growthResults.component.scss'
})
export class GrowthResultsComponent {
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
