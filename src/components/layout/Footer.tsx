import { legal, site } from '../../config/site'
import { CircaLogo } from '../brand/CircaLogo'
import { useI18n } from '../../i18n'
import './footer.css'

/** `base` points the logo back at the one-pager when the footer sits on a legal page. */
export function Footer({ base = '' }: { base?: string }) {
  const { t } = useI18n()
  return (
    <footer className="footer scheme-dark">
      <div className="container footer__inner">
        <a href={base ? base : '#top'} className="footer__logo" aria-label={t.a11y.home}>
          <CircaLogo height={28} />
        </a>
        <nav className="footer__legal" aria-label={t.legal.nav}>
          <a href="./privacy.html">{t.legal.privacy}</a>
          <a href="./voorwaarden.html">{t.legal.terms}</a>
          <a href="./verwijderen.html">{t.legal.deletion}</a>
        </nav>
        <p className="footer__meta">
          © {new Date().getFullYear()} {site.name} · {site.domain}
          <br />
          {legal.tradeName} · KvK {legal.kvk}
        </p>
      </div>
    </footer>
  )
}
