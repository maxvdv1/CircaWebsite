import { useLayoutEffect, useRef } from 'react'
import { useGSAP, gsap, MQ } from '../animation/gsap'
import { revealOnScroll } from '../animation/sectionReveals'
import { countUp } from '../animation/productMotion'
import { daily as D } from '../data/demo'
import { useI18n } from '../i18n'
import { Tight } from '../components/ui/Tight'
import './daily.css'

const DOMAIN: [number, number] = [8400, 9600]
const at = (v: number) => `${((v - DOMAIN[0]) / (DOMAIN[1] - DOMAIN[0])) * 100}%`

/**
 * The daily ritual: one question for everyone, a close result, friends reacting.
 *
 * Animation hooks for richer choreography later (kept stable on purpose):
 *   data-anim="daily-card"    the question card (question, correct answer, your guess and how far off it was)
 *   data-anim="daily-number"  your answer; counts up once (text written imperatively, see below)
 *   data-anim="daily-marker"  each friend's marker on the line
 *   data-anim="daily-truth"   the truth marker
 *   data-anim="daily-bubble"  each chat reaction
 */
export function DailyExperienceSection() {
  const root = useRef<HTMLElement>(null)
  const numberRef = useRef<HTMLSpanElement>(null)
  const { t, num, signed } = useI18n()
  const T = t.daily
  // The count-up writes this span's text, so React never owns it; the formatter follows the language.
  const fmt = useRef(num)

  useLayoutEffect(() => {
    fmt.current = num
    if (numberRef.current) numberRef.current.textContent = num(D.you)
  }, [num])

  useGSAP(
    () => {
      const mm = gsap.matchMedia()
      mm.add(MQ.motion, () => {
        revealOnScroll(root.current!)
        const card = root.current!.querySelector('[data-anim="daily-card"]')!
        if (numberRef.current) countUp(numberRef.current, D.you, (n) => fmt.current(n), card)
        gsap.from(root.current!.querySelectorAll('[data-anim="daily-marker"]'), {
          autoAlpha: 0,
          y: -10,
          stagger: 0.12,
          duration: 0.5,
          ease: 'power2.out',
          scrollTrigger: { trigger: card, start: 'top 70%', toggleActions: 'play none none reverse' },
        })
      })
    },
    { scope: root },
  )

  const diff = D.you - D.truth

  return (
    <section id="dagelijks" ref={root} className="daily section scheme-auto" aria-labelledby="daily-title">
      <div className="daily__atmos" aria-hidden="true" />
      <div className="container">
        <header className="daily__head">
          <h2 id="daily-title" className="display" data-reveal>
            <Tight>{T.title}</Tight>
          </h2>
        </header>

        <div className="daily__stage">
          <article className="dcard" data-anim="daily-card" data-reveal aria-label={T.cardLabel(T.question)}>
            <p className="dcard__q">
              {T.question} <span className="dcard__truth">{num(D.truth)} {D.unit}</span>
            </p>

            <div className="dcard__answer">
              <span className="dcard__label">{T.yourGuess}</span>
              <span className="dcard__value">
                <span ref={numberRef} data-anim="daily-number" />{' '}
                <small className="dcard__unit">
                  {D.unit}
                  <span className="dcard__delta">
                    {signed(diff)} {D.unit}
                  </span>
                </small>
              </span>
            </div>

            <div className="dline" aria-hidden="true">
              <span className="dline__track" />
              <span className="dline__truth" style={{ left: at(D.truth) }} data-anim="daily-truth">
                <b>{num(D.truth)}</b>
              </span>
              {D.friends.map((f) => (
                <span key={f.id} className={`dline__mk ${f.id === 'you' ? 'is-you' : ''}`} style={{ left: at(f.value) }} data-anim="daily-marker">
                  <img src={f.avatar} alt="" width={34} height={34} loading="lazy" />
                </span>
              ))}
              <span className="dline__end dline__end--start" style={{ left: 0 }}>
                {num(DOMAIN[0])}
              </span>
              <span className="dline__end dline__end--end" style={{ left: '100%' }}>
                {num(DOMAIN[1])}
              </span>
            </div>
          </article>

          <div className="dchat">
            {D.chat.map((c, i) => (
              <div key={c.key} className={`dbubble dbubble--${i}`} data-anim="daily-bubble" data-reveal>
                <img src={c.avatar} alt="" width={40} height={40} loading="lazy" />
                <p>
                  <b>{c.from}</b>
                  {T[c.key]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
