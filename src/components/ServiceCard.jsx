import { Link } from 'react-router-dom'
import {
  ShoppingCart,
  RotateCcw,
  Filter,
  Code2,
  Gauge,
  Headphones,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react'

const iconMap = {
  ShoppingCart,
  RotateCcw,
  Filter,
  Code2,
  Gauge,
  Headphones,
}

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Sparkles
  const isFree = /free/i.test(service.price)

  return (
    <article className="card group flex flex-col hover:-translate-y-1 hover:shadow-cardHover">
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-flame/10 text-flame transition-colors group-hover:bg-flame group-hover:text-white">
          <Icon size={22} strokeWidth={2} />
        </span>
        <span
          className={`rounded-full px-3 py-1 font-mono text-xs font-bold ${
            isFree ? 'bg-mint/15 text-mint-dark' : 'bg-cloud-200 text-ink'
          }`}
        >
          {service.price}
        </span>
      </div>

      <h3 className="mt-5 text-xl font-bold text-ink">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-soft">
        {service.summary}
      </p>

      <ul className="mt-5 space-y-2">
        {service.points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm text-slate-ink">
            <Check size={16} className="mt-0.5 shrink-0 text-mint-dark" />
            {p}
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="mt-6 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-flame transition-colors hover:text-flame"
      >
        Request this service <ArrowRight size={15} />
      </Link>
    </article>
  )
}
