import type { CSSProperties } from 'react'
import type { NumberQuestion } from '../../data/heroGame'
import { useI18n } from '../../i18n'
import { StatusBar, Chevron } from './StatusBar'
import './question.css'

export type Phase = 'answering' | 'revealed'

export interface RankedEntry {
  id: string
  name: string
  avatar: string
  value: number
  delta: number
  you?: boolean
}

/**
 * The hero's playable question screen. Purely presentational: HeroPhone owns the state.
 * The slider is a real <input type="range">, so it works with mouse, touch and keyboard.
 */
export function QuestionScreen({
  q,
  index,
  total,
  phase,
  guess,
  pressed,
  ranked,
  onGuess,
  onInteract,
  onAction,
}: {
  q: NumberQuestion
  index: number
  total: number
  phase: Phase
  guess: number
  pressed: boolean
  ranked: RankedEntry[]
  onGuess: (v: number) => void
  onInteract: () => void
  onAction: () => void
}) {
  const { t, num, signed } = useI18n()
  const P = t.play
  const Q = P.questions[q.key]
  const revealed = phase === 'revealed'
  const pct = (v: number) => `${Math.min(100, Math.max(0, (v / q.max) * 100))}%`
  const you = ranked.find((r) => r.you)!
  const youRank = ranked.indexOf(you) + 1

  return (
    <div className={`scr qs ${revealed ? 'is-revealed' : ''}`}>
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

      <figure className="qs-photo" key={q.key}>
        <img src={q.image} alt="" width={361} height={330} decoding="async" fetchPriority={index === 0 ? 'high' : 'auto'} />
        <span className="chip qs-photo__chip">{P.chip}</span>
        <figcaption className="qs-photo__q">{Q.q}</figcaption>
        <small className="qs-photo__credit">© {Q.credit}</small>
      </figure>

      <div className="qs-answer" aria-live="polite">
        <span className="qs-answer__label">{revealed ? P.truth : P.yourGuess}</span>
        <span className="qs-answer__value">
          {num(revealed ? q.truth : guess)} <small>{Q.unit}</small>
        </span>
        <span className="qs-answer__result">
          {revealed ? (youRank === 1 ? P.resultWin : P.result(`${signed(you.delta)}`, youRank, ranked.length)) : P.hint}
        </span>
      </div>

      <div className="qs-slider" style={{ '--p': pct(guess) } as CSSProperties}>
        <input
          type="range"
          min={0}
          max={q.max}
          step={q.step}
          value={guess}
          aria-label={P.sliderLabel}
          aria-valuetext={`${num(guess)} ${Q.unit}`}
          disabled={revealed}
          onPointerDown={onInteract}
          onKeyDown={onInteract}
          onChange={(e) => {
            onInteract()
            onGuess(Number(e.target.value))
          }}
        />
        <span className="qs-slider__truth" style={{ left: pct(q.truth) }} aria-hidden="true" />
        {ranked
          .filter((r) => !r.you)
          .map((r, i) => (
            <img
              key={r.id}
              className="qs-slider__mk"
              src={r.avatar}
              alt=""
              width={24}
              height={24}
              style={{ left: pct(r.value), transitionDelay: revealed ? `${200 + i * 70}ms` : '0ms' }}
            />
          ))}
        <span className="qs-slider__ends" aria-hidden="true">
          <span>0</span>
          <span>{num(q.max)}</span>
        </span>
      </div>

      <button type="button" className={`qs-cta ${pressed ? 'is-pressed' : ''}`} onClick={onAction}>
        {revealed ? P.next : P.lock}
      </button>
    </div>
  )
}
