# Docker: Build & Run (NemesisNet Brand Guide)

This repository contains a static HTML brand guide and an `assets/` folder.
The included `Dockerfile` uses nginx (alpine) to serve the site as a static site.

## Build (PowerShell)

```powershell
# Run from repository root
docker build -t nemesisnet-brand-guide:latest .
```

## Run (PowerShell)

```powershell
# Exposes container port 80 on host port 8080
docker run --rm -p 8080:80 nemesisnet-brand-guide:latest
```

Then open http://localhost:8080 in your browser.

## Notes
- The Dockerfile copies `nemesis_net_brand_guide_html_version.html` to `/usr/share/nginx/html/index.html` so nginx serves it as the site root.
- If you need a custom nginx config (CORS, caching, etc.) we can add an `nginx.conf` and copy it into `/etc/nginx/conf.d/`.
