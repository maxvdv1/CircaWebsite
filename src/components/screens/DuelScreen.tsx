import { duel as D } from '../../data/demo'
import { useI18n } from '../../i18n'
import { StatusBar, Chevron } from './StatusBar'
import './screens.css'

const YEARS: [number, number] = [1900, 1920]
const W = 289
const x = (y: number) => ((y - YEARS[0]) / (YEARS[1] - YEARS[0])) * W

/** 1v1 duel: the scoreboard, whose turn it is, and the last round on a timeline. */
export function DuelScreen() {
  const { t } = useI18n()
  const T = t.duel
  const r = D.lastRound
  const current = D.rounds.indexOf('now') + 1
  return (
    <div className="scr scr--duel">
      <div className="scr__ambient" aria-hidden="true" />
      <StatusBar />
      <header className="duel-head">
        <span className="rnd-head__back">
          <Chevron />
        </span>
        <strong>{T.title}</strong>
        <span className="duel-head__dots" aria-hidden="true">
          •••
        </span>
      </header>

      <section className="duel-board">
        <div className="duel-board__p">
          <img src={D.you.avatar} alt="" width={68} height={68} className="is-you" />
          <span>{T.you}</span>
        </div>
        <div className="duel-board__score">
          <b>{D.you.score}</b>
          <i>–</i>
          <b>{D.them.score}</b>
        </div>
        <div className="duel-board__p">
          <img src={D.them.avatar} alt="" width={68} height={68} />
          <span>{D.them.name}</span>
        </div>
      </section>

      <div className="duel-rounds" aria-hidden="true">
        {D.rounds.map((s, i) => (
          <span key={i} className={`duel-rounds__dot is-${s}`} />
        ))}
      </div>
      <p className="duel-rounds__label">{T.roundOf(current, D.rounds.length)}</p>

      <section className="duel-turn" data-anim="turn">
        <span className="duel-turn__badge">{T.turn}</span>
        <p className="duel-turn__text">{T.turnText}</p>
        <span className="duel-turn__meta">{T.turnMeta}</span>
      </section>

      <section className="duel-last">
        <span className="duel-last__label">{T.last}</span>
        <p className="duel-last__q">{T.question}</p>
        <div className="tl" style={{ width: W }}>
          <span className="tl__line" />
          <span className="tl__truth" style={{ left: x(r.truth) }}>
            <b>{r.truth}</b>
          </span>
          <span className="tl__mark is-you" style={{ left: x(r.you) }}>
            <img src={D.you.avatar} alt="" width={28} height={28} />
          </span>
          <span className="tl__mark" style={{ left: x(r.them) }}>
            <img src={D.them.avatar} alt="" width={28} height={28} />
          </span>
          <span className="tl__yr" style={{ left: 0 }}>
            {YEARS[0]}
          </span>
          <span className="tl__yr" style={{ left: W }}>
            {YEARS[1]}
          </span>
        </div>
        <p className="duel-last__res">
          {T.resultYou} <b>{T.resultYouYears(r.truth - r.you)}</b>
          {T.resultMid} <b>{T.resultThemYears(r.truth - r.them)}</b>
          {T.resultEnd}
        </p>
      </section>

      <div className="duel-banter">
        <img src={D.them.avatar} alt="" width={26} height={26} />
        <p>
          <b>{D.them.name}</b>
          {T.banter}
        </p>
      </div>

      <div className="rnd-cta">{T.play(current)}</div>
    </div>
  )
}
