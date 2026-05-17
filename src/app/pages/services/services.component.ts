import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { SchemaService } from '../../core/services/schema.service';

@Component({
  selector: 'app-services-page',
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;

  constructor(
    private readonly seo: SeoService,
    private readonly schema: SchemaService
  ) {
    effect(() => {
      const content = this.content();
      const seoConfig = content.seo.services;
      this.seo.update({
        title: seoConfig.title,
        description: seoConfig.description,
        keywords: seoConfig.keywords
      });
      this.schema.injectPageSchemas(content.geo, 'services');
    });
  }
}
