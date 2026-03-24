
 import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'   // ← Cambia a SWC (más rápido y estable)
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],

  build: {
    rollupOptions: {
      treeshake: false,           // Muy importante para evitar hang en Vercel
    },
    minify: 'esbuild',            // Más estable que terser con Vite 8
    sourcemap: false,             // Desactiva sourcemap en producción (más rápido)
    chunkSizeWarningLimit: 1600   // Evita warnings innecesarios
  },

  // Optimizaciones recomendadas para Vercel
  optimizeDeps: {
    force: true
  }
})