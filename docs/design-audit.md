# InsideGrowth Marketing Website — Design Audit

**Audited:** 2026-05-20  
**Branch:** dev  
**Scope:** Global design system (`styles.scss`) + page-level component styles for Home, Pricing, Contact, and Header. Specifications for Feature A (Portfolio) and Feature B (Custom Website Pricing Card) included.

---

## Table of Contents

1. [Color Tokens](#1-color-tokens)
2. [Typography Scale](#2-typography-scale)
3. [Spacing & Layout](#3-spacing--layout)
4. [Border Radius Scale](#4-border-radius-scale)
5. [Component Patterns](#5-component-patterns)
6. [Animation & Motion](#6-animation--motion)
7. [Nav Integration Pattern](#7-nav-integration-pattern)
8. [New Feature Design Specs](#8-new-feature-design-specs)
9. [QA Checklist](#9-qa-checklist)

---

## 1. Color Tokens

All tokens are defined as CSS custom properties on `:root` in `src/styles.scss`. Use these tokens everywhere — never hardcode hex values in component styles.

| Token | Value | Usage |
|---|---|---|
| `--bg` | `#06080d` | Page background. Applied to `body`. |
| `--surface` | `#0d1219` | Primary surface for opaque containers (e.g., `.credentials-band`, `.work-step`, modal card). |
| `--surface-elevated` | `#111c28` | Elevated cards, stat items, form inputs — slightly lighter than `--surface`. |
| `--surface-glass` | `rgba(13, 18, 25, 0.75)` | Glassmorphism panels (`.panel`). Semi-transparent, used with `backdrop-filter: blur(16px)`. |
| `--text` | `#eef2f8` | Primary text; headings, labels, nav links on hover/active, form labels. |
| `--text-dim` | `#7a8fa8` | Body text, descriptions, secondary copy, `p` elements. |
| `--text-muted` | `#4a5a6e` | Tertiary text — stat labels, price period, badge labels. |
| `--accent` | `#e8c14c` | Gold accent. Active nav, CTAs, eyebrows, section dividers, icon color, stat numbers, plan prices. |
| `--accent-warm` | `#f5a623` | Warm orange-gold. Gradient endpoint for `.button--accent`, `.featured-badge`, `.eyebrow::before`. |
| `--accent-glow` | `rgba(232, 193, 76, 0.18)` | Subtle ambient glow. Used for glassmorphism overlays and active-state shadows. |
| `--blue` | `#5b9cf6` | Blue accent. Ambient background mesh gradient only (not used in interactive elements currently). |
| `--line` | `#1a2a3a` | Default border color for cards, panels, inputs, table rows. |
| `--line-bright` | `#2a3f58` | Brighter border for interactive hover borders, `.button` ghost border, `.mini-cta-strip`. |
| `--success` | `#34d399` | Success state. Contact form success message, comparison table check marks. |
| `--error` | `#f87171` | Error / validation state. Form validation messages (`<small>`). |

### Semantic Notes

- The gold gradient sequence for interactive elements is always `var(--accent) → var(--accent-warm)` at 135deg.
- Background mesh uses `--accent-glow` (yellow, top-left) and `rgba(91, 156, 246, 0.06)` (blue, bottom-right).
- Never use raw `rgba(232, 193, 76, ...)` without checking if `--accent-glow` suffices.

---

## 2. Typography Scale

### Font Families

| Role | Stack |
|---|---|
| Body / UI | `'Space Grotesk', 'Segoe UI', sans-serif` |
| Headings / Brand | `'Sora', 'Trebuchet MS', sans-serif` |

Both are loaded via Google Fonts (or equivalent). `Space Grotesk` is used for body text, buttons, eyebrows, nav links, and labels. `Sora` is used for all `h1`–`h4`, stat numbers, price amounts, step numbers, badge numbers, and the brand name in the header.

### Heading Scale

| Tag | `font-size` (clamp) | `font-weight` | `line-height` | `letter-spacing` |
|---|---|---|---|---|
| `h1` | `clamp(2.5rem, 5.5vw, 4.4rem)` | 800 | 1.1 | -0.025em |
| `h2` | `clamp(1.7rem, 3.4vw, 2.8rem)` | 700 | 1.1 | -0.025em |
| `h3` | `clamp(1.05rem, 1.8vw, 1.3rem)` | 600 | 1.1 | -0.025em |
| `h4` | inherited from h-group base | 700 | 1.1 | -0.025em |

All headings: `font-family: 'Sora', 'Trebuchet MS', sans-serif; color: var(--text); margin: 0 0 0.8rem;`

### Body & Supporting Scale

| Element / Class | `font-size` | `font-weight` | `line-height` | `color` | Notes |
|---|---|---|---|---|---|
| `p` | `clamp(0.95rem, 1.5vw, 1.05rem)` | 400 | 1.7 | `var(--text-dim)` | `margin: 0 0 1rem` |
| `li` | inherited from `p` context | — | 1.6 | `var(--text-dim)` | `margin-bottom: 0.6rem` |
| `.eyebrow` | `0.7rem` | 700 | — | `var(--accent)` | `letter-spacing: 0.22em`, uppercase, Space Grotesk |
| `.stat-number` | `clamp(1.9rem, 3.2vw, 2.8rem)` | 800 | 1 | `var(--accent)` | Sora, `letter-spacing: -0.04em`, tabular-nums |
| `.stat-label` | `0.72rem` | 600 | — | `var(--text-muted)` | `letter-spacing: 0.12em`, uppercase |
| `.price-amount` | `clamp(2rem, 3.5vw, 2.8rem)` | 800 | 1 | `var(--accent)` | Sora, `letter-spacing: -0.04em` |
| `.price-period` | `0.88rem` | 400 | — | `var(--text-muted)` | |
| `.button` | `0.9rem` | 700 | — | `var(--text)` | Space Grotesk, `letter-spacing: 0.02em` |
| `.featured-badge` | `0.7rem` | 700 | — | `#08100d` | `letter-spacing: 0.12em`, uppercase |
| `.spotlight-index` | `0.72rem` | 700 | — | `var(--accent)` | `letter-spacing: 0.12em`, uppercase |
| `nav a` | `0.9rem` | 500 | — | `var(--text-dim)` | → active: `var(--accent)` |
| `label` (form) | `0.88rem` | 600 | — | `var(--text)` | `letter-spacing: 0.02em` |
| `input / textarea` | `0.92rem` | 400 | — | `var(--text)` | Space Grotesk via `font: inherit` |
| `.brand-name` | `clamp(1.10rem, 3vw, 2.1rem)` | 900 | 1.2 | `var(--text)` | Sora |
| `.hero-lead` | `clamp(1rem, 1.6vw, 1.15rem)` | 400 | — | `var(--text-dim)` | `max-width: 52ch` |
| `.legal-section h2` | `1.15rem` | 700 | — | `var(--text)` | |
| `.legal-section p` | `0.95rem` | 400 | 1.75 | `var(--text-dim)` | |

### Link Default

`a { color: var(--accent); }` — inherited from global. Navigation links override with explicit weight/color.

---

## 3. Spacing & Layout

### Section & Panel Spacing Tokens

| Token | Value | Usage |
|---|---|---|
| `--section-gap` | `clamp(3.5rem, 7vw, 6rem)` | `gap` on `.home-page`, `.pricing-page`, `.contact-page` flex columns (between page sections). |
| `--panel-pad` | `clamp(1.75rem, 3.5vw, 2.75rem)` | Internal padding on `.panel`. |

### Content Shell

```scss
.content-shell {
  width: min(1160px, 92vw);
  margin: 0 auto;
}
```

Max content width is **1160px**. At viewports narrower than ~1260px the shell reduces to 92% of viewport width. All page sections must be wrapped in `.content-shell`.

### Page-Level Padding

All major page components share this pattern:

```scss
.{page}-page {
  padding-top: clamp(2.5rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  gap: var(--section-gap);
}
```

### Grid Systems

| Class | Columns | Gap | Breakpoints |
|---|---|---|---|
| `.grid-2` | `repeat(auto-fit, minmax(280px, 1fr))` | `1.25rem` | Auto-wraps; min card width 280px |
| `.grid-2-fixed` | `repeat(2, minmax(280px, 1fr))` | `1.25rem` | Collapses to `1fr` at ≤640px |
| `.grid-3` | `repeat(3, minmax(240px, 1fr))` | `1.25rem` | 2-col at ≤1024px; 1-col at ≤600px |

### Plan Grid (Pricing)

```scss
.plan-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding-top: 1.5rem;
}
```

### Contact Layout

```scss
.contact-layout {
  grid-template-columns: 1.4fr 1fr;   /* form : sidebar */
  gap: 1.5rem;
}
/* @media (max-width: 820px): collapses to 1fr */
```

### Results Section Layout

```scss
.results-section {
  grid-template-columns: minmax(0, 1fr) minmax(320px, 0.95fr);
  gap: clamp(1.5rem, 3vw, 3rem);
}
/* @media (max-width: 900px): collapses to 1fr */
```

### Stagger Delays (Grid Children)

Grid children with `.sr` get automatic stagger via CSS:
- 2nd child: `--sr-delay: 80ms`
- 3rd child: `--sr-delay: 160ms`
- 4th child: `--sr-delay: 240ms`
- 5th child: `--sr-delay: 320ms`
- 6th child: `--sr-delay: 400ms`

---

## 4. Border Radius Scale

| Token | Value | Use Cases |
|---|---|---|
| `--radius-sm` | `10px` | Form inputs (`input`, `select`, `textarea`), cookie consent buttons, small utility containers. |
| `--radius` | `16px` | FAQ items, table wrapper, modal card inner radius, `.custom-grid article`, focus ring base. |
| `--radius-lg` | `24px` | `.card`, `.image-shell`, stats-bar, service modal card outer shell. |
| `--radius-xl` | `32px` | `.panel` — the glassmorphism container. |

Additional non-token radius values observed in components:

| Value | Location | Purpose |
|---|---|---|
| `999px` | `.button`, `.button--accent`, `.featured-badge`, `.spotlight-index`, nav links, `.cta` header button, language picker select | Pill / fully-rounded shapes |
| `14px` | `.credentials-band`, `.work-step`, `.hero-badge` | Mid-level card that sits between `--radius-sm` and `--radius` |
| `12px` | `.card-icon` | Icon container within a card |
| `50%` | `.modal-close`, `.social-icon` | Circle buttons |
| `100px` | `.credentials-badge` | Pill badge (credential tag) |

---

## 5. Component Patterns

### 5.1 `.panel` (Glassmorphism Container)

```scss
padding: var(--panel-pad);                          /* clamp(1.75rem, 3.5vw, 2.75rem) */
border-radius: var(--radius-xl);                    /* 32px */
border: 1px solid var(--line);                      /* #1a2a3a */
background: var(--surface-glass);                   /* rgba(13, 18, 25, 0.75) */
backdrop-filter: blur(16px);
-webkit-backdrop-filter: blur(16px);
position: relative;
overflow: hidden;
```

**Pseudo `::before` overlay:**  
`background: linear-gradient(135deg, rgba(232, 193, 76, 0.06) 0%, transparent 40%, rgba(91, 156, 246, 0.04) 100%)`  
This is a decorative shimmer that adds warmth without overwhelming the glass effect.

Use `.panel` for full-width or prominent section containers (comparison panel, FAQ panel, custom services panel, portfolio section wrapper).

---

### 5.2 `.card` (Elevated Hover Card)

```scss
padding: clamp(1.25rem, 2.5vw, 1.75rem);
border-radius: var(--radius-lg);                    /* 24px */
border: 1px solid var(--line);
background: color-mix(in srgb, var(--surface-elevated) 80%, transparent);
transition:
  transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
  border-color 0.3s ease,
  box-shadow 0.3s ease;
```

**Hover state:**

```scss
transform: translateY(-5px);
border-color: rgba(232, 193, 76, 0.22);
box-shadow:
  0 20px 48px rgba(0, 0, 0, 0.42),
  0 0 0 1px rgba(232, 193, 76, 0.1),
  inset 0 1px 0 rgba(232, 193, 76, 0.07);
```

**`::before` (top gold line, appears on hover):**  
`background: linear-gradient(90deg, transparent, rgba(232, 193, 76, 0.5), transparent); height: 1px;`

**`::after` (radial glow, appears on hover):**  
`background: radial-gradient(ellipse at 50% 0%, rgba(232, 193, 76, 0.08) 0%, transparent 65%);`

---

### 5.3 `.card-icon`

```scss
width: 44px;
height: 44px;
border-radius: 12px;
background: linear-gradient(135deg, rgba(232, 193, 76, 0.15), rgba(232, 193, 76, 0.05));
border: 1px solid rgba(232, 193, 76, 0.2);
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 1rem;
font-size: 1.1rem;
```

Text/icon inside is colored `var(--accent)`.

---

### 5.4 `.button` (Ghost Pill Button)

```scss
border-radius: 999px;
border: 1px solid var(--line-bright);               /* #2a3f58 */
color: var(--text);
font-weight: 700;
font-size: 0.9rem;
padding: 0.78rem 1.6rem;
display: inline-flex;
align-items: center;
gap: 0.5rem;
font-family: 'Space Grotesk', sans-serif;
letter-spacing: 0.02em;
transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, color 0.25s ease;
```

**Hover:** `translateY(-2px)`, `border-color: var(--accent)`, `color: var(--accent)`, shadow `0 10px 28px rgba(0,0,0,0.35)`  
**Active:** `translateY(0) scale(0.97)`, `transition-duration: 0.1s`  
**Size modifier `.button--sm`:** `padding: 0.55rem 1.25rem; font-size: 0.88rem`  
**Arrow child `.arrow`:** `display: inline-block; transition: transform 0.25s ease;` — shifts `translateX(4px)` on parent hover.

---

### 5.5 `.button--accent` (Gold Gradient CTA)

Extends `.button`. Override values:

```scss
background: linear-gradient(135deg, var(--accent) 0%, var(--accent-warm) 100%);
border-color: transparent;
color: #08100d;                                     /* near-black for contrast on gold */
box-shadow: 0 6px 24px rgba(232, 193, 76, 0.28);
```

**Hover:** `translateY(-3px)`, `box-shadow: 0 14px 40px rgba(232, 193, 76, 0.42)`, `color: #08100d`  
**Active:** `translateY(0) scale(0.97)`, `box-shadow: 0 4px 14px rgba(232, 193, 76, 0.3)`

The header's `.cta` link uses identical values to `.button--accent` but is declared locally in `header.component.scss`.

---

### 5.6 `.eyebrow`

```scss
display: inline-flex;
align-items: center;
gap: 0.6rem;
margin-bottom: 0.8rem;
font-size: 0.7rem;
font-weight: 700;
letter-spacing: 0.22em;
text-transform: uppercase;
color: var(--accent);
font-family: 'Space Grotesk', sans-serif;
```

**`::before` (gold accent line):**

```scss
content: '';
display: block;
width: 24px;
height: 1.5px;
background: linear-gradient(90deg, var(--accent), var(--accent-warm));
border-radius: 99px;
flex-shrink: 0;
```

Usage pattern in templates: `<span class="eyebrow">Label text</span>` immediately before an `h1` or `h2`. Also used as a scroll-reveal element: `<span class="eyebrow sr">...</span>`.

---

### 5.7 `.section-divider`

```scss
width: 48px;
height: 3px;
background: linear-gradient(90deg, var(--accent), var(--accent-warm));
border-radius: 99px;
margin: 0.9rem 0 1.6rem;
```

Always placed after an `h2` or section subtitle, before body content. Also supports scroll-reveal via `.section-divider.sr` which animates `scaleX(0) → scaleX(1)` from `transform-origin: left center`.

---

### 5.8 `.image-shell`

```scss
position: relative;
overflow: hidden;
border-radius: var(--radius-lg);                    /* 24px */
border: 1px solid var(--line);
box-shadow: 0 28px 70px rgba(0, 0, 0, 0.4);
```

**`::after` overlay:**

```scss
background: linear-gradient(
  135deg,
  rgba(232, 193, 76, 0.1) 0%,
  transparent 38%,
  rgba(91, 156, 246, 0.08) 100%
);
```

Child `img`: `display: block; width: 100%; height: auto;`

---

### 5.9 `.stats-bar` / `.stat-item` / `.stat-number` / `.stat-label`

```scss
/* Container */
.stats-bar {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1px;
  background: var(--line);                          /* fills the 1px gaps as dividers */
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
}

/* Cell */
.stat-item {
  background: color-mix(in srgb, var(--surface-elevated) 90%, transparent);
  padding: 1.6rem 1.2rem;
  text-align: center;
}

/* Number */
.stat-number {
  display: block;
  font-size: clamp(1.9rem, 3.2vw, 2.8rem);
  font-weight: 800;
  font-family: 'Sora', sans-serif;
  color: var(--accent);
  line-height: 1;
  letter-spacing: -0.04em;
  font-variant-numeric: tabular-nums;
}

/* Label */
.stat-label {
  display: block;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-muted);
  margin-top: 0.45rem;
}
```

---

### 5.10 `.featured-badge` (Pricing Plan)

Floats above a `.plan-card.featured` with `position: absolute; top: -14px; left: 50%; transform: translateX(-50%)`.

```scss
background: linear-gradient(135deg, var(--accent), var(--accent-warm));
color: #08100d;
font-size: 0.7rem;
font-weight: 700;
letter-spacing: 0.12em;
text-transform: uppercase;
padding: 0.3rem 0.9rem;
border-radius: 999px;
```

The parent `.plan-card.featured` sets:

```scss
border-color: rgba(232, 193, 76, 0.35);
background: color-mix(in srgb, var(--surface-elevated) 70%, rgba(232, 193, 76, 0.04));
box-shadow: 0 0 0 1px rgba(232, 193, 76, 0.15), 0 32px 72px rgba(0, 0, 0, 0.4);
overflow: visible;                                  /* allows badge to overflow top */
```

---

### 5.11 `.legal-page`

```scss
max-width: 820px;
margin: 0 auto;
padding: 0 1.5rem;
```

Legal pages (Privacy Policy, Cookie Policy, Terms) use this wrapper. Section headings at `1.15rem / 700` with `border-bottom: 1px solid var(--line)`.

---

## 6. Animation & Motion

### 6.1 Scroll Reveal Directive

The site uses a custom Angular `scrollReveal` attribute directive that adds `visible` to elements carrying the `.sr` class when they enter the viewport via `IntersectionObserver`.

**Base `.sr` state (hidden):**

```scss
opacity: 0;
transform: translateY(22px);
transition:
  opacity 0.72s cubic-bezier(0.22, 1, 0.36, 1),
  transform 0.72s cubic-bezier(0.22, 1, 0.36, 1);
transition-delay: var(--sr-delay, 0ms);
will-change: opacity, transform;
```

**`.sr.visible` state:**

```scss
opacity: 1;
transform: none;
will-change: auto;
```

**Directional variants:**

| Class | Initial transform |
|---|---|
| `.sr` (default) | `translateY(22px)` |
| `.sr.sr-left` | `translateX(-22px)` |
| `.sr.sr-right` | `translateX(22px)` |
| `.sr.sr-scale` | `scale(0.95)` |
| `.sr.sr-pop` | `scale(0.88) translateY(10px)` |

**`[delay]` attribute:** The directive reads a numeric `delay` input (milliseconds) and sets `--sr-delay` as an inline CSS custom property on the element.

Usage example:

```html
<span class="eyebrow sr" scrollReveal>Label</span>
<h2 class="sr" scrollReveal [delay]="80">Heading</h2>
<div class="section-divider sr" scrollReveal [delay]="160"></div>
```

**Section divider special case:** `.section-divider.sr` animates `scaleX(0) → scaleX(1)` with `transform-origin: left center` instead of the standard Y-translate.

**Grid stagger (CSS-only, no `[delay]` needed):**  
`.grid-2` and `.grid-3` children with `.sr` automatically receive `--sr-delay` via nth-child selectors (see Section 3).

---

### 6.2 Named Keyframes

All keyframes are defined in `styles.scss`:

| Keyframe | Duration (typical) | Use |
|---|---|---|
| `hero-enter` | — | Hero text entrance: `opacity 0→1`, `translateY(-12px → 0)`, `blur(4px → 0)`, letter-spacing expand. |
| `accent-grow` | — | ScaleX 0→1 grow, used for accent lines. |
| `count-shimmer` | — | Background-position shimmer sweep for counters (`-200%→300%`). |
| `drift` | 12–18s loop | Ambient element slow drift: translate + scale micro-animation. |
| `float` | 6–7s ease-in-out infinite | Hero image and hero badges bobbing (`translateY(0 → -12px → 0)`). |
| `fade-in-up` | — | Opacity + `translateY(20px → 0)` + blur. Generic entrance. |
| `pulse-glow` | — | Box-shadow pulse `0 → 10px` gold glow at 50% keyframe. |
| `shimmer` | — | Background-position sweep `−200% → 200%`. |
| `scale-in` | — | `scale(0.92 → 1)` + opacity + blur. |
| `modal-in` | 0.22s ease | Service modal entrance: `translateY(12px) scale(0.97) → translateY(0) scale(1)`. |
| `slide-up` | 0.35s cubic-bezier(0.34, 1.56, 0.64, 1) | Cookie consent banner entrance from bottom. |

**`float` animation is suppressed on mobile (`@media (max-width: 820px)`)** for the hero image and hero badges (set to `animation: none`).

---

### 6.3 Reduced Motion

Two `@media (prefers-reduced-motion: reduce)` blocks in `styles.scss`:

**Block 1 (top of file — near-instant durations):**

```scss
*,
*::before,
*::after {
  animation-duration: 0.01ms !important;
  animation-iteration-count: 1 !important;
  transition-duration: 0.01ms !important;
  scroll-behavior: auto !important;
}
```

**Block 2 (bottom of file — full disable + SR show-all):**

```scss
*, *::before, *::after {
  animation: none !important;
  transition: none !important;
}
.sr { opacity: 1; transform: none; filter: none; }
```

New feature animations must respect these blocks. Do not introduce animations that require additional `prefers-reduced-motion` overrides — the global blocks already handle it.

---

## 7. Nav Integration Pattern

### TypeScript: `header.component.ts`

The `navItems` array is a `readonly` tuple. To add a new nav item, append an object with `key` (a key of `SiteUiText['nav']`) and `route` (Angular router path):

```typescript
// src/app/shared/layout/header/header.component.ts
readonly navItems = [
  { key: 'home',          route: '/' },
  { key: 'about',         route: '/about' },
  { key: 'growthResults', route: '/growth-results' },
  { key: 'services',      route: '/services' },
  { key: 'pricing',       route: '/pricing' },
  { key: 'portfolio',     route: '/portfolio' },   // ADD this line
  { key: 'contact',       route: '/contact' }
] as const;
```

The `as const` assertion means the `key` type is inferred as a union of string literals. After adding the entry, TypeScript will error on all translation files until the corresponding `nav.portfolio` key is added to `SiteUiText`.

### Model: `SiteUiText` interface

`src/app/core/models/site-content.ts` — extend the `nav` object:

```typescript
export interface SiteUiText {
  nav: {
    home: string;
    about: string;
    growthResults: string;
    services: string;
    pricing: string;
    portfolio: string;   // ADD this line
    contact: string;
  };
  // ...
}
```

### Translation Files

Add `portfolio` to the `ui.nav` object in every language data file:

| File | Value |
|---|---|
| `src/app/core/data/site-content-en.ts` | `portfolio: 'Portfolio'` |
| `src/app/core/data/site-content-ro.ts` | `portfolio: 'Portofoliu'` |
| `src/app/core/data/site-content-hu.ts` | `portfolio: 'Portfólió'` |

### Router: `app.routes.ts`

Add the route with the next `animIndex` in sequence. Current max is `6` (legal pages). Portfolio should use `animIndex: 5.5` equivalent — assign `7` and shift legal pages to `8`, or just insert at `5`:

```typescript
{
  path: 'portfolio',
  data: { animIndex: 6 },
  loadComponent: () =>
    import('./pages/portfolio/portfolio.component')
      .then((m) => m.PortfolioComponent)
}
```

Use lazy loading (`loadComponent`) consistent with the legal page pattern.

### Template

No template changes required. The `*ngFor="let item of navItems"` loop in both `desktop-nav` and `mobile-menu nav` renders new entries automatically.

---

## 8. New Feature Design Specs

---

### Feature A — Portfolio Section (Home Page)

**Placement:** After the Results section (`<section class="results-section">`) and before the existing CTA band or mini-CTA strip.

**Section Wrapper:**

```html
<section class="portfolio-section content-shell">
  <div class="section-header">
    <span class="eyebrow sr" scrollReveal>Our Work</span>
    <h2 class="sr" scrollReveal [delay]="80">Featured Projects</h2>
    <div class="section-divider sr" scrollReveal [delay]="160"></div>
    <p class="section-subtitle sr" scrollReveal [delay]="200">
      A selection of campaigns and results.
    </p>
  </div>
  <div class="grid-2-fixed portfolio-preview-grid">
    <!-- 2 reference cards -->
  </div>
  <div class="portfolio-cta sr" scrollReveal [delay]="280">
    <a class="button--accent button" routerLink="/portfolio">
      View All Projects <span class="arrow">→</span>
    </a>
  </div>
</section>
```

**Reference Card Structure (`.portfolio-card`):**

Each card uses `.card` as its base class plus a local `.portfolio-card` modifier.

```html
<article class="card portfolio-card sr" scrollReveal [delay]="...">
  <div class="portfolio-card__image image-shell">
    <img src="..." alt="Project name" width="600" height="400" loading="lazy" />
  </div>
  <div class="portfolio-card__body">
    <span class="eyebrow">{{ project.eyebrow }}</span>
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <div class="portfolio-card__tags">
      <span class="portfolio-tag" *ngFor="let tag of project.metrics">{{ tag }}</span>
    </div>
    <a class="button button--sm" [routerLink]="['/portfolio']" [fragment]="project.id">
      View Case Study <span class="arrow">→</span>
    </a>
  </div>
</article>
```

**`.portfolio-card` styles (new, in `home.component.scss`):**

```scss
.portfolio-card {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.portfolio-card__image {
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.portfolio-card__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.portfolio-card:hover .portfolio-card__image img {
  transform: scale(1.04);
}

.portfolio-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.portfolio-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0.25rem 0;
}
```

**`.portfolio-tag` styles:**

```scss
.portfolio-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.22rem 0.65rem;
  border-radius: 999px;
  background: rgba(232, 193, 76, 0.1);
  border: 1px solid rgba(232, 193, 76, 0.2);
  color: var(--accent);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: 'Space Grotesk', sans-serif;
}
```

Tags use the same visual language as `.spotlight-index` from the pricing page.

**`.portfolio-cta`:**

```scss
.portfolio-cta {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
```

---

### Feature A — Portfolio Page (`/portfolio`)

**File:** `src/app/pages/portfolio/portfolio.component.{ts,html,scss}`

**Page class:** `.portfolio-page` — mirror the established page pattern:

```scss
.portfolio-page {
  padding-top: clamp(2.5rem, 5vw, 4rem);
  display: flex;
  flex-direction: column;
  gap: var(--section-gap);
}
```

**Page Hero (matches contact/pricing pattern):**

```html
<div class="page-hero content-shell">
  <span class="eyebrow sr" scrollReveal>Our Work</span>
  <h1 class="sr" scrollReveal [delay]="80">Portfolio</h1>
  <div class="section-divider sr" scrollReveal [delay]="160"></div>
  <p class="hero-lead sr" scrollReveal [delay]="200">
    Real results for real clients...
  </p>
</div>
```

**`.hero-lead` on portfolio page:**

```scss
.hero-lead {
  font-size: clamp(1.05rem, 1.8vw, 1.2rem);
  color: var(--text-dim);
  line-height: 1.7;
  max-width: 64ch;
}
```

**Project Entries — Alternating Image/Text Layout:**

Each project is a `<article class="project-entry content-shell sr sr-left">` (even items use `.sr-right` or flip columns).

```scss
.project-entry {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2rem, 4vw, 4rem);
  align-items: center;
}

/* Alternate: even entries flip column order */
.project-entry:nth-child(even) {
  direction: rtl;     /* flip column order */
}

.project-entry:nth-child(even) > * {
  direction: ltr;     /* restore text direction inside */
}
```

**Alternative without `direction` trick:**

```scss
.project-entry.image-right .project-entry__visual {
  order: 2;
}
.project-entry.image-right .project-entry__body {
  order: 1;
}
```

Prefer the explicit class-based approach (`imagePosition: 'left' | 'right'` from the `CaseStudy` interface is already defined in the model).

**`.project-entry__visual`:** Use `.image-shell` directly. No wrapper needed.

**`.project-entry__body`:**

```scss
.project-entry__body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
```

Contains: `.eyebrow`, `h2`, `.section-divider`, `p` (description), `.portfolio-card__tags` (reuse from home section), `p` (results/metrics), `.button--accent` CTA.

**"View Gallery" Button:**

```html
<button class="button button--sm" type="button" (click)="openLightbox(project, 0)">
  View Gallery <span class="arrow">→</span>
</button>
```

Styled identically to `.button.button--sm`. No additional style needed.

**Responsive — project entries:**

```scss
@media (max-width: 820px) {
  .project-entry {
    grid-template-columns: 1fr;
  }
  .project-entry.image-right .project-entry__visual,
  .project-entry.image-right .project-entry__body {
    order: unset;
  }
  /* Image always stacks on top on mobile */
  .project-entry__visual { order: -1; }
}
```

---

### Feature A — Lightbox

**Architecture:** Angular component with `@Component({ standalone: true })`, inserted at app root level via `ViewContainerRef` or `<app-lightbox>` in `app.component.html` with `*ngIf` or `@if`.

**Trigger:** `openLightbox(project: CaseStudy, index: number)` method calls a service or emits an event that shows the lightbox with the project's image array.

**Overlay:**

```scss
.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  animation: fade-in-up 0.2s ease;
}
```

**Content container:**

```scss
.lightbox-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

**Image:**

```scss
.lightbox-img {
  display: block;
  max-width: 90vw;
  max-height: 85vh;
  width: auto;
  height: auto;
  border-radius: var(--radius-lg);                  /* 24px */
  border: 1px solid var(--line-bright);
  box-shadow: 0 40px 100px rgba(0, 0, 0, 0.7);
  object-fit: contain;
}
```

**Navigation arrows (`.lightbox-arrow`):**

Use the same visual language as `.button` (ghost pill) but adapted to be icon-only circles:

```scss
.lightbox-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--line-bright);
  background: rgba(13, 18, 25, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.2s ease, color 0.2s ease, transform 0.2s ease;
  z-index: 10;
}

.lightbox-arrow:hover {
  border-color: var(--accent);
  color: var(--accent);
  transform: translateY(-50%) scale(1.08);
}

.lightbox-arrow--prev { left: -60px; }
.lightbox-arrow--next { right: -60px; }

@media (max-width: 640px) {
  .lightbox-arrow--prev { left: -40px; }
  .lightbox-arrow--next { right: -40px; }
}
```

**Close button (`.lightbox-close`):**

```scss
.lightbox-close {
  position: absolute;
  top: -44px;
  right: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--line-bright);
  background: rgba(13, 18, 25, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--text-dim);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: border-color 0.15s ease, color 0.15s ease;
  font-size: 1rem;
}

.lightbox-close:hover {
  border-color: var(--accent);
  color: var(--accent);
}
```

This mirrors `.modal-close` from `home.component.scss` (same pattern: circular, border-based, accent on hover).

**Interaction behaviour:**

- ESC key: `@HostListener('document:keydown.escape')` calls `closeLightbox()`.
- Click outside image: `(click)` on `.lightbox-overlay` calls `closeLightbox()`, image/controls call `(click)="$event.stopPropagation()"`.
- Arrow keys: `@HostListener('document:keydown.arrowleft')` / `arrowright` to navigate.

**Animation entry:** Reuse `fade-in-up` keyframe (already defined in `styles.scss`). Duration `0.2s ease` on the overlay.

---

### Feature B — Custom Website Pricing Card

**Placement:** After the 3 existing `.plan-card` elements within `.plan-grid` in `pricing.component.html`. The `.plan-grid` uses `auto-fit`, so the card flows naturally into the grid. At wide viewports (≥1160px) the 4-card row will display 2+2 or the grid will re-flow; see responsive note below.

**Intent:** Visually premium — clearly distinct from the existing Foundation / Scaling / Partner cards. It signals "bespoke / luxury tier" without using the same featured-badge pattern as the existing "Most Popular" card.

**HTML structure:**

```html
<article class="card plan-card plan-card--bespoke sr" scrollReveal [delay]="240">
  <span class="bespoke-eyebrow">
    <span class="bespoke-eyebrow__line"></span>
    Bespoke
  </span>
  <h3>Custom Website</h3>
  <div class="plan-price">
    <span class="price-amount">On Request</span>
  </div>
  <p class="plan-desc">{{ content.pricingBespokeDescription }}</p>
  <ul class="plan-features">
    <li *ngFor="let feature of bespokeFeatures">{{ feature }}</li>
  </ul>
  <div class="plan-divider"></div>
  <a class="button button--accent" routerLink="/contact">
    Discuss Your Project <span class="arrow">→</span>
  </a>
</article>
```

**`.plan-card--bespoke` styles (add to `pricing.component.scss`):**

```scss
.plan-card--bespoke {
  /* Diamond / premium border: animated gradient border via pseudo-element */
  position: relative;
  border-color: transparent;
  background: color-mix(in srgb, var(--surface-elevated) 65%, rgba(232, 193, 76, 0.06));
  overflow: visible;                               /* allow badge overflow if needed */

  /* Gradient border trick using outline + clip */
  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: calc(var(--radius-lg) + 1px);   /* 25px */
    background: linear-gradient(
      135deg,
      var(--accent) 0%,
      var(--accent-warm) 30%,
      rgba(255, 255, 255, 0.6) 50%,
      var(--accent-warm) 70%,
      var(--accent) 100%
    );
    z-index: -1;
    opacity: 0.55;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 0.85;
  }

  /* Override card hover to match bespoke style */
  &:hover {
    transform: translateY(-6px);
    box-shadow:
      0 24px 56px rgba(0, 0, 0, 0.48),
      0 0 40px rgba(232, 193, 76, 0.15);
    border-color: transparent;
  }

  /* Suppress the default card::before gold line since ::before is used for border */
  .card::before { display: none; }
}
```

**Note on pseudo-element border gradient:** The `z-index: -1` on `::before` means the card's own `background` sits on top of the gradient, creating the appearance of a gradient border. The card background must not be fully transparent. Ensure `border-radius` of the card matches `--radius-lg` (24px) and the pseudo-element uses `25px` (24 + 1px inset).

**`.bespoke-eyebrow` (replaces standard `.eyebrow` for this card):**

```scss
.bespoke-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  font-family: 'Space Grotesk', sans-serif;
  /* Gold gradient text */
  background: linear-gradient(125deg, var(--accent) 0%, var(--accent-warm) 45%, #fff8e6 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.8rem;
}

.bespoke-eyebrow__line {
  display: block;
  width: 24px;
  height: 1.5px;
  background: linear-gradient(90deg, var(--accent), var(--accent-warm));
  border-radius: 99px;
  flex-shrink: 0;
  /* line cannot use -webkit-text-fill-color so it's a separate element */
}
```

This uses `.gradient-text` values (from `styles.scss`) applied directly to the eyebrow instead of `var(--accent)` solid color, making it visually richer than the standard eyebrow.

**`.price-amount` override for bespoke card:**

The existing `.price-amount` renders gold numeric text via `color: var(--accent)`. "On Request" as text content will render correctly with the same styles. No override needed. However, apply `.gradient-text` directly to the element:

```html
<span class="price-amount gradient-text">On Request</span>
```

**CTA button:** Use `.button.button--accent` (gold gradient) with "Discuss Your Project" label. This is the only card that uses the gold CTA — all three existing plan cards use `.button` (ghost). This distinction reinforces the premium tier.

**Responsive note for 4-card `.plan-grid`:**

`.plan-grid` uses `auto-fit, minmax(280px, 1fr)`. At 1160px with 4 cards × 280px minimum + gaps, columns will auto-reflow to 2×2 at around 720px. This is acceptable. No additional breakpoint override needed unless a 4-column forced layout is desired at wide viewports — if so:

```scss
@media (min-width: 1200px) {
  .plan-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

This is optional. Confirm with design intent.

**Content / i18n keys needed in `SiteUiText` and `SiteContent`:**

Add to `SiteContent` in `site-content.ts`:

```typescript
// In PricingPlan interface (already supports this if a new plan entry is added)
// Alternatively, add a dedicated key to SiteUiText:
pricingBespokeEyebrow: string;
pricingBespokeDescription: string;
pricingBespokeCta: string;
pricingBespokeFeatures: string[];
```

Or add a 4th entry to the existing `pricingPlans` array in each language data file with `{ name: 'Custom Website', price: 'On Request', ctaLabel: 'Discuss Your Project', ... }` — the `PricingPlan` interface already supports this via the `price: string` field.

---

## 9. QA Checklist

### Feature A — Portfolio Section (Home)

- [ ] Section appears after Results section and before any CTA band/strip
- [ ] Section uses `.content-shell` wrapper for correct max-width (1160px / 92vw)
- [ ] `.eyebrow` renders with gold accent line prefix
- [ ] `.section-divider` renders at 48×3px gold gradient rule and grows in from left on scroll reveal
- [ ] Two portfolio cards use `.grid-2-fixed` — exactly 2 columns at ≥641px, 1 column at ≤640px
- [ ] Each card has: placeholder image with correct aspect-ratio (16:10), project title (h3), description (p, `var(--text-dim)`), tech stack tags (`.portfolio-tag` pill badges), and a ghost CTA button
- [ ] `.portfolio-card` hover lifts `translateY(-5px)` with gold border glow (inherited from `.card`)
- [ ] `.portfolio-card__image img` zooms `scale(1.04)` on card hover
- [ ] All elements carry `.sr` + `scrollReveal` with appropriate `[delay]` stagger
- [ ] On mobile (≤820px), section stacks to single column
- [ ] `prefers-reduced-motion`: all animations and transitions are suppressed; `.sr` elements are immediately visible

### Feature A — Portfolio Page (`/portfolio`)

- [ ] Page route `/portfolio` is registered in `app.routes.ts` as lazy-loaded component
- [ ] Nav item "Portfolio" appears between "Pricing" and "Contact" in desktop nav and mobile menu
- [ ] Active route dot indicator appears on `.portfolio` nav link when on `/portfolio`
- [ ] Page hero uses `.eyebrow` + `h1` + `.section-divider` + `.hero-lead` pattern — matches contact and pricing pages visually
- [ ] Each project entry alternates image left/right per `imagePosition` field
- [ ] On mobile (≤820px), all project entries collapse to single column with image on top
- [ ] "View Gallery" button is visible per project entry
- [ ] Clicking "View Gallery" opens lightbox

### Feature A — Lightbox

- [ ] Overlay background is `rgba(0, 0, 0, 0.85)`
- [ ] Image is constrained to `max-width: 90vw` and `max-height: 85vh`, `object-fit: contain`
- [ ] Image has `border-radius: 24px` (`--radius-lg`) and a `border: 1px solid var(--line-bright)`
- [ ] Close button is top-right of image, circular, `36×36px`, matches `.modal-close` visual style
- [ ] Close button hover: `border-color: var(--accent)`, `color: var(--accent)`
- [ ] Previous/Next arrow buttons are `44×44px` circles, centered vertically on image sides
- [ ] Arrow buttons: `border: 1px solid var(--line-bright)`, glassmorphism background `rgba(13,18,25,0.85) + blur(8px)`
- [ ] Arrow buttons hover: `border-color: var(--accent)`, `color: var(--accent)`
- [ ] ESC key closes lightbox
- [ ] Clicking overlay background closes lightbox
- [ ] Clicking image or controls does NOT close lightbox (stopPropagation)
- [ ] Arrow keys (left/right) navigate between images
- [ ] On narrow mobile (≤640px), arrows are 40px from edge (not overlapping image)
- [ ] Lightbox is at `z-index: 2000` (above header's z-index 100)
- [ ] `prefers-reduced-motion`: overlay appears without `fade-in-up` animation

### Feature B — Custom Website Pricing Card

- [ ] Card appears as the 4th card in `.plan-grid`, after the 3 existing plan cards
- [ ] Card has gradient border (gold→warm→white highlight→warm→gold at 135deg), visible at `opacity: 0.55` rest / `0.85` hover
- [ ] Card background is slightly warmer than standard cards: `color-mix(in srgb, var(--surface-elevated) 65%, rgba(232, 193, 76, 0.06))`
- [ ] "Bespoke" eyebrow uses gradient text (not solid `var(--accent)`) with gold line prefix
- [ ] Price displays "On Request" in `.gradient-text` style at the same size as other `.price-amount` elements
- [ ] No `/month` price period label is shown (price is not time-based)
- [ ] CTA button uses `.button--accent` (gold gradient) — the only plan card with this button style
- [ ] CTA button label is "Discuss Your Project" (not "Get Started" or similar)
- [ ] CTA links to `/contact`
- [ ] Card does NOT use `.featured-badge` (the floating "Most Popular" pill) — it is visually distinct but not positionally flagged
- [ ] On hover: card lifts `translateY(-6px)` with `box-shadow: 0 24px 56px rgba(0,0,0,0.48), 0 0 40px rgba(232,193,76,0.15)`
- [ ] On mobile, card stacks below the 3 existing cards in full-width single column
- [ ] All 4 cards in `.plan-grid` scale correctly at all breakpoints (no overflow, no collapsed text)
- [ ] Translation keys for bespoke card content are present in EN, RO, and HU language files
- [ ] `prefers-reduced-motion`: hover transform and shadow suppressed

---

*End of Design Audit — InsideGrowth Marketing Website*
