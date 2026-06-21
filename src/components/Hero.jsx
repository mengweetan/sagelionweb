import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Phone, ArrowRight, Star, TrendingUp } from 'lucide-react'
import { site } from '../config/site.js'
import { images } from '../data/images.js'
import SectionSeam from './SectionSeam.jsx'

export default function Hero() {
  const reduce = useReducedMotion()

  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  }
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section className="relative overflow-hidden bg-ink text-white">
      {/* Ambient gradient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-flame/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-20 h-[28rem] w-[28rem] rounded-full bg-flame-light/20 blur-[120px]"
      />

      <div className="container-x relative z-10 grid gap-12 py-16 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        {/* Copy */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.span variants={item} className="eyebrow text-flame-light">
            <span className="h-1.5 w-1.5 rounded-full bg-flame" />
            E-commerce conversion · {site.serviceArea}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl"
          >
            Turn abandoned carts into your{' '}
            <span className="bg-transform-gradient bg-clip-text text-transparent">
              best sales channel
            </span>
            .
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cloud-200/80"
          >
            Singapore's e-commerce conversion specialists. We recover lost carts, rebuild
            slow checkouts, and engineer funnels that turn browsers into buyers — for
            Lazada, Shopee, and your own store.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="btn-primary text-base">
              Book a free audit <ArrowRight size={18} />
            </Link>
            <a href={`tel:${site.phone.tel}`} className="btn-ghost border-white/20 bg-white/5 text-white text-base hover:border-flame hover:text-flame-light">
              <Phone size={18} /> Call {site.phone.display}
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-4 text-sm text-cloud-200/70">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-flame text-flame" />
              ))}
            </span>
            <span>Trusted by 120+ Singapore merchants</span>
          </motion.div>
        </motion.div>

        {/* Signature: transformation card */}
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-[28px] bg-cloud-100 p-2 shadow-2xl">
            <div
              className="aspect-[16/11] w-full rounded-3xl bg-cover bg-center bg-transform-gradient"
              style={{ backgroundImage: `url(${images.heroStore})` }}
            />
          </div>

          {/* Before chip */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute -left-3 top-8 rounded-2xl bg-ink-700/90 px-4 py-3 shadow-lg ring-1 ring-white/10 backdrop-blur"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-cloud-200/60">
              Before
            </p>
            <p className="mt-0.5 font-mono text-xl font-bold text-flame-light">68%</p>
            <p className="text-[11px] text-cloud-200/70">carts abandoned</p>
          </motion.div>

          {/* After chip */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.5 }}
            className="absolute -bottom-5 right-2 rounded-2xl bg-cloud-100 px-4 py-3 text-ink shadow-xl ring-1 ring-ink/5"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-mint/15 text-mint-dark">
                <TrendingUp size={16} />
              </span>
              <div>
                <p className="font-mono text-lg font-bold leading-none text-mint-dark">
                  +S$214k
                </p>
                <p className="text-[11px] text-slate-soft">revenue recovered</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <SectionSeam position="bottom" />
    </section>
  )
}
