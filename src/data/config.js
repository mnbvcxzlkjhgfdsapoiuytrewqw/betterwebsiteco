export const WHATSAPP_NUMBER = '2347049891302'
export const CONTACT_EMAIL = 'shadowgrowthcoofficial@gmail.com'
export const TIKTOK_URL = 'https://www.tiktok.com/@highfunctioningzone'

export function buildWhatsAppLink(tierName) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  const text = tierName
    ? `Hi! I'm interested in the ${tierName} plan from Better Website Co.`
    : `Hi! I'd like to talk to Better Website Co. about a new website.`
  return `${base}?text=${encodeURIComponent(text)}`
}

// Referral submissions go through WhatsApp too — no form backend yet, so this
// pre-fills the fields needed to track a referral manually (see Partners.jsx
// / data/partners.js: doc calls for manual tracking until volume justifies
// a dashboard).
export function buildReferralWhatsAppLink() {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`
  const text = `Hi! I'd like to refer a business to Better Website Co.\n\nMy name:\nBusiness I'm referring:\nContact for that business:\nWhat they need (website type, if known):`
  return `${base}?text=${encodeURIComponent(text)}`
}
