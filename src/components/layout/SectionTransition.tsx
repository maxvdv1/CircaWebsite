import type { ReactNode } from 'react'
import './sectionTransition.css'

/**
 * The signature boundary: the next surface rises gently at the outer edges and settles into a
 * wide, shallow curve at the centre. Placed at the bottom of a section; `fill` is the NEXT
 * section's ground (a CSS colour or var), so both themes stay seamless.
 *
 * Shape lives in one place; height scales with the viewport but stays shallow on ultrawide.
 */
export function SectionTransition({
  fill,
  children,
  className = '',
}: {
  fill: string
  children?: ReactNode
  className?: string
}) {
  return (
    <div className={`seam ${className}`} aria-hidden={children ? undefined : true}>
      <svg className="seam__shape" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
        <path d="M0 0 C 300 0 470 100 720 100 C 970 100 1140 0 1440 0 L 1440 102 L 0 102 Z" style={{ fill }} />
      </svg>
      {children}
    </div>
  )
}

/** The small circular scroll cue. Rendered between sections so it sits above both. */
export function ScrollCue({ href, label }: { href: string; label: string }) {
  return (
    <a className="seam__cue" href={href} aria-label={label} data-anim="cue">
      <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <path d="M4.5 7 9 11.5 13.5 7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  )
}
