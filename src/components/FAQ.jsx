import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { faqs } from '../data/content'
import Bee from './Bee/Bee'

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b" style={{ borderColor: 'var(--border)' }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
      >
        <span className="font-display text-lg" style={{ color: 'var(--text-primary)' }}>
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-xl"
          style={{ color: 'var(--accent)' }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden"
          >
            <div className="pb-6 flex items-start gap-4 max-w-2xl">
              <Bee size="sm" className="shrink-0 hidden sm:block" animateIn={false} />
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ({ items = faqs, headline = "What's stopping you?", eyebrow = 'FAQ' }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-24 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw max-w-2xl">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h2 className="font-display text-3xl md:text-4xl mb-10" style={{ color: 'var(--text-primary)' }}>
          {headline}
        </h2>
        <div>
          {items.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
