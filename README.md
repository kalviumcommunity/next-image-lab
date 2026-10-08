# next/image practice lab

Focused practice for Image Optimization with next/image. Next.js 15 + React 19. This project runs a Next.js server with its default image optimizer enabled, unlike the static-export NextBites reference.

## Open in a cloud code sandbox

https://codesandbox.io/p/github/kalviumcommunity/next-image-lab/main

Open `app/page.jsx`. If prompted, fork the project, install dependencies and run `npm run dev`. Open port 3000 preview. Browser login/startup may be required; use local setup if cloud startup fails.

## Reliable local setup

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

Use DevTools Network → Img, disable cache and reload for comparable requests. Exact bytes depend on output width, format and quality; score improvements are not guaranteed. Cloud previews may require opening their preview URL in a separate tab for DevTools.

Photo source: https://unsplash.com/photos/cdd812d0e601 (image service identifier: photo-1473093295043-cdd812d0e601). Original fetched from images.unsplash.com; Unsplash license: https://unsplash.com/license. Prepared teaching images are included locally to avoid remotePatterns setup debt.
