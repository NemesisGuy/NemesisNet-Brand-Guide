# Rice Design Guide — Implementation Changelog

**Branch:** `dev`  
**Tracking:** Changes made to implement NemesisNet v1.0 rice rules

---

## Phase 2 — Iconography (2026-05-08)

### DESIGN.md
- Added full Iconography System section (v2)
- Lucide = primary, Font Awesome = fallback utility
- Icon rules: functional first, consistency, visual weight, size discipline, motion

### Site Implementation
- Added Lucide CDN (`unpkg.com/lucide@latest`)
- Replaced bare iconography section with 6-card Lucide showcase
- Infrastructure-grade icon demo: CPU, Shield, Monitor, Cloud, Database, Terminal

---

## Phase 1 — Foundation (2026-04-17)

### DESIGN.md Rewrite
- Rewrote as Stitch-style DESIGN.md (Google standard)
- Merged visual specs with rice philosophy rules
- Added component enforcement section
- Added motion system rules (180ms cubic-bezier)
- Added glassmorphism hierarchy levels
- Added page archetypes
- Added implementation checklist

### CSS Changes
- [x] Unified transition to `180ms cubic-bezier(0.16, 1, 0.3, 1)`
- [x] Added glass hierarchy classes (subtle/default/elevated/overlay)
- [x] Reduced hover lift to max 2px (was 3px+)
- [x] Mobile glass blur reduction
- [x] Added staggered reveal delays (60ms)
- [x] Touch targets enforced at min 44px

### HTML Changes
- [x] Added rice philosophy section to brand guide
- [x] Updated download buttons for DESIGN.md

---

## Notes

- Follow the checklist in DESIGN.md before shipping any change
- Every future design decision must pass: "Does this feel like a serious infrastructure platform?"
- Before introducing any icon: verify it passes the infrastructure test
