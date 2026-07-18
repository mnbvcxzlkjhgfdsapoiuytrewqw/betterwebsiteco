import { motion } from 'framer-motion'
import Button from '../Button'

/**
 * Shared hero for campaign/landing pages.
 * Reuses Hero.jsx's visual language (type scale, motion, spacing) but takes
 * copy + CTAs as props so every campaign page doesn't fork the component.
 *
 * accentWord: the word/phrase in the headline rendered in italic accent color
 *             (matches the "That Sell." treatment on the homepage hero)
 */
export default function CampaignHero({
  eyebrow,
  headline,
  accentWord,
  subhead,
  primaryCta = { label: 'Book a Free Strategy Call', href: '#inquiry' },
  secondaryCta,
  visual,
}) {
  return (
    <section className="relative pt-20 md:pt-28 pb-24 overflow-hidden">
      <div className={`container-bw grid gap-14 items-center ${visual ? 'md:grid-cols-2' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={visual ? '' : 'max-w-3xl'}
        >
          {eyebrow && <p className="eyebrow mb-6">{eyebrow}</p>}
          <h1
            className="font-display font-semibold leading-[0.98] tracking-tight text-[44px] sm:text-[64px] lg:text-[80px]"
            style={{ color: 'var(--text-primary)' }}
          >
            {headline}
            {accentWord && (
              <>
                {' '}
                <span className="italic font-normal" style={{ color: 'var(--accent)' }}>
                  {accentWord}
                </span>
              </>
            )}
          </h1>
          {subhead && (
            <p className="mt-7 text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
              {subhead}
            </p>
          )}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {primaryCta && (
              <Button href={primaryCta.href} variant="primary">
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </motion.div>

        {visual && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
          >
            {visual}
          </motion.div>
        )}
      </div>
    </section>
  )
}
