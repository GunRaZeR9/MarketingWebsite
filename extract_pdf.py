from pypdf import PdfReader
from pathlib import Path
pdf = Path(r"d:/Repos/MarketingWebsite/Marketing Presentation oOumm.pdf")
out = Path(r"d:/Repos/MarketingWebsite/pdf-extracted.md")
r = PdfReader(str(pdf))
chunks = []
for i,p in enumerate(r.pages, start=1):
    txt = p.extract_text() or ""
    chunks.append(f"## Page {i}\n\n" + txt.strip() + "\n")
out.write_text("\n\n".join(chunks), encoding="utf-8")
print(f"pages={len(r.pages)} written={out}")
