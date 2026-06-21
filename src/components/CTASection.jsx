import { Link } from 'react-router-dom'
import { Phone, CalendarCheck, ArrowRight } from 'lucide-react'
import { site } from '../config/site.js'
import { Reveal } from './PageTransition.jsx'

export default function CTASection({
  heading = 'Ready to recover the revenue slipping through your checkout?',
  sub = 'Get a free, no-obligation conversion audit. We’ll show you exactly where you’re losing sales — and what to fix first.',
}) {
  return (
    <section className="bg-cloud py-16 md:py-20">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[32px] bg-ink px-7 py-14 text-center text-white md:px-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-flame/30 blur-[100px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-flame-light/20 blur-[100px]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">{heading}</h2>
            <p className="mt-4 text-cloud-200/80">{sub}</p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link to="/contact" className="btn-primary text-base">
                <CalendarCheck size={18} /> Book free audit <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${site.phone.tel}`}
                className="btn-ghost border-white/20 bg-white/5 text-base text-white hover:border-flame hover:text-flame-light"
              >
                <Phone size={18} /> {site.phone.display}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
