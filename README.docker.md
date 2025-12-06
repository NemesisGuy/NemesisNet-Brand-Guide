# Docker: Build & Run (NemesisNet Brand Guide)

This repository contains a static HTML brand guide (under `src/`) and an `assets/` folder (under `public/`).
The included `Dockerfile` uses nginx (alpine) to serve the site as a static site.

## Build (PowerShell)

```powershell
# Run from repository root
docker build -t nemesisnet-brand-guide:latest .
```

### Build (WSL, no cache, Docker Hub tag)

```bash
# From repository root
wsl docker build --no-cache -t nemesisguy/nemesisnet-brand-guide:latest .
```

## Run (PowerShell)

```powershell
# Exposes container port 80 on host port 8080
docker run --rm -p 8080:80 nemesisnet-brand-guide:latest
```

Then open http://localhost:8080 in your browser.

## Push to Docker Hub

```bash
wsl docker push nemesisguy/nemesisnet-brand-guide:latest
```

## Notes
- The Dockerfile copies `src/index.html` to `/usr/share/nginx/html/index.html` and `public/assets/` to `/usr/share/nginx/html/assets/`.
- If you need a custom nginx config (CORS, caching, etc.) edit `nginx.conf` and rebuild.
