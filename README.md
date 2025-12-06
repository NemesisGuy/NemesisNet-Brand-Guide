# NemesisNet Brand Guide

A production-aligned HTML brand system for NemesisNet. This repo mirrors the live site container so designers and engineers can review tokens, components, accessibility rules, and implementation guidance.

## Structure

```
└─ NemesisNet-Brand-Guide
   ├─ src/                # Source HTML + tokens
   │  ├─ index.html
   │  └─ brand-tokens.css
   ├─ public/
   │  └─ assets/          # Logos, imagery, supporting static files
   ├─ docs/
   │  ├─ index-legacy.html
   │  └─ index-legacy-v2.html
   ├─ Dockerfile          # nginx-based static image
   ├─ nginx.conf          # custom headers + caching
   ├─ docker-compose.yml  # optional local orchestration
   └─ README.docker.md    # container-specific instructions
```

## Local Development

1. Open the repo in VS Code or your editor of choice.
2. Use a static server (e.g., `npx serve src`, `python -m http.server`) to preview `src/index.html` so local fonts + storage work.
3. Toggle Base / Nemesis / Aurora themes and light/dark mode to validate tokens visually.

## Building & Deployment

- **Docker (local quick build):** `docker build -t nemesisnet-brand-guide:latest .`
- **Run locally:** `docker run --rm -p 8080:80 nemesisnet-brand-guide:latest`
- **WSL no-cache build + push (Docker Hub):**
   - `wsl docker build --no-cache -t nemesisguy/nemesisnet-brand-guide:latest .`
   - `wsl docker push nemesisguy/nemesisnet-brand-guide:latest`
- The container uses `nginx.conf` to add security headers and caching policies.

## Mobile & Responsive Notes

- Navigation drawer is a full-screen overlay on widths ≤1024px; it locks page scroll when open and stacks links vertically to avoid horizontal scrolling.
- Hero/buttons/grids collapse to single-column layouts below ~720px; long file names (logo assets, code blocks) break words to prevent overflow on narrow devices (e.g., iPhone SE).
- If you add new sections with long tokens/URLs, wrap them in `<code>` and prefer `word-break: break-word` in supporting CSS.

## Contributing

- Keep `src/index.html` as the source of truth. All CSS tokens, JS logic, and accessibility notes live there.
- Place new assets in `public/assets/` and reference them with relative paths.
- Use the optimized outputs in `public/assets/optimized/` (PNG @128/@256/@384 + WebP) when embedding logos; wire them via `srcset` for HiDPI support.
- If you modify Docker setup or nginx config, update `README.docker.md`.
- Use meaningful commit messages (`feat:`, `fix:`, `chore:`) and run `docker build` before pushing to ensure deployability.

## Related Projects

- **[NemesisNet VSCode Themes](https://github.com/NemesisGuy/NemesisNet-VSCode-Themes)** - Official VSCode theme with 6 variants (Base, Nemesis, Aurora in dark/light) built from this brand guide's color tokens
- **NemesisNet WordPress Theme** - A custom WordPress theme located in `NemesisNet-Theme/` that implements this brand guide's design system with glassmorphism effects, dark/light mode toggle, and responsive mobile menu

## WordPress Theme Setup

The NemesisNet WordPress theme is included in this repository at `NemesisNet-Theme/`.

### Installation

1. Compress the `NemesisNet-Theme` folder into a ZIP file (or use the provided `NemesisNet-Theme.zip`)
2. In WordPress admin, go to **Appearance → Themes → Add New → Upload Theme**
3. Upload the ZIP file and activate the theme

### Adding Analytics (Umami)

The theme includes built-in support for Umami analytics. **Your analytics are NOT included by default** - you need to configure your own:

1. Go to **Appearance → Customize → Analytics Settings**
2. Enter your **Umami Website ID** (the UUID from your Umami dashboard)
3. Enter your **Umami Script URL** (e.g., `https://analytics.yourdomain.com/script.js`)
4. Click **Publish** to save

The theme will only add tracking if you've configured both fields. No tracking happens by default, ensuring user privacy.

## Additional Docs

See `docs/` for legacy snapshots and historical references. Add more documents (e.g., `docs/brand-guidelines.md`) as policies evolve.
