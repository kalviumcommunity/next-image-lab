# next/image practice lab

Focused practice for Image Optimization with next/image. Next.js 15 + React 19. This project runs a Next.js server with its default image optimizer enabled, unlike the static-export NextBites reference.

## Run locally

CodeSandbox repository imports are no longer available. Use local setup below to run actual Next.js and its image optimizer. Open `app/page.jsx` in your editor and keep the browser preview beside it.

Use Node.js 20.9+ (Node 22 LTS recommended):

```bash
git clone https://github.com/kalviumcommunity/next-image-lab.git
cd next-image-lab
npm install
npm run dev
```

Open http://localhost:3000.

## Agenda

1. Change display width without changing source proportions.
2. Compare cover and contain, then change sizes and see that it is not CSS.
3. Compare original/optimized network requests and response Content-Type.
4. Add unoptimized temporarily; observe that automatic optimization is bypassed.

Use DevTools Network → Img, disable cache and reload for comparable requests. Exact bytes depend on output width, format and quality; score improvements are not guaranteed. Use the local browser preview at http://localhost:3000 for DevTools.

Photo source: https://unsplash.com/photos/cdd812d0e601 (image service identifier: photo-1473093295043-cdd812d0e601). Original fetched from images.unsplash.com; Unsplash license: https://unsplash.com/license. Prepared teaching images are included locally to avoid remotePatterns setup debt.
