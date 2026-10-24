import { useId } from 'react'
import { CircaMarkGroup, type MarkTone } from './CircaMark'
import { IRCA_PATH, IRCA_BOUNDS } from './wordmarkPath'

/**
 * Horizontal lockup: [C mark] + "irca". The mark IS the C, so the whole thing reads "Circa".
 *
 * Font-unit space (1000/em, baseline y = 0). The mark is 720 units across, sitting from just
 * above the i's dot to the baseline overshoot, which is what makes it read as a capital.
 */
const MARK = 760
const GAP = 36
const MARK_X = -MARK - GAP
const MARK_Y = -728
const VB_X = MARK_X - 12
const VB_Y = -790
const VB_W = IRCA_BOUNDS.maxX + 16 - VB_X
const VB_H = 830

export function CircaLogo({
  height = 34,
  tone = 'onDark',
  className,
}: {
  height?: number
  tone?: MarkTone
  className?: string
}) {
  const width = (VB_W / VB_H) * height
  const id = `irca${useId().replace(/:/g, '')}`
  const light = tone === 'onLight'
  return (
    <svg
      viewBox={`${VB_X} ${VB_Y} ${VB_W} ${VB_H}`}
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Circa"
    >
      <g transform={`translate(${MARK_X} ${MARK_Y}) scale(${MARK / 100})`}>
        <CircaMarkGroup tone={tone} />
      </g>
      {/* "irca" takes the C's own material: the pale C on dark, the blue C on light. */}
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse" x1="0" y1="-711" x2="0" y2="16">
          {light ? (
            <>
              <stop offset="0" stopColor="#4a86ff" />
              <stop offset="1" stopColor="#1f56e8" />
            </>
          ) : (
            <>
              <stop offset="0" stopColor="#ffffff" />
              <stop offset="1" stopColor="#dde4ff" />
            </>
          )}
        </linearGradient>
      </defs>
      <path d={IRCA_PATH} fill={`url(#${id})`} />
    </svg>
  )
}
