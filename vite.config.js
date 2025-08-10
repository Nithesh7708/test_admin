import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5176,
    host: true
  },
  build: {
    outDir: 'dist',
    base: '/admin/'  // Important: Set base path for assets
  }
});
