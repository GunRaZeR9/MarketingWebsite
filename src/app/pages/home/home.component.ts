import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;
  readonly heroBackgroundStyle =
    "linear-gradient(110deg, rgb(12 16 20 / 68%) 0%, rgb(12 16 20 / 82%) 55%, rgb(12 16 20 / 98%) 100%), url('images/background/bg1.png') center/cover no-repeat";

  constructor(private readonly seo: SeoService) {
    effect(() => {
      const seoConfig = this.content().seo.home;

      this.seo.update({
        title: seoConfig.title,
        description: seoConfig.description,
        keywords: seoConfig.keywords
      });
    });
  }
}
