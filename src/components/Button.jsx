import { motion } from 'framer-motion'

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-[12px] px-6 py-3 text-sm font-medium whitespace-nowrap focus-visible:outline-none'

  const style =
    variant === 'primary'
      ? { background: 'var(--accent)', color: 'var(--accent-text)' }
      : {
          background: 'transparent',
          color: 'var(--text-primary)',
          border: '1px solid var(--border-strong)',
        }

  const Comp = href ? motion.a : motion.button

  return (
    <Comp
      href={href}
      onClick={onClick}
      type={href ? undefined : type}
      className={`${base} ${className}`}
      style={style}
      whileHover={{ y: -1, filter: 'brightness(1.08)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      {children}
    </Comp>
  )
}
