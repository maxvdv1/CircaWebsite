import { gsap, EASE } from './gsap'

/**
 * Product motion: the phones respond to the page, never on their own beyond a slow breath.
 * All transforms; nothing here touches layout.
 */

/** A slow, small float. 6px over ~5s; the phone breathes, it does not bob. */
export function float(el: Element, amplitude = 6, duration = 5) {
  return gsap.to(el, { y: -amplitude, duration: duration / 2, ease: 'sine.inOut', yoyo: true, repeat: -1 })
}

/**
 * Pointer parallax for the hero: the phone leans a few degrees toward the cursor and the friends
 * drift the other way, so the scene reads as depth. Fine pointers only. Returns a cleanup.
 */
export function pointerParallax(area: HTMLElement, phone: Element, friends: Element | null) {
  if (!window.matchMedia('(pointer: fine)').matches) return () => {}
  const rx = gsap.quickTo(phone, 'rotationX', { duration: 0.8, ease: 'power3.out' })
  const ry = gsap.quickTo(phone, 'rotationY', { duration: 0.8, ease: 'power3.out' })
  const fx = friends ? gsap.quickTo(friends, 'x', { duration: 1, ease: 'power3.out' }) : null
  const fy = friends ? gsap.quickTo(friends, 'y', { duration: 1, ease: 'power3.out' }) : null
  const onMove = (e: PointerEvent) => {
    const r = area.getBoundingClientRect()
    const nx = (e.clientX - r.left) / r.width - 0.5
    const ny = (e.clientY - r.top) / r.height - 0.5
    ry(nx * 8)
    rx(-ny * 6)
    fx?.(-nx * 14)
    fy?.(-ny * 10)
  }
  const onLeave = () => {
    rx(0)
    ry(0)
    fx?.(0)
    fy?.(0)
  }
  area.addEventListener('pointermove', onMove)
  area.addEventListener('pointerleave', onLeave)
  return () => {
    area.removeEventListener('pointermove', onMove)
    area.removeEventListener('pointerleave', onLeave)
  }
}

/** Hero phone: as the hero scrolls away the device straightens a touch and drifts up. */
export function heroPhoneScroll(scrollEl: Element, trigger: Element) {
  return gsap.to(scrollEl, {
    rotationY: 7,
    rotationX: -3,
    y: -48,
    ease: EASE.none,
    scrollTrigger: { trigger, start: 'top top', end: 'bottom top', scrub: 0.6 },
  })
}

/** Social: the two phones start close together and separate as the section arrives. */
export function socialSeparate(left: Element, right: Element, trigger: Element) {
  const tl = gsap.timeline({
    scrollTrigger: { trigger, start: 'top 85%', end: 'center 55%', scrub: 0.8 },
  })
  tl.from(left, { xPercent: 14, rotation: 0, y: 40, ease: EASE.none }, 0).from(
    right,
    { xPercent: -14, rotation: 0, y: 80, ease: EASE.none },
    0,
  )
  return tl
}

/** Final CTA: the C arrives once, quietly. The dart lands last. */
export function ctaMark(mark: Element, dart: Element | null, trigger: Element) {
  const tl = gsap.timeline({ scrollTrigger: { trigger, start: 'top 75%', toggleActions: 'play none none reverse' } })
  tl.from(mark, { autoAlpha: 0, scale: 0.92, y: 20, duration: 1.1, ease: EASE.expo })
  if (dart) tl.from(dart, { x: 14, y: -14, autoAlpha: 0, duration: 0.5, ease: EASE.outSoft }, 0.45)
  return tl
}

/** Count a number up once when it enters view. Writes text only; formatting is the caller's. */
export function countUp(el: HTMLElement, to: number, format: (n: number) => string, trigger: Element) {
  const state = { v: 0 }
  el.textContent = format(0)
  return gsap.to(state, {
    v: to,
    duration: 1.4,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = format(Math.round(state.v))
    },
    scrollTrigger: { trigger, start: 'top 75%', toggleActions: 'play none none reset' },
  })
}
