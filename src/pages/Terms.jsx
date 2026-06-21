import { PageTransition } from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'
import { site } from '../config/site.js'

export default function Terms() {
  return (
    <PageTransition>
      <Seo title='Terms of Service' description='Terms of service for Cart Transformation e-commerce conversion services in Singapore.' />
      <section className="py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-4 text-4xl font-bold text-ink">Terms of Service</h1>
          <p className="mt-3 text-sm text-slate-soft">Last updated: {new Date().getFullYear()}</p>

          <div className="mt-8 space-y-6">
            <p className="rounded-2xl bg-flame/8 p-4 text-sm text-slate-ink ring-1 ring-flame/15">
              ⚠️ Placeholder text. Have these terms reviewed by a Singapore-qualified
              professional before publishing.
            </p>

            <div>
              <h2 className="text-xl font-bold text-ink">Services</h2>
              <p className="mt-2 text-slate-soft">
                {site.name} provides e-commerce conversion, development, and optimization
                services as described on this website and in individual project agreements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">Quotes & estimates</h2>
              <p className="mt-2 text-slate-soft">
                Free audits and estimates are provided for guidance. Final scope and pricing
                are confirmed in a written agreement before work begins.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">Governing law</h2>
              <p className="mt-2 text-slate-soft">
                These terms are governed by the laws of Singapore.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">Contact</h2>
              <p className="mt-2 text-slate-soft">
                Questions? Email{' '}
                <a href={`mailto:${site.email}`} className="font-semibold text-flame">
                  {site.email}
                </a>{' '}
                or call {site.phone.display}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
