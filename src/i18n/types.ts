import type { nl } from './nl'

/** Same shape as the Dutch source, with any string allowed in each slot. */
type Widen<T> = T extends string
  ? string
  : T extends (...args: never[]) => unknown
    ? T
    : T extends readonly (infer U)[]
      ? Widen<U>[]
      : { [K in keyof T]: Widen<T[K]> }

export type Dict = Widen<typeof nl>
export type Lang = 'nl' | 'en' | 'es'
export const LANGS: Lang[] = ['nl', 'en', 'es']
