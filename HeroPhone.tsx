import { forwardRef, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { gsap } from '../animation/gsap'
import { IPhone } from '../components/device/IPhone'
import { QuestionScreen, type Phase, type RankedEntry } from '../components/screens/QuestionScreen'
import { MapQuestionScreen } from '../components/screens/MapQuestionScreen'
import type { WorldMapHandle } from '../components/map/WorldMap'
import { distanceKm, type LatLng } from '../components/map/mercator'
import { friends, heroQuestions, type FriendId } from '../data/heroGame'
import { avatars } from '../data/avatars'
import { accuracyOf, type Accuracy } from '../lib/distribution'
import { useI18n } from '../i18n'

/**
 * The hero device: a playable round, now with a map question in the rotation.
 *
 * Auto-play (motion allowed, hero in view, nobody touching it):
 *   friends answer one by one → "you" answer (slider slides, or the map pans) → Lock it in →
 *   reveal → next question.
 * The moment a visitor touches the slider or the map, auto-play stops for good and the round is
 * theirs: everyone's answers are shown, they lock in, see their rank, then step on.
 *
 * Layers (each motion owns one transform):
 *   .hero-phone          entrance (heroEntrance)
 *   __float              idle breath + pointer parallax (productMotion)
 *   __scroll             scroll response (productMotion.heroPhoneScroll)
 *   __tilt               resting perspective, pure CSS
 *   .hero-friends        flat layer around the phone, outside the 3D so it stays crisp
 */

const T = {
  firstAnswer: 700,
  between: 480,
  slideAt: 2900,
  slideFor: 1.3,
  pressAt: 4500,
  revealAt: 4750,
  nextAt: 9600,
  /** The map round needs longer: the pan, then the zoom-out and the pins. */
  mapPanFor: 1.7,
  mapPressAt: 5000,
  mapRevealAt: 5250,
  mapNextAt: 11800,
}

/** Map accuracy is about distance, not percentage. */
const mapAccuracy = (km: number): Accuracy => (km <= 300 ? 'close' : km <= 1500 ? 'near' : 'far')

const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export const HeroPhone = forwardRef<HTMLDivElement>(function HeroPhone(_, scrollRef) {
  const { t, num, signed } = useI18n()
  const [qi, setQi] = useState(0)
  const [phase, setPhase] = useState<Phase>('answering')
  const [answered, setAnswered] = useState(() => (reducedMotion() ? friends.length : 0))
  const [guess, setGuess] = useState(() => {
    const q0 = heroQuestions[0]
    return q0.kind === 'number' ? q0.start : 0
  })
  const [pin, setPin] = useState<LatLng | null>(null)
  const [pressed, setPressed] = useState(false)
  const [auto, setAuto] = useState(() => !reducedMotion())
  const [inView, setInView] = useState(true)
  const rootRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<WorldMapHandle>(null)

  const q = heroQuestions[qi]

  // Pause the show when the hero is off screen or the tab is hidden.
  useEffect(() => {
    const el = rootRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting && !document.hidden), { threshold: 0.25 })
    io.observe(el)
    const onVis = () => setInView(!document.hidden && el.getBoundingClientRect().bottom > 0)
    document.addEventListener('visibilitychange', onVis)
    return () => {
      io.disconnect()
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [])

  // The auto-play script for the current question.
  useEffect(() => {
    if (!auto || !inView) return
    const timers: number[] = []
    const at = (ms: number, fn: () => void) => timers.push(window.setTimeout(fn, ms))
    let tween: gsap.core.Tween | null = null
    setPhase('answering')
    setPressed(false)
    setAnswered(0)
    setPin(null)
    friends.forEach((_, i) => at(T.firstAnswer + i * T.between, () => setAnswered(i + 1)))

    if (q.kind === 'number') {
      const state = { v: q.start }
      setGuess(q.start)
      at(T.slideAt, () => {
        tween = gsap.to(state, {
          v: q.demoGuess,
          duration: T.slideFor,
          ease: 'power2.inOut',
          onUpdate: () => setGuess(Math.round(state.v / q.step) * q.step),
        })
      })
      at(T.pressAt, () => setPressed(true))
      at(T.revealAt, () => {
        setPressed(false)
        setPhase('revealed')
      })
      at(T.nextAt, () => setQi((i) => (i + 1) % heroQuestions.length))
    } else {
      // Wait a frame so the map has mounted, then open it far from the answer.
      at(30, () => mapRef.current?.panTo(q.start, { zoom: 1, duration: 0 }))
      at(T.slideAt, () => mapRef.current?.panTo(q.demoGuess, { duration: T.mapPanFor }))
      at(T.mapPressAt, () => setPressed(true))
      at(T.mapRevealAt, () => {
        setPressed(false)
        setPin(mapRef.current?.center() ?? q.demoGuess)
        setPhase('revealed')
      })
      at(T.mapNextAt, () => setQi((i) => (i + 1) % heroQuestions.length))
    }
    return () => {
      timers.forEach(clearTimeout)
      tween?.kill()
    }
  }, [auto, inView, q])

  /** First touch: the round becomes the visitor's. */
  const takeOver = useCallback(() => {
    if (!auto) return
    setAuto(false)
    setAnswered(friends.length)
    setPressed(false)
    setPhase('answering')
    setPin(null)
  }, [auto])

  const onAction = useCallback(() => {
    takeOver()
    if (phase === 'answering') {
      if (q.kind === 'map') setPin(mapRef.current?.center() ?? q.start)
      setPhase('revealed')
    } else {
      const next = (qi + 1) % heroQuestions.length
      const nq = heroQuestions[next]
      setQi(next)
      if (nq.kind === 'number') setGuess(nq.start)
      setPin(null)
      setAnswered(friends.length)
      setPhase('answering')
    }
  }, [phase, qi, q, takeOver])

  /** Everyone ranked by how close they were: a number's difference, or a pin's distance in km. */
  const ranked: RankedEntry[] = useMemo(() => {
    if (q.kind === 'number') {
      const all: RankedEntry[] = [
        ...friends.map((f) => ({ id: f.id, name: f.name, avatar: f.avatar, value: q.answers[f.id], delta: q.answers[f.id] - q.truth })),
        { id: 'you', name: t.play.you, avatar: avatars.max, value: guess, delta: guess - q.truth, you: true },
      ]
      return all.sort((a, b) => Math.abs(a.delta) - Math.abs(b.delta))
    }
    const youAt = pin ?? q.demoGuess
    const all: RankedEntry[] = [
      ...friends.map((f) => {
        const km = distanceKm(q.answers[f.id].at, q.truth)
        return { id: f.id, name: f.name, avatar: f.avatar, value: km, delta: km }
      }),
      { id: 'you', name: t.play.you, avatar: avatars.max, value: 0, delta: distanceKm(youAt, q.truth), you: true },
    ]
    return all.sort((a, b) => Math.abs(a.delta) - Math.abs(b.delta))
  }, [q, guess, pin, t.play.you])

  const revealed = phase === 'revealed'
  const friendRank = ranked.filter((r) => !r.you)
  const closestId = ranked[0].id
  const worstId = friendRank[friendRank.length - 1].id

  const accOf = (id: FriendId): Accuracy =>
    q.kind === 'number' ? accuracyOf(q.answers[id] - q.truth, q.truth) : mapAccuracy(distanceKm(q.answers[id].at, q.truth))

  const friendsAt = useMemo(
    () =>
      q.kind === 'map'
        ? friends.map((f) => ({ id: f.id, avatar: f.avatar, at: q.answers[f.id].at, tone: mapAccuracy(distanceKm(q.answers[f.id].at, q.truth)) }))
        : [],
    [q],
  )

  /** What a friend's chip says: their answer before the reveal, how far off after. */
  const chip = (id: FriendId) => {
    if (q.kind === 'number') {
      const value = q.answers[id]
      return revealed ? (
        signed(value - q.truth)
      ) : (
        <>
          {num(value)}
          <small> {t.play.questions[q.key].unit}</small>
        </>
      )
    }
    const a = q.answers[id]
    return revealed ? `${num(Math.round(distanceKm(a.at, q.truth)))} km` : <>📍 {t.play.places[a.place]}</>
  }

  return (
    <div className="hero-phone" data-anim="hero-phone" ref={rootRef}>
      <div className="hero-phone__glow" data-anim="hero-glow" aria-hidden="true" />
      <div className="hero-phone__float" data-anim="hero-float">
        <div className="hero-phone__scroll" ref={scrollRef}>
          <div className="hero-phone__tilt">
            <IPhone scale={0.78} className="hero-phone__device" label={t.play.phoneLabel} interactive>
              {q.kind === 'number' ? (
                <QuestionScreen
                  q={q}
                  index={qi}
                  total={heroQuestions.length}
                  phase={phase}
                  guess={guess}
                  pressed={pressed}
                  ranked={ranked}
                  onGuess={setGuess}
                  onInteract={takeOver}
                  onAction={onAction}
                />
              ) : (
                <MapQuestionScreen
                  ref={mapRef}
                  q={q}
                  index={qi}
                  total={heroQuestions.length}
                  phase={phase}
                  pressed={pressed}
                  you={pin}
                  ranked={ranked}
                  friendsAt={friendsAt}
                  youAvatar={avatars.max}
                  interactive
                  onInteract={takeOver}
                  onAction={onAction}
                />
              )}
            </IPhone>
          </div>
        </div>
      </div>
      <div className="hero-phone__shadow" aria-hidden="true" />

      {/* Friends around the phone. Decorative for screen readers: the screen carries the round. */}
      <ul className="hero-friends" aria-hidden="true" data-anim="hero-friends">
        {friends.map((f, i) => {
          const acc = accOf(f.id)
          const state = revealed ? `is-${acc} ${f.id === closestId ? 'is-best' : ''} ${f.id === worstId ? 'is-worst' : ''}` : ''
          return (
            <li key={f.id} className={`friend friend--${i} ${i < answered ? 'has-answer' : ''} ${state}`} data-anim="friend">
              <span className="friend__face">
                <img src={f.avatar} alt="" width={56} height={56} />
                <svg className="friend__crown" viewBox="0 0 16 12">
                  <path d="M1 3.5 4.6 7 8 1l3.4 6L15 3.5 13.6 11H2.4Z" fill="var(--amber)" />
                </svg>
              </span>
              <span className="friend__name">{f.name}</span>
              <span className="friend__chip">
                <span className="friend__dots">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="friend__val" key={`${q.key}-${revealed}`}>
                  {chip(f.id)}
                </span>
              </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
})
