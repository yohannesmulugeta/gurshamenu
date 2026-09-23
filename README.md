# GurshaMenu

GurshaMenu is a separate restaurant-tech brand and website built alongside the existing Menu-Go prototype.

## Positioning

**Your menu. Always fresh.**

GurshaMenu helps restaurants maintain a modern QR menu without reprinting whenever prices, availability, photos or restaurant information changes.

## Current architecture

- This repository: GurshaMenu brand + commercial marketing website.
- Existing Menu-Go repository: working product prototype, Abol Coffee demo, manager preview, admin preview and Supabase-backed application.
- The Menu-Go repository has **not** been deleted or replaced.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

The repository includes a GitHub Pages workflow and uses the Vite base path `/gurshamenu/`.

## Next product phase

After the GurshaMenu visual direction is approved, the working application/authentication can be migrated into this repository in a controlled phase without breaking the existing Menu-Go deployment or its current QR links.
