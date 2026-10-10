# Design System: NemesisNet (Default)

> **Live parity (verified 2026-10-10):** mirrors https://nemesisnet.co.za 1:1.

**Designed by NemesisGuy** — [NemesisNet](https://nemesisnet.co.za)

**Designed by NemesisGuy** — [NemesisNet](https://nemesisnet.co.za)

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
- **Nemesis Gray:** `#3b3b3b` — Borders on mid surfaces
- **Nemesis Black:** `#0a0e27` — Dark backgrounds, light text
- **Nemesis White:** `#F4F4F4` — Light backgrounds, dark text
- **Glass Background:** `rgba(255,255,255,0.03)` dark / `rgba(255,255,255,0.9)` light — Cards
- **Glass Border:** `rgba(255,255,255,0.06)` dark / `rgba(41,121,255,0.08)` light — Borders
- **Text Muted:** `rgba(244,244,244,0.82)` dark / `rgba(26,26,26,0.8)` light

### Light Mode Overrides
- `--text-color: #0a0e27`
- `--text-muted: rgba(26,26,26,0.8)`
- `--glass-bg: rgba(255,255,255,0.9)`
- `--glass-border: rgba(41,121,255,0.08)`
- `--card: #ffffff`, `--card-bg: rgba(26,26,26,0.04)`, `--card-border: rgba(26,26,26,0.06)`

## 3. Typography

**Primary Font (live, system — no webfont):** `'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif`

- H1: 3.1rem, -0.02em letter-spacing
- H2: 1.95rem
- H3: 1.3rem
- Body: 1.08rem (lead), 0.94rem
- Line-height: 1.7-1.85

**Weights:** 500 (body), 600 (medium), 700 (headings)

## 4. Component Stylings

### Buttons (live)
- Glass (primary pattern): radius 12px, padding 12px 28px, weight 500, hover `var(--accent-hover)` + `#0a0e27` text + lift 2px
- Primary (solid): `var(--nemesis-blue)`, radius 10px, padding 10px 14px, weight 700
- Dual (gradient): `var(--nemesis-blue)` → `var(--aurora-base)`, radius 10px
- Transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1); cards 0.36s

### Cards (live)
- Border-radius: 20px
- Background: `var(--glass-bg)` with `blur(10px)` (dark), `#fff` (light)
- Border: 1px solid `var(--glass-border)`
- Shadow: `0 8px 30px rgba(2,6,23,0.36)` (dark), `0 4px 20px rgba(0,0,0,0.08)` (light)
- Padding: 24px, flex-column, actions pinned via `margin-top: auto`
- Hover: `translateY(-6px)`, border → `var(--accent-hover)`

### Pills (live)
- `.pill-ai` `#818cf8`, `.pill-saas` `#4ade80`, `.pill-tools` `#facc15`, `.pill-client` `#f472b6`
- Radius 999px, padding 6px 14px, 0.82rem/600

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