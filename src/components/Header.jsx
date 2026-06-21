import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Clock, Menu, X } from 'lucide-react'
import { site } from '../config/site.js'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5" aria-label={`${site.name} home`}>
      <img
        src={`${import.meta.env.BASE_URL}logo-dark.png`}
        alt=""
        className="h-8 w-auto"
        width="168"
        height="80"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold text-ink">Cart Transformation</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-soft">
          {site.tagline}
        </span>
      </span>
    </Link>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar: phone + hours, always visible on larger screens */}
      <div className="hidden bg-ink text-white md:block">
        <div className="container-x flex h-9 items-center justify-between text-[13px]">
          <a
            href={`tel:${site.phone.tel}`}
            className="flex items-center gap-2 font-medium hover:text-flame-light"
          >
            <Phone size={14} className="text-flame" />
            {site.phone.display}
          </a>
          <span className="flex items-center gap-2 text-cloud-200">
            <Clock size={14} className="text-mint" />
            {site.hoursShort}
          </span>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b transition-colors duration-300 ${
          scrolled
            ? 'border-ink/10 bg-white/90 backdrop-blur-md'
            : 'border-transparent bg-cloud'
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between md:h-20">
          <Logo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative font-display text-[15px] font-medium transition-colors ${
                    isActive ? 'text-flame' : 'text-ink hover:text-flame'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-flame"
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* Mobile click-to-call */}
            <a
              href={`tel:${site.phone.tel}`}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink md:hidden"
              aria-label={`Call ${site.phone.display}`}
            >
              <Phone size={18} />
            </a>

            <Link to="/contact" className="btn-primary hidden text-sm sm:inline-flex">
              Get a free quote
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/15 text-ink lg:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="overflow-hidden border-b border-ink/10 bg-white lg:hidden"
          >
            <nav className="container-x flex flex-col py-4" aria-label="Mobile">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `border-b border-ink/5 py-3 font-display text-base ${
                      isActive ? 'text-flame' : 'text-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="mt-4 flex flex-col gap-3">
                <a href={`tel:${site.phone.tel}`} className="btn-dark w-full">
                  <Phone size={16} /> Call {site.phone.display}
                </a>
                <Link to="/contact" className="btn-primary w-full">
                  Get a free quote
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
