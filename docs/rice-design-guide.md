# Rice Design Guide — Implementation Changelog

**Branch:** `dev`  
**Tracking:** Changes made to implement NemesisNet v1.0 rice rules

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
- [ ] Unified transition to `180ms cubic-bezier(0.16, 1, 0.3, 1)`
- [ ] Added glass hierarchy classes (subtle/default/elevated/overlay)
- [ ] Reduced hover lift to max 2px (was 3px+)
- [ ] Mobile glass blur reduction
- [ ] Removed forbidden motion patterns
- [ ] Added staggered reveal delays (60ms)
- [ ] Animations set to subtle only (no bounce/spin/exaggerated)
- [ ] Touch targets enforced at min 44px

### HTML Changes
- [ ] Added rice philosophy section to brand guide
- [ ] Updated download buttons for DESIGN.md

---

## Notes

- Follow the checklist in DESIGN.md before shipping any change
- Every future design decision must pass: "Does this feel like a serious infrastructure platform?"
