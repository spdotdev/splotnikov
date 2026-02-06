---
name: portfolio-content-sync
description: Syncs the one-page portfolio (index.html) with content from a source document (e.g. docs/PORTFOLIO.md or PORTFOLIO.md). Maps markdown sections to Hero, Manifesto, Proof, Toolkit, Contact, and Footer. Use when updating portfolio content, adding content from PORTFOLIO.md, or when the user asks to refresh or reorganize the portfolio page.
---

# Portfolio Content Sync

## When to Use

- User asks to update the portfolio, sync from PORTFOLIO.md, or refresh page content
- User provides new copy for the one-page site (hero, manifesto, proof, toolkit, contact)
- User wants content reorganized to match a given structure (01–04 sections)

## Page Structure (Fixed Order)

The one-page layout must follow this order. Nav anchors and section IDs must match.

| Order | Section        | ID          | Nav label |
| ----- | -------------- | ----------- | --------- |
| —     | Hero           | (top)       | —         |
| 01    | The Manifesto  | `manifesto` | Manifesto |
| 02    | Selected Proof | `proof`     | Proof     |
| 03    | The Toolkit    | `toolkit`   | Toolkit   |
| 04    | Contact        | `contact`   | Contact   |
| —     | Footer         | —           | —         |

## Content Mapping

### Hero

- **Title:** Single name (e.g. Stanislav Plotnikov) in `<h1><span>…</span></h1>`
- **Subtitle:** Role/tagline (e.g. "Legacy Modernization & Solution Architect") in `<p>` after h1
- **Quote:** Tagline in `<blockquote>…</blockquote>`
- **Primary CTA:** CV link — keep as `cv.html` or `/cv.pdf` per project; text e.g. "View / Download CV" or "Download Technical CV"
- **Secondary CTA:** LinkedIn — `https://www.linkedin.com/in/stanislavplotnikov/`, text e.g. "Connect on LinkedIn"

### 01 / The Manifesto

- **Section label:** `<p class="section-label">01 / The Manifesto</p>`
- **Heading:** `<h2>` (e.g. "Engineering for ROI, Not Trends")
- **Body:** One intro paragraph + `<ul>` with list items. Use `.manifesto-content` wrapper; list items with bold labels and explanatory text.

### 02 / Selected Proof

- **Section label:** `02 / Selected Proof`; **Heading:** e.g. "Case Studies"
- **Cards:** Each proof is a `.project-card` with:
  - `.project-image` (visual; can be terminal mockup or SVG)
  - `.project-content` with `<h3>` (case title), then paragraphs for **The Mess**, **The Solution**, **The Impact**
  - `.project-tags` with `.tag` spans for technologies

### 03 / The Toolkit

- **Section label:** `03 / The Toolkit`; **Heading:** e.g. "Technologies & Practices"
- **Cards:** Each category is a `.skill-card` with:
  - `.skill-icon` (SVG wrapper)
  - `<h3>` (category name, e.g. "Architecture & Orchestration")
  - `<p>` with **Core/Primary/Supporting** and **Strategy/Pipelines** as needed; use `<strong>` for labels

### 04 / Contact

- **Section label:** `04 / Contact`
- **Heading:** e.g. "Ready to cut the noise?"
- **Intro:** One paragraph (availability, type of work)
- **Links:** Same pattern — GitHub, LinkedIn icon links; email in `.contact-email` (e.g. `splotnikov@scuttle.dev` or `mailto:` link). Update hrefs to match source.

### Footer

- Single line: `© 2026 [Name]. Built for performance.` (or current year and preferred tagline)

## Workflow

1. **Locate source:** Prefer `docs/PORTFOLIO.md` or repo root `PORTFOLIO.md`. If user pastes content, treat that as source.
2. **Parse sections:** Identify Hero (title, subtitle, quote, CTAs), 01 Manifesto (heading + bullets), 02 Proof (each case: title + Mess/Solution/Impact), 03 Toolkit (category names + bullet/text), 04 Contact (heading, intro, email/LinkedIn/GitHub), Footer.
3. **Update index.html:** Replace only the text/content inside the existing structure. Do not remove section labels, IDs, or CSS classes. Preserve nav links (`#manifesto`, `#proof`, `#toolkit`, `#contact`), theme toggle, and mobile menu.
4. **Preserve:** CV link target (`cv.html` or `/cv.pdf`), profile image path (`profile.jpg`), any terminal or decorative markup unless user asks to change it.
5. **Verify:** Section order Hero → 01 → 02 → 03 → 04 → Footer; all internal anchors and nav hrefs match.

## Quick Checklist

- [ ] Nav: Manifesto, Proof, Toolkit, Contact (correct anchors)
- [ ] Hero: name, role, blockquote, CV + LinkedIn buttons
- [ ] 01: section-label, h2, manifesto-content with intro + ul
- [ ] 02: section-label, h2, project-cards with h3 + Mess/Solution/Impact + tags
- [ ] 03: section-label, h2, skill-cards with h3 + description
- [ ] 04: section-label, h2, intro paragraph, contact links + email
- [ ] Footer: © year + name + tagline

## Reference

For exact HTML patterns and class names, see [reference.md](reference.md).
