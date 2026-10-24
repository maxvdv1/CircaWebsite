/**
 * Legal documents as data, so the three languages share one layout.
 * Inline markup in strings: **bold**, [label](https://…), and {owner} {tradeName} {address} {kvk}
 * {email} {domain} placeholders filled from config/site.ts.
 */
export type Block =
  | string
  | { list: string[] }
  | { steps: string[] }
  | { table: { head: string[]; rows: string[][] } }
  /** The email-request card on the deletion page. */
  | { request: { title: string; intro: string; subject: string; body: string; copy: string; copied: string; open: string } }

export interface LegalSection {
  id: string
  title: string
  blocks: Block[]
}

export interface LegalDoc {
  title: string
  lead: string
  sections: LegalSection[]
}

export interface LegalUi {
  updated: (date: string) => string
  contents: string
  back: string
  governingNote: string | null
  privacy: string
  terms: string
  deletion: string
}
