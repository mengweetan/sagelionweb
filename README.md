# Cart Transformation — Website

Mobile-first, **statically pre-rendered** multi-page marketing site for **Cart
Transformation**, an e-commerce conversion studio in Singapore. Built with
`vite-react-ssg` (Vite + React + React Router), Tailwind CSS, Framer Motion, and Lucide
icons.

Every route is rendered to a real HTML file at build time (`renderToString`, no browser
needed), so each page ships with its own crawlable content, `<title>`, meta description,
and canonical URL — and the site still works with JavaScript disabled.

## Quick start

```bash
npm install
npm run dev      # local dev (SPA mode) at http://localhost:5173
npm run build    # pre-renders every route to static HTML in /dist
npm run preview  # preview the production build
```

## ⚠️ Edit these before launch

Almost everything you need to personalize lives in **one file**:

- `src/config/site.js` — phone number, business hours, email, address, social links,
  and the Google Maps embed. Placeholders are marked with `⚠️`.
- `public/logo-dark.png` / `logo-light.png` / `favicon.png` — generated from your
  uploaded logo. Re-export at higher resolution from source artwork if you need
  crisper edges at large sizes.
=======
- The logo is an inline SVG (`src/components/LogoMark.jsx`) — the orange X is
  fixed and the secondary stroke uses `currentColor`, so it renders charcoal on
  light surfaces and white on dark ones automatically. `public/logo.svg` is a
  standalone copy; `public/favicon.png` is the browser-tab icon.
- `index.html` — the `og:image` in the JSON-LD points to `og-image.jpg`, which
  doesn't exist yet. Add a 1200×630 social-share image at `public/og-image.jpg`
  before launch (this powers link previews on Facebook/LinkedIn/WhatsApp/iMessage).

Other content:

- `src/data/services.js` — services, pricing, feature points
- `src/data/testimonials.js` — replace placeholders with real, attributable reviews
- `src/data/images.js` — swap Unsplash placeholders for your own photos
- `src/pages/Contact.jsx` — connect the form `onSubmit` to your backend / Formspree
- Per-page titles/descriptions live in each page's `<Seo …>` (top of the JSX)
- `index.html` — the shared `LocalBusiness` JSON-LD (phone + geo + hours)
- `src/pages/Privacy.jsx` / `Terms.jsx` — replace placeholder legal text (PDPA review)

### Google Maps embed
The default embed is a keyless query-based map. For a precise pin, open Google Maps →
**Share → Embed a map**, copy the `src`, and paste it into `mapEmbedSrc` in `site.js`.

## Pages

`/` Home · `/services` · `/about` · `/contact` · `/privacy` · `/terms` · 404 fallback.

## Tech / structure

```
index.html              # shared head: fonts + LocalBusiness JSON-LD + no-JS fallback
src/
  main.jsx              # ViteReactSSG entry (pre-render + hydrate)
  routes.jsx            # route table: Layout + page children
  config/site.js        # single source of truth for NAP, hours, socials
  data/                 # services, testimonials, images
  components/           # Header, Footer, Layout (Outlet), Hero, cards, MapSection,
                        # CTA, Seo (per-route <Head>), motion wrappers
  pages/                # Home, Services, About, Contact, Privacy, Terms, NotFound
```

Per-route SEO (title, description, canonical, OG) is set with the `<Seo>` component in
each page, which renders into `<head>` via `vite-react-ssg`'s `Head` and is baked into
the static HTML at build time.

## Deploy to GitHub Pages (static)

The build pre-renders every route to its own HTML file in `/dist` (`index.html`,
`services.html`, `about.html`, …) plus a real `404.html`. GitHub Pages serves these
directly — extensionless URLs like `/services` resolve to `services.html`, and unknown
URLs fall back to `404.html`. No SPA redirect hacks needed.

### Option 1 — Automatic (recommended)
A workflow at `.github/workflows/deploy.yml` builds and publishes on every push to
`main`. One-time setup: in your repo, go to **Settings → Pages → Build and deployment →
Source = GitHub Actions**. Then push:

```bash
git push -u origin main
```

Every later push auto-deploys. With the custom domain, also add `cartXform.com` under
**Settings → Pages → Custom domain** (the included `public/CNAME` already sets this).

### Option 2 — Manual
```bash
npm run build          # outputs static files to /dist (incl. 404.html)
npx gh-pages -d dist   # or upload the dist/ folder however you like
```

### Domain / base path
- **Custom domain at root** (cartXform.com) → nothing to change. `base` stays `/`,
  `public/CNAME` points the domain, deep links work via the generated `dist/404.html`.
- **No custom domain** (served at `https://<user>.github.io/cart-transformations/`) →
  build with the subpath and remove the CNAME:
  ```bash
  rm public/CNAME
  VITE_BASE=/cart-transformations/ npm run build
  ```
  (In the workflow, uncomment the `VITE_BASE` env line instead.) The router reads the
  base automatically, so links keep working under the subpath.

### Other static hosts
`public/_redirects` (Netlify / Cloudflare Pages) and `vercel.json` (Vercel) are included
for SPA routing if you deploy there instead.
# cart-transformation-2
