# InsideGrowth Marketing Website — Project Handoff
**Updated:** 2026-05-20 | **Branch:** `dev` | **Live:** https://insidegrowth.ro

---

## ⚡ Current State (last session: 2026-05-20)

### Session Goal
Implement Feature A (Portfolio page + home preview + lightbox) and Feature B (Custom Website pricing card) using a 4-agent workflow: Design Lead → Frontend Dev 1 + 2 (parallel) → QA.

### What Was Built
| Feature | Status |
|---|---|
| `/portfolio` route (lazy, `animIndex: 7`) | ✅ Done |
| "Portfolio" nav item (between Pricing and Contact) | ✅ Done |
| `WebsiteProject` interface + `websitePortfolio` in all 3 lang files | ✅ Done |
| Home: Portfolio preview section (2 cards + CTA) after Results | ✅ Done |
| Portfolio page: alternating image/text layout per project | ✅ Done |
| Inline lightbox: ESC / click-outside / arrow keys / counter | ✅ Done |
| Custom Website pricing card (bespoke gradient border, `.button--accent` CTA) | ✅ Done |
| CTA prefill: `/contact?plan=Custom+Website&budget=10000-plus` | ✅ Done |
| All 3 language files (EN / RO / HU) fully updated | ✅ Done |
| Production build: `exit 0`, zero Angular errors | ✅ Clean |
| Design audit written to `docs/design-audit.md` | ✅ Done |
| QA report written to `docs/qa-report-2026-05-20.md` | ✅ Done |

### Build Status
```
npm run build  →  exit 0
Lazy chunk: portfolio-component  11.42 kB / 3.06 kB (gzip)
Pre-existing warnings (NOT new): initial bundle 655 kB vs 500 kB threshold; home.component.scss 8.24 kB vs 8 kB threshold
```

### ⚡ Exact Next Step
Replace image placeholders with real project screenshots:
```
Search for: [PROJECT_IMAGE]     → main project hero image
Search for: [GALLERY_IMAGE_1]   → first gallery/lightbox image
Search for: [GALLERY_IMAGE_2]   → second gallery/lightbox image
```
Files: `src/app/core/data/site-content-en.ts`, `site-content-ro.ts`, `site-content-hu.ts`
(all 3 files have identical placeholder values — update all 3)

Place real images in: `public/images/portfolio/`

### Files Touched This Session
```
src/app/core/models/site-content.ts           ← WebsiteProject interface, new UI keys, SiteSeo.portfolio
src/app/core/data/site-content-en.ts          ← nav.portfolio, pricingBespoke* keys, websitePortfolio, seo.portfolio
src/app/core/data/site-content-ro.ts          ← same, Romanian translations
src/app/core/data/site-content-hu.ts          ← same, Hungarian translations
src/app/app.routes.ts                         ← /portfolio lazy route animIndex 7
src/app/shared/layout/header/header.component.ts  ← portfolio nav item
src/app/pages/portfolio/portfolio.component.ts    ← NEW: standalone, lightbox signals, HostListener
src/app/pages/portfolio/portfolio.component.html  ← NEW: alternating layout, inline lightbox
src/app/pages/portfolio/portfolio.component.scss  ← NEW: project entries, lightbox, tags
src/app/pages/home/home.component.html        ← portfolio preview section inserted
src/app/pages/home/home.component.scss        ← portfolio card + tag styles
src/app/pages/pricing/pricing.component.html  ← bespoke card after *ngFor
src/app/pages/pricing/pricing.component.scss  ← .plan-card--bespoke gradient border
docs/design-audit.md                          ← NEW: design system audit
docs/qa-report-2026-05-20.md                  ← NEW: QA results
```

### Known Limitations
- Portfolio `h1` is hardcoded as "Portfolio" — optionally add a `portfolioHeroTitle` content key to make it translatable
- Both projects use `[PROJECT_IMAGE]` / `[GALLERY_IMAGE_N]` placeholder strings until real images are placed
- `home.component.scss` is 239 bytes over the 8 kB warning threshold (cosmetic, not an error)

---

## 1. Project Overview

Presentation / lead-generation website for **InsideGrowth** (legal: SELLMOTION S.R.L., Romania). Fully static Angular SPA deployed to Hostico via GitHub Actions.

---

## 2. Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Angular (standalone components) | 21.x |
| Language | TypeScript | ~5.9 |
| Styles | SCSS (per-component + global `src/styles.scss`) | — |
| Build system | Nx | 22.6.5 |
| Build executor | `@angular/build:application` (esbuild-based) | 21.2.x |
| Email delivery | EmailJS (`@emailjs/browser`) | 4.x |
| Test runner | Vitest | 4.x |
| Node / npm | Node 20+, npm 10.9.2 | — |

