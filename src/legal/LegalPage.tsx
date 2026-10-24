import { Fragment, useState, type ReactNode } from 'react'
import { legal, site } from '../config/site'
import { useI18n, type Lang } from '../i18n'
import { CircaLogo } from '../components/brand/CircaLogo'
import { LanguageSwitcher } from '../components/ui/LanguageSwitcher'
import { ThemeToggle } from '../components/ui/ThemeToggle'
import { useTheme } from '../lib/theme'
import { Footer } from '../components/layout/Footer'
import type { Block, LegalDoc, LegalUi } from './types'
import { privacy } from './privacy'
import { terms } from './terms'
import { deletion } from './deletion'
import { ui } from './ui'
import './legal.css'

export type DocKind = 'privacy' | 'voorwaarden' | 'verwijderen'

const VARS: Record<string, string> = {
  owner: legal.owner,
  tradeName: legal.tradeName,
  address: legal.address,
  kvk: legal.kvk,
  vat: legal.vat,
  email: legal.email,
  domain: site.domain,
}

/** **bold**, [label](url) and {placeholders}. Unfilled [PLACEHOLDERS] are highlighted. */
function inline(text: string): ReactNode[] {
  const filled = text.replace(/\{(\w+)\}/g, (_, k: string) => VARS[k] ?? `{${k}}`)
  const out: ReactNode[] = []
  const re = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)|(\[[A-ZÀ-Ý0-9 ,.@/:-]{3,}[^\]]*\])/g
  let last = 0
  let m: RegExpExecArray | null
  let k = 0
  while ((m = re.exec(filled))) {
    if (m.index > last) out.push(filled.slice(last, m.index))
    if (m[1]) out.push(<strong key={k++}>{m[1]}</strong>)
    else if (m[2]) {
      const external = /^https?:/.test(m[3])
      out.push(
        <a key={k++} href={m[3]} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
          {m[2]}
        </a>,
      )
    } else if (m[4]) out.push(<mark key={k++} className="legal__todo">{m[4]}</mark>)
    last = re.lastIndex
  }
  if (last < filled.length) out.push(filled.slice(last))
  return out
}

type RequestBlock = Extract<Block, { request: unknown }>['request']

/** Email request card: the address to copy, a prefilled mail and the template to reuse. */
function RequestCard({ r }: { r: RequestBlock }) {
  const [copied, setCopied] = useState(false)
  const href = `mailto:${legal.email}?subject=${encodeURIComponent(r.subject)}&body=${encodeURIComponent(r.body)}`
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(legal.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard refused (older webviews): select the address so the visitor can copy it.
      const el = document.getElementById('request-email')
      if (el) window.getSelection()?.selectAllChildren(el)
    }
  }
  return (
    <div className="request">
      <p className="request__label">{r.title}</p>
      <p className="request__email" id="request-email">
        {legal.email}
      </p>
      <div className="request__actions">
        <a className="request__btn request__btn--primary" href={href}>
          {r.open}
        </a>
        <button type="button" className="request__btn" onClick={copy} aria-live="polite">
          {copied ? r.copied : r.copy}
        </button>
      </div>
      <p className="request__intro">{r.intro}</p>
      <pre className="request__template">
        <strong>{r.subject}</strong>
        {'\n\n'}
        {r.body}
      </pre>
    </div>
  )
}

function BlockView({ b }: { b: Block }) {
  if (typeof b === 'string') return <p>{inline(b)}</p>
  if ('steps' in b)
    return (
      <ol className="legal__steps">
        {b.steps.map((li, i) => (
          <li key={i}>
            <span>{inline(li)}</span>
          </li>
        ))}
      </ol>
    )
  if ('request' in b) return <RequestCard r={b.request} />
  if ('list' in b)
    return (
      <ul>
        {b.list.map((li, i) => (
          <li key={i}>{inline(li)}</li>
        ))}
      </ul>
    )
  return (
    <div className="legal__table">
      <table>
        <thead>
          <tr>
            {b.table.head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {b.table.rows.map((r, i) => (
            <tr key={i}>
              {r.map((c, j) => (
                <td key={j}>{inline(c)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const DOCS: Record<DocKind, Record<Lang, LegalDoc>> = { privacy, voorwaarden: terms, verwijderen: deletion }

export function LegalPage({ kind }: { kind: DocKind }) {
  const { lang, t } = useI18n()
  const { theme } = useTheme()
  const doc = DOCS[kind][lang]
  const u: LegalUi = ui[lang]
  const date = new Intl.DateTimeFormat(t.locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(legal.updated))

  // Keep the tab title in the visitor's language.
  if (typeof document !== 'undefined') document.title = `${doc.title} · Circa`

  return (
    <>
      <a className="skip-link" href="#main">
        {t.a11y.skip}
      </a>
      <header className="legal-nav scheme-auto">
        <div className="container legal-nav__inner">
          <div className="nav__brand">
            <a href="./" className="nav__logo" aria-label={t.a11y.home}>
              <CircaLogo height={32} tone={theme === 'dark' ? 'onDark' : 'onLight'} />
            </a>
            <LanguageSwitcher />
          </div>
          <div className="legal-nav__actions">
            <ThemeToggle />
            <a href="./" className="legal-nav__back">
              ← {u.back}
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="legal scheme-auto">
        <div className="container legal__grid">
          <aside className="legal__toc" aria-label={u.contents}>
            <p className="eyebrow">{u.contents}</p>
            <ol>
              {doc.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.title}</a>
                </li>
              ))}
            </ol>
          </aside>
          <article className="legal__doc">
            <p className="eyebrow">{kind === 'privacy' ? u.privacy : kind === 'voorwaarden' ? u.terms : u.deletion}</p>
            <h1>{doc.title}</h1>
            <p className="legal__meta">{u.updated(date)}</p>
            {u.governingNote && <p className="legal__note">{u.governingNote}</p>}
            <p className="legal__lead">{inline(doc.lead)}</p>
            {doc.sections.map((s, i) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
                <h2 id={`${s.id}-h`}>
                  <span className="legal__num">{i + 1}.</span> {s.title}
                </h2>
                {s.blocks.map((b, j) => (
                  <Fragment key={j}>
                    <BlockView b={b} />
                  </Fragment>
                ))}
              </section>
            ))}
          </article>
        </div>
      </main>
      <Footer base="./" />
    </>
  )
}
