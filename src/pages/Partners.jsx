import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Button from '../components/Button'
import FlowSteps from '../components/campaigns/FlowSteps'
import FAQ from '../components/FAQ'
import { partners } from '../data/partners'
import { buildReferralWhatsAppLink } from '../data/config'

const c = partners
const referralLink = buildReferralWhatsAppLink()

function FadeIn({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Partners() {
  useEffect(() => {
    document.title = c.meta.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', c.meta.description)
  }, [])

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-20 md:pt-28 pb-24 overflow-hidden">
          <div className="container-bw max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <p className="eyebrow mb-6">{c.hero.eyebrow}</p>
              <h1
                className="font-display font-semibold leading-[0.98] tracking-tight text-[44px] sm:text-[64px] lg:text-[80px]"
                style={{ color: 'var(--text-primary)' }}
              >
                {c.hero.headline}{' '}
                <span className="italic font-normal" style={{ color: 'var(--accent)' }}>
                  {c.hero.accentWord}
                </span>
              </h1>
              <p className="mt-7 text-lg max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                {c.hero.subhead}
              </p>
              <div className="mt-10">
                <Button href={referralLink} variant="primary">
                  Become a Partner →
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Explain — who this is for */}
        <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="container-bw max-w-2xl">
            <FadeIn>
              <p className="eyebrow mb-4">{c.explain.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl mb-8" style={{ color: 'var(--text-primary)' }}>
                {c.explain.headline}
              </h2>
              <div className="flex flex-wrap gap-2">
                {c.explain.types.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-4 py-2 rounded-full border"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-sm" style={{ color: 'var(--text-muted)' }}>
                If you introduce them to us, everyone wins.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* How it works */}
        <FlowSteps eyebrow={c.howItWorks.eyebrow} headline={c.howItWorks.headline} steps={c.howItWorks.steps} />

        {/* Status transparency */}
        <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="container-bw max-w-2xl">
            <FadeIn>
              <p className="eyebrow mb-4">{c.status.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl mb-10" style={{ color: 'var(--text-primary)' }}>
                {c.status.headline}
              </h2>
            </FadeIn>
            <div className="flex flex-col sm:flex-row gap-4">
              {c.status.steps.map((s, i) => (
                <FadeIn key={s.label} delay={i * 0.06} className="flex-1">
                  <div
                    className="rounded-2xl border p-5 h-full flex flex-col items-start gap-3"
                    style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
                  >
                    <span className="text-2xl">{s.emoji}</span>
                    <p className="text-sm" style={{ color: 'var(--text-primary)' }}>{s.label}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
            <p className="mt-6 text-xs" style={{ color: 'var(--text-muted)' }}>{c.status.note}</p>
          </div>
        </section>

        {/* Rewards */}
        <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="container-bw max-w-2xl">
            <FadeIn>
              <p className="eyebrow mb-4">{c.rewards.eyebrow}</p>
              <h2 className="font-display text-3xl md:text-4xl mb-10" style={{ color: 'var(--text-primary)' }}>
                {c.rewards.headline}
              </h2>
            </FadeIn>
            <FadeIn>
              <div className="rounded-2xl border overflow-hidden" style={{ borderColor: 'var(--border)' }}>
                {c.rewards.table.map((row, i) => (
                  <div
                    key={row.project}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 px-6 py-4"
                    style={{
                      borderTop: i === 0 ? 'none' : '1px solid var(--border)',
                      background: 'var(--card)',
                    }}
                  >
                    <span className="text-sm" style={{ color: 'var(--text-primary)' }}>{row.project}</span>
                    <span className="font-display text-lg" style={{ color: 'var(--accent)' }}>{row.reward}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="mt-10">
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>{c.rewards.choice.headline}</p>
              <div className="flex flex-wrap gap-3">
                {c.rewards.choice.options.map((o) => (
                  <span
                    key={o.label}
                    className="text-sm px-4 py-2.5 rounded-full border flex items-center gap-2"
                    style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                  >
                    <span>{o.emoji}</span> {o.label}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Strategic Partners */}
        <section className="py-20 border-t" style={{ borderColor: 'var(--border)' }}>
          <div className="container-bw max-w-2xl">
            <FadeIn>
              <p className="eyebrow mb-4">{c.strategic.eyebrow}</p>
              <h2 className="font-display text-2xl md:text-3xl mb-6" style={{ color: 'var(--text-primary)' }}>
                {c.strategic.headline}
              </h2>
              <p className="text-sm leading-relaxed mb-8 max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                {c.strategic.copy}
              </p>
              <Button href={referralLink} variant="secondary">
                {c.strategic.cta.label}
              </Button>
            </FadeIn>
          </div>
        </section>

        {/* FAQ */}
        <FAQ eyebrow={c.faq.eyebrow} headline={c.faq.headline} items={c.faq.items} />

        {/* Final CTA */}
        <section className="py-24 border-t text-center" style={{ borderColor: 'var(--border)' }}>
          <div className="container-bw max-w-xl">
            <FadeIn>
              <h2 className="font-display text-3xl md:text-4xl mb-3" style={{ color: 'var(--text-primary)' }}>
                {c.finalCta.headline}
              </h2>
              <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
                {c.finalCta.subhead}
              </p>
              <Button href={referralLink} variant="primary">
                {c.finalCta.cta.label} →
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
