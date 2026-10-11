# Design System: NemesisNet Brand Guide

> **Live parity (verified 2026-10-10):** tokens, buttons, cards, pills, light/dark values, font stack,
> and motion mirror https://nemesisnet.co.za 1:1. Guide-only extras (Aurora/Nemesis `data-style`
> preview overlays, `.btn--aurora`, `.btn--ghost`) are labelled where they appear.

**Project ID:** nemesisnet-brand-guide

## 1. Visual Theme & Atmosphere

A modern, futuristic brand guide with a cyberpunk-inspired aesthetic. The design features glassmorphism effects, glowing accents, and atmospheric backgrounds that create depth and visual hierarchy. The interface balances professional clarity with tech-forward innovation, using subtle animations and layered lighting effects to create an immersive experience.

Three distinct style variants provide flexibility:
- **Aurora:** Purple/violet gradient theme with cyan accents, mystical and energetic
- **Nemesis:** High-contrast dark theme with cyan/magenta dual accent, cyberpunk aesthetic
- **Default:** Clean blue theme with green Aurora accents, professional and approachable

Dual theme support: light and dark modes with carefully tuned contrast ratios.

## 2. Color Palette & Roles

### Core Brand Colors

| Name | Hex | Role |
|------|-----|------|
| Nemesis Blue | `#1E88E5` | Primary brand color, CTAs |
| Nemesis Blue Bright | `#2979FF` | Hover states, active elements |
| Nemesis Blue Deep | `#0f4c81` | Deep accents, shadows |
| Aurora Base | `#00C2A8` | Secondary brand, success states |
| Aurora Flare | `#33D6B7` | Hover for Aurora elements |
| Aurora Ember | `#008B6A` | Deep accent for Aurora |
| Aurora Glow | `rgba(0,194,168,0.12)` | Aurora ambient glow |
| Secondary Accent | `#2979FF` | Secondary actions |
| Secondary Glow | `rgba(41,121,255,0.07)` | Secondary ambient glow |

### Neutral Colors

| Name | Hex | Role |
|------|-----|------|
| Nemesis Gray | `#3b3b3b` | Borders on mid surfaces |
| Nemesis Black | `#0a0e27` | Primary dark, text on light |
| Nemesis White | `#F4F4F4` | Primary light, text on dark |
| Background | dark: radial blues on `#0a0e27` / light: `#F4F4F4 → #f0f6ff → #eaf6ff` | Page canvas |
| Card | `#0f0f10` (dark) / `#fff` (light) | Card base |
| Glass Background | `rgba(255,255,255,0.03)` (dark) / `rgba(255,255,255,0.9)` (light) | Card surfaces, overlays |
| Glass Border | `rgba(255,255,255,0.06)` (dark) / `rgba(41,121,255,0.08)` (light) | Subtle borders |

### Aurora Theme (Dark Mode)

| Name | Hex | Role |
|------|-----|------|
| Aurora Purple | `#7c4dff` | Primary accent |
| Aurora Purple Light | `#b388ff` | Hover states |
| Aurora Cyan | `#00e5ff` | Secondary accent |

### Nemesis Theme (Dark Mode)

| Name | Hex | Role |
|------|-----|------|
| Nemesis Cyan | `#00ffff` | Primary accent (dark) |
| Nemesis Magenta | `#ff0050` | Secondary accent |

### Text Colors

| Name | Hex | Role |
|------|-----|------|
| Text Primary | `#F4F4F4` (dark) / `#0a0e27` (light) | Body text |
| Text Muted | `rgba(244,244,244,0.82)` (dark) / `rgba(26,26,26,0.8)` (light) | Secondary text |

## 3. Typography Rules

**Primary Font Stack (live, system — no webfont):**
```
'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif
```

**Monospace Font Stack:**
```
'Courier New', Courier, monospace (Nemesis theme only)
```

**Heading Styles (live):**
- H1: 3.5rem global (homepage hero 2.4rem, sub-page header 2rem; 2rem mobile), 800, -0.02em letter-spacing, gradient text `linear-gradient(135deg, #fff 0%, accent 100%)` (light: `#1a237e → accent`), lh 1.1
- H2: 2.5rem (2rem mobile), 700, -0.01em, gradient `accent → secondary`, centered, mb 40px
- H3: 1.3rem, 600, accent, centered (cards)

**Body Text (live):**
- Size: 1.05rem (lead/hero-intro, muted, lh 1.8), 0.9rem (card body, muted, lh 1.6)
- Line-height: 1.7 (page)

**Font Weights:**
- Bold/Headings: 700
- Body/UI: 500-600

**Letter-spacing:** 0.02em for navigation/branding

## 4. Component Stylings

### Buttons (live patterns)

**Glass (`.btn-glass` — primary live pattern):**
- Background: `var(--glass-bg)` with `blur(10px)`
- Border: 1px solid `var(--glass-border)`
- Border-radius: 12px, padding: 12px 28px (cards: 10px 16px, 0.85rem/600, width 100%)
- Font-weight 500, font-size 1.1rem, min-width 180px, centered
- Hover: `var(--accent-hover)` bg, `#0a0e27` text, `translateY(-2px)`, `0 8px 24px accent-glow`

**Primary Button (`.btn--primary` — solid):**
- Background: `var(--nemesis-blue)`, color `#0a0e27`
- Border: 1px solid transparent
- Border-radius: 10px
- Padding: 10px 14px, font-weight 700
- Hover: `#2979FF` bg, `translateY(-2px) scale(1.01)`, `0 12px 36px rgba(41,121,255,0.28)`

**Dual Button (`.btn--dual` — gradient):**
- Background: `linear-gradient(90deg, var(--nemesis-blue) 0%, var(--aurora-base) 100%)`
- Border: 0, border-radius 10px, padding 10px 14px, font-weight 700

