# Rice Design Guide — Implementation Changelog

**Branch:** `dev`  
**Tracking:** Changes made to implement NemesisNet v1.0 rice rules

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
