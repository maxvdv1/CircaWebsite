import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, useState, type CSSProperties, type KeyboardEvent, type PointerEvent } from 'react'
import { gsap } from '../../animation/gsap'
import { MAP_H, MAP_W, project, unproject, type LatLng } from './mercator'
import './worldMap.css'

export interface MapPin {
  id: string
  at: LatLng
  avatar?: string
  kind: 'friend' | 'truth' | 'you'
  tone?: 'close' | 'near' | 'far'
}

export interface WorldMapHandle {
  /** Move the map so `ll` sits under the crosshair. */
  panTo: (ll: LatLng, opts?: { zoom?: number; duration?: number }) => void
  /** The lat/lng under the crosshair right now. */
  center: () => LatLng
}

type Data = { LAND: string; BORDERS: string }

/** Screen size of the phone, in points; the crosshair sits at FOCUS. */
const SCREEN_W = 393
const FOCUS = { x: SCREEN_W / 2, y: 450 }

/**
 * A draggable Mercator world in the app's map colours (sage sea, sand land).
 * The pin stays in the middle; the map moves, exactly like the iOS map round.
 * Mouse/pen: drag. Touch: tap to move there (so a finger can still scroll the page). Keys: arrows.
 */
export const WorldMap = forwardRef<WorldMapHandle, {
  start: LatLng
  interactive: boolean
  revealed: boolean
  pins: MapPin[]
  truth: LatLng
  label: string
  onInteract: () => void
}>(function WorldMap({ start, interactive, revealed, pins, truth, label, onInteract }, ref) {
  const [data, setData] = useState<Data | null>(null)
  const [dragging, setDragging] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const layerRef = useRef<HTMLDivElement>(null)
  const view = useRef({ ...project(start), z: 1 })
  const tween = useRef<gsap.core.Tween | null>(null)
  const drag = useRef<{ x: number; y: number; cx: number; cy: number; moved: boolean; touch: boolean } | null>(null)

  // The world outline is ~70 KB, so it loads only when the map is first needed.
  useEffect(() => {
    let live = true
    import('./worldData').then((m) => live && setData({ LAND: m.LAND, BORDERS: m.BORDERS }))
    return () => {
      live = false
    }
  }, [])

  const apply = useCallback(() => {
    const { x, y, z } = view.current
    const el = layerRef.current
    if (!el) return
    el.style.transform = `translate3d(${FOCUS.x - x * z}px, ${FOCUS.y - y * z}px, 0) scale(${z})`
    el.style.setProperty('--z', String(z))
  }, [])

  const clamp = () => {
    const v = view.current
    v.x = Math.min(MAP_W, Math.max(0, v.x))
    v.y = Math.min(MAP_H, Math.max(0, v.y))
  }

  useImperativeHandle(
    ref,
    () => ({
      panTo(ll, { zoom = view.current.z, duration = 0.9 } = {}) {
        const p = project(ll)
        tween.current?.kill()
        if (duration <= 0) {
          Object.assign(view.current, { x: p.x, y: p.y, z: zoom })
          apply()
          return
        }
        tween.current = gsap.to(view.current, { x: p.x, y: p.y, z: zoom, duration, ease: 'power3.inOut', onUpdate: apply })
      },
      center: () => unproject(view.current.x, view.current.y),
    }),
    [apply],
  )

  useEffect(() => {
    apply()
    return () => {
      tween.current?.kill()
    }
  }, [apply, data])

  /** Screen pixels per phone point (the phone is scaled and tilted on the page). */
  const k = () => (rootRef.current ? rootRef.current.getBoundingClientRect().width / SCREEN_W : 1)

  const onPointerDown = (e: PointerEvent) => {
    if (!interactive || revealed) return
    onInteract()
    tween.current?.kill()
    drag.current = { x: e.clientX, y: e.clientY, cx: view.current.x, cy: view.current.y, moved: false, touch: e.pointerType === 'touch' }
    if (!drag.current.touch) {
      ;(e.currentTarget as HTMLElement).setPointerCapture(e.pointerId)
      setDragging(true)
    }
  }
  const onPointerMove = (e: PointerEvent) => {
    const d = drag.current
    if (!d) return
    const dx = e.clientX - d.x
    const dy = e.clientY - d.y
    if (Math.abs(dx) + Math.abs(dy) > 4) d.moved = true
    if (d.touch) return
    const s = k() * view.current.z
    view.current.x = d.cx - dx / s
    view.current.y = d.cy - dy / s
    clamp()
    apply()
  }
  const onPointerUp = (e: PointerEvent) => {
    const d = drag.current
    drag.current = null
    setDragging(false)
    if (!d || d.moved || !rootRef.current) return
    // A tap: bring the tapped spot under the pin.
    const r = rootRef.current.getBoundingClientRect()
    const s = r.width / SCREEN_W
    const lx = (e.clientX - r.left) / s
    const ly = (e.clientY - r.top) / s
    const z = view.current.z
    const target = unproject(view.current.x + (lx - FOCUS.x) / z, view.current.y + (ly - FOCUS.y) / z)
    const p = project(target)
    tween.current?.kill()
    tween.current = gsap.to(view.current, {
      x: Math.min(MAP_W, Math.max(0, p.x)),
      y: Math.min(MAP_H, Math.max(0, p.y)),
      duration: 0.5,
      ease: 'power3.out',
      onUpdate: apply,
    })
  }
  const onKeyDown = (e: KeyboardEvent) => {
    if (!interactive || revealed) return
    const step = 70 / view.current.z
    const moves: Record<string, [number, number]> = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }
    const m = moves[e.key]
    if (!m) return
    e.preventDefault()
    onInteract()
    view.current.x += m[0]
    view.current.y += m[1]
    clamp()
    apply()
  }

  const t = project(truth)

  return (
    <div
      ref={rootRef}
      className={`wm ${dragging ? 'is-dragging' : ''} ${revealed ? 'is-revealed' : ''} ${interactive ? 'is-interactive' : ''}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={() => {
        drag.current = null
        setDragging(false)
      }}
      onKeyDown={onKeyDown}
      tabIndex={interactive ? 0 : -1}
      role="application"
      aria-label={label}
    >
      <div className="wm__layer" ref={layerRef} style={{ width: MAP_W, height: MAP_H } as CSSProperties}>
        <svg className="wm__svg" width={MAP_W} height={MAP_H} viewBox={`0 0 ${MAP_W} ${MAP_H}`} aria-hidden="true">
          {data && (
            <>
              <path d={data.LAND} className="wm__land" />
              <path d={data.BORDERS} className="wm__borders" />
            </>
          )}
          {/* Lines from every guess to the truth, drawn on reveal. */}
          <g className="wm__lines">
            {pins
              .filter((p) => p.kind !== 'truth')
              .map((p, i) => {
                const a = project(p.at)
                return <line key={p.id} x1={a.x} y1={a.y} x2={t.x} y2={t.y} style={{ transitionDelay: `${700 + i * 120}ms` }} />
              })}
          </g>
        </svg>
        {pins.map((p, i) => {
          const a = project(p.at)
          return (
            <span
              key={p.id}
              className={`wm-pin wm-pin--${p.kind} ${p.tone ? `is-${p.tone}` : ''}`}
              style={{ left: a.x, top: a.y, transitionDelay: p.kind === 'truth' ? '1500ms' : `${500 + i * 140}ms` } as CSSProperties}
            >
              <span className="wm-pin__body">{p.avatar && <img src={p.avatar} alt="" width={30} height={30} />}</span>
            </span>
          )
        })}
      </div>
      <span className="wm__crosshair" aria-hidden="true">
        <span className="wm__crosshair-pin" />
        <span className="wm__crosshair-dot" />
      </span>
    </div>
  )
})
