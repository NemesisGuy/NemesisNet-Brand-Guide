# DESIGN.md — NemesisNet Brand System v1.0

**Designed by NemesisGuy** — [NemesisNet](https://nemesisnet.co.za)

**Project ID:** nemesisnet-brand-guide

**Last Updated:** 2026-10-10

> **Live parity:** tokens, buttons, cards, pills, light/dark values, font stack, and motion in this file
> mirror https://nemesisnet.co.za 1:1 (verified 2026-10-10). Where this guide adds preview-only extras
> (Aurora/Nemesis `data-style` overlays, `.btn--aurora`, `.btn--ghost`), they are labelled as guide-only.

---

## Overview

This file is the canonical single source of truth for the NemesisNet design system, following the [Google Stitch DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview) standard. It describes the visual language, component rules, interaction patterns, and implementation philosophy shared across all NemesisNet properties.

Every design decision must pass this test:

> "Does this feel like a serious infrastructure platform?"

If the answer becomes _flashy, trendy, decorative, or distracting_ — the implementation is wrong.

---

## Core Philosophy

NemesisNet UI should feel like:

- An observability platform
- An AI control plane
- An infrastructure dashboard
- A systems engineering environment

**Visual inspiration:** Linear, Stripe, Vercel, Warp, Raycast

**NOT:** Awwwards, Three.js portfolio clones, motion-first websites

**Winning attributes:** restraint, cohesion, engineering clarity, product-grade consistency — not visual excess.

---

## 1. Visual Theme & Atmosphere

A modern, restrained brand guide with glassmorphism effects used to create depth hierarchy — not decoration. The interface balances professional clarity with tech-forward precision.

### Style Variants

Three distinct variants provide controlled flexibility:

- **Default:** Clean blue theme with Aurora teal accents — professional and approachable
- **Nemesis:** High-contrast dark theme with cyan/magenta dual accent
- **Aurora:** Purple/violet gradient theme with cyan accents

All variants support light and dark modes with measured contrast ratios.

### Atmosphere Rules

| Allowed | Forbidden |
|---------|-----------|
| Subtle glow shifts | Matrix rain |
| Cursor-aware lighting (low opacity) | Neon overload |
| Slight blur transitions | Heavy particles |
| Soft section reveals | Exaggerated animations |
| Refined hover interactions | Hacker gimmicks |
| Animated gradient drift | RGB everywhere |
| Layered depth movement | Cinematic transitions |

---

## 2. Design Tokens

### Color Palette

#### Core Brand Colors

| Name | Hex | Role |
|------|-----|------|
| Nemesis Blue | `#1E88E5` | Primary brand, CTAs |
| Nemesis Blue Bright | `#2979FF` | Hover, active states |
| Nemesis Blue Deep | `#0f4c81` | Deep accents, shadows |
| Aurora Base | `#00C2A8` | Secondary brand, success |
| Aurora Flare | `#33D6B7` | Hover for Aurora |
| Aurora Ember | `#008B6A` | Deep accent for Aurora |
| Aurora Glow | `rgba(0,194,168,0.12)` | Aurora ambient glow |
| Aurora Hover | `var(--aurora-flare)` | Aurora hover alias |
| Secondary Accent | `#2979FF` | Secondary actions, hovers |
| Secondary Glow | `rgba(41,121,255,0.07)` | Secondary ambient glow |

#### Neutral Colors

| Name | Hex | Role |
|------|-----|------|
| Nemesis Gray | `#3b3b3b` | Borders on mid surfaces |
| Nemesis Black | `#0a0e27` | Primary dark, text on light |
| Nemesis White | `#F4F4F4` | Primary light, text on dark |
| Background | `var(--bg-gradient)` | Page canvas (dark: radial blues on `#0a0e27`; light: `#F4F4F4 → #f0f6ff → #eaf6ff`) |
| Header | `linear-gradient(135deg, rgba(41,121,255,0.04), rgba(255,111,60,0.03))` | Hero/nav wash |
| Card | `#0f0f10` (dark) / `#fff` (light) | Card base |
| Card Bg | `rgba(255,255,255,0.03)` (dark) / `rgba(26,26,26,0.04)` (light) | Card surface |
| Card Border | `rgba(255,255,255,0.06)` (dark) / `rgba(26,26,26,0.06)` (light) | Card edge |
| Glass Background | `rgba(255,255,255,0.03)` (dark) / `rgba(255,255,255,0.9)` (light) | Card surfaces, overlays |
| Glass Border | `rgba(255,255,255,0.06)` (dark) / `rgba(41,121,255,0.08)` (light) | Subtle borders |

#### Text Colors

| Name | Value | Role |
|------|-------|------|
| Text Primary | `#F4F4F4` (dark) / `#0a0e27` (light) | Body text |
| Text Muted | `rgba(244,244,244,0.82)` (dark) / `rgba(26,26,26,0.8)` (light) | Secondary text |

#### Font Stack (live, system — no webfont)

```
'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif
```

#### Aurora Theme (Dark Mode)

| Name | Hex | Role |
|------|-----|------|
| Aurora Purple | `#7c4dff` | Primary accent |
| Aurora Purple Light | `#b388ff` | Hover |
| Aurora Cyan | `#00e5ff` | Secondary accent |

#### Nemesis Theme (Dark Mode)

| Name | Hex | Role |
|------|-----|------|
| Nemesis Cyan | `#00ffff` | Primary accent |
| Nemesis Magenta | `#ff0050` | Secondary accent |

### Spacing Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | 6px | Tight internal |
| `--space-sm` | 12px | Close grouping |
| `--space-md` | 20px | Standard gap |
| `--space-lg` | 32px | Section spacing |
| `--space-xl` | 48px | Major separation |

**Rule:** All page spacing must use spacing tokens. No manual random spacing.

### Typography

| Level | Size | Letter-spacing | Weight | Use |
|-------|------|---------------|--------|-----|
| H1 | 3.1rem | -0.02em | 700 | Page titles only |
| H2 | 1.95rem | -0.01em | 700 | Section headers |
| H3 | 1.3rem | 0 | 700 | Sub-section headers |
| Lead | 1.08rem | 0 | 500 | Intros |
| Body | 0.94rem | 0 | 500 | Content |
| Small | 0.82rem | 0 | 600 | Labels, chips |

- Line-height: 1.85 (lead), 1.7 (body)
- Font: live system stack (`'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif`) — no webfont dependency
- Typography should feel: operational, technical, modern, readable
- NOT: marketing-heavy, oversized, overly dramatic

---

## 3. Component Rules

### Component Enforcement

All future UI must use shared primitives. Pages must not drift visually.

### Buttons (live patterns — `nemesisnet.co.za`)

**Glass (`.btn-glass` — the primary live pattern, incl. hero "See Our Work" / "Scope Your Project"):**
- Background: `var(--glass-bg)` with `blur(10px)`
- Border: 1px solid `var(--glass-border)`
- Border-radius: 12px
- Padding: 12px 28px, font-weight 500, min-width 180px
- Hover: `var(--accent-hover)` bg, `#0a0e27` text, `translateY(-2px)`, `0 8px 24px var(--accent-glow)`
- Transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`

**Primary (`.btn--primary` — solid):**
- Background: `var(--nemesis-blue)`, color `#0a0e27`
- Border: 1px solid transparent
- Border-radius: 10px
- Padding: 10px 14px, font-weight 700
- Hover: `#2979FF` bg, `translateY(-2px) scale(1.01)`, `0 12px 36px rgba(41,121,255,0.28)`

**Dual (`.btn--dual` — gradient):**
- Background: `linear-gradient(90deg, var(--nemesis-blue) 0%, var(--aurora-base) 100%)`, color `#0a0e27`
- Border: 0, border-radius 10px, padding 10px 14px, font-weight 700

**Guide-only extensions (NOT on the live site):** `.btn--aurora` (translucent teal) and `.btn--ghost`
(translucent blue) exist for guide chrome and secondary actions. Prefer `.btn-glass` for live parity.

**Button Rules:**
- Identical radius system across all variants
- Live timing: 300ms buttons/links, 360ms cards — `cubic-bezier(0.4, 0, 0.2, 1)` (guide chrome uses 180ms `cubic-bezier(0.16, 1, 0.3, 1)`)
- Identical spacing scale
- Identical glass layering logic

### Cards (live `.card` pattern)

**Cards (`.component-card`, `.guide-card-sample`, `.card-surface`):**
- Background: `var(--glass-bg)` with `blur(10px)` (dark), `#fff` (light)
- Border: 1px solid `var(--glass-border)`
- Border-radius: 20px
- Shadow: `0 8px 30px rgba(2,6,23,0.36), 0 2px 8px rgba(0,0,0,0.12)` (dark), `0 4px 20px rgba(0,0,0,0.08)` (light)
- Padding: 24px internal
- Fixed vertical structure, flex-column layout
- Links/actions pinned to bottom using `margin-top: auto` (`card-links`: flex-column, gap 10px, padding-top 18px, links width 95%)
- Project images: 100% width, 170px height, `object-fit: cover`, radius 12px, `scale(1.03)` on card hover
- Card hover: `translateY(-6px)` (up to `-8px` dark) + border brightens to `var(--accent-hover)` + accent glow

### Navigation (`.guide-nav`)
- Height: 56px
- Background: `var(--nav-surface)` with blur(18px)
- Border-bottom: 1px solid `var(--nav-border)`
- Box-shadow: `var(--nav-shadow)`
- Nav Links: padding 6px 10px, border-radius 10px

### Pills/Chips (live `.pill-*`)

- Base `.pill`: padding 6px 14px, border-radius 999px
- Font-size: 0.82rem, font-weight: 600
- Live project pills: `.pill-ai` (indigo `#818cf8`), `.pill-saas` (green `#4ade80`),
  `.pill-tools` (yellow `#facc15`), `.pill-client` (pink `#f472b6`) — each 20% tint bg + 30% border
- Guide-only: `.pill--accent` (solid) and `.pill--outline` (dashed) for guide chrome

### Style Toggles (`.style-toggle`)
- Min-width: 190px, padding: 14px 18px
- Border-radius: 18px, flex column layout

---

## Iconography System

The live site uses **minimal unicode glyphs** (☰ ✦ ⚙ ☀) for nav/toggles and inline imagery — no icon
CDN, no external requests. This guide ships **dependency-free inline SVG outline icons** in the same
spirit (2px stroke, round caps, `currentColor`/accent).

| Layer | System | Role |
|-------|--------|------|
| **Primary** | Inline SVG outline + unicode glyphs | Default UI identity (live parity) |
| **Optional** | Lucide (self-hosted/inlined only) | Only if a glyph is missing — inline the SVG, never add a CDN |
| **Avoid** | Font Awesome / icon CDNs | External requests violate the no-external-URL rule |

### Icon Rules

| Rule | Guideline |
|------|-----------|
| **Functional first** | Icons support meaning, not decoration |
| **Consistency** | Same stroke, weight, style per component |
| **No CDN** | Inline SVG or unicode glyphs only — zero external icon requests |
| **Visual weight** | Icons remain subtle, support typography |
| **Size discipline** | Standard per component, no arbitrary scaling |
| **Motion** | Subtle opacity/color shifts only. No rotation, bounce, morph |

### Enforcement Test

> "Does this icon feel like it belongs in a serious infrastructure system?"

If decorative, inconsistent, playful, or stylistically different — don't use it.

---

## 4. Glassmorphism Hierarchy

Glass creates depth hierarchy — NOT uniform transparency. Foreground surfaces must visually separate from background layers.

| Level | Class | Opacity | Blur | Use |
|-------|-------|---------|------|-----|
| 1 | `glass-subtle` | 0.02 | 8px | Background containers |
| 2 | `glass-default` | 0.03 | 12px | Cards, nav |
| 3 | `glass-elevated` | 0.05 | 18px | Active cards, dialogs |
| 4 | `glass-overlay` | 0.08 | 24px | Modals, overlays |

**Rule:** Avoid random blur values. Each level has a defined purpose.

**Mobile Rule:** Reduce blur intensity, transparency complexity, and layered overlap on screens under 640px.

---

## 5. Motion System

### Philosophy

Motion must feel: calm, intentional, controlled, expensive.

NOT: playful, exaggerated, cinematic.

### Global Transitions

Live components (`nemesisnet.co.za`):

```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); /* buttons, links */
transition: transform 0.36s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.36s ease; /* cards */
```

Guide chrome (nav, toggles, TOC):

```css
transition: all 180ms cubic-bezier(0.16, 1, 0.3, 1);
```

Use the live values for anything that must match production. Never invent a third curve.

### Allowed Motion

| Type | Implementation |
|------|---------------|
| Fade-up | `opacity 0→1`, `translateY(8px→0)` |
| Elevation | Subtle `translateY(-2px)` on hover |
| Opacity shifts | 0.6→1 on section enter |
| Glow transitions | Soft glow increase on hover |
| Staggered reveal | 60ms delay between items |
| Gradient drift | 18s animated gradient |

### Forbidden Motion

| Type | Reason |
|------|--------|
| Bounce easing | Too playful |
| Spin | Distracting |
| Large parallax | Motion-first, not infra-native |
| Exaggerated transforms | Overwhelming |
| Particle systems | Gamer aesthetic |
| Terminal typing spam | Distracting |

### Hover States

- **Buttons:** subtle elevation + border brightness increase + glass surface brightening
- **Cards:** max 2–4px upward movement, soft glow increase, slight border enhancement
- Motion should be barely noticeable but clearly intentional

### Focus States

- 2px outline in `var(--aurora-base)`
- 3px offset
- Use `:focus-visible` for keyboard navigation

---

## 6. Layout Principles

### Container Widths
- Nav: `min(1280px, calc(100vw - 32px))`
- Content: `min(1120px, calc(100vw - 48px))`
- Border radius base: 20px

### Grid Layouts
- Component grid: `repeat(auto-fit, minmax(260px, 1fr))`
- TOC grid: `repeat(auto-fill, minmax(220px, 1fr))`
- Gap: 18px standard

### Background Effects

**Page Glow (Dark Mode):**
```css
radial-gradient(circle at 22% 26%, rgba(255, 0, 80, 0.18), transparent 55%),
radial-gradient(circle at 78% 12%, rgba(0, 255, 255, 0.18), transparent 55%)
```

**Aurora Animation:** 18s duration, ease-in-out, infinite alternate, subtle scale/opacity shifts

**Nemesis Grain:** Repeating linear gradient overlay, 0.25s infinite — retro-futuristic scanline

---

## 7. Page Archetypes

### Homepage
- **Allowed:** Full hero, layered visuals, stronger motion, featured sections
- **Purpose:** Positioning, brand identity, first impression

### Sub-pages
- **Use:** PageHeader only, concise intro, structured sections
- **Purpose:** Information clarity, operational trust

### Project Pages
- **Structure:** Overview → Architecture → Stack → Quick Links → Related → Next
- **Purpose:** Proof of capability

### Service Pages
- **Structure:** Problem → Capability → Process → Deliverables → Related Projects → CTA
- **Purpose:** Conversion + trust

---

## 8. Mobile Responsive (Critical)

### Breakpoints

| Name | Width | Behavior |
|------|-------|----------|
| Desktop | > 1024px | Full layout |
| Tablet | 834px – 1024px | Condensed nav |
| Mobile | 640px – 834px | Stacked |
| Small | 520px – 640px | Single column |
| Extra small | < 375px | Minimal |

### Rules

- Vertical spacing rhythm: use spacing tokens, tested at each breakpoint
- Card stacking: single column below 640px
- Navbar collapse: slide-in overlay ≤ 1024px
- Button widths: 100% on mobile, min-width on desktop
- Text wrapping: `word-break: break-word` on long tokens
- Touch targets: min 44px for interactive elements
- Glass blur: reduce intensity on mobile to prevent muddiness

---

## 9. Accessibility

- Contrast ratio: 4.5:1 minimum for text
- Focus: `:focus-visible` ring, 2px in Aurora color
- ARIA: labels on all interactive elements
- Alt text: descriptive on all imagery
- Heading order: sequential (no skips)
- Lang: `en` on `<html>`
- Safe areas: `env(safe-area-inset-*)` for notched devices

---

## 10. Copy Reduction Rule

The stronger the UI becomes, the less text is required.

- Reduce: repeated explanations, unnecessary filler, stacked descriptive paragraphs
- Prefer: concise clarity, dense meaning, structured information

---

## 11. Implementation Checklist

Before shipping any change:

- [ ] Uses shared primitives (not one-off styles)
- [ ] Spacing uses tokens (no hardcoded px)
- [ ] Motion matches live (0.3s buttons / 0.36s cards, `cubic-bezier(0.4, 0, 0.2, 1)`; guide chrome 180ms `cubic-bezier(0.16, 1, 0.3, 1)`)
- [ ] Glass uses hierarchy levels
- [ ] Mobile tested at all breakpoints
- [ ] Buttons have min 44px touch targets
- [ ] Contrast ratio ≥ 4.5:1
- [ ] Passes: "Does this feel like a serious infrastructure platform?"

---

## 12. Refinement Spec (v1.0 Hardening)

### Critical Objective

The system must become fully component-driven, token-enforced, and reusable across all NemesisNet products (marketing, services, SaaS, AI tooling). It should feel like Stripe / Linear / Vercel — not a visual theme.

### Hard Rules

| Number | Rule |
|--------|------|
| 1 | **No ad-hoc styling** — no page-specific overrides, no one-off button styles, no custom card layouts |
| 2 | **Everything uses tokens** — spacing, colours, radii, shadows all from design tokens |
| 3 | **Component primitives only** — PrimaryButton, SecondaryButton, GhostButton, BaseCard, ServiceCard, ProjectCard, PageHeader, SectionWrapper, Container |
| 4 | **Homepage exception** — hero sections ONLY on homepage. Sub-pages use PageHeader |
| 5 | **Card enforcement** — flex-column structure, button pinned bottom via `margin-top: auto` |

### Depth System

| Level | Class | z-index | Use |
|-------|-------|---------|-----|
| 0 | `depth-background` | 0 | Page background, gradients |
| 1 | `depth-surface` | 1 | Sections, containers |
| 2 | `depth-elevated` | 2 | Cards, interactive surfaces |
| 3 | `depth-floating` | 10 | Modals, overlays, tooltips |

### Spacing Rhythm

All spacing uses token classes: `.section-mt-{xs,sm,md,lg,xl}` / `.section-mb-{xs,sm,md,lg,xl}`. No arbitrary `margin` or `padding` values outside the token scale.

### Mobile First-Class

- No overflow issues, no broken card stacking, no oversized padding
- Buttons full-width with 360px max-width cap
- Typography scales down predictably: h1: 2rem, h2: 1.5rem, h3: 1.15rem
- Cards all single-column, consistent padding

### Content Density

Reduce repeated explanations. Prefer structured bullets over paragraphs. Less text = higher authority.

---

## Usage Example

```html
<nav class="guide-nav">
  <div class="guide-nav-container">
    <a href="/" class="guide-logo">
      <img src="logo.png" alt="Logo" />
      <span>NemesisNet</span>
    </a>
    <div class="guide-nav-links">
      <a href="#colors">Colors</a>
      <a href="#typography">Typography</a>
      <button class="theme-toggle" aria-label="Toggle theme">☀</button>
    </div>
  </div>
</nav>

<header class="guide-hero">
  <div class="guide-hero-content">
    <span class="guide-eyebrow">Brand Guidelines</span>
    <h1>NemesisNet Design System</h1>
    <p class="lead">Modern, restrained design system for infrastructure platforms.</p>
    <div class="guide-cta">
      <a href="#colors" class="btn btn--primary">Explore Colors</a>
      <a href="#components" class="btn btn--dual">View Components</a>
    </div>
  </div>
</header>

<main class="guide-content">
  <section class="guide-section" id="colors">
    <h2>Color Palette</h2>
    <div class="grid">
      <div class="swatch" style="background: #1E88E5">
        <span>Nemesis Blue</span>
        <span class="hex">#1E88E5</span>
      </div>
    </div>
  </section>
</main>
```
