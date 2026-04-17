# Deployment Guide

This document defines the release workflow for NemesisNet Brand Guide, including the staging branch and Docker Hub staging tag for A/B testing.

## Branch Strategy

- `master`: production-ready branch.
- `staging`: pre-production branch for verification and A/B testing.

## Create Staging Branch

```powershell
git branch staging
```

## Standard Staging Release Flow

Run from the repository root.

```powershell
# Create/switch to staging branch
git switch staging 2>$null
if ($LASTEXITCODE -ne 0) { git switch -c staging }

# Stage intended files only (avoid local Lighthouse reports)
git add src/index.html src/sitemap.xml docs/deployment.md README.md README.docker.md

# Commit
git commit -m "docs: add deployment docs and Lighthouse audit"

# Push staging branch
git push -u origin staging
```

## Build And Push Docker Staging Tag

> **Note:** On Windows, always prefix Docker commands with `wsl` to ensure compatibility with Docker Desktop.

```powershell
# Build current code
wsl docker build -t nemesisnet-brand-guide:staging .

# Tag for Docker Hub
wsl docker tag nemesisnet-brand-guide:staging nemesisguy/nemesisnet-brand-guide:staging

# Push staging image
wsl docker push nemesisguy/nemesisnet-brand-guide:staging
```

## Suggested A/B Test Plan

Goal: compare current production (`latest`) against candidate (`staging`) before promoting.

Option A: Host-level split
- Keep production host on `nemesisguy/nemesisnet-brand-guide:latest`.
- Route staging host (for example `staging.nemesisnet.co.za`) to `nemesisguy/nemesisnet-brand-guide:staging`.
- Send controlled traffic (internal + selected users) to staging and measure behavior.

Option B: Time-boxed rollout
- Deploy `staging` image to a temporary environment for 24-72 hours.
- Validate conversion and engagement metrics versus production baseline.
- Promote only if no regression in SEO, navigation, form interactions, and performance.

## Promotion To Production

After A/B test acceptance:

```powershell
# Switch to master
git checkout master

# Merge staging to master
git merge staging

# Push to master
git push origin master

# Build and tag as latest
wsl docker build -t nemesisnet-brand-guide:latest .
wsl docker tag nemesisnet-brand-guide:latest nemesisguy/nemesisnet-brand-guide:latest

# Push latest to Docker Hub
wsl docker push nemesisguy/nemesisnet-brand-guide:latest
```

## Push Both Branches To GitHub

```powershell
git push -u origin master
git push -u origin staging
```

## Quick Reference

### Build & Run

```bash
# Build (WSL)
wsl docker build -t nemesisnet-brand-guide:latest .

# Run (port 80 → host 8080)
wsl docker run -d -p 8080:80 --name nemesis-guide nemesisnet-brand-guide:latest
```

### Lighthouse Audit

```bash
npx lighthouse http://localhost:8080 --output=json --output-path=lighthouse-results.json
```

### Stop & Remove

```bash
wsl docker stop nemesis-guide && wsl docker rm nemesis-guide
```

### Pre-Push Checklist

- Internal anchors navigate correctly (`#services`, `#projects`, `#contact`, legal anchors).
- `robots.txt` and `sitemap.xml` are reachable.
- No accidental artifacts committed (for example Lighthouse JSON outputs).
- Manual smoke test on desktop and mobile viewport.

## Expected Lighthouse Scores

- Performance: 96
- Accessibility: 97
- Best Practices: 100
- SEO: 100

## Notes

- The Dockerfile uses nginx (alpine) and exposes port 80 internally.
- The `nginx.conf` adds security headers and caching policies.
- For custom nginx config (CORS, caching, etc.), edit `nginx.conf` and rebuild.