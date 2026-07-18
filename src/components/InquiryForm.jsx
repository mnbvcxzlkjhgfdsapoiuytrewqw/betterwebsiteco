import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { tiers } from '../data/content'
import { buildWhatsAppLink } from '../data/config'
import Button from './Button'

const TIER_LABEL = Object.fromEntries(tiers.map((t) => [t.id, t.name]))

function encodeForNetlify(data) {
  return Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')
}

export default function InquiryForm({ selectedTier, onSelectTier }) {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const isScale = selectedTier === 'scale'

  useEffect(() => {
    setSubmitted(false)
    setError(false)
  }, [selectedTier])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError(false)

    const formData = new FormData(e.target)
    // honeypot: if a bot filled the hidden "company" field, silently drop it
    if (formData.get('company')) {
      setSubmitted(true)
      setSending(false)
      return
    }

    const payload = { 'form-name': 'inquiry', tier: selectedTier || 'unspecified' }
    formData.forEach((value, key) => {
      payload[key] = value
    })

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForNetlify(payload),
      })
      setSubmitted(true)
    } catch (err) {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="inquiry" className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw max-w-2xl">
        <div className="mb-10">
          <p className="eyebrow mb-4">
            {selectedTier ? `${TIER_LABEL[selectedTier]} Plan` : 'Get Started'}
          </p>
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
            {isScale ? "Tell us about your project" : "Let's start the conversation"}
          </h2>
        </div>

        <div className="flex gap-2 mb-10">
          {tiers.map((t) => (
            <button
              key={t.id}
              onClick={() => onSelectTier(t.id)}
              className="text-xs px-3.5 py-1.5 rounded-full border"
              style={{
                borderColor: selectedTier === t.id ? 'var(--accent)' : 'var(--border)',
                color: selectedTier === t.id ? 'var(--text-primary)' : 'var(--text-muted)',
              }}
            >
              {t.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="thanks"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl border p-10 text-center"
              style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
            >
              <p className="font-display text-2xl mb-2" style={{ color: 'var(--text-primary)' }}>
                Message received.
              </p>
              <p style={{ color: 'var(--text-secondary)' }}>
                We'll be in touch within one business day.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key={selectedTier || 'default'}
              name="inquiry"
              data-netlify="true"
              netlify-honeypot="company"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
            >
              <input type="hidden" name="form-name" value="inquiry" />
              <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                <label>
                  Don't fill this out: <input name="company" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" name="name" required />
                <Field label="Business name" name="business" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email" name="email" type="email" required />
                <Field label="WhatsApp / Phone" name="phone" />
              </div>

              {isScale ? (
                <>
                  <Field label="What are you trying to achieve?" name="goals" textarea required />
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Ideal timeline" name="timeline" placeholder="e.g. 6–8 weeks" />
                    <Field label="Integrations needed" name="integrations" placeholder="e.g. payments, booking" />
                  </div>
                  <Field label="Any custom requirements?" name="requirements" textarea />
                </>
              ) : (
                <Field label="Tell us about your business" name="details" textarea />
              )}

              {error && (
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Something went wrong sending that — try again, or use WhatsApp below.
                </p>
              )}

              <div className="flex flex-wrap items-center gap-4 mt-2">
                <Button type="submit" variant="primary">
                  {sending ? 'Sending…' : isScale ? 'Send Project Brief' : 'Send Message'}
                </Button>
                <Button href={buildWhatsAppLink(selectedTier && TIER_LABEL[selectedTier])} variant="secondary">
                  Chat on WhatsApp instead
                </Button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', required = false, textarea = false, placeholder }) {
  const commonStyle = {
    background: 'var(--bg-elevated)',
    borderColor: 'var(--border)',
    color: 'var(--text-primary)',
  }

  return (
    <label className="flex flex-col gap-2 text-sm w-full">
      <span style={{ color: 'var(--text-secondary)' }}>
        {label}
        {required && <span style={{ color: 'var(--accent)' }}> *</span>}
      </span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={placeholder}
          rows={4}
          className="w-full rounded-[10px] border px-4 py-3 text-sm focus-visible:outline-none resize-none"
          style={commonStyle}
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className="w-full rounded-[10px] border px-4 py-3 text-sm focus-visible:outline-none"
          style={commonStyle}
        />
      )}
    </label>
  )
}
