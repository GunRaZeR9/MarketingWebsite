const https = require('https');
const fs = require('fs');
const path = require('path');

const pages = [
  { slug: 'home', path: '/' },
  { slug: 'about', path: '/about' },
  { slug: 'growth-results', path: '/growth-results' },
  { slug: 'services', path: '/services' },
  { slug: 'pricing', path: '/pricing' },
  { slug: 'contact', path: '/contact' },
  { slug: 'privacy-policy', path: '/privacy-policy' },
  { slug: 'cookie-policy', path: '/cookie-policy' },
  { slug: 'terms-conditions', path: '/terms-conditions' }
];

const baseUrl = 'https://gunrazer9.github.io/MarketingWebsite';
const apiKey = 'AIzaSyDyWJqualm-8ZyKnAkkbZSGJzDw5dWNDd8';
const reportDir = './lighthouse-reports';

if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir, { recursive: true });

async function fetchPageSpeed(url, strategy) {
  return new Promise((resolve, reject) => {
    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${apiKey}&strategy=${strategy}`;
    https.get(apiUrl, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function runAudits() {
  const summary = { pages: [] };

  for (const page of pages) {
    console.log(`\n🔍 Auditing ${page.slug}...`);
    const url = baseUrl + page.path;

    try {
      const mobileResult = await fetchPageSpeed(url, 'mobile');
      const desktopResult = await fetchPageSpeed(url, 'desktop');

      if (!mobileResult.lighthouseResult || !desktopResult.lighthouseResult) {
        console.error(`❌ ${page.slug} - Invalid API response:`, mobileResult.error || desktopResult.error);
        continue;
      }

      const mobileScores = mobileResult.lighthouseResult.categories;
      const desktopScores = desktopResult.lighthouseResult.categories;

      const pageReport = {
        slug: page.slug,
        path: page.path,
        mobile: {
          performance: Math.round(mobileScores.performance.score * 100),
          accessibility: Math.round(mobileScores.accessibility.score * 100),
          'best-practices': Math.round(mobileScores['best-practices'].score * 100),
          seo: Math.round(mobileScores.seo.score * 100)
        },
        desktop: {
          performance: Math.round(desktopScores.performance.score * 100),
          accessibility: Math.round(desktopScores.accessibility.score * 100),
          'best-practices': Math.round(desktopScores['best-practices'].score * 100),
          seo: Math.round(desktopScores.seo.score * 100)
        }
      };

      summary.pages.push(pageReport);
      console.log(`✅ ${page.slug} - Mobile: ${pageReport.mobile.performance}  Desktop: ${pageReport.desktop.performance}`);
    } catch (e) {
      console.error(`❌ ${page.slug} - Error:`, e.message);
    }
  }

  fs.writeFileSync(path.join(reportDir, 'SUMMARY.json'), JSON.stringify(summary, null, 2));
  console.log(`\n📊 Summary saved to ${reportDir}/SUMMARY.json`);
}

runAudits();
