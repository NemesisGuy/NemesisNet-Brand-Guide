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

- **Docker:** `docker build -t nemesisnet-brand-guide:latest .`
- **Run locally:** `docker run --rm -p 8080:80 nemesisnet-brand-guide:latest`
- The container uses `nginx.conf` to add security headers and caching policies.

## Contributing

- Keep `src/index.html` as the source of truth. All CSS tokens, JS logic, and accessibility notes live there.
- Place new assets in `public/assets/` and reference them with relative paths.
- Use the optimized outputs in `public/assets/optimized/` (PNG @128/@256/@384 + WebP) when embedding logos; wire them via `srcset` for HiDPI support.
- If you modify Docker setup or nginx config, update `README.docker.md`.
- Use meaningful commit messages (`feat:`, `fix:`, `chore:`) and run `docker build` before pushing to ensure deployability.

## Related Projects

- **[NemesisNet VSCode Themes](https://github.com/NemesisGuy/NemesisNet-VSCode-Themes)** - Official VSCode theme with 6 variants (Base, Nemesis, Aurora in dark/light) built from this brand guide's color tokens

## Additional Docs

See `docs/` for legacy snapshots and historical references. Add more documents (e.g., `docs/brand-guidelines.md`) as policies evolve.
