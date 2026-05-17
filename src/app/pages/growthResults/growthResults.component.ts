import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { SchemaService } from '../../core/services/schema.service';

@Component({
  selector: 'app-growth-results-page',
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './growthResults.component.html',
  styleUrl: './growthResults.component.scss'
})
export class GrowthResultsComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;

  constructor(
    private readonly seo: SeoService,
    private readonly schema: SchemaService
  ) {
    effect(() => {
      const content = this.content();
      const seoConfig = content.seo.growthResults;
      this.seo.update({
        title: seoConfig.title,
        description: seoConfig.description,
        keywords: seoConfig.keywords
      });
      this.schema.injectPageSchemas(content.geo, 'growthResults');
    });
  }
}
