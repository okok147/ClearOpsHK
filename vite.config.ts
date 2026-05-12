import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // TODO: If you connect clearopshk.com as a registered custom domain, change this back to '/'.
  base: '/ClearOpsHK/',
  plugins: [react()],
})
