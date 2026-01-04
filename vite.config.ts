import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/nlpd-compliance-checker/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

