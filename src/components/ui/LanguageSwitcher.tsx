import type { ReactNode } from 'react'
import { LANGS, useI18n, type Lang } from '../../i18n'
import './languageSwitcher.css'

/* Flags drawn as SVG: emoji flags do not render on Windows. */
const FLAGS: Record<Lang, ReactNode> = {
  nl: (
    <svg viewBox="0 0 9 6" aria-hidden="true">
      <rect width="9" height="6" fill="#21468b" />
      <rect width="9" height="4" fill="#fff" />
      <rect width="9" height="2" fill="#ae1c28" />
    </svg>
  ),
  en: (
    <svg viewBox="0 0 60 30" aria-hidden="true">
      <clipPath id="uk-c">
        <path d="M30 15h30v15zv15H0zH0V0zV0h30z" />
      </clipPath>
      <path d="M0 0v30h60V0z" fill="#012169" />
      <path d="M0 0l60 30m0-30L0 30" stroke="#fff" strokeWidth="6" />
      <path d="M0 0l60 30m0-30L0 30" clipPath="url(#uk-c)" stroke="#c8102e" strokeWidth="4" />
      <path d="M30 0v30M0 15h60" stroke="#fff" strokeWidth="10" />
      <path d="M30 0v30M0 15h60" stroke="#c8102e" strokeWidth="6" />
    </svg>
  ),
  es: (
    <svg viewBox="0 0 3 2" aria-hidden="true">
      <rect width="3" height="2" fill="#aa151b" />
      <rect y="0.5" width="3" height="1" fill="#f1bf00" />
    </svg>
  ),
}

const NAMES: Record<Lang, string> = { nl: 'Nederlands', en: 'English', es: 'Español' }

export function LanguageSwitcher() {
  const { lang, t, setLang } = useI18n()
  return (
    <div className="lang" role="group" aria-label={t.a11y.language}>
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          lang={l}
          className="lang__flag"
          aria-pressed={lang === l}
          aria-label={NAMES[l]}
          title={NAMES[l]}
          onClick={() => setLang(l)}
        >
          {FLAGS[l]}
        </button>
      ))}
    </div>
  )
}
