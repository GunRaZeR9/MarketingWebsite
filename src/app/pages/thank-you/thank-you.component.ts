import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-thank-you',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './thank-you.component.html',
  styleUrl: './thank-you.component.scss'
})
export class ThankYouComponent implements OnInit {
  private readonly seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.update({
      title: 'Thank You | Your Message Was Received',
      description: 'Thank you for reaching out. We will review your request and get back to you within 24 hours.',
      keywords: [],
      noindex: true
    });
  }
}
