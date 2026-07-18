import { motion } from 'framer-motion'
import mascotImg from '../../assets/bee/bee-mascot.webp'

// Bee is a single character asset — one photographed pose, used consistently
// everywhere. No per-mood variants: whatever "pose" is requested, this is Bee.
export const BEE_MASCOT = { src: mascotImg, alt: 'Bee, the Better Website Co. mascot' }

const SIZES = {
  sm: 'h-12 w-auto',
  md: 'h-20 w-auto',
  lg: 'h-32 w-auto',
  xl: 'h-48 w-auto',
}

/**
 * Bee — the Better Website Co. brand character.
 * Purposeful, not decorative: only render where Bee's presence adds meaning.
 * Motion is always 150–300ms — nothing loud, nothing that competes with the CTA.
 *
 * `pose` is accepted for backwards compatibility with existing call sites but
 * has no effect — there's one mascot image, not a set of mood variants.
 */
export default function Bee({
  pose,
  size = 'md',
  className = '',
  animateIn = true,
  delay = 0,
  once = true,
}) {
  return (
    <motion.img
      src={BEE_MASCOT.src}
      alt={BEE_MASCOT.alt}
      initial={animateIn ? { opacity: 0, y: 10, scale: 0.96 } : false}
      whileInView={animateIn ? { opacity: 1, y: 0, scale: 1 } : undefined}
      viewport={animateIn ? { once, margin: '-40px' } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut', delay }}
      className={`${SIZES[size] || SIZES.md} select-none pointer-events-none ${className}`}
      draggable={false}
    />
  )
}
