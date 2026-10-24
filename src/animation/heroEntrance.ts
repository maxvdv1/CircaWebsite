import { gsap, EASE } from './gsap'

/**
 * Hero entrance: one short timeline, ~1.4 s end to end.
 * 1. nav fades in  2. headline rises (lines, not letters)  3. badges  4. phone settles.
 * Hooks are `data-anim` attributes, so markup and choreography stay independent.
 */
export function heroEntrance(scope: HTMLElement, nav: HTMLElement | null) {
  const q = gsap.utils.selector(scope)
  const tl = gsap.timeline({ defaults: { ease: EASE.out } })

  if (nav) tl.from(nav, { autoAlpha: 0, y: -8, duration: 0.6 }, 0)
  tl.from(q('[data-anim="eyebrow"]'), { autoAlpha: 0, y: 12, duration: 0.6 }, 0.1)
    .from(q('[data-anim="headline-line"]'), { autoAlpha: 0, y: 26, duration: 0.85, stagger: 0.09 }, 0.18)
    .from(q('[data-anim="badges"]'), { autoAlpha: 0, y: 14, duration: 0.7 }, 0.55)
    .from(
      q('[data-anim="hero-phone"]'),
      { autoAlpha: 0, y: 36, rotationX: 6, scale: 0.97, duration: 1.25, ease: EASE.expo, transformOrigin: '50% 80%' },
      0.25,
    )
    .from(q('[data-anim="hero-glow"]'), { autoAlpha: 0, scale: 0.9, duration: 1.6, ease: EASE.outSoft }, 0.2)
    .from(document.querySelectorAll('[data-anim="cue"]'), { autoAlpha: 0, duration: 0.6 }, 0.9)

  // Friends drop in around the phone once it has landed.
  tl.from(q('[data-anim="friend"]'), { autoAlpha: 0, y: 14, scale: 0.85, duration: 0.6, stagger: 0.1, ease: EASE.out }, 0.9)

  return tl
}
