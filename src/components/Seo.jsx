import { Head } from 'vite-react-ssg'
import { useLocation } from 'react-router-dom'

const BRAND = 'Cart Transformation'
const SITE = 'https://cartXform.com'
const DEFAULT_DESC =
  'Cart Transformation helps Singapore e-commerce merchants recover abandoned carts, optimize checkout, and grow revenue. Book a free conversion audit today.'

// Renders into <head> and is captured during static pre-rendering, so each
// generated HTML file ships with its own title, description, and canonical URL.
export default function Seo({ title, description }) {
  const { pathname } = useLocation()
  const fullTitle = title
    ? `${title} | ${BRAND}`
    : `${BRAND} | E-commerce Conversion Experts in Singapore`
  const desc = description || DEFAULT_DESC
  const url = `${SITE}${pathname === '/' ? '' : pathname}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
    </Head>
  )
}
