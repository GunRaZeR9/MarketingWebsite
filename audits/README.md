# Website Audits

Consolidated audit reports and diagnostics for website performance and quality.

## Files

- **audit-pages.json** — List of pages to audit (used by the Website Optimizer skill)
- **audit-pages-deployed.json** — List of deployed pages to audit
- **diagnostic.md** — Latest diagnostic report from lighthouse audits

## Usage

Run the Website Optimizer skill to generate the latest diagnostic report:

```bash
# The skill will analyze pages listed in audit-pages.json
# and output results to diagnostic.md
```

Or manually run the analysis script:

```bash
node scripts/analyze-lighthouse.js [path-to-lighthouse-report]
```

## Notes

- This folder is **tracked in git** (not ignored)
- Only essential audit data is stored here
- Temporary lighthouse report files are not kept (use diagnostic.md instead)
- Uses the system Chrome browser (no need for chromium package)
