# NemesisNet Brand Guide

A production-aligned HTML brand system for NemesisNet. This repo mirrors the live site container so designers and engineers can review tokens, components, accessibility rules, and implementation guidance.

## Structure

```
└─ NemesisNet-Brand-Guide
   ├─ src/                # Source HTML + tokens
   │  ├─ index.html
   │  ├─ brand-tokens.css
   │  └─ sitemap.xml
   ├─ public/
   │  └─ assets/          # Logos, imagery
   ├─ css/               # Stylesheets
   ├─ docs/              # Documentation
   │  ├─ deployment.md
   │  ├─ legacy/         # Historical snapshots
   │  ├─ brand-guidelines.md
   │  └─ burger-menu.md
   ├─ tests/             # Test files
   ├─ .github/workflows/ # CI/CD
   ├─ Dockerfile         # nginx-based static image
   ├─ nginx.conf        # custom headers + caching
   └─ README.docker.md
```

## Local Development

1. Open the repo in VS Code or your editor of choice.
2. Use a static server (e.g., `npx serve src`, `python -m http.server`) to preview `src/index.html` so local fonts + storage work.
3. Toggle Base / Nemesis / Aurora themes and light/dark mode to validate tokens visually.

## Frontend Stack Notes

- **Broader NemesisNet stack:** NemesisNet properties are also known to use Bootstrap and Font Awesome where they fit project requirements.
- **Font Awesome:** Included via CDN in `src/index.html` for iconography (`fa-*` classes).
- **Bootstrap framework:** Not used as a dependency in this project. The UI is custom CSS driven by `src/brand-tokens.css` and `css/style.css`.
- **"Bootstrap" wording in docs:** In sections like "Bootstrap new surfaces," it means "initialize with base tokens," not "use Bootstrap CSS framework."

## SEO, Responsive, and Lighthouse

- **SEO basics are in place:** title, description, canonical, Open Graph, Twitter cards, robots, and JSON-LD metadata are included in `src/index.html`.
- **Responsive behavior is implemented:** viewport meta tag, adaptive nav, and mobile breakpoints are already defined in `css/style.css`.
- **Lighthouse should score well** when deployed with compression/caching and optimized assets, but score depends on runtime factors (hosting, network, third-party CDNs, and image weight).
- **Recommended release check:** run Lighthouse on mobile + desktop after each major content/design update and fix any regressions before shipping.

## Building & Deployment

See `docs/deployment.md` for detailed Docker build and run commands.

Quick reference:
- **Build (WSL):** `wsl docker build -t nemesisnet-brand-guide:latest .`
- **Run (WSL):** `wsl docker run -d -p 8080:80 --name nemesis-guide nemesisnet-brand-guide:latest`
- **Push to Docker Hub:** `wsl docker build --no-cache -t nemesisguy/nemesisnet-brand-guide:latest . && wsl docker push nemesisguy/nemesisnet-brand-guide:latest`
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

## Additional Docs

- `docs/deployment.md` - Docker build, run, and Lighthouse commands
- `docs/brand-guidelines.md` - Brand token usage guidelines
- `docs/legacy/` - Historical snapshots

## CI/CD

- GitHub Actions workflows in `.github/workflows/` auto-build and push on push to `master` and `staging` branches.
