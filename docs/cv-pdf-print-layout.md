# CV PDF & Print Layout Skill — Summary

Summary of the project skill **cv-pdf-print-layout** (`.cursor/skills/cv-pdf-print-layout/`), which encodes improvements from prompts about generating PDF and print layout for the CV page.

---

## What the skill covers

1. **Unify PDF and print styling** — One set of styles for both. Use the same wrapper/class (e.g. `#cv-content`, `.pdf-export`) for the PDF library and `@media print`. Force light theme for PDF/print so there’s no dark background with white edges.

2. **Single A4** — Content fits one page: use `@page { size: A4; margin: 0; }` (or small margin), and constrain the main content to one A4 height with `overflow` so nothing spills to a second page. Tune typography so content fits.

3. **Margins and filling the page** — If margins are too large, reduce padding/margin on the content wrapper for both PDF and print. Use the same values in both.

4. **Profile image and layout consistency** — Use the same layout (e.g. right column) for PDF and print so the profile image is in the same place in both. Same selectors and rules for both paths.

5. **Contrast and visibility** — For PDF/print use darker text (avoid faint gray). Use white or very light background for the printable area so the page looks consistent.

6. **Checklist** — One A4 only; PDF and print look the same; forced light theme for export/print; acceptable margins; profile image in same place; text readable; links/URLs visible on paper if desired.

---

## Project reference (this repo)

- **CV page:** `cv.html`
- **Content wrapper:** `#cv-content`
- **PDF export:** Add `pdf-export` and `pdf-export-light` to `#cv-content` before calling the PDF library (e.g. html2pdf.js).
- **Print:** `@media print` in `cv.html` styles `#cv-content` to match `#cv-content.pdf-export.pdf-export-light`.
- **Single A4:** Fixed height on `#cv-content`, `@page { size: A4; margin: 0; }` in the print block.
- **Profile image:** `.cv-photo` in `.cv-right`; same rules in `.pdf-export` and `@media print`.

When changing PDF or print, apply layout/color changes to **both** the PDF export classes and `@media print` so they stay identical.

---

## When to use the skill

The agent should use the **cv-pdf-print-layout** skill when:

- Adding or fixing PDF download or print styles for the CV page
- Working on A4 layout, single-page constraint, or content cutting off
- The user mentions PDF/print differences, margins, or profile image position

Skill files: `.cursor/skills/cv-pdf-print-layout/SKILL.md` (main instructions), `reference.md` (project-specific selectors and patterns).
