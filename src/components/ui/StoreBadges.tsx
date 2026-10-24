import type { ReactNode } from 'react'
import { site } from '../../config/site'
import { useI18n } from '../../i18n'
import './storeBadges.css'

const APPLE =
  'M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701'

function AppleGlyph() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" className="badge__glyph">
      <path d={APPLE} fill="currentColor" />
    </svg>
  )
}

function PlayGlyph() {
  return (
    <svg viewBox="0 0 22 24" width="24" height="26" aria-hidden="true" className="badge__glyph">
      <g strokeLinejoin="round" strokeWidth="0.8">
        <path d="M1 .9 12.6 12 1 23.1Z" fill="#00c3ff" stroke="#00c3ff" />
        <path d="M1 .9 16.6 9.6 12.6 12Z" fill="#00e676" stroke="#00e676" />
        <path d="M16.6 9.6 21 12l-4.4 2.4-4-2.4Z" fill="#ffc400" stroke="#ffc400" />
        <path d="M1 23.1 12.6 12l4 2.4Z" fill="#ff3d47" stroke="#ff3d47" />
      </g>
    </svg>
  )
}

function Badge({
  href,
  label,
  small,
  big,
  glyph,
  soon,
}: {
  href: string | null
  soon: { suffix: string; title: string }
  label: string
  small: string
  big: string
  glyph: ReactNode
}) {
  const inner = (
    <>
      {glyph}
      <span className="badge__text">
        <span className="badge__small">{small}</span>
        <span className="badge__big">{big}</span>
      </span>
    </>
  )
  if (href) {
    return (
      <a className="badge" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        {inner}
      </a>
    )
  }
  return (
    <span className="badge badge--soon" role="img" aria-label={`${label}: ${soon.suffix}`} title={soon.title}>
      {inner}
    </span>
  )
}

/** App Store + Google Play. Links come from `site.stores`; a missing link renders as "binnenkort". */
export function StoreBadges({ className = '', align = 'start' }: { className?: string; align?: 'start' | 'center' }) {
  const { appStore, googlePlay } = site.stores
  const { t } = useI18n()
  const b = t.badges
  const soon = { suffix: b.soonSuffix, title: b.soonTitle }
  const anySoon = !appStore || !googlePlay
  return (
    <div className={`store-badges store-badges--${align} ${className}`} data-anim="badges">
      <div className="store-badges__row">
        <Badge href={appStore} soon={soon} label={b.appleLabel} small={b.appleSmall} big="App Store" glyph={<AppleGlyph />} />
        <Badge href={googlePlay} soon={soon} label={b.googleLabel} small={b.googleSmall} big="Google Play" glyph={<PlayGlyph />} />
      </div>
      {anySoon && <p className="store-badges__note">{b.soonNote}</p>}
    </div>
  )
}
