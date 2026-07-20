import { motion } from 'framer-motion'
import Button from './Button'
import BrowserMockup from './BrowserMockup'

export default function Hero() {
  return (
    <section id="top" className="relative pt-20 md:pt-28 pb-24 overflow-hidden">
      <div className="container-bw grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-6">Better Website Co.</p>
          <h1
            className="font-display font-semibold leading-[0.98] tracking-tight text-[48px] sm:text-[64px] lg:text-[80px]"
            style={{ color: 'var(--text-primary)' }}
          >
            Your Instagram
            <br />
            <span className="italic font-normal" style={{ color: 'var(--accent)' }}>isn't your business.</span>
          </h1>
          <p
            className="mt-7 text-lg max-w-md"
            style={{ color: 'var(--text-secondary)' }}
          >
            It's borrowed space on someone else's platform. We build the website that's actually
            yours — the one that turns visitors into customers, whether or not the algorithm
            cooperates today.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#inquiry" variant="primary">
              Book a Free Strategy Call
            </Button>
            <Button href="#transformations" variant="secondary">
              See What We've Built
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
        >
          <BrowserMockup />
        </motion.div>
      </div>
    </section>
  )
}
