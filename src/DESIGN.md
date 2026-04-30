# Design System: NemesisNet Brand Guide

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

### Neutral Colors

| Name | Hex | Role |
|------|-----|------|
| Nemesis Black | `#0a0e27` | Primary dark, text on light |
| Nemesis White | `#F4F4F4` | Primary light, text on dark |
| Glass Background | `rgba(255,255,255,0.03)` | Card surfaces, overlays |
| Glass Border | `rgba(255,255,255,0.06)` | Subtle borders |

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
| Text Primary | `#F4F4F4` | Body text (dark mode) |
| Text Muted | `rgba(244,244,244,0.82)` | Secondary text |
| Text Primary Light | `#0a0e27` | Body text (light mode) |

## 3. Typography Rules

**Primary Font Stack:**
```
'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
```

**Monospace Font Stack:**
```
'Courier New', Courier, monospace (Nemesis theme only)
```

**Heading Styles:**
- H1: 3.1rem, -0.02em letter-spacing, gradient text fill
- H2: 1.95rem, -0.01em letter-spacing
- H3: 1.3rem

**Body Text:**
- Size: 1.08rem (lead), 0.94rem (body)
- Line-height: 1.85 (lead), 1.7 (body)

**Font Weights:**
- Bold/Headings: 700
- Body/UI: 500-600

**Letter-spacing:** 0.02em for navigation/branding

## 4. Component Stylings

### Buttons

**Primary Button (`.btn--primary`):**
- Background: `rgba(41, 121, 255, 0.2)` → `var(--accent-hover)`
- Border: 1px solid `rgba(41, 121, 255, 0.35)`
- Border-radius: 14px
- Padding: 12px 26px
- Shadow: `0 18px 42px rgba(41, 121, 255, 0.28)`
- Hover: lift 2px, increased shadow glow

**Aurora Button (`.btn--aurora`):**
- Background: `rgba(0, 194, 168, 0.22)` → gradient
- Border: 1px solid `rgba(0, 194, 168, 0.32)`
- Shadow: `0 18px 42px rgba(0, 194, 168, 0.26)`

**Ghost Button (`.btn--ghost`):**
- Semi-transparent background with border
- Higher contrast on hover

**Interactive Behaviors:**
- Hover: translateY(-2px), increased glow
- Focus: 2px outline in `var(--aurora-base)`, 3px offset

### Cards & Containers (`.component-card`, `.guide-card-sample`)

- Background: `var(--glass-bg)` (semi-transparent)
- Border: 1px solid `var(--glass-border)`
- Border-radius: 18px (cards), 16px (samples)
- Shadow: `0 20px 40px rgba(4, 9, 24, 0.4)`
- Padding: 20px internal

### Inputs/Forms

- Font-family: inherit from root
- Background: transparent (styled via parent)
- Border-radius: 12px (theme toggle buttons)

### Navigation (`.guide-nav`)

- Height: 56px
- Background: `var(--nav-surface)` with blur(18px)
- Border-bottom: 1px solid `var(--nav-border)`
- Box-shadow: `var(--nav-shadow)`

**Nav Links:**
- Padding: 6px 10px
- Border-radius: 10px
- Border: 1px solid transparent → `var(--nav-link-hover-border)` on hover
- Transition: 0.28s cubic-bezier(0.4, 0, 0.2, 1)

### Pills/Chips (`.pill`)

- Padding: 6px 14px
- Border-radius: 999px (fully rounded)
- Font-size: 0.82rem
- Font-weight: 600
- Border: 1px solid `var(--glass-border)`

### Style Toggles (`.style-toggle`)

- Min-width: 190px
- Padding: 14px 18px
- Border-radius: 18px
- Display: flex, flex-direction: column
- Gap: 4px between title/description

### Glass Effect

- Background: `rgba(255, 255, 255, 0.03)` (dark), `rgba(255, 255, 255, 0.96)` (light)
- Border: `rgba(255, 255, 255, 0.06)` (dark), `rgba(10, 14, 39, 0.06)` (light)

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

- Nav width: `min(1280px, calc(100vw - 32px))`
- Content width: `min(1120px, calc(100vw - 48px))`
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
      <a href="#components" class="btn btn--aurora">View Components</a>
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

1. **Theme Switching:** Use `data-theme="light"` and `data-style="aurora|nemesis"` attributes on the `<html>` element
2. **Glass Effects:** Always pair `--glass-bg` with `--glass-border` for consistent depth
3. **Accent Glows:** Use `var(--accent-glow)` for box-shadows on interactive elements
4. **Animations:** Prefer cubic-bezier(0.4, 0, 0.2, 1) for smooth transitions
5. **Accessibility:** Maintain 4.5:1 contrast ratio for text; use `:focus-visible` for keyboard navigation
6. **Responsive:** Mobile-first approach with fluid grids and clamp() for typography
7. **Safe Areas:** Use env(safe-area-inset-*) for notched devices