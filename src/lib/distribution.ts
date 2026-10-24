/**
 * Pure maths for the answer-distribution line. Positions are derived from the numbers, never
 * placed by hand, so the picture always agrees with the data.
 */

export type Accuracy = 'close' | 'near' | 'far'

export interface Guess {
  id: string
  name: string
  value: number
  avatar: string
}

export interface PlacedGuess extends Guess {
  /** 0–1 along the track */
  t: number
  /** stacking row above the track; 0 sits lowest */
  row: number
  delta: number
  accuracy: Accuracy
  rank: number
}

export function accuracyOf(delta: number, truth: number): Accuracy {
  const rel = Math.abs(delta) / truth
  if (rel <= 0.025) return 'close'
  if (rel <= 0.35) return 'near'
  return 'far'
}

/**
 * Place guesses on a linear domain and stack any whose avatars would overlap.
 * The closest guess claims the lowest row first, so the winner sits nearest the line.
 */
export function placeGuesses(
  guesses: Guess[],
  truth: number,
  domain: [number, number],
  trackPx: number,
  avatarPx: number,
): PlacedGuess[] {
  const [lo, hi] = domain
  const ranked = [...guesses].sort((a, b) => Math.abs(a.value - truth) - Math.abs(b.value - truth))
  const rows: number[][] = []
  return ranked.map((g, i) => {
    const t = Math.min(1, Math.max(0, (g.value - lo) / (hi - lo)))
    const x = t * trackPx
    let row = 0
    while (rows[row]?.some((other) => Math.abs(other - x) < avatarPx + 4)) row++
    ;(rows[row] ??= []).push(x)
    const delta = g.value - truth
    return { ...g, t, row, delta, accuracy: accuracyOf(delta, truth), rank: i + 1 }
  })
}

export function ticks(domain: [number, number], step: number) {
  const out: number[] = []
  for (let v = domain[0]; v <= domain[1] + 1e-9; v += step) out.push(v)
  return out
}
