import { MapPin, Car, Train, Clock, ExternalLink } from 'lucide-react'
import { site } from '../config/site.js'
import { Reveal } from './PageTransition.jsx'

export default function MapSection() {
  return (
    <section className="bg-cloud py-16 md:py-24">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">
            <MapPin size={14} /> Find us
          </span>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Drop by our Braddell Tech studio
          </h2>
          <p className="mt-4 text-slate-soft">
            Centrally located in Toa Payoh — easy to reach by MRT or car. Book ahead and
            we'll have coffee ready for your strategy session.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Map */}
          <Reveal className="overflow-hidden rounded-3xl shadow-card ring-1 ring-ink/5">
            <iframe
              title={`Map to ${site.name}`}
              src={site.mapEmbedSrc}
              className="h-[340px] w-full md:h-[440px]"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>

          {/* Arrival info */}
          <Reveal delay={0.1} className="flex flex-col gap-5">
            <div className="card">
              <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                <MapPin size={18} className="text-flame" /> Address
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-ink">
                {site.address.line1}
                <br />
                {site.address.unit}
                <br />
                {site.address.city} {site.address.postal}
              </p>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-display text-sm font-semibold text-flame hover:text-flame"
              >
                Open in Google Maps <ExternalLink size={14} />
              </a>
            </div>

            <div className="card space-y-4">
              <div className="flex gap-3">
                <Train size={18} className="mt-0.5 shrink-0 text-flame" />
                <p className="text-sm text-slate-ink">
                  <span className="font-semibold text-ink">By MRT:</span> 7-min walk from
                  Braddell (NS9) or Toa Payoh (NS19) stations.
                </p>
              </div>
              <div className="flex gap-3">
                <Car size={18} className="mt-0.5 shrink-0 text-flame" />
                <p className="text-sm text-slate-ink">
                  <span className="font-semibold text-ink">Parking:</span> Visitor lots in
                  Braddell Tech (B1–B2). Take lift to Level 4, turn left for #04-11.
                </p>
              </div>
              <div className="flex gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-flame" />
                <p className="text-sm text-slate-ink">
                  <span className="font-semibold text-ink">Visits:</span> By appointment —{' '}
                  {site.hoursShort}.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
