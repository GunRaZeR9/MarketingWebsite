import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[scrollReveal]',
  standalone: true,
  host: { class: 'sr' }
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() delay = 0;

  private observer!: IntersectionObserver;

  constructor(private readonly el: ElementRef<HTMLElement>) {}

  ngOnInit(): void {
    if (this.delay) {
      this.el.nativeElement.style.setProperty('--sr-delay', `${this.delay}ms`);
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
