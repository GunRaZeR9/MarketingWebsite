import { CommonModule } from '@angular/common';
import { Component, HostListener, computed, effect, inject, signal } from '@angular/core';

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

  readonly fullscreenImages = signal<string[]>([]);
  readonly fullscreenIdx    = signal(0);
  readonly fullscreenOpen   = signal(false);
  /** Derived: current image URL in the lightbox */
  readonly fullscreenSrc = computed(() => this.fullscreenImages()[this.fullscreenIdx()] ?? '');

  constructor(private readonly seo: SeoService) {
    effect(() => {
      const c = this.content();
      this.seo.update({
        title:       c.seo.portfolio.title,
        description: c.seo.portfolio.description,
        keywords:    c.seo.portfolio.keywords
      });
    });
  }

  openGallery(images: string[], startIdx = 0): void {
    this.fullscreenImages.set(images);
    this.fullscreenIdx.set(startIdx);
    this.fullscreenOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  prevImage(): void {
    const len = this.fullscreenImages().length;
    this.fullscreenIdx.update(i => (i - 1 + len) % len);
  }

  nextImage(): void {
    const len = this.fullscreenImages().length;
    this.fullscreenIdx.update(i => (i + 1) % len);
  }

  closeFullscreen(): void {
    this.fullscreenOpen.set(false);
    document.body.style.overflow = '';
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (!this.fullscreenOpen()) return;
    if (event.key === 'Escape') { this.closeFullscreen(); return; }
    if (this.fullscreenImages().length <= 1) return;
    if (event.key === 'ArrowLeft') this.prevImage();
    if (event.key === 'ArrowRight') this.nextImage();
  }
}
