import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://sportsurgenew.arkhangaming648.workers.dev',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
