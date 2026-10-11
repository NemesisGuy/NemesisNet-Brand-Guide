---
name: NemesisNet
colors:
  nemesis-blue: '#1E88E5'
  nemesis-blue-bright: '#2979FF'
  nemesis-blue-deep: '#0f4c81'
  aurora-base: '#00C2A8'
  aurora-flare: '#33D6B7'
  aurora-ember: '#008B6A'
  nemesis-gray: '#3B3B3B'
  nemesis-black: '#0a0e27'
  nemesis-white: '#F4F4F4'
  accent: '#1E88E5'
  accent-hover: '#2979FF'
  accent-glow: 'rgba(41,121,255,0.14)'
  secondary-accent: '#2979FF'
  secondary-glow: 'rgba(41,121,255,0.07)'
  text: '#F4F4F4'
  text-muted: 'rgba(244,244,244,0.82)'
  text-light: '#0a0e27'
  text-muted-light: 'rgba(26,26,26,0.80)'
  card: '#0f0f10'
  card-light: '#ffffff'
  glass-bg: 'rgba(255,255,255,0.03)'
  glass-border: 'rgba(255,255,255,0.06)'
  glass-bg-light: 'rgba(255,255,255,0.9)'
  glass-border-light: 'rgba(41,121,255,0.08)'
  footer-link: '#a8d4ff'
  footer-link-hover: '#c7e3ff'
  footer-link-light: '#1a4da6'
  aurora-violet: '#7c4dff'
  aurora-aqua: '#00e5ff'
  nemesis-cyan: '#00ffff'
  nemesis-magenta: '#ff0050'
typography:
  display-hero:
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 56px
    fontWeight: '800'
    lineHeight: 1.1
    letterSpacing: -0.02em
  headline-section:
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 1.2
    letterSpacing: -0.01em
  title-card:
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 20.8px
    fontWeight: '600'
    lineHeight: 1.3
    letterSpacing: '0'
  body-lead:
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 16.8px
    fontWeight: '400'
    lineHeight: 1.8
    letterSpacing: '0'
  body-card:
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 14.4px
    fontWeight: '400'
    lineHeight: 1.6
    letterSpacing: '0'
  label-pill:
    fontFamily: "'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 1.4
    letterSpacing: 0.5px
  mono-nemesis:
    fontFamily: "'Courier New', Courier, monospace"
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 1.7
    letterSpacing: 0.2px
rounded:
  sm: 4px
  DEFAULT: 10px
  md: 12px
  lg: 16px
  xl: 20px
  full: 999px
spacing:
  unit: 4px
  xs: 6px
  sm: 12px
  md: 20px
  lg: 32px
  xl: 48px
  section-desktop: 60px 20px
  section-home: 40px 20px
  section-mobile: 40px 16px
  gutter: 20px
  margin-desktop: 32px
  margin-mobile: 16px
---

# Design System: NemesisNet

**Project ID:** nemesisnet-brand-guide

**Source of truth:** https://nemesisnet.co.za — extracted from production source
(`NemesisGuy/nemesisnet`: `assets/css/main.css`, `aurora-mode.css`,
`nemesis-mode.css`, `components/AppHeader.vue`, `PromoBanner.vue`,
`AppFooter.vue`, `layouts/default.vue`, `pages/index.vue`). Verified against
live computed styles and screenshots 2026-10-11.

