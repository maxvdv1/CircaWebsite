import { groupChat as G } from '../../data/demo'
import { useI18n } from '../../i18n'
import { CircaMark } from '../brand/CircaMark'
import { StatusBar, Chevron } from './StatusBar'
import './screens.css'

type Msg = { from: string; avatar: string; text: string; time: string; reaction?: string }

function Bubble({ m }: { m: Msg }) {
  return (
    <div className="msg">
      <img src={m.avatar} alt="" width={34} height={34} />
      <div>
        <span className="msg__meta">
          <b>{m.from}</b> {m.time}
        </span>
        <p className="msg__bubble">{m.text}</p>
        {m.reaction && <span className="msg__react">{m.reaction}</span>}
      </div>
    </div>
  )
}

/** Group chat with a Circa round result dropped into the conversation. */
export function GroupChatScreen() {
  const { t, num, signed } = useI18n()
  const T = t.chat
  const ranked = [...G.results].sort((a, b) => Math.abs(a.value - G.truth) - Math.abs(b.value - G.truth))
  return (
    <div className="scr scr--chat is-light">
      <StatusBar tone="dark" />
      <header className="chat-head">
        <span className="chat-head__back">
          <Chevron />
        </span>
        <span className="stack stack--light">
          {G.results.map((r) => (
            <img key={r.name} src={r.avatar} alt="" width={28} height={28} />
          ))}
        </span>
        <div className="chat-head__title">
          <strong>{T.group}</strong>
          <span>{T.members(G.members)}</span>
        </div>
      </header>

      <div className="chat-body">
        {G.messages.map((m) => (
          <Bubble key={m.key} m={{ ...m, text: T[m.key] }} />
        ))}

        <article className="ccard" data-anim="ccard">
          <header className="ccard__head">
            <CircaMark size={20} tone="onLight" />
            <span>{T.result}</span>
          </header>
          <p className="ccard__q">{T.question}</p>
          <p className="ccard__truth">
            {num(G.truth)} km <small>{T.truth}</small>
          </p>
          <ol className="ccard__list">
            {ranked.map((r, i) => (
              <li key={r.name}>
                <span className="ccard__pos">{i + 1}</span>
                <img src={r.avatar} alt="" width={24} height={24} />
                <span className="ccard__name">{r.name}</span>
                <span className="ccard__val">{num(r.value)}</span>
                <span className={`ccard__delta ${i === 0 ? 'is-close' : ''}`}>{signed(r.value - G.truth)}</span>
              </li>
            ))}
          </ol>
        </article>

        <Bubble m={{ ...G.after, text: T[G.after.key] }} />

        <div className="typing">
          <span />
          <span />
          <span />
          <em>{T.typing}</em>
        </div>
      </div>

      <footer className="chat-input">
        <span className="chat-input__plus">+</span>
        <span className="chat-input__field">{T.input}</span>
      </footer>
    </div>
  )
}
