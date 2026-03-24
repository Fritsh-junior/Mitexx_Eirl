import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),react(),  ],

 build: {
    rollupOptions: {
      treeshake: false,           // Muy importante para evitar hang en Vercel
    },
    minify: 'esbuild',            // Más estable que terser con Vite 8
    sourcemap: false,             // Desactiva sourcemap en producción (más rápido)
    chunkSizeWarningLimit: 1600   // Evita warnings innecesarios
  },

  
  // Opcional pero recomendado si tienes muchos .jsx
  assetsInclude: ['**/*.JSX'],   // por si acaso
})
 

 
 