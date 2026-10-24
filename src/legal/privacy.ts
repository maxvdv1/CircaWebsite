import type { Lang } from '../i18n'
import type { LegalDoc } from './types'
import { privacyNl } from './privacy.nl'
import { privacyEn } from './privacy.en'
import { privacyEs } from './privacy.es'

export const privacy: Record<Lang, LegalDoc> = { nl: privacyNl, en: privacyEn, es: privacyEs }
