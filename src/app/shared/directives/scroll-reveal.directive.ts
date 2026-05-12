import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
  host: { class: 'sr' }
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() delay = 0;
  @Input() noReveal = false;

  private observer!: IntersectionObserver;
  private prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if (this.noReveal) {
      this.el.nativeElement.classList.add('visible');
      return;
    }

    if (this.delay) {
      this.el.nativeElement.style.setProperty('--sr-delay', `${this.delay}ms`);
    }

    if (this.prefersReducedMotion) {
      this.el.nativeElement.classList.add('visible');
      return;
    }

    // Elements already in the viewport (above-fold) must be visible immediately.
    // Waiting for the IntersectionObserver delays LCP because the callback can
    // be blocked for several seconds by third-party JS long tasks.
    const rect = this.el.nativeElement.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      this.el.nativeElement.style.transition = 'none';
      this.el.nativeElement.classList.add('visible');
      // Restore transition after the paint so below-fold siblings still animate
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.el.nativeElement.style.transition = '';
        });
      });
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          this.observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
