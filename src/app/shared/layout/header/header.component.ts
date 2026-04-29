import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);

  readonly navItems = [
    { key: 'home', route: '/' },
    { key: 'about', route: '/about' },
    { key: 'portfolio', route: '/portfolio' },
    { key: 'services', route: '/services' },
    { key: 'pricing', route: '/pricing' },
    { key: 'contact', route: '/contact' }
  ] as const;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 40);
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMobileMenu(): void {
    this.menuOpen.set(false);
  }
}
