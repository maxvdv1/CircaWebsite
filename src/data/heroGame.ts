/**
 * The hero's playable round. Three questions, four friends, all numbers real:
 *  - Jupiter: volume 1,4313e15 km³ / Earth 1,0832e12 km³ ≈ 1.321 Earths (NASA planetary fact sheet)
 *  - Chinese Muur: 21.196 km (Chinese national survey, 2012)
 *  - Zon: ≈ 1,3 miljoen Earths (NASA)
 *  - Machu Picchu: 13,163° S, 72,545° W; friends' distances are great-circle (haversine)
 * Photos: Jupiter and Sun are NASA imagery (from the iOS app's Discover set);
 * the Great Wall is "2018-10-17-Great Wall of China" by Pixelwuwu, CC BY-SA 4.0 (cropped).
 */
import jupiter from '../assets/questions/jupiter.webp'
import greatwall from '../assets/questions/greatwall.webp'
import sun from '../assets/questions/sun.webp'
import { avatars } from './avatars'
import type { LatLng } from '../components/map/mercator'

export type NumberKey = 'jupiter' | 'wall' | 'sun'
export type QuestionKey = NumberKey | 'machu'
export type PlaceKey = 'bolivia' | 'colombia' | 'peru' | 'mexico'

export interface NumberQuestion {
  kind: 'number'
  key: NumberKey
  image: string
  truth: number
  max: number
  step: number
  /** Where the slider rests before anyone touches it. */
  start: number
  /** What the auto-play "you" answers. */
  demoGuess: number
  /** Each friend's answer, keyed by friend id. */
  answers: Record<FriendId, number>
}

/** A map round: drag the map until the pin sits on the place. */
export interface MapQuestion {
  kind: 'map'
  key: 'machu'
  truth: LatLng
  /** Where the map opens: far enough away that you have to go looking. */
  start: LatLng
  demoGuess: LatLng
  answers: Record<FriendId, { at: LatLng; place: PlaceKey }>
}

export type HeroQuestion = NumberQuestion | MapQuestion

export type FriendId = 'lisa' | 'daan' | 'sophie' | 'thomas'

export const friends: { id: FriendId; name: string; avatar: string }[] = [
  { id: 'lisa', name: 'Lisa', avatar: avatars.lisa },
  { id: 'daan', name: 'Daan', avatar: avatars.daan },
  { id: 'sophie', name: 'Sophie', avatar: avatars.sophie },
  { id: 'thomas', name: 'Thomas', avatar: avatars.thomas },
]

export const heroQuestions: HeroQuestion[] = [
  {
    kind: 'number',
    key: 'jupiter',
    image: jupiter,
    truth: 1321,
    max: 3000,
    step: 10,
    start: 500,
    demoGuess: 1200,
    answers: { lisa: 1000, daan: 300, sophie: 1500, thomas: 25 },
  },
  {
    kind: 'map',
    key: 'machu',
    truth: { lat: -13.163, lng: -72.545 },
    start: { lat: -2, lng: -46 },
    demoGuess: { lat: -14.2, lng: -71.2 },
    answers: {
      lisa: { at: { lat: -16.5, lng: -68.15 }, place: 'bolivia' }, // La Paz, 601 km
      daan: { at: { lat: 4.71, lng: -74.07 }, place: 'colombia' }, // Bogotá, 1.995 km
      sophie: { at: { lat: -12.05, lng: -77.04 }, place: 'peru' }, // Lima, 503 km
      thomas: { at: { lat: 19.43, lng: -99.13 }, place: 'mexico' }, // Mexico-Stad, 4.648 km
    },
  },
  {
    kind: 'number',
    key: 'wall',
    image: greatwall,
    truth: 21196,
    max: 50000,
    step: 100,
    start: 10000,
    demoGuess: 25000,
    answers: { lisa: 18000, daan: 6000, sophie: 21500, thomas: 40000 },
  },
  {
    kind: 'number',
    key: 'sun',
    image: sun,
    truth: 1300000,
    max: 3000000,
    step: 10000,
    start: 500000,
    demoGuess: 1250000,
    answers: { lisa: 1000000, daan: 109, sophie: 2000000, thomas: 500000 },
  },
]
