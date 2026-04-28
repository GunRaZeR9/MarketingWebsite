import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, NgZone, OnDestroy, effect, inject, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { ServiceItem } from '../../core/models/site-content';
import { StatDef, formatStat, runCounterAnimation } from '../../shared/animations/animations';

const STAT_DEFS: StatDef[] = [
  { prefix: '',  target: 2.5, decimals: 1, suffix: 'K+' },
  { prefix: '€', target: 50,  decimals: 0, suffix: 'K+' },
  { prefix: '',  target: 2,   decimals: 0, suffix: ''   },
  { prefix: '',  target: 100, decimals: 0, suffix: '%'  },
];

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterLink, ScrollRevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  private readonly languageService = inject(LanguageService);
  private readonly ngZone = inject(NgZone);
  readonly content = this.languageService.content;
  readonly selectedService = signal<ServiceItem | null>(null);
  readonly statsBarEl = viewChild<ElementRef>('statsBar');
  readonly heroBadgesEl = viewChild<ElementRef>('heroBadges');

  readonly statValues = STAT_DEFS.map(def => signal(formatStat(def, 0)));

  private observer!: IntersectionObserver;
  private cancelCounter: () => void = () => {};

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

  ngAfterViewInit(): void {
    const statsEl = this.statsBarEl()?.nativeElement;
    const heroEl = this.heroBadgesEl()?.nativeElement;
    const targets = [statsEl, heroEl].filter(Boolean as any) as Element[];
    if (targets.length === 0) return;

    this.observer = new IntersectionObserver((entries) => {
      const anyIntersecting = entries.some(e => e.isIntersecting);
      if (anyIntersecting) {
        targets.forEach(t => this.observer.unobserve(t));
        this.ngZone.runOutsideAngular(() => {
          this.cancelCounter = runCounterAnimation(
            STAT_DEFS,
            (i, formatted) => this.statValues[i].set(formatted)
          );
        });
      }
    }, { threshold: 0.3 });

    targets.forEach(t => this.observer.observe(t));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.cancelCounter();
  }

  openModal(service: ServiceItem): void {
    this.selectedService.set(service);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.selectedService.set(null);
    document.body.style.overflow = '';
  }
}
