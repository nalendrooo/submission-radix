import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
  },
  resolve: {
    alias: {
      '@/': '/src',
    },
  },
  server: {
    port: 4000, // Ubah port sesuai yang Anda inginkan
  },
});
