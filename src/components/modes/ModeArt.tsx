import { useId } from 'react'
import { GLOBE_LAND, GLOBE_GRATICULE, GLOBE_PIN } from './globeData'

/* Four mode visuals, each one idea drawn well. 240 × 200 viewBox, all vector. */

/** Algemeen: a rolling number settling on its value, the way the app's RollingNumber reads. */
export function ArtAlgemeen() {
  const digits = ['2', '0', '6']
  return (
    <svg viewBox="0 0 240 200" className="mode-art" aria-hidden="true">
      <defs>
        <linearGradient id="alg-fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0" />
          <stop offset="0.35" stopColor="#fff" stopOpacity="1" />
          <stop offset="0.65" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="alg-mask">
          <rect x="0" y="22" width="240" height="132" fill="url(#alg-fade)" />
        </mask>
      </defs>
      <g mask="url(#alg-mask)" fontFamily="var(--font-sans)" fontWeight="800" textAnchor="middle">
        {digits.map((d, i) => {
          const x = 72 + i * 48
          const n = +d
          return (
            <g key={i} className="alg-col" style={{ ['--i' as string]: i }}>
              <text x={x} y="58" fontSize="40" fill="#5b6f99">{(n + 9) % 10}</text>
              <text x={x} y="112" fontSize="58" fill="#fff">{d}</text>
              <text x={x} y="160" fontSize="40" fill="#5b6f99">{(n + 1) % 10}</text>
            </g>
          )
        })}
      </g>
      <rect x="44" y="76" width="152" height="52" rx="14" fill="none" stroke="rgba(91,140,255,.55)" strokeWidth="1.5" />
      <g transform="translate(40 178)">
        <rect width="160" height="4" rx="2" fill="rgba(255,255,255,.12)" />
        <rect width="104" height="4" rx="2" fill="#3478ff" />
        <circle cx="104" cy="2" r="8" fill="#fff" />
        <circle cx="104" cy="2" r="3.5" fill="#3478ff" />
      </g>
    </svg>
  )
}

