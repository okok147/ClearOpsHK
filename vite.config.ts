import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // TODO: If the GitHub repo name changes, update this GitHub Pages base path.
  base: '/ClearOpsHK/',
  plugins: [react()],
})
