import { motion } from 'framer-motion'
import Button from './Button'

export default function FinalCTA({
  headline = 'Your next customer is already online.',
  subhead = "Let's build the website they'll remember.",
  cta = { label: 'Book a Free Strategy Call', href: '#inquiry' },
}) {
  return (
    <section className="py-32 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw text-center max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-4xl md:text-5xl leading-tight mb-6"
          style={{ color: 'var(--text-primary)' }}
        >
          {headline}
        </motion.h2>
        <p className="mb-10" style={{ color: 'var(--text-secondary)' }}>
          {subhead}
        </p>
        <Button href={cta.href} variant="primary">
          {cta.label}
        </Button>
      </div>
    </section>
  )
}
