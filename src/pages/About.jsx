import { Link } from 'react-router-dom'
import { Heart, MapPin, Users, ShieldCheck, ArrowRight } from 'lucide-react'
import { PageTransition, Reveal } from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'
import CTASection from '../components/CTASection.jsx'
import { images } from '../data/images.js'

const values = [
  {
    icon: MapPin,
    title: 'Local first',
    body: 'Born and run in Singapore. We know PayNow, GrabPay, and how SE-Asian shoppers actually buy.',
  },
  {
    icon: ShieldCheck,
    title: 'No fluff, no lock-in',
    body: 'Plain reporting, honest scopes, and work you own. We earn the next project, never trap you in it.',
  },
  {
    icon: Heart,
    title: 'Invested in your numbers',
    body: 'We treat your conversion rate like our own. If a fix won’t move revenue, we won’t sell it to you.',
  },
]

const team = [
  {
    name: 'Jordan Lim',
    role: 'Founder & Conversion Lead',
    img: images.founder,
    bio: '12 years building and rescuing online stores across SE Asia.',
  },
  {
    name: 'Mei Chen',
    role: 'Head of Engineering',
    img: images.founder2,
    bio: 'WooCommerce and headless specialist obsessed with page speed.',
  },
]

export default function About() {
  return (
    <PageTransition>
      <Seo title='About Us — Local E-commerce Conversion Studio' description='Meet Cart Transformation, a Singapore studio helping local e-commerce merchants recover lost carts and grow revenue since 2018.' />
      {/* Intro */}
      <section className="py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="eyebrow">
              <Users size={14} /> Our story
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl">
              We grew up alongside Singapore's e-commerce scene
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-soft">
              Cart Transformation started after years of watching brilliant local stores
              lose sales to clunky checkouts and silent abandoned carts. We saw the same
              fixable problems again and again — so we built a studio to fix them properly.
            </p>
            <p className="mt-4 leading-relaxed text-slate-soft">
              Today we work hands-on with merchants across the island, from home-grown
              fashion labels to electronics resellers on Lazada and Shopee. We're small,
              senior, and close to the work — the person who audits your store is the
              person who fixes it.
            </p>
            <Link to="/contact" className="btn-primary mt-8">
              Work with us <ArrowRight size={16} />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="relative">
            <div
              className="aspect-[4/5] w-full rounded-[28px] bg-cover bg-center bg-transform-gradient shadow-card"
              style={{ backgroundImage: `url(${images.team})` }}
            />
            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-cloud-100 p-5 shadow-xl ring-1 ring-ink/5 sm:block">
              <p className="font-mono text-3xl font-bold text-flame">2018</p>
              <p className="text-sm text-slate-soft">helping SG stores grow</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cloud py-16 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Principles that keep us honest
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card h-full">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-flame/10 text-flame">
                    <v.icon size={22} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold text-ink">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-soft">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Meet the team</span>
            <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              Senior people, no hand-offs
            </h2>
            <p className="mt-4 text-slate-soft">
              A small team that does the work itself — and answers the phone when you call.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:max-w-3xl">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.1}>
                <div className="card flex items-center gap-5">
                  <div
                    className="h-24 w-24 shrink-0 rounded-2xl bg-cover bg-center bg-cloud-200"
                    style={{ backgroundImage: `url(${m.img})` }}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-ink">{m.name}</h3>
                    <p className="font-mono text-xs uppercase tracking-wide text-flame">
                      {m.role}
                    </p>
                    <p className="mt-2 text-sm text-slate-soft">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Community */}
          <Reveal delay={0.1}>
            <div className="mt-12 rounded-3xl bg-flame/8 p-8 ring-1 ring-flame/10 md:p-10">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-ink">
                <Heart size={20} className="text-flame" /> In the community
              </h3>
              <p className="mt-3 max-w-3xl text-slate-soft">
                We run free monthly conversion clinics for early-stage SG sellers, mentor at
                local maker markets, and share what we learn openly with the merchant
                community. Helping small stores win is the whole point.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection
        heading="Let's grow your store together"
        sub="Book a friendly, no-pressure call. We'll look at your store and tell you honestly where the biggest wins are."
      />
    </PageTransition>
  )
}
