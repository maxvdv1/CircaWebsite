import { useRef } from 'react'
import { useGSAP, gsap, MQ } from '../animation/gsap'
import { revealOnScroll } from '../animation/sectionReveals'
import { socialSeparate } from '../animation/productMotion'
import { IPhone } from '../components/device/IPhone'
import { DuelScreen } from '../components/screens/DuelScreen'
import { GroupChatScreen } from '../components/screens/GroupChatScreen'
import { SectionTransition } from '../components/layout/SectionTransition'
import { Tight } from '../components/ui/Tight'
import { useI18n } from '../i18n'
import './social.css'

export function SocialGameplaySection() {
  const root = useRef<HTMLElement>(null)
  const left = useRef<HTMLDivElement>(null)
  const right = useRef<HTMLDivElement>(null)
  const { t } = useI18n()
  const T = t.social

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MQ.motion, () => {
        revealOnScroll(root.current!)
        socialSeparate(left.current!, right.current!, root.current!.querySelector('.social__stage')!)
      })
    },
    { scope: root },
  )

  return (
    <section id="vrienden" ref={root} className="social section scheme-light" aria-labelledby="social-title">
      <div className="container">
        <header className="social__head">
          <p className="eyebrow" data-reveal>
            {T.eyebrow}
          </p>
          <h2 id="social-title" className="display" data-reveal>
            <Tight>{T.titleA}</Tight>{' '}
            <span className="social__muted">
              <Tight>{T.titleB}</Tight>
            </span>
          </h2>
        </header>

        <div className="social__stage">
          <div className="social__phone social__phone--left" ref={left}>
            <IPhone scale={0.66} label={T.duelLabel}>
              <DuelScreen />
            </IPhone>
            <p className="social__caption">
              <b>{T.duelCaption}</b> {T.duelText}
            </p>
          </div>
          <div className="social__phone social__phone--right" ref={right}>
            <IPhone scale={0.66} label={T.groupLabel}>
              <GroupChatScreen />
            </IPhone>
            <p className="social__caption">
              <b>{T.groupCaption}</b> {T.groupText}
            </p>
          </div>
        </div>
      </div>
      <SectionTransition fill="var(--bg-daily)" />
    </section>
  )
}
