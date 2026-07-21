import { motion } from 'framer-motion'
import founderPhoto from '../assets/founder-photo.jpg'

export default function AboutFounder() {
  return (
    <section id="about" className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw grid grid-cols-1 md:grid-cols-[minmax(0,340px)_1fr] gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="rounded-2xl overflow-hidden border"
            style={{ borderColor: 'var(--border)' }}
          >
            <img
              src={founderPhoto}
              alt="Founder of Better Website Co."
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="mt-5">
            <p className="font-display text-lg" style={{ color: 'var(--text-primary)' }}>
              Founder — Better Website Co.
            </p>
            <p className="text-sm mt-1" style={{ color: 'var(--text-secondary)' }}>
              Designer • Developer • Strategist
            </p>
            <p className="eyebrow mt-3">Building digital first impressions that convert</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="eyebrow mb-4">Meet the Founder</p>
          <div className="space-y-5 max-w-xl">
            <p className="font-display text-2xl md:text-3xl leading-snug" style={{ color: 'var(--text-primary)' }}>
              I don't believe businesses need "just another website."
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              I believe they deserve a digital experience that builds trust, removes buying
              friction, and turns visitors into customers. That's why I started Better Website Co.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              Every project begins by understanding your business, your customers, and your
              goals — not by choosing a template. The result is a website that's fast, modern,
              conversion-focused, and built to help your business grow.
            </p>
            <p style={{ color: 'var(--text-primary)' }} className="font-medium">
              Whether you're launching your first business or reinventing an established brand,
              my goal is simple: build a website your customers remember — and one that helps
              them say yes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
