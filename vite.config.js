// import { defineConfig } from 'vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // Allows top-level await
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext', // Ensures ESNext is supported
    },
  },
});