**Stitch standard:** this file follows the
[DESIGN.md open specification](https://github.com/google-labs-code/design.md)
(YAML frontmatter + editorial sections) so it can be consumed by Stitch and by
coding agents without guessing intent.

> Enforcement test for every decision: *"Does this feel like a serious
> infrastructure platform?"* If flashy, trendy, decorative, or distracting —
> the implementation is wrong.

## Brand & Style

NemesisNet reads as an observability platform and AI control plane: deep-space
navy canvas, engineering blues, glass surfaces, and calm, intentional motion.
The interface balances professional clarity with tech-forward precision —
restrained, cohesive, product-grade. Visual cousins are Linear, Stripe, Vercel,
Warp, and Raycast. It is deliberately NOT a motion-first portfolio: no bounce
easing, no particles, no terminal-typing gimmicks, no cinematic transitions.

Two display modes extend the base without replacing it. **Aurora** is a gentle
violet/aqua veil (mystical, energetic). **Nemesis** is a high-contrast
cyan/magenta terminal mode with monospace type, scanline grain, and anaglyph
headings (cyberpunk, infrastructural). Both are overlays: the base system must
read correctly with no mode active.

## Colors

The palette is anchored by **Nemesis Blue** (`#1E88E5`), the primary brand and
CTA color, with **Nemesis Bright** (`#2979FF`) reserved for hover and emphasis
and **Nemesis Deep** (`#0f4c81`) for depth. **Aurora Teal** (`#00C2A8`) is the
secondary brand — success states, alternate accents — stepping up to **Aurora
Flare** (`#33D6B7`) on hover and down to **Aurora Ember** (`#008B6A`) for deep
accents. Neutrals are cool: **Nemesis Black** (`#0a0e27`) canvas, **Nemesis
White** (`#F4F4F4`) text, **Nemesis Gray** (`#3B3B3B`) for mid-surface borders.

Text hierarchy is strict two-step: full-strength text, then muted at 82%
(dark) / 80%-black (light) — never a third gray. Links outside buttons resolve
to **Secondary Accent** (`#2979FF`), turning primary on hover. Footer links use
their own readable sky (`#a8d4ff → #c7e3ff`; light `#1a4da6 → #12397d`).

Functional pills are tint-on-tint: each project/tag pill pairs a 20%-alpha
background with a 30%-alpha border in the same hue (indigo, green, yellow,
pink, purple, blue). Status is carried by hue + uppercase label, never color
alone.

## Typography

The typeface is the system stack — `'Segoe UI', -apple-system,
BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif` — with no webfont
dependency, except Nemesis mode which switches everything to `Courier New`
monospace (+0.2px tracking) for its terminal character.

Display type is gradient-filled text, not solid color: H1 runs white into
accent (`135deg, #fff → accent`; light: `#1a237e → accent`), section H2 runs
accent into secondary. Headings use tight negative tracking (-0.02em display,
-0.01em sections) while body and labels stay at zero (pills add +0.5px with
uppercase). Line-height is generous for reading (1.8 lead, 1.6 card body, 1.7
page) and tight for display (1.1 hero). Scroll behavior is explicitly `auto` —
no smooth scrolling. Page rhythm: H1 3.5rem global (homepage hero scoped to
2.4rem, sub-page headers 2rem, 2rem on mobile), H2 2.5rem with 40px bottom
margin (2rem/32px mobile), card titles 1.3rem semibold accent-centered.

## Layout & Spacing

A centered flex-column system: sections cap at `1280px` with `60px 20px`
padding globally, while homepage sections (`#services #projects #testimonials
#cta #contact #lab`) use tighter `40px 20px` (mobile `40px/32px 16px`).
`#services` is the exception — `display: block`, top padding 4px, grids pushed
to 60px top margin. Content sits centered; cards and body copy align left.
The fixed 68px navbar is cleared by `#main { padding-top: 76px }`, extended by
the measured banner height when promotions show
(`calc(76px + var(--banner-h, 43px))`). Base spacing runs 6/12/20/32/48 with a
4px unit. Responsive behavior is desktop-first collapsing: 4→2→1 column grids,
full-width buttons under 640px, 44px minimum touch targets, reduced blur on
small screens, and `content-visibility: auto` on sections for render
performance.

## Elevation & Depth

Depth comes from layered glass, not heavy shadows. Base cards float on a
triple shadow (ambient + contact + faint accent halo) that deepens in dark
mode with 120% saturation; hover lifts 6px (8px in dark) and trades the border
for accent light plus a 60–80px accent aura. Aurora adds a violet card aura;
light mode flattens cards to near-white with a single soft shadow. The footer
is a translucent dark bar (`rgba(8,12,28,0.78)`, blur 10) — never a floating
card. Section headers carry no containers at all: gradient text over the
canvas glow is the elevation.

## Shapes

Corners are disciplined: 12px for glass buttons and tiles, 10px for solid
buttons/nav controls/inputs, 16px for lab/testimonial/policy tiles, 20px for
cards and hero tags, pills fully round. The hero mark is a perfect circle with
a 4px rim and accent halo. Nothing else is circular; nothing is sharp-edged
except 4px promo badges and 8px skill tags. Radius communicates function —
same action, same radius, every page.

## Components

### Navbar (`AppHeader.vue`)

Fixed glass bar (`blur(20px)`, no shadow until scrolled, then near-opaque
`rgba(10,14,39,0.95)` + drop shadow; light: white gradient + faint accent
rim). 68px tall, 1280px container, 28px glowing logo mark + 1.05rem bold
wordmark. Links (Services, Projects, About, Testimonials, Contact, external
Blog) are 44px-tall, `10px 16px`, 0.9rem medium, radius 10 — glass on hover,
solid accent with dark text when active. Three glyph toggles follow: Aurora
✦, Nemesis ⚙, theme ☾/☀ (crescent shows in dark, sun in light). Mobile
collapses to a 44px hamburger opening a glass dropdown panel with a focus
trap, dimming overlay, Escape-to-close, and scroll lock. Theme state persists
in `localStorage` (`theme`/`aurora`/`nemesis`, dark default, no OS sniffing).

### Promo Banner (`PromoBanner.vue`)

Fixed directly under the nav (`top: 68px`, z-index 9999) in a faint cyan wash
(`rgba(0,255,255,0.04)`, blur 20, cyan hairline). Uppercase accent badge,
0.9rem message, underlined accent link (white on hover), muted × dismiss.
Dismissal persists (`promo-dismissed`), height is published as `--banner-h`
via ResizeObserver so page offset stays exact, and the layout compacts under
600px.

### Hero

Full-viewport centered flex (`60px 20px 50px`, `blur(20px)` wash, 30% accent
radial glow). Circular avatar mark (350px base, 320px homepage, 80px mobile)
with luminous rim and accent halo that intensifies on hover. Gradient H1,
muted 1.3rem subtitle, left-aligned 1.05rem intro, wrapping glass tags,
then glass CTAs (`min-width: 180px`, primary in solid accent) and a scroll
chevron. Mobile stacks everything full-width at reduced scale without blur.

### Buttons

One glass family: 12px radius, `12px 28px`, medium 1.1rem, `min-width: 180px`,
accent fill lifting 2px on hover (`.btn/.btn-glass/.btn-hero`,
`card-links` at full-width 0.85rem semibold, `contact-links` in accent text,
`cta-primary/secondary` at `14px 32px`). Solid variants for emphasis:
primary blue, blue→teal dual gradient, teal ignite — all 10px radius, bold,
scaling 1.01 on hover. Small generic `.btn`, block, disabled, and quick-link
modifiers cover the rest. Focus is always a 2px accent ring.

### Cards & Grids

Glass cards (20px, 24px padding, left-aligned, column layout, actions pinned
to the bottom): deep triple shadow in dark, flat white in light, image
banners at 170px with cover fit and hover zoom, accent-centered titles,
muted 0.9rem bodies, hover brightening all text to full strength. Services
lay out flex (25% → 50% → stacked, buttons bottom-pinned); projects grid
4→2→1 with vertical link stacks; pricing tiers, process steps, policy blocks,
stat tiles, and 4-column service docs follow the same glass grammar with
left-edge color coding for tiers.

### Pills & Tags

Base pill: inline-block, `4px 12px`, fully round, 0.75rem semibold uppercase
(+0.5px tracking). Homepage scopes project pills to 0.7rem. Tints encode
meaning (SaaS green, Enterprise pink, AI indigo, Tooling yellow, language
purple, DB blue). Hero tags stay sentence-case at 0.85rem in glass 20px
shells; skill tags (8px radius) invert to accent on hover; stack tags are
quiet 0.9rem glass chips.

### Lab, Testimonials, Contact, CTA

Lab cards (16px, 24px, column, −4px hover with accent border) pair bold
1.05rem titles with muted 0.9rem standfirsts in a 3→1 grid. Testimonials use
auto-fit 300px cards with name/role header, italic quote filling the flex
space, and an accent project link pinned to the bottom. Contact centers a
700px column of accent text links, a message CTA, and a quiet availability
note. CTA sections pair the 2.5rem gradient header with a one-line teaser
and centered button row.

### Footer (`AppFooter.vue`)

Full-bleed translucent bar (dark `#080c1cc7`-equivalent + blur; light white),
never a card: 4-column link grid (Business, Promotions, Legal, Links) with
uppercase accent headings and sky links that grow an underline on hover,
a 0.72rem centered disclaimer, then the attribution line —
`© {Month} {Year} NemesisNet | Cape Town | remote | Built by NemesisGuy |
Powered by NemesisNet.co.za | rights | v{buildId}` — collapsing to one
column on mobile.

### Inputs & Forms

Chat-grade inputs: glass wash, hairline accent-tinted border, 12px radius,
`10px 14px` padding, 0.88rem text, with a 2px accent halo on focus and a
solid accent send button that scales on hover. Global rule: every focusable
element takes a 2px accent outline (3px offset on buttons). Disabled controls
fade without shadows in both themes.

### Page Archetypes

Homepage owns the full hero and layered sections. Sub-pages open with a
compact `PageHeader` (2rem title) and concise intros. Project pages run
Overview → Architecture → Stack → Links → Related; service pages run Problem
→ Capability → Process → Deliverables → Related → CTA. Legal/policy content
uses narrow glass blocks with accent subheads.

## Theme & Display Modes

Dark is the default and the absence of `data-theme` (light sets
`data-theme="light"`); the theme glyph shows ☾ in dark, ☀ in light, and all
three choices persist in `localStorage` with zero OS sniffing. Aurora
(`data-aurora="on"`) re-tints to violet `#7c4dff` + aqua `#00e5ff` with an
18s animated veil, glowing headings, and violet nav/card auras. Nemesis
(`data-nemesis="on"`) goes full terminal: near-black canvas, cyan `#00ffff`
on magenta `#ff0050`, Courier New everywhere, animated scanline grain plus
vignette, anaglyph headings — mutually exclusive with Aurora via the header
toggles, with a dedicated light-mode Nemesis treatment.

## Source Map & Implementation Notes

Upstream: `NemesisGuy/nemesisnet` — `assets/css/main.css` (tokens, base,
nav, hero, buttons, cards, grids, footer, pages, responsive),
`assets/css/aurora-mode.css`, `assets/css/nemesis-mode.css`,
`components/{AppHeader,PromoBanner,AppFooter,PageHeader,ChatWidget}.vue`,
`layouts/default.vue` (skip-link → header → banner → `#main` → footer →
chat), `pages/index.vue` (homepage sections + `lucide-vue-next` service
icons at 24px inside `<ClientOnly>`).

This guide is static (no build step), so three deliberate deltas exist and
are labelled where they appear: display modes preview through `data-style`
instead of the production `data-aurora/data-nemesis` flags; icons ship as
inlined outline SVG (production renders `lucide-vue-next` client-side);
page footers carry a static version stamp instead of the build id. Everything
else — tokens, metrics, states, motion (`0.3s`/`cubic-bezier(0.4,0,0.2,1)`
buttons, `0.36s` cards), breakpoints (1100/900/768/600/520/375), radii,
and copy patterns — mirrors production exactly.

Accessibility contract: 4.5:1 body contrast, visible focus everywhere,
44px touch targets, sequential headings, descriptive alt text, full keyboard
operation including trapped mobile nav, `prefers-reduced-motion` support.
Copy rule: the stronger the UI, the less text — concise, structured,
outcome-led.
