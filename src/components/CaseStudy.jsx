import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Eyebrow({ children }) {
  return (
    <p className="eyebrow mb-4" style={{ color: 'var(--accent)' }}>
      {children}
    </p>
  )
}

function Section({ children, className = '' }) {
  return (
    <div className={`max-w-2xl ${className}`}>{children}</div>
  )
}

export default function CaseStudy({ study, onClose }) {
  const closeBtnRef = useRef(null)
  const lastFocusedRef = useRef(null)

  useEffect(() => {
    if (!study) return
    lastFocusedRef.current = document.activeElement
    document.body.style.overflow = 'hidden'
    const focusTimer = setTimeout(() => closeBtnRef.current?.focus(), 50)
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
      clearTimeout(focusTimer)
      lastFocusedRef.current?.focus?.()
    }
  }, [study, onClose])

  return (
    <AnimatePresence>
      {study && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 overflow-y-auto"
          style={{ background: 'var(--bg)' }}
          role="dialog"
          aria-modal="true"
          aria-label={`${study.name} case study`}
        >
          <motion.div
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Top bar */}
            <div
              className="sticky top-0 z-10 backdrop-blur border-b"
              style={{ borderColor: 'var(--border)', background: 'color-mix(in srgb, var(--bg) 88%, transparent)' }}
            >
              <div className="container-bw flex items-center justify-between py-5">
                <p className="eyebrow">{study.category}</p>
                <button
                  ref={closeBtnRef}
                  onClick={onClose}
                  aria-label="Close case study"
                  className="h-10 w-10 rounded-full border flex items-center justify-center text-lg hover:opacity-70 transition-opacity"
                  style={{ borderColor: 'var(--border-strong)', color: 'var(--text-primary)' }}
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Hero */}
            <section className="container-bw pt-16 pb-20 md:pt-24 md:pb-28">
              <Eyebrow>{study.tagline}</Eyebrow>
              <h2
                className="font-display font-semibold leading-[0.98] tracking-tight text-[42px] sm:text-[56px] lg:text-[68px] max-w-3xl"
                style={{ color: 'var(--text-primary)' }}
              >
                {study.name}
              </h2>
              {study.timeline && (
                <div className="mt-10 flex flex-wrap gap-2 md:gap-3">
                  {study.timeline.map((step, i) => (
                    <div key={step} className="flex items-center gap-2 md:gap-3">
                      <span
                        className="text-xs md:text-sm px-3 py-1.5 rounded-full border"
                        style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                      >
                        {step}
                      </span>
                      {i < study.timeline.length - 1 && (
                        <span style={{ color: 'var(--text-muted)' }}>→</span>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {study.heroImage && (
                <div
                  className="mt-14 rounded-2xl border overflow-hidden"
                  style={{ borderColor: 'var(--border)', background: study.heroImageBg || 'var(--card)' }}
                >
                  <img src={study.heroImage} alt={`${study.name} identity`} className="w-full h-auto" />
                </div>
              )}
            </section>

            {/* Challenge */}
            <section className="container-bw py-16 border-t" style={{ borderColor: 'var(--border)' }}>
              <Section>
                <Eyebrow>The Challenge</Eyebrow>
                <p className="font-display text-2xl md:text-3xl leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {study.challenge}
                </p>
              </Section>
            </section>

            {/* Thinking */}
            <section className="container-bw py-16 border-t" style={{ borderColor: 'var(--border)' }}>
              <Section>
                <Eyebrow>{study.thinkingLabel || 'Our Thinking'}</Eyebrow>
                <div className="space-y-5">
                  {study.thinking.map((p, i) => (
                    <p key={i} className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {p}
                    </p>
                  ))}
                </div>
              </Section>
            </section>

            {/* Evolution (optional) */}
            {study.evolution && (
              <section className="container-bw py-16 border-t" style={{ borderColor: 'var(--border)' }}>
                <Eyebrow>Design Evolution</Eyebrow>
                <div
                  className="mt-8 rounded-2xl border overflow-hidden"
                  style={{ borderColor: 'var(--border)' }}
                >
                  <img src={study.evolution} alt="Design evolution" className="w-full h-auto" />
                </div>
                <div className="mt-6 flex items-center gap-3 flex-wrap">
                  {['Initial Concept', 'Refinement', 'Final Identity'].map((label, i) => (
                    <div key={label} className="flex items-center gap-3">
                      <span className="text-sm" style={{ color: 'var(--text-muted)' }}>{label}</span>
                      {i < 2 && <span style={{ color: 'var(--text-muted)' }}>→</span>}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Why this works checklist */}
            <section className="container-bw py-16 border-t" style={{ borderColor: 'var(--border)' }}>
              <Eyebrow>Why This Works</Eyebrow>
              <div className="grid sm:grid-cols-2 gap-x-10 gap-y-4 max-w-3xl">
                {study.checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 text-sm shrink-0" style={{ color: 'var(--accent)' }}>✓</span>
                    <p style={{ color: 'var(--text-secondary)' }}>{item}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Site screenshots / applications */}
            {(study.showcaseImages || study.showcaseImage) && (
              <section className="container-bw py-16 border-t" style={{ borderColor: 'var(--border)' }}>
                <Eyebrow>{study.showcaseLabel || 'In Practice'}</Eyebrow>
                <div className={study.showcaseImages ? 'mt-8 grid sm:grid-cols-2 gap-6' : 'mt-8'}>
                  {(study.showcaseImages || [study.showcaseImage]).map((src, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border overflow-hidden"
                      style={{ borderColor: 'var(--border)' }}
                    >
                      <img src={src} alt={`${study.name} live site`} className="w-full h-auto" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Mobile screenshot(s) — only shown when real mobile captures exist, never faked from a desktop crop */}
            {(study.mobileImages || study.mobileImage) && (
              <section className="container-bw py-16 border-t text-center" style={{ borderColor: 'var(--border)' }}>
                <Eyebrow>Works On Mobile Too</Eyebrow>
                <div className="mt-8 flex flex-wrap justify-center gap-6">
                  {(study.mobileImages || [study.mobileImage]).map((src, i) => (
                    <div
                      key={i}
                      className="mx-auto max-w-[240px] rounded-[2rem] border-[6px] overflow-hidden"
                      style={{ borderColor: 'var(--border-strong)' }}
                    >
                      <img src={src} alt={`${study.name} on mobile`} className="w-full h-auto block" />
                    </div>
                  ))}
                </div>
              </section>
            )}

            {study.applications && (
              <section className="container-bw py-16 border-t" style={{ borderColor: 'var(--border)' }}>
                <Eyebrow>Brand Applications</Eyebrow>
                <div className="flex flex-wrap gap-3 max-w-3xl">
                  {study.applications.map((app) => (
                    <span
                      key={app}
                      className="text-sm px-4 py-2 rounded-full border"
                      style={{ borderColor: 'var(--border)', color: 'var(--text-secondary)' }}
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {/* Before / After */}
            <section className="container-bw py-16 border-t" style={{ borderColor: 'var(--border)' }}>
              <Eyebrow>What Changed?</Eyebrow>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                <div>
                  <p className="text-sm font-medium mb-4" style={{ color: 'var(--text-muted)' }}>Before</p>
                  <ul className="space-y-3">
                    {study.before.map((item) => (
                      <li key={item} className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium mb-4" style={{ color: 'var(--accent)' }}>After</p>
                  <ul className="space-y-3">
                    {study.after.map((item) => (
                      <li key={item} className="text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Key takeaway */}
            <section className="container-bw py-20 md:py-28 border-t" style={{ borderColor: 'var(--border)' }}>
              <p
                className="font-display italic text-2xl md:text-4xl leading-snug max-w-3xl"
                style={{ color: 'var(--text-primary)' }}
              >
                {study.takeaway}
              </p>

              {study.liveUrl && (
                <a
                  href={`https://${study.liveUrl}`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-10 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4"
                  style={{ color: 'var(--accent)' }}
                >
                  View live site ↗
                </a>
              )}
            </section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
