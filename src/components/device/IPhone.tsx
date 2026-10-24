import type { CSSProperties, ReactNode } from 'react'
import './iphone.css'

/**
 * A titanium iPhone (Pro proportions: 393 × 852 pt screen) rendered in CSS, so the screen is live
 * HTML: crisp at any density, translatable, and animatable later.
 *
 * Size it with `scale` (1 = real points). The device keeps its real geometry internally and the
 * wrapper reserves the scaled box, so layout around it never guesses.
 */
export function IPhone({
  children,
  scale = 0.8,
  label,
  className = '',
  style,
  interactive = false,
}: {
  children: ReactNode
  /** The screen holds real controls: expose it as a labelled group instead of a picture. */
  interactive?: boolean
  scale?: number
  label: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <figure
      className={`device ${className}`}
      style={{ ...style, '--s': scale } as CSSProperties}
      aria-label={label}
      role={interactive ? 'group' : 'img'}
    >
      <div className="iphone">
        <div className="iphone__edge" aria-hidden="true" />
        <div className="iphone__frame">
          <span className="iphone__btn iphone__btn--action" />
          <span className="iphone__btn iphone__btn--up" />
          <span className="iphone__btn iphone__btn--down" />
          <span className="iphone__btn iphone__btn--power" />
          <div className="iphone__bezel">
            <div className="iphone__screen">
              {children}
              <div className="iphone__island" />
              <div className="iphone__home" />
            </div>
            <div className="iphone__glare" aria-hidden="true" />
          </div>
        </div>
      </div>
    </figure>
  )
}
