import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/plus-jakarta-sans/wght.css'
import './styles/tokens.css'
import './styles/base.css'
import { LegalPage, type DocKind } from './legal/LegalPage'
const root = document.getElementById('root')!
const doc = root.dataset.doc
const kind: DocKind = doc === 'voorwaarden' || doc === 'verwijderen' ? doc : 'privacy'

createRoot(root).render(
  <StrictMode>
    <LegalPage kind={kind} />
  </StrictMode>,
)
