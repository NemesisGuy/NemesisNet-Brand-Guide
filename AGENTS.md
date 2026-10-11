# AGENTS.md — NemesisNet Brand Guide

This document defines the agent workflow, processes, and standards for working on the NemesisNet Brand Guide repository.

## Project Overview

**Purpose:** Production design system for NemesisNet — defines visual tokens, component rules, accessibility standards, and implementation guidance.

**Live URL:** `https://brand.nemesisnet.co.za/`

**Tech Stack:**
- Static HTML/CSS (no frameworks)
- nginx (alpine) via Docker
- Vanilla JavaScript only
- CSS custom properties for design tokens

## Repository Structure

```
├── src/
│   ├── index.html          # Main brand guide page
│   ├── DESIGN.md           # Full design system spec (Stitch standard)
│   ├── DESIGN-portable.md  # Base theme only (portable version)
│   ├── brand-tokens.css    # CSS custom properties
│   ├── sitemap.xml         # SEO sitemap
│   └── llms.txt            # AI crawler instructions
├── public/assets/          # Logos, imagery (PNG, ICO, WebP)
├── css/style.css           # All component and layout styles
── docs/
│   ├── deployment.md       # Docker build/run commands
│   ├── rice-design-guide.md # Implementation changelog
│   ── legacy/             # Historical snapshots
├── tests/                  # Test HTML files
├── Dockerfile              # nginx container definition
├── nginx.conf              # Security headers + caching
├── robots.txt              # Crawler directives
└── .github/workflows/      # CI/CD (auto-build on push)
```

## Branch Strategy

| Branch | Purpose | Docker Tag |
|--------|---------|------------|
| `master` | Production-ready | `latest` |
| `staging` | Pre-production / A/B testing | `staging` |
| `dev` | Active development / feature work | `dev` |

### Workflow

1. **Feature work** → commit to `dev`
2. **Ready for review** → merge `dev` → `staging`
3. **Approved** → merge `staging` → `master`
4. Each merge triggers Docker rebuild and push

## Agent Development Process

### 1. Understand Before Changing

- Read relevant files first (HTML, CSS, docs)
- Check existing patterns and conventions
- Verify no breaking changes to existing functionality

### 2. Make Changes

- Edit existing files — never create new ones unless required
- Follow existing code style (2-space indent, LF line endings)
- Keep changes minimal and focused
- Update documentation when code changes

### 3. Verify

- Check for syntax errors
- Verify links and references are correct
- Ensure no hardcoded external URLs (use relative paths)
- Confirm SEO tags point to correct domain

### 4. Commit and Push

```bash
git add -A
git commit -m "type: concise description"
git push origin <branch>
```

**Commit types:** `feat:`, `fix:`, `docs:`, `chore:`, `style:`, `refactor:`

### 5. Build and Deploy

```bash
# Build
wsl docker build --no-cache -t nemesisnet-brand-guide:<tag> .

# Tag for Docker Hub
wsl docker tag nemesisnet-brand-guide:<tag> nemesisguy/nemesisnet-brand-guide:<tag>

# Push
wsl docker push nemesisguy/nemesisnet-brand-guide:<tag>
```

## Design System Rules

### Hard Rules (Never Break)

1. **No ad-hoc styling** — everything uses tokens and components
2. **All spacing uses token classes** — `.section-mt-{xs,sm,md,lg,xl}`
3. **Cards are flex-column** — buttons pinned bottom via `margin-top: auto`
4. **Homepage only** — hero sections allowed only on homepage
5. **Motion matches live** — buttons/links `0.3s`, cards `0.36s`, `cubic-bezier(0.4, 0, 0.2, 1)`; guide chrome (nav/toggles) `180ms cubic-bezier(0.16, 1, 0.3, 1)`
6. **Icons are inline SVG / glyphs** — outline style, consistent stroke width, zero external requests (no icon CDN; live uses unicode glyphs ☰ ✦ ⚙ ☀)

### Enforcement Test

> "Does this feel like a serious infrastructure platform?"

If decorative, inconsistent, playful, or distracting — don't do it.

## SEO Requirements

### Always Verify

- [ ] `robots.txt` allows crawling (`Allow: /`)
- [ ] `sitemap.xml` points to correct domain
- [ ] Canonical URL matches live domain
- [ ] Open Graph tags have correct URLs
- [ ] Twitter Card tags have correct URLs
- [ ] JSON-LD structured data has correct URLs
- [ ] Favicon paths are relative (not external)
- [ ] `llms.txt` exists for AI crawlers

### Domain Consistency

All URLs must use `https://brand.nemesisnet.co.za/` — never `nemesisnet.co.za/brand-guide` or any other variant.

## Quality Checklist

Before pushing any change:

- [ ] No hardcoded external URLs
- [ ] All links use relative paths
- [ ] SEO tags point to correct domain
- [ ] No broken references
- [ ] CSS follows design system rules
- [ ] Mobile responsive (tested at 375px)
- [ ] Accessibility maintained (contrast, focus rings, ARIA)
- [ ] CSS/asset `?v=` query bumped when styles change (nginx caches CSS 7d immutable)
- [ ] Documentation updated if needed

## Docker Notes

- Container uses nginx (alpine) on port 80
- `nginx.conf` adds security headers and caching
- HTML never cached (`no-store`), static assets cached 7-30 days
- Build context includes `src/`, `css/`, `public/assets/`, `robots.txt`

## Documentation Standards

- `DESIGN.md` is the single source of truth (Stitch standard)
- `docs/rice-design-guide.md` tracks implementation changes
- `docs/deployment.md` has build/run commands
- Keep docs in sync with code changes

## Security

- No secrets or credentials in repo
- No API keys in code
- Security headers in `nginx.conf`
- `robots.txt` allows all crawlers (public site)

## Contact

- Owner: NemesisGuy (Peter Buckingham)
- GitHub: https://github.com/NemesisGuy
