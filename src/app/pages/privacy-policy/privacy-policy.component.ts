import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { SchemaService } from '../../core/services/schema.service';
import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';

@Component({
  selector: 'app-privacy-policy',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;

  constructor(
    private readonly seo: SeoService,
    private readonly schema: SchemaService
  ) {
    effect(() => {
      const content = this.content();
      const seoConfig = content.seo.privacyPolicy;
      this.seo.update({
        title: seoConfig.title,
        description: seoConfig.description,
        keywords: seoConfig.keywords
      });
      this.schema.injectPageSchemas(content.geo, 'privacyPolicy');
    });
  }
}