/** Geografie: an orthographic Earth with a pin on Machu Picchu. */
export function ArtGeografie() {
  const id = useId().replace(/:/g, '')
  return (
    <svg viewBox="0 0 240 200" className="mode-art" aria-hidden="true">
      <defs>
        <radialGradient id={`oc${id}`} cx="0.36" cy="0.3" r="0.8">
          <stop offset="0" stopColor="#3f7dff" />
          <stop offset="0.55" stopColor="#1a45b8" />
          <stop offset="1" stopColor="#0a1f5e" />
        </radialGradient>
        <radialGradient id={`rim${id}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0.86" stopColor="#5b8cff" stopOpacity="0" />
          <stop offset="0.97" stopColor="#8fb4ff" stopOpacity="0.55" />
          <stop offset="1" stopColor="#8fb4ff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`sh${id}`} cx="0.72" cy="0.75" r="0.75">
          <stop offset="0.3" stopColor="#020818" stopOpacity="0" />
          <stop offset="1" stopColor="#020818" stopOpacity="0.55" />
        </radialGradient>
        <clipPath id={`cl${id}`}>
          <circle cx="100" cy="100" r="98" />
        </clipPath>
      </defs>
      <g transform="translate(26 6) scale(0.94)">
        <circle cx="100" cy="100" r="108" fill={`url(#rim${id})`} />
        <circle cx="100" cy="100" r="98" fill={`url(#oc${id})`} />
        <g clipPath={`url(#cl${id})`}>
          <path d={GLOBE_GRATICULE} fill="none" stroke="rgba(255,255,255,.08)" strokeWidth="0.6" />
          <path d={GLOBE_LAND} fill="#5fd3a6" fillOpacity="0.9" stroke="#8ae6c2" strokeOpacity="0.4" strokeWidth="0.4" />
          <circle cx="100" cy="100" r="98" fill={`url(#sh${id})`} />
        </g>
        <g transform={`translate(${GLOBE_PIN.x} ${GLOBE_PIN.y})`} className="geo-pin">
          <circle r="10" fill="none" stroke="#f2ba5c" strokeWidth="1.5" className="geo-pin__ring" />
          <path d="M0 0 C -9 -12 -9 -26 0 -26 C 9 -26 9 -12 0 0 Z" transform="translate(0 -2)" fill="#f2ba5c" stroke="#8a5a0e" strokeOpacity="0.35" />
          <circle cy="-21" r="3.6" fill="#fff" />
        </g>
      </g>
    </svg>
  )
}

/** Tijdlijn: a chronological dial, needle on 1912. */
export function ArtTijdlijn() {
  const cx = 120
  const cy = 150
  const r = 96
  const from = 1800
  const to = 2000
  const year = 1912
  const ang = (y: number) => Math.PI + ((y - from) / (to - from)) * Math.PI
  const pt = (y: number, rr: number) => [cx + Math.cos(ang(y)) * rr, cy + Math.sin(ang(y)) * rr]
  const ticks = []
  for (let y = from; y <= to; y += 10) {
    const major = y % 50 === 0
    const [x1, y1] = pt(y, r)
    const [x2, y2] = pt(y, r - (major ? 16 : 8))
    ticks.push(
      <line key={y} x1={x1} y1={y1} x2={x2} y2={y2} stroke={major ? 'rgba(255,255,255,.75)' : 'rgba(255,255,255,.28)'} strokeWidth={major ? 2 : 1.2} strokeLinecap="round" />,
    )
  }
  const [nx, ny] = pt(year, r - 26)
  const [ax, ay] = pt(from, r + 8)
  const [bx, by] = pt(year, r + 8)
  return (
    <svg viewBox="0 0 240 200" className="mode-art" aria-hidden="true">
      <path d={`M${pt(from, r + 8)[0]} ${pt(from, r + 8)[1]} A${r + 8} ${r + 8} 0 0 1 ${pt(to, r + 8)[0]} ${pt(to, r + 8)[1]}`} fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="3.5" strokeLinecap="round" />
      <path d={`M${ax} ${ay} A${r + 8} ${r + 8} 0 0 1 ${bx} ${by}`} fill="none" stroke="#3478ff" strokeWidth="3.5" strokeLinecap="round" />
      {ticks}
      {[1800, 1900, 2000].map((y) => {
        const [x, yy] = pt(y, r - 44)
        return (
          <text key={y} x={x} y={yy + 4} textAnchor="middle" fontSize="11" fontWeight="700" fill="#7d8eac" fontFamily="var(--font-sans)">
            {y}
          </text>
        )
      })}
      <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="#f2ba5c" strokeWidth="3.5" strokeLinecap="round" className="tl-needle" />
      <circle cx={cx} cy={cy} r="9" fill="#f2ba5c" />
      <circle cx={cx} cy={cy} r="3.5" fill="#0b1a3a" />
      <text x={cx} y={cy + 38} textAnchor="middle" fontSize="26" fontWeight="800" fill="#fff" fontFamily="var(--font-sans)" letterSpacing="-0.5">
        {year}
      </text>
    </svg>
  )
}

/** Percentage: the app's rotary dial: track, blue arc from 12 o'clock, amber knob. */
export function ArtPercentage() {
  const v = 71
  const r = 70
  const c = 2 * Math.PI * r
  const a = -Math.PI / 2 + (v / 100) * Math.PI * 2
  return (
    <svg viewBox="0 0 240 200" className="mode-art" aria-hidden="true">
      <g transform="translate(120 100)">
        <circle r={r} fill="none" stroke="rgba(255,255,255,.1)" strokeWidth="18" />
        <circle
          r={r}
          fill="none"
          stroke="#3478ff"
          strokeWidth="18"
          strokeLinecap="round"
          strokeDasharray={`${(v / 100) * c} ${c}`}
          transform="rotate(-90)"
          className="pct-arc"
        />
        <circle cx={Math.cos(a) * r} cy={Math.sin(a) * r} r="14" fill="#f2ba5c" stroke="#fff" strokeWidth="3.5" />
        <text y="12" textAnchor="middle" fontSize="40" fontWeight="800" fill="#fff" fontFamily="var(--font-sans)" letterSpacing="-1.5">
          {v}
          <tspan fontSize="22" fill="#a7b7d1" dx="2">%</tspan>
        </text>
      </g>
    </svg>
  )
}
