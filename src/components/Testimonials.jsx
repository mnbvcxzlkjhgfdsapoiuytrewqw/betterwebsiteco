import { motion } from 'framer-motion'
import crownbisiShot from '../assets/testimonials/crownbisi.jpg'
import everythingSuitsShot from '../assets/testimonials/everything-suits.jpg'
import crownbisiLogo from '../assets/case-studies/crownbisi-logo.webp'

const LOGOS = [
  { image: crownbisiLogo, name: 'Crownbisi Tech Ventures', desc: 'Internet & devices retail', bg: '#000000' },
  { letterMark: 'SUITS', name: 'Everything Suits', desc: 'Made-to-measure tailoring', bg: '#1a1a1a' },
]

const TESTIMONIALS = [
  {
    image: crownbisiShot,
    name: 'Crownbisi Tech Ventures',
    context: 'First reaction to seeing the homepage concept',
  },
  {
    image: everythingSuitsShot,
    name: 'Everything Suits',
    context: 'Reaction to the completed order system going live',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        <div className="max-w-xl mb-14">
          <p className="eyebrow mb-4">In their words</p>
          <h2 className="font-display text-3xl md:text-4xl" style={{ color: 'var(--text-primary)' }}>
            Testimonials
          </h2>
          <p className="mt-4 text-sm" style={{ color: 'var(--text-muted)' }}>
            Real client messages. Nothing staged, nothing invented.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-14">
          {LOGOS.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-center gap-3 rounded-xl border px-5 py-4"
              style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
            >
              <div
                className="h-10 w-16 rounded-md flex items-center justify-center overflow-hidden shrink-0"
                style={{ background: l.bg }}
              >
                {l.image ? (
                  <img src={l.image} alt={l.name} className="h-6 w-auto object-contain" />
                ) : (
                  <span className="text-[9px] font-semibold tracking-widest text-white">{l.letterMark}</span>
                )}
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {l.name}
                </p>
                <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
                  {l.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border overflow-hidden flex flex-col"
              style={{ borderColor: 'var(--border)', background: 'var(--card)' }}
            >
              <div
                className="flex items-center justify-center p-5"
                style={{ background: '#0a0f0d' }}
              >
                <img
                  src={t.image}
                  alt={`Message from ${t.name}`}
                  className="w-full h-auto rounded-lg"
                  style={{ maxHeight: 280, objectFit: 'contain' }}
                />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {t.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                  {t.context}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
