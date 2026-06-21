import { Star, Quote } from 'lucide-react'

export default function TestimonialCard({ t }) {
  return (
    <figure className="card flex h-full flex-col">
      <div className="flex items-center justify-between">
        <span className="flex" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-flame text-flame" />
          ))}
        </span>
        <Quote size={22} className="text-flame/20" />
      </div>

      <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-ink">
        “{t.quote}”
      </blockquote>

      <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-mint/12 px-3 py-1 font-mono text-xs font-bold text-mint-dark">
        {t.metric}
      </div>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/5 pt-4">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-transform-gradient font-display text-sm font-bold text-white">
          {t.name.charAt(0)}
        </span>
        <div className="text-sm">
          <p className="font-semibold text-ink">{t.name}</p>
          <p className="text-slate-soft">
            {t.business} · {t.location}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}
