# Circa: letsplaycirca.com

The one-page marketing site for Circa. Vite + React 19 + TypeScript, GSAP for motion.
Deploys to Vercel as a static build.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ locally
npm run lint
```

## Before launch, change these

All in **`src/config/site.ts`**:

- `stores.appStore` / `stores.googlePlay`: the real listing URLs. While `null` the badge shows
  but is not a link, and a line says "Binnenkort in de App Store en Google Play."

Other content: demo rounds and chat in `src/data/demo.ts`, FAQ copy in
`src/sections/FaqSection.tsx`.

## Structure

```
src/
  config/site.ts            links, title, description, nav
  data/                     demo content (all numbers real or computed) + avatar imports
  lib/                      theme store, number formatting, distribution maths
  animation/                GSAP modules (see ANIMATION.md)
  components/
    brand/                  C mark + "irca" lockup (vector, from shared geometry)
    device/IPhone.tsx       CSS iPhone with a live HTML screen
    screens/                in-app screens: group round, duel, group chat
    modes/                  the four mode visuals (+ generated globe paths)
    layout/                 Nav, SectionTransition (the signature curve), Footer
    ui/                     StoreBadges, ThemeToggle, Tight (display full stop fix)
  sections/                 HeroSection, HeroPhone, GameModesSection, SocialGameplaySection,
                            DailyExperienceSection, FaqSection, DownloadSection
public/                     favicon, touch/app icons, OG image, manifest, robots, sitemap
scripts/                    brand/OG/globe/wordmark generators (dev-only)
.claude/skills/             official GSAP skills (greensock/gsap-skills, MIT)
```

## Theme

Dark is the default for every first visit. An inline script in `index.html` sets
`<html data-theme>` from `localStorage['circa-theme']` before first paint, so there is no flash.
The toggle flips the attribute and saves it. Sections declare `scheme-dark`, `scheme-light` or
`scheme-auto` (follows the theme); per-section grounds are CSS variables (`--bg-hero`,
`--bg-modes`…) in `src/styles/tokens.css`, which is also how the curved seams pick their colour.

## Brand assets

- The C + dart mark is rebuilt as vector from the app icon (geometry follows `CircaCMark` in the
  iOS app). Swap in the official 1024 px icon if it changes: `public/app-icon.svg` is the source
  for the favicons, `node scripts/build-brand.ts` regenerates the SVGs and
  `node scripts/render-pngs.mjs` / `node scripts/render-og.mjs` the rasters (dev-only tools:
  `sharp`, `playwright`).
- "irca" is outlined from Baloo 2 ExtraBold, the app's wordmark face (`scripts/wordmark.py`).
- Avatars are the app's bot avatars, re-encoded to 128 px WebP.

## Deploy

Vercel picks up `vercel.json` (framework Vite, output `dist`, long-cache headers for hashed
assets). Point `letsplaycirca.com` at the project in Vercel.
# CircaWebsite
