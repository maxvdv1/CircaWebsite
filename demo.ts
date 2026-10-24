/**
 * Marketing demo data for the sections below the hero (the hero lives in heroGame.ts). Numbers only; every word shown on screen lives in src/i18n.
 * Every number is real or computed:
 *  - Titanic: 1912 · Chinese Muur: 21.196 km (2012 survey) · Mount Everest: 8.849 m (2020 survey)
 */
import { avatars } from './avatars'

export const duel = {
  you: { avatar: avatars.max, score: 3 },
  them: { name: 'Lisa', avatar: avatars.lisa, score: 2 },
  rounds: ['win', 'loss', 'win', 'win', 'loss', 'now', 'todo'] as const,
  lastRound: { truth: 1912, you: 1911, them: 1905 },
}

export const groupChat = {
  members: 6,
  truth: 21196,
  results: [
    { name: 'Sophie', avatar: avatars.sophie, value: 21500 },
    { name: 'Jasper', avatar: avatars.jasper, value: 22000 },
    { name: 'Emma', avatar: avatars.emma, value: 18000 },
  ],
  messages: [
    { from: 'Daan', avatar: avatars.daan, key: 'm1', time: '11:02' },
    { from: 'Lisa', avatar: avatars.lisa, key: 'm2', time: '11:16' },
    { from: 'Jasper', avatar: avatars.jasper, key: 'm3', time: '11:18', reaction: '👍 1' },
  ] as const,
  after: { from: 'Emma', avatar: avatars.emma, key: 'after', time: '11:22', reaction: '❤️ 3' } as const,
}

export const daily = {
  unit: 'm',
  truth: 8849,
  you: 8700,
  friends: [
    { id: 'lisa', name: 'Lisa', avatar: avatars.lisa, value: 8850 },
    { id: 'you', name: '', avatar: avatars.max, value: 8700 },
    { id: 'daan', name: 'Daan', avatar: avatars.daan, value: 9500 },
  ],
  chat: [
    { from: 'Lisa', avatar: avatars.lisa, key: 'c1' },
    { from: 'Daan', avatar: avatars.daan, key: 'c2' },
  ] as const,
}
