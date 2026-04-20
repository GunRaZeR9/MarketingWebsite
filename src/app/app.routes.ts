import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'home',
		loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
	},
	{
		path: 'about',
		loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent)
	},
	{
		path: 'services',
		loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent)
	},
	{
		path: 'pricing',
		loadComponent: () => import('./pages/pricing/pricing.component').then((m) => m.PricingComponent)
	},
	{
		path: 'contact',
		loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent)
	},
	{
		path: 'privacy-policy',
		loadComponent: () => import('./pages/privacy-policy/privacy-policy.component').then((m) => m.PrivacyPolicyComponent)
	},
	{
		path: 'cookie-policy',
		loadComponent: () => import('./pages/cookie-policy/cookie-policy.component').then((m) => m.CookiePolicyComponent)
	},
	{
		path: 'terms-conditions',
		loadComponent: () => import('./pages/terms-conditions/terms-conditions.component').then((m) => m.TermsConditionsComponent)
	},
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: '**', redirectTo: 'home' }
];
