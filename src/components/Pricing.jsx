import { motion } from 'framer-motion'
import { tiers } from '../data/content'
import Button from './Button'

function scrollToInquiry() {
  document.getElementById('inquiry')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Pricing({ onSelect }) {
  return (
    <section id="pricing" className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl mb-4" style={{ color: 'var(--text-primary)' }}>
            Ways We Can Work Together
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Every business is different. Choose the solution that best fits where you are today.
            Every project is tailored to your goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, i) => (
            <motion.button
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => {
                onSelect(tier.id)
                scrollToInquiry()
              }}
              className="relative text-left rounded-2xl border p-8 flex flex-col h-full focus-visible:outline-none"
              style={{
                borderColor: tier.featured ? 'var(--accent)' : 'var(--border)',
                background: 'var(--card)',
              }}
            >
              {tier.badge && (
                <span
                  className="absolute -top-3 left-8 text-[11px] font-medium px-3 py-1 rounded-full"
                  style={{ background: 'var(--accent)', color: 'var(--accent-text)' }}
                >
                  {tier.badge}
                </span>
              )}

              <h3 className="font-display text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>
                {tier.name}
              </h3>
              {tier.for && (
                <p className="text-sm mb-3" style={{ color: 'var(--text-primary)', opacity: 0.85 }}>
                  {tier.for}
                </p>
              )}
              <p className="text-sm font-mono mb-6" style={{ color: 'var(--accent)' }}>
                {tier.price}
              </p>
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                {tier.description}
              </p>

              <ul className="flex flex-col gap-2 mb-8 flex-1">
                {tier.examples.map((ex) => (
                  <li key={ex} className="text-sm" style={{ color: 'var(--text-muted)' }}>
                    {ex}
                  </li>
                ))}
              </ul>

              <span
                className="mt-auto inline-flex items-center justify-center rounded-[12px] px-6 py-3 text-sm font-medium"
                style={
                  tier.featured
                    ? { background: 'var(--accent)', color: 'var(--accent-text)' }
                    : { background: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--border-strong)' }
                }
              >
                {tier.cta}
              </span>
            </motion.button>
          ))}
        </div>

        <p className="mt-10 text-xs max-w-xl" style={{ color: 'var(--text-muted)' }}>
          Every project is tailored to your business. The prices above are starting points. Your
          final investment depends on your goals, required functionality and project scope.
        </p>
      </div>
    </section>
  )
}
