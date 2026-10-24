import { useTheme } from '../../lib/theme'
import { useI18n } from '../../i18n'
import './themeToggle.css'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useI18n()
  const dark = theme === 'dark'
  return (
    <button
      type="button"
      role="switch"
      aria-checked={dark}
      aria-label={t.a11y.darkMode}
      className="theme-toggle"
      onClick={toggle}
    >
      <svg className="theme-toggle__icon theme-toggle__sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4.2" fill="currentColor" />
        <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4" />
        </g>
      </svg>
      <svg className="theme-toggle__icon theme-toggle__moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.2 14.6A8.5 8.5 0 0 1 9.4 3.8a8.5 8.5 0 1 0 10.8 10.8Z" fill="currentColor" />
      </svg>
      <span className="theme-toggle__knob" aria-hidden="true" />
    </button>
  )
}
