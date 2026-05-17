import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { SchemaService } from '../../core/services/schema.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-cookie-policy',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './cookie-policy.component.html',
  styleUrl: './cookie-policy.component.scss'
})
export class CookiePolicyComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;

  constructor(
    private readonly seo: SeoService,
    private readonly schema: SchemaService
  ) {
    effect(() => {
      const content = this.content();
      const seoConfig = content.seo.cookiePolicy;
      this.seo.update({
        title: seoConfig.title,
        description: seoConfig.description,
        keywords: seoConfig.keywords
      });
      this.schema.injectPageSchemas(content.geo, 'cookiePolicy');
    });
  }
}
