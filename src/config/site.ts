/**
 * Everything a non-developer may need to change lives here.
 *
 * STORE LINKS: leave `null` until the listing is live. While a link is `null` its badge renders as
 * a non-clickable "Binnenkort" badge, so nobody is sent to a page that does not exist.
 */
export const site = {
  name: 'Circa',
  domain: 'letsplaycirca.com',
  url: 'https://letsplaycirca.com/',
  stores: {
    /** e.g. 'https://apps.apple.com/nl/app/circa/id0000000000' */
    appStore: null as string | null,
    /** e.g. 'https://play.google.com/store/apps/details?id=com.example.circa' */
    googlePlay: null as string | null,
  },
} as const

/** Section anchors; labels live in src/i18n. */
/**
 * Legal identity, used in the privacy policy and terms. Fill in before launch:
 * anything still between [brackets] is highlighted on the legal pages so it cannot slip through.
 */
export const legal = {
  owner: 'Max Van der Vlugt',
  tradeName: 'Vania BNL',
  address: 'Sophialaan, 1075 BS Amsterdam',
  kvk: '77645693',
  vat: 'NL003219179B04',
  email: 'info@letsplaycirca.com',
  /** ISO date of the current version of both documents. */
  updated: '2026-10-18',
} as const

export const nav = [
  { id: 'home', key: 'home', href: '#top' },
  { id: 'spelvormen', key: 'modes', href: '#spelvormen' },
  { id: 'vrienden', key: 'friends', href: '#vrienden' },
  { id: 'faq', key: 'faq', href: '#faq' },
] as const
