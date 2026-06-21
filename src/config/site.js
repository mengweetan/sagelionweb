// ─────────────────────────────────────────────────────────────
//  EDIT THIS FILE FIRST.
//  Everything below appears across the whole site (header, footer,
//  contact page, structured data). Replace the placeholder values
//  marked with  ⚠️  and the rest of the site updates automatically.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Cart Transformation',
  shortName: 'CartXform',
  tagline: 'E-commerce conversion experts',
  url: 'https://cartXform.com',

  // ⚠️ Replace with the real number. `tel` must be digits only with country code.
  phone: {
    display: '+65 8000 0000',
    tel: '+6580000000',
  },

  email: 'hello@cartXform.com',

  // Contact form POST target (PHP mailer on send.cartxform.com, same pattern
  // as send.flowdaptor.ai). Must respond with CORS headers allowing this
  // site's origin, and a 2xx status with JSON {ok: true} on success.
  formEndpoint: 'https://send.cartxform.com/send.php',

  // Full NAP — used in header, footer, contact page, and schema.org
  address: {
    line1: '13 Lorong 8 Toa Payoh',
    unit: '#04-11, Braddell Tech',
    city: 'Singapore',
    postal: '319261',
    full: '13 Lorong 8 Toa Payoh, #04-11, Braddell Tech, Singapore 319261',
  },

  serviceArea: 'Singapore',

  // ⚠️ Confirm real opening hours.
  hours: [
    { days: 'Mon – Fri', time: '9:00am – 6:00pm' },
    { days: 'Saturday', time: '10:00am – 2:00pm' },
    { days: 'Sunday', time: 'Closed', closed: true },
  ],
  hoursShort: 'Mon–Fri 9–6 · Sat 10–2',

  // ⚠️ Replace with real profile URLs (leave '' to hide an icon).
  socials: {
    facebook: 'https://facebook.com/',
    instagram: 'https://instagram.com/',
    linkedin: 'https://linkedin.com/company/',
    whatsapp: 'https://wa.me/6580000000',
  },

  // Google Maps embed. This query-based embed needs no API key.
  // To use a precise pin, open Google Maps → Share → Embed a map → copy the src.
  mapEmbedSrc:
    'https://www.google.com/maps?q=13+Lorong+8+Toa+Payoh+Braddell+Tech+Singapore+319261&output=embed',
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=13+Lorong+8+Toa+Payoh+Braddell+Tech+Singapore+319261',
}

export default site