**Guide-only:** `.btn--aurora` / `.btn--ghost` (translucent) are guide chrome, not live patterns.

**Interactive Behaviors:**
- Hover: translateY(-2px), increased glow
- Focus: 2px outline in `var(--accent-color)`, 2-3px offset

### Cards & Containers (`.component-card`, `.guide-card-sample`)

- Background: `var(--glass-bg)` with `blur(10px)` (dark), `#fff` (light)
- Border: 1px solid `var(--glass-border)`
- Border-radius: 20px
- Shadow: `0 8px 30px rgba(2,6,23,0.36)` (dark), `0 4px 20px rgba(0,0,0,0.08)` (light)
- Padding: 24px internal, flex-column, actions pinned via `margin-top: auto`
- Project images: 100% × 170px, `object-fit: cover`, radius 12px
- Card hover: `translateY(-6px)`, border → `var(--accent-hover)`

### Inputs/Forms

- Font-family: inherit from root
- Background: transparent (styled via parent)
- Border-radius: 12px (theme toggle buttons)

### Navigation (live)

- Height: 68px; container `max-width: 1280px`
- Logo mark 28px + accent drop-shadow; wordmark 1.05rem/700
- Background: `var(--nav-surface)` with blur(18px)
- Border-bottom: 1px solid `var(--nav-border)`
- Box-shadow: `var(--nav-shadow)`

**Nav Links:**
- `min-height: 44px`, padding 10px 16px, 0.9rem/500
- Border-radius: 10px
- Border: 1px solid transparent → `var(--nav-link-hover-border)` on hover
- Active link: solid accent bg + `#0a0e27` text
- Transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1)

### Pills/Chips (live `.pill-*`)

- `inline-block`, padding 4px 12px
- Border-radius: 999px (fully rounded)
- Font-size: 0.7rem, uppercase, letter-spacing 0.5px
- Font-weight: 600, margin-bottom 8px
- Live project pills: `.pill-ai` `#818cf8`, `.pill-saas` `#4ade80`, `.pill-tools` `#facc15`, `.pill-client` `#f472b6` (20% tint bg + 30% border each)

### Style Toggles (`.style-toggle`)

- Min-width: 190px
- Padding: 14px 18px
- Border-radius: 18px
- Display: flex, flex-direction: column
- Gap: 4px between title/description

### Glass Effect (live values)

- Background: `rgba(255, 255, 255, 0.03)` (dark), `rgba(255, 255, 255, 0.9)` (light)
- Border: `rgba(255, 255, 255, 0.06)` (dark), `rgba(41, 121, 255, 0.08)` (light)
- Component blur: `blur(10px)` (cards, buttons); nav `blur(18px)`

## 5. Layout Principles

### Spacing System

| Token | Value |
|-------|-------|
| `--space-xs` | 6px |
| `--space-sm` | 12px |
| `--space-md` | 20px |
| `--space-lg` | 32px |
| `--space-xl` | 48px |

### Container Widths

- Nav width: `min(1280px, calc(100vw - 32px))`, height 68px
- Content/sections: `max-width: 1280px`, padding `60px 20px` (mobile `32px 16px`)
- H1 3.5rem/800 gradient, H2 2.5rem/700 gradient centered mb 40px
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

**Aurora Animation:**
- 18s duration, ease-in-out, infinite alternate
- Subtle scale and opacity shifts

**Nemesis Grain Effect:**
- Repeating linear gradient overlay
- 0.25s infinite animation
- Creates retro-futuristic scanline effect

### Responsive Breakpoints

- Desktop: > 1024px
- Tablet: 834px - 1024px
- Mobile: 640px - 834px
- Small: 520px - 640px
- Extra small: < 375px

### Navigation Behavior

- Fixed top position
- Glassmorphism with backdrop blur
- Mobile: slide-in overlay from right
- Smooth transitions on all interactive elements

## Usage Example

```html
<!-- Navigation -->
<nav class="guide-nav">
  <div class="guide-nav-container">
    <a href="/" class="guide-logo">
      <img src="logo.png" alt="Logo" />
      <span>NemesisNet</span>
    </a>
    <div class="guide-nav-links">
      <a href="#colors">Colors</a>
      <a href="#typography">Typography</a>
      <button class="theme-toggle" aria-label="Toggle theme">
        <span>☀</span>
      </button>
    </div>
  </div>
</nav>

<!-- Hero Section -->
<header class="guide-hero">
  <div class="guide-hero-content">
    <span class="guide-eyebrow">Brand Guidelines</span>
    <h1>NemesisNet Design System</h1>
    <p class="lead">Modern, flexible design tokens for your next project.</p>
    <div class="guide-cta">
      <a href="#colors" class="btn btn--primary">Explore Colors</a>
      <a href="#components" class="btn btn--dual">View Components</a>
    </div>
  </div>
</header>

<!-- Content Section -->
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

## Best Practices

1. **Theme Switching:** `data-theme="light"` on `<html>` for light mode (dark is default). `data-style="aurora|nemesis"` is guide-preview-only; production uses its own display-mode flags.
2. **Glass Effects:** Always pair `--glass-bg` with `--glass-border` for consistent depth
3. **Accent Glows:** Use `var(--accent-glow)` for box-shadows on interactive elements
4. **Animations:** Prefer cubic-bezier(0.4, 0, 0.2, 1) for smooth transitions
5. **Accessibility:** Maintain 4.5:1 contrast ratio for text; use `:focus-visible` for keyboard navigation
6. **Responsive:** Mobile-first approach with fluid grids and clamp() for typography
7. **Safe Areas:** Use env(safe-area-inset-*) for notched devices