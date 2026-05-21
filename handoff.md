# InsideGrowth Marketing Website — Project Handoff
**Updated:** 2026-05-21 | **Branch:** `dev` | **Live:** https://insidegrowth.ro

---

## ⚡ Current State (last session: 2026-05-21)

### Session Goal
Romanian translation audit & fix for Portfolio page.

### What Was Done This Session
| Task | Status |
|---|---|
| Portfolio RO audit: identified 3 categories of missing translations | ✅ Done |
| **Hardcoded "Live Site" button** → moved to i18n (`portfolioLiveSite` key) | ✅ Done |
| `portfolioLiveSite` added to `SiteUiText` interface | ✅ Done |
| `portfolioLiveSite` added to EN file (`'Live Site'`), RO file (`'Site Live'`), HU file (`'Élő Oldal'`) | ✅ Done |
| Template updated: `{{ content().ui.portfolioLiveSite }}` replaces hardcoded text | ✅ Done |
| InsideGrowth websitePortfolio entry in RO file — title/subtitle/description translated | ✅ Done |
| ViiLa Munte websitePortfolio entry in RO file — title/subtitle/description translated | ✅ Done |
| Telefoane Mureș entry was already in Romanian (previous session) | ✅ Already done |
| RO file: image placeholders already replaced (`telefoane-mures.webp`) | ✅ Already done |
| Production build: `exit 0`, zero Angular errors | ✅ Clean |

### Build Status
```
npx nx build --skip-nx-cache  →  exit 0
Lazy chunk: portfolio-component  9.94 kB / 2.90 kB (gzip)
Pre-existing warnings (NOT new): initial bundle 663.14 kB vs 500 kB threshold; home.component.scss 8.24 kB vs 8 kB threshold
```

### ⚡ Exact Next Step
Portfolio page is fully translated to Romanian. Remaining tasks:
1. Replace Telefoane Mureș image placeholders in **EN and HU** content files (RO is already done):
   ```
   Search for: [TELEFOANE_MURES_MAIN]       → card thumbnail image
   Search for: [TELEFOANE_MURES_GALLERY_1]  → fullscreen image 1
   Search for: [TELEFOANE_MURES_GALLERY_2]  → fullscreen image 2
   Search for: [TELEFOANE_MURES_GALLERY_3]  → fullscreen image 3
   Search for: [TELEFOANE_MURES_GALLERY_4]  → fullscreen image 4
   ```
   Files: `src/app/core/data/site-content-en.ts`, `site-content-hu.ts`  
   (RO file already has `images/portfolio/telefoane-mures.webp`)

2. Verify `public/images/portfolio/telefoane-mures.webp` (or `.png`) exists and displays correctly.

---

## Root Cause: Portfolio Hero Alignment Bug (FIXED)

**Bug**: Hero text started at `x=0` while project entries (wrapped in `content-shell`) started at `x=4vw` — visible offset in the rendered page.

**Root cause chain**:
1. Global `.content-shell { width: min(1280px, 92vw); margin: 0 auto; }` — centers 92vw block
2. Original hero had `content-shell` + component `.page-hero { max-width: 72ch }` → hero narrowed to 72ch and centered at a DIFFERENT position than 92vw entries
3. First fix attempt removed `content-shell` entirely → hero went to x=0, entries stayed at x=4vw → still misaligned

**Correct fix applied**:
- `content-shell` kept on hero section (`<section class="page-hero hero-left content-shell">`)
- `max-width: 72ch` **removed** from `.page-hero` in component SCSS → hero is now 92vw wide (same as entries)
- `margin: 0` override **removed** from `.page-hero.hero-left` → global `margin: 0 auto` from content-shell applies → hero and entries share identical left edge ✅

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
│   │   ├── models/site-content.ts    ← all TypeScript interfaces (incl. WebsiteProject + badge)
│   │   └── services/                 ← language, seo, schema, scroll
│   ├── pages/
│   │   ├── home/                     ← + portfolio preview section
│   │   ├── portfolio/                ← /portfolio page + fullscreen viewer
│   │   ├── pricing/                  ← + Custom Website bespoke card
│   │   ├── contact/                  ← reads ?plan= and ?budget= query params
│   │   └── [about, services, growth-results, legal, thank-you]
│   └── shared/
│       ├── layout/header/            ← + portfolio nav item
│       └── directives/scroll-reveal.directive.ts
├── public/
│   └── images/portfolio/             ← ⬅️ PUT PROJECT IMAGES HERE
│       ├── inside-growth.webp        ← ✅ real image
│       └── viilamunte.webp           ← ✅ real image
│       (telefoane-mures-*.webp)      ← ⬅️ STILL NEEDED
├── docs/
│   ├── design-audit.md
│   └── qa-report-2026-05-20.md
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
| `/portfolio` | `PortfolioComponent` | **Lazy** | 7 |
| `/privacy-policy` | `PrivacyPolicyComponent` | **Lazy** | 6 |
| `/cookie-policy` | `CookiePolicyComponent` | **Lazy** | 6 |
| `/terms-conditions` | `TermsConditionsComponent` | **Lazy** | 6 |
| `/thank-you` | `ThankYouComponent` | **Lazy** | — |

