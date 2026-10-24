import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    rollupOptions: {
      // One-pager plus the two legal pages (served as /privacy and /voorwaarden via cleanUrls).
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        privacy: resolve(import.meta.dirname, 'privacy.html'),
        voorwaarden: resolve(import.meta.dirname, 'voorwaarden.html'),
        verwijderen: resolve(import.meta.dirname, 'verwijderen.html'),
      },
      output: {
        // Libraries rarely change; their own chunks stay cached across content deploys.
        // React gets its own chunk so the legal pages don't download GSAP.
        manualChunks(id) {
          if (/node_modules\/(gsap|@gsap)\//.test(id)) return 'gsap'
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react'
        },
      },
    },
  },
})
