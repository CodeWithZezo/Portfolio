import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    open: true, // Automatically open browser on dev
    port: 5173  // You can change the port if needed
  },
  build: {
    outDir: 'dist', // Output directory for production build
    sourcemap: true // Generate source maps
  }
})