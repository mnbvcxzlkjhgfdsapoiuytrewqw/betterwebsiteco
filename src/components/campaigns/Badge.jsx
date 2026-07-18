/**
 * Small reusable pill badge, e.g. eyebrow-adjacent status/label chips.
 * variant: 'default' | 'accent'
 */
export default function Badge({ children, variant = 'default', dot = false }) {
  const style =
    variant === 'accent'
      ? { background: 'color-mix(in srgb, var(--accent) 14%, transparent)', color: 'var(--accent)', borderColor: 'transparent' }
      : { background: 'var(--bg-elevated)', color: 'var(--text-secondary)', borderColor: 'var(--border)' }

  return (
    <span
      className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border"
      style={style}
    >
      {dot && (
        <span
          className="h-1.5 w-1.5 rounded-full"
          style={{ background: variant === 'accent' ? 'var(--accent)' : 'var(--text-muted)' }}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  )
}
