import { useRef } from 'react'
import { useGSAP, gsap, MQ } from '../animation/gsap'
import { revealOnScroll } from '../animation/sectionReveals'
import { SectionTransition } from '../components/layout/SectionTransition'
import { Tight } from '../components/ui/Tight'
import { useI18n } from '../i18n'
import './faq.css'

/* Answers state only what the app does today (see the iOS repo CLAUDE.md). Copy lives in src/i18n. */

export function FaqSection() {
  const root = useRef<HTMLElement>(null)
  const { t } = useI18n()
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MQ.motion, () => revealOnScroll(root.current!))
    },
    { scope: root },
  )
  return (
    <section id="faq" ref={root} className="faq section scheme-auto" aria-labelledby="faq-title">
      <div className="container faq__inner">
        <header className="faq__head">
          <p className="eyebrow" data-reveal>
            {t.faq.eyebrow}
          </p>
          <h2 id="faq-title" className="display faq__title" data-reveal>
            <Tight>{t.faq.title}</Tight>
          </h2>
        </header>
        <div className="faq__list">
          {t.faq.items.map((item) => (
            <details key={item.q} className="faq__item" data-reveal>
              <summary>
                <span>{item.q}</span>
                <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M10 4v12M4 10h12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
      {/* Light mode only: the navy CTA rises out of the pale FAQ. */}
      <SectionTransition fill="var(--bg-cta)" className="seam--cta" />
    </section>
  )
}
