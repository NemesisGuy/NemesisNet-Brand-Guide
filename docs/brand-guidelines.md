# Brand Implementation Guidelines

This document supplements `src/index.html` with reference information when integrating NemesisNet branding into other products.

## Themes & Modes
- **Base Theme:** Nemesis blue primary, Aurora teal secondary. Use for most corporate properties.
- **Nemesis Theme:** High-contrast cyan/magenta palette with VHS grain overlay. Represents experimental or flagship experiences.
- **Aurora Theme:** Violet/aqua palette with soft glows. Deploy for lightweight, editorial experiences.
- Light/dark modes are supported for each theme. Nemesis light introduces a neon-on-porcelain palette; Aurora light swaps to glassy whites.

## Tokens
- Token sources live in `src/brand-tokens.css`. Consume them via CSS variables or preprocessors.
- Maintain naming parity (`--nemesis-blue`, `--glass-bg`, etc.) across projects to simplify updates.

## Accessibility
- Minimum contrast ratio: 4.5:1 for body text, 3:1 for large headings.
- Provide focus states on all interactive elements; use `outline` or custom glow for theme alignment.
- All imagery must include descriptive `alt` text; icons conveying meaning need `aria-label` or hidden text.

## Footer Requirement
All NemesisNet-branded surfaces must include the Nemesis footer snippet provided in `src/index.html` (`#footer-guide`). This enforces attribution and legal copy.

## Asset Management
- Place raster/vector assets inside `public/assets/`.
- Use PNG/SVG for UI, ICO for favicons. Keep transparent backgrounds to support glassmorphism surfaces.

## Deployment Notes
- The Docker image uses nginx with security headers (see `nginx.conf`).
- Cache rules: HTML is `no-store`; CSS/JS cached 7 days; images cached 30 days.

For questions, contact the brand team via `hello@nemesisnet.co.za`.
