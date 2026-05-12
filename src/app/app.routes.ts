import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GrowthResultsComponent } from './pages/growthResults/growthResults.component';
import { ServicesComponent } from './pages/services/services.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		data: { animIndex: 0 },
		component: HomeComponent
	},
	{
		path: 'about',
		data: { animIndex: 1 },
		component: AboutComponent
	},
	{
		path: 'growth-results',
		data: { animIndex: 2 },
		component: GrowthResultsComponent
	},
	{
		path: 'services',
		data: { animIndex: 3 },
		component: ServicesComponent
	},
	{
		path: 'pricing',
		data: { animIndex: 4 },
		component: PricingComponent
	},
	{
		path: 'contact',
		data: { animIndex: 5 },
		component: ContactComponent
	},
	{
		path: 'privacy-policy',
		data: { animIndex: 6 },
		loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent)
	},
	{
		path: 'cookie-policy',
		data: { animIndex: 6 },
		loadComponent: () => import('./pages/cookie-policy/cookie-policy.component').then((m) => m.CookiePolicyComponent)
	},
	{
		path: 'terms-conditions',
		data: { animIndex: 6 },
		loadComponent: () => import('./pages/terms-conditions/terms-conditions.component').then((m) => m.TermsConditionsComponent)
	},
	{
		path: 'thank-you',
		loadComponent: () => import('./pages/thank-you/thank-you.component').then((m) => m.ThankYouComponent)
	},
	{ path: '**', redirectTo: '' }
];
