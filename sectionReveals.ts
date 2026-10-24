import { gsap, ScrollTrigger, EASE } from './gsap'

/**
 * Generic scroll reveal for anything marked `data-reveal` inside `scope`.
 * Opacity 0 → 1, y 20 → 0, ~0.8 s, batched so siblings entering together stagger lightly.
 * Plays forward on enter and resets when scrolled back above, so it works in both directions.
 */
export function revealOnScroll(scope: HTMLElement) {
  const items = gsap.utils.toArray<HTMLElement>('[data-reveal]', scope)
  if (!items.length) return
  gsap.set(items, { autoAlpha: 0, y: 20 })
  ScrollTrigger.batch(items, {
    start: 'top 96%',
    onEnter: (batch) =>
      gsap.to(batch, { autoAlpha: 1, y: 0, duration: 0.8, ease: EASE.out, stagger: 0.07, overwrite: true }),
    onLeaveBack: (batch) => gsap.to(batch, { autoAlpha: 0, y: 20, duration: 0.3, overwrite: true }),
  })
}
