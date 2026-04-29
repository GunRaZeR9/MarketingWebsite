import { CommonModule } from '@angular/common';
import { Component, DestroyRef, effect, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';

interface StoredLead {
  plan: string;
  budget: string;
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
  submittedAt: string;
}

@Component({
  selector: 'app-contact-page',
  imports: [CommonModule, ReactiveFormsModule, ScrollRevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  private readonly languageService = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);
  readonly content = this.languageService.content;
  submitted = false;
  expandedFaqIndex: number | null = null;
  private readonly fb = inject(FormBuilder);

  readonly leadForm = this.fb.nonNullable.group({
    plan: ['', [Validators.required]],
    budget: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: ['', [Validators.required]],
    website: ['', [Validators.required]],
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

    this.leadForm.controls.plan.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((planName) => {
      const selectedPlan = this.content().pricingPlans.find((plan) => plan.name === planName);

      if (selectedPlan) {
        this.leadForm.controls.budget.setValue(selectedPlan.recommendedBudget);
      }
    });

    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const plan = params.get('plan');
      const budget = params.get('budget');

      if (plan) {
        this.leadForm.controls.plan.setValue(plan);
      }

      if (budget) {
        this.leadForm.controls.budget.setValue(budget);
      }
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

  toggleFaq(index: number): void {
    this.expandedFaqIndex = this.expandedFaqIndex === index ? null : index;
  }
}
