import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock, CalendarCheck, CheckCircle2, MessageCircle } from 'lucide-react'
import { PageTransition, Reveal } from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'
import MapSection from '../components/MapSection.jsx'
import SectionSeam from '../components/SectionSeam.jsx'
import { site } from '../config/site.js'
import { services } from '../data/services.js'

const initial = { name: '', email: '', phone: '', store: '', service: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const validate = () => {
    const er = {}
    if (!form.name.trim()) er.name = 'Please enter your name'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = 'Enter a valid email'
    if (!form.message.trim()) er.message = 'Tell us a little about your store'
    setErrors(er)
    return Object.keys(er).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    // ⚠️ Connect this to your backend or a service like Formspree / your own API.
    // Example: fetch('https://formspree.io/f/XXXX', { method: 'POST', body: JSON.stringify(form) })
    setSent(true)
  }

  const field =
    'w-full rounded-2xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-soft/70 focus:border-violet focus-visible:ring-2 focus-visible:ring-violet/40'

  return (
    <PageTransition>
      <Seo title='Contact — Book a Free Conversion Audit' description='Request a free quote or book a conversion audit. Call, WhatsApp, or visit our Braddell Tech studio in Toa Payoh, Singapore.' />
      {/* Header */}
      <section className="relative overflow-hidden bg-ink py-16 text-white md:py-20">
        <div className="container-x relative z-10">
          <Reveal className="max-w-3xl">
            <span className="eyebrow text-violet-light">
              <CalendarCheck size={14} /> Book · Quote · Call
            </span>
            <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
              Let's find your hidden revenue
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-cloud-200/80">
              Tell us about your store and we'll come back within one business day with a
              free audit and a clear quote. Prefer to talk? Just call.
            </p>
          </Reveal>
        </div>
        <SectionSeam position="bottom" />
      </section>

      {/* Form + quick contact */}
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Form */}
          <Reveal className="card">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-12 text-center"
              >
                <CheckCircle2 size={56} className="text-mint-dark" />
                <h2 className="mt-5 text-2xl font-bold text-ink">Request received</h2>
                <p className="mt-3 max-w-md text-slate-soft">
                  Thanks, {form.name.split(' ')[0]}. We'll review your store and reply within
                  one business day. Need a faster answer? Call us at{' '}
                  <a href={`tel:${site.phone.tel}`} className="font-semibold text-violet">
                    {site.phone.display}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initial)
                    setSent(false)
                  }}
                  className="btn-ghost mt-7"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} noValidate>
                <h2 className="text-2xl font-bold text-ink">Request a free quote</h2>
                <p className="mt-2 text-sm text-slate-soft">
                  No obligation. Fields marked with * are required.
                </p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={update}
                      className={field}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-coral-dark">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={update}
                      className={field}
                      placeholder="you@store.com"
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-coral-dark">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={update}
                      className={field}
                      placeholder="+65 …"
                      autoComplete="tel"
                    />
                  </div>

                  <div>
                    <label htmlFor="store" className="mb-1.5 block text-sm font-medium text-ink">
                      Store website
                    </label>
                    <input
                      id="store"
                      name="store"
                      value={form.store}
                      onChange={update}
                      className={field}
                      placeholder="yourstore.com"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-ink">
                      What do you need help with?
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={update}
                      className={field}
                    >
                      <option value="">Select a service…</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Not sure">Not sure yet</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
                      Tell us about your store *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={update}
                      rows={4}
                      className={field}
                      placeholder="Platform, monthly orders, and where you think you're losing sales…"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-coral-dark">{errors.message}</p>
                    )}
                  </div>
                </div>

                <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
                  <CalendarCheck size={18} /> Request my free audit
                </button>
              </form>
            )}
          </Reveal>

          {/* Quick contact */}
          <Reveal delay={0.1} className="flex flex-col gap-5">
            <a href={`tel:${site.phone.tel}`} className="card flex items-center gap-4 hover:shadow-cardHover">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-coral/12 text-coral-dark">
                <Phone size={20} />
              </span>
              <div>
                <p className="text-sm text-slate-soft">Call us</p>
                <p className="font-display font-bold text-ink">{site.phone.display}</p>
              </div>
            </a>

            <a
              href={site.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 hover:shadow-cardHover"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint/15 text-mint-dark">
                <MessageCircle size={20} />
              </span>
              <div>
                <p className="text-sm text-slate-soft">WhatsApp</p>
                <p className="font-display font-bold text-ink">Chat with us</p>
              </div>
            </a>

            <a href={`mailto:${site.email}`} className="card flex items-center gap-4 hover:shadow-cardHover">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet/12 text-violet">
                <Mail size={20} />
              </span>
              <div>
                <p className="text-sm text-slate-soft">Email</p>
                <p className="font-display font-bold text-ink">{site.email}</p>
              </div>
            </a>

            <div className="card">
              <h3 className="flex items-center gap-2 font-display font-bold text-ink">
                <Clock size={18} className="text-violet" /> Opening hours
              </h3>
              <dl className="mt-3 space-y-2 text-sm">
                {site.hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4">
                    <dt className="text-slate-soft">{h.days}</dt>
                    <dd className={`font-mono ${h.closed ? 'text-slate-soft/60' : 'text-ink'}`}>
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <MapSection />
    </PageTransition>
  )
}
