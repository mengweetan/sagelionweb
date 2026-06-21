import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes.jsx'
import './index.css'

// vite-react-ssg renders every route in `routes` to static HTML at build time
// (renderToString in Node) and hydrates on the client. No `ReactDOM.render` needed.
export const createRoot = ViteReactSSG({
  routes,
  basename: import.meta.env.BASE_URL,
  ssgOptions: {
    dirStyle: 'nested', // clean URLs: /services/ -> dist/services/index.html
    includedRoutes(paths) {
      // Prerender every static path, drop splat/param routes, and ensure a 404 page.
      const statics = paths.filter((p) => !p.includes(':') && !p.includes('*'))
      return Array.from(new Set([...statics, '/404']))
    },
  },
})
