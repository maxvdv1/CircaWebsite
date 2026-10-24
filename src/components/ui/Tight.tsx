/**
 * Plus Jakarta Sans gives the full stop generous left side-bearing, which opens a visible gap at
 * display sizes ("Win ."). This pulls a trailing full stop back in. Text stays one string for
 * screen readers.
 */
export function Tight({ children }: { children: string }) {
  if (!children.endsWith('.')) return <>{children}</>
  return (
    <>
      {children.slice(0, -1)}
      <span className="tight-dot">.</span>
    </>
  )
}
