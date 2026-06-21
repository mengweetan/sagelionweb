import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path:
//  - GitHub Pages project site (current setup, no custom domain yet):
//    https://cschong-cymk.github.io/cart-transformation/  -> base '/cart-transformation/'
//  - Once cartXform.com DNS is verified and added as a custom domain:
//    set VITE_BASE=/ (or just remove the override) and restore public/CNAME.
export default defineConfig({
  base: process.env.VITE_BASE || '/cart-transformation/',
  plugins: [react()],
})
