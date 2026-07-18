import ejimacoWordmark from '../assets/case-studies/ejimaco-wordmark.webp'
import ejimacoEvolution from '../assets/case-studies/ejimaco-before-after.webp'
import ejimacoHeroDesktop from '../assets/case-studies/ejimaco-hero-desktop.webp'
import ejimacoCategoryDesktop from '../assets/case-studies/ejimaco-category-desktop.webp'
import crownbisiLogo from '../assets/case-studies/crownbisi-logo.webp'
import crownbisiHeroDesktop from '../assets/case-studies/crownbisi-hero-desktop.webp'
import crownbisiProductsDesktop from '../assets/case-studies/crownbisi-products-desktop.webp'
import suitsHeroMobile from '../assets/case-studies/suits-hero.webp'
import suitsHeroDesktop from '../assets/case-studies/suits-hero-desktop.webp'
import suitsGalleryDesktop from '../assets/case-studies/suits-gallery-desktop.webp'
import dreamsHeroDarkDesktop from '../assets/case-studies/dreams-hero-dark-desktop.webp'
import dreamsHeroLightDesktop from '../assets/case-studies/dreams-hero-light-desktop.webp'
import dreamsHeroDarkMobile from '../assets/case-studies/dreams-hero-dark-mobile.webp'
import ejimacoHeroMobile from '../assets/case-studies/ejimaco-hero-mobile.webp'
import ejimacoShopMobile from '../assets/case-studies/ejimaco-shop-mobile.webp'
import crownbisiMobile from '../assets/case-studies/crownbisi-mobile.webp'

