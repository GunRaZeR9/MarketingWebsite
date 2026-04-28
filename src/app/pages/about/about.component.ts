import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';

import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  photo: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Razvan Puscas',
    role: 'Founder & Growth Strategist',
    bio: 'Leads strategy, paid media, and SEO — ensuring all parts of the system work together to drive real business growth.',
    photo: 'images/placeholders/studio-grid.svg',
  },
  {
    name: 'Andrei Puscas',
    role: 'Paid Media Specialist',
    bio: 'Manages and optimizes campaigns across Google and Meta, focusing on performance, scaling, and profitability.',
    photo: 'images/placeholders/studio-grid.svg',
  },
  {
    name: 'Paul Tatar',
    role: 'Web & Funnel Specialist',
    bio: 'Builds high-converting websites and landing pages designed to turn traffic into customers.',
    photo: 'images/placeholders/studio-grid.svg',
  },
  {
    name: 'Mihai Borsan',
    role: 'Creative Specialist',
    bio: 'Creates photo and video content designed to capture attention and increase conversions.',
    photo: 'images/placeholders/studio-grid.svg',
  },
  {
    name: 'Nico Puscas',
    role: 'Client Growth & Sales',
    bio: 'Works directly with clients to understand their goals and ensure the right strategy is implemented.',
    photo: 'images/placeholders/studio-grid.svg',
  },
];

@Component({
  selector: 'app-about-page',
  imports: [CommonModule, ScrollRevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;
  readonly teamMembers = TEAM_MEMBERS;

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
