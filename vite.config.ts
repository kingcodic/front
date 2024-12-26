import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  define: {
    global: 'window', // Polyfill 'global' to 'window'
  },
  plugins: [react()],
})
