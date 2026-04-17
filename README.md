# oOumm Growth Marketing Website

Presentation website for a performance-driven marketing agency built from the supplied PDF deck and supporting assets.

## Features

- Angular standalone architecture with lazy-loaded routes
- Pages: Home, About, Services, Pricing, Contact
- Responsive UI with shared header/footer and reusable section styles
- Route-level SEO tags (title, description, keywords, Open Graph, Twitter)
- Lead form with validation and local storage persistence
- GitHub Pages deployment scripts included

## Tech Stack

- Angular 21 (standalone components)
- TypeScript
- SCSS

## Project Structure

```text
src/app/
	core/
		data/
		models/
		services/
	pages/
		home/
		about/
		services/
		pricing/
		contact/
	shared/
		layout/
			header/
			footer/
```

## Local Development

```bash
npm install
npm run start
```

Open: http://localhost:4200

## Production Build

```bash
npm run build
```

Build output: dist/marketing-website/browser

## GitHub Pages Deployment

1. Build with your GitHub Pages base href:

```bash
npm run build:ghpages
```

2. Deploy build output:

```bash
npm run deploy:ghpages
```

The `build:ghpages` script uses `https://GunRaZeR9.github.io/MarketingWebsite/` as base href. Do not wrap usernames in angle brackets in URLs.

## Git Setup

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <repo-url>
git push -u origin main
```

## Screenshot Placeholders

- Home page hero section
- Services and solutions section
- Pricing comparison section
- Contact form and confirmation state
