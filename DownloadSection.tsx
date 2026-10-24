import { useRef } from 'react'
import { useGSAP, gsap, MQ } from '../animation/gsap'
import { ctaMark } from '../animation/productMotion'
import { CircaMark } from '../components/brand/CircaMark'
import { StoreBadges } from '../components/ui/StoreBadges'
import { Tight } from '../components/ui/Tight'
import { useI18n } from '../i18n'
import './download.css'

export function DownloadSection() {
  const root = useRef<HTMLElement>(null)
  const { t } = useI18n()
  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MQ.motion, () => {
        const mark = root.current!.querySelector('[data-anim="cta-mark"]')!
        ctaMark(mark, mark.querySelector('.circa-dart'), root.current!)
        gsap.from(root.current!.querySelectorAll('[data-anim="cta-copy"]'), {
          autoAlpha: 0,
          y: 20,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: root.current!, start: 'top 65%', toggleActions: 'play none none reverse' },
        })
      })
    },
    { scope: root },
  )

  return (
    <section id="download" ref={root} className="cta section scheme-dark" aria-labelledby="cta-title">
      <div className="cta__light" aria-hidden="true" />
      <div className="container cta__inner">
        <div className="cta__mark" data-anim="cta-mark">
          <span className="cta__ring" aria-hidden="true" />
          <CircaMark size="100%" tone="onDark" />
        </div>
        <h2 id="cta-title" className="cta__title" data-anim="cta-copy">
          <Tight>{t.cta.title}</Tight>
        </h2>
        <div data-anim="cta-copy">
          <StoreBadges align="center" />
        </div>
      </div>
    </section>
  )
}

