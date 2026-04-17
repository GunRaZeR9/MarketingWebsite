import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

interface StoredLead {
  name: string;
  email: string;
  company: string;
  budget: string;
  message: string;
  submittedAt: string;
}

@Component({
  selector: 'app-contact-page',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly languageService = inject(LanguageService);
  readonly content = this.languageService.content;
  submitted = false;
  private readonly fb = inject(FormBuilder);

  readonly leadForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: ['', [Validators.required]],
    budget: ['', [Validators.required]],
    message: ['', [Validators.required, Validators.minLength(20)]]
  });

  constructor(private readonly seo: SeoService) {
    effect(() => {
      const seoConfig = this.content().seo.contact;

      this.seo.update({
        title: seoConfig.title,
        description: seoConfig.description,
        keywords: seoConfig.keywords
      });
    });
  }

  submit(): void {
    this.submitted = false;

    if (this.leadForm.invalid) {
      this.leadForm.markAllAsTouched();
      return;
    }

    const payload: StoredLead = {
      ...this.leadForm.getRawValue(),
      submittedAt: new Date().toISOString()
    };

    const existing = localStorage.getItem('marketingLeads');
    const leads: StoredLead[] = existing ? (JSON.parse(existing) as StoredLead[]) : [];
    leads.push(payload);
    localStorage.setItem('marketingLeads', JSON.stringify(leads));

    this.leadForm.reset();
    this.submitted = true;
  }
}
