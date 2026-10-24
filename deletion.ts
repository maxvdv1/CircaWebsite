import type { Lang } from '../i18n'
import type { LegalDoc } from './types'
import { deletionNl } from './deletion.nl'
import { deletionEn } from './deletion.en'
import { deletionEs } from './deletion.es'

export const deletion: Record<Lang, LegalDoc> = { nl: deletionNl, en: deletionEn, es: deletionEs }
