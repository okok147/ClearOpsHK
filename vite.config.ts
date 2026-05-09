import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Custom domain is clearopshk.com, so assets must resolve from the domain root.
  base: '/',
  plugins: [react()],
})
