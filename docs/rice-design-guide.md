# Rice Design Guide — Implementation Changelog

**Branch:** `dev`  
**Tracking:** Changes made to implement NemesisNet v1.0 rice rules

---

## Phase 5 — Visual Parity Pass (2026-10-11)

Verified with real browser screenshots + computed styles, not source fragments.

- Theme init mirrored: default dark, manual toggle, `localStorage`, `data-theme="light"` (was: OS-sniffing → wrong default)
- Hero: avatar ring, tags, compact CTAs; H1/H2 live gradients + sizes + scopes (global 3.5rem / home 2.4rem / page-header 2rem)
- Pills uppercase `.7rem`; nav 68px/logo 28px/links `.9rem`; sections 1280px + `60px 20px`
- Footer = live bar (grid + disclaimer + line), never a card
- Cards/buttons/light-theme values confirmed against live computed styles 1:1

---

Source of truth: https://nemesisnet.co.za (verified 2026-10-10). All values below now match production 1:1.

### Tokens (`src/brand-tokens.css`)
- Added missing live tokens: `--nemesis-gray`, `--aurora-hover`, `--secondary-accent/glow`, `--bg-color/gradient`, `--card*`, `--header-bg`, `--font-stack`, `--radius-base`, motion aliases
- Fixed `--text-muted`: dark `rgba(244,244,244,0.82)`, light `rgba(26,26,26,0.8)` (was triple-mismatched across files)
- Fixed light glass: `rgba(255,255,255,0.9)` + `rgba(41,121,255,0.08)` border
- Font stack: live system stack (Segoe UI…), no webfont dependency

### Components
- Buttons: `.btn-glass` (primary live pattern, 12px/12px-28px/0.3s), `.btn--primary` solid `#1E88E5` (10px radius), `.btn--dual` gradient; `.btn--aurora`/`.btn--ghost` labelled guide-only
- Cards: padding 24px (was 20px), live shadows, 170px project images, links pinned via `margin-top: auto`
- Pills: live `.pill-ai/saas/tools/client` names + colors (replaced invented `--accent/--outline` variants)
- Motion: live `0.3s/0.36s cubic-bezier(0.4,0,0.2,1)` documented; guide chrome keeps 180ms `cubic-bezier(0.16,1,0.3,1)`
- Icons: dropped `unpkg.com/lucide` CDN (violated no-external-URL rule) → dependency-free inline SVG outline + unicode glyphs, matching live

### Docs
- `src/DESIGN.md`, root `DESIGN.md`, `src/DESIGN-portable.md`: tokens, buttons, cards, pills, font, motion, iconography rewritten to live values; guide-only extras explicitly labelled
- `AGENTS.md` hard rules 5–6 corrected (motion, icons)
- `src/index.html`: token block, palette JSON, copyable CSS, hero/pill/card samples, typography note, `data-style` preview-only disclaimer

---

## Phase 3 — Refinement Hardening (2026-05-08)

### CSS Enforcement
- [x] Depth system classes (background/surface/elevated/floating)
- [x] Card alignment enforcement — flex column + button pinned bottom
- [x] Strict spacing rhythm — token-based margin classes
- [x] Glass consistency enforcement
- [x] Button radius standardisation (all 14px)
- [x] Mobile first-class: overflow prevention, full-width buttons, typography scale, card consistency

### DESIGN.md
- Added Section 12: Refinement Spec (v1.0 Hardening)
- Hard rules table (no ad-hoc, tokens-only, component primitives)
- Depth system spec
- Spacing rhythm spec
- Mobile first-class spec
- Content density rule

---

## Phase 2 — Iconography (2026-05-08)

### DESIGN.md
- Added full Iconography System section (v2)
- Lucide = primary, Font Awesome = fallback utility
- Icon rules: functional first, consistency, visual weight, size discipline, motion

### Site Implementation
- Added Lucide CDN (`unpkg.com/lucide@latest`)
- Replaced bare iconography section with 6-card Lucide showcase

---

## Phase 1 — Foundation (2026-04-17)

### DESIGN.md Rewrite
- Rewrote as Stitch-style DESIGN.md (Google standard)
- Merged visual specs with rice philosophy rules
- Added component enforcement, motion system, glass hierarchy, page archetypes, checklist

### CSS Changes
- [x] Unified transition to `180ms cubic-bezier(0.16, 1, 0.3, 1)`
- [x] Added glass hierarchy classes (subtle/default/elevated/overlay)
- [x] Reduced hover lift to max 2px
- [x] Mobile glass blur reduction
- [x] Touch targets enforced at min 44px
