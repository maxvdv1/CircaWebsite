import { useRef, type ReactNode } from 'react'
import { useGSAP, gsap, MQ } from '../animation/gsap'
import { revealOnScroll } from '../animation/sectionReveals'
import { ArtAlgemeen, ArtGeografie, ArtTijdlijn, ArtPercentage } from '../components/modes/ModeArt'
import { Tight } from '../components/ui/Tight'
import { useI18n } from '../i18n'
import './modes.css'

type ModeKey = 'algemeen' | 'geografie' | 'tijdlijn' | 'percentage'

/** The four mechanics the app ships (Category.forKind: estimate · mapPin · timeline · percentage). */
const MODES: { key: ModeKey; art: ReactNode }[] = [
  { key: 'algemeen', art: <ArtAlgemeen /> },
  { key: 'geografie', art: <ArtGeografie /> },
  { key: 'tijdlijn', art: <ArtTijdlijn /> },
  { key: 'percentage', art: <ArtPercentage /> },
]

export function GameModesSection() {
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
    <section id="spelvormen" ref={root} className="modes section scheme-light" aria-labelledby="modes-title">
      <div className="container">
        <header className="modes__head">
          <h2 id="modes-title" className="display" data-reveal>
            <Tight>{t.modes.title}</Tight>
          </h2>
        </header>
        <ul className="modes__grid">
          {MODES.map((m) => {
            const c = t.modes.items[m.key]
            return (
              <li key={m.key} className={`mode mode--${m.key}`} data-reveal>
                <div className="mode__art">{m.art}</div>
                <div className="mode__body">
                  <h3 className="mode__name">{c.name}</h3>
                  <p className="mode__line">{c.line}</p>
                  <p className="mode__example">“{c.example}”</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
