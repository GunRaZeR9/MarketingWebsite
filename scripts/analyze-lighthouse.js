const fs = require('fs');
const path = require('path');

// Configuration
const reportPath = process.argv[2] || './lighthouse-reports-deployed/home-mobile.report.json';
const auditDir = './audits';
const diagnosticFile = path.join(auditDir, 'diagnostic.md');

// Ensure audits directory exists
if (!fs.existsSync(auditDir)) {
  fs.mkdirSync(auditDir, { recursive: true });
}

// Read and parse lighthouse report
if (!fs.existsSync(reportPath)) {
  console.error(`Report file not found: ${reportPath}`);
  process.exit(1);
}

const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));

// Generate diagnostic markdown
let diagnostic = '# Website Performance Diagnostic\n\n';
diagnostic += `Generated: ${new Date().toISOString()}\n\n`;

// Performance Score
const perfScore = (report.categories.performance.score * 100).toFixed(0);
diagnostic += `## Overall Performance Score\n**${perfScore}/100**\n\n`;

// Critical Issues
diagnostic += '## Critical Issues (Score 0)\n';
const perfAudits = report.categories.performance.auditRefs;
const criticalIssues = [];
perfAudits.forEach(ref => {
  const audit = report.audits[ref.id];
  if (audit && audit.score === 0) {
    criticalIssues.push(audit);
    diagnostic += `### ${audit.title}\n`;
    if (audit.details && audit.details.items && audit.details.items.length > 0) {
      const items = audit.details.items.slice(0, 3);
      items.forEach(item => {
        diagnostic += `- **URL**: ${item.url || item.source || 'unknown'}\n`;
        if (item.wastedBytes) diagnostic += `  - Wasted: ${(item.wastedBytes / 1024).toFixed(2)} KB\n`;
      });
    }
    diagnostic += '\n';
  }
});

// LCP Details
const lcpAudit = report.audits['largest-contentful-paint'];
diagnostic += '## Largest Contentful Paint (LCP)\n';
diagnostic += `- **LCP Score**: ${(lcpAudit.score * 100).toFixed(0)}/100\n`;
diagnostic += `- **LCP Value**: ${lcpAudit.numericValue}ms\n`;
if (lcpAudit.details && lcpAudit.details.items) {
  diagnostic += `- **LCP Items**: ${lcpAudit.details.items.length}\n`;
}

const lcpElementAudit = report.audits['largest-contentful-paint-element'];
if (lcpElementAudit && lcpElementAudit.details && lcpElementAudit.details.items && lcpElementAudit.details.items.length > 0) {
  diagnostic += `- **LCP Element**: ${lcpElementAudit.details.items[0].node?.selector}\n`;
}
diagnostic += '\n';

// Image Optimization
const imageAudit = report.audits['modern-image-formats'];
diagnostic += '## Image Optimization\n';
if (imageAudit) {
  diagnostic += `- **Modern Image Formats Score**: ${(imageAudit.score * 100).toFixed(0)}/100\n`;
  if (imageAudit.details && imageAudit.details.items) {
    imageAudit.details.items.slice(0, 2).forEach(item => {
      diagnostic += `- **Image**: ${item.url}\n`;
      if (item.wastedBytes) diagnostic += `  - Potential savings: ${(item.wastedBytes / 1024).toFixed(2)} KB\n`;
    });
  }
}

// Write diagnostic file
fs.writeFileSync(diagnosticFile, diagnostic, 'utf8');
console.log(`✓ Diagnostic report saved to: ${diagnosticFile}`);