export const projects = [
  {
    id: 'crownbisi',
    name: 'Crownbisi Tech Ventures',
    url: 'crownbisitech.netlify.app',
    industry: 'Internet & devices retail',
    problem:
      'A Spectranet reseller doing real volume through Instagram and WhatsApp alone. Great for word of mouth, but every sale still needed a manual back-and-forth, and the business had no home online it fully owned.',
    strategy:
      'Turn the WhatsApp relationship into an asset rather than a bottleneck — keep WhatsApp as the checkout, but give customers a real storefront to browse first, so the DM starts with "I want this" instead of "what do you have?"',
    identity: 'Dark and technical, built around signal and reliability — Crownbisi Tech Ventures as the name, with a product catalogue that reads more Jumia than Instagram grid.',
    homepage: 'A full product catalogue — Starlink kits, routers, MiFi, power backup, cables — each with a direct WhatsApp checkout link, plus an in-page data top-up flow for the recharge side of the business.',
    development: 'Static HTML and Tailwind, optimized for low-bandwidth connections, deployed on Netlify, live at crownbisitech.netlify.app.',
    outcome:
      'The client\'s first reaction to the homepage concept: "Wow... this like a memo abi" — the demo looked professional enough that he compared it to a formal document. The site now runs the storefront that used to live entirely in a chat thread.',
    caseStudy: {
      category: 'Brand Identity + Website Experience',
      tagline: 'A complete digital transformation',
      name: 'Crownbisi Tech Ventures',
      timeline: ['Discovery', 'Brand Strategy', 'Logo Refinement', 'Homepage Concept', 'Website Development', 'Launch'],
      heroImage: crownbisiLogo,
      heroImageBg: '#000000',
      challenge:
        "Crownbisi sells internet and networking gear — Starlink, routers, MiFi, and accessories. But its branding and online presence didn't fully communicate the level of professionalism and trust customers expect when they're paying for technology products.",
      thinking: [
        "People buying networking equipment want to know they're buying from a business they can trust. That trust starts long before they make a purchase — it starts with the first impression.",
        'Every design decision was made to help Crownbisi appear more professional, more established, and easier to trust.',
        "Instead of a logo filled with trendy effects, we built a clean symbol that works everywhere. The 'C' wraps around the 'B', representing protection, reliability and continuous connectivity — an identity that feels professional, memorable, and built for long-term growth.",
        "The website wasn't designed to impress other designers. It was designed to help customers quickly understand what Crownbisi offers — clear navigation, clear categories, and a simple buying experience that removes confusion and builds confidence.",
      ],
      checklist: [
        'Easy to recognize',
        'Easy to remember',
        'Looks professional at every size',
        'Works on packaging, websites and signage',
        'Builds trust before customers even make contact',
        'Reflects the quality of the business',
      ],
      showcaseImages: [crownbisiHeroDesktop, crownbisiProductsDesktop],
      showcaseLabel: 'The Homepage',
      mobileImage: crownbisiMobile,
      applications: ['Website Header', 'WhatsApp Ordering Flow', 'Product Catalogue', 'Business Card', 'Store Signage', 'Social Media Profile'],
      before: [
        'Brand lacked a premium identity.',
        "Online presence wasn't memorable.",
        'Customer trust relied mostly on conversation.',
        'Website experience was limited.',
      ],
      after: [
        'Professional brand identity.',
        'Modern, product-first website.',
        'Clear categories: Starlink, routers, MiFi, accessories.',
        'A business that feels established.',
      ],
      takeaway:
        "Technology businesses don't just sell products — they sell confidence. A strong brand and a well-designed website help customers feel that confidence before they ever make a purchase.",
      liveUrl: 'crownbisitech.netlify.app',
    },
  },
  {
    id: 'everything-suits',
    name: 'Everything Suits',
    url: 'everything-suits--suitseverything.replit.app',
    industry: 'Made-to-measure tailoring',
    problem:
      'A bespoke suit brand taking orders entirely through WhatsApp voice notes and photos — measurements got lost in scroll-back, and there was no structured way to capture a real order.',
    strategy:
      'Replace the back-and-forth with a proper intake: let the customer choose a package and submit their own measurements in one structured flow, so nothing gets lost between "I want a suit" and cutting fabric.',
    identity: 'Warm, tailored, confident — built around the craft, not a generic fashion template.',
    homepage: 'An order system with package tiers (including a Premium Ceremonial option), a measurement-option selector, and a full measurement intake form that lands as a clean, structured order summary.',
    development: 'React-based order flow that outputs a formatted order directly, replacing manual note-taking.',
    outcome:
      'The client\'s reaction to seeing the first completed order come through: "Mad. This is fire." A suit business now runs its intake process instead of improvising it.',
    mockupImage: suitsHeroDesktop,
    caseStudy: {
      category: 'Website Experience + Order System',
      tagline: 'From voice notes to a real order flow',
      name: 'Everything Suits',
      timeline: ['Discovery', 'Order Flow Design', 'UI Design', 'Development', 'Launch'],
      heroImage: suitsHeroDesktop,
      heroImageBg: 'var(--card)',
      challenge:
        "Everything Suits builds made-to-measure suits, but every order started as a WhatsApp voice note — measurements described out loud, photos sent separately, details that got buried the moment the next message came in.",
      thinking: [
        "A tailoring business runs on precision. The intake process should match that, not fight it.",
        "Instead of asking customers to describe measurements in a voice note, we built a structured flow: choose a package, choose how you want to submit measurements, fill in a real form. What comes out the other end is a clean, formatted order — not a scroll-back search.",
        "The design leans into the craft itself — warm, confident, tailored — rather than borrowing a generic fashion template.",
      ],
      checklist: [
        'Structured measurement intake, not voice notes',
        'Package tiers customers can compare at a glance',
        'Orders arrive as a clean, formatted summary',
        'Past work shown as real finished pieces, not stock photography',
        'Feels as considered as the suits themselves',
        'Built to scale as the client list grows',
      ],
      showcaseImages: [suitsHeroDesktop, suitsGalleryDesktop],
      showcaseLabel: 'The Order Experience',
      mobileImage: suitsHeroMobile,
      applications: ['Order Flow', 'Package Selection', 'Measurement Intake', 'Past Work Gallery', 'WhatsApp Handoff'],
      before: [
        'Orders lived entirely in WhatsApp voice notes.',
        'Measurements were easy to lose in scroll-back.',
        'No structured way to compare packages.',
        'No visual home for past work.',
      ],
      after: [
        'A real order flow with package tiers.',
        'Structured measurement intake.',
        'Orders arrive as a clean summary, ready to act on.',
        'A gallery that shows the craft, not just the pitch.',
      ],
      takeaway:
        "A tailoring business sells precision. The intake process customers go through should feel like proof of that, not the one part of the experience still held together with voice notes.",
      liveUrl: 'everything-suits--suitseverything.replit.app',
    },
  },
  {
    id: 'ejimaco',
    name: 'Ejimaco Digital World',
    url: 'ejimaco.netlify.app',
    industry: 'Creator gear & equipment retail',
    problem:
      'A professional creator-gear retailer — cameras, lenses, microphones, studio lights, gimbals, storage and audio — needed a storefront that felt as serious as the equipment it sells.',
    strategy:
      'Present the catalogue with the same confidence a working creator would want from their own gear — dark, clean, product-first.',
    identity: 'Near-black theme (#111111), equipment-led, no lifestyle filler.',
    homepage: 'A categorized product catalogue spanning cameras, lenses, mics, lighting, gimbals and storage.',
    development: 'Deployed on Netlify, live at ejimaco.netlify.app.',
    outcome: 'A dedicated home for a catalogue that used to be scattered across posts and stories.',
    caseStudy: {
      category: 'Brand Identity',
      tagline: 'From logo mark to trusted identity',
      name: 'Ejimaco',
      heroImage: ejimacoWordmark,
      heroImageBg: '#ffffff',
      challenge:
        "The previous identity no longer reflected the level of professionalism Ejimaco's business wanted to communicate. The goal wasn't simply to create another logo — it was to create an identity people would recognize, remember, and trust.",
      thinking: [
        'Instead of adding unnecessary effects or making the logo overly complicated, we focused on creating something clean, memorable, and professional.',
        'A strong logo should look just as good on a business card as it does on a website, shop sign, or social media profile. That\'s the direction we chose.',
      ],
      evolution: ejimacoEvolution,
      checklist: [
        "It's easy to recognize.",
        "It's easy to remember.",
        'It looks professional in both black and colour.',
        'It works across websites, packaging, uniforms and signage.',
        'It gives the business a stronger and more trustworthy identity.',
        "It's designed to grow with the business.",
      ],
      showcaseImages: [ejimacoHeroDesktop, ejimacoCategoryDesktop],
      showcaseLabel: 'The Identity, Live',
      mobileImages: [ejimacoHeroMobile, ejimacoShopMobile],
      applications: ['Business Card', 'Letterhead', 'Website Header', 'Social Profile', 'Packaging', 'Store Signage'],
      before: [
        'The brand looked inconsistent.',
        "The identity wasn't very memorable.",
        "It didn't fully reflect the quality of the business.",
      ],
      after: [
        'A clean, modern identity that builds trust.',
        'Easier to recognize across digital and print.',
        'A professional brand system ready to grow with the business.',
      ],
      takeaway:
        "Great branding isn't about making a logo look fancy. It's about helping people recognize, remember, and trust your business wherever they see it.",
      liveUrl: 'ejimaco.netlify.app',
    },
  },
]

// Not a business client — the founder's own multi-service portfolio.
// Shown separately as an example of range: a personal brand / portfolio-style build.
export const portfolioExample = {
  id: 'dreams-portfolio',
  name: 'Dreams — Builder & Growth Strategist',
  url: 'debomiportfolio.netlify.app',
  description:
    'A multi-page personal portfolio with its own light/dark system and five distinct service pages — proof the same design system scales from product storefronts to personal brands.',
  heroImageDark: dreamsHeroDarkDesktop,
  heroImageLight: dreamsHeroLightDesktop,
  heroImageDarkMobile: dreamsHeroDarkMobile,
}

export const upcomingProjects = [
  { id: 'coming-soon-1', label: 'Coming Soon' },
]
