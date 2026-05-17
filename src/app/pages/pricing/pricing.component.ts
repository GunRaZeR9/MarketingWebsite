import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { SchemaService } from '../../core/services/schema.service';

@Component({
  selector: 'app-pricing-page',
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;
  expandedFaqIndex: number | null = null;

  constructor(
    private readonly seo: SeoService,
    private readonly schema: SchemaService
  ) {
    effect(() => {
      const content = this.content();
      const seoConfig = content.seo.pricing;
      this.seo.update({
        title: seoConfig.title,
        description: seoConfig.description,
        keywords: seoConfig.keywords
      });
      this.schema.injectPageSchemas(content.geo, 'pricing');
    });
  }

  toggleFaq(index: number): void {
    this.expandedFaqIndex = this.expandedFaqIndex === index ? null : index;
  }
}
