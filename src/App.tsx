import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './sections/HeroSection'
import { GameModesSection } from './sections/GameModesSection'
import { SocialGameplaySection } from './sections/SocialGameplaySection'
import { DailyExperienceSection } from './sections/DailyExperienceSection'
import { FaqSection } from './sections/FaqSection'
import { DownloadSection } from './sections/DownloadSection'
import { ScrollCue } from './components/layout/SectionTransition'
import { useI18n } from './i18n'

export default function App() {
  const { t } = useI18n()
  return (
    <>
      <a className="skip-link" href="#main">
        {t.a11y.skip}
      </a>
      <div id="nav-sentinel" aria-hidden="true" style={{ position: 'absolute', top: 0, height: 1, width: 1 }} />
      <Nav />
      <main id="main">
        <HeroSection />
        <div className="cue-anchor">
          <ScrollCue href="#spelvormen" label={t.a11y.scrollCue} />
        </div>
        <GameModesSection />
        <SocialGameplaySection />
        <DailyExperienceSection />
        <FaqSection />
        <DownloadSection />
      </main>
      <Footer />
    </>
  )
}
