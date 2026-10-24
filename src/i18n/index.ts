import { useCallback, useMemo, useSyncExternalStore } from 'react'
import { nl } from './nl'
import { en } from './en'
import { es } from './es'
import { LANGS, type Dict, type Lang } from './types'

export { LANGS, type Lang, type Dict }

const DICTS: Record<Lang, Dict> = { nl, en, es }
const KEY = 'circa-lang'
const listeners = new Set<() => void>()

const isLang = (v: unknown): v is Lang => typeof v === 'string' && (LANGS as string[]).includes(v)

/** Set before first paint by the inline script in index.html (?lang= → saved → browser → nl). */
function read(): Lang {
  const l = document.documentElement.lang.slice(0, 2)
  return isLang(l) ? l : 'nl'
}

function syncHead(lang: Lang) {
  const d = DICTS[lang]
  document.documentElement.lang = lang
  document.title = d.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', d.meta.description)
}

export function setLang(lang: Lang) {
  try {
    localStorage.setItem(KEY, lang)
  } catch {
    /* private mode: the choice lasts for this visit */
  }
  syncHead(lang)
  listeners.forEach((l) => l())
}

function subscribe(cb: () => void) {
  listeners.add(cb)
  return () => listeners.delete(cb)
}

/** Current language, its dictionary and locale-aware number formatting. */
export function useI18n() {
  const lang = useSyncExternalStore(subscribe, read, () => 'nl' as Lang)
  const t = DICTS[lang]
  const nf = useMemo(() => {
    try {
      // 'always' so Spanish groups 4-digit numbers too (9.288, like the rest of the page).
      return new Intl.NumberFormat(t.locale, { useGrouping: 'always' } as unknown as Intl.NumberFormatOptions)
    } catch {
      return new Intl.NumberFormat(t.locale)
    }
  }, [t.locale])
  const num = useCallback((n: number) => nf.format(n), [nf])
  const signed = useCallback((n: number) => (n === 0 ? '0' : `${n > 0 ? '+' : '−'}${nf.format(Math.abs(n))}`), [nf])
  return { lang, t, num, signed, setLang }
}

/** Keep <title>, description and <html lang> right on first load too. */
export function initHead() {
  syncHead(read())
}
