import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  ShoppingCart,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
} from 'lucide-react'
import { site } from '../config/site.js'
import SectionSeam from './SectionSeam.jsx'

const socialIcons = [
  { key: 'facebook', Icon: Facebook, label: 'Facebook' },
  { key: 'instagram', Icon: Instagram, label: 'Instagram' },
  { key: 'linkedin', Icon: Linkedin, label: 'LinkedIn' },
  { key: 'whatsapp', Icon: MessageCircle, label: 'WhatsApp' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink text-cloud-200">
      <SectionSeam position="top" />
      <div className="container-x relative z-10 grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand + NAP name */}
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-transform-gradient text-white">
              <ShoppingCart size={20} strokeWidth={2.25} />
            </span>
            <span className="font-display text-lg font-bold text-white">
              Cart Transformation
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cloud-200/80">
            Conversion specialists helping Singapore e-commerce merchants recover lost
            carts and grow revenue.
          </p>
          <div className="mt-5 flex gap-3">
            {socialIcons.map(({ key, Icon, label }) =>
              site.socials[key] ? (
                <a
                  key={key}
                  href={site.socials[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/8 text-white transition-colors hover:bg-coral"
                >
                  <Icon size={16} />
                </a>
              ) : null,
            )}
          </div>
        </div>

        {/* Contact / Address */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Visit us
          </h3>
          <address className="mt-4 space-y-3 text-sm not-italic">
            <p className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-coral" />
              <span>
                {site.address.line1}
                <br />
                {site.address.unit}
                <br />
                {site.address.city} {site.address.postal}
              </span>
            </p>
            <p>
              <a
                href={`tel:${site.phone.tel}`}
                className="flex items-center gap-2.5 hover:text-coral-light"
              >
                <Phone size={16} className="shrink-0 text-coral" />
                {site.phone.display}
              </a>
            </p>
            <p>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2.5 hover:text-coral-light"
              >
                <Mail size={16} className="shrink-0 text-coral" />
                {site.email}
              </a>
            </p>
          </address>
        </div>

        {/* Hours */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Opening hours
          </h3>
          <dl className="mt-4 space-y-2 text-sm">
            {site.hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4">
                <dt className="text-cloud-200/80">{h.days}</dt>
                <dd
                  className={`font-mono text-[13px] ${
                    h.closed ? 'text-cloud-200/50' : 'text-white'
                  }`}
                >
                  {h.time}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/services" className="hover:text-coral-light">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-coral-light">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-coral-light">
                Book / Get a quote
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-coral-light">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-coral-light">
                Terms of service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-cloud-200/60 sm:flex-row">
          <p>
            © {year} {site.name}. Serving {site.serviceArea}.
          </p>
          <p className="font-mono">UEN: 20XXXXXXX · GST Reg: M9-XXXXXXX-X</p>
        </div>
      </div>
    </footer>
  )
}
