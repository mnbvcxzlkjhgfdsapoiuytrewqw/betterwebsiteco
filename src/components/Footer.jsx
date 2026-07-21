import { Link } from 'react-router-dom'
import Logo from './Logo'
import Bee from './Bee/Bee'
import { WHATSAPP_NUMBER, CONTACT_EMAIL, TIKTOK_URL, buildWhatsAppLink } from '../data/config'

const COLUMNS = [
  {
    title: 'Services',
    links: [
      { label: 'Website Design', href: '#transformations' },
      { label: 'Brand Identity', href: '#transformations' },
      { label: 'Pricing', href: '#pricing' },
    ],
  },
  {
    title: 'Transformations',
    links: [
      { label: 'Crownbisi Tech Ventures', href: '#transformations' },
      { label: 'Ejimaco', href: '#transformations' },
      { label: 'Everything Suits', href: '#transformations' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Transformations', href: '#transformations' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'WhatsApp', href: buildWhatsAppLink(), external: true },
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
      { label: 'TikTok', href: TIKTOK_URL, external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="pt-20 pb-10 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="container-bw">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 pb-14">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-7 w-7 rounded-md" />
              <span className="font-display text-lg" style={{ color: 'var(--text-primary)' }}>
                Better Website Co.
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Websites That Sell.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="eyebrow mb-4">{col.title}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noreferrer' : undefined}
                      className="text-sm hover:opacity-70 transition-opacity"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="pt-8 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderColor: 'var(--border)' }}
        >
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © {new Date().getFullYear()} Better Website Co. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
              +{WHATSAPP_NUMBER.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1 $2 $3 $4')}
            </p>
            <Link to="/meet-bee" aria-label="A little secret" className="opacity-60 hover:opacity-100 transition-opacity">
              <Bee size="sm" className="!h-6" animateIn={false} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