---

## 5. Portfolio Data Model

```typescript
interface WebsiteProject {
  id: string;                   // used for anchor links (#telefoane-mures)
  title: string;
  subtitle?: string;
  description: string;
  technologies: string[];       // tech stack tag pills (gold)
  image: string;                // card thumbnail
  galleryImages?: string[];     // fullscreen viewer images (click on card image)
  liveUrl?: string;             // "Live Site" button
  imagePosition?: 'left' | 'right';
  metrics?: string[];           // metric pill tags (blue) — [0] used as eyebrow
  badge?: string;               // NEW: e.g. 'Featured / External' — blue pill above eyebrow
}
```

Data lives in `SiteContent.websitePortfolio` in each language file.

### Current Portfolio Entries (websitePortfolio order)
| # | id | imagePosition | Badge | Live Images |
|---|---|---|---|---|
| 1 | `insidegrowth` | right | — | ✅ `images/portfolio/inside-growth.webp` |
| 2 | `viilamunte` | left | — | ✅ `images/portfolio/viilamunte.webp` |
| 3 | `telefoane-mures` | right | `Featured / External` | ❌ placeholder |

### Hero Alignment Rule (IMPORTANT)
The portfolio page hero uses `class="page-hero hero-left content-shell"`.
- **Do NOT** add `max-width` to `.page-hero` in the portfolio SCSS — it breaks alignment
- **Do NOT** add `margin: 0` to `.page-hero.hero-left` — it overrides content-shell centering
- Both the hero and the project entries must share the same `content-shell` → `margin: 0 auto` → identical left edge

---

## 6. Portfolio Component — Fullscreen Viewer

```typescript
// Component signals
fullscreenImages = signal<string[]>([]);   // array of image URLs
fullscreenIdx    = signal(0);             // current index
fullscreenOpen   = signal(false);
fullscreenSrc    = computed(() => fullscreenImages()[fullscreenIdx()] ?? '');

// Opens viewer for the clicked image (always index 0 for single-image cards)
openGallery(images: string[], startIdx = 0): void { ... }
closeFullscreen(): void { ... }

// ESC key closes the overlay (HostListener)
```

No left/right navigation arrows — overlay is simple: close button + image only.
Clicking the card's thumbnail opens `galleryImages[0]` (or `image` as fallback).

---

## 7. Custom Website Pricing Card

- Hardcoded card at end of `.plan-grid` in `pricing.component.html`
- Uses `SiteUiText.pricingBespoke*` keys (defined in all 3 lang files)
- CTA: `routerLink="/contact"` with `[queryParams]="{ plan: 'Custom Website', budget: '10000-plus' }"`

---

## 8. Contact Form & Lead Pipeline

The contact form (`/contact`) stores leads in `localStorage` and fires two EmailJS emails:
- Notification to agency (`template_te0kieq`)
- Auto-reply to lead (`template_c41z93a`)

**EmailJS credentials** (public, safe to ship client-side): `src/environments/environment.ts`

---

## 9. Build & Deployment

```bash
npm install
npm run start          # dev server → http://localhost:4200
npx nx build           # production → dist/marketing-website/browser/
npm run build:ghpages  # GitHub Pages build (baseHref=/MarketingWebsite/)
npm test
npm run lint
```

> ⚠️ `npm run build` fails after Angular compilation because `scripts/stamp-build.mjs` is missing (pre-existing issue, not introduced this session). Use `npx nx build` directly to verify Angular compilation.

CI/CD: GitHub Actions on `dev` branch → FTP upload to Hostico.
Credentials: GitHub repo Secrets → Settings → Actions.

---

## 10. Files Touched This Session

```
src/app/core/models/site-content.ts              ← added badge?: string to WebsiteProject
src/app/core/data/site-content-en.ts             ← Telefoane Mureș entry (English)
src/app/core/data/site-content-ro.ts             ← Telefoane Mureș entry (Romanian)
src/app/core/data/site-content-hu.ts             ← Telefoane Mureș entry (English)
src/app/pages/portfolio/portfolio.component.ts   ← computed fullscreenSrc, openGallery, prevImage, nextImage
src/app/pages/portfolio/portfolio.component.html ← hero fix, badge, removed view gallery btn, removed nav arrows
src/app/pages/portfolio/portfolio.component.scss ← .project-badge, removed nav/counter styles, removed max-width override
```

---

## 11. Self-Contained Resume Prompt

```
Project: InsideGrowth Marketing Website (Angular 21 SPA)
Repo: d:\Repos\MarketingWebsite  Branch: dev
Last session: 2026-05-21 — fixed portfolio hero alignment + added Telefoane Mureș entry.
Build: clean (npx nx build → exit 0).

IMMEDIATE TASK: Replace Telefoane Mureș image placeholders in all 3 site-content-*.ts files.
Search for [TELEFOANE_MURES_MAIN] and [TELEFOANE_MURES_GALLERY_1..4].
Place real WebP screenshots at: public/images/portfolio/
Then run: npx nx build

See handoff.md §5 for WebsiteProject interface + badge field.
See handoff.md §5 "Hero Alignment Rule" — do not break it.
```
