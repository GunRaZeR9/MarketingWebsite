import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject } from '@angular/core';

import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about-page',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;
  readonly teamMembers = computed(() => this.content().aboutTeamMembers ?? []);

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