---

## 3. Repository Layout

```
MarketingWebsite/
├── src/app/
│   ├── core/
│   │   ├── data/
│   │   │   ├── site-content-en.ts    ← EN content + portfolio data
│   │   │   ├── site-content-ro.ts    ← RO content
│   │   │   └── site-content-hu.ts    ← HU content (hidden from dropdown)
│   │   ├── models/site-content.ts    ← all TypeScript interfaces (incl. WebsiteProject)
│   │   └── services/                 ← language, seo, schema, scroll
│   ├── pages/
│   │   ├── home/                     ← + portfolio preview section
│   │   ├── portfolio/                ← NEW: /portfolio page + lightbox
│   │   ├── pricing/                  ← + Custom Website bespoke card
│   │   ├── contact/                  ← reads ?plan= and ?budget= query params
│   │   └── [about, services, growth-results, legal, thank-you]
│   └── shared/
│       ├── layout/header/            ← + portfolio nav item
│       └── directives/scroll-reveal.directive.ts
├── public/
│   └── images/portfolio/             ← ⬅️ PUT PROJECT IMAGES HERE
├── docs/
│   ├── design-audit.md               ← design system spec (generated 2026-05-20)
│   └── qa-report-2026-05-20.md       ← QA results
└── handoff.md                        ← this file
```

---

## 4. Pages & Routes

| Route | Component | Load | `animIndex` |
|---|---|---|---|
| `/` | `HomeComponent` | Eager | 0 |
| `/about` | `AboutComponent` | Eager | 1 |
| `/growth-results` | `GrowthResultsComponent` | Eager | 2 |
| `/services` | `ServicesComponent` | Eager | 3 |
| `/pricing` | `PricingComponent` | Eager | 4 |
| `/contact` | `ContactComponent` | Eager | 5 |
| `/portfolio` | `PortfolioComponent` | **Lazy** | 7 ← NEW |
| `/privacy-policy` | `PrivacyPolicyComponent` | **Lazy** | 6 |
| `/cookie-policy` | `CookiePolicyComponent` | **Lazy** | 6 |
| `/terms-conditions` | `TermsConditionsComponent` | **Lazy** | 6 |
| `/thank-you` | `ThankYouComponent` | **Lazy** | — |

---

## 5. New: Portfolio Data Model

```typescript
interface WebsiteProject {
  id: string;                  // used for anchor links (#insidegrowth)
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];      // tech stack tag pills
  image: string;               // main image (currently [PROJECT_IMAGE])
  galleryImages?: string[];    // lightbox images (currently [GALLERY_IMAGE_N])
  liveUrl?: string;
  imagePosition?: 'left' | 'right';
  metrics?: string[];
}
```

Data lives in `SiteContent.websitePortfolio` in each language file.

---

## 6. New: Custom Website Pricing Card

- Hardcoded card at end of `.plan-grid` in `pricing.component.html`
- Uses `SiteUiText.pricingBespoke*` keys (defined in all 3 lang files)
- CTA: `routerLink="/contact"` with `[queryParams]="{ plan: 'Custom Website', budget: '10000-plus' }"`
- Contact form reads these params on mount via `ActivatedRoute.queryParamMap`

---

## 7. Contact Form & Lead Pipeline

The contact form (`/contact`) stores leads in `localStorage` and fires two EmailJS emails:
- Notification to agency (`template_te0kieq`)
- Auto-reply to lead (`template_c41z93a`)

**EmailJS credentials** (public, safe to ship client-side): `src/environments/environment.ts`

---

## 8. Build & Deployment

```bash
npm install
npm run start          # dev server → http://localhost:4200
npm run build          # production → dist/marketing-website/browser/
npm run build:ghpages  # GitHub Pages build (baseHref=/MarketingWebsite/)
npm run deploy:ghpages
npm test
npm run lint
```

CI/CD: GitHub Actions on `dev` branch → FTP upload to Hostico.
Credentials: GitHub repo Secrets → Settings → Actions.

---

## 9. Self-Contained Resume Prompt

```
Project: InsideGrowth Marketing Website (Angular 21 SPA)
Repo: d:\Repos\MarketingWebsite  Branch: dev
Last session: 2026-05-20 — built /portfolio page + Custom Website pricing card.
Build: clean (exit 0).

IMMEDIATE TASK: Replace image placeholders in all 3 site-content-*.ts files.
Search for [PROJECT_IMAGE] and [GALLERY_IMAGE_N].
Place images at: public/images/portfolio/
Then run: npm run build

See handoff.md §3 for full file map, §5 for WebsiteProject interface, §6 for pricing card details.
```
