import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
const { getTailwindConfig } = require('configs-brand-explorer/tailwind.config');

const site = process.env.SITE || 'explorer';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      manualChunks(id) {
        if (id.includes('node_modules')) {
          return 'vendor';
        }
        return 'page';
      },
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [
        require('postcss-import'),
        require('tailwindcss/nesting'),
        require('tailwindcss')({
          config: getTailwindConfig({
            purge: [
              '../components-vue3/src/**/*.{vue,js,ts,jsx,tsx}',
              './src/**/*.{vue,js,ts,jsx,tsx}',
            ],
            site: site,
          })
        }),
      ],
    }
  },
  define: {
    'process.env': {
      'SITE' : site,
    }
  }
});
