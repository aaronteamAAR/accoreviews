// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react'


export default defineConfig({
  output: 'server', 
  adapter: vercel(), 
  integrations: [tailwind(), react()],
  
});