/**
 * One GSAP instance for the whole site. Every animation module imports from here so plugins are
 * registered exactly once and the easing vocabulary stays consistent.
 */
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

/** Premium, unhurried: fast start, long settle. No bounce, no elastic. */
export const EASE = {
  out: 'power3.out',
  outSoft: 'power2.out',
  expo: 'expo.out',
  inOut: 'power2.inOut',
  none: 'none',
} as const

/** Media queries the motion system branches on (used with gsap.matchMedia). */
export const MQ = {
  motion: '(prefers-reduced-motion: no-preference)',
  reduce: '(prefers-reduced-motion: reduce)',
  desktop: '(min-width: 921px)',
  mobile: '(max-width: 920px)',
} as const

export { gsap, ScrollTrigger, useGSAP }
