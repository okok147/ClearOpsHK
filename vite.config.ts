import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // TODO: If you remove clearopshk.com and publish at /ClearOpsHK/, change this to '/ClearOpsHK/'.
  // Custom domain is clearopshk.com, so assets must resolve from the domain root.
  base: '/',
  plugins: [react()],
})
