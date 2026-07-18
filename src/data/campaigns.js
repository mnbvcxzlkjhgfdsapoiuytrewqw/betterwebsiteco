// Content for /campaigns/* landing pages.
// Kept separate from data/content.js (homepage copy) so each campaign page
// can evolve independently without touching the homepage.

export const websitesThatSell = {
  meta: {
    title: 'Websites That Sell — Own Your Online Presence | Better Website Co.',
    description:
      "Social media is borrowed space. A website is digital property you own. See how Better Website Co. builds websites that turn visitors into customers.",
  },
  hero: {
    eyebrow: 'For business owners',
    headline: 'Social media is',
    accentWord: 'borrowed space.',
    subhead:
      "You don't own your Instagram following, your WhatsApp broadcast list, or your reach. One policy change and it's gone. A website is digital property — yours, permanently.",
    primaryCta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
    secondaryCta: { label: 'See Website Examples', href: '#transformations' },
  },
  problemSolution: {
    eyebrow: 'Why this matters',
    headline: "You've built an audience. You just don't own where it lives.",
    problem: {
      label: 'The problem',
      title: 'Platforms can change the rules whenever they want.',
      copy: 'Algorithm changes bury your posts. Accounts get suspended without warning. A follower isn\'t a customer — they\'re a visitor to a platform that owns the room you\'re both standing in.',
    },
    solution: {
      label: 'The reframe',
      title: 'A website is the one place online that answers to you.',
      copy: 'No algorithm decides who sees it. No platform can take it down. It works while you sleep, it\'s the first thing people check before they trust you, and every visitor who lands on it is one you didn\'t have to rent.',
    },
  },
  features: {
    eyebrow: 'What you actually get',
    headline: 'Built to be owned, not rented.',
    items: [
      { title: 'You own the code', copy: 'Version controlled on GitHub, in your name — not locked inside a website builder you\'re renting monthly.' },
      { title: 'Mobile-first', copy: 'Most of your customers will meet your business on a phone. So does your site, first.' },
      { title: 'Lightning fast', copy: 'A slow site loses customers before they ever see what you offer.' },
      { title: 'SEO-ready', copy: 'Structured to be found on Google — not just to look good once someone already knows to search for you.' },
      { title: 'Easy to manage', copy: 'Update your own content without calling us or waiting on a developer.' },
      { title: 'Built to convert', copy: 'Every section exists to move a visitor one step closer to contacting you.' },
    ],
  },
  benefits: {
    eyebrow: 'What that means for your business',
    headline: 'Property, not rent.',
    items: [
      { title: 'Credibility in seconds', copy: 'Visitors decide whether to take you seriously before they read a word. A real website answers that instantly.' },
      { title: 'A 24/7 sales rep', copy: 'It explains what you do, answers objections, and captures enquiries while you\'re busy running the business.' },
      { title: 'Independence from any single platform', copy: "If Instagram disappeared tomorrow, would your business survive it? Your website doesn't ask that question." },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    headline: 'Still deciding?',
    items: [
      {
        q: 'I already have a decent following on social media — why do I need this?',
        a: "A following is attention you've earned but don't own. A website is where that attention converts into something durable: trust, enquiries, and a record of your business that outlasts any single platform.",
      },
      {
        q: "What's the difference between this and a website builder?",
        a: 'Builders rent you a template and a monthly subscription. We build and hand you a real, version-controlled codebase — designed specifically around your business, not a generic layout with your logo dropped in.',
      },
      {
        q: 'How long does it take?',
        a: "Most websites are completed within 1–3 weeks, depending on scope and how quickly content and feedback come back to us.",
      },
      {
        q: 'What does it cost?',
        a: "Every project is different, so pricing starts from ₦50,000. We'll recommend the right scope for your goals and give you a transparent quote on the strategy call.",
      },
    ],
  },
  finalCta: {
    headline: 'Stop renting your online presence.',
    subhead: "Let's build something that's actually yours.",
    cta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
  },
}

// ⚠️ DEMO DATA — not real registrations. See ActivityTicker.jsx for details
// on swapping this for a live feed before any campaign page using it goes
// live behind real ad spend.
export const demoActivityEvents = [
  { id: 1, text: 'Sarah just registered.' },
  { id: 2, text: 'David just secured a ticket.' },
  { id: 3, text: '12 tickets sold today.' },
  { id: 4, text: 'Amaka just registered.' },
  { id: 5, text: 'A ticket was just claimed in Lagos.' },
  { id: 6, text: 'Tobi just secured a spot.' },
]

export const businessWebsites = {
  meta: {
    title: 'Business Websites — Look As Credible As You Are | Better Website Co.',
    description:
      'A premium website built for credibility, trust and lead generation — designed to turn company visitors into real customer enquiries.',
  },
  hero: {
    eyebrow: 'For companies',
    headline: 'Your business is credible.',
    accentWord: 'Does your website say so?',
    subhead:
      "Customers judge a company before they ever call. A dated or generic website undersells everything you've actually built — a premium one does the opposite.",
    primaryCta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
    secondaryCta: { label: 'See Website Examples', href: '#transformations' },
  },
  problemSolution: {
    eyebrow: 'Why this matters',
    headline: 'Trust is decided before the first phone call.',
    problem: {
      label: 'The problem',
      title: "A weak website quietly costs you enquiries you'll never see.",
      copy: "Nobody tells you they left. They just don't call. A site that looks unfinished, slow, or generic reads as risk — and companies don't send enquiries to risk.",
    },
    solution: {
      label: 'The reframe',
      title: 'A premium website is proof, before you say a word.',
      copy: 'It shows what you do, who you\'ve done it for, and why you\'re the safer choice — clearly enough that a visitor arrives at your contact form already halfway convinced.',
    },
  },
  features: {
    eyebrow: 'What you actually get',
    headline: 'Built for the way companies actually get chosen.',
    items: [
      { title: 'Credibility signals up front', copy: 'Clients, results, and proof of work placed where a decision-maker looks first.' },
      { title: 'A real enquiry pipeline', copy: 'Contact forms and CTAs designed to capture leads, not just display information.' },
      { title: 'Professional, not generic', copy: 'Built around your business specifically — not a template with your logo swapped in.' },
      { title: 'Mobile-first', copy: 'Most enquiries start on a phone, often outside office hours.' },
      { title: 'SEO-ready', copy: 'Structured so companies searching for what you do can actually find you.' },
      { title: 'Fast to load', copy: 'A slow site loses the enquiry before your pitch even loads.' },
    ],
  },
  benefits: {
    eyebrow: 'What that means for your business',
    headline: 'A website that does the convincing for you.',
    items: [
      { title: 'More qualified enquiries', copy: 'Visitors who reach your contact form already understand what you offer and why it fits them.' },
      { title: 'A stronger first impression', copy: 'The website often is the first impression — before your team, before your pitch deck.' },
      { title: 'Fewer wasted conversations', copy: 'A site that pre-answers the basic questions means the calls you do get are further along already.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    headline: 'Still deciding?',
    items: [
      {
        q: "We already have a website — why replace it?",
        a: "If it isn't generating enquiries, it's costing you them. We can often work with what exists rather than starting from zero — the strategy call will tell us which makes sense.",
      },
      {
        q: 'How is this different from a template or freelancer job?',
        a: "Templates and one-off freelance builds solve for 'a website exists.' We solve for 'this website gets you customers' — every section is there for a reason.",
      },
      {
        q: 'How long does it take?',
        a: 'Most business websites are completed within 1–3 weeks depending on scope and how quickly content comes back to us.',
      },
      {
        q: 'What does it cost?',
        a: "Pricing starts from ₦180,000 for a full business website. We'll scope it properly and give you a transparent quote on the strategy call.",
      },
    ],
  },
  finalCta: {
    headline: 'Let your website close the case for you.',
    subhead: "Let's build one that actually earns the enquiry.",
    cta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
  },
}

export const eventWebsites = {
  meta: {
    title: 'Event Websites — Your Event Starts Before Event Day | Better Website Co.',
    description:
      'Conference, summit, or concert — a dedicated event website with registration, speakers, schedule and countdown, built to sell tickets before the day arrives.',
  },
  hero: {
    eyebrow: 'For event organisers',
    headline: 'Your event starts',
    accentWord: 'long before event day.',
    subhead:
      'Conferences, summits, church events, masterclasses, concerts, product launches — every one of them is won or lost in the weeks before doors open. Your website is where that happens.',
    primaryCta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
    secondaryCta: { label: 'See Website Examples', href: '#transformations' },
  },
  problemSolution: {
    eyebrow: 'Why this matters',
    headline: "A flyer can't sell tickets while you sleep.",
    problem: {
      label: 'The problem',
      title: 'Most events are promoted entirely through scattered posts.',
      copy: "A WhatsApp broadcast and an Instagram flyer answer 'what is this?' once, then disappear into the timeline. Anyone who asks a question a day later has no easy way to check the answer, register, or even find the event again.",
    },
    solution: {
      label: 'The reframe',
      title: 'One page that sells the ticket the whole way through.',
      copy: "A real event website holds the countdown, the schedule, the speakers, and the registration form in one place that keeps working after the post scrolls away — and keeps building momentum as the date gets closer.",
    },
  },
  features: {
    eyebrow: "What's on the page",
    headline: 'Everything a ticket decision actually needs.',
    items: [
      { title: 'Live countdown', copy: 'Builds urgency automatically as the date approaches — no manual updates needed.' },
      { title: 'Registration built in', copy: 'Capture attendee details directly, instead of routing everyone through a DM.' },
      { title: 'Speakers & schedule', copy: 'Give people the specifics that turn "maybe" into "I\'m going."' },
      { title: 'FAQ section', copy: 'Answer the logistics questions before they become a flood of repeat DMs.' },
      { title: 'Social proof', copy: 'Show that people are already registering — the room is filling up.' },
      { title: 'Fast, mobile-first', copy: 'Built for the phone screen someone\'s scrolling on when they see your ad.' },
    ],
  },
  benefits: {
    eyebrow: 'What that means for your event',
    headline: 'Momentum, not a one-off post.',
    items: [
      { title: 'A page that keeps selling', copy: "Every share, repost, and mention points somewhere permanent instead of a flyer that's already buried." },
      { title: 'Fewer logistics DMs', copy: 'Schedule, venue, pricing and FAQ answered on the page, not one by one in your inbox.' },
      { title: 'Visible momentum', copy: 'Live registration activity gives late deciders the push that a static flyer never could.' },
    ],
  },
  socialProof: {
    activityEvents: true,
  },
  faq: {
    eyebrow: 'FAQ',
    headline: 'Planning an event?',
    items: [
      {
        q: 'How far in advance do we need this before the event?',
        a: "As early as possible — the whole point is momentum over time. That said, we've built these on tight timelines when needed. Tell us your date on the strategy call and we'll tell you honestly if it's workable.",
      },
      {
        q: 'Can it handle actual ticket payments, not just registration?',
        a: "Yes — we can wire in payment collection or keep it to registration-only with payment handled at the door or via WhatsApp, depending on what fits your event.",
      },
      {
        q: 'What if our event is recurring, not one-off?',
        a: "We can build it so the core page structure stays and the date, speakers and schedule update for each edition — no rebuilding from scratch every time.",
      },
      {
        q: 'What does it cost?',
        a: "Event websites typically start from ₦50,000, depending on whether you need payments, multiple speaker pages, or a multi-day schedule. We'll quote it properly on the call.",
      },
    ],
  },
  finalCta: {
    headline: "Don't let your event depend on one flyer.",
    subhead: "Let's build the page that sells it the whole way to the door.",
    cta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
  },
}

export const websiteRedesign = {
  meta: {
    title: 'Website Redesign — Has Your Business Grown But Your Website Hasn\'t? | Better Website Co.',
    description:
      "If your business has outgrown your website, a redesign brings your online presence up to what you've actually become. See real before/after transformations.",
  },
  hero: {
    eyebrow: 'For businesses with an outdated website',
    headline: 'Has your business grown...',
    accentWord: "...but your website hasn't?",
    subhead:
      "A lot changes in a business over a few years. If your website is still the one from when you started, it's telling new visitors a story that's already out of date.",
    primaryCta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
    secondaryCta: { label: 'See Before / After', href: '#transformations' },
  },
  problemSolution: {
    eyebrow: 'Why this matters',
    headline: 'An outdated site undersells a business that has moved on.',
    problem: {
      label: 'The problem',
      title: 'Your website is still selling the old version of your business.',
      copy: "New products, new positioning, new level of professionalism — none of it shows up if the site was built years ago and never revisited. Visitors judge you by what they see today, not by what you've actually become.",
    },
    solution: {
      label: 'The reframe',
      title: 'A redesign is catching your website up to your business.',
      copy: "Not starting over — bringing your online presence up to the standard you've already earned everywhere else. Same business, finally represented the way it deserves.",
    },
  },
  features: {
    eyebrow: 'What redesign actually changes',
    headline: 'Same business. Properly represented.',
    items: [
      { title: 'Modern, current design', copy: 'Out with the template that gave away your launch year.' },
      { title: 'Mobile-first, finally', copy: 'Older sites often weren\'t built mobile-first at all — most visitors today are on a phone.' },
      { title: 'Faster load times', copy: 'Years of accumulated plugins and bloat, gone.' },
      { title: 'Clear, current messaging', copy: 'Reflects what you offer now, not what you offered when the site was built.' },
      { title: 'SEO reset', copy: 'Structured properly so search engines represent you accurately today.' },
      { title: 'Built to keep up', copy: 'Version-controlled and easy to update, so it never falls this far behind again.' },
    ],
  },
  benefits: {
    eyebrow: 'What that means for your business',
    headline: 'The gap between what you are and what you show, closed.',
    items: [
      { title: 'Visitors trust what they see', copy: 'A current, professional site matches the business you\'ve actually built.' },
      { title: 'Nothing holding referrals back', copy: 'When someone checks you out after a recommendation, the site backs the recommendation up instead of undercutting it.' },
      { title: 'A foundation that scales with you', copy: 'Built properly this time, so growth doesn\'t mean starting over again in another few years.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    headline: 'Still deciding?',
    items: [
      {
        q: 'Do we lose our existing content and SEO rankings?',
        a: "No — we carry over what's working (content, structure that ranks) and rebuild what isn't. A redesign done properly protects existing SEO value, not resets it.",
      },
      {
        q: "Can you work with our current brand, or does it all change?",
        a: "Your call. Some businesses want a full refresh, others just want the current brand finally represented properly online. We'll talk through what your business actually needs on the strategy call.",
      },
      {
        q: 'How long does a redesign take?',
        a: 'Most redesigns are completed within 1–3 weeks, depending on scope and how much content needs revisiting.',
      },
      {
        q: 'What does it cost?',
        a: "Redesign pricing depends on the size of the existing site and how much is being rebuilt versus refreshed — we'll give you a transparent quote on the call.",
      },
    ],
  },
  finalCta: {
    headline: 'Your business outgrew your website years ago.',
    subhead: "Let's close the gap.",
    cta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
  },
}

export const funnelPages = {
  meta: {
    title: 'Funnel Pages — One Product, One Purpose, Higher Conversion | Better Website Co.',
    description:
      'Selling one product or service? A dedicated funnel page — offer, benefits, testimonials, guarantee, CTA — converts better than a generic homepage ever will.',
  },
  hero: {
    eyebrow: 'For single-offer businesses',
    headline: 'One product.',
    accentWord: 'One page built to sell it.',
    subhead:
      "A homepage has to serve everyone. A funnel page has one job: take a visitor from interested to bought — with nothing in the way.",
    primaryCta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
    secondaryCta: { label: 'See Website Examples', href: '#transformations' },
  },
  problemSolution: {
    eyebrow: 'Why this matters',
    headline: 'A homepage is built to inform. A funnel is built to convert.',
    problem: {
      label: 'The problem',
      title: 'Sending single-offer traffic to a general homepage leaks conversions.',
      copy: "A homepage has a navbar, multiple links, and a dozen possible next steps. Every one of those is an exit ramp away from the one purchase you actually want the visitor to make.",
    },
    solution: {
      label: 'The reframe',
      title: 'A funnel page removes every decision except one: buy or leave.',
      copy: "No navigation to wander off into, no competing offers, no distractions. Every section builds toward a single action — which is exactly why funnel pages consistently out-convert general pages for a single offer.",
    },
  },
  flow: {
    eyebrow: 'How a funnel page is built',
    headline: 'Every section has exactly one purpose.',
    steps: [
      { title: 'Offer', copy: 'What it is, what it costs, why now.' },
      { title: 'Benefits', copy: 'What changes for the buyer, stated plainly.' },
      { title: 'Testimonials', copy: 'Proof it works, from people it worked for.' },
      { title: 'Guarantee', copy: 'Removes the last reason to hesitate.' },
      { title: 'CTA', copy: 'One clear next step. Repeated, not buried.', highlight: true },
    ],
  },
  features: {
    eyebrow: 'What you actually get',
    headline: 'Built around conversion, not decoration.',
    items: [
      { title: 'Single, focused offer', copy: 'No competing links, no navbar pulling attention away from the one goal.' },
      { title: 'Objection handling built in', copy: 'FAQ and guarantee sections address hesitation before it becomes an exit.' },
      { title: 'Repeated, clear CTAs', copy: 'The next step is never more than a scroll away.' },
      { title: 'Mobile-first', copy: 'Most funnel traffic arrives from an ad, on a phone.' },
      { title: 'Fast to load', copy: 'Every second of load time is a percentage of buyers who leave first.' },
      { title: 'Built to test', copy: 'Structured so you can swap headlines, offers or pricing without rebuilding the page.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    headline: 'Still deciding?',
    items: [
      {
        q: "Isn't this the same as a landing page?",
        a: "Related, but not identical — a landing page is usually the entry point matching a specific ad. A funnel page is built for the full journey from interest to purchase, often with more sections doing more selling work.",
      },
      {
        q: 'Will this replace our main website?',
        a: "No — it works alongside it. Your homepage still serves general visitors; the funnel page exists specifically to convert traffic for one offer.",
      },
      {
        q: 'Can we run ads directly to it?',
        a: "That's exactly what it's built for — message-matched to the ad, with nothing between the click and the offer.",
      },
      {
        q: 'What does it cost?',
        a: "Funnel pages are typically scoped closer to our Launch tier pricing, starting from ₦50,000, depending on how many sections and how much copywriting is involved.",
      },
    ],
  },
  finalCta: {
    headline: 'Stop competing with your own navbar.',
    subhead: "Let's build the page whose only job is the sale.",
    cta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
  },
}

export const landingPages = {
  meta: {
    title: 'Landing Pages — Why Dedicated Pages Outperform Your Homepage | Better Website Co.',
    description:
      'A generic homepage makes every visitor work to find relevance. A dedicated landing page matches the ad that brought them — and converts because of it.',
  },
  hero: {
    eyebrow: 'For paid traffic & campaigns',
    headline: 'Your ad made a promise.',
    accentWord: 'Your homepage probably breaks it.',
    subhead:
      "Send someone from a specific ad to a general homepage and you're asking them to re-find what they already clicked to see. A dedicated landing page never makes them look.",
    primaryCta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
    secondaryCta: { label: 'See Website Examples', href: '#transformations' },
  },
  problemSolution: {
    eyebrow: 'Why this matters',
    headline: 'Every click that lands on the wrong page is a wasted click.',
    problem: {
      label: 'The problem',
      title: "A homepage forces the visitor to do the work you already did in the ad.",
      copy: "You already told them exactly what you're offering — in the ad copy, the headline, the image. Land them on a generic homepage and they have to relocate that same offer themselves, buried in a navbar. Most won't bother.",
    },
    solution: {
      label: 'The reframe',
      title: "Message match: what the ad promised is what the page delivers, instantly.",
      copy: "Same headline energy, same offer, same visual language — continuing the exact thought your ad started, so the visitor never has to wonder if they clicked the right thing.",
    },
  },
  flow: {
    eyebrow: 'How it flows',
    headline: 'The ad and the page should feel like one continuous thought.',
    steps: [
      { title: 'Ad', copy: 'Makes one specific promise or offer.' },
      { title: 'Landing Page', copy: 'Delivers exactly that promise, nothing else competing for attention.', highlight: true },
      { title: 'Conversion', copy: 'Because nothing broke the visitor\'s train of thought along the way.' },
    ],
  },
  features: {
    eyebrow: 'What you actually get',
    headline: 'Built to match the ad, not the whole business.',
    items: [
      { title: 'Message match', copy: 'Headline and offer continue directly from the ad that brought the visitor.' },
      { title: 'No navigation to wander into', copy: 'One page, one offer, one next step.' },
      { title: 'Built for the specific campaign', copy: 'Not a generic template — designed around what this particular ad is promising.' },
      { title: 'Fast to load', copy: 'Paid traffic is the most expensive traffic to lose to a slow page.' },
      { title: 'Mobile-first', copy: 'Most ad clicks happen on a phone, mid-scroll.' },
      { title: 'Trackable', copy: 'Structured so you can actually measure what\'s converting.' },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    headline: 'Still deciding?',
    items: [
      {
        q: "We already have a homepage — why do we need this too?",
        a: "Your homepage should keep serving general visitors. A landing page exists specifically for traffic that already saw a specific promise — sending them anywhere else drops your conversion rate for no reason.",
      },
      {
        q: 'Do we need a new one for every campaign?',
        a: "Not necessarily — it depends on how different the offers are. We'll help you figure out where one page can serve multiple campaigns and where it genuinely needs its own.",
      },
      {
        q: 'How fast can this be built?',
        a: "Landing pages are usually our fastest turnaround — often under a week, since the scope is narrower than a full website.",
      },
      {
        q: 'What does it cost?',
        a: "Landing pages typically start from ₦50,000, depending on copywriting needs and design complexity. We'll quote it on the call.",
      },
    ],
  },
  finalCta: {
    headline: "Stop sending paid clicks to an unrelated homepage.",
    subhead: "Let's build the page that actually matches your ad.",
    cta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
  },
}

export const bookLaunch = {
  meta: {
    title: 'Book Launch Websites — Sell The Book, Not Just Announce It | Better Website Co.',
    description:
      'A dedicated book launch website — cover, author bio, testimonials, media mentions, countdown, purchase links and email capture — built to convert readers before and after launch day.',
  },
  hero: {
    eyebrow: 'For authors',
    headline: 'Your book deserves',
    accentWord: 'more than a launch-day post.',
    subhead:
      "A dedicated book website builds anticipation before launch, sells copies on launch day, and keeps working for every reader who discovers you afterward.",
    primaryCta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
    secondaryCta: { label: 'See Website Examples', href: '#transformations' },
  },
  problemSolution: {
    eyebrow: 'Why this matters',
    headline: "A launch-day post has a shelf life measured in hours.",
    problem: {
      label: 'The problem',
      title: 'Most book launches live and die on social media.',
      copy: "A single announcement post gets buried within a day. Anyone who discovers your book a week later — or a year later — finds nothing built to actually sell it to them.",
    },
    solution: {
      label: 'The reframe',
      title: 'A book website sells the book long after the launch date passes.',
      copy: "Cover, bio, reviews, and purchase links in one permanent place — building anticipation before launch, converting on launch day, and still working for every reader who finds you later.",
    },
  },
  features: {
    eyebrow: "What's on the page",
    headline: 'Everything a reader needs to say yes.',
    items: [
      { title: 'Book cover, front and centre', copy: 'The first thing every visitor should see and remember.' },
      { title: 'Author bio', copy: 'Gives the book credibility by giving the writer a face and a story.' },
      { title: 'Testimonials & media mentions', copy: 'Early reviews and press coverage, in one place instead of scattered across posts.' },
      { title: 'Countdown to launch', copy: 'Builds anticipation automatically in the run-up to release day.' },
      { title: 'Purchase buttons', copy: 'Direct links to wherever the book is actually sold — no searching required.' },
      { title: 'Email capture', copy: 'Turns one-time readers into a list you can reach for the next book.' },
    ],
  },
  benefits: {
    eyebrow: 'What that means for your launch',
    headline: 'A launch that keeps selling after launch day.',
    items: [
      { title: 'Anticipation before release', copy: 'A countdown and early content give people a reason to come back before the book even exists.' },
      { title: 'One link for everything', copy: 'Every mention, post, or interview can point to one page that does the actual selling.' },
      { title: 'Speaking & media enquiries in one place', copy: "A dedicated contact path so opportunities don't get lost in your inbox alongside everything else." },
    ],
  },
  faq: {
    eyebrow: 'FAQ',
    headline: 'Planning a launch?',
    items: [
      {
        q: 'Do we need this before the book is finished?',
        a: "Ideally yes — the countdown and email capture work best when they've had time to build an audience before release day.",
      },
      {
        q: 'Can it sell directly, or just link out to retailers?',
        a: "Both are possible — we can link to Amazon, your preferred retailer, or wire in direct sales, depending on how you're distributing the book.",
      },
      {
        q: 'What about a second book later?',
        a: "The email list this page builds becomes the audience your next launch starts with — that's a big part of why this outperforms a one-off post.",
      },
      {
        q: 'What does it cost?',
        a: "Book launch websites typically start from ₦50,000, depending on whether direct sales, multiple retailers, or a media kit are involved.",
      },
    ],
  },
  finalCta: {
    headline: "Don't let your launch end when the post scrolls away.",
    subhead: "Let's build the page that keeps selling your book.",
    cta: { label: 'Book a Free Strategy Call', href: '#inquiry' },
  },
}
