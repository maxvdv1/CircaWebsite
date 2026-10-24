import type { Lang } from '../i18n'
import type { LegalUi } from './types'

export const ui: Record<Lang, LegalUi> = {
  nl: {
    updated: (d) => `Laatst bijgewerkt: ${d}`,
    contents: 'Inhoud',
    back: 'Terug naar Circa',
    governingNote: null,
    privacy: 'Privacy',
    deletion: 'Account verwijderen',
    terms: 'Algemene voorwaarden',
  },
  en: {
    updated: (d) => `Last updated: ${d}`,
    contents: 'Contents',
    back: 'Back to Circa',
    governingNote: 'This is a translation. If it differs from the Dutch version, the Dutch version applies.',
    privacy: 'Privacy',
    deletion: 'Delete your account',
    terms: 'Terms of use',
  },
  es: {
    updated: (d) => `Última actualización: ${d}`,
    contents: 'Contenido',
    back: 'Volver a Circa',
    governingNote: 'Esto es una traducción. Si difiere de la versión neerlandesa, prevalece la versión neerlandesa.',
    privacy: 'Privacidad',
    deletion: 'Eliminar tu cuenta',
    terms: 'Términos de uso',
  },
}
