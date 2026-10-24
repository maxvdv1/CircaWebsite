import { useId } from 'react'
import { cPath, dartParts, DART_ANGLE, C_INNER } from './geometry'

export type MarkTone = 'onDark' | 'onLight'

const C_PATH = cPath()
const DART = dartParts(1.12)

/**
 * The Circa C with the dart in its centre, drawn in a 100 × 100 space.
 * `onDark`: the app icon's pale C. `onLight`: the C in Circa blue, so it holds on white.
 * Returned as an SVG <g> so it can live inside a larger lockup.
 */
export function CircaMarkGroup({ tone = 'onDark', shadow = true }: { tone?: MarkTone; shadow?: boolean }) {
  const id = useId().replace(/:/g, '')
  const light = tone === 'onLight'
  return (
    <g>
      <defs>
        <linearGradient id={`c${id}`} x1="0.15" y1="0.05" x2="0.85" y2="0.95">
          {light ? (
            <>
              <stop offset="0" stopColor="#5b92ff" />
              <stop offset="1" stopColor="#1f56e8" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="0.55" stopColor="#e6ebff" />
              <stop offset="1" stopColor="#b9c6ff" />
            </>
          )}
        </linearGradient>
        <radialGradient id={`h${id}`} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor={light ? '#dfe9ff' : '#1d52ea'} />
          <stop offset="1" stopColor={light ? '#c7d8ff' : '#0f319f'} />
        </radialGradient>
        <radialGradient id={`b${id}`} cx="0.38" cy="0.32" r="0.75">
          <stop offset="0" stopColor="#8ab6ff" />
          <stop offset="0.5" stopColor="#3478ff" />
          <stop offset="1" stopColor="#1e56e6" />
        </radialGradient>
        <linearGradient id={`s${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffd666" />
          <stop offset="1" stopColor="#efa02a" />
        </linearGradient>
        <linearGradient id={`f${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffcf55" />
          <stop offset="1" stopColor="#f6b233" />
        </linearGradient>
        <linearGradient id={`g${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f3a82e" />
          <stop offset="1" stopColor="#e38c16" />
        </linearGradient>
        {shadow && (
          <>
            <filter id={`d${id}`} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="-0.6" dy="1.4" stdDeviation="1.1" floodColor="#061126" floodOpacity="0.35" />
            </filter>
            <filter id={`e${id}`} x="-20%" y="-20%" width="140%" height="150%">
              <feDropShadow dx="0" dy="2.5" stdDeviation="2.5" floodColor="#020818" floodOpacity={light ? 0.18 : 0.35} />
            </filter>
          </>
        )}
      </defs>
      <circle cx="50" cy="50" r={C_INNER + 0.4} fill={`url(#h${id})`} />
      <circle cx="50" cy="50" r="11.5" fill={`url(#b${id})`} />
      <path
        d={C_PATH}
        fill={`url(#c${id})`}
        stroke={`url(#c${id})`}
        strokeWidth="4.5"
        strokeLinejoin="round"
        filter={shadow ? `url(#e${id})` : undefined}
      />
      <g transform={`translate(50 50) rotate(${DART_ANGLE})`} filter={shadow ? `url(#d${id})` : undefined} className="circa-dart">
        <path d={DART.flightTop} fill={`url(#f${id})`} />
        <path d={DART.flightBottom} fill={`url(#g${id})`} />
        <path d={DART.shaft} fill={`url(#s${id})`} />
        <path d={DART.barrel} fill={`url(#s${id})`} />
        <path d={DART.tip} fill="#e08a12" />
      </g>
    </g>
  )
}

/** The standalone mark (compact logo, large brand moments). */
export function CircaMark({
  size = 40,
  tone = 'onDark',
  className,
  title,
}: {
  size?: number | string
  tone?: MarkTone
  className?: string
  title?: string
}) {
  return (
    <svg
      viewBox="-4 -6 112 112"
      width={size}
      height={size}
      className={className}
      role={title ? 'img' : undefined}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      <CircaMarkGroup tone={tone} />
    </svg>
  )
}
