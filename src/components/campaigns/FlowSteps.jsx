import { motion } from 'framer-motion'

/**
 * Horizontal step-flow visual: A → B → C → ...
 * Used on the two "explainer" campaign pages (funnel-pages: Offer → Benefits
 * → Testimonials → Guarantee → CTA, landing-pages: Ad → Landing Page →
 * Conversion) to literally show the flow they're describing in copy.
 * steps: [{ title, copy }]
 */
export default function FlowSteps({ eyebrow, headline, steps }) {
  return (
    <section className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        {(eyebrow || headline) && (
          <div className="max-w-xl mb-16">
            {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
            {headline && (
              <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
                {headline}
              </h2>
            )}
          </div>
        )}
        <div className="flex flex-col md:flex-row md:items-stretch gap-4 md:gap-3">
          {steps.map((s, i) => (
            <div key={s.title} className="flex items-center gap-4 md:gap-3 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border p-6 flex-1"
                style={{
                  borderColor: s.highlight ? 'var(--accent)' : 'var(--border)',
                  background: 'var(--card)',
                }}
              >
                <p className="font-mono text-xs mb-2" style={{ color: 'var(--accent)' }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="font-display text-base mb-1.5" style={{ color: 'var(--text-primary)' }}>
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {s.copy}
                </p>
              </motion.div>
              {i < steps.length - 1 && (
                <span
                  className="hidden md:block shrink-0 text-lg"
                  style={{ color: 'var(--text-muted)' }}
                  aria-hidden="true"
                >
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
