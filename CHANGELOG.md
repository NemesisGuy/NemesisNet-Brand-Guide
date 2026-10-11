# Changelog

All notable changes to this project will be documented in this file.

## [2026-10-11] - Nav + dark transparency fixes (measured against live render)

### Fixed
- Root cause of "wrong transparency": `body::before`/`body::after` washes used
  `z-index: -1`, which paints *behind* the body background — all washes were
  invisible. Now `z-index: 0/1` like production (aurora veil `0`, nemesis
  grain `1`); nemesis grain now unconditional like production
- Hero mirrors live homepage scope: 320px avatar ring, 2.4rem H1
- Long-page render compensation: viewport-locked `--page-glow` wash so the
  14k-tall guide page renders the same brightness as production's 5k page
  (token *values* unchanged and byte-identical to production)

## [2026-10-11] - Stitch-standard DESIGN.md + source-truth pass

`src/DESIGN.md` rewritten to the Google Stitch DESIGN.md open standard (YAML
`name/colors/typography/rounded/spacing` + editorial sections), extracted from
`NemesisGuy/nemesisnet` source (`main.css`, `aurora/nemesis-mode.css`,
`AppHeader/PromoBanner/AppFooter`, `layouts/default.vue`, `pages/index.vue`).

### Fixed
- Nav: live glass base (no default shadow) + `.scrolled` solidify on scroll,
  light gradient treatment, 28px/24px logo, theme glyphs ☾ dark / ☀ light
- Promo banner documented + live-spec demo sample (was missing entirely)
- Footer line: `© {Month} {Year} NemesisNet` + location segments + version
- Pills base `.75rem`; card dark deepen (-8px, saturated glass, img filters);
  aurora/nemesis overlays set to source values; mono always in nemesis
- Mobile: section `40px 16px`, hero `80px 20px 40px`, avatar 80px, logo 24px
- Service icons: live uses `lucide-vue-next` 24px in `<ClientOnly>` (static
  consumers inline the SVG — no CDN)
- Cache-bust `?v=` on every style change (nginx immutable 7d)

## [2026-10-11] - Visual Parity Pass (verified against live render)

### Fixed
- Theme init: default **dark**, no OS sniffing (guide was rendering light on light-OS browsers; live always defaults dark)
- Hero: avatar ring mark + tags row + compact centered CTAs (was oversized 2-col grid buttons)
- H1 3.5rem/800 gradient `#fff→accent` (light `#1a237e→accent`); H2 2.5rem/700 gradient `accent→secondary` centered mb 40px; documented homepage-2.4rem + page-header-2rem scopes
- Pills `.7rem` uppercase ls `.5px`; hero tags glass 20px/8px-16px/0.85rem
- Nav 68px, logo 28px, links 10px-16px/0.9rem/500; skip-link live pattern
- Sections `max-width: 1280px`, `60px 20px` (mobile `32px 16px`); footer rebuilt as live full-bleed bar (link grid + disclaimer + line)
- Cards: live shadows/hover, titles 1.3rem/600 centered, body 0.9rem; light cards `#fff`
- Buttons base = live glass (12px/12px-28px/500/1.1rem)

## [2026-10-10] - Live Parity Alignment

Source of truth: https://nemesisnet.co.za (verified 2026-10-10).

### Fixed
- Tokens now mirror production 1:1 (added `--nemesis-gray`, `--secondary-*`, `--bg-*`, `--card*`, `--header-bg`, `--font-stack`; fixed `--text-muted` triple-mismatch; fixed light glass values)
- Buttons/cards/pills rewritten to live patterns (`.btn-glass`, solid `.btn--primary`, `.btn--dual`, `.pill-ai/saas/tools/client`, card padding 24px)
- Font stack corrected to live system stack (was: Inter)
- Motion documented per live (`0.3s/0.36s cubic-bezier(0.4,0,0.2,1)`); guide chrome keeps 180ms curve
- Iconography: dropped Lucide CDN (external-URL violation) → inline SVG + unicode glyphs like live
- Guide-only extras (`.btn--aurora`, `.btn--ghost`, `data-style` overlays) explicitly labelled so agents stop copying them as production patterns
- `AGENTS.md` hard rules 5–6 corrected

## [2026-04-17] - Initial Release

### Added
- Full HTML brand guide with accessible tokens
- Theme system (Base, Nemesis, Aurora) with dark/light mode
- Docker container with nginx (alpine)
- robots.txt and sitemap.xml for SEO
- GitHub Actions for CI/CD
- Staging branch for A/B testing

### Lighthouse Scores
- Performance: 96
- Accessibility: 97
- Best Practices: 100
- SEO: 100

## [2026-04-XX] - Unreleased

### Added
- CHANGELOG.md
- .editorconfig
- GitHub Actions workflow

[Keep a bullet-form release log for each deploy]