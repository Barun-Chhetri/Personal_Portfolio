import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5180,
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three/')) {
            return 'three-core';
          }
          if (id.includes('node_modules/@react-three/')) {
            return 'react-three';
          }
          if (id.includes('node_modules/framer-motion/')) {
            return 'motion-vendor';
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'icons-vendor';
          }
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/scheduler/')
          ) {
            return 'react-vendor';
          }
        }
      }
    },
    chunkSizeWarningLimit: 700
  }
});
