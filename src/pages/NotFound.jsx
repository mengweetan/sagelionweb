import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { PageTransition } from '../components/PageTransition.jsx'
import Seo from '../components/Seo.jsx'

export default function NotFound() {
  return (
    <PageTransition>
      <Seo title='Page Not Found' description="The page you're looking for doesn't exist." />
      <section className="grid min-h-[60vh] place-items-center py-20">
        <div className="container-x text-center">
          <p className="font-mono text-7xl font-bold text-flame/30">404</p>
          <h1 className="mt-4 text-3xl font-bold text-ink">This cart wandered off</h1>
          <p className="mx-auto mt-3 max-w-md text-slate-soft">
            The page you're looking for doesn't exist — but we can help you recover the ones
            that do.
          </p>
          <Link to="/" className="btn-primary mt-8">
            <Home size={18} /> Back to home
          </Link>
        </div>
      </section>
    </PageTransition>
  )
}
