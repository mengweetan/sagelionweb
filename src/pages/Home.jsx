import { Link } from 'react-router-dom'
import { ArrowRight, Search, Wrench, LineChart } from 'lucide-react'
import { PageTransition, Reveal } from '../components/PageTransition.jsx'
import Hero from '../components/Hero.jsx'
import StatBand from '../components/StatBand.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import MapSection from '../components/MapSection.jsx'
import CTASection from '../components/CTASection.jsx'
import { services } from '../data/services.js'
import { testimonials } from '../data/testimonials.js'
import SectionSeam from '../components/SectionSeam.jsx'
import Seo from '../components/Seo.jsx'

const steps = [
  {
    icon: Search,
    title: 'Audit',
    body: 'We dig into your analytics, recordings, and checkout to find exactly where buyers drop off.',
  },
  {
    icon: Wrench,
    title: 'Transform',
    body: 'We fix the highest-impact leaks first — checkout, recovery flows, and funnel structure.',
  },
  {
    icon: LineChart,
    title: 'Grow',
    body: 'We measure the lift, then keep optimizing so your conversion rate compounds over time.',
  },
]

export default function Home() {
  return (
    <PageTransition>
      <Seo title='E-commerce Conversion Experts in Singapore' description='Recover abandoned carts, optimize checkout, and grow revenue. Free conversion audit for Singapore e-commerce merchants on Lazada, Shopee, and WooCommerce.' />
      <Hero />
      <StatBand />

      {/* Services preview */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <Reveal className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="eyebrow">What we do</span>
              <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
                Conversion services built for SE-Asian commerce
              </h2>
              <p className="mt-4 text-slate-soft">
                Every engagement starts with the same question: where are you losing sales,
                and what's the fastest way to win them back?
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-1.5 font-display font-semibold text-violet hover:text-coral"
            >
              View all services <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 0.08}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="relative overflow-hidden bg-ink py-16 text-white md:py-24">
        <SectionSeam position="top" />
        <div className="container-x relative z-10">
          <Reveal className="max-w-2xl">
            <span className="eyebrow text-violet-light">How it works</span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              A simple path from leaking to leading
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="h-full rounded-3xl bg-ink-700/60 p-7 ring-1 ring-white/10">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm text-coral-light">
                      0{i + 1}
                    </span>
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-transform-gradient">
                      <s.icon size={20} />
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cloud-200/75">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <SectionSeam position="bottom" />
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Proof</span>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Local merchants, real results
            </h2>
            <p className="mt-4 text-slate-soft">
              Five-star reviews from store owners across Singapore.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 3) * 0.08}>
                <TestimonialCard t={t} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MapSection />
      <CTASection />
    </PageTransition>
  )
}
