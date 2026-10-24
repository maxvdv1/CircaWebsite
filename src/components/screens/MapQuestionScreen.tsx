import { forwardRef, useEffect, useMemo, useRef } from 'react'
import type { MapQuestion } from '../../data/heroGame'
import { useI18n } from '../../i18n'
import { WorldMap, type MapPin, type WorldMapHandle } from '../map/WorldMap'
import type { LatLng } from '../map/mercator'
import { StatusBar, Chevron } from './StatusBar'
import type { Phase, RankedEntry } from './QuestionScreen'
import './question.css'

/** Zoom that fits Mexico City to Santiago around Machu Picchu on the phone. */
const REVEAL_ZOOM = 0.42

/**
 * The hero's map round, built like the app's: the map fills the screen, the pin stays in the
 * middle and you move the world under it. HeroPhone owns the state and drives the map through
 * the forwarded handle (auto-play pans it; the visitor drags it).
 */
export const MapQuestionScreen = forwardRef<
  WorldMapHandle,
  {
    q: MapQuestion
    index: number
    total: number
    phase: Phase
    pressed: boolean
    you: LatLng | null
    ranked: RankedEntry[]
    friendsAt: { id: string; avatar: string; at: LatLng; tone: 'close' | 'near' | 'far' }[]
    youAvatar: string
    interactive: boolean
    onInteract: () => void
    onAction: () => void
  }
>(function MapQuestionScreen({ q, index, total, phase, pressed, you, ranked, friendsAt, youAvatar, interactive, onInteract, onAction }, mapRef) {
  const { t, num } = useI18n()
  const P = t.play
  const revealed = phase === 'revealed'
  const touch = useRef(typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches)

  const pins: MapPin[] = useMemo(
    () => [
      ...friendsAt.map((f) => ({ id: f.id, at: f.at, avatar: f.avatar, kind: 'friend' as const, tone: f.tone })),
      ...(you ? [{ id: 'you', at: you, avatar: youAvatar, kind: 'you' as const }] : []),
      { id: 'truth', at: q.truth, kind: 'truth' as const },
    ],
    [friendsAt, you, youAvatar, q.truth],
  )

  // On reveal, pull back and centre on the truth so every guess is in view.
  const handle = mapRef && typeof mapRef === 'object' ? mapRef : null
  useEffect(() => {
    if (revealed) handle?.current?.panTo(q.truth, { zoom: REVEAL_ZOOM, duration: 1.3 })
  }, [revealed, handle, q.truth])

  const me = ranked.find((r) => r.you)
  const rank = me ? ranked.indexOf(me) + 1 : 0

  return (
    <div className={`scr qs qs--map ${revealed ? 'is-revealed' : ''}`}>
      <WorldMap
        ref={mapRef}
        start={q.start}
        interactive={interactive}
        revealed={revealed}
        pins={pins}
        truth={q.truth}
        label={P.mapLabel}
        onInteract={onInteract}
      />
      <div className="qs-map__top">
        <StatusBar />
        <header className="qs-head">
          <span className="rnd-head__back">
            <Chevron />
          </span>
          <div className="qs-head__title">
            <strong>{P.group}</strong>
            <span>{P.round(index + 1, total)}</span>
          </div>
          <span className="qs-head__timer" aria-hidden="true">
            0:{String(24 - index * 3).padStart(2, '0')}
          </span>
        </header>
        <div className="qs-map__q" key={q.key}>
          <span className="chip">{P.chipGeo}</span>
          <p>{P.questions[q.key].q}</p>
        </div>
      </div>

      <div className="qs-map__panel">
        <span className="qs-answer__label">{revealed ? `${P.truth}: ${P.truthPlace}` : P.yourPin}</span>
        <span className="qs-map__result" aria-live="polite">
          {revealed && me
            ? rank === 1
              ? `${P.resultWin} ${num(Math.round(me.delta))} km`
              : P.result(`${num(Math.round(me.delta))} km`, rank, ranked.length)
            : touch.current
              ? P.mapHintTouch
              : P.mapHint}
        </span>
        <button type="button" className={`qs-cta ${pressed ? 'is-pressed' : ''}`} onClick={onAction}>
          {revealed ? P.next : P.lock}
        </button>
      </div>
    </div>
  )
})
