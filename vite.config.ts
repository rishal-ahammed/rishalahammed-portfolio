import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.jpg'], // Ensure JPGs are treated as assets
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
