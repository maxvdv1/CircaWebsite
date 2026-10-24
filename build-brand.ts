/**
 * Writes the static brand files into /public from the same geometry the site uses:
 *   favicon.svg, app-icon.svg (1024 tile), og-image.svg
 * PNG rasters (favicon-32, apple-touch-icon, icon-192/512, og-image.png) are rendered from those
 * SVGs with `node scripts/render-pngs.mjs` (needs `sharp`, dev-only, not a site dependency).
 *
 *   node scripts/build-brand.ts
 */
import { writeFileSync } from 'node:fs'
import { cPath, dartParts, DART_ANGLE, C_INNER } from '../src/components/brand/geometry.ts'
import { IRCA_PATH } from '../src/components/brand/wordmarkPath.ts'

const d = dartParts(1.12)
const defs = `
<linearGradient id="c" x1="0.15" y1="0.05" x2="0.85" y2="0.95"><stop offset="0" stop-color="#fff"/><stop offset="0.55" stop-color="#e6ebff"/><stop offset="1" stop-color="#b9c6ff"/></linearGradient>
<radialGradient id="h" cx="0.5" cy="0.5" r="0.5"><stop offset="0" stop-color="#1d52ea"/><stop offset="1" stop-color="#0f319f"/></radialGradient>
<radialGradient id="b" cx="0.38" cy="0.32" r="0.75"><stop offset="0" stop-color="#8ab6ff"/><stop offset="0.5" stop-color="#3478ff"/><stop offset="1" stop-color="#1e56e6"/></radialGradient>
<linearGradient id="s" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd666"/><stop offset="1" stop-color="#efa02a"/></linearGradient>
<linearGradient id="f" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffcf55"/><stop offset="1" stop-color="#f6b233"/></linearGradient>
<linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f3a82e"/><stop offset="1" stop-color="#e38c16"/></linearGradient>
<radialGradient id="tile" cx="0.3" cy="0.2" r="1"><stop offset="0" stop-color="#2f6bff"/><stop offset="0.6" stop-color="#1846e0"/><stop offset="1" stop-color="#0b2b9e"/></radialGradient>`
const mark = `
<circle cx="50" cy="50" r="${(C_INNER + 0.4).toFixed(2)}" fill="url(#h)"/>
<circle cx="50" cy="50" r="11.5" fill="url(#b)"/>
<path d="${cPath()}" fill="url(#c)" stroke="url(#c)" stroke-width="4.5" stroke-linejoin="round"/>
<g transform="translate(50 50) rotate(${DART_ANGLE})">
<path d="${d.flightTop}" fill="url(#f)"/><path d="${d.flightBottom}" fill="url(#g)"/>
<path d="${d.shaft}" fill="url(#s)"/><path d="${d.barrel}" fill="url(#s)"/><path d="${d.tip}" fill="#e08a12"/>
</g>`
const tile = (size: number) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="${size}" height="${size}"><defs>${defs}</defs><rect width="120" height="120" rx="27" fill="url(#tile)"/><g transform="translate(16 16) scale(0.88)">${mark}</g></svg>`

writeFileSync('public/favicon.svg', tile(64))
writeFileSync('public/app-icon.svg', tile(1024))

// Open Graph card, 1200 × 630: lockup + the line. Type is outlined, so no font is needed to raster it.
const og = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
<defs>${defs}
<radialGradient id="glow" cx="0.78" cy="0.45" r="0.6"><stop offset="0" stop-color="#3478ff" stop-opacity="0.45"/><stop offset="1" stop-color="#3478ff" stop-opacity="0"/></radialGradient></defs>
<rect width="1200" height="630" fill="#061126"/><rect width="1200" height="630" fill="url(#glow)"/>
<g transform="translate(760 130) scale(3.7)">${mark}</g>
<g transform="translate(96 150) scale(0.075)"><g transform="translate(-794 -728) scale(7.6)">${mark}</g><path d="${IRCA_PATH}" fill="#fff"/></g>
</svg>`
writeFileSync('public/og-image.svg', og)
console.log('brand files written')
