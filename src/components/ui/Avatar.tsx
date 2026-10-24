export function Avatar({
  src,
  name,
  size = 36,
  ring,
  className = '',
  eager = false,
}: {
  src: string
  name: string
  size?: number
  ring?: string
  className?: string
  eager?: boolean
}) {
  return (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={`avatar ${className}`}
      style={{ width: size, height: size, ...(ring ? { boxShadow: `0 0 0 2px ${ring}` } : null) }}
    />
  )
}
