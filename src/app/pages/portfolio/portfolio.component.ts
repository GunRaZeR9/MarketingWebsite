import { CommonModule } from '@angular/common';
import { Component, HostListener, effect, inject, signal } from '@angular/core';

import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;

  readonly fullscreenSrc = signal('');
  readonly fullscreenOpen = signal(false);

  constructor(private readonly seo: SeoService) {
    effect(() => {
      const c = this.content();
      this.seo.update({
        title: c.seo.portfolio.title,
        description: c.seo.portfolio.description,
        keywords: c.seo.portfolio.keywords
      });
    });
  }

  openFullscreen(src: string): void {
    this.fullscreenSrc.set(src);
    this.fullscreenOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeFullscreen(): void {
    this.fullscreenOpen.set(false);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.fullscreenOpen()) this.closeFullscreen();
  }
}
