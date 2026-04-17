import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about-page',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;

  constructor(private readonly seo: SeoService) {
    effect(() => {
      const seoConfig = this.content().seo.about;

      this.seo.update({
        title: seoConfig.title,
        description: seoConfig.description,
        keywords: seoConfig.keywords
      });
    });
  }
}
