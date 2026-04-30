# Design System: NemesisNet (Default)

**Designed by NemesisGuy**

---

A modern, clean brand guide with glassmorphism effects and professional aesthetics.

## 1. Visual Theme & Atmosphere

Clean, professional interface with glassmorphism effects. Balanced between modern tech and approachable design. Supports light/dark mode.

## 2. Color Palette

### Brand Colors
- **Nemesis Blue:** `#1E88E5` — Primary brand, CTAs
- **Nemesis Blue Bright:** `#2979FF` — Hover, active states
- **Nemesis Blue Deep:** `#0f4c81` — Deep accents
- **Aurora Base:** `#00C2A8` — Secondary brand, success
- **Aurora Flare:** `#33D6B7` — Aurora hover
- **Aurora Ember:** `#008B6A` — Deep Aurora accent

### Neutrals
- **Nemesis Black:** `#0a0e27` — Dark backgrounds, light text
- **Nemesis White:** `#F4F4F4` — Light backgrounds, dark text
- **Glass Background:** `rgba(255,255,255,0.03)` — Cards (dark mode)
- **Glass Border:** `rgba(255,255,255,0.06)` — Borders

### Light Mode Overrides
- `--text-color: #0a0e27`
- `--text-muted: rgba(26,26,26,0.78)`
- `--glass-bg: rgba(255,255,255,0.96)`
- `--glass-border: rgba(10,14,39,0.06)`

## 3. Typography

**Primary Font:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

- H1: 3.1rem, -0.02em letter-spacing
- H2: 1.95rem
- H3: 1.3rem
- Body: 1.08rem (lead), 0.94rem
- Line-height: 1.7-1.85

**Weights:** 500 (body), 600 (medium), 700 (headings)

## 4. Component Stylings

### Buttons
- Border-radius: 14px
- Padding: 12px 26px
- Font-weight: 600
- Transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1)

**Primary:**
- Background: `rgba(41, 121, 255, 0.2)`
- Border: `rgba(41, 121, 255, 0.35)`
- Hover: lift 2px, glow shadow

**Aurora:**
- Background: `rgba(0, 194, 168, 0.22)`
- Border: `rgba(0, 194, 168, 0.32)`

**Ghost:**
- Background: `rgba(41, 121, 255, 0.18)`
- Border: `rgba(41, 121, 255, 0.34)`

### Cards
- Border-radius: 18-20px
- Background: `var(--glass-bg)`
- Border: 1px solid `var(--glass-border)`
- Shadow: `0 20px 40px rgba(4, 9, 24, 0.4)`
- Padding: 20px

### Navigation
- Height: 56px
- Fixed top, backdrop-filter: blur(18px)
- Border-bottom: 1px solid
- Links: 6px 10px padding, 10px border-radius

### Pills
- Border-radius: 999px
- Padding: 6px 14px
- Font-size: 0.82rem, weight 600

## 5. Spacing

| Token | Value |
|-------|-------|
| `--space-xs` | 6px |
| `--space-sm` | 12px |
| `--space-md` | 20px |
| `--space-lg` | 32px |
| `--space-xl` | 48px |
| `--ui-radius` | 12px |
| `--radius-base` | 20px |

## 6. Layout

- Nav max-width: `min(1280px, calc(100vw - 32px))`
- Content max-width: `min(1120px, calc(100vw - 48px))`
- Grid: `repeat(auto-fit, minmax(260px, 1fr))`
- Gap: 18px

## Usage

```html
<!-- Button -->
<a class="btn btn--primary">Action</a>

<!-- Card -->
<div class="component-card">
  <h3>Title</h3>
  <p>Content</p>
</div>

<!-- Theme toggle -->
<button class="theme-toggle" data-theme="light">Toggle</button>
```

```css
/* Apply theme */
:root {
  --nemesis-blue: #1E88E5;
  --aurora-base: #00C2A8;
  --nemesis-black: #0a0e27;
  --nemesis-white: #F4F4F4;
  --glass-bg: rgba(255,255,255,0.03);
  --glass-border: rgba(255,255,255,0.06);
  --space-md: 20px;
  --ui-radius: 12px;
}
```