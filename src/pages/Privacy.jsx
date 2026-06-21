import { PageTransition } from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'
import { site } from '../config/site.js'

export default function Privacy() {
  return (
    <PageTransition>
      <Seo title='Privacy Policy' description='How Cart Transformation collects and uses your personal data under the Singapore PDPA.' />
      <section className="py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-4 text-4xl font-bold text-ink">Privacy Policy</h1>
          <p className="mt-3 text-sm text-slate-soft">Last updated: {new Date().getFullYear()}</p>

          <div className="prose mt-8 space-y-6 text-slate-ink">
            <p className="rounded-2xl bg-flame/8 p-4 text-sm text-slate-ink ring-1 ring-flame/15">
              ⚠️ Placeholder text. Replace this with a policy reviewed for the Singapore
              Personal Data Protection Act (PDPA) before going live.
            </p>

            <div>
              <h2 className="text-xl font-bold text-ink">What we collect</h2>
              <p className="mt-2 text-slate-soft">
                When you contact {site.name} or request a quote, we collect the details you
                provide — such as your name, email, phone number, and information about your
                store — solely to respond to your enquiry and deliver our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">How we use it</h2>
              <p className="mt-2 text-slate-soft">
                We use your information to reply to enquiries, prepare quotes, and provide
                the services you've requested. We do not sell your personal data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">Your rights under the PDPA</h2>
              <p className="mt-2 text-slate-soft">
                You may request access to, correction of, or withdrawal of consent for the
                personal data we hold. Contact us at{' '}
                <a href={`mailto:${site.email}`} className="font-semibold text-flame">
                  {site.email}
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-ink">Contact</h2>
              <p className="mt-2 text-slate-soft">
                {site.name}, {site.address.full}. Phone {site.phone.display}.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
