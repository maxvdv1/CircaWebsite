/**
 * Circa brand geometry: the C and the dart, as plain path data.
 *
 * Shared by the React components and by `scripts/build-brand.ts` (favicon, touch icon, OG image),
 * so the mark is the same shape everywhere. Geometry follows `CircaCMark` in the iOS app
 * (weight 0.27 of the diameter, wide aperture opening to the right, slanted terminals).
 *
 * Coordinate space: a 100 × 100 box, centre (50, 50).
 */

const CX = 50
const CY = 50
const D = 100
/** Stroke weight as a fraction of the diameter (iOS: 0.27). */
const WEIGHT = 0.27
/** Opening in degrees, and where it is centred (0° = right, positive = clockwise on screen). */
const APERTURE = 94
const APERTURE_CENTER = 7
/** How far each terminal cut leans away from radial, in degrees. */
const LEAN = 12

const rad = (deg: number) => (deg * Math.PI) / 180
const f = (n: number) => +n.toFixed(2)

export const C_OUTER = D / 2
export const C_INNER = D / 2 - D * WEIGHT

/** Intersection of the line through `p` with direction `dir` and the circle of radius `r` (outward root). */
function hitCircle(p: [number, number], dir: [number, number], r: number, sign: 1 | -1): [number, number] {
  const ox = p[0] - CX
  const oy = p[1] - CY
  const b = ox * dir[0] + oy * dir[1]
  const c = ox * ox + oy * oy - r * r
  const t = -b + sign * Math.sqrt(b * b - c)
  return [p[0] + dir[0] * t, p[1] + dir[1] * t]
}

function terminal(angleDeg: number, leanDeg: number) {
  const mid = (C_OUTER + C_INNER) / 2
  const a = rad(angleDeg)
  const p: [number, number] = [CX + Math.cos(a) * mid, CY + Math.sin(a) * mid]
  const d = rad(angleDeg + leanDeg)
  const dir: [number, number] = [Math.cos(d), Math.sin(d)]
  return { outer: hitCircle(p, dir, C_OUTER, 1), inner: hitCircle(p, dir, C_INNER, 1) }
}

/** The C as one closed path. */
export function cPath(): string {
  const startA = APERTURE_CENTER + APERTURE / 2 // bottom terminal (clockwise from right)
  const endA = APERTURE_CENTER - APERTURE / 2 // top terminal
  const s = terminal(startA, LEAN)
  const e = terminal(endA, -LEAN)
  return [
    `M${f(s.outer[0])} ${f(s.outer[1])}`,
    // Outer arc the long way round, clockwise on screen (sweep 1).
    `A${C_OUTER} ${C_OUTER} 0 1 1 ${f(e.outer[0])} ${f(e.outer[1])}`,
    `L${f(e.inner[0])} ${f(e.inner[1])}`,
    `A${C_INNER} ${C_INNER} 0 1 0 ${f(s.inner[0])} ${f(s.inner[1])}`,
    'Z',
  ].join(' ')
}

/** Rotation of the dart about the bullseye, in degrees (it comes in from the upper right). */
export const DART_ANGLE = -42

/**
 * The dart, pointing along +x with its tip at (0, 0). Rotate by DART_ANGLE + 180 and translate to
 * the centre. Returned as separate parts so each can carry its own fill.
 */
export function dartParts(scale = 1) {
  const s = (n: number) => f(n * scale)
  return {
    shaft: `M${s(5)} ${s(-1.9)} L${s(34)} ${s(-1.9)} Q${s(35.6)} ${s(-1.9)} ${s(35.6)} ${s(0)} Q${s(35.6)} ${s(1.9)} ${s(34)} ${s(1.9)} L${s(5)} ${s(1.9)} Z`,
    tip: `M${s(-0.4)} 0 L${s(6.5)} ${s(-2.6)} L${s(9)} ${s(-2.6)} L${s(9)} ${s(2.6)} L${s(6.5)} ${s(2.6)} Z`,
    barrel: `M${s(9)} ${s(-3.1)} L${s(19)} ${s(-3.1)} Q${s(20.6)} ${s(-3.1)} ${s(20.6)} ${s(-1.5)} L${s(20.6)} ${s(1.5)} Q${s(20.6)} ${s(3.1)} ${s(19)} ${s(3.1)} L${s(9)} ${s(3.1)} Z`,
    flightTop: `M${s(30)} ${s(-1.2)} C${s(33)} ${s(-6)} ${s(37)} ${s(-12.5)} ${s(43)} ${s(-13.5)} C${s(47.5)} ${s(-14.2)} ${s(51.5)} ${s(-12.5)} ${s(52.5)} ${s(-10.5)} C${s(50)} ${s(-6.5)} ${s(47)} ${s(-2.5)} ${s(45)} ${s(-1.2)} Z`,
    flightBottom: `M${s(30)} ${s(1.2)} C${s(33)} ${s(6)} ${s(37)} ${s(12.5)} ${s(43)} ${s(13.5)} C${s(47.5)} ${s(14.2)} ${s(51.5)} ${s(12.5)} ${s(52.5)} ${s(10.5)} C${s(50)} ${s(6.5)} ${s(47)} ${s(2.5)} ${s(45)} ${s(1.2)} Z`,
    crease: `M${s(31)} 0 L${s(50)} 0`,
  }
}

export const CENTER = { x: CX, y: CY }
