// Rasterise the brand SVGs in /public. Dev-only: `npm i -D sharp` first if you need to re-run it.
import sharp from 'sharp'
const jobs = [
  ['public/app-icon.svg', 'public/apple-touch-icon.png', 180],
  ['public/app-icon.svg', 'public/icon-192.png', 192],
  ['public/app-icon.svg', 'public/icon-512.png', 512],
  ['public/favicon.svg', 'public/favicon-32.png', 32],
]
for (const [src, out, size] of jobs) await sharp(src, { density: 384 }).resize(size, size).png().toFile(out)
await sharp('public/og-image.svg', { density: 144 }).resize(1200, 630).png({ compressionLevel: 9 }).toFile('public/og-image.png')
console.log('pngs written')
