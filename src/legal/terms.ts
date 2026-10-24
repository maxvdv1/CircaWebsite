import type { Lang } from '../i18n'
import type { LegalDoc } from './types'
import { termsNl } from './terms.nl'
import { termsEn } from './terms.en'
import { termsEs } from './terms.es'

export const terms: Record<Lang, LegalDoc> = { nl: termsNl, en: termsEn, es: termsEs }
