import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    tailwindcss(),react(),  ],

 build: {
    rollupOptions: {
      treeshake: false,          
    },
    minify: 'esbuild',           
    sourcemap: false,            
    chunkSizeWarningLimit: 1600  
  },
  assetsInclude: ['**/*.JSX'],   
})
 

 
 