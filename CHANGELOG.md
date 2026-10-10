# Changelog

All notable changes to this project will be documented in this file.

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