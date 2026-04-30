import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { Component, DestroyRef, effect, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { ScrollRevealDirective } from '../../shared/directives/scroll-reveal.directive';
import { LanguageService } from '../../core/services/language.service';
import { SeoService } from '../../core/services/seo.service';
import { environment } from '../../../environments/environment';

interface StoredLead {
  plan: string;
  budget: string;
  company: string;
  website: string;
  email: string;
  name: string;
  phone: string;
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
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  readonly content = this.languageService.content;
  submitted = false;
  sending = false;
  submitError: string | null = null;
  expandedFaqIndex: number | null = null;
  private readonly fb = inject(FormBuilder);

  readonly leadForm = this.fb.nonNullable.group({
    plan: ['', [Validators.required]],
    budget: ['', [Validators.required]],
    company: ['', [Validators.required]],
    website: [''],
    email: ['', [Validators.required, Validators.email]],
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[\d\s\-\+\(\)]+$/)]],
    message: ['', [Validators.required, Validators.minLength(50)]]
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

  async submit(): Promise<void> {
    this.submitted = false;
    this.submitError = null;
    if (this.leadForm.invalid) {
      this.leadForm.markAllAsTouched();
      return;
    }
    this.sending = true;
    const formValue = this.leadForm.getRawValue();
    const payload: StoredLead = { ...formValue, submittedAt: new Date().toISOString() };
    const existing = localStorage.getItem('marketingLeads');
    const leads: StoredLead[] = existing ? (JSON.parse(existing) as StoredLead[]) : [];
    leads.push(payload);
    localStorage.setItem('marketingLeads', JSON.stringify(leads));
    const sharedParams = {
      from_name: formValue.name,
      from_email: formValue.email,
      name: formValue.name,
      email: formValue.email,
      website: formValue.website || 'No website',
      business_name: formValue.company,
      plan: formValue.plan,
      budget: formValue.budget,
      growth_goals: formValue.message,
    };
    try {
      await Promise.all([
        emailjs.send(environment.emailjs.serviceId, environment.emailjs.notificationTemplateId, sharedParams),
        emailjs.send(environment.emailjs.serviceId, environment.emailjs.autoReplyTemplateId, {
          ...sharedParams,
          to_email: formValue.email,
        }),
      ]);
      this.leadForm.reset();
      void this.router.navigate(['/thank-you']);
    } catch {
      this.submitError = this.content().ui.leadErrorMessage;
    } finally {
      this.sending = false;
    }
  }

  toggleFaq(index: number): void {
    this.expandedFaqIndex = this.expandedFaqIndex === index ? null : index;
  }
}
