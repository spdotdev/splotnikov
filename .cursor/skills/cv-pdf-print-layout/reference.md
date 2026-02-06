# CV PDF & Print — Project Reference

## This Repo (splotnikov)

- **CV page:** `cv.html`
- **Content wrapper:** `#cv-content` — all print and PDF styles target this or its children.
- **PDF export:** Before calling the PDF library (e.g. html2pdf.js), add classes to `#cv-content`:
  - `pdf-export` — base PDF layout (same structure as print).
  - `pdf-export-light` — forces light theme (background, text, links) so the PDF does not have dark background or white edges.
- **Print:** `@media print` in `cv.html` styles `#cv-content` with the same layout and colors as `#cv-content.pdf-export.pdf-export-light` (light, high contrast, one A4).
- **Single A4:** `#cv-content` has a fixed height (e.g. `height: 297mm` or equivalent) and `overflow: hidden` (or similar) so content is constrained to one page; typography is tuned to fit.
- **@page:** `@page { size: A4; margin: 0; }` (or small margin) is used in the print block so the browser and PDF match.
- **Profile image:** `.cv-photo` in `.cv-right`; same rules in both `.pdf-export` and `@media print` so the photo stays on the right in PDF and print.

## When Changing PDF or Print

1. Apply layout/color changes to **both** `#cv-content.pdf-export` (and `.pdf-export-light`) **and** `@media print` so they stay identical.
2. Keep one A4: if content grows, reduce font-size, padding, or line-height within the fixed-height wrapper rather than allowing a second page.
3. After edits, verify: “Print” preview and “Download PDF” produce the same visual result and the profile image is in the same place.
