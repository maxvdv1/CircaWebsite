import { useCallback, useSyncExternalStore } from 'react'
import { flushSync } from 'react-dom'

export type Theme = 'dark' | 'light'
const KEY = 'circa-theme'
const listeners = new Set<() => void>()

function read(): Theme {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'
}

function apply(theme: Theme, persist = true) {
  const root = document.documentElement
  root.dataset.theme = theme
  root.style.colorScheme = theme
  if (persist) {
    try {
      localStorage.setItem(KEY, theme)
    } catch {
      /* private mode: the choice lasts for this visit */
    }
  }
  listeners.forEach((l) => l())
}

function subscribe(cb: () => void) {
  listeners.add(cb)
  // Another tab changed the theme.
  const onStorage = (e: StorageEvent) => {
    if (e.key === KEY && (e.newValue === 'light' || e.newValue === 'dark')) apply(e.newValue, false)
  }
  window.addEventListener('storage', onStorage)
  return () => {
    listeners.delete(cb)
    window.removeEventListener('storage', onStorage)
  }
}

/**
 * The theme lives on <html data-theme>, set before first paint by the inline script in
 * index.html (dark by default, saved choice wins). React only reads and flips it.
 * Switching crossfades through the View Transitions API when available and motion is allowed.
 */
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, read, () => 'dark' as Theme)

  const toggle = useCallback(() => {
    const next: Theme = read() === 'dark' ? 'light' : 'dark'
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce && 'startViewTransition' in document) {
      document.startViewTransition(() => flushSync(() => apply(next)))
    } else {
      apply(next)
    }
  }, [])

  return { theme, toggle }
}
