# Portfolio HTML Structure Reference

## Nav (fixed)

```html
<ul class="nav-links">
  <li><a href="#manifesto">Manifesto</a></li>
  <li><a href="#proof">Proof</a></li>
  <li><a href="#toolkit">Toolkit</a></li>
  <li><a href="#contact">Contact</a></li>
  <!-- theme toggle etc. -->
</ul>
```

## Hero (inside `.hero`)

- `.hero-content` > `.hero-avatar` (or `.hero-avatar-wrap`), then:
- `h1` > `span` (name)
- `p` (role/subtitle)
- `blockquote` (tagline)
- `.hero-buttons` > primary (CV), secondary (LinkedIn)

## 01 Manifesto

- `section#manifesto.section-alt`
- `.container` > `.section-header` > `.section-label` ("01 / The Manifesto") + `h2`
- `.manifesto-content` > `p` + `ul` > `li` (bold label + text)

## 02 Proof

- `section#proof.section-alt`
- `.section-header` > `.section-label` ("02 / Selected Proof") + `h2`
- `.projects-grid` > `.project-card` (repeat) each:
  - `.project-image` (or `.project-image--terminal` + terminal markup)
  - `.project-content` > `h3` + `p` (Mess/Solution/Impact) + `.project-tags` > `.tag`

## 03 Toolkit

- `section#toolkit` (no .section-alt)
- `.section-header` > `.section-label` ("03 / The Toolkit") + `h2`
- `.skills-grid` > `.skill-card` (repeat) each:
  - `.skill-icon` > `svg`
  - `h3` + `p` (use `<strong>` for Core/Primary/Pipelines etc.)

## 04 Contact

- `section#contact`
- `.section-header` > `.section-label` ("04 / Contact") + `h2` + `p` (intro)
- `.contact-content` > `.contact-links` (GitHub, LinkedIn) + `.contact-email` > `a[href="mailto:..."]`

## Footer

- `footer` > `p` (© year Name. Tagline.)

## Key classes (do not remove)

- Section labels: `.section-label`
- Wrappers: `.manifesto-content`, `.container`, `.section-header`
- Cards: `.project-card`, `.project-content`, `.project-tags`, `.tag`; `.skill-card`, `.skill-icon`
- Contact: `.contact-link`, `.contact-email`

## Content-only updates

When syncing from PORTFOLIO.md, replace only text nodes and attribute values (e.g. mailto, link hrefs). Keep all section IDs, classes, and order.
