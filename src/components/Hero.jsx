import { motion } from 'framer-motion'
import Button from './Button'
import BrowserMockup from './BrowserMockup'

export default function Hero() {
  return (
    <section id="top" className="relative pt-20 md:pt-28 pb-24 overflow-hidden">
      <div className="container-bw grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow mb-6">Better Website Co.</p>
          <h1
            className="font-display font-semibold leading-[0.98] tracking-tight text-[46px] sm:text-[60px] lg:text-[74px]"
            style={{ color: 'var(--text-primary)' }}
          >
            Your website is either selling,{' '}
            <span className="italic font-normal" style={{ color: 'var(--accent)' }}>or costing you.</span>
          </h1>
          <p
            className="mt-7 text-lg max-w-md"
            style={{ color: 'var(--text-secondary)' }}
          >
            Whether you don't have one yet, or yours isn't pulling its weight — we build the
            version that actually turns visitors into customers.
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
