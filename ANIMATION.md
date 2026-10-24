# Circa web: animation architecture

One library: **GSAP 3 + ScrollTrigger**, via `@gsap/react`'s `useGSAP()` (automatic cleanup).
CSS handles hovers, the theme toggle and colour transitions. No Lenis (native scrolling keeps
keyboard, find-in-page and assistive tech behaving), no Motion, no Magic UI.

## Layers

| Concern | Where | Notes |
| --- | --- | --- |
| Plugin registration, easing vocabulary, media queries | `src/animation/gsap.ts` | Import gsap only from here. |
| Hero entrance | `src/animation/heroEntrance.ts` | One ~1.4 s timeline: nav → eyebrow → headline lines → badges → phone → friends around it. |
| Hero round (playable) | `src/sections/HeroPhone.tsx` | Auto-play script (friends answer → slider moves → Zet vast → reveal → next question), paused off-screen. First touch hands the round to the visitor. Reveal visuals are CSS transitions keyed on `.is-revealed` / `.friend.is-*`. |
| Pointer parallax | `productMotion.pointerParallax` | Phone leans ±8°, friends drift opposite. Fine pointers only. |
| Scroll reveals | `src/animation/sectionReveals.ts` | Anything with `data-reveal`: opacity 0→1, y 20→0, 0.8 s, `ScrollTrigger.batch`. Resets when scrolled back above, so it replays both ways. |
| Product motion | `src/animation/productMotion.ts` | `float` (hero breath), `heroPhoneScroll` (scrubbed straighten + drift), `socialSeparate` (two phones part as the section enters), `ctaMark` (C + dart land once), `countUp` (daily number). |
| Micro-interactions | component CSS | Badges, nav CTA, mode cards, FAQ, theme knob. Transform/opacity only. |
| Theme transition | `src/lib/theme.ts` + CSS | View Transitions crossfade where supported; section grounds transition `background-color`. |

Each section owns its triggers inside `useGSAP({ scope })` and wraps them in
`gsap.matchMedia().add('(prefers-reduced-motion: no-preference)', …)`. With reduced motion
nothing is hidden or moved: the page is complete without animation, and without JavaScript the
markup is already in its final state (elements are only hidden by GSAP at runtime).

## Hooks (stable `data-anim` names)

Hero: `nav`, `eyebrow`, `headline-line`, `badges`, `hero-phone`, `hero-glow`, `hero-float`,
`hero-friends`, `friend`, `cue`. Timings of the auto-play live in the `T` table at the top of `HeroPhone.tsx`.

Social: `.social__phone--left|right` refs; inside the screens `turn` (duel) and `ccard` (chat card).

Daily: `daily-card`, `daily-number`, `daily-marker`, `daily-truth`, `daily-bubble`.

CTA: `cta-mark` (and `.circa-dart` inside it), `cta-copy`.

To add a richer sequence later, write a new function in `productMotion.ts` (or a new module) that
takes the section root and uses these hooks, then call it from that section's `useGSAP`. Layout
does not change.

## Rules we hold to

- Transforms and opacity only. `will-change` is not set globally.
- Scrub only where scroll position *is* the meaning (hero phone, social phones). Everything else
  is a one-shot with `toggleActions`.
- The hero is never pinned.
- Triggers are created top-to-bottom in render order, so `ScrollTrigger.refresh()` order is right.
