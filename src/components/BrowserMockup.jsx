import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, portfolioExample } from '../data/projects'

const tabs = [
  ...projects.map((p) => ({
    ...p,
    showcase: p.mockupImage || p.caseStudy?.showcaseImage || p.caseStudy?.showcaseImages?.[0],
  })),
  { id: portfolioExample.id, name: portfolioExample.name, url: portfolioExample.url, showcase: portfolioExample.heroImageDark },
  { id: 'future', name: 'Future Project', url: 'yourbrand.com', placeholder: true },
]

export default function BrowserMockup() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % tabs.length), 4200)
    return () => clearInterval(id)
  }, [])

  const current = tabs[active]

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border shadow-2xl"
      style={{ borderColor: 'var(--border)', background: 'var(--bg-elevated)', boxShadow: '0 30px 80px var(--shadow)' }}
    >
      {/* Chrome */}
      <div
        className="flex items-center gap-3 px-4 py-3 border-b"
        style={{ borderColor: 'var(--border)' }}
      >
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--border-strong)' }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--border-strong)' }} />
          <span className="h-2.5 w-2.5 rounded-full" style={{ background: 'var(--border-strong)' }} />
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 ml-2 overflow-x-auto scrollbar-none">
          {tabs.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className="relative px-3 py-1.5 rounded-md text-[11px] font-medium whitespace-nowrap shrink-0"
              style={{
                color: i === active ? 'var(--text-primary)' : 'var(--text-muted)',
                background: i === active ? 'var(--bg)' : 'transparent',
              }}
            >
              {t.name}
              {i === active && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute left-2 right-2 -bottom-[1px] h-[2px] rounded-full"
                  style={{ background: 'var(--accent)' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Address bar */}
      <div className="px-4 py-2.5 border-b flex items-center gap-2" style={{ borderColor: 'var(--border)' }}>
        <div
          className="flex-1 flex items-center gap-2 rounded-md px-3 py-1.5 text-xs font-mono"
          style={{ background: 'var(--bg)', color: 'var(--text-muted)' }}
        >
          <span style={{ color: 'var(--accent)' }}>●</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={current.id}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              {current.url}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      {/* Viewport */}
      <div className="relative h-[320px] md:h-[400px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="absolute inset-0 p-6 flex flex-col"
          >
            {current.placeholder ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-3 text-center">
                <div
                  className="h-10 w-10 rounded-full border-2 border-dashed flex items-center justify-center"
                  style={{ borderColor: 'var(--border-strong)' }}
                >
                  <span style={{ color: 'var(--accent)' }}>+</span>
                </div>
                <p className="eyebrow">Your website could live here</p>
              </div>
            ) : current.showcase ? (
              <div className="relative flex-1 rounded-lg overflow-hidden flex items-center justify-center" style={{ background: 'var(--bg)' }}>
                <img
                  src={current.showcase}
                  alt={`${current.name} live site`}
                  className="w-full h-full object-contain"
                />
                <motion.div
                  className="absolute h-3 w-3 rounded-full border-2"
                  style={{ borderColor: 'var(--accent)', background: 'transparent' }}
                  animate={{
                    top: ['20%', '55%', '35%'],
                    left: ['30%', '65%', '50%'],
                  }}
                  transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <p className="eyebrow px-2 py-1 rounded backdrop-blur" style={{ background: 'color-mix(in srgb, var(--bg) 70%, transparent)' }}>
                    {current.name}
                  </p>
                </div>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="eyebrow mb-1">{current.industry}</p>
                    <p className="font-display text-lg" style={{ color: 'var(--text-primary)' }}>
                      {current.name}
                    </p>
                  </div>
                  <div className="h-8 w-8 rounded-full" style={{ background: 'var(--accent)', opacity: 0.9 }} />
                </div>
                <div className="grid grid-cols-3 gap-3 flex-1">
                  <div className="col-span-2 rounded-lg" style={{ background: 'var(--border)' }} />
                  <div className="flex flex-col gap-3">
                    <div className="flex-1 rounded-lg" style={{ background: 'var(--border)' }} />
                    <div className="flex-1 rounded-lg" style={{ background: 'var(--border)' }} />
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  <div className="h-2 w-16 rounded-full" style={{ background: 'var(--accent)' }} />
                  <div className="h-2 w-10 rounded-full" style={{ background: 'var(--border-strong)' }} />
                </div>
              </>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
