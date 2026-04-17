# Docker: Build & Run (NemesisNet Brand Guide)

This repository contains a static HTML brand guide (under `src/`) and an `assets/` folder (under `public/`).
The included `Dockerfile` uses nginx (alpine) to serve the site as a static site.

## Quick Start

```bash
# Build
wsl docker build -t nemesisnet-brand-guide:latest .

# Run (port 80 → host 8080)
wsl docker run -d -p 8080:80 --name nemesis-guide nemesisnet-brand-guide:latest
```

Then open http://localhost:8080 in your browser.

## Full Documentation

See `docs/deployment.md` for detailed commands including:
- Build and run variants
- Different host ports
- Push to Docker Hub
- Lighthouse audit commands
- Expected scores