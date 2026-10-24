/** iOS status bar at 9:41, the way Apple shows it. */
export function StatusBar({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  return (
    <div className={`sb sb--${tone}`} aria-hidden="true">
      <span className="sb__time">9:41</span>
      <span className="sb__icons">
        <svg width="18" height="12" viewBox="0 0 18 12">
          <rect x="0" y="8" width="3" height="4" rx="1" fill="currentColor" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" fill="currentColor" />
          <rect x="10" y="3" width="3" height="9" rx="1" fill="currentColor" />
          <rect x="15" y="0" width="3" height="12" rx="1" fill="currentColor" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12">
          <path d="M8 11.5 5.6 9a3.4 3.4 0 0 1 4.8 0Z" fill="currentColor" />
          <path d="M3.6 7a6.2 6.2 0 0 1 8.8 0l-1.3 1.3a4.4 4.4 0 0 0-6.2 0Z" fill="currentColor" />
          <path d="M1.4 4.8a9.3 9.3 0 0 1 13.2 0l-1.3 1.3a7.5 7.5 0 0 0-10.6 0Z" fill="currentColor" />
        </svg>
        <svg width="27" height="13" viewBox="0 0 27 13">
          <rect x="0.5" y="0.5" width="23" height="12" rx="3.8" fill="none" stroke="currentColor" opacity="0.4" />
          <rect x="2.5" y="2.5" width="19" height="8" rx="2.2" fill="currentColor" />
          <path d="M25 4.5v4a2 2 0 0 0 0-4Z" fill="currentColor" opacity="0.45" />
        </svg>
      </span>
    </div>
  )
}

export function Chevron({ dir = 'left' }: { dir?: 'left' | 'right' | 'down' }) {
  const rot = dir === 'left' ? 0 : dir === 'right' ? 180 : 270
  return (
    <svg width="12" height="20" viewBox="0 0 12 20" aria-hidden="true" style={{ transform: `rotate(${rot}deg)` }}>
      <path d="M10 2 2 10l8 8" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
