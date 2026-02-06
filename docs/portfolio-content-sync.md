# Portfolio Content Sync

Guide for syncing the one-page portfolio (`index.html`) with content from a source document (e.g. `docs/PORTFOLIO.md` or `PORTFOLIO.md`). Maps markdown sections to Hero, Manifesto, Proof, Toolkit, Contact, and Footer.

---

## When to Use

- Updating the portfolio or syncing from PORTFOLIO.md
- Refreshing page content
- Adding new copy for hero, manifesto, proof, toolkit, or contact
- Reorganizing content to match the 01–04 section structure

---

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

---

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
- **Links:** GitHub, LinkedIn icon links; email in `.contact-email` (e.g. `splotnikov@scuttle.dev` or `mailto:` link). Update hrefs to match source.

### Footer

- Single line: `© 2026 [Name]. Built for performance.` (or current year and preferred tagline)

---

## Workflow

1. **Locate source:** Prefer `docs/PORTFOLIO.md` or repo root `PORTFOLIO.md`. If user pastes content, treat that as source.
2. **Parse sections:** Identify Hero (title, subtitle, quote, CTAs), 01 Manifesto (heading + bullets), 02 Proof (each case: title + Mess/Solution/Impact), 03 Toolkit (category names + bullet/text), 04 Contact (heading, intro, email/LinkedIn/GitHub), Footer.
3. **Update index.html:** Replace only the text/content inside the existing structure. Do not remove section labels, IDs, or CSS classes. Preserve nav links (`#manifesto`, `#proof`, `#toolkit`, `#contact`), theme toggle, and mobile menu.
4. **Preserve:** CV link target (`cv.html` or `/cv.pdf`), profile image path (`profile.jpg`), any terminal or decorative markup unless user asks to change it.
5. **Verify:** Section order Hero → 01 → 02 → 03 → 04 → Footer; all internal anchors and nav hrefs match.

---

## Quick Checklist

- [ ] Nav: Manifesto, Proof, Toolkit, Contact (correct anchors)
- [ ] Hero: name, role, blockquote, CV + LinkedIn buttons
- [ ] 01: section-label, h2, manifesto-content with intro + ul
- [ ] 02: section-label, h2, project-cards with h3 + Mess/Solution/Impact + tags
- [ ] 03: section-label, h2, skill-cards with h3 + description
- [ ] 04: section-label, h2, intro paragraph, contact links + email
- [ ] Footer: © year + name + tagline

---

## HTML Structure Reference

### Nav (fixed)

```html
<ul class="nav-links">
  <li><a href="#manifesto">Manifesto</a></li>
  <li><a href="#proof">Proof</a></li>
  <li><a href="#toolkit">Toolkit</a></li>
  <li><a href="#contact">Contact</a></li>
  <!-- theme toggle etc. -->
</ul>
```

### Hero (inside `.hero`)

- `.hero-content` > `.hero-avatar` (or `.hero-avatar-wrap`), then:
- `h1` > `span` (name)
- `p` (role/subtitle)
- `blockquote` (tagline)
- `.hero-buttons` > primary (CV), secondary (LinkedIn)

### 01 Manifesto

- `section#manifesto.section-alt`
- `.container` > `.section-header` > `.section-label` ("01 / The Manifesto") + `h2`
- `.manifesto-content` > `p` + `ul` > `li` (bold label + text)

### 02 Proof

- `section#proof.section-alt`
- `.section-header` > `.section-label` ("02 / Selected Proof") + `h2`
- `.projects-grid` > `.project-card` (repeat) each:
  - `.project-image` (or `.project-image--terminal` + terminal markup)
  - `.project-content` > `h3` + `p` (Mess/Solution/Impact) + `.project-tags` > `.tag`

### 03 Toolkit

- `section#toolkit` (no .section-alt)
- `.section-header` > `.section-label` ("03 / The Toolkit") + `h2`
- `.skills-grid` > `.skill-card` (repeat) each:
  - `.skill-icon` > `svg`
  - `h3` + `p` (use `<strong>` for Core/Primary/Pipelines etc.)

### 04 Contact

- `section#contact`
- `.section-header` > `.section-label` ("04 / Contact") + `h2` + `p` (intro)
- `.contact-content` > `.contact-links` (GitHub, LinkedIn) + `.contact-email` > `a[href="mailto:..."]`

### Footer

- `footer` > `p` (© year Name. Tagline.)

### Key classes (do not remove)

- Section labels: `.section-label`
- Wrappers: `.manifesto-content`, `.container`, `.section-header`
- Cards: `.project-card`, `.project-content`, `.project-tags`, `.tag`; `.skill-card`, `.skill-icon`
- Contact: `.contact-link`, `.contact-email`

### Content-only updates

When syncing from PORTFOLIO.md, replace only text nodes and attribute values (e.g. mailto, link hrefs). Keep all section IDs, classes, and order.
