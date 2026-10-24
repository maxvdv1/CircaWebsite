import { useEffect, useState } from 'react'
import { nav } from '../../config/site'
import { CircaLogo } from '../brand/CircaLogo'
import { CircaMark } from '../brand/CircaMark'
import { ThemeToggle } from '../ui/ThemeToggle'
import { useTheme } from '../../lib/theme'
import { useI18n } from '../../i18n'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'
import './nav.css'

/** Which nav section is in view: one IntersectionObserver, no scroll listeners. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.01] },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}

const IDS = ['top', 'spelvormen', 'vrienden', 'faq']

export function Nav() {
  const active = useActiveSection(IDS)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { theme } = useTheme()
  const { t } = useI18n()

  useEffect(() => {
    // A 1px sentinel at the top of the page tells us when the hero has scrolled under the bar.
    const sentinel = document.getElementById('nav-sentinel')
    if (!sentinel) return
    const io = new IntersectionObserver(([e]) => setScrolled(!e.isIntersecting))
    io.observe(sentinel)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const tone = theme === 'dark' ? 'onDark' : 'onLight'

  return (
    <header className={`nav scheme-auto ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`} data-anim="nav">
      <div className="nav__inner container">
        <div className="nav__brand">
          <a href="#top" className="nav__logo" aria-label={t.a11y.home}>
            <CircaLogo height={36} tone={tone} className="nav__logo-full" />
            <CircaMark size={38} tone={tone} className="nav__logo-compact" />
          </a>
          <LanguageSwitcher />
        </div>

        <nav className="nav__links" aria-label={t.a11y.mainNav}>
          {nav.map((item) => {
            const id = item.href.slice(1)
            return (
              <a key={item.id} href={item.href} aria-current={active === id ? 'true' : undefined} onClick={() => setOpen(false)}>
                {t.nav[item.key]}
              </a>
            )
          })}
        </nav>

        <div className="nav__actions">
          <ThemeToggle />
          <a href="#download" className="nav__cta">
            <span className="nav__cta-long">{t.nav.cta}</span>
            <span className="nav__cta-short">{t.nav.ctaShort}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2.5 8h10M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <button
            type="button"
            className="nav__menu"
            aria-expanded={open}
            aria-controls="nav-sheet"
            aria-label={open ? t.a11y.menuClose : t.a11y.menuOpen}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
      <nav id="nav-sheet" className="nav__sheet" aria-label={t.a11y.menu} hidden={!open}>
        {nav.map((item) => (
          <a key={item.id} href={item.href} onClick={() => setOpen(false)}>
            {t.nav[item.key]}
          </a>
        ))}
        <a href="#download" className="nav__sheet-cta" onClick={() => setOpen(false)}>
          {t.nav.cta}
        </a>
      </nav>
    </header>
  )
}
