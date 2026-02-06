---
name: cv-pdf-print-layout
description: Generates or improves PDF export and print layout for CV/resume HTML pages. Ensures single A4, identical PDF and print styling, readable contrast, and consistent profile/image placement. Use when adding or fixing PDF download, print styles, A4 layout, or when the user mentions PDF/print differences, margins, or content cutting off.
---

# CV PDF & Print Layout

## Goals

- **One A4:** Content fits a single page for both PDF and print.
- **Identical output:** PDF and print must look the same (layout, colors, image position).
- **Readable:** Sufficient contrast for print/PDF (avoid faint gray text).
- **Filled page:** Reasonable use of space; avoid large empty margins or half-empty A4.

## 1. Unify PDF and Print Styling

- Use one set of styles for both. Typically:
  - A class or wrapper (e.g. `#cv-content` or `.pdf-export`) that applies when generating PDF **and** in `@media print`.
- When using a library (e.g. html2pdf.js): apply the **same** wrapper/class and CSS that print uses, so PDF is just “print to PDF” in terms of layout and colors.
- **Force light theme for PDF/print:** Dark backgrounds with white edges and low contrast are common problems. For the export/print view, force light background and dark text (e.g. override `data-theme` or use a `.pdf-export` / `.print-only` class that sets background and text color). Do not rely on the current page theme for PDF/print.

## 2. Single A4 and Filling the Page

- **@page:** Set `size: A4` and keep margins minimal if content must fill the page, e.g. `@page { size: A4; margin: 0; }` or small margin (e.g. 10mm). Browser print “margin: none” can help; match that intent in CSS where possible.
- **Fixed height for one page:** To avoid a second page, constrain the main content area to one A4 height (e.g. `height: 297mm` or `min-height`/`max-height` with `overflow: hidden` or `overflow: auto` on a wrapper). Tune typography (font-size, line-height, padding) so content fits inside that box.
- **Margins:** If the user reports “too much margin left and right”, reduce padding/margin on the content wrapper for the print/PDF context. Use the same values in both PDF and print CSS.

## 3. Profile Image and Layout Consistency

- **Same position in PDF and print:** Use the same layout (e.g. CSS Grid or Flexbox) for the PDF view and for `@media print`. If the profile image is in a right column, ensure both PDF and print use that same structure (no conditional layout that only runs in one path). Check that the image element is not reordered or moved (e.g. by different DOM or print-only rules).
- **Alignment:** If “profile image aligned left in PDF but right in print”, the same selector and rules must apply in both. Prefer a single container (e.g. sidebar) with one set of alignment rules used for both export and print.

## 4. Contrast and Visibility

- **Gray text:** In PDF/print, light gray can disappear or be barely visible. For the PDF/print view, use darker text (e.g. dark gray or black) and ensure link color is distinct but readable. Avoid relying on very light gray for body text in the export/print stylesheet.
- **Backgrounds:** Use white or very light background for the printable area so that printed or PDF output has no white “edges” around a dark block; the whole page should look consistent.

## 5. Checklist (PDF + Print)

- [ ] One A4 only: content does not spill to a second page; print does not cut off mid-content.
- [ ] PDF and print look the same (layout, margins, image position, colors).
- [ ] Export/print use a forced light, high-contrast theme (no dark background with white edges).
- [ ] Margins/padding are acceptable and the page looks filled, not half-empty.
- [ ] Profile (or main) image is in the same place in PDF and print.
- [ ] Text is readable (no too-light gray in PDF/print).
- [ ] Links (e.g. LinkedIn, GitHub) can show URL text for print if the user wants clickable links to be visible on paper.

## Reference

For project-specific selectors and class names (e.g. `#cv-content`, `.pdf-export`), see [reference.md](reference.md).
