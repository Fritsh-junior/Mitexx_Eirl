import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),react(),  ],

build: {
    // Desactiva algunas optimizaciones agresivas de Rolldown que causan hangs
    rollupOptions: {
      treeshake: false,           // ← esto suele resolver el hang
    },
// Forzar minificación más simple
    minify: 'esbuild',
  },
  
  // Opcional pero recomendado si tienes muchos .jsx
  assetsInclude: ['**/*.JSX'],   // por si acaso
})
 