import { motion } from 'framer-motion'
import Button from './Button'

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-24">
      <div className="container-bw max-w-md text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="font-display text-3xl md:text-4xl mb-3"
          style={{ color: 'var(--text-primary)' }}
        >
          Looks like this page wandered off.
        </motion.h1>
        <p className="mb-10" style={{ color: 'var(--text-secondary)' }}>
          Let's get you back.
        </p>
        <Button href="/" variant="primary">
          Back to the homepage
        </Button>
      </div>
    </section>
  )
}
