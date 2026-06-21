import AnimatedNumber from './AnimatedNumber.jsx'
import { Reveal } from './PageTransition.jsx'

const stats = [
  { value: 120, suffix: '+', label: 'SG merchants served' },
  { value: 31, prefix: '+', suffix: '%', label: 'avg. revenue recovered' },
  { value: 42, prefix: '−', suffix: '%', label: 'checkout drop-off' },
  { value: 14, label: 'day average turnaround' },
]

export default function StatBand() {
  return (
    <section className="border-y border-ink/5 bg-cloud">
      <div className="container-x grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="text-center lg:text-left">
            <p className="text-3xl font-bold text-ink sm:text-4xl">
              <AnimatedNumber value={s.value} prefix={s.prefix || ''} suffix={s.suffix || ''} />
            </p>
            <p className="mt-2 text-sm text-slate-soft">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
