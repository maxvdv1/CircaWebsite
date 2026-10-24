import { useRef } from 'react'
import { useGSAP, gsap, MQ } from '../animation/gsap'
import { heroEntrance } from '../animation/heroEntrance'
import { float, heroPhoneScroll, pointerParallax } from '../animation/productMotion'
import { StoreBadges } from '../components/ui/StoreBadges'
import { SectionTransition } from '../components/layout/SectionTransition'
import { useI18n } from '../i18n'
import { HeroPhone } from './HeroPhone'
import { Tight } from '../components/ui/Tight'
import './hero.css'

export function HeroSection() {
  const root = useRef<HTMLElement>(null)
  const tilt = useRef<HTMLDivElement>(null)
  const { t } = useI18n()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MQ.motion, () => {
        heroEntrance(root.current!, document.querySelector('[data-anim="nav"]'))
        const floatEl = root.current!.querySelector('[data-anim="hero-float"]')
        if (floatEl) float(floatEl)
        if (tilt.current) heroPhoneScroll(tilt.current, root.current!)
        // Parallax rides on the tilt layer's parent-free axes: the float layer owns y, so lean it.
        const floatLayer = root.current!.querySelector('[data-anim="hero-float"]')
        if (floatLayer) {
          return pointerParallax(root.current!, floatLayer, root.current!.querySelector('[data-anim="hero-friends"]'))
        }
      })
    },
    { scope: root },
  )

  return (
    <section id="top" ref={root} className="hero section scheme-auto" aria-labelledby="hero-title">
      <div className="hero__atmos" aria-hidden="true" />
      <div className="hero__inner container">
        <div className="hero__copy">
          <p className="eyebrow" data-anim="eyebrow">
            {t.hero.eyebrow}
          </p>
          <h1 id="hero-title" className="hero__title">
            {t.hero.lines.map((line, i) => (
              <span key={i} data-anim="headline-line" className={i === 1 ? 'hero__title-accent' : undefined}>
                <Tight>{line}</Tight>
              </span>
            ))}
          </h1>
          <StoreBadges className="hero__badges" />
        </div>
        <div className="hero__visual">
          <HeroPhone ref={tilt} />
        </div>
      </div>
      <SectionTransition fill="var(--bg-modes)" className="seam--hero" />
    </section>
  )
}
