import { Routes } from '@angular/router';

export const routes: Routes = [
	{
		path: 'home',
		data: { animIndex: 0 },
		loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
	},
	{
		path: 'about',
		data: { animIndex: 1 },
		loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent)
	},
	{
		path: 'services',
		data: { animIndex: 2 },
		loadComponent: () => import('./pages/services/services.component').then((m) => m.ServicesComponent)
	},
	{
		path: 'pricing',
		data: { animIndex: 3 },
		loadComponent: () => import('./pages/pricing/pricing.component').then((m) => m.PricingComponent)
	},
	{
		path: 'contact',
		data: { animIndex: 4 },
		loadComponent: () => import('./pages/contact/contact.component').then((m) => m.ContactComponent)
	},
	{
		path: 'portfolio',
		data: { animIndex: 5 },
		loadComponent: () => import('./pages/portfolio/portfolio.component').then((m) => m.PortfolioComponent)
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
	{ path: '', pathMatch: 'full', redirectTo: 'home' },
	{ path: '**', redirectTo: 'home' }
];
