// Renders public/og-image.png (1200x630) with the real typeface. Dev-only: needs `playwright` installed.
import { chromium } from 'playwright'
import { readFileSync } from 'node:fs'
const font = readFileSync(new URL('../', import.meta.url).pathname.replace(/scripts\/$/,'')+'node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2').toString('base64')
const ogsvg = readFileSync(new URL('../', import.meta.url).pathname.replace(/scripts\/$/,'')+'public/og-image.svg','utf8')
const html = `<html><head><style>
@font-face{font-family:J;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:200 800}
body{margin:0;width:1200px;height:630px;position:relative;font-family:J}
.t{position:absolute;left:96px;top:250px;font-weight:800;font-size:92px;line-height:.98;letter-spacing:-.045em;color:#fff}
.t span{display:block}.b{color:#3478ff}.d{margin-left:-.055em}
.u{position:absolute;left:100px;bottom:56px;font-size:22px;color:#a7b7d1;font-weight:600;letter-spacing:.02em}
</style></head><body>${ogsvg.replace('<svg ','<svg style="position:absolute;inset:0" ')}
<div class="t"><span>Schat<i class="d" style="font-style:normal">.</i></span><span class="b">Daag uit<i class="d" style="font-style:normal">.</i></span><span>Win<i class="d" style="font-style:normal">.</i></span></div>
<div class="u">letsplaycirca.com</div></body></html>`
const b = await chromium.launch(); const p = await b.newPage({viewport:{width:1200,height:630}})
await p.setContent(html,{waitUntil:'networkidle'}); await p.evaluate(()=>document.fonts.ready)
await p.screenshot({path:new URL('../public/og-image.png', import.meta.url).pathname}); await b.close()
