import fs from 'node:fs';
import path from 'node:path';

const outputPath = path.join('dist', 'marketing-website', 'browser', 'index.html');

if (!fs.existsSync(outputPath)) {
  console.error(`Build output not found: ${outputPath}`);
  process.exit(1);
}

const version = process.env.GITHUB_SHA?.slice(0, 7) ?? Date.now().toString(36);
const html = fs.readFileSync(outputPath, 'utf8');

const rewritten = html.replace(
  /((?:src|href))="(?!https?:|\/\/)([^"']+\.(?:js|css))"/g,
  (_match, attr, assetPath) => {
    const separator = assetPath.includes('?') ? '&' : '?';
    return `${attr}="${assetPath}${separator}v=${version}"`;
  },
);

fs.writeFileSync(outputPath, rewritten);